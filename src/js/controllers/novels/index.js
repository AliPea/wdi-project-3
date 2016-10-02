angular
.module("noveList")
.controller("NovelIndexCtrl", NovelIndexCtrl);

NovelIndexCtrl.$inject = ["Novel"];
function NovelIndexCtrl(Novel){
  const vm = this;

  Novel
  .query()
  .$promise
  .then(data => {
    vm.novels = data.novels;
  });
}
