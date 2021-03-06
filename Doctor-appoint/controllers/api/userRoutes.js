const router = require("express").Router();
const { Users } = require("../../models");

  // get request to show the index.handlebars on the page 
  // shows all of the doctors items currently in the database on the page
  router.get("/users", function(req, res) {
      Users.findAll({
      }).then(function(data) {
          console.log(data)    
       res.render("index", {users: data});
      });
  });

  // post request to add a new to do item to the list of doctors
  // redirected back the the get request to show all the doctors, including the new one on the page
  router.post("/users", function(req, res) {
      User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }).then(function(data){
        res.redirect("/users");
      });
  });

// export routers
module.exports = router;