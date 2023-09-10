import { useState, useEffect } from 'react';
import { TrackerContext } from './tracker-context';
import { Error, AddressData } from '../models/models';
import { LatLngTuple } from 'leaflet';

interface TrackerContextProviderProps {
	children: React.ReactNode;
}

const TrackerContextProvider: React.FC<TrackerContextProviderProps> = ({
	children,
}) => {
	const API_KEY = process.env.REACT_APP_API_KEY;

	const [result, setResult] = useState<AddressData>({
		ipAddress: '',
		location: '',
		timezone: '',
		isp: '',
	});
	const [latLng, setLatLng] = useState<LatLngTuple>([0, 0]);
	const [error, setError] = useState<Error>({ isError: false, errorMsg: '' });

	const searchIPHandler = async (value: string) => {
		if (value.length > 0) {
			setError({ isError: false, errorMsg: '' });
			try {
				const response = await fetch(
					`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${value}`
				);

				if (!response.ok) {
					setError({ isError: true, errorMsg: 'Incorrect input value' });
					return;
				}

				const data = await response.json();

				const searchResult = {
					ipAddress: data.ip,
					location: `${data.location.city}, ${data.location.region} ${data.location.postalCode}`,
					timezone: `UTC ${data.location.timezone}`,
					isp: data.isp,
				};

				const resultLatLng: LatLngTuple = [
					+data.location.lat.toFixed(2),
					+data.location.lng.toFixed(2),
				];

				setResult(searchResult);
				setLatLng(resultLatLng);
				return;
			} catch (error) {
				setError({ isError: true, errorMsg: 'Something went wrong' });
			}

			return;
		}

		setError({ isError: true, errorMsg: 'Input field cannot be empty.' });
	};

	useEffect(() => {
		searchIPHandler(' ');
	}, []);

	return (
		<TrackerContext.Provider
			value={{
				addressData: result,
				searchIPHandler: searchIPHandler,
				error: error,
				latLng: latLng,
			}}
		>
			{children}
		</TrackerContext.Provider>
	);
};

export default TrackerContextProvider;
