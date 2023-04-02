function Buttons({filteredGoods}) {
    return (
        <div className="cont">
            <button className="change-btn" onClick={()=>filteredGoods('candle')}>Candels</button>
            <button className="change-btn" onClick={()=>filteredGoods('jewelry')}>Jewelry</button>
            <button className="change-btn" onClick={()=> filteredGoods('cosmetics')}>Cosmetics</button>
            <button className="change-btn" onClick={()=> filteredGoods('сeramics')}>Ceramics</button>
            <button className="change-btn" onClick={() => filteredGoods('plants')}>Plants</button>
            <button className="change-btn" onClick={() => filteredGoods('textile')}>Textile</button>
        </div>
    )
}
export default Buttons;
