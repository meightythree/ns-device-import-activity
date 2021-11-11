import { Injectable } from "@angular/core";
import { FILE_IMPORT_REQUEST_CODE } from "./activity.android";

import { startFilePickerActivity } from "./device-import-utils-proxy";

const MIME_TYPES = [
  "application/pdf",
  "application/epub+zip",
  "application/mobi+zip",
];

@Injectable({ providedIn: "root" })
export class DeviceImportService {
  openFilePicker(): void {
    startFilePickerActivity(MIME_TYPES, FILE_IMPORT_REQUEST_CODE);
  }
}
