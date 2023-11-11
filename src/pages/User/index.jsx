import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from "react-router-dom";



const User = () => {
    return (
        <div>
            <Header/>
            <div className="container">
                <h1>ini halaman homepages</h1>
                <Link to={"/:1"}>
                <p>Product 1</p>
                </Link>
                <Link to={"/:2"}>
                <p>Product 2</p>
                </Link>
                <Link to={"/:3"}>
                <p>Product 3</p>
                </Link>
            </div>
            <Footer/>
        </div>
    );
};

export default User;