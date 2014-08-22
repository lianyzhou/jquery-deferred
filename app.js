var express = require('express'),
	path = require("path");


var app = express();

app.set('port', process.env.PORT  || 9092);

app.use(express.bodyParser());
app.use(express.compress());
app.use(express.methodOverride());

app.use(app.router);

app.use('/',express.static(__dirname));

app.get('/userinfo' , function(req,res) {
	res.json(200 , {
		username : "周连毅"
	});
});

app.get('/weather' , function(req,res) {
	res.json(200 , {
		city : "济南",
		temparature:"28 ~ 20℃",
		airquality:"49 优"
	});
});

app.get('/news' , function(req,res) {
	res.json(200 , [
	    {text :"Node.js异步处理CPU密集型任务的新思路" , href:"http://www.infoq.com/cn/articles/new-idea-of-nodejs-asynchronous-processing-tasks"},
	    {text :"当IoC遇见了Node.js" , href:"http://www.infoq.com/cn/articles/ioc-meet-nodejs"},
	    {text :"快乐Node码农的十个习惯" , href:"http://www.infoq.com/cn/articles/node.js-habits"},
	    {text :"Node.js软肋之回调大坑" , href:"http://www.infoq.com/cn/articles/nodejs-callback-hell"},
	    {text :"Node.js V0.12新特性之给子进程的同步API" , href:"http://www.infoq.com/cn/articles/nodejsv0.12-execsync-a-synchronous-api-for-child-processes"},
	    {text :"Node.js V0.12新特性之性能优化" , href:"http://www.infoq.com/cn/articles/nodejs-v012-optimize-performance"},
	    {text :"Node.js V0.12新特性之在单进程中跑多个实例" , href:"http://www.infoq.com/cn/articles/nodejs-v012-new-characteristic"},
	    {text :"Node.js V0.12新特性之Cluster轮转法负载均衡" , href:"http://www.infoq.com/cn/articles/nodejs-cluster-round-robin-load-balancing"},
	    {text :"Node.js软肋之CPU密集型任务" , href:"http://www.infoq.com/cn/articles/nodejs-weakness-cpu-intensive-tasks"}
	]);
});

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});