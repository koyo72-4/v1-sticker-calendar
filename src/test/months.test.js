import { getOffset, populateMonth, isLeapYear, populateYear } from '../util/months';

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

        const fridayResult = populateMonth(31, 'friday');
        expect(fridayResult).toEqual([
            ['x', 'x', 'x', 'x', 'x', 1, 2],
            [3, 4, 5, 6, 7, 8, 9],
            [10, 11, 12, 13, 14, 15, 16],
            [17, 18, 19, 20, 21, 22, 23],
            [24, 25, 26, 27, 28, 29, 30],
            [31]
        ]);
    });
});

describe('isLeapYear', () => {
    it('returns true if the given year is a leap year', () => {
        const laterResult = isLeapYear(2036);
        expect(laterResult).toBe(true);

        const earlierResult = isLeapYear(1852);
        expect(earlierResult).toBe(true);
    });

    it('returns false if the given year is not a leap year', () => {
        const laterResult = isLeapYear(2022);
        expect(laterResult).toBe(false);

        const earlierResult = isLeapYear(2014);
        expect(earlierResult).toBe(false);
    });
});

describe('populateYear', () => {
    it('returns a year of 12 months, a month being an array of arrays of days that line up with the correct day of the week (where Sunday is the first day of the week), given the year number and the day of the week on which the year starts', () => {
        const twentyNineteenResult = populateYear(2019, 'tuesday');
        expect(twentyNineteenResult).toMatchSnapshot();

        const twentyTwentyResult = populateYear(2020, 'wednesday');
        expect(twentyTwentyResult).toMatchSnapshot();

        const twentyTwentyOneResult = populateYear(2021, 'friday');
        expect(twentyTwentyOneResult).toMatchSnapshot();

        const twentyTwentyFourResult = populateYear(2024, 'monday');
        expect(twentyTwentyFourResult).toMatchSnapshot();
    });
});
