(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController($scope){
        console.log("Hello from WebsiteListController");

        var websites = [
            {"_id":123, "name": "Facebook", "description": "Most popular social network website"},
            {"_id":345, "name": "Wikipedia", "description":"World's Encyclopedia"}
        ];

        $scope.websites = websites;

    }

})();