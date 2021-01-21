import React from 'react';
import { JDpayCompleteUI } from '../../components/payment/JDpayCompleteUi';

interface IProp { }

export const Complete: React.FC<IProp> = () => {
    return <JDpayCompleteUI />;
};

export default Complete;