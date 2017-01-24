export  function getLocal(key) {
    return window.localStorage.getItem(`XIAO_MAI_${key}`);
}
export function setLocal(key,value){
    window.localStorage.setItem(`XIAO_MAI_${key}`,value);
}