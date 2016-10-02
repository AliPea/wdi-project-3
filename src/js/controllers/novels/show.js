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
  // 
  // vm.filter('reverse', function() {
  //   return function(items) {
  //     return items.slice().reverse();
  //   };
  // });

  // Get formData & update the novel
  vm.submitEntry = () => {
    console.log(vm.novel.entries.body);
    Novel
    .addEntry($stateParams, { entry: vm.novel.entries.body })
    .$promise
    .then(data => {
      vm.novel.entries.push(data.novel.comments);
      vm.novel.entries.body = null;
    });
  };

  vm.submitComment = () => {
    Novel
    .addComment($stateParams, { comment: vm.novel.comments.body })
    .$promise
    .then(data => {
      vm.novel.comments.push(data.novel.comments);
      vm.novel.comments.body = null;
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
