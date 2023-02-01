const inputTagArr = getInputObjectsArr();
// let count = 0;
//map -> num of ele given same number of ele will be returned, we gave 8 objects and map returned value of all of them by calling callback function
const getTagArr = inputTagArr.map( (val, idx, arr) => {
    return getInputTag(val);
} );

//doc.getelebyid jiski id inputcontainer hai wo tag lakr mujhe dedo, html wala div larhe hai yaha
const inputContainerRef = document.getElementById("inputContainer");
//console.log(inputContainerRef)

//sare input tags chale gaye div me
for( let input of getTagArr ) {
    inputContainerRef.appendChild(input);
}


const tableContainerRef = document.getElementById("tableContainer");

//puri table ko is reference me appnd krdia
tableContainerRef.appendChild( getTableTag() );

function saveInputDataInTable() {

    //query selector is similar to getelementby
    //. -> class selector
    //# -> id selector
    //normal tag name likhdo to wo tag selector
    const tBody = document.querySelector(".bookTableBody");
    const tr = document.createElement("tr");

    for(let input of inputTagArr) {
        const { id } = input;
        // if(input){
        //     count++;
        // }
        // if(count<8){
        //     alert("Fill all details");
        // }
        const inputData = document.querySelector(`#${"input"+id}`);
        const value = inputData.value;

        const td = document.createElement("td");
        td.innerText = value;
        td.classList.add("td");

        tr.appendChild(td);
    }

    tBody.appendChild(tr);

    //upr sari value delete hojaengi side by side
    clearInputField();
}

const saveBtnRef = document.querySelector("#saveBtn");

saveBtnRef.addEventListener('click', saveInputDataInTable);

function clearInputField() {
    for(let input of inputTagArr) {
        
        const { id } = input;
        //kyuki hmari id iss format me save hai
        const inputData = document.querySelector(`#${"input"+id}`);
        inputData.value = "";
    }
}