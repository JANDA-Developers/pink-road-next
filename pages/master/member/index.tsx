import React from 'react';
import { UserRole } from '../../../types/api';
import { auth } from '../../../utils/with';
import { ALLOW_ADMINS } from '../../../types/const';
import { BusiPartnerTable } from '../../../components/member/BusiPartnerTable';
import { MemberMaster } from '../../../components/member/MemberMaster';

interface IProp { }

export const popupOpen1 = () => {
    $('#Popup01').css({
        'display': 'flex'
    });
}

export const CustomerMemberMaster: React.FC<IProp> = () => {
    return <MemberMaster type={UserRole.partnerB} Table={BusiPartnerTable} />
};


export default auth(ALLOW_ADMINS)(CustomerMemberMaster);;
