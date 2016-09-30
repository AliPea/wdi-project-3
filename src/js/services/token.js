angular
  .module("noveList")
  .service("TokenService", TokenService);

TokenService.$inject = ["$window", "jwtHelper"];
function TokenService($window, jwtHelper){
  const self       = this;

  self.setToken    = setToken;
  self.getToken    = getToken;
  self.decodeToken = decodeToken;
  self.clearToken  = clearToken;

  function setToken(token){
    return $window.localStorage.setItem("auth-token", token);
  }

  function getToken(){
    return $window.localStorage.getItem("auth-token");
  }

  function decodeToken(){
    const token = self.getToken();
    return token ? jwtHelper.decodeToken(token) : null;
  }

  function clearToken(){
    return $window.localStorage.removeItem("auth-token");
  }

}
