export function ProductLine(props) {
    const {productName, price} = props;
    return <div className="productLine">
        <div>{productName} </div>
        <div>{price}</div>
    </div>;
}