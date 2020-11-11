import { Injectable } from "@angular/core";
import { MapsAPILoader } from "@agm/core";

import { Observable, BehaviorSubject, from } from "rxjs";


declare let google: any;

@Injectable({
  providedIn: 'root'
})

export class GoogleServiceService {
  private autoPlaceService: any;
  private geoCoder: any;

  private data: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  private gps: BehaviorSubject<any> = new BehaviorSubject<any>({});
  currentData = this.data.asObservable();
  currentGps  = this.gps.asObservable();

  constructor(
    private maps: MapsAPILoader,
  ) {

    this.maps.load().then(() => {
      this.autoPlaceService = new google.maps.places.AutocompleteService();
      this.geoCoder = new google.maps.Geocoder();
    });

  }

  // Wrapper for Google Places Autocomplete Prediction API, returns observable
  // Crear un modelo para data, asi tenes una estuctura fija de la informacion 
  getPlacePredictions(term: string): Observable<any> {
    return this.autoPlaceService.getPlacePredictions({ input: term }, (data) => {
      if (data) {
        //console.log(data);
        this.data.next(data);
      }
    });
  }
  

  getGpsPlace(address: string): Observable<any>{
    return this.geoCoder.geocode({address}, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        let addressLat = results[0].geometry.location.lat();
        let addressLng = results[0].geometry.location.lng();
        let GPS = {
          lat: addressLat, 
          lng: addressLng
        };
        //GPS.lat = this.helper.notUndefined(addressLat) ? addressLat: 0;
        //GPS.lng = this.helper.notUndefined(addressLng) ? addressLng: 0;
        this.gps.next(GPS);
        console.log({ addressLat, addressLng, GPS });
      }
  
    });
  }


}
