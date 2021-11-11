import {
  AndroidActivityCallbacks,
  setActivityCallbacks,
} from "@nativescript/core";

export const FILE_IMPORT_REQUEST_CODE = 101;

@NativeClass()
@JavaProxy("org.example.MainActivity")
export class Activity extends androidx.appcompat.app.AppCompatActivity {
  public isNativeScriptActivity: boolean;
  private _callbacks: AndroidActivityCallbacks;

  public onCreate(savedInstanceState: any /** android.os.Bundle */): void {
    // Set isNativeScriptActivity in onCreate (as done in the original NativeScript activity code).
    // The JS constructor might not be called because the activity is created from Android.
    this.isNativeScriptActivity = true;

    if (!this._callbacks) {
      setActivityCallbacks(this);
    }

    this._callbacks.onCreate(
      this,
      savedInstanceState,
      this.getIntent(),
      super.onCreate
    );
  }

  public onSaveInstanceState(outState: any /** android.os.Bundle */): void {
    this._callbacks.onSaveInstanceState(
      this,
      outState,
      super.onSaveInstanceState
    );
  }

  public onStart(): void {
    this._callbacks.onStart(this, super.onStart);
  }

  public onStop(): void {
    this._callbacks.onStop(this, super.onStop);
  }

  public onDestroy(): void {
    this._callbacks.onDestroy(this, super.onDestroy);
  }

  public onBackPressed(): void {
    this._callbacks.onBackPressed(this, super.onBackPressed);
  }

  public onRequestPermissionsResult(
    requestCode: number,
    permissions: Array<string>,
    grantResults: Array<number>
  ): void {
    this._callbacks.onRequestPermissionsResult(
      this,
      requestCode,
      permissions,
      grantResults,
      undefined /* TODO: Enable if needed*/
    );
  }

  public onActivityResult(
    requestCode: number,
    resultCode: number,
    data: any /** android.content.Intent */
  ): void {
    this._callbacks.onActivityResult(
      this,
      requestCode,
      resultCode,
      data,
      super.onActivityResult
    );
  }
}
