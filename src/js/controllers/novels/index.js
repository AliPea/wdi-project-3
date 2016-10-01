angular
.module("noveList")
.controller("NovelIndexCtrl", NovelIndexCtrl);

NovelIndexCtrl.$inject = ["Novel", '$http'];
function NovelIndexCtrl(Novel, $http){
  const vm = this;

  Novel
  .query()
  .$promise
  .then(data => {
    vm.novels = data.novels;
  });
}
