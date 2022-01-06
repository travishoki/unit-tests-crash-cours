import { render } from "@testing-library/react";

import { ComponentA } from "./ComponentA";
import { CHARACTER_LIST } from "./constants";

describe("ComponentA", () => {
  it("should render only a list of Jedi", () => {
    const props = {
      list: CHARACTER_LIST,
    };
    const { container } = render(<ComponentA {...props} />);

    expect(container).toMatchInlineSnapshot(`
    <div>
      <ul>
        <li>
          Luke Skywalker
        </li>
        <li>
          Obi-wan Kenobi
        </li>
      </ul>
    </div>
  `);
  });
});
