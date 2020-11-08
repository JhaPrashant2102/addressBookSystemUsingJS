//UC1
class Contact{
    constructor(...parameters){
        this.firstName = parameters[0]
        this.lastName = parameters[1]
        this.fullName = this.firstName+this.lastName;
        this.address = parameters[2]
        this.city = parameters[3]
        this.state = parameters[4]
        this.zip = parameters[5]
        this.phoneNumber = parameters[6]
        this.emailId = parameters[7]
    }
    get firstName(){
        return this._firstName;
    }
    set firstName(firstName){
        this._firstName = firstName;
    }
    get lastName(){
        return this._lastName;
    }
    set lastName(lastName){
        this._lastName = lastName;
    }
    get fullName(){
        return this._fullName
    }
    set fullName(fullName){
        this._fullName = fullName
    }
    get address(){
        return this._address;
    }
    set address(address){
        this._address = address;
    }
    get city(){
        return this._city;
    }
    set city(city){
        this._city = city
    }
    get state(){
        return this._state;
    }
    set state(state){
        this._state = state;
    }
    get zip(){
        return this._zip;
    }
    set zip(zip){
        this._zip = zip
    }
    get phoneNumber(){
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber){
        this._phoneNumber
    }
    get emailId(){
        return this._emailId;
    }
    set emailId(emailId){
        this._emailId = emailId
    }
}
let contact = new Contact("Bill","Gates","191/20 block E","Bangalore","Karnataka","333031","987654321","bill.gates@microsoft.com")
console.log(contact)