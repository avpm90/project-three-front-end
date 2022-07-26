import { TripCard } from '../../components/Store/TripCard';
import { Cart } from '../../components/Store/Cart';
import { CartProvider } from 'react-use-cart';
import { NavBar } from '../../components/HomePage/navBar';

import CardDetails from '../../components/Store/CardDetails/teste';

export function Store() {
	return (
		<>
			<NavBar />
			<div
				className="container"
				style={{ display: 'flex', flexDirection: 'row' }}
			>
				<CartProvider>
					<div className="tripCard" style={{ width: '70vw', height: '70vh' }}>
						<TripCard />
					</div>
					<div className="cart">
						<Cart />
						<CardDetails />
					</div>
				</CartProvider>
			</div>
		</>
	);
}
