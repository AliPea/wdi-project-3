angular
.module("noveList")
.controller("NovelEditCtrl", NovelEditCtrl);

NovelEditCtrl.$inject = ["Novel", "$stateParams", "$state"];
function NovelEditCtrl(Novel, $stateParams, $state) {
  const vm = this;

  Novel.get($stateParams, data => {
    vm.novel = data.novel;
  });

  vm.submit = () => {
    Novel
      .update($stateParams, { novel: vm.novel })
      .$promise
      .then(data => {
        $state.go("novelShow", $stateParams);
      });
  };
}
