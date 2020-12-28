export function cloneObject<T>(obj:T):T {
    var clone = {};
    for (var key in obj) {
      if (typeof obj[key] == "object" && obj[key] != null) {
        //   @ts-ignore
        clone[key] = cloneObject(obj[key]);
      } else {
                  //   @ts-ignore
        clone[key] = obj[key];
      }
    }
  
    return clone as T;
  }

export const deepCopy = cloneObject;