app.factory('Page', function ($http, $q){
  var factory = {
    pages : false,
    getPages: function(){
      var deferred = $q.defer();
      if (factory.pages !== false){
        deferred.resolve(factory.pages);
      }else{
        $http.get('http://localhost:8888/wp-lab/wp-json/wp/v2/pages')
        .success(function(data,status){

          factory.pages = data;

          //console.log(data);
          deferred.resolve(factory.pages);
        }).error(function(data,status){
          deferred.reject('Impossible de recupérer les DATAS');
        });
      }
      return deferred.promise;
    },
    getPage: function(slug){
      var deferred = $q.defer();
      pages = {};
      var pages = factory.getPages().then(function(pages){

        var result = findIndexInData(pages,'slug',slug);

        pages = pages[result];

        deferred.resolve(pages);
      }, function(msg){
        deferred.reject(msg);
      });
      return deferred.promise;
    },
  };

  return factory;
});
