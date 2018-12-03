const express= require('express');

var app= express();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/result',urlencodedParser, function (req, res){
	response={
		first_name: 'ashish',
		last_name: 'gupta',
	}
	console.log(response);
	res.sendFile(__dirname + '/pages/result.html')
	res.end(JSON.stringify(response));
	
	
});
app.get('/', function(req,res)
{
	res.sendFile(__dirname + '/pages/pages.html');
});
app.get('/dumb', function(req, res)
{
	res.send('hey you are dumb');
})





app.listen(8080, function()
{
		console.log('server started')
});