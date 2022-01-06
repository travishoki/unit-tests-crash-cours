import { render } from "@testing-library/react";

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
    const wrapper = render(<ComponentA {...props} />);

    expect(wrapper).toBeEmptyDOMElement();
  });

  it("should render empty", () => {
    const wrapper = render(<ComponentA />);

    expect(wrapper).toBeEmptyDOMElement();
  });

  it("should verify the rendered text of the component", () => {
    const props = {
      isVisible: true,
    };
    const wrapper = render(<ComponentA {...props} />);

    expect(wrapper.getBy("p")).toHaveLength(2);
    expect(wrapper.getBy("p").text()).toEqual("Component B");
  });
});
