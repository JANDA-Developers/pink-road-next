import { AppContext } from "pages/_app";
import { useContext } from "react";
import { UserRole } from "types/api";

export const roleCheck = (require: UserRole[] | UserRole):boolean => {
    const {role} = useContext(AppContext);

    if(typeof require === "string") {
        return role === require
    } else {
        return !!require.find((R)=> role === R);
    }

}

