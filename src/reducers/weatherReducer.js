export default (prevState = {}, action) => {
  switch (action.type) {
    case "FETCH_WEATHER":
      console.log({ action });
      return action.payload;
    default:
      return prevState;
  }
};
