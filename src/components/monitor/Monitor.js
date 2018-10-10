import React, { Component} from "react";
import Calculator from "./Calculator";
import ProductList from "../Product/ProductList";

class Monitor extends Component {
    render(){
        return(
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-9">
                    <ProductList Products={this.props.Products} />
                </div>
                <div className="col-md-3">
                    <Calculator />
                </div>
            </div>

            </div>
        )

    }
}

export default Monitor;