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
							<tr className={style.tableTr}>
								<th>Destination </th>
								<th>Price </th>
								<th>Quantity </th>
							</tr>

							<tbody>
								{items.map((item, index) => {
									return (
										<>
											<tr key={index} className={style.tableTd}>
												<td className={style.tdDestination}>
													{item.destination}
												</td>
												<td className={style.tdPrice}>${item.price}</td>
												<td className={style.tdQuantity}>{item.quantity}</td>
												<td>
													<span
														onClick={() =>
															updateItemQuantity(item.id, item.quantity - 1)
														}
													>
														{<MinusCircleOutlined />}
													</span>
													<span
														onClick={() =>
															updateItemQuantity(item.id, item.quantity + 1)
														}
													>
														{<PlusCircleOutlined />}
													</span>
													<span onClick={() => removeItem(item.id)}>
														{<DeleteOutlined />}
													</span>
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
						<h3>
							<strong>Total Price:</strong>${cartTotal}
						</h3>
					</div>
					<div className={style.btnDiv}>
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
