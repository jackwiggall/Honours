import React from 'react';
import { Button } from "@aws-amplify/ui-react";
import { useNavigate } from 'react-router-dom';


import { generateClient } from 'aws-amplify/api';
import { createGameInfo } from './graphql/mutations';

const client = generateClient();

function PublishExtra() {

  if (localStorage.getItem("id")!==null && localStorage.getItem("storyDetails")!==null && localStorage.getItem("storyNum")!==null) {
    const accountsID = localStorage.getItem("id");

    var newDetails = JSON.parse(localStorage.getItem("storyDetails"));
    var storyNum = Number(localStorage.getItem("storyNum"));

    //set form data
    const title = newDetails[storyNum].title;
    const shortDesc = newDetails[storyNum].shortDesc;
    const longDesc = newDetails[storyNum].longDesc;
    const genre = newDetails[storyNum].genre;
    console.log(`${accountsID}, ${title}, ${shortDesc}, ${longDesc}, ${genre}`);


    const results = client.graphql({
      query: createGameInfo,
      variables: {
        input: {
          accountsID : accountsID,
          title : title,
          shortDesc : shortDesc,
          longDesc : longDesc,
        },
      },
    });
  }else {

    //console.log("error");
  }

}

function Publish() {

  const nav = useNavigate();

  const handleSubmit = (e) => {

      e.preventDefault();
      //ATTEMPT PUBLISH PROJECT
      PublishExtra();
      localStorage.removeItem("storyDetails");
      localStorage.removeItem("pageDetails");
      localStorage.removeItem("tagList");
      nav('../library'); // Redirect to library
    }

return (
  <>
    <Button variation="primary" className='w-100 my-2 my-sm-0 mr-1' type='button' onClick={handleSubmit}>Publish</Button>
  </>
)
}

export default Publish;
