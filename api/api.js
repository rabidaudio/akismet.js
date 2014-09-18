YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Author",
        "Blog",
        "Client",
        "Comment",
        "CommentType",
        "EndPoints",
        "HTTPHeaders",
        "Server"
    ],
    "modules": [
        "client",
        "comment",
        "enums",
        "server"
    ],
    "allModules": [
        {
            "displayName": "client",
            "name": "client",
            "description": "Contains classes that provide a simple programming interface for querying the [Akismet](https://akismet.com) service."
        },
        {
            "displayName": "comment",
            "name": "comment",
            "description": "Provides classes describing a comment and its author."
        },
        {
            "displayName": "enums",
            "name": "enums",
            "description": "Contains enumerations that define commonly-used values."
        },
        {
            "displayName": "server",
            "name": "server",
            "description": "Provides an HTTP server for relaying queries from clients to the [Akismet](https://akismet.com) service."
        }
    ]
} };
});