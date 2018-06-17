import * as actions from "../../actions/listingActions";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import expect from "expect";
import MockAdapter from "axios-mock-adapter";
import Adapter from "enzyme-adapter-react-16";
import moxios from "moxios";
import GOOGLE_PLACES_API_KEY from "../../constants/constants";
import { configure } from "enzyme";

configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mock = new MockAdapter(axios);
const mockStore = configureMockStore(middlewares);

describe("listing actions", () => {
  var listing = {
    photos: [
      {
        photo_reference: "sdfsaf"
      }
    ]
  };

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("should fire an action for requesting Google API", () => {
    const expectedAction = {
      type: "REQUEST_GOOGLE_PLACES"
    };
    expect(actions.requestGooglePlaces()).toEqual(expectedAction);
  });

  it("should return correct list of photos for a corresponding listing", done => {
    let result;
    const expectedActions = {
      type: "REQUEST_PHOTOS",
      payload: ["great.png"]
    };
    mock
      .onGet(
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=sdfsaf&key=${GOOGLE_PLACES_API_KEY}`
      )
      .reply(200, {
        response: ["great.png"]
      });
    const store = mockStore({ listingsForm: [{ photos: [] }] });

    return store.dispatch(actions.searchPhotos(listing)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
