import React from 'react';
import { useCart } from 'react-use-cart';
import {
	ShoppingCartOutlined,
	MinusCircleOutlined,
	PlusCircleOutlined,
	DeleteOutlined,
} from '@ant-design/icons';

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
			<h2>
				Your Cart is Empty <ShoppingCartOutlined />
			</h2>
		);
	console.log(items);
	return (
		<>
			<section>
				<div>
					<div>
						<h5>
							Cart Items: ({totalUniqueItems}) Total Items: ({totalItems})
						</h5>
						<table>
							<tbody>
								{items.map((item, index) => {
									return (
										<tr key={index}>
											<td>{/* <img /> */}</td>
											<td>Destination: {item.destination}</td>
											<td>Price: ${item.price}</td>
											<td>Quantity: ({item.quantity})</td>
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
									);
								})}
							</tbody>
						</table>
					</div>
					<div>
						<h2>Total Price: {cartTotal}</h2>
					</div>
					<div>
						<button onClick={() => emptyCart()}>Clear Cart</button>
						<button>Buy Now</button>
					</div>
				</div>
			</section>
		</>
	);
};
