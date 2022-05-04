import { Rol } from "./rol";

export class Usuario {
    idUsuario: number;
    nombre: string;
    clave: string;
    estado: boolean;
    roles: Rol[];

    constructor(idUsuario: number, 
                nombre: string, 
                clave: string, 
                estado: boolean, 
                roles: Rol[]){
        this.idUsuario = idUsuario;
        this.nombre = nombre;
        this.clave = clave;
        this.estado = estado;
        this.roles = roles;
    }
}