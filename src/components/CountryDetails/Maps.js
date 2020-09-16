 import React, { Component } from 'react';
import { Map, GoogleApiWrapper,Marker,InfoWindow } from 'google-maps-react';

export class Maps extends Component {
  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };
  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

onClose = props => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }
};
  render() {
    console.log(this.props);
    
    return (
      <div style={{ height: '50vh', width: '100%' }}>
        <Map
        google={this.props.google}
        zoom={5}
        initialCenter={{
         lat: this.props.countries.lat,
         lng: this.props.countries.long
        }}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={this.props.countries.iso3}
          flag={this.props.countries.flag}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div> 
            <h4><img src={this.state.selectedPlace.flag} width='40px'/>{this.state.selectedPlace.name}</h4>
            <p>Deaths : {this.props.deaths}</p>
            <p>Active : {this.props.active}</p>
            <p>Recovered : {this.props.recovered}</p>
          </div>
        </InfoWindow>
      </Map>
      </div>
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDBZxulkGzioTgw6wxprO5YMWf0RZvxFA4'
})(Maps);