// ###Magic Eight Ball
// - Create an application that mimics a magic eight ball. Regardless of the question, the program will respond with a random prediction. Deploy the App to Digital Ocean and test it.
var net = require('net');
var port = 3000;

var server = net.createServer(function(c){
  console.log('client connected');
var messageBall = ['Don\'t ask', 'Better not to tell you now', 'Absolutely', 'I have no idea', 'The answer is yes', 'No', 'Take a break', 'It\'s gonna be a bad, bad day'];

  c.on('data', function(data){
    var question = data.toString().trim();

    var random = Math.floor((Math.random()*messageBall.length)+1);
    for (var i=0; i <messageBall.length; i++) {
      if (question !== null) {
        c.write(messageBall[random]);
      }
    }
  });

  c.on('end', function(){
    console.log('client disconnected');
  });

});

// ###BONUS:
// - The magic eight ball should detect and make sure that the client asked it a question. Check for a question mark!


server.listen(port, function(){
  console.log('Listen on ' + port);
});