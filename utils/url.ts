export const getFromUrl = (get: string): string | null => {
    const url_string = window.location.href;
    const url = new URL(url_string);
    const ln = url.searchParams.get(get);
    return ln?.replace("/", "") || null;
  };
  
  type Tresult = {
    [key: string]: string;
  };
  