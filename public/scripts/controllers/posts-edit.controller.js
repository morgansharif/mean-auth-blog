PostsEditController.$inject = ["$location", "$http", "$routeParams"]; // minification protection
function PostsEditController ($location, $http, $routeParams) {
  var vm = this;
  vm.post = {}; // form data
  vm.update = update;

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



  function update(){
    $http
      .put("/api/posts/" + $routeParams.id, vm.post)
      .then(onUpdateSucces, onUpdateError);

    function onUpdateSuccess(response){
    $location.path("/posts/" + id);
    }

    function onUpdateError(response){
      console.error("Failed to update post", response);
    }
  }

}
