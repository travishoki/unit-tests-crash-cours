import { renderHook } from "@testing-library/react-hooks";
// import TestRenderer from "react-test-renderer";

import { useList } from "./useList";
import { useQueryCharacters } from "./useQueryCharacters";

jest.mock("./useQueryCharacters");

const mockList = ["Mario", "Yoshi"];

/*
Task:
- Fix the failed unit test
- Add tests for hook functions
*/
describe("useList", () => {
  useQueryCharacters.mockReturnValue(mockList);
  let hookResult;

  // renderHook
  hookResult = renderHook(() => useList());

  it("useList", () => {
    // list
    expect(hookResult.result.current.list).toEqual(["Mario"]);

    /*
    // addToList
    TestRenderer.act(() => {
      hookResult.result.current.addToList("Luigi");
    });

    expect(hookResult.result.current.list.includes("Luigi")).toBe(true);

    // deleteFromList
    TestRenderer.act(() => {
      hookResult.result.current.deleteFromList("Bowser");
    });

    expect(hookResult.result.current.list.includes("Bowser")).toBe(false);
    */
  });
});
