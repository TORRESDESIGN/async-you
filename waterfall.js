const async = require('async');
const fs = require('fs');
let file = process.argv[2];
const http = require('http');

var fetchFile = callback => {
	fs.readFile(file, (err, data) => {
		if (err) return callback(err);
		callback(null, data.toString());
	});
};

var getData = (url, callback) => {
	http.get(url, res => {
		res.setEncoding('utf8');
		//stream object(emit events)
		//[data, error, end]
		res.on('data', data => {
			if (data) {
				callback(null, data.toString())
			}
		});
		res.on('end', () => {

		});
	}).on('error', (err) => {
		callback(null, err);
	})
};

var processData = (err, result) => {
	if (err) {
		return console.error(err);
	} else {
		console.log(result);
	}
};

async.waterfall([
	fetchFile,
	getData],
	processData
);


/*----alternate solution--------

var fs = require('fs')
  , http = require('http')
  , async = require('async');

async.waterfall([
  function(done){
    fs.readFile(process.argv[2], function(err, data){
      if (err) return done(err);
      done(null, data)
    });
  },

  function(data, done){
    var body = '';
    http.get(data.toString().trimRight(), function(res){
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
], function done(err, result){
  if (err) return console.error(err);
  console.log(result);
});

*/