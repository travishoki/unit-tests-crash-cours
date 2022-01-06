import { fireEvent, render, screen } from "@testing-library/react";

import { ComponentA } from "./ComponentA";

/*
Task:
- Fix the failed unit tests 
*/
describe("ComponentA render", () => {
  it("ComponentA render - simulate click", () => {
    const handleClickSpy = jest.fn();
    const props = {
      handleClick: handleClickSpy,
      value: "foo",
    };
    render(<ComponentA {...props} />);
    const submitButton = screen.getByRole("button");

    // fireEvent.click(submitButton);

    expect(handleClickSpy).toHaveBeenCalledTimes(1);
  });
});
