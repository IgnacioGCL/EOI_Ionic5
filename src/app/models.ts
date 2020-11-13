export interface Post {
    id: string;
    autor: string;
    descripcionCorta: string;
    descripcion: string;
    fotoUrl: string;
    titulo: string;
    url: string;
}

export interface Photo {
    filepath: string;
    webviewPath: string;
}
