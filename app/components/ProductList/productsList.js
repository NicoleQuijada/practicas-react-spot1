const React = require('react');
const ProductCard = require('../../components/ProductCard');
const {useState} = require('react');




function ProductsList(props) {
    const { products } = props;
    const [favoriteList , setFavoriteList] = useState([]); 
    console.log(favoriteList);
    return (
      
        <ul>
        {
            products?.length > 0? products.map(pct => (
                <ProductCard
                 productTitle={pct.title} 
                 productId={pct.id} 
                 productImage={pct.thumbnail}
                 setFavoriteList={setFavoriteList}
                 isFavorite = {
                    favoriteList.includes(pct.id)
                 }
                 />
            )):<p>No se encontraron productos.</p>
        }
        </ul>
           
            // <main>
            //     {
            //         products.map(el => (
            //             <div key={el.id}>
            //                 <li>{el.title}</li>
            //                 <span>${el.price}</span>
            //                 <a href={el.permalink}>
            //                     <img src={el.thumbnail} alt={el.name} lazyload="off" />
            //                 </a>
            //             </div>
            //         ))
            //     }
             
            // </main>
            
      
    )
}

module.exports = ProductsList;