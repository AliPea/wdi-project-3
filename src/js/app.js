angular
  .module("noveList", [
    "ui.router",
    "ngResource",
    "angular-jwt",
    "ngMessages"
  ]);

  $(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});
