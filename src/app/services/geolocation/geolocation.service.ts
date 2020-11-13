import { Injectable } from '@angular/core';
import { GeolocationPosition, Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  public getLocation(): Promise<GeolocationPosition> {
    return Geolocation.getCurrentPosition();
  }
}
