function log(req, res, next) {
    console.log(`Logging Request... ${req.method} ${req.url}`);
    next();
}

module.exports = log;