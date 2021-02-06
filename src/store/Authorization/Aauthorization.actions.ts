export function sum (a: number, b: number) {
    return {
        type: 'SUM',
        payload: [a, b]
    }
}

export function subract (a: number, b: number) {
    return {
        type: 'SUBTACT',
        payload: [a, b]
    }
}
