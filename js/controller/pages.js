app.controller('PagesCtrl', function($scope, Page,$sce){
  $scope.loading = true;

  Page.getPages().then(function(pages){

    $scope.loading = false;
    $scope.pages = pages;
    

  },function(msg){
    alert(msg);
  });




});
