import { useContext, useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { LatLngTuple } from 'leaflet';
import { TrackerContext } from '../../context/tracker-context';

import './Map.scss';

const Map = () => {
	const trackerCtx = useContext(TrackerContext);
	const [mapCenter, setMapCenter] = useState<LatLngTuple>(trackerCtx.latLng);

	const newMarker = L.icon({
		iconUrl: require('../../assets/images/icon-location.png'),
		iconSize: [46, 56],
		popupAnchor: [0, -28],
	});

	useEffect(() => {
		setMapCenter(trackerCtx.latLng);
	}, [trackerCtx.latLng]);

	return (
		<MapContainer
			key={JSON.stringify(mapCenter)}
			className='map'
			center={mapCenter}
			zoom={18}
			scrollWheelZoom={true}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<Marker position={trackerCtx.latLng} icon={newMarker}>
				<Popup>{trackerCtx.addressData.location}</Popup>
			</Marker>
		</MapContainer>
	);
};

export default Map;
