chrome.webNavigation.onCompleted.addListener(function() {
  chrome.tabs.executeScript({code: 'form1.submit();"'});
}, {url: [{urlMatches : 'http://k-pms.kaist.ac.kr/CPopupRequest'}]});
