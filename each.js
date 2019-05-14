const http = require('http');
const async = require('async');

const urlArray = [ process.argv[2], process.argv[3] ];

async.each(urlArray, (url, done) => {
	var req = http.get(url, res => {
		res.setEncoding('utf8');
		res.on('data', data => {
		});
		res.on('end', () => {
			done();
		})
	}).on('error', error => {
		
	});
	req.write(url);
	req.end();
},
	err => {
		if (err) {
			console.log(err);
		}
});


/*------------Alternative solution---------------

var http = require('http')
  , async = require('async');

async.each(process.argv.slice(2), function(item, done){
  http.get(item, function(res){
    res.on('data', function(chunk){
    });

    res.on('end', function(){
      done(null);
    });
  }).on('error', function(err){
    done(err);
  });
},
function(err){
  if(err) console.error(err);
});

*/