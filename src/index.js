import C5 from './C5';
import C5DOM from './C5DOM';

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

const element = <App name="foo" />;
C5DOM.render(element, container);
