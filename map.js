const async = require('async');
const http = require('http');

async.map([ process.argv[2], process.argv[3] ], (url, done) => {
	var body = [];
	http.get(url, res => {
		res.setEncoding('utf8');
		res.on('data', data => {
			body.push(data);
			done(null, data);
		});
	}).on('error', err => {
		done(err, null);
	});
},
	(err, results) => {
		if (err) {
			console.error(err);
		} else {
			console.log(results);
		}
})

/*------------Alternate Solution--------------------

var http = require('http')
      , async = require('async');

    async.map(process.argv.slice(2), function(url, done){
      var body = '';
      http.get(url, function(res){
        res.on('data', function(chunk){
          body += chunk.toString();
        });

        res.on('end', function(){
         return done(null, body);
        });
      });
    },
    function done(err, results){
      if (err) return console.log(err);
      // results is an array of the response bodies in the same order
      console.log(results);
    });


*/