//literally the sloppiest code, but hey, it works
//click on bookmark each time you want to use this

function changeCSS() {
  setTimeout(function() {
    function addStyleString(str) {
        var node = document.createElement('style');
        node.innerHTML = str;
        document.body.appendChild(node);
    }

    addStyleString('#dj-button { display: none !important }');
    addStyleString('#footer { display: none !important }');
    addStyleString('#header-panel-bar  { display: none !important }');
    addStyleString('#history-button { display: none !important }');
    addStyleString('#app-menu { display: none !important }');
    addStyleString('#room > div.app-right { display: none !important }');
    addStyleString('#user-rollover { display: none !important }');
    addStyleString('#video-only-dj .image { display: none !important }');
    addStyleString('#playback-container  { width: 0px; height: 0px; display: none; }');
    addStyleString('#video-only-dj .icon-skip { display: block !important }');
    addStyleString('#playback { display: none !important }');
    addStyleString('.video-only #vote { width: 500px !important }');
    addStyleString('#video-only-dj { width: 207px !important }');
    addStyleString('#vote .crowd-response { width: 85px !important }');
    addStyleString('.video-only .room-background { display: none }');

    $('#video-only-dj').click(function(){
        API.moderateForceSkip();
    });
  }, 3000);
}

function videoMode() {
  setTimeout(function() {
    $('#footer-user > div.buttons > div.settings.button').click();
  }, 1000);
  setTimeout(function() {
    $('#user-settings > div.application.section > div > div:nth-child(5) > div.item.s-vo').click();
  }, 3000);
  setTimeout(function() {
    $('#footer-user > div.back').click()
  }, 5000);
  setTimeout(function() {
    changeCSS();
  }, 4000);
}

videoMode();
