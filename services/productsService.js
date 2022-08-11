/**
 * Acá deberás implementar un servicio que haga un llamado a la API 
 * interna y devuelva un array de productos.
 */
  const normalize = require('./transforms/normalizer');
 const restclient = require('nordic/restclient')({
    timeout: 5000,
    baseURL: 'https://api.mercadolibre.com'
  });
  
  class ProductsService { 
    static getProducts(siteId,name,limit,offset){
      return restclient.get(`/sites/${siteId}/search?q=${name}&limit=${limit}&offset=${offset}`)
      .then(response => normalize(response.data.results))
      .catch(error => console.log(error))
    }
  }
  
  module.exports = ProductsService;
  