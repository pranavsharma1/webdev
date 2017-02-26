(function () {
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);

    function WebsiteService() {

        var websites = [
            {_id: 321, uid: 123, name: "Facebook", description: "Most popular social network website"},
            {_id: 432, uid: 234, name: "Wikipedia", description: "World's Encyclopedia"}
        ];

        var api = {
            findWebsiteForUser: findWebsiteForUser

        };
        return api;

        function findWebsiteForUser(uid) {
            var result = [];
            for (var w in websites) {
                if (websites[w].uid === uid) {
                    result.push(websites[w]);
                }
            }
            return result;

        }

    }
})();

