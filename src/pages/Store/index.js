import { TripCard } from '../../components/Store/TripCard';
import { Cart } from '../../components/Store/Cart';
import { CartProvider } from 'react-use-cart';

export function Store() {
	return (
		<>
			<div>Cart HERE</div>
			<div>
				<CartProvider>
					<Cart />
					<TripCard />
				</CartProvider>
			</div>
		</>
	);
}
