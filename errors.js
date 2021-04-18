

module.exports = function (app) {
    app.use(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

// development error handler
// will print stacktrace
        app.use(function (err, req, res, next) {
            res.status(err.status || 500);
            res.json({success: false, message: err.message, error: err.error});

        });
};