import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

describe('Counter', () => {
	it('should have 0 counts when no start prop passed', () => {
		const counter = shallow(<Counter />);
		expect(counter.find('#count').text()).toBe('0');
	});

	it('should have 10 counts when start prop is equal to 10', () => {
		const counter = shallow(<Counter start={10} />);
		expect(counter.find('#count').text()).toBe('10');
	});

	it('should contain exactly one increment and exactly one subtract buttons', () => {
		const counter = shallow(<Counter />);
		const incrementButton = counter.find('#increment');
		const decrementButton = counter.find('#decrement');

		expect(incrementButton.length).toEqual(1);
		expect(decrementButton.length).toEqual(1);
	});

	it('should increment value by 1 after increment click', () => {
		const counter = shallow(<Counter start={10} />);
		const incrementButton = counter.find('#increment');
		const setButton = counter.find('#set');

		incrementButton.simulate('click');

		expect(counter.find('p').text()).toBe('11');

		counter.update();
		setButton.simulate('click');

		expect(counter.find('p').text()).toBe('10');
	});

	it('should update counter after reset click to initial value', () => {
		const counter = shallow(<Counter />);
		const incrementButton = counter.find('#increment');
		const resetButton = counter.find('#reset');

		incrementButton.simulate('click');
		expect(counter.find('p').text()).toBe('1');
		counter.update();

		resetButton.simulate('click');
		expect(counter.find('p').text()).toBe('0');
	});
});
