



function inflateProductDataWITHLOGS(productDataFromDb){
    console.log({productDataFromDb});
    const categories = productDataFromDb.map(p => p.category);
    console.log({categories});
    const uniqueCategories = [...new Set(categories)];
    console.log({uniqueCategories});
    const inflatedData = uniqueCategories.map(c => ({
        name: c,
        products: productDataFromDb.filter(p => p.category === c)
    }));
    console.log({inflatedData})
    return inflatedData;
}

function inflateProductData(productDataFromDb) {
    const uniqueCategories = [...new Set(productDataFromDb.map(p => p.category))];
    return uniqueCategories.map(c => ({
        name: c,
        products: productDataFromDb.filter(p => p.category === c)
    }));
}