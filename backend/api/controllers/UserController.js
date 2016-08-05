/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	//Create User
	create : function(req, res, next, callback) {

		var params = req.params.all();
		User.create(params, function (err, createdUser){
			if(err){
				return res.badRequest(err);
			}
			if(createdUser){
				if(callback != undefined)
					return callback(null, createdUser);
				return res.json(createdUser);
			}
		});	
	},

	//Update User
	update : function(req, res, next, callback) {

		if(!id){
			return res.badRequest("Please enter the Id");
		}
		else{
			var params = req.params.all();
			User.update(id, params, function(err, updatedUser) {
				if(err){
					return res.badRequest(err);
				}
				if(updatedUser){
					if(callback != undefined)
						return callback(null, updatedUser);
					return res.json(updatedUser);
				}
			});
		}
	},

	//Find User
	find : function(req, res, next, callback) {
		var params = req.params.all();
		var query = {

		};

		if (params.id) {
			query['id'] = params.id;
		} else if (params.email) {
			query['email'] = params.email;
		} else if (params.mobile) {
			query['mobile'] = params.mobile;
		} else if (params.objectId) {
			query['objectId'] = params.objectId;
		} else {
			return res.badRequest("Please Provide valid Find query");
		}

		if(query) {
			User.find(query, function(err, foundUser) {
				if(err){
					return res.badRequest(err);
				}
				if(foundUser){
					if(callback != undefined)
						return callback(null, foundUser)
					return res.json(foundUser);
				}
			});
		}
	},

	delete: function(req, res, next, callback) {
		if(!id){
			return res.badRequest("Please enter the Id");
		}
		else{
			params.delete = true;
			sails.controllers.user.update(req, res, next, function(err, updatedUser) {
				if(err){
					return res.badRequest(err);
				}
				if(updatedUser){
					if(callback != undefined)
						return callback(null, updatedUser);
					return res.json(updatedUser);
				}
			});
		}
	}

};

