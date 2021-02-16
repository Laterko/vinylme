export class User {
    id: string;
    email: string;
    login: string;
    password: string;
    joinDate: Date;

    constructor(id:string, email: string, login: string, password: string, joinDate: Date){
        this.id=id;
        this.email=email;
        this.login=login;
        this.password=password;
        this.joinDate=joinDate;
    }
}