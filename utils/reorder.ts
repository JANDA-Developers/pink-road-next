export const reorder = <T>(list:T[], startIndex:number, endIndex:number) => {
    const moveTarget = list[startIndex];
    list.splice(startIndex,1);
    list.splice(endIndex, 0, moveTarget);
    return list;
  };
  