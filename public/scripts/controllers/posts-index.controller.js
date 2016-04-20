PostsIndexController.$inject = ["$http", "$auth"]; // minification protection
function PostsIndexController  ( $http,   $auth) {
  var vm = this;
  vm.posts = [];
  vm.isLoggedIn = $auth.isAuthenticated();

  query(); // fetch all the posts (index)

  ////

  function query() {
    $http
      .get('/api/posts')
      .then(function onSuccess(response) {
        vm.posts = response.data;
      });
  }
}
