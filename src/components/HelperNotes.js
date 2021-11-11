export default class HelperNotes{
    _lsKey = ''

    constructor(key){
        if(!key){
            console.error("you must provide a key for local storage");
        }else{
            console.log("Local Storage Key: ", key)
        }
        this._lsKey = key;
    }

    getItems = ()=>{
        var str = localStorage.getItem(this._lsKey);
        var arr = JSON.parse(str) || [];
        return arr
    }

    saveItem = (item)=>{
        if(this.exists(item)) return;
        console.log(this._lsKey)
        var arr = this.getItems();
        arr.push(item);
        localStorage.setItem(this._lsKey,JSON.stringify(arr));
    }

    exists = (item) =>{
        var arr = this.getItems();
        if(arr.indexOf(item) > -1){
            return true
        }else{
            return false;
        }
    }
}