function getInputTag(obj){
    //ye obj object lega uski value,idx,arr sb lega 
    const { NUMBER, TEXT, DATE, BOOLEAN } = inputTypeConstants;
    const { type, key, id } = obj;

    //ek hi var me sb save krrhe h
    let inputEle = null;

    switch(type){
        case NUMBER:
        case TEXT:
        case DATE:
            //and create input tag
            inputEle = document.createElement("input");
            //type of input ele 
            inputEle.type = type//line 9 type;
            break;
        case BOOLEAN:
            break;
        default:
            //do something
    }

    //giving input tags in diff lines not in inline 
    //div -> block
    //input -> inline
    const inputDiv = document.createElement("div");
    //1,2,3,4,5 cant be id that's why
    inputEle.id = "input"+id;

    //label -> is we click isbn then also we can write 
    const inputLabel = document.createElement("label");
    inputLabel.innerText = key;
    //input tag focus after clicking on isbn
    inputLabel.htmlFor = "input"+id;
    //giving class to input label.. fayeda? for writing css
    inputLabel.classList.add("bookLabels");
    inputDiv.classList.add("flex");
    
    inputEle.classList.add("inputClass");
    inputDiv.classList.add("inputDivClass");

    inputDiv.appendChild(inputLabel);
    inputDiv.appendChild(inputEle);

    return inputDiv;
}

function getTableTag() {
    const table = document.createElement("table");
    table.id = "bookTable";

    const tHead = document.createElement("thead");
    const tBody = document.createElement("tbody");
    //for css
    tBody.classList.add("bookTableBody");
    
    const inputTagArr = getInputObjectsArr();
    const tHeadings = inputTagArr.map( (val, idx, arr) => {
        //th->table head
        const th = document.createElement("th");
        th.classList.add("th");
        //table data
        th.innerText = val.key;
        return th;
    } )

    tHead.append(...tHeadings);
    //css
    tHead.classList.add("thead");
    //append->multiple append
    //appendChild->purana(ek ko hi krskta h)
    table.appendChild(tHead);
    table.appendChild(tBody);

    return table;
}