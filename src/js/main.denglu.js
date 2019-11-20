require.config({
    paths: {
        jquery: "./jquery.min",
        index: "./lib/denglu",
    },
    shim: {}
});
require(['jquery', 'index'], function ($, index) {
    index.ceshi();
});