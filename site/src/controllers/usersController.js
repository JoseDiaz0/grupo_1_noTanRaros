let controller = {
    /* Vistas */
    login: (req, res) => {
        res.render('users/login.ejs', { title: 'Login | NoTanRaros' });
    },
    register: (req, res) => {
        res.render('users/register.ejs', { title: 'Register | NoTanRaros' });
    },
    profile: (req, res) => {
        res.render('users/profile.ejs', { title: 'Perfil | NoTanRaros' });
    },
    stor: (req, res) => {
        let user = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email
        }
        res.send(user)
    }
}

module.exports = controller;