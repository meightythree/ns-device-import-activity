import { NativeScriptConfig } from "@nativescript/core";

export default {
  id: "org.nativescript.nsdeviceimportactivity",
  appPath: "src",
  appResourcesPath: "App_Resources",
  android: {
    v8Flags: "--expose_gc",
    markingMode: "none",
  },
  webpackConfigPath: "custom-application-activity.webpack.config.js",
} as NativeScriptConfig;
