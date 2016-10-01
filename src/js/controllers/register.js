angular
  .module("noveList")
  .controller("registerCtrl", registerCtrl);

registerCtrl.$inject = ["User", "CurrentUserService"];
function registerCtrl(User, CurrentUserService){

  const vm    = this;
  vm.register = () => {
    User
      .register({ user: vm.user })
      .$promise
      .then(data => {
        console.log('data', data)
        const user = data.user ? data.user : null;
        if (user) {
          CurrentUserService.saveUser(user);
        }
      });
  };
}
