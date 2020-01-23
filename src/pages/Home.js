import React from 'react';
import Category from './Category';

const Home = ({ categories }) => {
    return (
        <div className="home">
            <Category category="men" products={categories.men} />
            <Category category="women" products={categories.women} />
            <Category category="kids" products={categories.kids} />
        </div>
    )
}

export default Home;