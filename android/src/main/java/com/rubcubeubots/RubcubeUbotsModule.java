package com.rubcubeubots;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

import br.com.ubots.sdk.UBotsSDK;
import br.com.ubots.sdk.presentation.ui.chat.ChatActivity;

@ReactModule(name = RubcubeUbotsModule.NAME)
public class RubcubeUbotsModule extends ReactContextBaseJavaModule {
  public static final String NAME = "RubcubeUbots";

  public RubcubeUbotsModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }


  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod
  public void multiply(double a, double b, Promise promise) {
    promise.resolve(a * b);
  }

  @ReactMethod
  public void initialize(String ubotsJID, String hostname, String domain, String resource, int port) {
    UBotsSDK.Companion.getInstance(getCurrentActivity()).initAnonymous(
      ubotsJID,
      hostname,
      domain,
      resource,
      port
    );

    UBotsSDK.Companion.getInstance(getCurrentActivity()).connect();
  }

  @ReactMethod
  public void openChat(String botName) {
    // Intent i = new Intent(getCurrentActivity(), ChatActivity.class);
    // i.putExtra("title", botName);
    // getCurrentActivity().startActivity(i);
  }

  @ReactMethod
  public void disconnect() {
    
  }
}
