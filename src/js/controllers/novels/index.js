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
    console.log('indexjs data', data)
    vm.novels = data.novels;
  });
}
