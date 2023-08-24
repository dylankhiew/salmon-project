export const getRandomDegrees = (max: number) => {
    const shouldTilt = Math.floor(Math.random() * 2) === 1;
    return `${shouldTilt ? '-' : ''}${Math.floor(Math.random() * max)}`;
}