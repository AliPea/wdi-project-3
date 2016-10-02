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
    console.log(vm.novel.entries.body);
    Novel
      .addEntry($stateParams, { entry: vm.novel.entries.body })
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
