app.controller('IntroCtrl', function ($scope, Post, Page) {


  /**
  *
  *  Pre-chargement POSTS
  *
  */
  Post.getPosts().then(function(posts){

  },function(msg){
    alert(msg);
  });


  /**
  *
  *  Pre-chargement PAGES
  *
  */
  Page.getPages().then(function(){

  },function(msg){
    alert(msg);
  });




});
