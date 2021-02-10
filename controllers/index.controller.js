

exports.index = function(req, res, next) {
    res.render('index', { title: 'vinylme (controllers/index.js)' });
};
/*
exports.submit_email = function(req, res, next) {
    console.log("submit_email:", req.body.submit_lead);
    res.redirect("/");
};
*/