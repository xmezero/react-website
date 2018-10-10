import './App.css'
import React, { Component } from 'react';
import Monitor from "./components/monitor/Monitor";
import Header from "./components/Header";//Funtion component
import Footer from "./components/Footer";


//class component Return jsx Header,Footer
class App extends Component {

constructor(props){
  super(props);
  this.state= {Products:""};

}
componentDidUpdate(){
  this.setState({Products:[
    { productId: 1, productName: "สลัดผัก", unitPrice: "120", thumbnail: "/images/product/1.jpg" },
    { productId: 2, productName: "ไก่ทอด", unitPrice: "90", thumbnail: "/images/product/2.jpg" },
    { productId: 3, productName: "บิงซู", unitPrice: "200", thumbnail: "/images/product/3.jpg" },
    { productId: 4, productName: "เฟรนฟราย", unitPrice: "140", thumbnail: "/images/product/4.jpg" },
    { productId: 5, productName: "เค้ก 3 ชั้น", unitPrice: "200", thumbnail: "/images/product/5.jpg" },
    { productId: 6, productName: "กาแฟ เฮลตี้ฟู้ด", unitPrice: "140", thumbnail: "/images/product/6.jpg" }
]})
}

  render() {
    return (
      <div>
        <Header />
        <Monitor Products={this.state.Products} />
        <Footer company="website" email="web@n.com" />
      </div>
    );
  }
}
//props ที่เราจะส่งให้ Component ให้ใช้งาน company คือ website คือ props Data ทีเราต้องการส่ง
export default App;
