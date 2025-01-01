export interface Environment {
    production: false;
    apiUrl: 'https://myfastapi-production.up.railway.app'
};

declare const environment: Environment;
export { environment };