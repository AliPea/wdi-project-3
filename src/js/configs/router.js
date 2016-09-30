angular
.module("noveList")
.config(Router);

Router.$inject = ["$stateProvider", "$locationProvider", "$urlRouterProvider"];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state("home", {
    url: "/",
    templateUrl: "/js/views/home.html",
  })
  .state("register", {
    url: "/register",
    templateUrl: "/js/views/register.html",
    controller: "registerCtrl as register",
  })
  .state("login", {
    url: "/login",
    templateUrl: "/js/views/login.html",
    controller: "loginCtrl as login",
  })

  //novels Router
  .state('novelIndex', {
    url: "/novels/index",
    templateUrl: "/js/views/novels/index.html",
    controller: "NovelNewCtrl as nov"
  })

  .state('novelNew', {
    url: "/novels/new",
    templateUrl: "/js/views/novels/new.html",
    controller: "NovelIndexCtrl as nov"
  })

  .state('novelShow', {
    url: "/novels/show",
    templateUrl: "/js/views/novels/show.html",
    controller: "NovelShowCtrl as nov"
  })

  .state('novelEdit', {
    url: "/novels/edit",
    templateUrl: "/js/views/novels/edit.html",
    controller: "NovelEditCtrl as nov"
  });

  $urlRouterProvider.otherwise("/");
}
