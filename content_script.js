function add_link(){
  img = chrome.extension.getURL("img/ig_logo.png");
  $("#logo").append("<a href=\"http://instagantt.com/app.html\" target=\"_blank\" onclick=\"window.open(this.href)\" style='float:right;'><img style='width:25px;vertical-align:middle;' src="+img+"/></a>");
}

var observer = new WebKitMutationObserver(function(mutations) {
  var update_needed = false;
  mutations.forEach(function(mutation) {
    for (var i = 0; i < mutation.addedNodes.length; i++){
      //console.log(mutation.addedNodes[i].id);
      if (mutation.addedNodes[i].id == "tab-ring-dispatcher"){
        console.log('added dispatcher');
        update_needed = true;
      }
    }
  });
  if(update_needed){
    add_link();
  }
});
observer.observe(document, { childList: true, subtree: true });