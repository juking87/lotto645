/*
    금주 당첨 번호를 뽑기 위해 input 창에 숫자를 적는다. 
    input창에 등록한 문자에 대한 검사가 이루어진다
        0. thisWeekNumbers ul 안에 있는 span 갯수가 6개를 초과하나?
            yes: error메세지    no: 1번으로
        1. 작성한 글자가 숫자인가?
            yes: 2번으로    no: error메세지
        2. 숫자가 1~45사이의 정수인가?
            yes: 3번으로    no: error메세지
        3. 금주 당첨 번호에 적혀있는 숫자인가?
            yes: error메세지    no: 숫자를 등록
            3번 옵션을 실행할 때 loop을 돌려 확인한다. loop 밖에 체커 변수를 false로 만들고, loop을
            돌리다가 중복되는 숫자가 있다면 체커 변수를 true로 바꿔준다. loop 도는데 중복되는 숫자가 없으면
            해당 loop을 종료한다. loop을 끝낸뒤 체커 변수의 값에 따라 error메세지를 호출할지 숫자를 
            등록할지를 결정한다
        4. 등록하기로 결정이 되면 thisWeekNumbers ul에 span을 생성한다
        5. 생성된 span에 textContent를 넣는다
        6. 넣어진 숫자 범위에 따라서 알맞은 class를 부여한다.
        7. span 갯수가 6개가 되면 더 이상 등록할 수 없도록 만든다
<<<<<<< HEAD
*/
const $thisWeekNumbers = document.getElementById("thisWeekNumbers"); //thisWeekNumbers의 ul전체를 담은 변수
const finalArr = []; //중복으로 등록하려는 숫자를 확인 할 수 있도록 만들어놓은 빈 배열, selectingWinningNumbers함수가 끝나면(체크리스트를 다 통과한 뒤)
                    //usedArr에 넣어준다. 중복 확인은 usedArr에 들어있는 값과 현재 input에 등록된 값을 비교한다

function selectingWinningNumbers () { // input 창을 통해 6개의 숫자를 등록하는 함수이다

    let newArr = []; //input 창에 적힌 숫자를 임시로 넣어놓을 빈 배열이다
    newArr.push(document.getElementById("number_choice").value); //newArr에 input창에 적힌 값을 넣어준다

    let addSpan = document.createElement('span'); //빈 span을 생성한다
    addSpan.textContent = newArr;  //생성된 span의 text값을 newArr에 들어있는 값으로 할당해준다
    let inputNumber = addSpan.textContent; // span에 들어간 값을 inputNumber라는 변수에 할당한다. 간편하게 작업하기 위해서 할당

    if (inputNumber <= 10) {  // inputNumber의 값을 숫자 범위에 따라서 미리 만들어놓은 class를 부여한다
        addSpan.classList.add('colorOrange');
    } else if (inputNumber <= 20) {
        addSpan.classList.add('colorBlue');
    } else if (inputNumber <= 30) {
        addSpan.classList.add('colorPink');
    } else if (inputNumber <= 40) {
        addSpan.classList.add('colorGrey');
    } else {
        addSpan.classList.add('colorGreen');
    }
                            

    if ($thisWeekNumbers.childElementCount/*아니면 children.lenth*/ > 5) {  //thisWeekNumbers ul안의 element갯수가 7개 이상이면 alert
        alert('6개의 숫자까지 등록 가능합니다.');
        return false;  //webpage가 리셋되는 느낌임, 다른 방법을 강구해야 할듯?
    } else if (isNaN(inputNumber) == true ) {  //input창에 적은 글자가 숫자가 아니라면 alert
        alert('숫자만 적어주세요.');
        return false;
    } else if (inputNumber < 1) { //input창에 적은 숫자가 0보다 작다면 alert
        alert('1 에서 45 사이의 숫자를 적어주세요.');
        return false;
    } else if (inputNumber > 45) {  //input창에 적은 숫자가 46이상이라면 alert
        alert('1 에서 45 사이의 숫자를 적어주세요.');
        return false;
    } else if (finalArr.includes(inputNumber)) { //함수 밖에 임의로 만들어놓은 배열에 들어있는 값과 현재 inputNumber를 비교해서 중복되면 alert
        alert('중복된 숫자입니다. 다른 숫자를 등록해주세요');
        return false;
    } else {
        finalArr.push(inputNumber); // 중복되지 않는다면 함수밖 finalArr에 값을 넣어준다
    }

    //finalArr.sort((a, b) => a - b); 등록된 숫자들이 오름차순으로 배열이 되어서 보여졌으면 좋겠다. 어떻게 하는지 여쭤보자
    //thisWeekNumbers 안의 span 값들을 먼저 비교해서 순서를 바꿀 수 있을까? 한번 찾아보자
    $thisWeekNumbers.append(addSpan);
}    

