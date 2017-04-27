import * as Action from '../src/actions';
import { expect } from 'chai';

describe('Action: ', () => {
  it('getWeather', () => {
    expect(Action.getWeather({})).to.deep.equal({payload:{}, type : 'GET_WEATHER' });
  });
});