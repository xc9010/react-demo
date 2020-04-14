export const INCREMENT = "counter/INCREMENT";
export const DECREMENT = "counter/DECREMENT";
export const RESET = "counter/RESET";

export function increment() {
  return {type: INCREMENT}
  // return (dispatch, getState) => {
  //   console.log(123)
  //   console.log(getState())
  // }
}

export function decrement() {
  return {type: DECREMENT}
}

export function reset() {
  return {type: RESET}
}
