import React from "react";
import ReactDOM from "react-dom/client";



/***
 * 
 * <div id="parent">
 *   <div id="child">
 *     <h1>Child Component Header</h1>
 *  </div>
 * </div>
 */
const Struct1 = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        React.createElement(
            "h1",
            null,
            "Child Component Header"
        )
    )
);

/***
 * 
 * <div id="parent">
 *   <div id="child">
 *     <h1>Child Component Header</h1>
 *      <h2>Child Component Header</h2>
 *  </div>
 * </div>
 */
const Struct2 = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [
            React.createElement(
            "h1",
            { key: "h1" },
            "H1 Header"
            ),
            React.createElement(
            "h2",
            { key: "h2"},
            "h2 Header Loading!!!"
            )
        ]
    )
);


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(Struct2);