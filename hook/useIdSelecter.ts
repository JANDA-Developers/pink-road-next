import { useState } from "react";

export const useIdSelecter = (list:string[], defaultIds:string[] = []) => {
    const [selectedIds, setSelectedIds] = useState(defaultIds);

    const selecteAll = () => {
        setSelectedIds([...list]);
    }

    const unCheck = (_id:string) => {
        alert("uncheck");
        setSelectedIds([...selectedIds.filter(id => id !== _id)]);
    }
    
    const check =(id:string) => {
        alert("check");
        const filtered = selectedIds.filter(_id => _id === id)
        setSelectedIds([...filtered,id]);
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
        else check(id);
    }

    const isAllSelected =  list.length === selectedIds.length;
    const tooggleAll = () => {
        if(isAllSelected) {
            unSelectAll();
        } else {
            selecteAll()
        }
    }


    console.log("selectedIds");
    console.log(selectedIds);
    console.log(selectedIds);

    return {selectedIds,setSelectedIds, toggle, selecteAll, unCheck, check, isChecked, unSelectAll, reverseAll, isAllSelected,tooggleAll};
}
