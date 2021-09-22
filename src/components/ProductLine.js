export function ProductSize(props) {
    const {product} = props;
    const s = product.size ? ` - ${product.size}cl`:"";
    return <div>
        <div className="productSize">{s}</div>
    </div>
}
export function ProductNote(props){
    const {product} = props;
    const s = product.note ? `${product.note}` : "";
    return <div>
    <div className="note">{s}</div>
    </div>
}
export function ProductLine(props) {
    const {product} = props;

    return <div className="productLine">
        <div>{product.name}<ProductSize product={product}/><ProductNote product={product}/></div>
        <div>{product.price}&euro;</div>

    </div>;
}
