export type PackageFormat = "BOX" | "PARCEL" | "PACKET" | "LETTER"

export enum ValueType {
    String = 0,
    Integer = 1,
    Double = 2,
    Boolean = 3,
    Password = 4,
    List = 5
}

export type GenericValue = {
    Display: string;
    Value: string;
}

export type GenericResponse = {
    /**
     * Error string if there was an issue with the call.
     * 
     * `null` or `Empty` string are valid when no error
     */
    ErrorMessage: string | null;
    /**
     * Indicates if there is an error
     */
    IsError: boolean;
}

export type ListValue = GenericValue;

export type Only<T, U> = {
    [P in keyof T]: T[P];
} & {
    [P in keyof U]?: U[P];
};

export type Either<T, U> = Only<T, U> | Only<U, T>;

