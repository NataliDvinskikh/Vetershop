function Buttons({filteredGoods}) {
    return (
        <div className="cont">
            <button className="change" onClick={()=>filteredGoods('candle')}>Candels</button>
            <button className="change" onClick={()=>filteredGoods('jewelry')}>Jewelry</button>
            <button className="change" onClick={()=> filteredGoods('cosmetics')}>Cosmetics</button>
            <button className="change" onClick={()=> filteredGoods('сeramics')}>Ceramics</button>
            <button className="change" onClick={() => filteredGoods('plants')}>Plants</button>
            <button className="change" onClick={() => filteredGoods('textile')}>Textile</button>
        </div>
    )
}
export default Buttons;
