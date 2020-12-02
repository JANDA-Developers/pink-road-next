

export const foucsById = (id:string) => {
    const ele = document.getElementById(id);
    ele?.focus();
    ele?.scrollIntoView();
}

type Tnode = {
    value: any,
    failMsg?: string,
    id?: string;
    failFn?: () => void;
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
                if(node.failFn) node.failFn();
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
