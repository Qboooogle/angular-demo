process.title = 'angulardemo';
var express = require('express');
var app = express();
app.use(express.bodyParser());
app.use(express.static(__dirname));
app.get('/getbooks', function(req, res) {
	res.json([
		{name : "AngularJS In Action" , "price" : 30},
		{name : "Bootstrap In Action" , "price" : 28},
		{name : "Python In Action" ,    "price" : 50}
	]);
});
app.listen(8083 , function() {
    console.log('angular demos run at 8083');
});
