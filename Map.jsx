import React, { Component } from 'react';
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';


const mapStyles = {
    position: 'relative',
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    var points = [
        { lat: 33.641216, lng: -117.918823 },
        { lat: 33.130360, lng: -117.085358 },
        { lat: 32.792858, lng: -115.565552 },
        { lat: 32.5149, lng: -117.0382 }
    ]
    var bounds = new this.props.google.maps.LatLngBounds();
    for (var i = 0; i < points.length; i++) {
      bounds.extend(points[i]);
    }
    return (
    <Map
        google={this.props.google}
        zoom={10}
        className={'map'}
        
        style={mapStyles}
        initialCenter={{
         lat: 33.04746858742063,
         lng: -117.2962181088272
         }}
         bounds={bounds}
         onClick={this.onMapClicked}
    >
    <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        {/* <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>     */}
 
  
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCPBPsbtwIz7z4JULx9XIn5Mh7BJVCQObU'
})(MapContainer);