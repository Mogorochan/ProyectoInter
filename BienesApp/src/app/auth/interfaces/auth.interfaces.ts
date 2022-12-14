export interface AuthResponse{
    ok  :  boolean; 
    uid?  : string; 
    name? : string; 
    email?: string;
    token? :string;  
    msg?   : string;
}

export interface Auth {
    uid:  string;
    name: string;
    email: string;
}