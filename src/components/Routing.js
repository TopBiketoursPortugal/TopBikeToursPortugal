import {PropTypes} from 'react';
import {MapLayer} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import {isEqual} from 'lodash';

export default class RoutingMachine extends MapLayer {
  static propTypes = {
    itineraryReady: PropTypes.func,
  };

  componentWillMount() {
    super.componentWillMount();
    const {coords, map} = this.props;
    this.leafletElement = L.Routing.control({
      position: 'topleft',
      waypoints: [
        L.latLng(coords.fromLat, coords.fromLon),
        L.latLng(coords.toLat, coords.toLon),
      ],
      collapsible: false,
      show: false,
    }).addTo(map);
    this.leafletElement.on('routeselected', (e) => {
      this.props.itineraryReady({e});
      console.log(e);
    });
  }

  componentWillReceiveProps(newProps) {
    const {coords} = newProps;
    if (!isEqual(coords, this.props.coords)) {
      this.leafletElement.getPlan().setWaypoints([
        L.latLng(coords.fromLat, coords.fromLon),
        L.latLng(coords.toLat, coords.toLon),
      ]);
    }
  }

  render() {
    return null;
  }
}