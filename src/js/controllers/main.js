angular
  .module("noveList")
  .controller("mainCtrl", mainCtrl);

mainCtrl.$inject = ["$rootScope", "CurrentUserService", "$state"];
function mainCtrl($rootScope, CurrentUserService, $state) {
  const vm = this;

  vm.user = CurrentUserService.getUser();

  vm.logout = () => {
    event.preventDefault();
    CurrentUserService.clearUser();
  };

  $rootScope.$on("loggedIn", () => {
    vm.user = CurrentUserService.getUser();
    console.log(vm.user)
    $state.go("home");
  });

  $rootScope.$on("loggedOut", () => {
    vm.user = null;
    $state.go("home");
  });
}
