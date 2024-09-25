import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component {

    constructor () {
        super () ;
        // console.log("Parent Constructor")
    }

    componentDidMount() {
        // console.log("Parent ComponentDidMount")
      }

  render() {
    // console.log("Parent Render")
    return (
      <div>
        <h1>About Us</h1>
        <h2>This is About Us Page</h2>
        {/* <User name={'Shailendra Jain (function comp)'}/>     */}
        {/* <UserClass
          name={"Shailendra Jain (class comp)"}
          location={"Damoh (class comp)"}
          contact={"7869505416 (class comp)"}
        /> */}
        <UserClass/>
      </div>
    );
  }
}

export default About;
