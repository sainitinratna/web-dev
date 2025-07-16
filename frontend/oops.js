class bank{
#balance = 0

deposit(ammount){
    this.#balance+=ammount
    return this.#balance
}
    getbalance(){
        return `$ ${this.#balance}`
    }
}

let heelo = new bank();
console.log(heelo.getbalance())
