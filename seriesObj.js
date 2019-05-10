const async = require('async');
const http = require('http');

const url1 = process.argv[2];
const url2 = process.argv[3];

var requestOne = (callback) => {
	http.get(url1, res => {
		res.setEncoding('utf8');
		res.on('data', data => {
			callback(null, data);
		});
	}).on('error', error => {
		callback(error, null);
	});
}

var requestTwo = (callback) => {
	http.get(url2, res => {
		res.setEncoding('utf8');
		res.on('data', data => {
			callback(null, data);
		});
	}).on('error', error => {
		callback(error, null);
	});
}

var finish = (err, res) => {
	if (err) {
		console.error(error.message);
	} else {
		console.log(res);
	}
}

//-----------------Object method results
async.series({
	requestOne: requestOne,
	requestTwo: requestTwo},
	finish
);

/* ----------------array method results
async.series([
	requestOne,
	requestTwo],
	finish
);
*/



/*----Doc: Async.Series(https://caolan.github.io/async/docs.html#series)---

--------------Alternate Solution---------

var http = require('http')
  , async = require('async');

async.series({
  requestOne: function(done){
    fetchURL(process.argv[2], done);
  },
  requestTwo: function(done){
    fetchURL(process.argv[3], done);
  }
},
function done(err, result){
  if (err) return console.error(err);
  console.log(result);
});


function fetchURL(url, done) {
  var body = '';
  http.get(url, function(res){
    res.on('data', function(chunk){
      body += chunk.toString();
    });

    res.on('end', function(chunk){
      done(null, body);
    });
  }).on('error', function(e){
    done(e);
  });
}

*/