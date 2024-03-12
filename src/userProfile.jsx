import { useState } from "react";
//https://blog.logrocket.com/using-localstorage-react-hooks/

//https://stackoverflow.com/questions/42420531/what-is-the-best-way-to-manage-a-users-session-in-react
var UserProfile = (function() {
  var username = "Login";

  var getName = function() {

    if (localStorage.getItem("name")!==null) {
      if (username!=="Login")
      {
        return username;    // Or pull this from cookie/localStorage
      }else {
        return "Login";
      }
    }else {
      return "Login";
    }

  };

  var setName = function(name) {
    username = name;

    if (name !== "Login") {
       //needs validated
      localStorage.setItem("name", name);
    } else {
      localStorage.removeItem("name");
    }

    // Also set this in cookie/localStorage
  };

  return {
    getName: getName,
    setName: setName
  }

})();

export default UserProfile;
