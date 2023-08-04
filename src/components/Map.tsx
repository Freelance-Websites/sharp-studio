import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");
import { compose, withProps } from "recompose";

import { SmallText } from '@/components/Typography';

const styles = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];

const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}`,
    loadingElement: <div style={{ height: `100vh` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100vh` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(() =>
  <section className="section">
    <GoogleMap
      defaultZoom={17}
      defaultCenter={{ lat: 25.9694088, lng: -80.1455022 }}
      defaultOptions={{ styles }}
    >
      <MarkerWithLabel
        position={{ lat: 25.9694088, lng: -80.1455022 }}
        labelAnchor={new google.maps.Point(160, 140)}
        icon={{ url: '/images/icons/marker.svg' }}
      >
        <div className="bg-white p-2 rounded-md"><SmallText color="text-black">20900 NE 30th Ave, Aventura, FL 33180, USA</SmallText></div>
      </MarkerWithLabel>
    </GoogleMap>
  </section>
)

export default Map;