export function cloneObject<T>(obj:T):T {
  try {
  console.log("!!!!obj!!!!!");
  console.log(obj);
  return JSON.parse(JSON.stringify(obj));
  } catch {
    return {} as any
  }
}