import React from "react";
import ReactDOM from "react-dom/client"



// const parent = React.createElement("div", {id : 'parent'}, [
//     React.createElement("div", {id : 'child1'}, [
//         React.createElement("h1", {id : 'h1'}, "I am a H1 inside child1 and parent div Hello shailendra"),
//         React.createElement("h2", {id : 'h2'}, "I am a H2 inside child1 and parent div")
//     ]
//     ),
//     React.createElement("div", {id : 'child2'}, [
//         React.createElement("h1", {id : 'h1'}, "I am a H1 inside child2 and parent div"),
//         React.createElement("h2", {id : 'h2'}, "I am a H2 inside child2 and parent div")
//     ]
//     )

// ]
// )



const heading = React.createElement(
    "h1",
    { id: 'heading', xyz: "abc" },
    "Hello world form React!");

console.log(heading)

const jsxHeading = <h1 id="heading">"Hello world form React using JSX!"</h1>

console.log(jsxHeading)

// React Functional Component 

const Title = () => (
    <h1>Title Component</h1>
)

const HeadingComponent = () => {
    return (
    <div className="container">
        <Title/>
        <h1>I am Inside React Functional Component</h1>
    </div>
    )
    }



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>)



