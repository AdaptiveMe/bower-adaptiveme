/// <reference path="bower_components/adaptiveme/adaptive.d.ts" />
var version = Adaptive.AppRegistryBridge.getInstance().getAPIVersion();
document.getElementById("version").innerHTML = version;