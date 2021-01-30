export const randomSort = (arr:any[]) => arr.slice().sort(func)
function func() {  
    return 0.5 - Math.random();
  }  