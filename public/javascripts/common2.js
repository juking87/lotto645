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
        returnObj.message= '총 6개의 숫자를 등록해주세요.';      //returnObj에 message라는 key를 추가하고 이때 출력할 문자열을 value값으로 등록한다  
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

//5.c 랜덤번호 저장하는 버튼
document.getElementById('saveNumbers').addEventListener('click', function () {
    copyRandomToPurchasable(randomNumbersArr, purchasableLottoListArr, 'purchasableLottoList');
});

//5.c.(1) 랜덤번호 arr에서 구매가능한 arr로 옮기는 함수
const purchasableLottoListArr = [];                             //구매 가능한 숫자들을 가지고 있는 arr
function copyRandomToPurchasable (receivedArr, newArr, divId) { //구매 가능한 숫자들을 다른 arr에서 가져와서 새로 그리는 함수(가져올arr, 넣어줄arr, 그릴장소divId)
    for (let i = 0; i < receivedArr.length; i++) {              // 가져올arr들을 for loop 돌려서 넣어줄arr에 push한다. 이 방법은 링크 개념으로 들어간다. 서로의 배열이 연결되어 있다.
        newArr.push(receivedArr[i]);
    }
    drawNumberList (newArr, divId);                             //그리는 함수를 사용해서 새로 그려줌.
}



//6. 배열을 복사하는 함수

function copyObj (obj) {          
    /*
        1. copyObj 가 하는 일
            - obj를 받아서 그 obj를 복사한 copiedObj를 만들어준다. obj가 다차원이라도 link개념이 적용되지 않은 deep copy형식의 copiedObj가 생성된다. 
            obj가 다차원 객체여도 obj를 복사한 copiedObj는 obj안의 다차원 객체와 copiedObj의 다차원 객체는 서로를 link하지 않는 상태이다.  
            function copyObj (obj) {
                return       obj가 복사된 copyObj
            }
        
        2. obj로 받을 수 있는것들
            a. 객체
            b. 배열
            c. null
            d. 0차원(문자,숫자,불린,)
            - obj를 복사해서 copiedObj로 리턴할 때 obj와 copiedObj는 동일한 형태이다. ex: 객체 -> 객체, 배열 -> 배열, 0차원 -> 0차원

        3. 코딩 순서
            - 기본적으로 객체를 받아온다 가정하고, 리턴될 copiedObj도 객체({})로 설정
            - 함수안에 넣어주는 변수가 객체인지 확인
            - 객체 중에서 obj인지 배열인지 확인, 배열일 경우 배열 형태로 내밷어야 하기 때문에 복사될 장소를 배열([])로 바꿈
            - 객체(객체 or 배열)이 아닐경우 받아온 값을 그대로 리턴(0차원)

            3.a 객체나 배열일 경우
                - 객체나 배열일 경우 for loop을 돌림
                - 객체나 베열이나 0차원을 가지고 있는 obj의 모든 인덱스 번호 값들을 복사할 곳의 인덱스 값으로 할당해준다
                - 이때 어떠한 인덱스 값이 객체나 배열일 수 있기 때문에 해당 함수를 다시 돌게끔(다시 돌게끔해서 0차원 값을 리턴해 줄 수 있게끔)한다
            
            3.b 0차원일 경우
                - 함수에 들어오먄 if절을 통과한뒤(객체인지 배열인지 검사) 0차원이기 때문에 받은걸 다시 내뱉는다
*/

    let copiedObj = {}

    if (typeof obj === 'object' && obj !== null) {  
        if (Array.isArray(obj)) {
            copiedObj = [];
        }
    } else {
        return obj;
    }

    for (let key in obj) {
        copiedObj[key] = copyObj(obj[key]);
    }

    return copiedObj;
};


//7. 구매할 로또 번호 생성 및 구매

//7.a 구매할 로또 번호 구매    ---------- 이건 나중에 만든다
document.getElementById('purchaseNumbers').addEventListener('click', function () {

})

//7.b 구매할 로또 번호 리셋
document.getElementById('resetPurchasableNumbers').addEventListener('click', function () {
    resetArrayAndDraw(purchasableLottoListArr, 'purchasableLottoList')
})

