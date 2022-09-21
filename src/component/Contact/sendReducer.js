const initialState = {
  isLoading: false,
  isSuccess: false,
  isAlertVisible: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEND":
      return { count: state.count + 1 };
    case "SEND_FAILED":
      return { count: state.count - 1 };
    case "SEND_SUCCESS":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};
