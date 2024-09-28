import React from 'react';

class UserClass extends React.Component {

    constructor(props) {
        super(props) ; 

        // this.state = {
        //     count : 0,
        //     count2 : 2
        // }

        this.state = {
          userInfo: {
            name: "Dummy",
            location: "default",
            avatar: "dummy_avatar.com",
            userName: "dummy123"
          },
        }

        // console.log("Child Constructor")
    }

   async componentDidMount() {
      // console.log(`${this.props.name}  ComponentDidMount`)

      // Api calls  here

    const data = await fetch("https://api.github.com/users/Shailendrajain08")
    const json = await data.json();

    this.setState({
      userInfo: json
    })

    console.log(json)
    } 

    render () {

        // const {name, location, contact} = this.props;
        // const {count, count2} = this.state;

        const {name, login, location, avatar_url} = this.state.userInfo

        // console.log(`${name} Render`)

        return (
            <div className="user-card">
                <p>Class Based Component</p>
                {/* <h1>Count : {count}</h1>
                <button onClick={() => {
                  this.setState({
                    count : this.state.count + 1,
                    count2 : this.state.count2 + 1
                  }) 
                }}>Count Increase</button>
                <button onClick={() => {
                  this.setState({
                    count : this.state.count - 1,
                    count2 : this.state.count2 - 1
                  }) 
                }}>Count Decrease</button>
                <h1>Count2 : {count2}</h1> */}
                <img src={avatar_url}  />
                <h2>Name : {name}</h2>
                <h3>userName: {login} </h3>
                <h3>Location: {location}</h3>

              
            </div>
          )
    }
}

export default UserClass