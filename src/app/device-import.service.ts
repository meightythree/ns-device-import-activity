import { Injectable } from "@angular/core";
import { Folder, knownFolders, path } from "@nativescript/core";

import { FILE_IMPORT_REQUEST_CODE } from "./activity.android";

import {
  startFilePickerActivity,
  getFileNameFromIntent,
  copyFileFromIntent,
} from "./device-import-utils-proxy";

const MIME_TYPES = [
  "application/pdf",
  "application/epub+zip",
  "application/mobi+zip",
];

@Injectable({ providedIn: "root" })
export class DeviceImportService {
  public static instance: DeviceImportService;

  constructor() {
    DeviceImportService.instance = this;
  }

  openFilePicker(): void {
    startFilePickerActivity(MIME_TYPES, FILE_IMPORT_REQUEST_CODE);
  }

  importFile(resultCode: number, intent: any): void {
    const fileName = getFileNameFromIntent(intent);
    const documentsFolder = knownFolders.documents();
    const outputFolderPath = path.join(documentsFolder.path, "hello");
    Folder.fromPath(outputFolderPath);
    const success = copyFileFromIntent(intent, fileName, outputFolderPath);
    console.log({ success }); // TODO: handle result :)
  }
}
