// Globals
var myBrowser = null;
var appCore = null;

function initBrowser()  {
    myBrowser = document.getElementById("browser-content");

    appCore = Components.classes["@mozilla.org/appshell/component/browser/instance;1"]
               .createInstance(Components.interfaces.nsIBrowserInstance);
    appCore.setWebShellWindow(window);

    // Following lines needed for observing Forward and Back buttons
    window.XULBrowserWindow = new nsBrowserStatusHandler();
    // hook up UI through progress listener
    var interfaceRequestor = myBrowser.docShell.QueryInterface(Components.interfaces.nsIInterfaceRequestor);
    var webProgress = interfaceRequestor.getInterface(Components.interfaces.nsIWebProgress);
    webProgress.addProgressListener(window.XULBrowserWindow, Components.interfaces.nsIWebProgress.NOTIFY_ALL);
    // End observing code

    loadPage("http://www.mozdev.org");
}

function getBrowser()  {
    if (!myBrowser)
        myBrowser = document.getElementById("browser-content");
    return myBrowser;
}

function loadPage(uri)  {
    const nsIWebNavigation = Components.interfaces.nsIWebNavigation;
    getBrowser().webNavigation.loadURI(uri, nsIWebNavigation.LOAD_FLAGS_NONE, null, null, null);
}

function goBack()
{
    var webNavigation = getBrowser().webNavigation;
    if (webNavigation.canGoBack)
        webNavigation.goBack();
}

function goForward()
{
    var webNavigation = getBrowser().webNavigation;
    if (webNavigation.canGoForward)
        webNavigation.goForward();
}

function openLocaleswitcher()
{
var win = window.open("chrome://jucanet/content/locale.xul", 
                      "aboutMyExtension", "chrome,centerscreen"); 
}


function nsBrowserStatusHandler()
{
}

nsBrowserStatusHandler.prototype =
{
  onStateChange : function(aWebProgress, aRequest, aStateFlags, aStatus) {},
  onProgressChange : function(aWebProgress, aRequest, aCurSelfProgress,
                              aMaxSelfProgress, aCurTotalProgress, aMaxTotalProgress) {},
  onSecurityChange : function(aWebProgress, aRequest, state) {},
  onLocationChange : function(aWebProgress, aRequest, aLocation)
  {
    UpdateBackForwardButtons();
  },
  QueryInterface : function(aIID)
  {
    if (aIID.equals(Components.interfaces.nsIWebProgressListener) ||
      aIID.equals(Components.interfaces.nsISupportsWeakReference) ||
      aIID.equals(Components.interfaces.nsIXULBrowserWindow) ||
      aIID.equals(Components.interfaces.nsISupports))
      return this;
    throw Components.results.NS_NOINTERFACE;
  },
  setJSStatus : function(status) {},
  setJSDefaultStatus : function(status) {},
  setOverLink : function(link) {}
}

function UpdateBackForwardButtons()
{
    var backBroadcaster = document.getElementById("canGoBack");
    var forwardBroadcaster = document.getElementById("canGoForward");
    var webNavigation = getBrowser().webNavigation;

    var backDisabled = (backBroadcaster.getAttribute("disabled") == "true");
    var forwardDisabled = (forwardBroadcaster.getAttribute("disabled") == "true");

    if (backDisabled == webNavigation.canGoBack)
        backBroadcaster.setAttribute("disabled", !backDisabled);
  
    if (forwardDisabled == webNavigation.canGoForward)
        forwardBroadcaster.setAttribute("disabled", !forwardDisabled);
}

