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

  public async getBlob(webPath: string): Promise<Blob>{
    const response = await fetch(webPath);
    const blob = await response.blob();
    return blob;
  }

}
