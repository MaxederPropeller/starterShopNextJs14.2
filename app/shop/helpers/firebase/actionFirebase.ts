'use server';

import { collection,  getDocs, query  } from "firebase/firestore"; 
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