import * as actions from '../actions'
import * as types from '../constants/action-types'

describe('actions', () => {
  it('should create an action to toggle the menu', () => {
    const expectedAction = {
      type: types.TOGGLE_MENU
    }
    expect(actions.toggleMenu()).toEqual(expectedAction)
  })
})
