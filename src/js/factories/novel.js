angular
  .module("noveList")
  .factory("Novel", novelFactory);

novelFactory.$inject = ["API", "$resource"];
function novelFactory(API, $resource){
  return $resource(`${API}/novels/:id`, { id: "@_id"}, {
    'query':    { method: "GET", isArray: false },
  });
}
