import { useState, useEffect } from 'react';
import { api } from '../../../api/api';
import { Card } from 'antd';
import { useCart } from 'react-use-cart';

export function TripCard() {
	const { addItem } = useCart();

	const [trips, setTrips] = useState([
		{
			tripImg: '',
			destination: '',
			description: '',
			price: '',
		},
	]);
	// console.log(trips);
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
				<div>All Trips</div>
				<section>
					{trips.map((currentTrip, index) => {
						let item = {
							...currentTrip,
							id: currentTrip._id,
							price: currentTrip.unitPrice,
						};
						return (
							<Card key={currentTrip._Id}>
								<p>{currentTrip.tripImg}</p>
								<p>{currentTrip.destination}</p>
								<p>{currentTrip.description}</p>
								<p>${currentTrip.unitPrice}</p>
								{/* <p>{currentTrip}</p> */}
								{/* <p>{index}</p> */}

								<button>See Details</button>
								<button onClick={() => addItem(item)}>Add to Cart</button>
							</Card>
						);
					})}
				</section>
			</div>
		</>
	);
}
