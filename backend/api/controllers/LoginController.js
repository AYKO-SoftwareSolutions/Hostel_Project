/**
 * LoginController
 *
 * @description :: Server-side logic for managing logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	loginUser: function(req, res, next, callback) {
		console.log("aaa");
		var params = req.params.all();
		if((params.userName)&&(params.password)){
			if(params.userName == "akshaya" && params.password == "admin"){
				return res.json("Welcome!")
			}
			else{
				return res.badRequest("Try Again!!!")
			}
		}
		else{
			console.log("err");
			return res.badRequest("Please enter Proper Username and password");
		}
	}
};

