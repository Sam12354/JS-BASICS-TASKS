class Stringer {
    constructor(innerString, innerLength){
        this.innerString = innerString
        this.innerLength = innerLength
    }

    increase(length){
        this.innerLength += length;
    }

    decrease(length){
        this.innerLength -= length;
        if(this.innerLength < 0){
            this.innerLength = 0;
        }
    }

    toString(){
        if(this.innerString.length > this.innerLength){

            if(this.innerLength === 0){
                return `...`
            }else{
                return `${this.innerString.slice(0, this.innerLength)}...`;
            }
        }else {
            return this.innerString;
        }
           
    }
}
