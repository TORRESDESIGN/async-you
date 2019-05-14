const async = require('async');
const http = require('http');

async.map([ process.argv[2], process.argv[3] ], (url, done) => {
	let body = [];
	let req = http.get(url, res => {
		res.setEncoding('utf8');
		res.on('data', data => {
			body.push(data);
		});
		res.on('end', () => {
			done();
		})

	}).on('error', (error) => {
	
	});
	req.write(body);
	req.end();
},
	(err, res) => {
		if (err) {
			console.error(err);
		} else {
			console.log(res);
		}
})