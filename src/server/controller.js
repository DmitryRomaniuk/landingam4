// @flow

export const homePage = () => null;

export const helloEndpoint = (num: number) => ({
    serverMessage: `Hello from the server! (received ${num})`,
});
