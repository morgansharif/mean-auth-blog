PostsEditController.$inject = ["$location", "$http", "$routeParams"]; // minification protection
function PostsEditController ($location, $http, $routeParams) {
  var vm = this;
  vm.post = {}; // form data
  vm.update = update;
  var id = $routeParams.id;

  $http({
    method: "GET",
    url: "/api/posts/" + id
  }).then(onGetSuccess, onGetError);

  function onGetSuccess(response){
    vm.post = response.data;
  }
  function onGetError(response){
  console.error("Failed to get post", response);
  $location.path("/");
  }



  function update(){
    $http
      .put("/api/posts/" + id, vm.post)
      .then(onUpdateSuccess, onUpdateError);

    function onUpdateSuccess(response){
    $location.path("/posts/" + id);
    }

    function onUpdateError(response){
      console.error("Failed to update post", response);
    }
  }

}
