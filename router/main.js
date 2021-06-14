module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index.html');
    });
    app.get('/about', function(req, res) {
        res.render('about.html');

    });
    // 만약 여러개의 콜백함수를 사용한다면 next 함수를 호출하여
    //  다음번 콜백 함수로 넘어갈 수 있다
}