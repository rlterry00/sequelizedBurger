var db = require("../models");
var express = require("express");

var router = express.Router();

// Set up the router
router.get("/", function(req, res) {
  db.burgers.findAll({}).then(function(data) {
    var hbsObject = {
      burgers: data
    };


    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  var newBurger = req.body.name;
  
  db.burgers.create({
    burger_name: newBurger,
    devoured: false
  }).then(function(data){
     res.redirect('/')
  })
});


router.post("/:id", function(req, res) {
  var burgerId = req.body.devoured;
 
  db.burgers.update({
    devoured: true
  },{
    where: {
      id: devoured
    }
  }).then(function(data) {
    console.log(data);
    res.redirect("/");
  });
});

// Export the router
module.exports = router;



// module.exports = function(app) {


//   app.get("/", function(req, res) {
//     db.burgers.findAll({})
//     .then(function(dbBurgers) {
//       res.render("index", burgers);
      
//     });
//   });

//   app.get("/api/burgers/", function(req, res) {
//     db.burgers.findAll({})
//     .then(function(dbBurgers) {
//       res.json(dbBurgers);
//     });
//   });

//     app.post("/api/burgers", function(req, res) {
//     console.log(req.body);
//     db.burgers.create({
//       burger_name: req.body.burger_name,
//       devoured: req.body.devoured
//     })
//     .then(function(dbBurgers) {
//       res.json(dbBurgers);
//     });
//   });

//   app.delete("/api/burgers/:id", function(req, res) {
//     db.burgers.destroy({
//       where: {
//         id: req.params.id
//       }
//     })
//     .then(function(dbBurgers) {
//       res.json(dbBurgers);
//     });
//   });

//   };