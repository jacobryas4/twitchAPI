// Client ID = ocrhvfvvshkhya8xw27d704qrj66yc
// Array of streamers:
// ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
// Basic URL: https://api.twitch.tv/kraken/streams/ESL_SC2?client_id=ocrhvfvvshkhya8xw27d704qrj66yc


$(document).ready(function() {


// Array of streamers
var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];


function getStatus(user) {

  // create API call
  var url = "https://api.twitch.tv/kraken/streams/" + user + "?client_id=ocrhvfvvshkhya8xw27d704qrj66yc";
  var jsonData;

  // create user ID
  var userID = "'" + user + "'";
  console.log(userID);
  
  
  $.ajax({
    type: 'GET',
    url: url,
    dataType: 'json',
    success: function(data) {
      jsonData = data;
      
      
      // if online, add online class
      if(jsonData.stream !== null) {
        $("div[id=" + userID + "]").addClass("online");
        $("div[id=" + userID + "]").append(jsonData.stream.game);
        console.log(data);
      } 
    }
  });
  
}
streamers.forEach(getStatus);

});