import { renderHook } from "@testing-library/react-hooks";

import { useQueryCharacters } from "./useQueryCharacters";

describe("useQueryCharacters", () => {
  it("useQueryCharacters", () => {
    const result = renderHook(() => useQueryCharacters()).result.current;

    expect(result).toBe(null);
  });
});
