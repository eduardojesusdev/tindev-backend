const Dev = require('../models/Dev');

module.exports = {
    async update(req, res){
        try {
            const { user } = req.headers;
            const loggedDev = await Dev.findByIdAndModify(
                user,
               { $pull: { 'likes': [] } },function(err,model){
                  if(err){
                       console.log(err);
                       return res.send(err);
                    }
                    return res.json(model);
                });
        } catch (error) {
            return res.status(400);
        }
    }
}