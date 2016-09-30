angular
.module("noveList")
.controller("usersIndexCtrl", usersIndexCtrl);

usersIndexCtrl.$inject = ["User"];
function usersIndexCtrl(User){
  const vm = this;
  User.query(data => {
    vm.users = data.users;
  });
}
