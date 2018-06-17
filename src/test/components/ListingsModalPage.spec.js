import React from "react";
import sinon from "sinon";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ListingsModalPage from "../../ListingsModalPage";
import { PieChart } from "../../PieChart";

configure({ adapter: new Adapter() });

describe("Listing modal page", () => {
  let wrapper;
  let props;
  var requestDetailsSpy = sinon.spy();

  beforeEach(() => {
    props = {
      profile: {
        points: 0
      },
      requests: {
        requestDetails: () => requestDetailsSpy
      },
      listings: {
        photos: ["nice.png"]
      },
      getPhotos: () => {}
    };
    wrapper = shallow(<ListingsModalPage {...props} />);
  });

  it("should render a div", () => {
    expect(wrapper.find("div.listingsModal").length).to.equal(1);
  });

  it("calls out to the Google places API for business details", () => {
    expect(requestDetailsSpy.calledOnce);
  });

  it("if there is a pictures object, display a hero banner", () => {
    expect(wrapper.find("div.hero").length).to.equal(1);
  });
});
