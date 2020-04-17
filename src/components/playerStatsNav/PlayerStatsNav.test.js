import React from 'react';
import { shallow, mount } from 'enzyme';
import PlayerStatsNav from './PlayerStatsNav';

const stats = {
    games_played: 60,
    player_id: 237,
    season: 2019,
    min: '34:54',
    fgm: 9.77,
    fga: 19.6,
    fg3m: 2.22,
    fg3a: 6.35,
    ftm: 3.98,
    fta: 5.72,
    oreb: 0.95,
    dreb: 6.9,
    reb: 7.85,
    ast: 10.6,
    stl: 1.23,
    blk: 0.5,
    turnover: 3.98,
    pf: 1.77,
    pts: 25.73,
    fg_pct: 0.498,
    fg3_pct: 0.349,
    ft_pct: 0.697
};

it('should render season info', () => {
    const seasonInfo = shallow(<PlayerStatsNav stats={stats} isLoading={false} isRequestPending={false} onClickNext={jest.fn()} onClickPrev={jest.fn()} />)
        .find('.season-info');

    expect(seasonInfo.text()).toContain(`season ${stats.season}/${stats.season+1}`);
});

it('should render games played', () => {
    const seasonInfo = shallow(<PlayerStatsNav stats={stats} isLoading={false} isRequestPending={false} onClickNext={jest.fn()} onClickPrev={jest.fn()} />)
        .find('.season-info');

    expect(seasonInfo.text()).toContain(`games played - ${stats.games_played}`);
});

it('should render minutes played', () => {
    const seasonInfo = shallow(<PlayerStatsNav stats={stats} isLoading={false} isRequestPending={false} onClickNext={jest.fn()} onClickPrev={jest.fn()} />)
        .find('.season-info');

    expect(seasonInfo.text()).toContain(`minutes - ${stats.min}`);
});

it('left arrow icon should be clickable', () => {
    const onClickPrevMock = jest.fn();
    shallow(<PlayerStatsNav stats={stats} isLoading={false} isRequestPending={false} onClickNext={jest.fn()} onClickPrev={onClickPrevMock} />)
        .find('.arrow')
        .at(0)
        .simulate('click');

    expect(onClickPrevMock).toBeCalledTimes(1);
});

it('right arrow icon should be clickable', () => {
    const onClickNextMock = jest.fn();
    shallow(<PlayerStatsNav stats={stats} isLoading={false} isRequestPending={false} onClickNext={onClickNextMock} onClickPrev={jest.fn()} />)
        .find('.arrow')
        .at(1)
        .simulate('click');

    expect(onClickNextMock).toBeCalledTimes(1);
});

it('left arrow icon shouldn\'t be clickable when request is pending', () => {
    const onClickPrevMock = jest.fn();
    mount(<PlayerStatsNav stats={stats} isLoading={false} isRequestPending={true} onClickNext={jest.fn()} onClickPrev={onClickPrevMock} />)
        .find('.arrow-disabled')
        .at(0)
        .simulate('click');

    expect(onClickPrevMock).toBeCalledTimes(0);
});

it('right arrow icon shouldn\'t be clickable when request is pending', () => {
    const onClickNextMock = jest.fn();
    mount(<PlayerStatsNav stats={stats} isLoading={false} isRequestPending={true} onClickNext={onClickNextMock} onClickPrev={jest.fn()} />)
        .find('.arrow-disabled')
        .at(1)
        .simulate('click');

    expect(onClickNextMock).toBeCalledTimes(0);
});

it('spinner should be rendered when loading new player', () => {
    const spinner = shallow(<PlayerStatsNav stats={stats} isLoading={true} isRequestPending={true} onClickNext={jest.fn()} onClickPrev={jest.fn()} />)
        .find('FontAwesomeIcon')
        .find({ spin: true });

    expect(spinner).toHaveLength(1);
});