import React from "react";
import ReactDOM from "react-dom/client";


// JSX -is not HTML, it is a HTML like syntax extension for JavaScript.
// JSX is transpiled before it reaches the JS Engine.

// React Element
const Title = () =>( <h1 className="head" id="heading">Namaste React JSX</h1>);

// React Functional Component
// component composition
const HeadingComponent = () => (
    <div className="container">
        <Title/>
        <h1 className="heading">
            Namate React Functional Component
        </h1>
    </div>
);
    

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);