const initialState = {
  loginStatus: false,
  currentUser: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return {
        ...state,
      };
    }
  }
};
