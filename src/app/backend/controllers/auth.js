const { validationResult } = require('express-validator');

const User = require('../models/user');

const jwt = require('jsonwebtoken');

exports.login = async (req, res, next) => {
    const name = req.body.name;
    const password = req.body.password;

    try {
         const user = await User.find(name);

         if (user[0].length !== 1) {
            const error = new Error(" A user with this name could not be found.")
            error.statusCode = 401;
            throw error;            

         }

         const storedUser = user[0][0];

         const isEqual = false; //await bcrypt.compare(password, storedUser.password);
         if (password == storedUser.password) {
            isEqual = true;
         }
         
         if (!isEqual) {
            const error = new Error("Wrong Password!")
            console.log("Inside auth.js wrong password")
            error.statusCode = 401;
            throw error;   
         }

         const token = jwt.sign(

            {
                email: storedUser.email,  
                userId: storedUser.id
            },
            'secretfortoken',
            {expiresIn: '1h'}
         );



      res.staturs(200).json({toen: token, userId: storedUser.id});
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;

        }
        next(err);
    }
    


}