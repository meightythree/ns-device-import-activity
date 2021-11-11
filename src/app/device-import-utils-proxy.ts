import { Application } from "@nativescript/core";

declare let org: any;

export const startFilePickerActivity = (
  mimeTypes: string[],
  requestCode: number
): void =>
  org.example.DeviceImportUtils.startFilePickerActivity(
    Application.android.foregroundActivity,
    mimeTypes,
    requestCode
  );

export const getFileNameFromIntent = (intent: any): string =>
  org.example.DeviceImportUtils.getFileNameFromIntent(
    Application.android.foregroundActivity,
    intent
  );

export const copyFileFromIntent = (
  intent: any,
  outputFileName: string,
  outputSubFolder: string
): boolean =>
  org.example.DeviceImportUtils.copyFileFromIntent(
    Application.android.foregroundActivity,
    intent,
    outputFileName,
    outputSubFolder
  );
