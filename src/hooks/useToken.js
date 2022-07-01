import { useEffect, useState } from "react"

const useToken = (user) => {
    const [token,setToken]=useState('')
    useEffect(() => {
        const gettoken = async () => {
            const emails = user
            if (emails) {
                fetch(`http://localhost:5000/token?email=${emails}`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(res => res.json()).then(data => {
                    localStorage.setItem('token', data.createToken)
                    setToken(data.createToken)
             })
            
           }
        }
        gettoken()
    }, [user])
    return[token]
}
export default useToken