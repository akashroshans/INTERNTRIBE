let obj={
    firstname:'Akash',
    lastname:'Roshan',
    getfullname:function(){
        return `${this.firstname} ${this.lastname}`;
    }
}
console.log(obj);
console.log('Full name is '+obj.getfullname());