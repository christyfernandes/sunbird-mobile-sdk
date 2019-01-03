export enum ResponseCode {
    HTTP_UNAUTHORISED = 401,
    HTTP_SUCCESS = 200,
    SUCCESS_GENERIC = 2000,
    ERROR_GENERIC = 1000,
    ERROR_DB = 1001,
    ERROR_IO = 1002,
}

export class Response<T = any> {

    constructor(private responseCode: ResponseCode,
                private errorMesg: string,
                private body: T) {

    }

    code(): number {
        return this.responseCode;
    }

    error(): Error {
        return new Error(this.errorMesg);
    }

    response(): T {
        return this.body;
    }

    success(): boolean {
        return this.responseCode === 200;
    }
}
