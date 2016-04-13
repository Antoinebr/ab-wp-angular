app.controller('MenusCtrl', function($scope,Menu){
  $scope.loading = true;

  Menu.getMenu().then(function(datas){

    $scope.loading = false;


    /**
    *
    *  Replace les url de l'objet menu
    *
    */
    var i;
    for(i in datas.items){
      if(datas.items[i].type_label == "Page"){
        datas.items[i].url = datas.items[i].url.replace('wp-lab','wp-angular/#/page');
      }
    }

    $scope.menu = datas.items;


  },function(msg){
    alert(msg);
  });





});
