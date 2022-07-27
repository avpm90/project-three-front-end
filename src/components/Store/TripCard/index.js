import { useState, useEffect } from 'react';
import { api } from '../../../api/api';
import { Card } from 'antd';
import { useCart } from 'react-use-cart';
import CardDetails from '../CardDetails/index';

export function TripCard() {
	const { addItem } = useCart();
	const [clone, setClone] = useState([]);
	const [trips, setTrips] = useState([
		{
			tripImg: '',
			destination: '',
			description: '',
			price: '',
			category: '',
		},
	]);

	// console.log(trips);
	useEffect(() => {
		async function fetchTrips() {
			const response = await api.get('/trip/all-trips');
			setTrips(response.data);
			setClone(response.data);
			console.log(response.data);
		}
		fetchTrips();
	}, []);

	let filteredCategory = [...clone];
	function handleCategory(category) {
		filteredCategory = filteredCategory.filter((currentCategory) => {
			return currentCategory.category === category;
		});
		setTrips(filteredCategory);
	}
	return (
		<>
			<div className="categoriesDiv">
				<button
					onClick={() => {
						setTrips(clone);
					}}
				>
					All Trips
				</button>
				<button
					onClick={() => {
						handleCategory('Adventure');
					}}
				>
					Adventure
				</button>
				<button
					onClick={() => {
						handleCategory('Beach');
					}}
				>
					Beach
				</button>
				<button
					onClick={() => {
						handleCategory('Culture');
					}}
				>
					Culture
				</button>
				<button
					onClick={() => {
						handleCategory('Nightlife');
					}}
				>
					Nightlife
				</button>
				<button
					onClick={() => {
						handleCategory('Relax');
					}}
				>
					Relax
				</button>
			</div>

			<div className="cardsDiv">
				{trips.map((currentTrip) => {
					let item = {
						...currentTrip,
						id: currentTrip._id,
						price: currentTrip.unitPrice,
					};
					console.log(currentTrip);
					return (
						<Card
							className="card"
							style={{ width: '300px', height: '300px' }}
							key={currentTrip._Id}
						>
							<img src={currentTrip.tripImg} alt={currentTrip.destination} />
							<p>{currentTrip.destination}</p>
							<p>{currentTrip.description}</p>
							<p>${currentTrip.unitPrice}</p>

							<CardDetails trip={currentTrip} />

							<button onClick={() => addItem(item)}>Add to Cart</button>
						</Card>
					);
				})}
			</div>
		</>
	);
}
