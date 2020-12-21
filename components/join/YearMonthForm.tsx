
export const YearMonthForm = ({ date, localeUtils, onChange }: any) => {

    const months = localeUtils.getMonths();

    const years = [];
    // @ts-ignore
    for (let i = fromMonth.getFullYear() - 70; i <= toMonth.getFullYear(); i += 1) {
        years.push(i);
    }

    const handleChange = (e:any) => {
        const { year, month } = e.target.form;
        onChange(new Date(year.value, month.value));
    };

    return (
        <form className="DayPicker-Caption">
            <select name="month" onChange={handleChange} value={date.getMonth()}>
                {months.map((month: any, i:number) => (
                    <option key={month} value={i}>
                        {month}
                    </option>
                ))}
            </select>
            <select name="year" onChange={handleChange} value={date.getFullYear()}>
                {years.map(year => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>
        </form>
    );
}