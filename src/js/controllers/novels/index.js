angular
<<<<<<< HEAD
.module("noveList")
.controller("NovelIndexCtrl", NovelIndexCtrl);

NovelIndexCtrl.$inject = ["Novel", '$http'];
function NovelIndexCtrl(Novel, $http){
  const vm = this;

  Novel
  .query()
  .$promise
  .then(data => {
    console.log('indexjs data', data)
    vm.novels = data.novels;
=======
  .module("noveList")
  .controller("NovelIndexCtrl", NovelIndexCtrl);

NovelIndexCtrl.$inject = ["Novel", "$stateParams", "$state"];
function NovelIndexCtrl(Novel){
  const vm   = this;
  Novel.query(data => {
    vm.novel = data.novels;
>>>>>>> ec909fc599b7dc9da83585bf900a41b40f9b9831
  });
}
