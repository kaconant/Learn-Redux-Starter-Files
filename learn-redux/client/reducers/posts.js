// reducer takes in 2 things

// 1. the action (info about what happened)
// 2. copy of the current state

export const posts = (state = [], action) => {
  console.log('The posts will change')
  console.log(state, action);
  return state;
}