angular
  .module("noveList", [
    "ui.router",
    "ngResource",
    "angular-jwt",
    "ngMessages"
  ]);

  $('[data-toggle="tooltip"]').tooltip({
      placement : 'top'
  });

  $(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({
        placement : 'top'
    });
});
