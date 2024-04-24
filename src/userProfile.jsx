import { generateClient } from 'aws-amplify/api';
import { getAccounts } from './graphql/queries';
//https://blog.logrocket.com/using-localstorage-react-hooks/

//https://stackoverflow.com/questions/42420531/what-is-the-best-way-to-manage-a-users-session-in-react
var UserProfile = (function() {
  var username = "Login";
  var id = "Empty";

  var getName = function() {

    if (localStorage.getItem("name")!==null) {
      return localStorage.getItem("name");    // Or pull this from cookie/localStorage
    }else {
      return "Login";
    }

  };

  var setName = function(name) {
    username = name;

    if (name !== "Login") {
       //needs validated
      localStorage.setItem("name", name);
      localStorage.setItem("id", id);
    } else {
      localStorage.removeItem("name");
      localStorage.removeItem("id");
    }
  };

  var setID = function(userID) {
    id = userID;

    if (id !== "Empty") {
       //needs validated
      localStorage.setItem("id", id);
    } else {
      localStorage.removeItem("id");
    }
  };

  var getID = function() {

    if (localStorage.getItem("id")!==null) {
      return localStorage.getItem("id");
    } else {
      return "Error";
    }
  };

  var searchID = function() {
    const client = generateClient();
    client.graphql({ query: getAccounts, variables: {username: username},
    }).then(function(v) { // `delay` returns a promise
      //worked, pages should exist
      setID(v.data.getAccounts.id);
    })
    .catch(function(v) {
      //error
    });
  };

  return {
    getName: getName,
    setName: setName,
    setID: setID,
    getID: getID,
    searchID: searchID
  }

})();

export default UserProfile;
