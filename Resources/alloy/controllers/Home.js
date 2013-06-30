function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.tabWin = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "tabWin",
        title: "Tab 1"
    });
    $.__views.__alloyId0 = Ti.UI.createLabel({
        text: "This is the first window",
        id: "__alloyId0"
    });
    $.__views.tabWin.add($.__views.__alloyId0);
    $.__views.view = Ti.UI.createView({
        id: "view"
    });
    $.__views.leftOne = Ti.UI.createButton({
        id: "leftOne",
        title: "leftOne",
        top: "-50dp"
    });
    $.__views.view.add($.__views.leftOne);
    $.__views.leftTwo = Ti.UI.createButton({
        id: "leftTwo",
        title: "leftOne",
        top: "-50dp"
    });
    $.__views.view.add($.__views.leftTwo);
    $.__views.tabWin.leftNavButton = $.__views.view;
    $.__views.open_button = Ti.UI.createButton({
        id: "open_button",
        style: Ti.UI.iPhone.SystemButtonStyle.EDIT
    });
    $.__views.tabWin.rightNavButton = $.__views.open_button;
    $.__views.Home = Ti.UI.createTab({
        window: $.__views.tabWin,
        title: "tab_one",
        icon: "KS_nav_ui.png",
        id: "Home"
    });
    $.__views.Home && $.addTopLevelView($.__views.Home);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.functionToOpenWin2 = function() {
        console.log("Booyah");
    };
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