angular
  .module("noveList")
  .controller("homeCtrl", homeCtrl);

homeCtrl.$inject = ["CurrentUserService", "$state"];
function homeCtrl(CurrentUserService, $state) {
  const vm = this;

  if (CurrentUserService.getUser()) $state.go("novelIndex");
}
