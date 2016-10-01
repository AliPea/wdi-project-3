angular
  .module("noveList")
<<<<<<< HEAD
  .factory("Novel", Novel);

Novel.$inject = ["$resource", "API"];
function Novel($resource, API) {
  return $resource(`${API}/novels/:id`, { id: "@_id" }, {
    'query':  { method: "GET", isArray: false },
    'update': { method: "PUT" }
=======
  .factory("Novel", novelFactory);

novelFactory.$inject = ["API", "$resource"];
function novelFactory(API, $resource){
  return $resource(`${API}/novels/:id`, { id: "@_id"}, {
    'query':    { method: "GET", isArray: false },
>>>>>>> ec909fc599b7dc9da83585bf900a41b40f9b9831
  });
}
