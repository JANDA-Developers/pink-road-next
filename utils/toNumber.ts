export const toNumber = (value: string | number = '0'): number => {
    if (typeof value === 'number') return value;
    if(value === null) return 0
    return parseInt(value.replace(/[^0-9.]/g, ''));
  };