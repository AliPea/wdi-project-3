angular
  .module("noveList")
  .filter('rawHtml', rawHtml);

rawHtml.$inject = ['$sce'];
function rawHtml($sce){
  return function(val) {
    return $sce.trustAsHtml(val);
  };
}
