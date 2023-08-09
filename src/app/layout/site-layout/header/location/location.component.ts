import { Component, ElementRef, ViewChild } from '@angular/core';
import { MapOptions, tileLayer, latLng, map, Icon } from 'leaflet';
import * as L from 'leaflet';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/layout.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {

  subscription: Subscription;
  myIcon: Icon = new Icon({
    iconUrl: 'https://icons.veryicon.com/png/o/brands/linear-icon-29/location-207.png',
    iconSize: [90, 90],
    iconAnchor: [45, 75]
  })
  map: L.Map;

  options: MapOptions = {
    layers: [tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      detectRetina: true,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })],
    zoom: 16,
    center: latLng([35.69970372674073, 51.33785605430604]),
  };

  constructor(private LayoutServ: LayoutService) { }

  onMapReady(map: L.Map) {
    this.map = map;
    var latLng = map.getCenter()
    let centerMarker = L.marker(latLng, { icon: this.myIcon }).addTo(this.map)

    this.map.on('move', (e: any) => {
      latLng = map.getCenter()
      centerMarker.setLatLng(latLng)
    })
  }

  flyToPoint(lat: number, lng: number) {
    this.map.flyTo(
      [lat, lng],
      17,
      {
        animate: true,
        duration: 3
      }
    )
  }

  getCurrentPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        this.flyToPoint(position.coords.latitude, position.coords.longitude)
      },
        (error: any) => {
          window.alert("دسترسی به موقعیت شما امکان پذیر نمی باشد. لطفا روی نقشه مکان خود را مشخص کنید")
          console.error(error.message);
        })
    }
    else {
      window.alert("No support for geolocation");
      console.error("No support for geolocation");
    }
  }

  savePosition() {
    alert(this.map.getCenter());
    this.LayoutServ.locationBoxVisible.next(false);
  }

  close() {
    this.LayoutServ.locationBoxVisible.next(false);
  }

}
