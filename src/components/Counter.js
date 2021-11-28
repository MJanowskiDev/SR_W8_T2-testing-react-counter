import { useState } from 'react';
const Counter = ({ start }) => {
	const [ count, setCount ] = useState(start ? start : 0);
	const [ valueByHand, setValueByHand ] = useState(start ? start : 0);

	const onIncrementHandle = () => {
		setCount(count + 1);
	};
	const onDecrementHandle = () => {
		setCount(count - 1);
	};
	const onSetHandle = () => {
		setCount(valueByHand);
	};
	const onResetHandle = () => {
		setCount(0);
	};

	const onInputChanged = (e) => {
		setValueByHand(e.target.value);
	};

	return (
		<div>
			<div>
				<button id="increment" onClick={onIncrementHandle}>
					+
				</button>
				<button id="decrement" onClick={onDecrementHandle}>
					-
				</button>
			</div>
			<div>
				<input value={valueByHand} onChange={onInputChanged} type="number" />
				<button id="set" onClick={onSetHandle}>
					Set
				</button>
			</div>
			<div>
				<button id="reset" onClick={onResetHandle}>
					Reset
				</button>
			</div>
			<p id="count">{count}</p>
		</div>
	);
};

export default Counter;
