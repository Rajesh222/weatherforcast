import { expect } from 'chai';
import { fromJS, List } from 'immutable';
import weather from '../src/reducers/reducer_weather';

describe('Reducer', () => {
  it('handles GET_WEATHER ', () => {
    const action = {
      type : 'GET_WEATHER',
      payload : {data:{}}
    };
    const intialState = fromJS([]);
    const nextState = weather(intialState, action);
    expect((nextState)).to.eql(
        [{}]
      );
  });
});