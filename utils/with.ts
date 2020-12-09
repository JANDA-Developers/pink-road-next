import { UserRole } from "aws-sdk/clients/workmail";

export const wrap = (Component:React.FC<any>) => {
    return (Layout:any = undefined, Auth?:UserRole[]) => {
        // @ts-ignore
        Component.Layout = Layout; 
        // @ts-ignore
        Component.Auth = Auth; 
        return Component
    };
}


export const auth = (Component:React.FC<any>) => {
    return (Auth?:UserRole[], Layout:any = undefined,) => {
        console.log(Auth);
        // @ts-ignore
        Component.Layout = Layout; 
        // @ts-ignore
        Component.Auth = Auth; 
        return Component
    };
}