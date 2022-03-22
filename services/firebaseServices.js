import db from "@/services/firebaseInit"
import { collection, query, where, addDoc, getDoc, getDocs, doc } from "firebase/firestore";

async function fetchProductsByCategory (category) {
    try {
        const productsRef = collection(db, "products")
        const q = query(productsRef, where("category", "==", category))
        const querySnapshot = await getDocs(q)
        let result = []
        querySnapshot.forEach((doc) => {
            result.push(doc.data())
        })
        return result
    } catch(e) {
        console.log(e)
    }
}
async function fetchProductBySlug (slug) {
    try {
        const productsRef = collection(db, "products")
        const q = query(productsRef, where("slug", "==", slug))
        const querySnapshot = await getDocs(q)
        let result = []
        querySnapshot.forEach((doc) => {
            result.push(doc.data())
        })
        return result[0]
    } catch(e) {
        console.log(e)
    }
}
async function fetchCategories() {
    const docRef = doc(db, "config", "Ncabv8jS8nEaqFiDTFGl");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data()
    } else {
        return null
    }
}


export default {
    fetchProductBySlug,
    fetchProductsByCategory,
    fetchCategories,
}