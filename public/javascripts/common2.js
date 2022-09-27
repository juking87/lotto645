//1. 그리는 공용함수

function drawNumberList (arr, divId) {
    /*
    arr = [
        [1,2,3,4,5,6]
    ]
    arr = [
        [1,2,3,4,5,6],
        [1,2,3,6,8,19],
        ...
        [2,3,4,5,6,7]
    ]
    divId = 'winningNumbersDiv'
    */
    let $div = document.getElementById(divId);      //ex : <div id="winningNumbersDiv"></div>
    let ulId = divId + "_Ul";                       //ex : winningNumbersDiv_UL
    let $ul = document.getElementById(ulId);        //ex : <ul id="winningNumbersDiv_UL"></ul> or null
    //ul 이 존재하다면 지워준다
    if ($ul !== null) {
        $ul.remove();
    };
    //ul 을 생성
    $ul = document.createElement('ul');             //ex : <ul></ul>
    $ul.setAttribute('id', ulId);                   //ex : <ul id="winningNumbersDiv_UL"></ul>
    //배열의에서 1차배열 길이만큼 li 생성 후 배열의 2차배열 길이만큼 span을 생성 후 text값 넣어주고 알맞은 class 부여 후 해당 span을 li에 넣어줌
    //넣어준 li를 1차배열 길이만큼 ul에 넣어줌. loop을 완료한 ul을 div에 넣어줌
    
    for (i = 0; i < arr.length; i++) {              //ex: arr = [ [1,2,3], [3,4,5] ] / arr.length = 2
        let $addLi = document.createElement('li');      //ex: <li></li>
        for (j = 0; j < arr[i].length; j++) {       //ex: arr = [ [1,2,3], [3,4,5] ] / arr[0] = [1,2,3] / arr[0].length = 3
            let $addSpan = document.createElement('span');  //ex: <span></span>
            $addSpan.textContent = arr[i][j];               //ex: <span>arr[i][j]</span>
            if (arr[i][j] < 11) {                           
                $addSpan.classList.add('colorOrange');
            } else if (arr[i][j] < 21) {
                $addSpan.classList.add('colorBlue');
            } else if (arr[i][j] < 31) {
                $addSpan.classList.add('colorPink');
            } else if (arr[i][j] < 41) {
                $addSpan.classList.add('colorGrey');
            } else {
                $addSpan.classList.add('colorGreen');
            }
            $addLi.append($addSpan);                //ex: <li><span></span></li>
        };
        $ul.append($addLi);                             //ex: <ul><li><span></span></li></ul>
    };
    
    if(arr.length > 0){                               //빈 ul이 들어가면 화면이 움직이기 때문에 길이가 0일때는 div에 넣어주지 않는 조건문을 만듬
        $div.append($ul);                           //ex: <div><ul><li><span></span></li></ul></div> arr가 존재할때만 div에 ul을 넣어줘라
    };
}


//2. 배열을 지우고 다시 그리는 공용함수

function resetArrayAndDraw(arr,divId){              //arr랑 divId를 받아와서 
    arr.length = 0;                                 //arr의 길이를 0으로 하고, 이러면 arr의 길이를 0으로 한다는 말. 빈배열이 됨 
    arr.pop();                                      //위의 메소드만으로 배일이 비워지나 비워진걸 인식하지 못하니 인식할 수 있도록 pop이라는 메소드를 사용해 알려준다.push도 가능할듯
    drawNumberList(arr, divId);                     //배열을 비웠으니 빈 배열을 다시 그리도록 그리는 함수 작동 시킨다
}


//3. 배열을 검사하는 함수

function validateLottoNumbers(Arr,no){                              //배열과 넣을 숫자를 받아와 해당 숫자를 배열에 넣을지 말지 검사하는 함수
    let returnObj = {success:false};                                //기본값으로 returnOnj 변수 success:flase 라는 오브젝트를 할당한다
                                                                    //이 함수는 에러 발생 시 일련의 작업을 수행하게 하는 함수이므로
                                                                    //기본값을 false로 작성해 코드의 길이를 줄인다
    if (Arr.length > 5) {                                           //받아온 배열의 길이가 6개 이상일 때    
        returnObj.message= '6개 이하의 숫자 등록이 가능합니다.';      //returnObj에 message라는 key를 추가하고 이때 출력할 문자열을 value값으로 등록한다  
    } else if (isNaN(no) == true) {                                //받아온 no가 숫자가 아닌게 맞다면
        returnObj.message= '숫자를 등록해주세요.';                  //returnObj에 message라는 key를 추가하고 이때 출력할 문자열을 value값으로 등록한다 
    } else if (no < 1) {                                          //받아온 no가 숫자 1보다 작다면  
        returnObj.message= '1 이상의 숫자를 등록해주세요.';         //returnObj에 message라는 key를 추가하고 이때 출력할 문자열을 value값으로 등록한다 
    } else if (no > 45) {                                           //받아온 no가 숫자 45보다 크다면 
        returnObj.message= '45 이하의 숫자를 등록해주세요.';        //returnObj에 message라는 key를 추가하고 이때 출력할 문자열을 value값으로 등록한다 
    } else if (Arr.includes(no)) {                                //받아온 no가 이미 받아오면 배열안에 존재하다면  
        returnObj.message= '중복된 숫자입니다. 다른 숫자를 등록해주세요.';//returnObj에 message라는 key를 추가하고 이때 출력할 문자열을 value값으로 등록한다 
    } else {
        returnObj.success=true;                                   //위 조건들에 부합하지 않다면 returnOnj 안에있는 success key의 값을 false에서 true로 바꿔준다
    };
    return returnObj                                              //위 함수를 끝내면 알맞게 수정된 returnObj가 return 된다
};


