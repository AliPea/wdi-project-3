angular
.module("noveList")
.controller("NovelShowCtrl", NovelShowCtrl);

NovelShowCtrl.$inject = ["Novel", "$stateParams", "$state"];
function NovelShowCtrl(Novel, $stateParams, $state) {
  const vm = this;

  // Get showNovels data
  Novel.get($stateParams, data => {
    vm.novel = data.novel;
    console.log(vm.novel);
  });

  vm.countOf = countOf;
  vm.wordCount = 0;

  function countOf(text) {
    var s = text ? text.split(/\s+/) : 0; // it splits the text on space/tab/enter
    vm.wordCount = s.length;
    return s ? s.length : '';
  }

  // Get formData & update the novel
  vm.submitEntry = () => {
    let data = {
      entry: vm.novel.entries.body,
      wordCount: vm.wordCount
    };

    Novel
    .addEntry($stateParams, data)
    .$promise
    .then(data => {
      Novel.get($stateParams, data => {
        vm.novel = data.novel;
        vm.novel.entries.body = null;
      });
    });
  };

  vm.submitComment = () => {
    Novel
    .addComment($stateParams, { comment: vm.novel.comments.body })
    .$promise
    .then(data => {
      Novel.get($stateParams, data => {
        vm.novel = data.novel;
        vm.novel.comments.body = null;
        });
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
