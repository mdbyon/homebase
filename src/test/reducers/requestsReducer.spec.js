import reducer from '../../reducers/requestsReducer';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });


describe('Listings Reducer', () => {
    it('should return the initial state', () => {
      expect(reducer({}, {})).toEqual({})
    })
    it('should return the proper loading case for Google API call', () => {
        expect(reducer({}, {type: 'REQUEST_GOOGLE_PLACES'})).toEqual({
            didLoad: false, makeRequest: true 
        })
        expect(reducer({}, {type: 'RECEIVED_GOOGLE_PLACES'})).toEqual({
            didLoad: true
        })
      })
})