//4. 금주 당첨번호 생성함수 
const winningNumbersArr = [];                       //당첨번호들을 저장할 배열


//arr=[[2,3,4,5,6]];
function selectingNumbers (arr, inputId, divId) {                               //당첨번호를 등록하는 함수
    const inputNumber = document.getElementById(inputId).value;     //inputNumber 라는 변수에 input창이 있는 곳의 id를 잡고 그곳에 적힌 숫자의 값을 할당한다
                                                    //추후에 다른 input에 적은 숫자를 가져와서 어떠한 배열에 등록할 수도 있기 때문에
                                                    //배열과 작성될 divId를 받아왔고, 
    const validateReturn = validateLottoNumbers(arr,inputNumber); //validateReturn 라는 변수에 당첨번호들이 저장되어있는 배열과 inputNumber를 보내
                                                                                //해당 inputNumber 가 해당 배열에 들어갈 수 있는지 여부를 판단한다

    if(validateReturn.success){                                     //배열 검사 후 sucess key값의 value가 true로 나온다면     
        arr.push(inputNumber);                            //선택한 배열에 inputNumber를 넣어주고
        arr.sort((a, b) => a-b);                          //배열안의 값들을 오름차순으로 정리한다
        drawNumberList([arr], divId)        //검사를 패스 했으니 그리는 함수에 그리고 싶은 배열과 위치를 보내준다. 
                                            //drawNumberList는 2차함수를 그리는 함수이니 1차함수를 생성하는 이 함수에서 []를 추가해 2차함수로 만들어주고
                                            //그리는 함수로 보낸다
    }
    else{
        alert(validateReturn.message);                                  //배열 검사 함수에서 success 의 값이 false로 나온다면 false된 위치에서 적용된
                                                                        //message값을 alert로 출력해서 보여준다
    }
}

//4.a 금주 당첨번호 리셋하는 버튼
document.getElementById('removeWinningNumbers').addEventListener('click', function(){   //금주 당첨번호 리셋 버튼의 아이디인 removeWinningNumbers을 정하고
                                                                                        //click하면 resetArrayAndDraw라는 함수를 작동하게 한다. 이 함수가 작동할때
    resetArrayAndDraw(winningNumbersArr,'winningNumbersDiv');                           //필요한 파라미터는 winningNumbersArr 배열과 div id가 winningNumbersDiv인 곳이다.
});

//4.b 금주 당첨번호 등록하는 버튼
document.getElementById('fixWinningNumbers').addEventListener('click', function(){
    selectingNumbers(winningNumbersArr, 'number_choice', 'winningNumbersDiv');
}); 


//5. 랜덤 번호 생성 함수
const randomNumbersArr = [];  //랜덤 생성번호들이 저장될 배열

function generateRandomNumbers (arr, divId) {                   //arr와 작성될 divId를 받아온다
    let newArr = [];                                            //새로운 배열을 생성하고

    for (i = 0; newArr.length < 6; i++) {                       //새로운 배열의 길이가 6개가 될때까지
        let randomNumbers = Math.floor(Math.random() * 45) + 1; //randomNumbers 변수에 1~45사이의 숫자가 랜덤하게 생성되는 메소드를 할당하고
                                                                //Math.floor 는 소숫점 이하를 날리고 정수만 남긴다
                                                                //Math.random은 0에서 ~ 1미만의 숫자를 생성한다. 그래서 곱하기 45를 해주면 0.xxxx에서부터 44.xxxx까지의 숫자가 생성된다
                                                                //소숫점 뒤를 날리고 정수 1을 더해주면 1~45까지의 숫자가 생성된다.
        if (newArr.includes(randomNumbers)) {                   //생성된 랜덤 숫자가 이미 newArr에 들어가 있다면 횟수를 한개 낮추고 루프를 다시 돌린다
            i--;
        } else {
            newArr.push(randomNumbers)                          //중복되지 않는다면 newArr배열에 해당 숫자를 넣어준다.
        }
    }
    newArr.sort((a, b) => a - b);                               //newArr를 오름차순으로 정리하고
    arr.push(newArr);                                           //원하는 arr에 newArr를 넣어준다.
    drawNumberList(arr, divId);                                 //원하는 arr를 원하는 divId값을 가진 곳에 그려준다.
}

