angular
  .module("noveList")
  .controller("NovelIndexCtrl", NovelIndexCtrl);

NovelIndexCtrl.$inject = ["Novel", "$stateParams", "$state"];
function NovelIndexCtrl(Novel){
  const vm   = this;
  Novel.query(data => {
    vm.novel = data.novels;
  });
}
