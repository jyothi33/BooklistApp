import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../redux/Users/UserAction'


const UserComponent = ({userData, fetchUsers}) => {

    //const userData = useSelector(state => state.users);

    //console.log(`user ${userData}`)

    //const dispatch = useDispatch(fetchUsers());

    //console.log(`userData - ${err}`)

    useEffect(() => {
        fetchUsers()
    }, [])

    return userData && userData.loading ? (<h2>Loading....</h2>) :  userData.error ? (<h2> {userData.error}</h2>): 
    (
        <div>
            <h2>Users List</h2>
            <div>
                {
                    userData && userData &&
                    userData.users.map( user => <p>{user.name}</p>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        userData: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent) 

