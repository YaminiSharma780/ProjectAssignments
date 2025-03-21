
    export type RemoteKeys = 'mdfdapp1/Header' | 'mdfdapp1/Footer';
    type PackageType<T> = T extends 'mdfdapp1/Footer' ? typeof import('mdfdapp1/Footer') :T extends 'mdfdapp1/Header' ? typeof import('mdfdapp1/Header') :any;