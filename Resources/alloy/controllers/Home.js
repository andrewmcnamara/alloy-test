function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId0 = Ti.UI.createWindow({
        backgroundColor: "white",
        title: "Tab 1",
        id: "__alloyId0"
    });
    $.__views.open_button = Ti.UI.createButton({
        title: "Open Child Window",
        id: "open_button"
    });
    $.__views.__alloyId0.add($.__views.open_button);
    $.__views.Home = Ti.UI.createTab({
        window: $.__views.__alloyId0,
        title: "tab_one",
        icon: "KS_nav_ui.png",
        id: "Home"
    });
    $.__views.Home && $.addTopLevelView($.__views.Home);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.open_button.addEventListener("click", function() {
        console.debug("in open_button click event handler");
        var childController = Alloy.createController("child");
        console.log($.Home);
        childController.openMainWindow($.Home);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;