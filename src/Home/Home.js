import React from 'react';
import "../Home/Home.css";
import Product from '../Product/Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <div className="home__row">
                    <Product title="The Lean Startup" price={0.10} image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" rating={5}/>
                    <Product title="Willful Smart Watch for Android Phones and iOS Phones Compatible iPhone Samsung, IP68 Swimming Waterproof Smartwatch Fitness Tracker" price={198.99} image="https://m.media-amazon.com/images/I/51bBTVpcrpL._AC_UY218_.jpg" rating={3}/>
                    <Product title="Aucma Stand Mixer,6.5-QT 660W 6-Speed Tilt-Head Food Mixer, Kitchen Electric Mixer with Dough Hook, Wire Whip & Beater (6.5QT, Blue)" price={239.99} image="https://m.media-amazon.com/images/I/61aT8jl8THL._AC_UY218_.jpg" rating={4}/>
                </div>
                <div className="home__row">
                    <Product title="Willful Smart Watch for Android Phones and iOS Phones Compatible iPhone Samsung, IP68 Swimming Waterproof Smartwatch Fitness Tracker" price={198.99} image="https://m.media-amazon.com/images/I/51bBTVpcrpL._AC_UY218_.jpg" rating={3}/>
                    <Product title="Amazon Echo - Black (1st Generation)" price={98.99} image="https://m.media-amazon.com/images/I/61aN+SE-F9L._AC_UY218_.jpg" rating={5}/>
                    <Product title="Apple iPad Pro (12.9-inch, Wi-Fi, 64GB) - Silver (3rd Generation)"price={598.99} image="https://m.media-amazon.com/images/I/71+ud9p+tYL._AC_UY218_.jpg" rating={4}/>
                </div>
                <div className="home__row">
                    <Product  title="SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz, 1000R Curved, QLED, NVIDIA G-SYNC & FreeSync | LC49G95TSSNXZA Model"price={1406.98} image="https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_UY218_.jpg" rating={4}/>
                </div>
            </div>
        </div>
    )
}

export default Home
