import React from 'react';
import { MemberMaster } from '../../../components/member/MemberMaster';
import { CustomerTable } from '../../../components/member/CustomerTable';
import { UserRole } from '../../../types/api';
import { auth } from '../../../utils/with';
import { ALLOW_ADMINS } from '../../../types/const';

interface IProp { }

export const popupOpen1 = () => {
    $('#Popup01').css({
        'display': 'flex'
    });
}

export const CustomerMemberMaster: React.FC<IProp> = () => {
    return <MemberMaster type={UserRole.individual} Table={CustomerTable} />
};


export default auth(ALLOW_ADMINS)(CustomerMemberMaster);;
