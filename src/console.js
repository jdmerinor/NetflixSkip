// wrap console.xxx() to add prefix
const prefix = 'Netflix Skip > ';

export const log = (...args) => window.console.log(prefix, ...args);
export const warn = (...args) => window.console.warn(prefix, ...args);
