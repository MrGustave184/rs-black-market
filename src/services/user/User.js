import blackmarketApi from "../blackmarketApi";

class User extends blackmarketApi {
    constructor({ email, fullName, password, passwordConfirm }) {
        super();
        this.modelRoute = '/user';
        this.email = email;
        this.fullName = fullName;
        this.password = password;
        this.passwordConfirm = passwordConfirm;
    }

    async create() {
        const fetch = await fetch(this.BASE_ROUTE + this.modelRoute, {
            method: 'POST',
            headers: this.JSON_HEADERS,
            body: JSON.stringify({
                user: {
                    email: this.email,
                    fullName: this.fullName,
                    password: this.password,
                    passwordConfirm: this.passwordConfirm,
                }
            })
        });

        return fetch.json();
    }
}

export default User;