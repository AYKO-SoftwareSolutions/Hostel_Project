/**
 * LoginController
 *
 * @description :: Server-side logic for managing logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	loginUser: function(req, res, next, callback) {
		var params = req.params.all();
		if((params.userName)&&(params.password)){
			if(params.userName == "admin" && params.password == "admin"){
				return res.json("Welcome!")
			}
		}
		else{
			return res.badRequest("Please enter Proper Username and password");
		}
	}
};

