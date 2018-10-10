import React, { Component } from "react";



class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date() };
        // setInterval(()=> this.tick(),1000)

    }

    componentDidMount() {
        this.TimerId = setInterval(() => this.tick(), 1000);
    }

    componentDidUpdate() {

    }

    componentWillMount() {
        clearInterval(this.TimerId);
    }

    tick() {
        this.setState({ date: new Date() });
    }
    render() {
        const style = { height: 30 };
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 text-left">
                        <h1 className="text-success"><img style={style} src="/images/logo/logo.png" alt="" />เฮลตี้ คาเฟ่</h1>
                    </div>
                    <div className="col-md-4 text-right">
                        <h5>{this.state.date.toLocaleTimeString()}</h5>
                    </div>
                </div>
                <hr />
            </div>


        )

    }

}

//inline style สามารถใส่แบบนี้โดยไม่ประกาศตัวแปลก็ได้
/*{  <img style={{height: 60, marginTop: 5}} src="/images/logo/logo.png" />  }*/

// import React from "react";

// const Header =()=> {
//     return <h1>Welcome Header</h1>
// }

export default Header;

// //state