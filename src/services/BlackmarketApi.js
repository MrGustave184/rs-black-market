class blackmarketApi {
    constructor() {
        this.BASE_ROUTE = 'https://rs-blackmarket-api.herokuapp.com/api/v1';
        this.JSON_HEADERS = {
            "Content-Type": "application/json",
        };
    }
}

export default blackmarketApi