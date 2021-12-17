import { shallow } from "enzyme";

import { ComponentA } from "./ComponentA";

/*
Task:
- Fix the failed unit test
*/
describe("ComponentA", () => {
  it("should render component successfully", () => {
    const props = {
      isVisible: true,
    };
    const wrapper = shallow(<ComponentA {...props} />);

    expect(wrapper.isEmptyRender()).toBe();
  });

  it("should render empty", () => {
    const wrapper = shallow(<ComponentA />);

    expect(wrapper.isEmptyRender()).toBe();
  });

  it("should verify the rendered text of the component", () => {
    const props = {
      isVisible: true,
    };
    const wrapper = shallow(<ComponentA {...props} />);

    expect(wrapper.find("p")).toHaveLength(2);
    expect(wrapper.find("p").text()).toEqual("Component B");
  });
});
