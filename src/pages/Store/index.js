import { TripCard } from '../../components/Store/TripCard';
import { Cart } from '../../components/Store/Cart';
import { CartProvider } from 'react-use-cart';
import { NavBar } from '../../components/HomePage/navBar';
import { ShoppingCartOutlined } from '@ant-design/icons';
import style from '../Store/style.module.css';

export function Store() {
	return (
		<>
			<NavBar />
			<div
				className={style.container}
				style={{ display: 'flex', flexDirection: 'row' }}
			>
				<CartProvider>
					<div className={style.tripCard}>
						<TripCard />
					</div>
					<div
						className={style.cart}
						style={{
							width: '22vw',
							height: '85vh',
						}}
					>
						<h1>
							Cart <ShoppingCartOutlined />
						</h1>
						<Cart />
					</div>
				</CartProvider>
			</div>
		</>
	);
}
