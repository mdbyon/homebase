import * as actions from '../../actions/listingActions';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('listing actions', ()=>{
    it('should fire an action for requesting Google API', ()=>{
        const expectedAction = {
            type: 'REQUEST_GOOGLE_PLACES'
        }
        expect(actions.requestGooglePlaces()).toEqual(expectedAction);
    })

    it('should fire an action for receiving Google API', ()=>{
        const expectedAction = {
            type: 'RECEIVED_GOOGLE_PLACES'
        }
        expect(actions.receivedGooglePlaces()).toEqual(expectedAction);
    })
})