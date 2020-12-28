import React from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { IUsePageEdit, usePageEdit } from "../hook/usePageEdit";
import { UserRole } from "../types/api";

export const layout = (Layout: any = undefined) => {
    return (Component: React.FC<any>) => {
        // @ts-ignore
        Component.Layout = Layout;
        return Component
    };
}

export const auth = (Auth?: UserRole[]) => {
    return (Component: React.FC<any>) => {
        // @ts-ignore
        Component.Auth = Auth;
        return Component
    };
}

export const edit = (Auth?: UserRole[]) => {
    return (Component: React.FC<any>) => {
        // @ts-ignore
        Component.Auth = Auth;
        return Component
    };
}


export const compose = (...hocs: Function[]) => {
    return (Component: React.FC<any>) => {
        let Result: React.FC = Component
        hocs.forEach(H => {
            Result = H(Result)
        })

        return Result
    }
}



export interface IEditPage<T> extends IUsePageEdit<T> { }
// export const EditContext: any = React.createContext<IUsePageEdit<any>>({})
// export const withEdit = (Component: React.FC, pageInfoDefault: any) => {
//     const Child: React.FC<any> = ({ pageInfo }) => {
//         const editorTools = usePageEdit(pageInfo, pageInfoDefault);
//         return <EditContext.Provider value={editorTools}>
//             <Component />
//         </EditContext.Provider>
//     }

//     return Child
// }