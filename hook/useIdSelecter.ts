import { useState } from "react";

export const useIdSelecter = (list:string[], defaultIds:string[] = []) => {
    const [selectedIds,setSelectedIds] = useState(defaultIds);

    const selecteAll = () => {
        setSelectedIds([...list]);
    }

    const unCheck = (id:string) => {
        setSelectedIds([...selectedIds.filter(id => id !== id)]);
    }

    const check =(id:string) => {
        selectedIds.push(id);
        setSelectedIds([...selectedIds]);
    }

    const isChecked = (id:string) => selectedIds.includes(id);
    
    const unSelectAll = () => {
        setSelectedIds([]);
    }

    const reverse = () => {
        const unchecked = list.filter((id)=> !isChecked(id));
        setSelectedIds(unchecked);
    }


    return {selectedIds,setSelectedIds, selecteAll, unCheck, check, isChecked, unSelectAll, reverse};
}