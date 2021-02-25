//a를 b순서로 맞춤
export const arrayOrderSink = <T>(a:T[],sortKey:keyof T, b: string[]) => {
  const sortedItems = a.slice().sort((prev, next) => b.indexOf(prev[sortKey] as any) - b.indexOf(next[sortKey] as any));
  return sortedItems;
}