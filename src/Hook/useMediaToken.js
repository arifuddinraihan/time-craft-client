import { useEffect, useState } from "react"

const useMediaToken = email => {
    const [socialMediaToken, setSocialMediaToken] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`https://time-craft-server-side.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if(data.accessToken){
                        localStorage.setItem('as12tc-token', data.accessToken)
                        setSocialMediaToken(data.accessToken)
                    }   
                })
        }
    }, [email])
    return [socialMediaToken];
}

export default useMediaToken;