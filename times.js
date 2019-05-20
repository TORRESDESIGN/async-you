const async = require('async');
const hostname = process.argv[2];
const port = process.argv[3];

console.log(hostname); //localhost
console.log(port); //9345

var postIt = (callback) => {
	var options = {
		url: 
	}
}

async.series() {

}


async.times(5, i, () => {

});

/*-----resource: https://caolan.github.io/async/docs.html#times

*/

// reference POST code

var http = require('http')
   , async = require('async');
 async.map(['cat', 'meerkat', 'penguin'], function(item, done){
   var opts = {
     hostname: 'http://httpbin.org',
     path: '/post',
     method: 'POST'
   };
   var body = '';
   var req = http.request(opts, function(res){
     res.on('data', function(chunk){
       body += chunk.toString();
     });
     res.on('end', function(){
      return done(null, body);
     });
   });
   req.write(item);
   req.end();
 },
 function(err, results){
   if (err) return console.log(err);
   // results is an array of the response bodies in the same order
 });
 
*/
 