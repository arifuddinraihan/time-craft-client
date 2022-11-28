import { useEffect, useState } from "react"

const useToken = email => {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`https://time-craft-server-side.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if(data.accessToken){
                        localStorage.setItem('as12tc-token', data.accessToken)
                        setToken(data.accessToken)
                    }   
                })
        }
    }, [email])
    return [token];
}

export default useToken;