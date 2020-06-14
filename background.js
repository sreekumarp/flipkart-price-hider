chrome.browserAction.onClicked.addListener(button);

function button(tab) {
  let msg = {
    txt: "hello",
  };

  chrome.tabs.sendMessage(tab.id, msg);
}

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == "complete" && tab.active) {
    // do your things
    //button(tag);
  }
});


chrome.webNavigation.onCompleted.addListener(
  function (details) {
    let msg = {
      txt: "hidePrices",
    };

    chrome.tabs.sendMessage(details.tabId, msg);
  },
  {
    url: [
      {
        // Runs on example.com, example.net, but also example.foo.com
        hostContains: "flipkart.com",
      },
    ],
  }
);
