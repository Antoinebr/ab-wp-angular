app.controller('PostsCtrl', function($scope, Post,$sce){
  $scope.loading = true;

  Post.getPosts().then(function(posts){

    $scope.loading = false;
    $scope.posts = posts;


  },function(msg){
    alert(msg);
  });



  
});
