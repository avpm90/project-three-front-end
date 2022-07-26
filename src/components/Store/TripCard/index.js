import { useState, useEffect } from 'react';
import { api } from '../../../api/api';
import { Card } from 'antd';
import { useCart } from 'react-use-cart';

export function TripCard() {
	const { addItem } = useCart();

	// const [adventure, setAdventure] = useState(false);
	// const [culture, setCulture] = useState(false);

	// const [nightLife, setNightLife] = useState(false);
	// const [relax, setRelax] = useState(false);

	// function handleA() {
	// 	setAdventure(true);
	// 	setCulture(false);
	// }
	// function handleC() {
	// 	setAdventure(false);
	// 	setCulture(true);
	// }

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
			<div>
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
						return (
							<Card key={currentTrip._Id}>
								<p>{currentTrip.tripImg}</p>
								<p>{currentTrip.destination}</p>
								<p>{currentTrip.description}</p>
								<p>${currentTrip.unitPrice}</p>
								{/* <p>{currentTrip}</p> */}
								{/* <p>{index}</p> */}

								{/* {adventure && <p>{currentTrip}</p>}
								{culture && <p>{currentTrip}</p>} */}

								<button>See Details</button>
								<button onClick={() => addItem(item)}>Add to Cart</button>
							</Card>
						);
					})}
				</div>
			</div>
		</>
	);
}
