export const rgbToHex = (rgb: string): string => {
    const rgbValues = rgb.substring(rgb.indexOf('(') + 1, rgb.lastIndexOf(')')).split(',').map(Number);
    const [r, g, b] = rgbValues;

    const componentToHex = (c: number): string => {
        const hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }

    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}