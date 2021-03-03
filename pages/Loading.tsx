import React from 'react';

interface IProp { }

export const PageLoading: React.FC<IProp> = () => {
    return <div className="pageLoader" style={{ minHeight: "90vh", width: "100%" }} ></div>;
};


export default PageLoading;