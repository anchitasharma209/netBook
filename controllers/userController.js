const User = require('../models/users')
//profile
module.exports.profile = function(req,res){
    //return res.end('<h1>User Profile</h1>')
   return res.render('user_profile',{
        tittle:"User Profile"
    })
}
//signup
module.exports.signUp = function(req,res){
    console.log(req.body)
    console.log(req.cookies);
    return res.render('signup',{
        tittle:"Signup"
    })  
}
//signin
module.exports.signIn = function(req,res){
     console.log(req.body)
    //console.log(req.cookies);
    return res.render('signin',{
        tittle:"Signin"
    })
}
//session
module.exports.createSession = function(req,res){
   if(req.body.password !=req.body.password ){
    return res.redirect('Back')
   }
   User.findOne({email:req.body.email},function(err,user){
    if(err){
        console.log(error);
        return;
    }
    if(!user){
        User.create(req.body , function(err,user){
            if(err){
                console.log(error)
                return;
            }
            return res.redirect('Back')
        })
    }
   })
}