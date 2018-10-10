import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Function นิยมประกาศค่าตัวแปลเป็นตัวใหญ่ การส่งค่าจะส่งเป็นแบบ <Welcome ช่องว่าง /> ex:<Welcome />
// function Welcome(){
//     return <h1>Welcome to my home</h1>;
// }

//การประกาศ ตัวแปลและเก็บค่าทั้งหมดไว้ที่ Element และส่งค่าออกไปโดยใช้คำสั่ง Render
// let username="nengkung";
// let user = {username:"nenk",email: "neng@n.com"}
// const element = <h1>{welcome()} {user.username + '' + user.email}</h1>

ReactDOM.render(<App />, document.getElementById('root'));


