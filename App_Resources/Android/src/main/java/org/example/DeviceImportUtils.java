package org.example;

import android.app.Activity;
import android.content.Intent;
import android.database.Cursor;
import android.net.Uri;

import android.provider.OpenableColumns;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

public class DeviceImportUtils {

    public static void startFilePickerActivity(Activity activity, String [] mimeTypes, int requestCode) {
        Intent intent = new Intent(Intent.ACTION_OPEN_DOCUMENT);
        intent.addCategory(Intent.CATEGORY_OPENABLE);
        intent.putExtra(Intent.EXTRA_MIME_TYPES, mimeTypes);
        intent.setType("*/*");
        activity.startActivityForResult(intent, requestCode);
    }

    public static String getFileNameFromIntent(Activity activity, Intent intent) {
        Uri uri = intent.getData();
        Cursor returnCursor = activity.getContentResolver().query(uri, null, null, null, null);
        int nameIndex = returnCursor.getColumnIndex(OpenableColumns.DISPLAY_NAME);
        returnCursor.moveToFirst();
        return returnCursor.getString(nameIndex);
    }

    public static string copyFileFromIntent(Activity activity, Intent intent, String outputFileName, String outputSubFolder) {
        final File outputFile = new File(outputSubFolder, outputFileName);
        final Uri uri = intent.getData();
        try (
                InputStream inputStream = activity.getContentResolver().openInputStream(uri);
                OutputStream outputStream = new FileOutputStream(outputFile);
        ) {
            byte[] buffer = new byte[4 * 1024];
            int read;
            while ((read = inputStream.read(buffer)) != -1) {
                outputStream.write(buffer, 0, read);
            }
            outputStream.flush();
            return outputFile.getPath();
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
    }
}
