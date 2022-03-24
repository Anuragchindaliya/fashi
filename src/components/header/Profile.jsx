import { accountReset } from 'actions/account.action';
import React from 'react'
import { useDispatch } from 'react-redux'

const Profile = ({ avatar_url, first_name }) => {

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(accountReset());
    }
    return (
        <div>
            <img src={avatar_url} alt="customer" />{first_name}
            <div className='site-btn' onClick={handleLogout}>LOGOUT</div>
        </div>
    )
}

export default Profile