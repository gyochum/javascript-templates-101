var express = require('express');
var app = express();
var engine = require('mustache-express');

app.engine('html', engine());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function(request, response){
	var data = {
		header: 'hello mustache',
		people: [
			{
				firstName: 'gary',
				lastName: 'yochum',
				active: false,
				fullName: function(){
					return this.firstName + ' j ' + this.lastName;
				}
			},
			{
				firstName: 'sara',
				lastName: 'yochum',
				active: true,
				fullName: function(){
					return this.firstName + ' e ' + this.lastName;
				}
			}
		]
	};
	
	data.decorate = function(){
		return function(text, render){
			return '<strong>' + render(text) + '</strong>';
		};
	};
	
	response.render('default',  data);
});

app.listen(3000);
