const DAYS_IN_A_WEEK = 7;
const EXAMPLE_LEAP_YEAR = 2020;

export const getOffset = (dayOfTheWeek) => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return days.indexOf(dayOfTheWeek);
}

export const populateMonth = (numberOfDays, startingDay) => {
    const offset = getOffset(startingDay);

    const month = [];
    for (let i = 1; i < numberOfDays + 1; i += DAYS_IN_A_WEEK) {
        const week = [];
        if (i === 1 && startingDay !== 'sunday') {
            for (let x = 0; x < offset; x++) {
                week.push('x');
            }
            for (let j = i; (j < i + (DAYS_IN_A_WEEK - offset)) && (j < numberOfDays + 1); j++) {
                week.push(j);
            }
            i -= offset;
        } else {
            for (let j = i; (j < i + DAYS_IN_A_WEEK) && (j < numberOfDays + 1); j++) {
                week.push(j);
            }
        }
        month.push(week);
    }
    return month;
}

export const isLeapYear = (year) => {
    const difference = year - EXAMPLE_LEAP_YEAR;
    return difference % 4 === 0;
}

export const populateYear = (year, startingDay) => {
    const monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (isLeapYear(year)) {
        monthLengths[1] = 29;
    }

    return monthLengths.reduce((newMonthsArray, month, index) => {
        if (index === 0) {
            newMonthsArray.push(populateMonth(month, startingDay));
            return newMonthsArray;
        } else {
            const previousMonth = newMonthsArray[index - 1];
            const lengthOfLastWeekOfPreviousMonth = previousMonth[previousMonth.length - 1].length;
            const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
            const firstDayOfThisMonth = days[lengthOfLastWeekOfPreviousMonth % days.length];
            newMonthsArray.push(populateMonth(month, firstDayOfThisMonth));
            return newMonthsArray;
        }
    }, []);
}
