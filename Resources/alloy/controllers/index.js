function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createTabGroup({
        id: "index"
    });
    $.__views.__alloyId6 = Alloy.createController("home", {
        id: "__alloyId6"
    });
    $.__views.index.addTab($.__views.__alloyId6.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId8 = Alloy.createController("PersonDetails", {
        id: "__alloyId8"
    });
    $.__views.index.addTab($.__views.__alloyId8.getViewEx({
        recurse: true
    }));
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;