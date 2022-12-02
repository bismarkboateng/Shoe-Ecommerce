import React from 'react';
import NavBar from '../components/NavBar';
import ProductCard from '../components/Card';


function Home() {
    return (
        <div style={{ background: "#dee0e3" }}>
            <NavBar />
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh'

                }}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>  
        </div>
    );
}


export default Home;