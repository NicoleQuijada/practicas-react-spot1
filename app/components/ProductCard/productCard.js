const React = require('react');

function ProductCard({productTitle, productImage, isFavorite, setFavoriteList, productId}){
    function onAddFavorite(id){
        setFavoriteList(favorites=>[...favorites, id])
    }
    function removeAddFavorite(){
        setFavoriteList(favorites=> favorites.filter(p => p != productId))
    }
    return(

        <li style={{border: '2px solid black'}}>
            <h2>{productTitle}</h2>
            <img src={productImage} alt={productTitle} />
            {
            isFavorite?<button onClick={removeAddFavorite} >quitar de favoritos</button>
            :<button onClick={()=>onAddFavorite(productId)}>agregar a favoritos</button>
            }
            
            
        </li>
    )
}
module.exports = ProductCard;