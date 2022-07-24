import { useState, useEffect } from 'react';
import { api } from '../../../api/api';
import { Card } from 'antd';

export function TripCard() {
	const [trips, setTrips] = useState([
		{
			tripImg: '',
			destination: '',
			description: '',
			unitPrice: '',
		},
	]);
	console.log(trips);
	useEffect(() => {
		async function fetchTrips() {
			const response = await api.get('/trip/all-trips');
			setTrips(response.data);
		}
		fetchTrips();
	}, []);

	return (
		<>
			<div>
				{trips.map((currentTrip) => {
					console.log(trips);
					return (
						<Card key={currentTrip._Id}>
							<p>{currentTrip.tripImg}</p>
							<p>{currentTrip.destination}</p>
							<p>{currentTrip.description}</p>
							<p>{currentTrip.unitPrice}</p>
							<button>See Details</button>
							<button>Add to Cart</button>
						</Card>
					);
				})}
			</div>
		</>
	);
}