//5.a 랜덤번호 생성하는 버튼
document.getElementById('makeNumbers').addEventListener('click', function (){
    generateRandomNumbers(randomNumbersArr, 'randomLottoNumbers');
});

//5.b 랜덤번호 리셋하는 버튼
document.getElementById('removeNumbers').addEventListener('click', function(){
    resetArrayAndDraw(randomNumbersArr, 'randomLottoNumbers');
});


//6. 배열을 복사하는 함수


// 1차 배열이나 배열안에 다른 오브젝트가 없을때 사용 할 수 있는 형태
    //a. Use built-in array methods
    //const array2 = array1.map(elem => elem);

    //b. Use Spread operator
    //const array2 = [...array1];

    //c. const array2 = [];
    //array1.forEach(elem => {
    //array2.push(elem)
    //});


//(1) Deep copy JSON.parse and JSON.stringify
//    copiedArr = JSON.parse(JSON.stringify(receivedArr));

//(2) copiedArr = (receivedArr) => [...receivedArr].map(row => [...row])
function deepCopy (arr) {
    let newArr = [...arr];   //spread operator를 사용해서 newArr에 arr에 담겨 있는 1차 배열 전부를 deep copy해서 보낸다.
                            //이때 배열안에 배열이 들어있는 경우라면 그 배열은 이 시점까지는 link개념으로 복사되어져 있다.
    newArr.forEach((row, rowIndex) => newArr[rowIndex] = [...row]);
    return newArr;          //근데 지금 test해보니까 1차배열을 넣으면 작동하지 않는다, 
}

//nested function을 만들어야 하고 object일때랑 null이 아닐경우레 작동하게 하고 아니면 리턴 받은거 그대로 뱉고(스트링 불린 숫자 등등 링크 안되는놈들만 나가게됨)
//if 절 사용해서 Array.isArray 일경우는 return Obj를 {} 이 아닌 []배열로 return 하게끔, 첨엔 let returnObj ={}이 있어야 하고







// 1. 랜덤 당첨 번호 등록 섹션


/*
// 1.1 번호 생성 후 조건문들을 통과 후 알맞는 배열에 넣어준다
const winningNumbersArr = [];

function validateLottoNumbers(Arr,no){
    if (Arr.length > 5) {
        return {
            success: false,
            message: '6개 이하의 숫자 등록이 가능합니다',
        }
    } else if (isNaN(no) == true) {
        
    } else if (no < 1) {
        
    } else if (no > 45) {
        
    } else if (winningNumbersArr.includes(no)) {
        
    }
}

function selectingWinningNumbers () {
    const inputNumber = document.getElementById('number_choice').value;
    const validateReturn = validateLottoNumbers(winningNumbersArr,inputNumber);
    if(validateReturn.success){
        winningNumbersArr.push(inputNumber);
        winningNumbersArr.sort((a, b) => a-b);
        drawWinningNumbers(winningNumbersArr, 'winningNumbersDiv')
    }
    else{
        alert(validateReturn.message);
    }
}


//1.2 생성된 번호를 그려준다

function drawWinningNumbers () {
    const $winningNumbers = document.getElementById('winningNumbersDiv')
    let $ulSection = document.getElementById('winningNumbersUl');

    if ($ulSection !== null) {
        $ulSection.remove();
    } 

    let addUl = document.createElement('ul');
    addUl.setAttribute('id', 'winningNumbersUl');

    for (i = 0; i < winningNumbersArr.length; i++) {
        let addSpan = document.createElement('span');
        addSpan.textContent = winningNumbersArr[i];
        let inputNumber2 = addSpan.textContent;

        if (inputNumber2 < 11) {
            addSpan.classList.add('colorOrange');
        } else if (inputNumber2 < 21) {
            addSpan.classList.add('colorBlue');
        } else if (inputNumber2 < 31) {
            addSpan.classList.add('colorPink');
        } else if (inputNumber2 < 41) {
            addSpan.classList.add('colorGrey');
        } else {
            addSpan.classList.add('colorGreen');
        }
        addUl.append(addSpan);
    }   
    $winningNumbers.append(addUl);
}


const $fixWinningNumbers = document.getElementById('fixWinningNumbers');
$fixWinningNumbers.addEventListener('click', selectingWinningNumbers);

function resetWinningNumbers () {
    while (winningNumbersArr.length > 0) {
        winningNumbersArr.pop();
    }
    drawWinningNumbers();
}

const $resetWinningNumbers = document.getElementById('removeWinningNumbers');
$resetWinningNumbers.addEventListener('click', resetWinningNumbers);

*/