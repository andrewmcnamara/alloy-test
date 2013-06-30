function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId3 = Ti.UI.createWindow({
        backgroundColor: "white",
        title: "Tab 2",
        id: "__alloyId3"
    });
    $.__views.__alloyId4 = Ti.UI.createLabel({
        text: "I am Window 2",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.PersonDetails = Ti.UI.createTab({
        window: $.__views.__alloyId3,
        title: "Tab 2",
        icon: "KS_nav_ui.png",
        id: "PersonDetails"
    });
    $.__views.PersonDetails && $.addTopLevelView($.__views.PersonDetails);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;