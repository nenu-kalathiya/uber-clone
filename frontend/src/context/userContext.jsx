import React from 'react'

export const UserDataContext = createContext()

const userContext = ({ children }) => {

    const [user, setUser] = useState({
        email: '',
        fullName: {
            firstName: '',
            lastName: '',
        }
    })

    return (
        <div>
            <UserDataContext.Provider value={user} >
                {children}
            </UserDataContext.Provider>
        </div>
    )
}

export default userContext