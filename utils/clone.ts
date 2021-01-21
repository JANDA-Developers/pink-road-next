export function cloneObject<T>(obj:T):T {
    try {
    return JSON.parse(JSON.stringify(obj));
    } catch {
      return {} as any
    }
  }