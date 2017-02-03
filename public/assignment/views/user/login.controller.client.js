(function () {
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController)

    function LoginController($location) {
        var vm = this;
        vm.login = login;

            function login(username,password){
            console.log([username,password]);
            var users = [
                {username: 'alice',password: 'ewq'},
                {username: 'bob', password: 'ewq'},
                {username: 'charlie', password: 'ewq'},
            ];
            var user = null;
            var found = false;
            for (var u in users ){
                user = users[u];
                if(user.username === username && user.password === password) {
                    console.log("Found the user!");
                    found = true;
                    var url = $location.url("/user/123");
                    break;
                }
            }
            if (!found){
                vm.error = "No such user!";
            }

        }


    }

})();
