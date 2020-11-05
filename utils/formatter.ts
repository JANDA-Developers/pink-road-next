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