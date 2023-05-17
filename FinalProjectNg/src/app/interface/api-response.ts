//INTRADAY

export interface Main {
    "Meta Data":          MetaData;
    "Time Series (5min)": { [key: string]: TimeSeries5Min };
}

export interface MetaData {
    "1. Information":    string;
    "2. Symbol":         string;
    "3. Last Refreshed": Date;
    "4. Interval":       string;
    "5. Output Size":    string;
    "6. Time Zone":      string;
}

export interface TimeSeries5Min {
    "1. open":   string;
    "2. high":   string;
    "3. low":    string;
    "4. close":  string;
    "5. volume": string;
}

//WEEKLY

export interface MainWeekly {
    "Meta Data": MetaDataWeekly;
    "Weekly Time Series": { [key: string]: WeeklyTimeSeries };
}

export interface MetaDataWeekly {
    "1. Information":    string;
    "2. Symbol":         string;
    "3. Last Refreshed": Date;
    "4. Time Zone":      string;
}
export interface WeeklyTimeSeries {
    "1. open":   string;
    "2. high":   string;
    "3. low":    string;
    "4. close":  string;
    "5. volume": string;
}

//BITCOIN

export interface Bitcoin {
    bitcoin: { [key: string]: number };
}

