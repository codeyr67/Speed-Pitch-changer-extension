const defaultHosts = "*://*/*";
var cad_isen = localStorage.getItem('Xytspch_isen');
var cad_sett = localStorage.getItem('Xytspch_sett');
var executing = browser.tabs.executeScript({code: "document.location.reload();"});

var setg = cad_sett.split(',');
if (setg.length < 5){
    var tmp_rkc=[setg[0],setg[1],setg[2],setg[3],!1];
    localStorage.setItem('Xytspch_sett', tmp_rkc);
    cad_sett=tmp_rkc;
    console.log("updated !")
    browser.runtime.reload()
}

if (cad_isen == 'yes'){
async function register(hosts) {

  return await browser.contentScripts.register({
    "matches": [hosts],
    "js": [{file: "/main.js"}],
    "allFrames": true,
    "runAt": "document_idle"
  });

}

var registered = register(defaultHosts);
}
else {browser.browserAction.setIcon({path: "icons/border-16d.png"});}




function topop(value){
browser.runtime.sendMessage({
    msg:"pup",
    val: value
});
}



"use strict";

function onError(error) {
  console.error(`Error: ${error}`);
}

function sendMessageToTabs(tabs) {
  //console.log(tabs)
  for (let tab of tabs) {
    browser.tabs.sendMessage(
      tab.id,
      {greeting: "bgs"}
    ).then(response => {
      //console.log("M cs:");
      //console.log(response.response);
      var klp=response.response;
      topop(klp);
    }).catch(onError);
  }
}

function ms(){
  var btqz = browser.tabs.query({currentWindow: true, active: true});
  btqz.then(sendMessageToTabs).catch(onError);
  
};


function handleMessage(request, sender, sendResponse) {
  if(request.setit == "dm1"){
    sendResponse({response_dm1: cad_sett});
  }
  if(request.setit == "xpup"){
    var executing = browser.tabs.executeScript({code: "xpup();",allFrames: true});
  }
  if(request.setit == "xpdw"){
    var executing = browser.tabs.executeScript({code: "xpdw();",allFrames: true});
  }
  if(request.setit == "xpres"){
    var executing = browser.tabs.executeScript({code: "xpres();",allFrames: true});
  }
  if(request.setit == "xpdef"){
    var fdef = "zpdef("+request.xdf+");"
    //console.log(fdef)
    var executing = browser.tabs.executeScript({code: fdef,allFrames: true});
  }
  
}

browser.runtime.onMessage.addListener(handleMessage);