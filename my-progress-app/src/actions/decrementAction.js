const decrementAction = (value) => {
  return {
      type: 'DECREMENT',
      payload: {
        decrementBy: value
      }
  }
}

export default decrementAction;