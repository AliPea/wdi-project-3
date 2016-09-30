angular
.module("noveList")
.controller("NovelIndexCtrl", NovelIndexCtrl);

NovelIndexCtrl.$inject = ["Novel", '$http', 'Gif'];
function NovelIndexCtrl(Novel, $http, Gif){
  const vm = this;

  Novel
  .query()
  .$promise
  .then(data => {
    vm.novels = data.novels;
  });
}
