export const formattingDate = ({ value }) => {
    const objectDate = new Date(value);
    const unformattedDay = objectDate.getDate();
    const unformattedMonth = objectDate.getMonth() + 1;
    const day = unformattedDay < 10 ? `0${unformattedDay}`: unformattedDay;
    const month = unformattedMonth < 10 ? `0${unformattedMonth}`: unformattedMonth;
    const year = objectDate.getFullYear();
    return `${day}.${month}.${year}`;
}