//7.c 구매할 로또 번호 등록
document.getElementById('purchaseMyNumbers').addEventListener('click', function () {
    selectingMyNumbers(purchasableLottoListArr, 'purchasableLottoList');
})

//각각의 input 창에 원하는 숫자 등록
//등록한 숫자들을 하나의 배열에 저장
//저장된 배열을 purchasableLottoListArr 끝에 넣어준다 
//그려져 있던 배열을 다시 지워주고 새롭게 그린다 


function selectingMyNumbers (arr, divId) {       //그릴 arr와 divId를 받아온다                         
    const tempArr = [];                         //6개의 input창에 적혀있는 값을 임시로 받을 Arr
    const tempArr2 = [];                        //validate 함수를 통과했을 때 넣어줄 새로운 Arr

    tempArr.push(document.getElementById('number_choice1').value);      //input에 들어간 값들을 tempArr에 임시로 넣어둔다
    tempArr.push(document.getElementById('number_choice2').value);
    tempArr.push(document.getElementById('number_choice3').value);
    tempArr.push(document.getElementById('number_choice4').value);
    tempArr.push(document.getElementById('number_choice5').value);
    tempArr.push(document.getElementById('number_choice6').value);                                            
                
    

    for (i = 0; i < tempArr.length; i++) {      //tempArr에 들어있는 input값들의 갯수만큼 loop을 돌린다
        const validateReturn = validateLottoNumbers(tempArr2, tempArr[i]);  // 숫자들을 validate 해주는 함수를 통해 loop돌릴때마다 tempArr[i]의 숫자 값을 검사한다
                                                                            //tempArr2에 중복된 숫자가 들어가는것도 방지해줌                          
        if(validateReturn.success){                 //tempArr[i] 숫자가 validate 함수를 통과 한다면            
            tempArr2.push(tempArr[i]);              //새로운 임시배열인 tempArr2로 tempArr[i]를 넣어준다
            if (tempArr2.length == 6) {             //tempArr2에 들어간 숫자의 총 갯수가 6이 되면
                tempArr2.sort((a, b) => a-b);       //배열안의 숫자들을 오름차순으로 정리하고
                arr.push(tempArr2);                 //받아온 배열에 push로 총 6개의 숫자가 들어있는 tempArr2배열을 넣어준다
                drawNumberList(arr, divId)          //받아온 배열을 새로 그려주고(미리 작성된 그리기 함수에는 그릴곳에 무언가 있다면 먼저 없에주고 받아온 배열을 새로 그린다)
                break;                              //그리고 난뒤 또 loop을 돌면 안되기 때문에 여기서 break를 걸어준다
            }                          
        }
        else{                                       //tempArr[i]가 validate 함수를 통과하지 못한다면    
            alert(validateReturn.message);          //validate 함수에서 return 된 에러 메세지를 보여준다, 어디에서 걸렸는지는 validate함수를 보면 내용을 확인 할 수 있다
            break;                                  //한번이라도 에러가 잡힌다면 그 곳에서 break를 걸어줘서 더 이상 loop이 돌지 않도록 한다.
        }
    }
}

//-------------------------------------------------구매하면 purchasableLottoListArr를 카피 한뒤 당첨결과 확인 창에 그리는것 부터 짜야 함.



/*
랜덤번호 생성한거를 구매할 로또 번호 섹션으로 옮겨야 함.

1. 랜덤 번호 생성에서 리스트 저장을 누를 시, 구매할 로또 번호 창에 그림
    - 그리기 전에 randomNumbersArr에서 purchasableLottoList로 배열들이 복사되어야 함
    - purchasableLottoList div 안에 있는 모든걸 지우고
    - 복사된 purchasableLottoList 배열을 새로 그림
    - 그리고 이 창에도 본인이 선택 할 수 있는 6개 번호 삽입창이 있다
    - 6개의 숫자를 넣고 등록버튼을 누를 시 해당 6개의 번호가 구매할 로또 번호 리스트로 그려진다. 

*/


