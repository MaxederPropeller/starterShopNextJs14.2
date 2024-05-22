'use server';

import { collection,  getDocs, query, where, doc, getDoc  } from "firebase/firestore"; 
import { db } from "@/lib/firebaseConfig";



// Read Data from Firestore CLoud Firestore / Collection Products (ALL)
export async function readAllProducts() {
    let q = query(collection(db, "products"));
    const results = await getDocs(q);
    return results.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
    }
    );
}

// Read Data from Firestore CLoud Firestore / Collection Products (ALL)
export async function readAllProductsShort() {
    let q = query(collection(db, "productsShort"));
    const results = await getDocs(q);
    return results.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
    }
    );
}

export async function readProductById(id: string) {
 
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() }
    } else {
        console.log("No such document!");
    }
    
}