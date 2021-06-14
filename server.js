var express = require('express');
var app = express();
var router = require('./router/main')(app);
// 라우터 모듈인 main.js를 불러와서 app에 전달해준다

app.set('views', __dirname + '/views');
// 서버가 읽을 수 있도록 html의 위치를 정의해줌

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
// 서버가 html 랜더링을 할 때, EJS엔진을 사용하도록 설정
app.use(express.static('public'));

var server = app.listen(3000, function() {
    console.log("Express server has started on port 3000");
});
