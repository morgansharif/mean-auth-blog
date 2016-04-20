PostsShowController.$inject = ["$location", "$http", "$routeParams"]; // minification protection
function PostsShowController ($location, $http, $routeParams) {
  var vm = this;
  vm.post = {};
  vm.isAuthor = isAuthor;

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


  function isAuthor(currentUser){
    return vm.post.user._id === currentUser.user_id;
  }
}
// postsShowCtrl.post.user._id === main.currentUser.user_id
