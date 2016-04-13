app.controller('PageCtrl', function ($scope,$rootScope, Page, $routeParams) {

  Page.getPage($routeParams.slug).then(function(page){

    /**
    *
    *  Title
    *
    */
    $scope.title = page.title.rendered;

    $scope.content = page.content.rendered;


    /**
    *
    *  Image à la une
    *
    */
    if(page.better_featured_image !== null){
      $scope.thumbnailUrl = page.better_featured_image;
    }



  }, function (msg){
    alert(msg);
  });


});
