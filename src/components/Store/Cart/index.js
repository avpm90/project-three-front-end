import React from 'react';
import { useCart } from 'react-use-cart';
import {
	MinusCircleOutlined,
	PlusCircleOutlined,
	DeleteOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
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
			<div className={style.cartEmpty}>
				<h3>Your Cart is Empty</h3>
			</div>
		);
	return (
		<>
			<section>
				<div>
					<div>
						<table>
							<tr>
								<th>Destination </th>
								<th>Price </th>
								<th>Quantity </th>
							</tr>

							<tbody>
								{items.map((item, index) => {
									return (
										<>
											<tr key={index}>
												<td>{item.destination}</td>
												<td>${item.price}</td>
												<td>{item.quantity}</td>
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
						<h5>Total Items: {totalItems}</h5>
						<h3>Total Price:$ {cartTotal}</h3>
					</div>
					<div>
						<Button danger onClick={() => emptyCart()}>
							Clear Cart
						</Button>

						<PaymentModal />
					</div>
				</div>
			</section>
		</>
	);
};
