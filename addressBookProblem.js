//UC1 UC2
class Contact{
    constructor(...parameters){
        this.firstName = parameters[0]
        this.lastName = parameters[1]
        this.fullName = this.firstName+" "+this.lastName;
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
    toString(){
        return  "first name:"+this.firstName+", Last Name: "+this.lastName + ", Address: "+this.address+", City: "+this.city+", State: "
        +this.state+", Zip: "+this.zip+", Phone: "+this.phoneNumber+", Email: "+this.emailId;
    }
}

let contact1 = new Contact("Bill","Gates","Parkelitevillas","Mumbai","Maharashtra","333031","9876504321","bill.gates@microsoft.com")
let contact2 = new Contact("Jeff","Bezoz","Parkelitefloors","Bangalore","Karnataka","121002","9876504321","jeff.bezoz@microsoft.com")

//UC3
let addressBook = new Array();
addressBook.push(contact1)
addressBook.push(contact2)
console.log("UC3"+addressBook)
//UC4
function searchForContact(contact){
    if(contact.firstName.includes("Bill"))
    return contact
    else
    return undefined
}
addressBook.find(searchForContact).firstName = "Bill"
console.log(addressBook)
//UC5
addressBook.pop(addressBook.find(searchForContact))
console.log("UC5:"+addressBook)
//UC6
addressBook.push(contact1)
function totalContacts(totalContacts){
    return ++totalContacts
}
console.log("UC6 total number of contacts in address book:"+addressBook.reduce(totalContacts,0))
//UC7
function addContact(contact){
    let newContact = addressBook.find(searchContact=>searchContact.fullName==contact.fullName)
    if(newContact==undefined){
        addressBook.push(contact)
        return true
    }else{
        return false;
    }
}
if(addContact(contact1))
console.log("UC7: not a duplicate contact:")
else 
console.log("UC7 : duplicate contact cannot be entered in address book")
console.log(addressBook)
//UC8
function searchPerson(firstName,city){
    return ((addressBook.find(contact=>contact.firstName==firstName&&contact.city==city))!=undefined)?true:false
}
console.log("UC8: does bill stays in bangalore?: "+searchPerson("Bill","Bangalore"))
//UC9
addContact(contact2)
function viewPersonByCity(searchCity){
    addressBook.filter(contact=>contact.city==searchCity).forEach(contact=>console.log(contact))
}
console.log("UC9 view persons in bangalore:")
viewPersonByCity("Bangalore")
//UC10
function getCountInCity(city){
    let count = 0;
    addressBook.filter(contact=>contact.city==city).forEach(contact=>++count)
    return count
}
console.log("UC10 number of person in bangalore:"+getCountInCity("Bangalore"))
//UC11
function sortAddressBookByName(type){
    let sortedAddressBook = new Array();
    switch(type){
        case "name":
        sortedAddressBook = addressBook.slice().sort((a,b)=>(a.firstName).localeCompare(b.firstName));
        break;
        case "city":
        sortedAddressBook = addressBook.slice().sort((a,b)=>(a.city).localeCompare(b.city));
        break;
        case "state":
        sortedAddressBook = addressBook.slice().sort((a,b)=>(a.state).localeCompare(b.state));
        break;
        case "zip":
        sortedAddressBook = addressBook.slice().sort((a,b)=>(a.zip).localeCompare(b.zip));
        break;
        default:
        break;
    }
   console.log(sortedAddressBook)
}
console.log("UC11 : sorted address book by person's name:")
sortAddressBookByName("name")
//UC12
console.log("UC11 : sorted address book by person's city:")
sortAddressBookByName("city")
console.log("UC11 : sorted address book by person's state:")
sortAddressBookByName("state")
console.log("UC11 : sorted address book by person's zip:")
sortAddressBookByName("zip")

