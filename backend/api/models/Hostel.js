/**
 * Hostel.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

  	//Hostel Number
  		hostelNumber : {
  			type : "string",
  			unique : true
  		},

    //Communicate with room model
  		roomId : {
  			model : 'Room'
  		},
      
    //Number of rooms
        roomCount : {
            type : "string"
        },
      
    //Delete
        delete : {
            type : "string",
            defaultsTo : "false"
        },
  }
};

