
// <div>
//     <div>
//         <h1></h1>
//     </div>
// </div>


const parent = React.createElement("div", {id : 'parent'}, [
    React.createElement("div", {id : 'child1'}, [
        React.createElement("h1", {id : 'h1'}, "I am a H1 inside child1 and parent div"),
        React.createElement("h2", {id : 'h2'}, "I am a H2 inside child1 and parent div")
    ]
    ),
    React.createElement("div", {id : 'child2'}, [
        React.createElement("h1", {id : 'h1'}, "I am a H1 inside child2 and parent div"),
        React.createElement("h2", {id : 'h2'}, "I am a H2 inside child2 and parent div")
    ]
    )

]
)



const heading = React.createElement(
    "h1",
    { id: 'heading', xyz: "abc" },
    "Hello world form React!");

    console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)   

root.render(parent)