import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./Landing.css";

import { addToCart } from "../../ducks/product";

import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";

export function Landing( { addToCart, featuredProducts } ) {
	const products = featuredProducts.map( product => (
		<FeaturedProduct
			addToCart={ () => addToCart( product.id ) }
			description={ product.description }
			key={ product.id }
			logo={ product.logo }
			name={ product.name }
			onSale={ product.onSale }
			price={ product.price }
		/>
	) );

	return <main className="landing">
            <h1>Productos Destacados</h1>
            <div className="landing__products-wrapper">{products}</div>

            <Link to="/shop">
                <h1 className="landing__full-shop-link">
                    A la tienda con todos los productos!
                </h1>
            </Link>
        </main>;
}

function mapStateToProps( { products } ) {
	return { featuredProducts: products.filter( product => product.featured || product.onSale ) };
}

export default connect( mapStateToProps, { addToCart } )( Landing );