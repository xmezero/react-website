import React, { Component } from "react";

class Calculator extends Component {
    
    render() {
        return (
            <div>
                <h1 className="text-right">340.00</h1>
                <hr />
                <ul className="list-unstyled">
                    <li className="text-right text-success title">
                        บิงชู X 1 =240.00
                    <button className="btn btn-light btn-sm"></button>
                    </li>

                    <li className="text-right text-success title">
                        เฟรนฟราย X 1 =240.00
                    <button className="btn btn-light btn-sm"></button>
                    </li>
                </ul>
                <hr />
                <button className="btn btn-block btn-danger title">ยืนยัน</button>
                <button className="btn btn-block btn-secondary title">ยืนยัน</button>

            </div>

        );
    }
}

export default Calculator;