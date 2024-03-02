export const createError = (staus,message) => {
    const err = new Error();
    err.staus = staus;
    err.message = message;
    return err;
} 