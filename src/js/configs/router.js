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
    controller: "mainCtrl as main"
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
    controller: "NovelIndexCtrl as new"
  })

  .state('novelNew', {
    url: "/novels/new",
    templateUrl: "/js/views/novels/new.html",
    controller: "NovelNewCtrl as index"
  })

  .state('novelShow', {
    url: "/novels/:id",
    templateUrl: "/js/views/novels/show.html",
    controller: "NovelShowCtrl as show"
  })

  .state('novelEdit', {
    url: "/novels/edit",
    templateUrl: "/js/views/novels/edit.html",
    controller: "NovelEditCtrl as edit"
  });

  $urlRouterProvider.otherwise("/");
}
