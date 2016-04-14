app.controller('MenusCtrl', function($scope,Menu){
  $scope.loading = true;

  Menu.getMenu().then(function(datas){

    $scope.loading = false;

    $scope.menu = datas.items;

  },function(msg){
    alert(msg);
  });



  /**
  *
  *  SHOW MENU
  *
  */
  $scope.showMenu = function(){
    console.log("menu Open");
    $("#responsive-icon").addClass('hidden');
    $('#responsive-icon-close').removeClass('hidden');
    $('.slide-menu nav').addClass('responsive-menu-show');
  };



  /**
  *
  *  HIDE MENU
  *
  */
  $scope.hideMenu = function(){
    console.log("menu Close");
    $("#responsive-icon-close").addClass('hidden');
    $('#responsive-icon').removeClass('hidden');
    $('.slide-menu nav').removeClass('responsive-menu-show');

  };




});
