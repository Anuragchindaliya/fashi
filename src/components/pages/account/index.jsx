import React from 'react'
import { useSelector } from 'react-redux'

import _ from "lodash";
import Breadcrumb from 'components/common/breadcrumb';
import CreateAccount from 'components/pages/account/createAccount';
import Profile from './profile';
const Account = () => {
    const account = useSelector((store) => store.account)
    console.log(account);
    return (
        <div>
            <Breadcrumb />
            {_.isEmpty(account.data) ? <CreateAccount /> : <Profile />}
        </div>
    )
}

export default Account