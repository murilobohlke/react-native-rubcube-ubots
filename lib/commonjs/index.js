"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disconnect = disconnect;
exports.initialize = initialize;
exports.multiply = multiply;
exports.openChat = openChat;
var _reactNative = require("react-native");
const LINKING_ERROR = `The package 'react-native-rubcube-ubots' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const RubcubeUbots = _reactNative.NativeModules.RubcubeUbots ? _reactNative.NativeModules.RubcubeUbots : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
function multiply(a, b) {
  return RubcubeUbots.multiply(a, b);
}
function initialize(ubotsJID, hostname, domain, resource, port) {
  return RubcubeUbots.initialize(ubotsJID, hostname, domain, resource, port);
}
function openChat(botName) {
  return RubcubeUbots.openChat(botName);
}
function disconnect() {
  return RubcubeUbots.disconnect();
}
//# sourceMappingURL=index.js.map