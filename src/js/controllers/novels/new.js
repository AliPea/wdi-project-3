angular
.module("noveList")
.controller("NovelNewCtrl", NovelNewCtrl);

NovelNewCtrl.$inject = ["Novel", "$state", 'RandomImage'];
function NovelNewCtrl(Novel, $state, RandomImage){
  const vm  = this;

  vm.novel = {};
  vm.novel.wordCount = 0;
  vm.countOf = countOf;

  function countOf(text) {
    var s = text ? text.split(/\s+/) : 0; // it splits the text on space/tab/enter
    vm.novel.wordCount = s.length;
    return s ? s.length : '';
  }

  RandomImage
  .query()
  .$promise
  .then(data => {
    vm.novel.image = data.urls.custom;
  });

  vm.submit = () => {
    Novel
    .save({ novel: vm.novel })
    .$promise
    .then(data => {
      $state.go("novelIndex");
    });
  };
}
