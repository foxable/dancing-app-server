export function isClass(name: string | undefined): string | undefined
{
    return typeof name !== "undefined" ? `is-${name}` : undefined;
}

export function is(name: string, isEnabled: boolean | undefined): string | undefined
{
    return isEnabled ? `is-${name}`: undefined;
}