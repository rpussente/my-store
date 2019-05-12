import reducer from "../reducers/menu";
import * as types from "../constants/action-types";

describe("menu reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      open: true
    });
  });

  it("should handle TOGGLE_MENU", () => {
    expect(
      reducer(
        { open: true },
        {
          type: types.TOGGLE_MENU
        }
      )
    ).toEqual({
      open: false
    });

    expect(
      reducer(
        { open: false },
        {
          type: types.TOGGLE_MENU
        }
      )
    ).toEqual({
      open: true
    });
  });
});
