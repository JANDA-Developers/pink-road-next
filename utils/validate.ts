
const omitDeep = require("omit-deep-lodash");

export const getScrollParent = (target: HTMLElement): HTMLElement => {
    let t = target;
  
    const check = () => t.scrollHeight > t.clientHeight + 100;
    let hasVerticalScrollbar = check();
  
    while (!hasVerticalScrollbar) {
      if (!t.parentElement) break;
      t = t.parentElement;
      hasVerticalScrollbar = check();
    }
  
    return t;
  };
  
  export const parentScrollMove = (
    target: HTMLElement,
    option: ScrollToOptions
  ) => {
    const parentTarget = getScrollParent(target);
    parentTarget.scrollTo(option);
  };
  
  export const parentScrollMoveToElement = (
    target: HTMLElement,
    option: ScrollToOptions = {
      left: 0,
      top: 0,
    }
  ) => {
    parentScrollMove(target, {
      top: target.offsetTop + (option.top || 0),
    });
  };
  
  export const focusWithScroll = (target?: HTMLElement | null) => {
    if (!target) return;
    target.focus();
    parentScrollMoveToElement(target);
  };
  
  
  export const foucs = (id:string) => {
      const ele = document.getElementById(id);
      focusWithScroll(ele);
  }
  

export const foucsById = (id:string) => {
    const ele = document.getElementById(id);
    focusWithScroll(ele);
}

type Tnode = {
    value: any,
    failMsg?: string,
    id?: string;
}

const validate = (nodes:Tnode[]):boolean => {
    return nodes.every((node)=> {
        if(!node.value) {
            if(node.failMsg) alert(node.failMsg);
            if(node.id) foucsById(node.id);
            return false;
        }

        return true;
    })
}
function isFunction(functionToCheck:any) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
 }

export class Validater {
    nodes:Tnode[]

    public validate = (checks?: number[]):boolean => {
        const targetNodes = checks?.map(num => this.nodes[num]);
        let nodes = targetNodes || this.nodes
        
        return nodes.every((node)=> {
            let value = node.value;
            if(isFunction(node.value)) {
              value = node.value();
            }
            if(!value) {
                if(node.failMsg) alert(node.failMsg);
                if(node.id) foucsById(node.id);
                return false;
            }
    
            return true;
        })
    }

    constructor(nodes:Tnode[]) {
        this.nodes = nodes
    }
}

export default validate;
