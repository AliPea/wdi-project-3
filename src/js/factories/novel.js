angular
  .module("noveList")
  .factory("Novel", Novel);

Novel.$inject = ["$resource", "API"];
function Novel($resource, API) {
  return $resource(`${API}/pics/:id`, { id: "@_id" }, {
    'query':  { method: "GET", isArray: false },
    'update': { method: "PUT" }
  });
}
