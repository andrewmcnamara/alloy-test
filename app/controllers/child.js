exports.openMainWindow = function(_tab) {
	console.log(_tab)
  _tab.open($.child_window);
}