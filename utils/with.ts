import { UserRole } from "../types/api";

export const layout = (Layout:any = undefined) => {
    return (Component:React.FC<any>) => {
        // @ts-ignore
        Component.Layout = Layout; 
        return Component
    };
}

export const auth = (Auth?:UserRole[]) => {
    return (Component:React.FC<any>) => {
        // @ts-ignore
        Component.Auth = Auth;
        return Component
    };
}


export const compose = (...hocs: Function[]) => {
    return (Component:React.FC<any>) => {
        let Result:React.FC = Component
        hocs.forEach(H => {
            Result = H(Result)
        })
        
        return Result
    }
}
