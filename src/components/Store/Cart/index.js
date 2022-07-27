import React from 'react';
import { useCart } from 'react-use-cart';
import {
	MinusCircleOutlined,
	PlusCircleOutlined,
	DeleteOutlined,
} from '@ant-design/icons';
import { PaymentModal } from '../PaymentModal/index';
import style from '../Cart/style.module.css';

export const Cart = () => {
	const {
		isEmpty,
		totalUniqueItems,
		items,
		totalItems,
		cartTotal,
		updateItemQuantity,
		removeItem,
		emptyCart,
	} = useCart();

	if (isEmpty)
		return (
			<div
				className={style.container}
				style={{
					display: 'flex',
					flexDirection: 'column',
					width: '24vw',
					height: '85vh',
				}}
			>
				<h3>Your Cart is Empty</h3>
			</div>
		);
	// console.log(items);
	return (
		<>
			<section>
				<div>
					<div>
						<tr>
							<th>Destination</th>
							<th>Price</th>
							<th>Quantity</th>
						</tr>
						<table>
							<tbody>
								{items.map((item, index) => {
									return (
										<>
											<tr key={index}>
												<td>{/* <img /> */}</td>
												<td>{item.destination}</td>
												<td>${item.price}</td>
												<td>({item.quantity})</td>
												<td>
													<button
														onClick={() =>
															updateItemQuantity(item.id, item.quantity - 1)
														}
													>
														{<MinusCircleOutlined />}
													</button>
													<button
														onClick={() =>
															updateItemQuantity(item.id, item.quantity + 1)
														}
													>
														{<PlusCircleOutlined />}
													</button>
													<button onClick={() => removeItem(item.id)}>
														{<DeleteOutlined />}
													</button>
												</td>
											</tr>
										</>
									);
								})}
							</tbody>
						</table>
					</div>
					<div>
						<h5>
							Cart Items: ({totalUniqueItems}) Total Items: ({totalItems})
						</h5>
						<h2>Total Price:$ {cartTotal}</h2>
					</div>
					<div>
						<button onClick={() => emptyCart()}>Clear Cart</button>
						<PaymentModal />
					</div>
				</div>
			</section>
		</>
	);
};
