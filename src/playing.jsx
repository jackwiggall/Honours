import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@aws-amplify/ui-react";
import Header from './header.jsx';

import { pagesByGameID } from './graphql/queries'; //get pages from gameID
import { generateClient } from 'aws-amplify/api';

function Play() {

    const [gTitle, setgTitle] = useState(''); //game title
    const [pTitle, setpTitle] = useState(''); //page title
    const [pText, setpText] = useState(''); //page text
    const [linkText, setLinkText] = useState(''); //text for link
    const [linkID, setLinkID] = useState(0); //link to what

    var gameID = useRef("");
    var pageNum = useRef(0);
    var run = useRef(false);
    var gameDetails = useRef([{}]);

  useEffect(()=>{
    //game set locally, pull
      if (localStorage.getItem("gameDetails")!==null && run.current === false) {

        run.current = true;

        gameDetails.current = JSON.parse(localStorage.getItem("gameDetails"));

        setpTitle(gameDetails.current[pageNum.current].title);
        setpText(gameDetails.current[pageNum.current].text);
        setLinkText(gameDetails.current[pageNum.current].linkText);
        setLinkID(gameDetails.current[pageNum.current].linkID);
        //console.log("found locally");

        if (localStorage.getItem("infoDets")!==null) {
          var gameInfo = JSON.parse(localStorage.getItem("infoDets"));
          setgTitle(gameInfo.title);
        }else {
          setgTitle("Title not found");
        }

      } else if (run.current===false) {
        //game not set locally, download it
        run.current = true;
        //set other fields to error
        if (localStorage.getItem("infoDets")!==null) {
          var gameInfo = JSON.parse(localStorage.getItem("infoDets"));
          setgTitle(gameInfo.title);
          gameID.current = gameInfo.gameID;

        //QUERY TO GET PAGES BY GAMEID
        const client = generateClient();
        const results = client.graphql({ query: pagesByGameID, variables: {gameID: gameID.current}})
        .then(function(v) { // `delay` returns a promise
          //console.log(v.data.pagesByGameID.items); // Log the value once it is resolved
          var localDetails = v.data.pagesByGameID.items;
          //console.log(localDetails);
            //gameDetails.current = ;
            //NEED TO SORT ORDER OF RESULTS

            /*for (var i=0; i < gameDetails.current.length; i++) {
              //need to check if local id

           }*/

           //sort the order into page number
            localDetails.sort((a, b) => a.localID - b.localID);
            gameDetails.current = localDetails;

            //console.log(gameDetails.current);
            localStorage.setItem("gameDetails",JSON.stringify(gameDetails.current));
            setpTitle(gameDetails.current[0].title);
            setpText(gameDetails.current[0].text);
            setLinkText(gameDetails.current[0].linkText);
            setLinkID(gameDetails.current[0].linkID);

        }) //change limit once working
        .catch(function(v) {
          // Or do something else if it is rejected
          // (it would not happen in this example, since `reject` is not called).
          console.log(v);
          setpTitle("Error");
          setpText("An error occured, this is most likely to do with the database query.");
          setLinkText("Exit from the top");
          setLinkID(0);
        });

      }else {
        setgTitle("Error"); //cant find title
        setpTitle("Error");
        setpText("Can't find game information, did you clear local storage?");
        setLinkText("Exit from the top");
        setLinkID(0);
      }

        //localStorage.setItem("gameDetails",JSON.stringify(results));
      }
    }, []); // empty array means only once

    const handleLink = () => {

        //e.preventDefault();
        //console.log("change page");

        if (gameDetails.current!==[{}]) {
          //check loaded information before changing

          pageNum.current = linkID;
          setpTitle(gameDetails.current[pageNum.current].title);
          setpText(gameDetails.current[pageNum.current].text);
          setLinkText(gameDetails.current[pageNum.current].linkText);
          setLinkID(gameDetails.current[pageNum.current].linkID);
        }
    }

  return (
        <>
        <div className='bground'>
        <Header link={"../search/info"} location={"tB / Library / Play"} />

          <div className='box'>
              <h3 className='mr-2 text-center'>{gTitle}</h3> {/*Game Title*/}
          </div>

          <div className='box'>
              <h3 className='mr-2'>{pTitle}</h3>
              <h5 className='mr-2'>{pText}</h5>
          </div>

          <form >
            <Button variation="primary" className='btn w-100 my-2 my-sm-0 mr-1' type='button' onClick={handleLink}>{linkText}</Button>
          </form>

        </div>
        </>
      )
}
export default Play;
