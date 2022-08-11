const hydrate = require('nordic/hydrate');
const React = require('react');
const View = require('../pages/productList/view');
const { products } = window.__PRELOADED_STATE__;

hydrate(< View products={products} /> , document.getElementById('root-app'))


