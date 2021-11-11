export default class CollectionHelper{
    _gKey = ""

    constructor(key){
        if(!key){
            console.log("You must provide a key!")
        }else{
            console.log("Local Storage Key: " + key)
        }
        this._gKey = key;
    }

    getGames = () =>{
        let string = localStorage.getItem(this._gKey);
        let array = JSON.parse(string) || [];
        return array;
    }

    saveGames = (game) =>{
        if(this.exists(game)) return;
        console.log("Saving Game: ",game);
        let array = this.getGames();
        array.push(game);
        localStorage.setItem(this._gKey,JSON.stringify(array));
    }

    removeGame = (game) =>{
        let array = this.getGames()
        if(this.exists(game)){
            array.splice(array.indexOf(game), 1)
            localStorage.setItem(this._gKey,JSON.stringify(array));
        }
        else{
            console.error("removeGame not found")
        }

    }

    exists = (game) =>{
        let array = this.getGames();
        if(array.indexOf(game) > -1){
            return true;
        }else{
            return false;
        }
    }
}