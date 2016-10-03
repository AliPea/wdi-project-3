angular
.module("noveList")
.controller("NovelShowCtrl", NovelShowCtrl);

NovelShowCtrl.$inject = ["Novel", "$stateParams", "$state", "CurrentUserService"];
function NovelShowCtrl(Novel, $stateParams, $state, CurrentUserService) {
  const vm = this;
  vm.user = CurrentUserService.getUser();

<<<<<<< HEAD
=======
  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });

  vm.countOf = countOf;
  vm.wordCount = 0;
  vm.wordCountStatus = true;
  vm.maxWordCount = 5;
  vm.maxEntriesCount = 5;
  vm.entriesCount = 0;
  vm.novelStatus = true;
  vm.lastEntry = true;

  function userStatus() {
    vm.lastPost = vm.novel.entries[vm.entriesCount-1].author._id;
    vm.userId = vm.user.id;
    if(vm.lastPost === vm.userId) {
      vm.novelStatus = false;
      vm.lastEntry = false;
    }
  }

<<<<<<< HEAD
>>>>>>> b05a316f7d28725a4c234fc7d1fb767ad4400d71
  // Get showNovels data
  // Novel.get($stateParams, data => {
  //   vm.novel = data.novel;
  //   // Count how many entries there are on the page
  //   vm.entriesCount = vm.novel.entries.length;
  //   novelStatus();
  // // Get showNovels data
  // Novel.get($stateParams, data => {
  //
  //   $(document).ready(function(){
  //       $('[data-toggle="tooltip"]').tooltip();
  //   });
  //
  //   vm.novel = data.novel;
  //   console.log(vm.novel);
  // });
  //

=======
>>>>>>> a691e1d90c7504143dc6d24c95724a3627e9561a
  Novel.get($stateParams, data => {
<<<<<<< HEAD
=======
    vm.novel = data.novel;
    // Count how many entries there are on the page
    vm.entriesCount = vm.novel.entries.length;
    novelStatus();
<<<<<<< HEAD
>>>>>>> b05a316f7d28725a4c234fc7d1fb767ad4400d71

    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });

    vm.novel = data.novel;
    console.log(vm.novel);
=======
    if(vm.entriesCount !== 0) userStatus();
>>>>>>> a691e1d90c7504143dc6d24c95724a3627e9561a
  });

  function novelStatus() {
    if(vm.entriesCount >= vm.maxEntriesCount) {
      vm.novelStatus = false;
    }
  }

  function countOf(text) {
    var s = text ? text.split(/\s+/) : 0; // it splits the text on space/tab/enter
    vm.wordCount = s.length;

    if(vm.wordCount > 5) {
      vm.wordCountStatus = false;
    } else {
      vm.wordCountStatus = true;
    }

    return s ? s.length : '';
  }

  // Get formData & update the novel
  vm.submitEntry = () => {
<<<<<<< HEAD
=======
    let entryStatus = "active";

    if(vm.entriesCount >= 4) {
      entryStatus = "finished";
    }

>>>>>>> b05a316f7d28725a4c234fc7d1fb767ad4400d71
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
<<<<<<< HEAD
=======

    Novel
    .update($stateParams, { status: entryStatus })
    .$promise
    .then(data => {
      vm.entriesCount ++;
      novelStatus();
    });
>>>>>>> b05a316f7d28725a4c234fc7d1fb767ad4400d71
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
