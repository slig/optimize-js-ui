import * as types from '../constants/ActionTypes';


const DEFAULT_CODE = [
  '// Paste your JavaScript code here',
  '!function (){}()',
  'function runIt(fun){ fun() }',
  'runIt(function (){})',
].join('\n');


const initialState = {
  code: DEFAULT_CODE,
  optimizedCode: '',
  optimizing: false,
  optimized: false,
  error: false,
}


export const code = (state = initialState, action) => {

  switch (action.type) {

    case types.UPDATE_CODE:
      return {
        ...state,
        optimized: false,
        error: false,
        optimizedCode: '',
        code: action.code
      }

    case types.OPTIMIZE_PENDING:
      return {
        ...state,
        optimizing: true,
        optimized: false,
        error: false,
        optimizedCode: '',
      }

    case types.OPTIMIZE_REJECTED:
      return {
        ...state,
        optimizing: false,
        optimized: false,
        error: true,
        optimizedCode: '',
      }

    case types.OPTIMIZE_FULFILLED:
      return {
        ...state,
        optimizing: false,
        optimized: true,
        error: false,
        optimizedCode: action.payload.code,
      }

    default:
      return state
  }

}
