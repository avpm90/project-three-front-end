import { Button, Modal, DatePicker, Form, Input, InputNumber } from 'antd';
import { IdcardOutlined, CreditCardOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { api } from '../../../api/api';
import { useNavigate } from 'react-router-dom';

export const PaymentModal = ({ trips, orderTotal }) => {
	console.log(trips);
	console.log(orderTotal);
	// const navigate = useNavigate();
	// const [order, setOrder] = useState({
	// 	trips: items,
	// 	orderTotal: cartTotal,
	// });

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			await api.post('/order/new-order', trips, orderTotal);
			// navigate('/');
		} catch (error) {
			console.log(error);
		}
	}

	const [visible, setVisible] = useState(false);
	const [confirmLoading, setConfirmLoading] = useState(false);
	const [modalText, setModalText] = useState('Content of the modal');
	const [componentSize, setComponentSize] = useState('default');
	const onFormLayoutChange = ({ size }) => {
		setComponentSize(size);
	};

	const showModal = () => {
		setVisible(true);
	};

	const handleOk = () => {
		setModalText('The modal will be closed after two seconds');
		setConfirmLoading(true);
		setTimeout(() => {
			setVisible(false);
			setConfirmLoading(false);
		}, 2000);
	};

	const handleCancel = () => {
		console.log('Clicked cancel button');
		setVisible(false);
	};

	return (
		<>
			<Button onClick={showModal}>Checkout</Button>
			<Modal
				title="Payment Information"
				visible={visible}
				onOk={handleOk}
				confirmLoading={confirmLoading}
				onCancel={handleCancel}
				okText="Pay Now"
				closable={false}
			>
				<Form
					labelCol={{
						span: 4,
					}}
					wrapperCol={{
						span: 14,
					}}
					layout="horizontal"
					initialValues={{
						size: componentSize,
					}}
					onValuesChange={onFormLayoutChange}
					size={componentSize}
				>
					<label htmlFor="input-owner">
						Card Owner <IdcardOutlined />
					</label>
					<Form.Item>
						<Input name="owner" />
					</Form.Item>
					<label htmlFor="input-card">
						Card Number <CreditCardOutlined />
					</label>
					<Form.Item>
						<Input name="card" />
					</Form.Item>
					<label>Expiration Date</label>
					<Form.Item>
						<DatePicker />
					</Form.Item>
					<label>Security Code</label>
					<Form.Item>
						<Input />
					</Form.Item>
					<Form.Item label="Button">
						<Button>Button</Button>
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
};
