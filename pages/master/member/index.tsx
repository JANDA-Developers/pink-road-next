import React from 'react';
import { MemberMaster } from '../../../components/member/MemberMaster';
import { CustomerTable } from '../../../components/member/CustomerTable';
import { UserRole } from '../../../types/api';

interface IProp { }

export const popupOpen1 = () => {
    $('#Popup01').css({
        'display': 'flex'
    });
}

export const CustomerMemberMaster: React.FC<IProp> = () => {
    return <MemberMaster type={UserRole.individual} Table={CustomerTable} />
};

export default CustomerMemberMaster;