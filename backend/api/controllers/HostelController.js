/**
 * HostelController
 *
 * @description :: Server-side logic for managing hostels
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
	create: function(req, res, next, callback) {
        
        var params = req.params.all();
        if((params.hostelNumber && params.noOfRooms) != undefined) {
            Hostel.create(params, function(err, hostelCreated){
               if(err){
                   return res.badRequest(err);
               } 
               if(hostelCreated){
                   if(callback != undefined)
                       return callback(null, hostelCreated);
                   return res.json(hostelCreated);
               }
            });
        }
        else{
            return res.badRequest("Please provide necessary details");
        }
    },
    
    update: function(req, res, next, callback) {
        
        var params = req.params.all();
        if(params.id == undefined){
            return res.badRequest("No id Provided, Backend issue contact admin");
        }
        else{
            var id = params.id;
            Hostel.update(id, params, function(err, updatedHostel){
                if(err) {
                    return res.badRequest(err);
                }
                if(updatedHostel){
                    if(callback!=undefined)
                        return callback(null, updatedHostel);
                    return res.json(updatedHostel);
                }
            });
        }
    },
        
    find : function(req, res, next, callback) {
        
        var params = req.params.all();
        var query = {
            sort : {
                updatedAt : -1;
            }   
        }
        if(params.id){
            query['id'] = params.id;
        } else if(params.hostelNumber){
            query['hostelNumber'] = params.hostelNumber;
        } else if(params.delete){
            query['delete'] = params.delete;
        }else if(params.roomId) {
            query['roomId'] = params.roomId;
        } else {
            return res.badRequest("Provide proper input");
        }
        
        if(query) {
            Hostel.find(query, function(err, hostelFound){
               if (err) {
                    if (callback != undefined) 
                        return callback(err, null);
                    return res.json(err);
                } 
                if(hostelFound) {
                    if (callback != undefined) 
                        return callback(null, hostelFound);
                    return res.json(hostelFound);
                }
            });
        }
    },
    
    display : function(req, res, next, callback) {
        var params = req.params.all();
        params.delete = 'false';
        sails.controllers.hostel.find(req, res, next, function(err, hostelInfo){
            if(err){
                return res.badRequest(err);
            }
            else{
                return res.json(hostelInfo);
            }
        });
    },
    
    delete : function(req, res, next, callback) {
        var params = req.params.all();
        if(params.id){
            params.delete = 'true';
            sails.controllers.hostel.update(req, res, next, function(err, deletedHostel){
                if(err){
                    return res.badRequest(err);
                }
                else{
                    sails.controllers.hostel.display(req, res, next, function(err, hostelInfo){
                        if(err){
                            return res.badRequest(err);
                        }
                        else{
                            return res.json(hostelInfo);
                        }
                    });
                }      
            });
        }
        else {
            return res.badRequest("Unable to delete")
        }
    }
    
};

