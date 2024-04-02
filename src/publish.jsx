import React from 'react';
import { Button } from "@aws-amplify/ui-react";
import { useNavigate } from 'react-router-dom';

import { generateClient } from 'aws-amplify/api';
import { createGameInfo, createPages } from './graphql/mutations';
import { gameInfosByAccountsID } from './graphql/queries';

const client = generateClient();

function PublishExtra() {

  if (localStorage.getItem("id")!==null&&localStorage.getItem("storyDetails")!==null&&localStorage.getItem("storyNum")!==null&&localStorage.getItem("pageDetails")!==null) {
    const accountsID = localStorage.getItem("id");

    var newDetails = JSON.parse(localStorage.getItem("storyDetails"));
    var pageDetails = JSON.parse(localStorage.getItem("pageDetails"));
    var storyNum = Number(localStorage.getItem("storyNum"));

    //set form data
    const title = newDetails[storyNum].title;
    const shortDesc = newDetails[storyNum].shortDesc;
    const longDesc = newDetails[storyNum].longDesc;
    const genre = newDetails[storyNum].genre;
    //console.log(`${accountsID}, ${title}, ${shortDesc}, ${longDesc}, ${genre}`);

    /*const results = client.graphql({
      query: createGameInfo,
      variables: {
        input: {
          accountsID : accountsID,
          title : title,
          shortDesc : shortDesc,
          longDesc : longDesc,
        },
      },
    });*/
    const results = client.graphql({
      query: gameInfosByAccountsID, variables: {accountsID : accountsID}
    })
    .then(function(v) { // `delay` returns a promise
      console.log(v); // Log the value once it is resolved
      v.data.gameInfosByAccountsID.items.forEach(x => {
        console.log(x);
        //check if current game is same as just created for id
      })  
    })
    .catch(function(v) {
      // Or do something else if it is rejected
      // (it would not happen in this example, since `reject` is not called).
      console.log("error");
    });
      /*results.data.

      //if game is published will need to get gameID
    /*pageDetails.forEach(x => {
      console.log(x);
      /*const results = client.graphql({
        query: createPages,
        variables: {
          input: {
            gameID :,
            localID : x.id,
            title : x.title,
            text : x.text,
            linkText : x.linkText,
            linkID : x.linkID,
          },
        },
      });
    })*/


  }else {

    console.log("error");
  }

}

function Publish() {

  const nav = useNavigate();

  const handleSubmit = (e) => {

      e.preventDefault();
      //ATTEMPT PUBLISH PROJECT
      PublishExtra();
      //removes all pages and stories (need to change to remove single game)
      //localStorage.removeItem("storyDetails");
      //localStorage.removeItem("pageDetails");
      //localStorage.removeItem("tagList");
      nav('../library'); // Redirect to library
    }

return (
  <>
    <Button variation="primary" className='w-100 my-2 my-sm-0 mr-1' type='button' onClick={handleSubmit}>Publish</Button>
  </>
)
}

export default Publish;
