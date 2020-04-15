import React from 'react';
import { shallow } from 'enzyme';
import PlayerDetails from './PlayerDetails';

const props = {
    first_name: 'James',
    last_name: 'Harden',
    team: 'Houston Rockets'
};

const spy = jest.spyOn(global.console, 'error');

it('should display correct player info', () => {

    const component = shallow(<PlayerDetails {...props} />);
    expect(component).toMatchSnapshot();
});

it('should display player info without a team', () => {
    const { team, ...playerWithoutTeam } = props;
    const component = shallow(<PlayerDetails {...playerWithoutTeam}/>);

    expect(component.contains('No team')).toEqual(true);
});

it('first_name and last_name should be required', () => {
    shallow(<PlayerDetails />);

    expect(spy).toBeCalledTimes(2);
});