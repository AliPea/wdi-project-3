angular
.module("noveList")
.controller("NovelShowCtrl", NovelShowCtrl);

NovelShowCtrl.$inject = ["Novel", "$stateParams", "$state"];
function NovelShowCtrl(Novel, $stateParams, $state) {
  const vm = this;

  // Get showNovels data
  Novel.get($stateParams, data => {
    vm.novel = data.novel;
  });

  // Get formData & update the novel
  vm.submit = () => {
    Novel
    .update($stateParams, { novel: vm.novel })
    .$promise
    .then(data => {
      $state.go("novelShow", $stateParams);
    });
  };

  vm.novelDelete = () => {
    Novel
    .delete($stateParams)
    .$promise
    .then(data => {
      $state.go("novelIndex");
    });
  };
}
