import { AccountModel } from "./AccountModel";

export class CustomerModel {
    firstname = "";
    lastname = "";
    birthDate = "";
    gender = "";
    accounts = [AccountModel];

    constructor(firstname, lastname, birthDate, gender, accounts = [AccountModel]) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthDate = birthDate;
        this.gender = gender;
        this.accounts = accounts;
    }

    get age() {
        return new Date().getFullYear() - new Date(this.birthDate).getFullYear();
    }

    get birthDateDisplay() {
        return new Date(this.birthDate).toLocaleDateString('fr-FR');
    }
}