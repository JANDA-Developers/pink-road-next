import { useState } from "react";

export const useIdSelecter = (list:string[], defaultIds:string[] = []) => {
    const [selectedIds, setSelectedIds] = useState(defaultIds);

    const selecteAll = () => {
        setSelectedIds([...list]);
    }

    const unCheck = (_id:string) => {
        setSelectedIds([...selectedIds.filter(id => id !== _id)]);
    }

    const check =(id:string) => {
        selectedIds.push(id);
        setSelectedIds([...selectedIds]);
    }

    const isChecked = (id:string) => selectedIds.includes(id);
    
    const unSelectAll = () => {
        setSelectedIds([]);
    }

    const reverseAll = () => {
        const unchecked = list.filter((id)=> !isChecked(id));
        setSelectedIds(unchecked);
    }
    
    const toggle = (id:string) => {
        if(isChecked(id)) unCheck(id);
        check(id);
    }

    return {selectedIds,setSelectedIds, toggle, selecteAll, unCheck, check, isChecked, unSelectAll, reverseAll};
}
