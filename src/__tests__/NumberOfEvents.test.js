import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('NumberOfEvents component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    test('render text input', () => {
        expect(NumberOfEventsWrapper.find('.numberInput')).toHaveLength(1);
    })

    test('checking if default vaule is 32 events', () => {
        expect(
            NumberOfEventsWrapper.find('.numberInput').at(0).props().value
        ).toEqual(32);
    })

    test('change state when number input changes', () => {
        const eventObject = { target: { value: 8 } };

        NumberOfEventsWrapper.find('.numberInput').simulate(
            'change',
            eventObject
        );
        expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(8);
    })
})