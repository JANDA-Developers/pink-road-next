// 어레이 전부 더해줌
export const arraySum = (arr: Array<number>): number => {
    let result = 0;
  
    for (let i = 0; i < arr?.length; i += 1) result += arr[i];
  
    return result;
  };
  