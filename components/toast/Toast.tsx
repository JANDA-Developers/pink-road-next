import React from 'react';
import {
    ToastContainer,
    cssTransition,
    ToastContainerProps,
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export interface IProps extends ToastContainerProps { }

export const Toast: React.FC<IProps> = ({ ...props }) => (
    <ToastContainer
        position={'bottom-right'}
        {...props}
        autoClose={3000}
    />
);

export default Toast;
