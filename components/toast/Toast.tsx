import React from 'react';
import {
    ToastContainer,
    cssTransition,
    ToastContainerProps,
} from 'react-toastify';

//  enter 와 exit 의 값은 css 에니메이션 이름입니다.
const Zoom = cssTransition({
    enter: 'zoomIn',
    exit: 'zoomOut',
    duration: [400, 400],
});

export interface IProps extends ToastContainerProps { }

export const Toast: React.FC<IProps> = ({ ...props }) => (
    <ToastContainer
        position={'bottom-center'}
        transition={Zoom}
        {...props}
        autoClose={3000}
    />
);

export default Toast;
