"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multiply = multiply;
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
//# sourceMappingURL=index.js.map