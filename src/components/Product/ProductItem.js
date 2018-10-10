import React, { Component} from "react";


// import React from "react";
//Funtion
// const ProductsItemt = (props) => {
//     const {ProductName, UnitPrict} = props;
//     return (
//         <div>
//             <p>{ProductName}</p>
//             <p>{UnitPrict}</p>
//         </div>
//     )
// }


//Class

class ProductItem extends Component {
    
    constructor(props) {
        super(props);
        console.log('constructor|' + props.productName);

    }

    render() {
        const {productName, unitPrice, thumbnail} = this.props;
        return (
            <div>
                <p>{productName}</p>
                <p>{unitPrice}</p>
                <p>{thumbnail}</p>
            </div>
        )

    }

}
export default ProductItem;