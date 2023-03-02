import { NativeModules, Platform } from 'react-native';
const LINKING_ERROR = `The package 'react-native-rubcube-ubots' doesn't seem to be linked. Make sure: \n\n` + Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const RubcubeUbots = NativeModules.RubcubeUbots ? NativeModules.RubcubeUbots : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
export function multiply(a, b) {
  return RubcubeUbots.multiply(a, b);
}
export function initialize(ubotsJID, hostname, domain, resource, port) {
  return RubcubeUbots.openChat(ubotsJID, hostname, domain, resource, port);
}
export function openChat(botName) {
  return RubcubeUbots.openChat(botName);
}
export function disconnect() {
  return RubcubeUbots.disconnect();
}
//# sourceMappingURL=index.js.map