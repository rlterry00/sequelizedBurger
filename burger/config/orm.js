var connection = require('./connection.js');

// Object for SQL statement functions.
var orm = {
  selectAll: function(cb){
    connection.query("SELECT * FROM burgers", function(err, res){
      cb(res); 
    })
  },

  insertOne: function(name, cb){
    connection.query("INSERT INTO burgers(burger_name, devoured)values('"+name+"', "+false+")", function(err, res){
      cb(res);
    });
  },

  updateOne: function(name, cb){
    connection.query("UPDATE burgers SET devoured=true WHERE burger_name='"+name+"'", function(err, res){
      if(err) throw err; 
      cb(res);
    });
  },

  delete: function(name, cb){
    connection.query("DELETE from burgers WHERE burger_name='"+name+"'", function(err, res){
      if(err) throw err;
      cb(res);
    });
  }
}

module.exports = orm; 