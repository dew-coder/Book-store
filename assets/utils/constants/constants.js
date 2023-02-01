const inputTypeConstants = {
    NUMBER: "number",
    TEXT: "text",
    DATE: "date",
    BOOLEAN: "boolean"
}

function getInputObjectsArr() {

    // to access num,text,date,boolean i.e value of key it is also called destructuring
    const { NUMBER, TEXT, DATE, BOOLEAN } = inputTypeConstants;
    //  console.log(NUMBER)

    const inputObjectArr = [
        {
            id: 1,
            key: "ISBN",
            type: NUMBER
        },
        {
            id: 2,
            key: "Author Name",
            type: TEXT
        },
        {
            id: 3,
            key: "Book Name",
            type: TEXT
        },
        {
            id: 4,
            key: "Page Count",
            type: TEXT
        },
        {
            id: 5,
            key: "Price",
            type: NUMBER
        },
        {
            id: 6,
            key: "Discount",
            type: NUMBER
        },
        {
            id: 7,
            key: "Date of Publish",
            type: DATE
        },
        {
            id: 8,
            key: "In Stock",
            type: TEXT
        }
    ];

    return inputObjectArr;
}