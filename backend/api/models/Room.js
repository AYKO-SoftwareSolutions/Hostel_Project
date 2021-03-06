/**
 * Room.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  	attributes: {

		//Room Number
  			roomNumber : {
  				type : "string",
  				unique : true
  			},

		//Number of people in room
  			quantity : {
  				type : "number",
  				defaultsTo : 0
  			}
  	}
};

