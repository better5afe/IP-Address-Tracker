import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';

import './Map.scss'

const Map = () => {
	return (
		<MapContainer className='map' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<Marker position={[51.505, -0.09]}>
				<Popup>
					Sample popup
				</Popup>
			</Marker>
		</MapContainer>
	);
};

export default Map;
