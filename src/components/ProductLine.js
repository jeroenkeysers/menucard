export function ProductLine(props) {
    const {product} = props;
    const s = product.size ? ` - ${product.size}cl`:"";
    return <div className="productLine">
        <div>{product.name} <span className="productSize">{s}</span></div>
        <div>{product.price}&euro;</div>

    </div>;
}