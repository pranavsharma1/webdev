(function(){
    angular
        .module ("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($routeParams, UserService) {
        var vm = this; // John Papa's Design Pattern

        var userId = parseInt($routeParams.uid);
        var user = UserService.findUserById(userId);

        if (user != null) {
            vm.user = user;
        }
    }


})();
