angular
.module("noveList")
.config(SetupInterceptor);

SetupInterceptor.$inject = ['$httpProvider'];
function SetupInterceptor($httpProvider){
  return $httpProvider.interceptors.push('AuthInterceptor');
}
