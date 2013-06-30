function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId1 = Ti.UI.createWindow({
        backgroundColor: "white",
        title: "Tab 1",
        id: "__alloyId1"
    });
    $.__views.__alloyId2 = Ti.UI.createLabel({
        text: "I am Window 2",
        id: "__alloyId2"
    });
    $.__views.__alloyId1.add($.__views.__alloyId2);
    $.__views.PersonDetails = Ti.UI.createTab({
        window: $.__views.__alloyId1,
        title: "Tab 1",
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