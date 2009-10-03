var burro = burro || {};

burro.prefs = Cc['@mozilla.org/preferences-service;1'].
             getService(Ci.nsIPrefService).
             getBranch('extensions.bookburro.');
burro.prefs.QueryInterface(Ci.nsIPrefBranch2);

burro.log = function(str) {
  Cc["@mozilla.org/consoleservice;1"]
    .getService(Ci.nsIConsoleService)
    .logStringMessage(str);
};

