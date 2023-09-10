import { useContext } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { TrackerContext } from '../../context/tracker-context';

import './Map.scss';

const newMarker = L.icon({
	iconUrl: require('../../assets/images/icon-location.png'),
	iconSize: [46, 56],
});


const Map = () => {
	const trackerCtx = useContext(TrackerContext);

	return (
		<MapContainer
			className='map'
			center={[51.505, -0.09]}
			zoom={18}
			scrollWheelZoom={false}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<Marker position={[51.505, -0.09]} icon={newMarker}>
				<Popup>{trackerCtx.addressData.location}</Popup>
			</Marker>
		</MapContainer>
	);
};

export default Map;
