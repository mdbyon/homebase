import * as actions from "../../actions/listingActions";
import expect from "expect";
import Adapter from "enzyme-adapter-react-16";
import moxios from "moxios";
import GOOGLE_PLACES_API_KEY from "../../constants/constants";
import { configure } from "enzyme";

configure({ adapter: new Adapter() });

describe("listing actions", () => {
  var listing = {
    photos: {
      photo_reference: "sdfsaf"
    }
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
    const expectedResult = {
      type: "REQUEST_PHOTOS",
      payload: ["great.png"]
    };

    actions.searchPhotos(listing).then(response => {
      console.log(response);
      result = response;
      moxios.wait(function() {
        let request = moxios.requests.mostRecent();
        request
          .respondWith({
            status: 200,
            response: ["great.png"]
          })
          .then(function() {
            expect(result).toEqual(expectedResult);
            done();
          });
      });
    });
  });
});
