function GoodsList ({itemsForSale}) {
    return (
        <div className="products">
        {itemsForSale.map((element=>{
            const {id, name,  price, image} = element;
            return (
                <div key={id} className="product-card">
                    <img className="img" src={image} width="400px" height="500px" alt="im"/>
                  <div className="product-info">
                    <h3>{name}</h3>
                    <h4> $ {price}</h4>
                  </div>
                </div>
            )
        }))}
    </div>
    )

}

export default GoodsList;
