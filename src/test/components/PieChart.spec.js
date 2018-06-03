import React from "react";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { PieChart } from "../../PieChart";

configure({ adapter: new Adapter() });

describe("Pie Chart", () => {
  let wrapper;
  let props;
  let expected;
  beforeEach(() => {
    props = {
      profile: {
        points: {
          hospitals: 20,
          schools: 50
        }
      }
    };

    expected = [
      {
        label: "Hospitals",
        value: 20,
        colorIndex: "graph-1"
      },

      {
        label: "Schools",
        value: 50,
        colorIndex: "graph-2"
      }
    ];
    wrapper = shallow(<PieChart {...props} />);
  });

  it("always renders a div", () => {
    expect(wrapper.find("div.wrapper").length).to.equal(1);
  });
  it("passes prop for points in each category to grommet Component", () => {
    expect(wrapper.find("AnnotatedMeter").props().series).to.deep.equal(
      expected
    );
  });
});
