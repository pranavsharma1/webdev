(function(){
    angular
        .module ("WebAppMaker")
        .controller("ProfileController", ProfileController)

    function ProfileController($routeParams){
        var vm = this;

        var userId = $routeParams.uid;

        console.log(userId);

        var users = [
            {username: 'alice',password: 'ewq', _id:123},
            {username: 'bob', password: 'ewq', _id: 234},
            {username: 'charlie', password: 'ewq', _id:345},
        ];

        for (var u in users){
            var user = users[u];
            if(user._id == userId){
                console.log(["Found the user", user]);
            }
        }
    };


})();
