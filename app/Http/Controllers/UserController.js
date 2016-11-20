'use strict'

const User = use('App/Model/User')
const Hash = use('Hash')

class UserController {

    * login(req, res) {
        yield res.sendView('login');
    }

    * loginSubmit(req, res) {
        try{
            var post = req.post();
            yield req.auth.attempt(post.username, post.password);
            res.redirect('/');
        }catch(e){
            yield req
                .withOut('password')
                .andWith({ errors: [{
                    message:'Bad credentials'
                }] })
                .flash()
            res.redirect('back')
            console.log(e);
            return
        }
    }

    * logout(req, res) {
        yield req.auth.logout();
        res.redirect('/');
    }
}

module.exports = UserController
