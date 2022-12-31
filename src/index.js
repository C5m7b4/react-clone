import C5 from './C5';
import C5DOM, { useState, useEffect } from './C5DOM';
import { createStore, combineReducers } from './redux';
// import { storeReducer } from './reducers/storeReducer';
import { rootReducer } from './reducers/rootReducer';

import * as actions from './actions/actionTypes';

console.log('you are ready to start coding...');

const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

// const main = document.createElement('div');
// const child = document.createElement('p');
// child.innerHTML = 'Hello';
// main.appendChild(child);
// root.appendChild(main);

// const handleClick = (e) => {
//   console.log('e', e);
//   console.log('i have been pressed');
// };

// const updateValue = (e) => {
//   rerender(e.target.value);
// };

const container = document.getElementById('root');

// const handleClick = (e) => {
//   console.log('i have been clicked', e);
// };

// const rerender = (value) => {
//   const element = (
//     <div>
//       <input onInput={updateValue} value={value} />
//       <h2>Hello {value}</h2>
//       <button onClick={handleClick}>Press Me</button>
//     </div>
//   );

//   C5DOM.render(element, container);
// };

// rerender('world');

// const element = (
//   <div style="background: salmon; padding: 5px;">
//     <h1>Hello World</h1>
//     <h2 style="text-align:right">from C5</h2>
//     {/* <button onClick="handleClick()">Press Me</button> */}
//   </div>
// );
// const container = document.getElementById('root');
// console.log('we should be running here');
// C5DOM.render(element, container);

const App = (props) => {
  return <h1>hi {props.name}</h1>;
};

function Counter() {
  const [state, setState] = useState(1);

  useEffect(() => {
    console.log('useEffect', state);
  }, [state]);

  return <h1 onClick={() => setState((c) => c + 1)}>Count: {state}</h1>;
}

// const element = <App name="foo" />;
const element = <Counter />;
C5DOM.render(element, container);

const store = createStore(rootReducer, {});

console.log('state', store.getState());

store.subscribe(() => {
  console.log('listener called');
});

// debugger;
store.dispatch({
  type: actions.ADD_USER,
  user: { id: 2, name: 'tommy', job: 'project management' },
});

console.log('new State', store.getState());

// *************** middleware tests

import { createLoggerMiddleware, createFilterDeleteMiddlware } from './redux';
const logger = createLoggerMiddleware(store);
const filterDelete = createFilterDeleteMiddlware(store);
const newDispatch = filterDelete(logger(store.dispatch));

newDispatch({ type: actions.ADD_USER, user: { id: 3, name: 'ben' } });
