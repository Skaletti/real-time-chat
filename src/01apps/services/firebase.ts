import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, collection } from 'firebase/firestore'
import { FIREBASE_CONFIG } from 'shared/constants/firebase'

export const firebaseApp = initializeApp(FIREBASE_CONFIG)

export const auth = getAuth(firebaseApp)

const db = getFirestore(firebaseApp)

export const todosRef = collection(db, 'todos')
