import React from "react";
import { shallow, mount } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ListingsTable from "../../ListingsTable";

configure({ adapter: new Adapter() });

const testVals = {
  hospitals: [
    {
      name: "Nice Hospital",
      vicinity: "69 Street",
      photos: [
        {
          photo_reference: "1233443"
        }
      ]
    },
    {
      name: "Amazing Hospital",
      vicinity: "111 Main Street",
      photos: [
        {
          photo_reference: "35432"
        }
      ]
    }
  ],
  churches: [
    {
      name: "Holy Church",
      vicinity: "123 Holy Drive"
    },
    {
      name: "Friends Church",
      vicinity: "55 La Palma"
    }
  ]
};

describe("Listings Table", () => {
  const wrapper = shallow(<ListingsTable listings={testVals} />);

  it("should render a tabbed table depending on listings props", () => {
    expect(wrapper.find("Tab").length).to.equal(2);
  });

  it("passes a prop to a Listing Table Modal for each listing", () => {
    wrapper.find("Tab .listing-tab-hospitals").simulate("click");
    wrapper.find("TableRow .table-row-0").simulate("click");
    expect(
      wrapper.find("ListingsModalPage").props().listing.photos
    ).to.deep.equal(testVals.hospitals[0].photos);
  });
});
