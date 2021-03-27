const users = require('../models/users');

// Dodanie nowego użytkownika
exports.store = (req, res) => {
    let { firnam, lasnam, pesel_, ur_dat } = req.body;

    if (!firnam) {
        req.flash('form-error', 'Podaj imię');
        res.redirect('/');
    } else if (!lasnam) {
        req.flash('form-error', 'Podaj nazwisko');
        res.redirect('/');
    } else if (!pesel_) {
        req.flash('form-error', 'Podaj PESEL');
        res.redirect('/');
    } else if (!ur_dat) {
        req.flash('form-error', 'Podaj datę urodzenia');
        res.redirect('/');
    } else {
        users.create({
            firnam: firnam,
            lasnam: lasnam,
            pesel_: pesel_,
            ur_dat: ur_dat,
        }).then(() => {
            req.flash('form', 'Nowy uczeń został dodany.');
            res.redirect('/');
        });
    }
};