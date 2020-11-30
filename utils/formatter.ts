const autoComma = (str: string | number = ''): string => {
    
    if (typeof str === 'number') return autoComma(str.toString());
    let t = `${str}`;
    const comma = /,/g;
    t = t.replace(comma, '');
    const x = t.split('.');
    let x1 = x[0];
    const x2 = x.length > 1 ? `.${x[1]}` : '';
    const rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
  
    return x1 + x2;
};



  
  export {
    autoComma
  };

  export interface IselectedOption<T = any> {
    label: string;
    _id: T;
  }
  
export function toOps<T, C extends keyof T>(op: Array<T>, id: C, label: C): IselectedOption[] {
  return op.map((o) => ({
      label: o[label] as any,
      _id: o[id] as any
  }))
}


export const deepCopy = <T>(inObject:T):T => {
  let outObject, value, key

  if (typeof inObject !== "object" || inObject === null) {
    return inObject // Return the value if inObject is not an object
  }

  // Create an array or object to hold the values
  outObject = Array.isArray(inObject) ? [] : {}

  for (key in inObject) {
    // @ts-ignore
    value = inObject[key]
    
    // Recursively (deep) copy for nested objects, including arrays
    // @ts-ignore
    outObject[key] = deepCopy(value)
  }
  
  // @ts-ignore
  return outObject
}
