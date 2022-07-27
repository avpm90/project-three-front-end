import { useState, useEffect } from 'react';
import { api } from '../../../api/api';
// import { Card } from 'antd';
import { useCart } from 'react-use-cart';
import CardDetails from '../CardDetails/index';
import { ShoppingCartOutlined } from '@ant-design/icons';
import style from '../TripCard/style.module.css';

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
			<div className={style.container}>
				<div className={style.categoriesDiv}>
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

				<div className={style.cardsDiv}>
					{trips.map((currentTrip) => {
						let item = {
							...currentTrip,
							id: currentTrip._id,
							price: currentTrip.unitPrice,
						};

						return (
							<div className={style.card} key={currentTrip._Id}>
								<img
									className={style.cardImg}
									src={currentTrip.tripImg}
									alt={currentTrip.destination}
								/>
								<div className={style.infoCards}>
									<p>{currentTrip.destination}</p>
									<p className={style.infoCard_destaque}>
										${currentTrip.unitPrice}
									</p>
								</div>
								<div className={style.cardGroupBtn}>
									<CardDetails trip={currentTrip} />

									<button
										className={style.btnCart}
										onClick={() => addItem(item)}
									>
										<ShoppingCartOutlined />
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
