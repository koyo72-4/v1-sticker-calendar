const DAYS_IN_A_WEEK = 7;

export const getOffset = (dayOfTheWeek) => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return days.indexOf(dayOfTheWeek);
}

export const populateMonth = (numberOfDays, startingDay) => {
    const offset = getOffset(startingDay);

    const month = [];
    for (let i = 1; i < numberOfDays; i += DAYS_IN_A_WEEK) {
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
