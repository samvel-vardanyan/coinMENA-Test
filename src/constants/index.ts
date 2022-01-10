export const SPEAKING_LANGUAGES = [
    {
        name: "Arabic",
        code: "ar",
    },
    {
        name: "Armenian",
        code: "am"
    },
    {
        name: "French",
        code: "fr",
    },
    {
        name: "Portuguese",
        code: "pt"
    },
    {
        name: "English",
        code: "en",
    },
];

export const PROG_LANGUAGES = [
    { name: "c++", code: "c++" },
    { name: "html", code: "html" },
    { name: "javascript", code: "javascript" },
    { name: "python", code: "python" },
    { name: "shell", code: "shell" },
    { name: "typescript", code: "typescript" },
    { name: "4d", code: "4d" },
    { name: "abap", code: "abap" },
    { name: "css", code: "css"}
];

export const DATE_RANGE = [
    {
        name: "today",
        code: "daily",
    },
    {
        name: "this week",
        code: "weekly",
    },
    {
        name: "this month",
        code: "monthly",
    },
];


interface IDateObjectKeys {
    [key: string]: string;
}

export const DATE_RANGE_OBJ:IDateObjectKeys = {
    daily: "today",
    weekly: "this week",
    monthly: 'this month',
}
