angular
.module("noveList")
.controller("NovelNewCtrl", NovelNewCtrl);

NovelNewCtrl.$inject = ["Novel", "$state", 'RandomImage'];
function NovelNewCtrl(Novel, $state, RandomImage){
  const vm  = this;

  vm.novel = {};

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
      console.log(data);
      $state.go("novelIndex");
    });
  };
}
