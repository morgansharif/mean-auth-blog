PostsShowController.$inject = ["$location", "$http", "$routeParams"]; // minification protection
function PostsShowController ($location, $http, $routeParams) {
  var vm = this;
  vm.post = {};
  $http({
    method: "GET",
    url: "/api/posts/" + $routeParams.id
  })
  .then(onGetSuccess, onGetError);

  function onGetSuccess(response){
    vm.post = response.data;
  }
  function onGetError(response){
  console.error("Failed to get post", response);
  $location.path("/");
  }
}
