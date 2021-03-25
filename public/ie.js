function isItIE() {
    var user_agent = navigator.userAgent;
    var is_it_ie = user_agent.indexOf("MSIE ") > -1 || user_agent.indexOf("Trident/") > -1;
    return is_it_ie;
  }

  if (isItIE()) {
    alert(`
    현 사이트는 Internet Explor를 지원하지 않고 있습니다. 
    Chorme 또는 Edge브라우저 사용을 권장 드립니다.
    `)
  } else {
    console.log('It is not Internet Explorer');
  }
