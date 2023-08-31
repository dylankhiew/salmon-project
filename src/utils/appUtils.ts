export const getRandomDegrees = (max: number): string => {
    const shouldTilt = Math.floor(Math.random() * 3) === 1;
    return `${shouldTilt ? '-' : ''}${Math.floor(Math.random() * max + 1)}`;
}