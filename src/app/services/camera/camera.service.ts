import { Injectable } from '@angular/core';
import { Plugins, CameraResultType, CameraPhoto, CameraSource } from '@capacitor/core';

const { Camera } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor() { }

  public takePicture(): Promise<CameraPhoto> {
    return Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
  }

  public async convertImageToB64(webPath: string): Promise<string | ArrayBuffer> {
    const response = await fetch(webPath);
    const blob = await response.blob();

    return this.convertBlobToBase64(blob);
  }

  private convertBlobToBase64(blob: Blob): Promise<string | ArrayBuffer> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  }
}
