import { renderHook } from "@testing-library/react-hooks";

import useList from "./useList";
import useQueryCharacters from "./useQueryCharacters";

jest.mock("./useQueryCharacters");

const mockList = [
  "Mario",
  "Donkey Kong",
  "Link",
  "Samus",
  "Yoshi",
  "Kirby",
  "Fox",
  "Pikachu",
  "Luigi",
  "Ness",
  "Captain Falcon",
  "Jigglypuff",
  "Peach",
  "Bowser",
];

/*
Task:
- Fix the failed unit test
*/
describe("useList", () => {
  it("useList", () => {
    useQueryCharacters.mockReturnValue(mockList);

    const result = renderHook(() => useList()).result.current;
    const expectedResult = mockList.length;

    expect(result).toEqual(expectedResult);
  });
});
