export interface Environment {
  production: true,
  apiUrl: 'https://myfastapi-production.up.railway.app'
};

declare const environment: Environment;
export { environment };
