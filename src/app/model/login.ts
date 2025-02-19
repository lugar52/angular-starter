export interface Login {
   username: string, 
   password: string 
}

export interface Usuario {
    username: string,
    password: string
}

export interface ResponceAcceso {
    IsSuccess: boolean,
    token: string
}