import { Button, Modal } from 'antd';
import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import Draggable from 'react-draggable';

import { api } from '../../../api/api';

const CardDetails = ({ trip }) => {
	console.log(trip);

	const [trips, setTrips] = useState([
		{
			destination: '',
			description: '',
			unitPrice: '',
			category: '',
		},
	]);

	const [visible, setVisible] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const [bounds, setBounds] = useState({
		left: 0,
		top: 0,
		bottom: 0,
		right: 0,
	});
	const draggleRef = useRef(null);

	const showModal = () => {
		setVisible(true);
	};

	const handleOk = (e) => {
		console.log(e);
		setVisible(false);
	};

	const handleCancel = (e) => {
		console.log(e);
		setVisible(false);
	};

	const onStart = (_event, uiData) => {
		const { clientWidth, clientHeight } = window.document.documentElement;
		const targetRect = draggleRef.current?.getBoundingClientRect();

		if (!targetRect) {
			return;
		}

		setBounds({
			left: -targetRect.left + uiData.x,
			right: clientWidth - (targetRect.right - uiData.x),
			top: -targetRect.top + uiData.y,
			bottom: clientHeight - (targetRect.bottom - uiData.y),
		});
	};

	return (
		<>
			<Button onClick={showModal}>Open Draggable Modal</Button>
			{trip && (
				<Modal
					title={
						<div
							style={{
								width: '100%',
								cursor: 'move',
							}}
							onMouseOver={() => {
								if (disabled) {
									setDisabled(false);
								}
							}}
							onMouseOut={() => {
								setDisabled(true);
							}} // fix eslintjsx-a11y/mouse-events-have-key-events
							// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
							onFocus={() => {}}
							onBlur={() => {}} // end
						>
							Draggable Modal
						</div>
					}
					visible={visible}
					onOk={handleOk}
					onCancel={handleCancel}
					// modalRender={(modal) => (
					// 	<Draggable
					// 		disabled={disabled}
					// 		bounds={bounds}
					// 		onStart={(event, uiData) => onStart(event, uiData)}
					// 	>
					// 		<div ref={draggleRef}>{modal}</div>
					// 	</Draggable>
					// )}
				>
					{/* <p>{trips.tripImg}</p> */}
					<p>{trip.destination}</p>
					<p>{trip.description}</p>
					<p>${trip.unitPrice}</p>
				</Modal>
			)}
		</>
	);
};

export default CardDetails;
