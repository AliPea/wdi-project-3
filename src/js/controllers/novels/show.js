angular
.module("noveList")
.controller("NovelShowCtrl", NovelShowCtrl);

NovelShowCtrl.$inject = ["Novel", "$stateParams", "$state"];
function NovelShowCtrl(Novel, $stateParams, $state) {
  const vm = this;

  vm.countOf = countOf;
  vm.wordCount = 0;
  vm.wordCountStatus = true;
  vm.maxWordCount = 5;
  vm.maxEntriesCount = 5;
  vm.entriesCount = 0;
  vm.novelStatus = true;



  // If there are 5, then the novelEntriesForm disappears
  // and the status changes to Finished
  function novelStatus() {
    if(vm.entriesCount > vm.maxEntriesCount && vm.novel.status === "active") {
      vm.novelStatus = false;
    }
  }


  // Get showNovels data
  Novel.get($stateParams, data => {

    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });

    vm.novel = data.novel;
    novelStatus();
    // Count how many entries there are on the page
    vm.entriesCount = vm.novel.entries.length;

  });

  // Count the number of words in the entry box
  function countOf(text) {
    var s = text ? text.split(/\s+/) : 0; // it splits the text on space/tab/enter
    vm.wordCount = s.length;

    if(vm.wordCount > vm.maxWordCount) {
      vm.wordCountStatus = false;
    } else {
      vm.wordCountStatus = true;
    }

    return s ? s.length : '';
  }

  // Get formData & update the novel
  vm.submitEntry = () => {
    let entryStatus = "active";

    if(vm.entriesCount === 4) {
      entryStatus = "finished";
    }

    let data = {
      entry: vm.novel.entries.body,
      wordCount: vm.wordCount,
    };

    Novel
    .addEntry($stateParams, data)
    .$promise
    .then(data => {
      Novel.get($stateParams, data => {
        vm.novel = data.novel;
        vm.novel.entries.body = null;
        // vm.novelStatus = false;
      });
    });

    Novel
    .update($stateParams, {status: entryStatus})
    .$promise
    .then(data => {
      console.log(data);
      vm.entriesCount ++;
      novelStatus();
    });
  };

  // Submit a comment on the novel
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

  // Currently not being used
  vm.novelDelete = () => {
    Novel
    .delete($stateParams)
    .$promise
    .then(data => {
      $state.go("novelIndex");
    });
  };
}
