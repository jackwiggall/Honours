import React from 'react';
import { Button } from "@aws-amplify/ui-react";
import { useNavigate } from 'react-router-dom';

import { generateClient } from 'aws-amplify/api';
import { createGameInfo, createPages } from './graphql/mutations';
import { gameInfosByAccountsID } from './graphql/queries';

const client = generateClient();

function PublishExtra() {

  if (localStorage.getItem("id")!==null&&localStorage.getItem("storyDetails")!==null&&localStorage.getItem("storyNum")!==null) {
    const accountsID = localStorage.getItem("id");
    var gameID = ""; //need to get once game is made

    var newDetails = JSON.parse(localStorage.getItem("storyDetails"));
    var pageDetails = JSON.parse(localStorage.getItem("pageDetails"));
    var storyNum = Number(localStorage.getItem("storyNum"));
    pageDetails = pageDetails[storyNum];

    //set form data
    const title = String(newDetails[storyNum].title);
    const shortDesc = String(newDetails[storyNum].shortDesc);
    const longDesc = String(newDetails[storyNum].longDesc);
    //const genre = String(newDetails[storyNum].genre);
    //genre not defined in db yet

    //creates game in table
    client.graphql({
      query: createGameInfo,
      variables: {
        input: {
          accountsID : accountsID,
          title : title,
          shortDesc : shortDesc,
          longDesc : longDesc,
        },
      },
    }).then(function(v) {
    //gets gameid from newly created game in table
    client.graphql({
      query: gameInfosByAccountsID, variables: {accountsID : accountsID}
    })
    .then(function(v) { // `delay` returns a promise
      v.data.gameInfosByAccountsID.items.forEach(x => {
        //check if current game is same as just created for id

        //need to make title unique to user to ensure easier finding cause currently if all values are equal can page to one
        if (x.title===title&&x.shortDesc===shortDesc&&x.longDesc===longDesc) {
          gameID = x.id;
          //found matching id
        }
      })
      //check if gameid is found
      if (gameID!=="") {
        //once game is created, create pages for the game
        pageDetails.forEach(x => {
          client.graphql({
            query: createPages,
            variables: {
              input: {
                gameID : gameID,
                localID : x.id,
                title : x.title,
                text : x.text,
                linkText : x.linkText,
                linkID : x.linkID,
              },
            },
          }).then(function(v) { // `delay` returns a promise
            //worked, pages should exist
          })
          .catch(function(v) {
            // Or do something else if it is rejected
            // (it would not happen in this example, since `reject` is not called).
            console.log(v);
          });
        })
      }//end of if gameID
    })//gameResults error
    .catch(function(v) {
      // Or do something else if it is rejected
      // (it would not happen in this example, since `reject` is not called).
      console.log(v);
    })
  })//create game error
  .catch(function(v) {
    // Or do something else if it is rejected
    // (it would not happen in this example, since `reject` is not called).
    console.log(v);
  });

  }else {

    console.log("error");
  }

}

function Publish() {

  const nav = useNavigate();
  var pagesExist = false;

  var pageDetails = JSON.parse(localStorage.getItem("pageDetails"));
  var storyNum = Number(localStorage.getItem("storyNum"));
  pageDetails = pageDetails[storyNum];

  if (pageDetails.length!==undefined) {
    pagesExist = true;
  }

  const handleSubmit = (e) => {

      e.preventDefault();
      //ATTEMPT PUBLISH PROJECT
      if (pagesExist) {
        PublishExtra();
        //removes pages and stories from what is just been published)

        var storyDetails = JSON.parse(localStorage.getItem("storyDetails"));
        pageDetails = JSON.parse(localStorage.getItem("pageDetails"));

        storyDetails.splice(storyNum, 1);
        pageDetails.splice(storyNum, 1);

        for (var i = storyNum; i < storyDetails.length; i++) {
          //change all ID's down from deleted page
          storyDetails[i].localID--;
        }
        //need to cut out current page, shift all down one
        if (storyDetails[0]!==undefined) {
          localStorage.setItem("storyDetails",JSON.stringify(storyDetails));
          localStorage.setItem("pageDetails",JSON.stringify(pageDetails));
        }else {
          localStorage.removeItem("storyDetails");
          localStorage.removeItem("pageDetails");
        }

        nav('../library'); // Redirect to library
      } else {
        //No pages to publish!
      }
    }

return (
  <>
    <Button variation="primary" className='w-100 my-2 my-sm-0 mr-1' type='button' onClick={handleSubmit}>Publish</Button>
  </>
)
}

export default Publish;
