angular
.module("noveList")
.controller("PicIndexCtrl", PicIndexCtrl);

novelIndexCtrl.$inject = ["Novel", '$http', 'Gif'];
function NovelndexCtrl(Pic, $http, Gif){
  const vm = this;

  Novel
  .query()
  .$promise
  .then(data => {
    vm.novels = data.novels;
  });
}
