let sam=  {
    firstname: "nixon",
    lastname: "paul",
     get dd (){
        sum= sam.firstname+sam.lastname;
        return sum;
    },
    set dd(value){
        if (typeof value!= "string"){
            const err = new Error("it is not a string")
            throw err;
        }
        let values=value.split(" ");
        console.log(values);
        this.firstname= values[0];
        this.lastname= values[1] ?? "";

    }
    
    
}
try{
    sam.dd= 48;
}catch (e){
    console.log(e)
}

//console.log(sam['lastname'])
 console.log(sam.dd)