const $fixNumbers = document.querySelector('#fixNumbers'); //등록버튼을 담은 변수
$fixNumbers.addEventListener('click', selectingWinningNumbers); // 등록버튼을 담은 변수에 click하면 selectingWinningNumbers 함수가 작동되도록 설정


//바꿔야 할것들  
//1. return false 대신 다른 방법이 필요할듯? 잘 모르겠음  
//2. 등록된 숫자들이 오름차순으로 보였으면 좋겠음
//3. 






//랜덤 번호 생성하는 자바스크립트

const lottoNumbers_result = document.querySelector('#lottoNumbers_result');

function gernateLottoNumbers () {   //lottoNumbers_result div에 새로운 li를 생성해서 중복되지 않는 6개의 숫자를 조건에 맞춰 스타일을 적용해주는 함수
    let newArr = [];  //생성된 로또 번호 넣을 배열 생성
    
    for (let i = 0; newArr.length < 6; i++) {  //for loop으로 랜덤번호를 6개까지 만들 수 있는 함수
        let numbers = Math.floor(Math.random() * 45) + 1; //1~45 사이의 숫자를 생성해서 numbers에 저장
        if (newArr.includes(numbers)) {   //newArr배열에 생성된 숫자가 이미 있다면
            i--;  // 해당루프를 넘어가지 않고 다시 돌리게 함
        } else {
            newArr.push(numbers);   //생성된 번호가 배열안에 없는 번호라면 넣어줘라
        }
    }

    /*while(newArr.length<6){
        let numbers = Math.floor(Math.random() * 45) + 1; //1~45 사이의 숫자를 생성해서 numbers에 저장
        if(!newArr.includes(numbers)){
            newArr.push(numbers);
        }
    }*/
    
    newArr.sort((a, b) => a - b); // newArr에 들어있는 숫자 6개를 오름차순으로 배열
    const addList = document.createElement('li');  //'li'를 추가하는 요소 생성

    //for(let i = 0;i<newArr.length;i++){newArr[i]}
    for (let value of newArr) {
        const addSpan = document.createElement('span'); 
        addSpan.textContent = value;
        if (value <= 10) {
            addSpan.classList.add('colorOrange');
        } else if (value <= 20) {
            addSpan.classList.add('colorBlue');
        } else if (value <= 30) {
            addSpan.classList.add('colorPink');
        } else if (value <= 40) {
            addSpan.classList.add('colorGrey');
        } else {
            addSpan.classList.add('colorGreen');
        }
        addList.append(addSpan);
    }                         
    

    //addList.textContent = newArr; // 'li'안의 택스트를 newArr 배열안에 있는 숫자로 표현
    lottoNumbers_result.append(addList); //lottoNumbers_result div 안 끝에 숫자가 텍스트로 적어진 'li'를 추가
    newArr = []; //배열을 다시 비워줌
};

function removeLottoNumbers () {  //윈도우 창에 불려온 로또 번호 전체를 없엔다
    document.getElementById('lottoNumbers_result').innerHTML = ""; //id가 lottoNumbers_result인 곳의 안쪽 html을 다 없엔다
};

const generate = document.querySelector('#makeNumbers');
generate.addEventListener('click', gernateLottoNumbers); // 로또 숫자 6자리 생성하는 이벤트를 부여한다

const reset = document.querySelector('#removeNumbers')
reset.addEventListener('click', removeLottoNumbers);  // 만들어진 숫자 6자리 전체 리스트를 없엔다


//