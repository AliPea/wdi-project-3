angular
.module("noveList")
.controller("usersShowCtrl", usersShowCtrl);

usersShowCtrl.$inject = ["User", "$stateParams", "$state"];
function usersShowCtrl(User, $stateParams, $state){
  const vm = this;

  User.get($stateParams, data => {
    vm.user    = data.user;
    vm.novels  = data.novels;
    vm.entries = data.entries;
    console.log(data);
  });

  vm.userDelete = () => {
    User
    .delete($stateParams)
    .$promise
    .then(data => {
      $state.go("userIndex");
    });
  };
}
