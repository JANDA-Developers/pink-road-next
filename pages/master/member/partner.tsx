import React from "react";
import { MemberMaster } from "../../../components/member/MemberMaster";
import { UserRole } from "../../../types/api";
import { BusiPartnerTable } from "../../../components/member/BusiPartnerTable";

interface IProp {}
export const PartnerMemberMaster: React.FC<IProp> = () => {
    return <MemberMaster type={UserRole.partner} Table={BusiPartnerTable} />;
};

export default PartnerMemberMaster;
