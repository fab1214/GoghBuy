import React from "react";
import "../assets/stylesheets/Home.css";
import { useQuery } from '@apollo/client';
import {QUERY_ALL_PRODUCTS} from '../utils/queries';

import Product from '../components/Product';

const Home = () => {

	const {loading, data} = useQuery(QUERY_ALL_PRODUCTS);

	//assign product variable to product query
	const products = data?.products || [];
	console.log(products);

	return (
		<div className="home_container">
			<div className='row'>
			{products.map((product) => (
				<Product
				key={product._id}
				_id={product._id}
				title={product.title}
				description={product.description}
				price={product.price}
				image={product.image}
				/>
			))}
			</div>
		</div>
	);
};

export default Home;
