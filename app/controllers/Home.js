exports.functionToOpenWin2 = function() {
    // $.navgroup.open(Alloy.createController('win2').getView());
    console.log('Booyah');
}
$.open_button.addEventListener("click", function(e) {
  console.debug("in open_button click event handler");

  // load the tabViewOneChild controller and call the index method
  var childController = Alloy.createController('child');
  console.log($.Home);
  // pass in the tab to give navigation and back button
  childController.openMainWindow($.Home);

}); 