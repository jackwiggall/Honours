
//https://stackoverflow.com/questions/42420531/what-is-the-best-way-to-manage-a-users-session-in-react

var UserProfile = (function() {
  var username = "Login";

  var getName = function() {
    if (username!=="Login")
    {
      console.log(username);
      return username;    // Or pull this from cookie/localStorage
    }else {
      return "Login";
    }
  };

  var setName = function(name) {
    username = name;
    // Also set this in cookie/localStorage
  };

  return {
    getName: getName,
    setName: setName
  }

})();

export default UserProfile;
