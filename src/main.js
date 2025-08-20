import './style.css';

document.querySelector('#app').innerHTML = `
  <h1>Hello, Vite!</h1>
  <p>Welcome to my vanilla JavaScript website!</p>
  <button onclick="sayHello()">Click Me</button>
`;

window.sayHello = function () {
  alert('Hello from Vite!');
};