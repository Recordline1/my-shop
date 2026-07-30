


export const parseNumber = (value?: string): number | undefined => {
    if (!value) return undefined;

    const number = Number(value);

    return (Number.isNaN(number)) ? undefined : number;
}