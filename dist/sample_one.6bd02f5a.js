// const heading = React.createElement(
//     "h1",
//     { id: "heading", xyx:"xyz"},
//     "Sample 1"
// );
/***
 * 
 * <div id="parent">
 *   <div id="child">
 *     <h1>Child Component Header</h1>
 *  </div>
 * </div>
 */ const Struct1 = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, React.createElement("h1", null, "Child Component Header")));
/***
 * 
 * <div id="parent">
 *   <div id="child">
 *     <h1>Child Component Header</h1>
 *      <h2>Child Component Header</h2>
 *  </div>
 * </div>
 */ const Struct2 = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", null, "H1 Header"),
    React.createElement("h2", null, "h2 Header")
]));
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(Struct2);

//# sourceMappingURL=sample_one.6bd02f5a.js.map
