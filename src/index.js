import ReactDOM from "react-dom/client"; //we use ReactDOM to render into the DOM

let age = 30; 
let name = 'John Doe';

// WHAT: This variable returns contains the html to render
let output = (
	<span>
		My name is {name} and I am {age} years old.
	</span>
);

// WHERE: A DOM element that will contain the entire react generated html
const container = document.getElementById('root');

// create a root
const root = ReactDOM.createRoot(container);

//render app to root
root.render(output);




//what   //where
//ReactDOM.render(output, myDiv);
