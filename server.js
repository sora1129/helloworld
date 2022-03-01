/*
const http = require('http'); //httpモジュールの読み込み（決まり文句みたいなもの）
	fs = require('fs');
const settings = require('./settings');
console.log(settings);

const server = http.createServer((req, res) => { // サーバーを作って引数を渡す
	fs.readFile(__dirname + '/public_html/hello.html', 'utf-8', function(err, data) {
		if (err) {
			res.statusCode = 404;
			res.setHeader('Content-Type', 'text/plain');
			return res.end("not found!");
		}
		// 上手くファイルが読み込まれた時の処理
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html'); 
		res.end(data);
	});
});

// 3000 番ポートでリクエストを待機し、受信したときにログ出力するコールバック関数
server.listen(settings.port, settings.hostname, () => {
  console.log(`Server running at http://${settings.hostname}:${settings.port}/`);
});
*/