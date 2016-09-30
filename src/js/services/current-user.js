angular
  .module("noveList")
  .service("CurrentUserService", CurrentUserService);

CurrentUserService.$inject = ["$rootScope", "TokenService"];
function CurrentUserService($rootScope, TokenService){
  let currentUser = TokenService.decodeToken();

  return {
    user: currentUser,
    saveUser(user) {
      currentUser = user;
      $rootScope.$broadcast("loggedIn");
    },
    getUser() {
      return currentUser;
    },
    clearUser() {
      currentUser = null;
      TokenService.clearToken();
      $rootScope.$broadcast("loggedOut");
    }
  };
}
