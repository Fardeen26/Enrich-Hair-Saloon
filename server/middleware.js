module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.redirect(process.env.LOGIN_PAGE_URL);
    }
    next();
}

module.exports.validateBooking = (schema) => async (req, res, next) => {
    try {
        console.log("aaaaaaa gya" + req.body);
        const parsedBody = await schema.parseAsync(req.body);
        console.log(parsedBody)
        req.body = parsedBody;
        next();
    } catch (err) {
        res.status(400).json({ msg: err.errors[0].message })
    }
}