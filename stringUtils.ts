export function reverseString(input: string): string {
    return input.split('').reverse().join('');
}

export function countCharacters(input: string): number {
    return input.length;
}

export function capitalizeWords(input: string): string {
    return input
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}