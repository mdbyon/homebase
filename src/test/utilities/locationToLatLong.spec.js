import { locationToLatLong } from "../../utilities/locationToLatLong";
import { expect } from "chai";

let location = "BOSTON";
const actual = {
  lat: 42.3600825,
  lng: -71.0588801
};

describe("Geocoder", () => {
  let result;
  it("can convert from city to Lat Long", done => {
    locationToLatLong(location).then(response => {
      expect(response).to.deep.equal(actual);
      done();
    });
  });
});
