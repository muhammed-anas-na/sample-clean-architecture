class User{
    constructor({first_name , last_name , email,phone,alt_number,password}){
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone = phone;
        this.alt_number = alt_number;
        this.password = password;
    }
}

module.exports = User;