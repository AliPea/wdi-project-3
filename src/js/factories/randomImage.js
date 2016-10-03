angular
.module("noveList")
.factory("RandomImage", RandomImage);

RandomImage.$inject = ["$resource"];
function RandomImage($resource) {
  return $resource('https://api.unsplash.com/photos/random?w=1050&h=700&client_id=19e34e75471ee865d7276aade14a9c897fe6dc4ba68d8d2058c627ed81ac0bb0', null, {
    'query':  { method: "GET", isArray: false }
  });
}
