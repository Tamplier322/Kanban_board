import { rgbToHex } from '@utils/colorUtils';

describe('rgbToHex Function', () => {
    it('should convert rgb color to hex color', () => {
        expect(rgbToHex('rgb(255, 0, 0)')).toBe('#ff0000');
        expect(rgbToHex('rgb(0, 255, 0)')).toBe('#00ff00');
        expect(rgbToHex('rgb(0, 0, 255)')).toBe('#0000ff');
        expect(rgbToHex('rgb(255, 255, 255)')).toBe('#ffffff');
        expect(rgbToHex('rgb(0, 0, 0)')).toBe('#000000');
    });

    it('should handle single-digit rgb values', () => {
        expect(rgbToHex('rgb(1, 2, 3)')).toBe('#010203');
    });

    it('should handle rgb values with spaces', () => {
        expect(rgbToHex('rgb(1,   2,  3)')).toBe('#010203');
    });
});