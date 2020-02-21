export class AccountModel {
    id = 0;
    name = "";
    solde = 0;
    currency = "€";

    constructor(id, name, solde, currency = '€') {
        this.id = id;
        this.name = name;
        this.solde = solde;
        this.currency = '€';
    }
}