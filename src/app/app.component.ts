import { Component } from "@angular/core";

import { DeviceImportService } from "./device-import.service";

@Component({
  selector: "ns-app",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  constructor(private readonly deviceImportService: DeviceImportService) {}

  onTap(): void {
    this.deviceImportService.openFilePicker();
  }
}
