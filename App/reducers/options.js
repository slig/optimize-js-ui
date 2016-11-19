import * as types from '../constants/ActionTypes';

const initialState = {
  sourceMap: false,
}

export const options = (state = initialState, action) => {

  switch (action.type) {

    case types.TOGGLE_SOURCEMAP:
      return {
        ...state,
        sourceMap: !state.sourceMap,
      }

    default:
      return state
  }

}
