import { render } from "@testing-library/react";

import { ComponentA } from "./ComponentA";
import { CHARACTER_LIST } from "./constants";

describe("ComponentA", () => {
  it("should render only a list of Jedi", () => {
    const props = {
      list: CHARACTER_LIST,
    };
    const wrapper = render(<ComponentA {...props} />);

    expect(wrapper).toMatchInlineSnapshot(`
    <ul>
      <li
        key="0"
      >
        Luke Skywalker
      </li>
      <li
        key="1"
      >
        Obi-wan Kenobi
      </li>
    </ul>
  `);
  });
});
