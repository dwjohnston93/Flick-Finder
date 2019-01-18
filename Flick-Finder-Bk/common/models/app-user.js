'use strict';

module.exports = function(Appuser) {
    Appuser.afterRemote('register', async(ctx, user, next) => {
        if (user) {
            user.token = user.id;
        }
    }); 
    
    //  Appuser.afterRemote('login', async(ctx, user, next) => {
    //     if (user) {
    //         user.token = user.id;
    //     }
    // }); 
    
    Appuser.observe('after save', function(ctx, next) {
  if (ctx.isNewInstance === true) {
    var instance = ctx.instance;
     instance.createAccessToken(1209600000, function(err, response){
        if (err === null) {
           ctx.instance['userId'] = response.userId;
           ctx.instance["token"] = response.id;
         }
          next();
       });
        }
        else {
            next();
        }
    });

    Appuser.afterRemote('login', async (ctx, user, next) => {
        if(user){
          // console.log("hit")
          user.token = user.id;

      let userData = await Appuser.find({
        fields:{password: false, username: false, realm: false, '_id': 0},
        include:{
          relation: 'movies',
          scope: {
            fields: ['original_title', 'poster_path', 'release_date', 'overview', 'id']
          },
        },
        where: {
          id: user.userId
        }
      })
      console.log()
      user.userData = userData[0]
    }
  })

};
