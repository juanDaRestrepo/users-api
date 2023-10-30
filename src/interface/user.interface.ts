export interface User {
    id: number;
    full_name: string;
    email: string;
    password :string;
    phone :string;
    role : number;
    is_deleted : boolean;
    created_at : Date;
    updated_at: Date;
}