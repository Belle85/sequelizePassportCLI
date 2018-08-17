module.exports = function(sequelize, DataTypes){
 
    var User =  sequelize.define("User", {
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        age: DataTypes.INTERGER,
        name: DataTypes.STRING
       
    });

    return User;
};

var db = require("./models");

db.User.create({
    email:"bebold.bebelle@gmail.com",
    password: "thisismypassword",
    age:25,
    name: "Belle"
})
.then(function(dbUser){
    console.log(dbUser);
});
