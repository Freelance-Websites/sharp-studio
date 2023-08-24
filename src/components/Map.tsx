import React from 'react';
import Image from 'next/image';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const styles = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || ''
  });

  const [map, setMap] = React.useState(null);

  const containerStyle = {
    width: '100%',
    height: '100vh'
  };

  const center = {
    lat: 25.9694088,
    lng: -80.1455022
  };

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="relative w-full h-full border-solid border-r-white border-r-2 hidden lg:block">
        <Image
          src="/images/florida.jpg"
          alt="Florida, USA"
          fill={true}
          className="w-full h-full object-cover"
        />
      </div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        onUnmount={onUnmount}
        options={{styles}}
      >
        <Marker
          label={{
            text: "20900 NE 30th Ave, Aventura, FL 33180, USA",
            className: "shadow-lg bg-white p-2 rounded-md text-black text-sm tracking-wider font-neue-regular absolute -top-12 -left-40",
          }}
          position={center}
          icon={{
            url: '/images/icons/marker.svg',
          }}
        />
      </GoogleMap>
    </div>
  ) : <></>
}

export default React.memo(Map);