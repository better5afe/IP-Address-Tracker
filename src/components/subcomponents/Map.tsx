import { useContext } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { LatLngTuple } from 'leaflet';
import { TrackerContext } from '../../context/tracker-context';

import './Map.scss';

const Map = () => {
	const trackerCtx = useContext(TrackerContext);

    const position: LatLngTuple = [51.505, -0.09]

	const newMarker = L.icon({
		iconUrl: require('../../assets/images/icon-location.png'),
		iconSize: [46, 56],
		popupAnchor: [0, -28],
    });

	return (
		<MapContainer
			className='map'
			center={position}
			zoom={18}
			scrollWheelZoom={true}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<Marker position={position} icon={newMarker}>
				<Popup>{trackerCtx.addressData.location}</Popup>
			</Marker>
		</MapContainer>
	);
};

export default Map;
