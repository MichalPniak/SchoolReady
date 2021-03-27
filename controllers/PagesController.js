exports.home = (req, res) => {
    res.render('home', {
        formMessage: req.flash('form'),
        formMessageError: req.flash('form-error')
    });
}