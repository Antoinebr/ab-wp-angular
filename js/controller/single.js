app.controller('SingleCtrl', function ($scope,$rootScope, Post, $routeParams) {
  //console.log($routeParams);
  Post.getPost($routeParams.slug).then(function(post){

    $scope.title = post.title.rendered;
    $scope.content = post.content.rendered;
    $scope.thubmnailUrl = post.better_featured_image.media_details.sizes.medium.source_url;
    //console.log(
    //post.better_featured_image.media_details.sizes.large.source_url;

  }, function (msg){
    alert(msg);
  });


});
