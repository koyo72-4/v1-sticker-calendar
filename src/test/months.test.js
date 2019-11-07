import { getOffset, populateMonth } from '../util/months';

describe('getOffset', () => {
    it('returns how many days are between Sunday (the first day of the week) and the given day', () => {
        const result = getOffset('thursday');
        expect(result).toBe(4);
    });
});

describe('populateMonth', () => {
    it('returns a month, which is an array of arrays of days that line up with the correct day of the week (where Sunday is the first day of the week), given the number of the days in the month and the day of the week on which the month starts', () => {
        const tuesdayResult = populateMonth(31, 'tuesday');
        expect(tuesdayResult).toEqual([
            ['x', 'x', 1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10, 11, 12],
            [13, 14, 15, 16, 17, 18, 19],
            [20, 21, 22, 23, 24, 25, 26],
            [27, 28, 29, 30, 31]
        ]);

        const sundayResult = populateMonth(30, 'sunday');
        expect(sundayResult).toEqual([
            [1, 2, 3, 4, 5, 6, 7],
            [8, 9, 10, 11, 12, 13, 14],
            [15, 16, 17, 18, 19, 20, 21],
            [22, 23, 24, 25, 26, 27, 28],
            [29, 30]
        ]);
    });
});
