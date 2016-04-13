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
