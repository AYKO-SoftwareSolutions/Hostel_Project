/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  	attributes: {

  		//Unique UserId
  		applicantId : {
  			type : "string",
  			unique : true
  		},

  		//Hostel Number
  		hostel : {
  			model : 'Hostel'
  		},

  		//Name of the user
  		name : {
  			type : "string"
  		},
  		
  		//Room Number
  		room : {
  			model : 'Room'
  		},

		//Phone Number
  		mobile : {
  			type : "string"
  		},

  		//Date of Joining
  		doj : {
  			type : "date"
  		},

  		//Address
  		permanentAddress : {
  			type : "string"	
  		}, 

  		//Workplace
  		workplace : {
  			type : "string"
  		},

  		//Email of the user
  		email : {
  			type : "email"
  		},

  		//Proof
  		attachment : {
  			type : "string"
  		},

  		//Rent model
  		objectId : {
  			model : 'Amount'
  		},

  		delete : {
  			type : 'boolean',
  			defaultsTo : 'false'
  		}

    }
};

