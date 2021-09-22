export function ProductCategory(props) {
    const {category} = props;

    return <div className="productLine">
        <h2>{category.name}</h2>
    </div>;
}