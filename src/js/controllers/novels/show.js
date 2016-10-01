angular
.module("noveList")
.controller("NovelShowCtrl", NovelShowCtrl);

NovelShowCtrl.$inject = ["Novel", "$stateParams", "$state"];
function NovelShowCtrl(Novel, $stateParams, $state) {
  const vm = this;

  Novel.get($stateParams, data => {
    vm.novel = data.novel;
  });

  vm.novelDelete = () => {
    Novel
      .delete($stateParams)
      .$promise
      .then(data => {
        $state.go("novelIndex");
      });
  };
}
