import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

export const UserContext = createContext();
const auth = getAuth(app);

const UserValidation = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    // create a new user via firebase auth system
    const createNewUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email , password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth , email , password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    // observing user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (user === null) {
                console.log(`from Auth state, observing user!`)
                setUser(currentUser);
                setLoader(false)
            }
        })
        return () => {
            unsubscribe();
        }
    }, [])

    // object to share with entire app for auth related executions
    const fireAuthValue = {
        user,
        loader,
        createNewUser,
        signIn,
        logOut
    }

    return (
        <UserContext.Provider value={fireAuthValue}>
            {children}
        </UserContext.Provider>
    );
};

export default UserValidation;