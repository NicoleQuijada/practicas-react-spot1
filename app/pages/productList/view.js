const React = require('react');
const ProductList = require('../../components/ProductList');
const PropTypes = require('prop-types');
const Script = require("nordic/script");
const serialize = require('serialize-javascript');



function View(props) {
    const { products } = props;
    const preloadState = {products}
    return (
        <>
            < ProductList products={products} />
            <Script>{`
            window.__PRELOADED_STATE__ = ${serialize(preloadState, {
                isJSON: true,
            })}
            console.log("%cClase page is loaded!","color:green")
            `}</Script>
            <Script src="vendor.js" />
            <Script src="productsList.js" />

        </>
    )
}

View.PropTypes = {
    products: PropTypes.arrayOf({

    })
}



module.exports = View;