app.factory('Menu', function ($http, $q){
  var factory = {
    menu : false,
    getMenu: function(){
      var deferred = $q.defer();
      if (factory.menu !== false){
        deferred.resolve(factory.menu);
      }else{
        $http.get('http://localhost:8888/wp-lab/wp-json/wp-api-menus/v2/menus/4')
        .success(function(data,status){



          /**
          *
          *  Replace les url de l'objet menu
          *
          */
          var i;
          for(i in data.items){

            // Replace for Pages
            if(data.items[i].type_label == "Page"){

              data.items[i].url = data.items[i].url.replace('wp-lab','wp-angular/#/page');

              // Replace for Posts
            }else if(data.items[i].type_label == "Article"){

              data.items[i].url = data.items[i].url.replace('wp-lab','wp-angular/#/single');
            }

          }

          factory.menu = data;


          //console.log(data);
          deferred.resolve(factory.menu);
        }).error(function(data,status){
          deferred.reject('Impossible de recupérer les DATAS');
        });
      }
      return deferred.promise;
    }
  };

  return factory;
});
