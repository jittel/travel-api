const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {}

Trip.init({
    // add properites here, ex:
    
  trip_budget:{
       type:DataTypes.INTEGER,
       allowNull:false,
   },
  
   traveller_amount:{
       type:DataTypes.INTEGER,
       allowNull:false,
       defaultValue:1,
   }
},{
    sequelize
});

module.exports=Trip