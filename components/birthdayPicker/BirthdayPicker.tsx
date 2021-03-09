import { ChangeEvent } from "react"
import { toNumber } from "../../utils/toNumber"

interface IBirthdayPicker {
    date: Date;
    setDate: (date: Date) => void;
}

export const BirthDayPicker: React.FC<IBirthdayPicker> = ({ date, setDate }) => {


    const handleMonth = (day: number) => {
        date.setMonth(day)
    }


    const handleDay = (day: number) => {
        date.setDate(day)
    }


    const handleYear = (value: number) => {
        date.setFullYear(value)
    }

    const handleDate = (type: "m" | "d" | "y") => (e: ChangeEvent<HTMLSelectElement>) => {
        const num = toNumber(e.currentTarget.value);
        if (type === "m") handleMonth(num);
        if (type === "y") handleYear(num);
        if (type === "d") handleDay(num);
        setDate(date);
    }


    return <fieldset className="birthday-picker">
        <select onChange={handleDate("m")} className="birth-month mr5" name="month" value={date.getMonth()} data-dateval={4}>
            <option value={1}>1월</option>
            <option value={2}>2월</option>
            <option value={3}>3월</option>
            <option value={4}>4월</option>
            <option value={5}>5월</option>
            <option value={6}>6월</option>
            <option value={7}>7월</option>
            <option value={8}>8월</option>
            <option value={9}>9월</option>
            <option value={10}>10월</option>
            <option value={11}>11월</option>
            <option value={12}>12월</option>
        </select>
        <select onChange={handleDate("d")} className="birth-day mr5" value={date.getDate()} >
            <option value={1}>1일</option>
            <option value={2}>2일</option>
            <option value={3}>3일</option>
            <option value={4}>4일</option>
            <option value={5}>5일</option>
            <option value={6}>6일</option>
            <option value={7}>7일</option>
            <option value={8}>8일</option>
            <option value={9}>9일</option>
            <option value={10}>10일</option>
            <option value={11}>11일</option>
            <option value={12}>12일</option>
            <option value={13}>13일</option>
            <option value={14}>14일</option>
            <option value={15}>15일</option>
            <option value={16}>16일</option>
            <option value={17}>17일</option>
            <option value={18}>18일</option>
            <option value={19}>19일</option>
            <option value={20}>20일</option>
            <option value={21}>21일</option>
            <option value={22}>22일</option>
            <option value={23}>23일</option>
            <option value={24}>24일</option>
            <option value={25}>25일</option>
            <option value={26}>26일</option>
            <option value={27}>27일</option>
            <option value={28}>28일</option>
            <option value={29}>29일</option>
            <option value={30}>30일</option>
            <option value={31}>31일</option>
        </select>
        <select onChange={handleDate("y")} className="birth-year" name="year" value={date.getFullYear()} data-dateval={1999}>
            <option value={2014}>2014년</option>
            <option value={2013}>2013년</option>
            <option value={2012}>2012년</option>
            <option value={2011}>2011년</option>
            <option value={2010}>2010년</option>
            <option value={2009}>2009년</option>
            <option value={2008}>2008년</option>
            <option value={2007}>2007년</option>
            <option value={2006}>2006년</option>
            <option value={2005}>2005년</option>
            <option value={2004}>2004년</option>
            <option value={2003}>2003년</option>
            <option value={2002}>2002년</option>
            <option value={2001}>2001년</option>
            <option value={2000}>2000년</option>
            <option value={1999}>1999년</option>
            <option value={1998}>1998년</option>
            <option value={1997}>1997년</option>
            <option value={1996}>1996년</option>
            <option value={1995}>1995년</option>
            <option value={1994}>1994년</option>
            <option value={1993}>1993년</option>
            <option value={1992}>1992년</option>
            <option value={1991}>1991년</option>
            <option value={1990}>1990년</option>
            <option value={1989}>1989년</option>
            <option value={1988}>1988년</option>
            <option value={1987}>1987년</option>
            <option value={1986}>1986년</option>
            <option value={1985}>1985년</option>
            <option value={1984}>1984년</option>
            <option value={1983}>1983년</option>
            <option value={1982}>1982년</option>
            <option value={1981}>1981년</option>
            <option value={1980}>1980년</option>
            <option value={1979}>1979년</option>
            <option value={1978}>1978년</option>
            <option value={1977}>1977년</option>
            <option value={1976}>1976년</option>
            <option value={1975}>1975년</option>
            <option value={1974}>1974년</option>
            <option value={1973}>1973년</option>
            <option value={1972}>1972년</option>
            <option value={1971}>1971년</option>
            <option value={1970}>1970년</option>
            <option value={1969}>1969년</option>
            <option value={1968}>1968년</option>
            <option value={1967}>1967년</option>
            <option value={1966}>1966년</option>
            <option value={1965}>1965년</option>
            <option value={1964}>1964년</option>
            <option value={1963}>1963년</option>
            <option value={1962}>1962년</option>
            <option value={1961}>1961년</option>
            <option value={1960}>1960년</option>
            <option value={1959}>1959년</option>
            <option value={1958}>1958년</option>
            <option value={1957}>1957년</option>
            <option value={1956}>1956년</option>
            <option value={1955}>1955년</option>
            <option value={1954}>1954년</option>
            <option value={1953}>1953년</option>
            <option value={1952}>1952년</option>
            <option value={1951}>1951년</option>
            <option value={1950}>1950년</option>
            <option value={1949}>1949년</option>
            <option value={1948}>1948년</option>
            <option value={1947}>1947년</option>
            <option value={1946}>1946년</option>
            <option value={1945}>1945년</option>
            <option value={1944}>1944년</option>
            <option value={1943}>1943년</option>
            <option value={1942}>1942년</option>
            <option value={1941}>1941년</option>
            <option value={1940}>1940년</option>
            <option value={1939}>1939년</option>
            <option value={1938}>1938년</option>
            <option value={1937}>1937년</option>
            <option value={1936}>1936년</option>
            <option value={1935}>1935년</option>
            <option value={1934}>1934년</option>
            <option value={1933}>1933년</option>
            <option value={1932}>1932년</option>
            <option value={1931}>1931년</option>
            <option value={1930}>1930년</option>
            <option value={1929}>1929년</option>
            <option value={1928}>1928년</option>
            <option value={1927}>1927년</option>
            <option value={1926}>1926년</option>
            <option value={1925}>1925년</option>
            <option value={1924}>1924년</option>
            <option value={1923}>1923년</option>
            <option value={1922}>1922년</option>
            <option value={1921}>1921년</option>
            <option value={1920}>1920년</option>
            <option value={1919}>1919년</option>
            <option value={1918}>1918년</option>
            <option value={1917}>1917년</option>
            <option value={1916}>1916년</option>
            <option value={1915}>1915년</option>
            <option value={1914}>1914년</option>
            <option value={1913}>1913년</option>
            <option value={1912}>1912년</option>
            <option value={1911}>1911년</option>
            <option value={1910}>1910년</option>
        </select>
        <input type="hidden" name="birthdate" id="birthdate" />
    </fieldset>
}
