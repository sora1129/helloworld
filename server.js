const http = require('http'); //httpモジュールの読み込み（決まり文句みたいなもの）

const hostname = '127.0.0.1'; // ホスト名を指定
const port = 3000; // ポートを指定

const server = http.createServer((req, res) => { // サーバーを作って引数を渡す
  res.statusCode = 200; //ステータスコードを設定（200：OK リクエストが正常に処理できた）
  res.setHeader('Content-Type', 'text/plain'); //コンテンツタイプを持つレスポンスHTTPヘッダーを設定
  res.end('Hello World'); // リクエストの送信を終了
});

// 3000 番ポートでリクエストを待機し、受信したときにログ出力するコールバック関数
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});