//UC3
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
        let firstNameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        if(firstNameRegex.test(firstName))
            this._firstName = firstName;
        else throw "first name is incorrect"
    }
    get lastName(){
        return this._lastName;
    }
    set lastName(lastName){
        let lastNameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$")
        if(lastNameRegex.test(lastName))
        this._lastName = lastName;
        else throw "last name is incorrect"
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
        let addressRegex = RegExp("^[a-zA-Z]{4,}$")
        if(addressRegex.test(address))
        this._address = address;
        else throw "address is incorrect"
    }
    get city(){
        return this._city;
    }
    set city(city){
        let cityRegex = RegExp("^[a-zA-Z]{4,}$")
        if(cityRegex.test(city))
        this._city = city
        else throw "city is incorrect"
    }
    get state(){
        return this._state;
    }
    set state(state){
        let stateRegex = RegExp("^[a-zA-Z]{4,}$")
        if(stateRegex.test(state))
        this._state = state;
        else throw "state is incorrect"
    }
    get zip(){
        return this._zip;
    }
    set zip(zip){
        let zipRegex = RegExp("^[1-9]{1}[0-9]{5}$")
        if(zipRegex.test(zip))
        this._zip = zip
        else throw "zip code is incorrect"
    }
    get phoneNumber(){
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber){
        let phoneNumberRegex = RegExp("^[0-9]{10}$")//doubt
        if(phoneNumberRegex.test(phoneNumber))
        this._phoneNumber = phoneNumber
        else throw "phone number is incorrect"
    }
    get emailId(){
        return this._emailId;
    }
    set emailId(emailId){
        let emailIdRegex = RegExp("^[a-zA-Z0-9+_-]+([.][a-zA-Z0-9]+)*@([a-zA-Z0-9]+)([.][a-z]+)?[.][a-z]{2,}$")//TODO
        if(emailIdRegex.test(emailId))
        this._emailId = emailId
        else throw "email ID is incorrect"
    }
}
let contact = new Contact("Bill","Gates","Parkelitevillas","Bangalore","Karnataka","333031","9876504321","bill.gates@microsoft.com")
let addressBook = new Array();
addressBook.push(contact)
console.log(addressBook)