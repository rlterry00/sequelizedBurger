var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
    burger.all(function(data) {
    
      var burgers = { burgers: data};

      res.render("index", burgers);
    })
});

router.post("/", function(req, res) {
    
      var name = req.body.name;

      burger.create(name, function(data){
        console.log(data);
        res.redirect("/");
      })
});
  

router.put("/:id", function(req, res) {
  
      var name  = req.params.id;
      console.log(name);

      burger.update(name, function(data){
        console.log(data);
        res.redirect("/")
      })
});

router.delete("/:id", function(req, res){
  
      var name = req.params.id;
      console.log(name);

      burger.delete(name, function(data){
        console.log(data);
        res.redirect("/");
      })

});

module.exports = router;