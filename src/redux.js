export const createStore = (
  reducer,
  initialState = {},
  middlewareFactories = []
) => {
  let state = initialState;
  let isDispatching = false;
  const listeners = [];
  if (typeof reducer !== 'function' && !Array.isArray(reducer)) {
    throw new Error(
      'Reducer must be of type function that accepts a state and an action argument or the result of the combine reducers function'
    );
  }

  const getState = () => {
    if (isDispatching) {
      throw new Error(
        'Cannot call getState while in the middle of dispatching'
      );
    }
    return state;
  };

  const subscribe = (listener) => {
    if (typeof listener !== 'function') {
      throw new Error('Store listeners should be of type function');
    }
    if (isDispatching) {
      throw new Error(
        'Cannot call subscribe while in the middle of dispatching'
      );
    }
    listeners.push(listener);

    return function unsubscribe() {
      if (isDispatching) {
        throw new Error(
          'Cannot call unsubscribe while in the middle of dispatching'
        );
      }
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  };

  const dispatch = (action) => {
    if (isDispatching) {
      throw new Error(
        'Cannot call dispatch while in the middle of dispatching'
      );
    }
    if (typeof action !== 'object') {
      throw new Error('An action should be a plain object');
    }
    if (typeof action.type === 'undefined' || action.type === null) {
      throw new Error('Action should have a type');
    }

    isDispatching = true;

    try {
      state = reducer(state, action);

      listeners.forEach((listener) => listener());
    } finally {
      isDispatching = false;
    }

    return action;
  };

  dispatch({ type: 'INIT_ACTION' });

  return {
    getState,
    subscribe,
    dispatch,
  };
};

export const combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, {});
  };
};

export function createLoggerMiddleware(store) {
  return function logger(dispatch) {
    return function newDispatch(action) {
      console.log('action', action);
      dispatch(action);
      console.log('logging middleware state:', store.getState());
    };
  };
}

export function createFilterDeleteMiddlware(store) {
  return function filterDelete(dispatch) {
    return function newDispatch(action) {
      if (action === 'DELETE') return;
      dispatch(action);
    };
  };
}

export function decorateDispatch(store, middlewareFactories) {
  let dispatch = store.dispatch;
  middlewareFactories.forEach((factory) => {
    dispatch = factory(store)(dispatch);
  });
  return dispatch;
}
