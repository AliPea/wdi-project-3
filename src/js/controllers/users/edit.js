angular
  .module("noveList")
  .controller("userEditCtrl", userEditCtrl);

userEditCtrl.$inject = ["User", "$stateParams", "$state"];
function userEditCtrl(User, $stateParams, $state){
  const vm = this;

  User.get($stateParams, data => {
    vm.user = data.user;
  });

  vm.submit = () => {
    User
      .update($stateParams, { user: vm.user })
      .$promise
      .then(data => {
        $state.go("userShow", $stateParams);
      });
  };
}
