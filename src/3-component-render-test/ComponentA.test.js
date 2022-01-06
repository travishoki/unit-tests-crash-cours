import { render, screen } from "@testing-library/react";

import { ComponentA } from "./ComponentA";

/*
Task:
- Fix the failed unit test
*/
describe("ComponentA", () => {
  it("should render component successfully", () => {
    const props = {
      isVisible: false,
    };
    const { container } = render(<ComponentA {...props} />);

    expect(container).not.toBeEmptyDOMElement();
  });

  it("should render empty", () => {
    const { container } = render(<ComponentA />);

    expect(container).not.toBeEmptyDOMElement();
  });

  it("should verify the rendered text of the component", () => {
    const props = {
      isVisible: true,
    };
    render(<ComponentA {...props} />);

    expect(screen.getByText("Component B")).toBeTruthy();
  });
});
