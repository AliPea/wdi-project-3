angular
  .module("noveList")
  .factory("User", userFactory);

userFactory.$inject = ["API", "$resource"];
function userFactory(API, $resource){
  return $resource(`${API}/users/:id`, { id: "@_id"}, {
    'query':    { method: "GET", isArray: false },
    'register': { method: "POST", url: `${API}/register` },
    'login':    { method: "POST", url: `${API}/login` }
  });
}
