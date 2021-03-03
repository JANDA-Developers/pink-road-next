export const getFromUrl = (get: string): string | null => {
  if(typeof window === "undefined") return "";
    const url_string = window.location.href;
    const url = new URL(url_string);
    const ln = url.searchParams.get(get);
    return ln?.replace("/", "") || null;
  };
  
  type Tresult = {
    [key: string]: string;
  };
  

  
export const getAllFromUrl = <T>(): Partial<T> | Tresult => {
  if(typeof window === "undefined") return {}
  const url_string = window.location.href;
  const url = new URL(url_string);
  let params: Tresult = {};

  url.searchParams.forEach((value, key) => {
    params[key] = value;
  });


  return params;
};
