app.controller('MenusCtrl', function($scope,Menu){
  $scope.loading = true;

  Menu.getMenu().then(function(datas){

    $scope.loading = false;

    $scope.menu = datas.items;


  },function(msg){
    alert(msg);
  });





});
