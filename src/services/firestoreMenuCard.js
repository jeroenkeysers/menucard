import "firebase/firestore";
import {firestoreDatabase} from "./firestore";

const COLLECTION_PRODUCTS = "Products";

/**
 *
 * @param productDocs
 * @returns CATEGORIES_DATA: array of CATEGORY objects (see README.md)
 */
function inflateDataFromDb(productDocs) {
    const flatProductData = productDocs.map(doc => doc.data());
    const uniqueCategoryNames = [...(new Set(flatProductData.map(p => p.category)))];
    return uniqueCategoryNames.map(c => ({
        name: c,
        products: flatProductData.filter(p => p.category === c)
    }));
}

export async function getMenuCardFromDb() {
    if (!firestoreDatabase) return [];

    const result = await firestoreDatabase.collection(COLLECTION_PRODUCTS)
        //.orderBy("sequence")
        .get();
    if (result.empty) return [];

    return inflateDataFromDb(result.docs);
}