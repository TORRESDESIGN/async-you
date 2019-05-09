const async = require('async');
const http = require('http');

const url1 = process.argv[2];
const url2 = process.argv[3];

var requestOne = (url, callback) => {
	http.get(url1, res => {
		res.setEncoding('utf8');
		res.on('data', data => {
			callback(data);
		});
		res.on('end', end => {
			callback(end);
		});
	}).on('error', error => {
		callback(error);
	});
}

var requestTwo = (url, callback) => {
	http.get(url1, res => {
		res.setEncoding('utf8');
		res.on('data', data => {
			callback(data);
		});
		res.on('end', end => {
			callback(end);
		});
	}).on('error', error => {
		callback(error);
	});
}

async.series([
	
]);






/*----Doc: Async.Series(https://caolan.github.io/async/docs.html#series)---

*/