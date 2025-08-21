let dummyData = require('../../data/dummyData');
const dummy = dummyData.dummyData;

module.exports = function (router) {

    router.get('/filters/', function (req, res) {
        res.render('/filters/index', {
            // myData: req.session.myData
        });
    });

    router.post('/filters/', function (req, res) {

        res.redirect(301, '/' + version + '/errors/not-eligible')

    });



}