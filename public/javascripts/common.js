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

*/
//********************금주 당첨 번호 생성하는 자바스크립트************************

const $thisWeekNumbers = document.getElementById("thisWeekNumbers"); //thisWeekNumbers의 ul전체를 담은 변수
const finalArr = []; //중복으로 등록하려는 숫자를 확인 할 수 있도록 만들어놓은 빈 배열, selectingWinningNumbers함수가 끝나면(체크리스트를 다 통과한 뒤)
                    //finalArr에 넣어준다. 중복 확인은 finalArr에 들어있는 값과 현재 input에 등록된 값을 비교한다

function selectingWinningNumbers () { // input 창을 통해 6개의 숫자를 등록하는 함수이다

    let inputNumber = document.getElementById("number_choice").value; //input창에 적힌 값을 inputNumber 변수에 할당한다

    if ($thisWeekNumbers.childElementCount/*아니면 children.lenth*/ > 5) {  //thisWeekNumbers ul안의 element갯수가 7개 이상이면 alert
        alert('6개의 숫자까지 등록 가능합니다.');
        return false;  
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

    finalArr.sort((a, b) => a - b); //finalArr에 있는 값들을 오름차순으로 sorting한다
    //밑의 while문은 숫자들이 보여지기에 오름차순으로 보이게 하려 적힌 숫자들을 다 지우고 다시 작성해야 하는 방법으로 만들것이기에
    //이를 통해 리셋을 여기서 한번 해준다
    while ($thisWeekNumbers.getElementsByTagName('span').length > 0) {  //$thisWeekNumbers 안에 존재하는 span들의 길이가 0보다 클때        
        $thisWeekNumbers.getElementsByTagName('span')[0].remove(); //$thisWeekNumbers안에 있는 인덱스 0번째 span을 지운다, 
    }

    for (i = 0; i < finalArr.length; i++) { //finalArr안에 있는 값들의 갯수만큼 loop을 돌린다
        let addSpan = document.createElement('span'); //빈 span을 생성한다
        addSpan.textContent = finalArr[i]; //span안에 text를 finalArr[i]번째의 값을 넣어준다
        let finalArrNumber = addSpan.textContent; // finalArrNumber라는 변수에 text값이 들어간 span을 할당한다
        
        if (finalArrNumber <= 10) {  // inputNumber의 값을 숫자 범위에 따라서 미리 만들어놓은 class를 부여한다
            addSpan.classList.add('colorOrange');
        } else if (finalArrNumber <= 20) {
            addSpan.classList.add('colorBlue');
        } else if (finalArrNumber <= 30) {
            addSpan.classList.add('colorPink');
        } else if (finalArrNumber <= 40) {
            addSpan.classList.add('colorGrey');
        } else {
            addSpan.classList.add('colorGreen');
        }
        $thisWeekNumbers.append(addSpan); //loop를 돌때마다 새롭게 정렬된 값이 들어있는 span을 $thisWeekNumbers에 넣어준다
    }
}   

const $fixNumbers = document.getElementById('fixNumbers'); //등록버튼을 담은 변수
$fixNumbers.addEventListener('click', selectingWinningNumbers); // 등록버튼을 담은 변수에 click하면 selectingWinningNumbers 함수가 작동되도록 설정

function removeWinningNumbers () {  //금주당첨번호로 등록시킨 번호들을 리셋시키는 버튼
    while ($thisWeekNumbers.getElementsByTagName('span').length > 0) { //$thisWeekNumbers 안에 존재하는 span들의 길이가 0보다 클때               
        $thisWeekNumbers.getElementsByTagName('span')[0].remove();//$thisWeekNumbers안에 있는 인덱스 0번째 span을 지운다
    }
    while (finalArr.length > 0) { //finalArr 안의 숫자를 리셋해야 하기 때문에 finalArr안의 길이가 0보다 클때
        finalArr.pop(); //finalArr안에 있는 값을 지워라. 
    }
};

const $removeNumbers = document.getElementById('removeWinningNumbers'); //버튼 구역 잡는다
$removeNumbers.addEventListener('click', removeWinningNumbers); // 위 리셋 함수를 버튼에 적용한다.



//********************랜덤 번호 생성하는 자바스크립트************************

const $lottoNumbers_result = document.getElementById('randomLottoNumbers'); //randomLottoNumbers 를 id로 가지고 있는 div를 변수에 할당
let lottoNumbersArr = []; //6개의 로또 숫자 리스트를 배열로 집어넣을 빈 배열 설정

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

    newArr.sort((a, b) => a - b); // newArr에 들어있는 숫자 6개를 오름차순으로 배열

    lottoNumbersArr.push(newArr); // 랜덤번호 생성할 때마다 해당번호들 배열을 넣어줄 lottoNumbersArr에 생성된 6자리 숫자들이 있는 배열을 넣어준다

    drawGeneratedList();

    newArr = []; //배열을 다시 비워줌
};
function drawGeneratedList(){
    let divSection = document.getElementById('randomLottoNumbers'); //randomLottoNumbers라는 아이디를 가진 div구역을 설정해주는 변수를 만든다
    let ulSection = document.getElementById('lottoNumbersResult');
    if(ulSection!==null){
        ulSection.remove();
    }
    const addUl = document.createElement('ul'); //'ul'을 생성하는 메소드를 addUl에 할당한다
    addUl.setAttribute('id', 'lottoNumbersResult'); //생성된 'ul'에 lottoNumbersResult라는 id를 넣어준다

    for (i = 0; i < lottoNumbersArr.length; i++) { //lottoNumbersArr 배열에 존재하는 배열들의 갯수만큼 loop을 돌린다
        let addList = document.createElement('li');  //'li'를 생성한다
        for (j = 0; j < lottoNumbersArr[i].length; j++) { //lottoNumbersArr[i]째의 배열안에 들어있는 값의 갯수만큼 loop을 돌린다
            let addSpan = document.createElement('span'); //'span'을 생성한다
            addSpan.textContent = lottoNumbersArr[i][j]; //생성된 'span'에 lottoNumbersArr[i] 번째 배열에서 [j] 번째의 값을 텍스트로 넣어준다  
            if (lottoNumbersArr[i][j] <= 10) { // 텍스트로 넣어준 숫자의 크기에 따라 알맞은 class를 부여해준다
                addSpan.classList.add('colorOrange');
            } else if (lottoNumbersArr[i][j] <= 20) {
                addSpan.classList.add('colorBlue');
            } else if (lottoNumbersArr[i][j] <= 30) {
                addSpan.classList.add('colorPink');
            } else if (lottoNumbersArr[i][j] <= 40) {
                addSpan.classList.add('colorGrey');
            } else {
                addSpan.classList.add('colorGreen');
            }
            addList.append(addSpan); //작업이 끝난 'span'을 만들어둔 'li'의 끝에 넣어준다
        }
        let addDelete = document.createElement('span'); //위에 만든 로또번호 6자리를 지울 수 있게 하려고 추가 span을 만든다
        addDelete.classList.add('deleteIcon'); //해당 span에 deleteIcon이라는 클래스를 부여한다
        addDelete.setAttribute("dataxidx",i);
        addDelete.textContent = 'x'; // 해당 span에 'x' text를 넣어준다
        addList.append(addDelete); //해당 span을 위에 만들어진 addList 'li' 끝에 넣어준다
        addDelete.addEventListener('click', deleteLottoNumber); //addDelete에 (이곳에 이벤트 부여할 용으로 텍스트 'x'를 넣어놓음)

        addUl.prepend(addList); //이렇게 최종적으로 span들이 들어간 li를 'ul'에 넣어준다. lottoNumbersArr배열안에 있는 값의 갯수만큼 넣어줄 예정
    }
    divSection.append(addUl); //ul이 들어갈 divSection이라고 미리 설정해둔 div에 span들과 li들이 이미 다 들어간 ul을 넣어준다
}

function removeLottoNumbers () {  //윈도우 창에 불려온 로또 번호 전체를 없엔다
    //document.getElementById('randomLottoNumbers').innerHTML = ""; //id가 lottoNumbers_result인 곳의 안쪽 html을 다 없엔다
    while(lottoNumbersArr.length>0){
        lottoNumbersArr.pop();
    }
    drawGeneratedList();  
};

function deleteLottoNumber (event) { //만들어진 6개 로또숫자 리스트 마다에 해당 리스트를 지울 수 있도록 하는 'x'버튼의 기능이 담긴 함수
    
    //현재의 li 안에 있는 값들을 배열로 받아오고 이 배열과 lottoNumbersArr에 있는 배열들 중 같은 값을 가지고 있는게 있다면 index를 찾아서 그걸 지워라  
    lottoNumbersArr.splice(event.target.getAttribute("dataxidx"),1);
    drawGeneratedList();
    /*
    let newArr = [];
    let findDeleteKey = document.getElementsByClassName('deleteIcon');
    let parentDeleteKey = findDeleteKey[0].parentElement;
    for (i = 0; i < parentDeleteKey.children.length x 1; i++) {
        newArr.push(parentDeleteKey.children[i].innerHTML);   //newArr에 클릭한 곳의 숫자값들을 newArr에 넣는다.
    }

    for (i = 0; i < lottoNumbersArr.length; i++) {
        if (lottoNumbersArr[i].toLocaleString() == newArr) {
            lottoNumbersArr.splice([i], 1);
        }
    }
    */
    //let index = Array.from(event.target.parentElement.children).indexOf(this.target); // 이건 작동한다. 하지만 새롭게 만들어 보는중
    //lottoNumbersArr.splice(index, 1);

    //event.target.parentElement.remove(); //클릭되어지는 곳의('x'에 설정해둠) 부모엘레먼트('li')를 통으로 없엔다.

    //lottoNumbersArr에서도 지울 수 있는 방법 강구

    //1. 지우려 하는 6개 숫자가 적힌 배열을 lottoNumbersArr에 있는 배열들과 비교해서 똑같은 element를 삭제
    //2. 지우려 하는 6개 숫자가 적힌 배열의 index번호를 찾아서 lottoNumbersArr의 인덱스 번호와 같을테니 찾아서 삭제

    //2번을 하려고 시도 했음
    //근데 우연찮게 됐을까봐 콘솔에서 확인하려 다시 작성해봤는데 실행되지 않음
    //해본거


}


const generate = document.getElementById('makeNumbers');
generate.addEventListener('click', gernateLottoNumbers); // 로또 숫자 6자리 생성하는 이벤트를 부여한다

const reset = document.getElementById('removeNumbers');
reset.addEventListener('click', removeLottoNumbers);  // 만들어진 숫자 6자리 전체 리스트를 없엔다


/*
랜덤로또 번호를 생성할때 만들어진 6개의 숫자를 하나의 배열안에 넣어서 그 배열 자체를 lottoNumbersArr라는 배열에 배열형태로 넣어준다
랜덤번호가 배열 형태로 기록되고 그 배열을 lottoNumbersArr 배열에 집어넣어서 추후에 재활용 할 목적으로 만들었다.
*/

//리스트 저장 버튼을 눌렀을 때 로또 숫자들을 새롭게 보낼 div를 설정한다
const $purchasableList = document.getElementById('purchasableLottoList');

let purchasableArr = [];  

function purchasableLottoList () { //로또 번호들을 구매할 구역으로 옮기는 함수
     
    
    for (i = 0; i < lottoNumbersArr.length; i++) {
        purchasableArr.push(lottoNumbersArr[i]);
    }
    
    let ulSection = document.getElementById('purchasableLottoNumbers');
    if(ulSection!==null){
        ulSection.remove();
    }
    const addUl = document.createElement('ul'); //'ul'을 생성하는 메소드를 addUl에 할당한다
    addUl.setAttribute('id', 'purchasableLottoNumbers'); //생성된 'ul'에 lottoNumbersResult라는 id를 넣어준다
    for (i = 0; i < purchasableArr.length; i++) { //lottoNumbersArr에 있는 배열의 갯수 만큼

        let addList = document.createElement('li'); //'li'를 한개 생성하고

        for (j = 0; j < purchasableArr[i].length; j++) { //lottoNumbersArr에 있는 각 배열안에 있는 값의 갯수 만큼
            const addSpan = document.createElement('span'); //'span'을 한개 생성하고
            addSpan.textContent = purchasableArr[i][j]; //그 span안의 text값을 i번째 배열에서 j번째의 숫자를 할당하고
            if (purchasableArr[i][j] <= 10) { //숫자 크기의 범위에 따라 아래 class를 넣어준다
                addSpan.classList.add('colorOrange');
            } else if (purchasableArr[i][j] <= 20) {
                addSpan.classList.add('colorBlue');
            } else if (purchasableArr[i][j] <= 30) {
                addSpan.classList.add('colorPink');
            } else if (purchasableArr[i][j] <= 40) {
                addSpan.classList.add('colorGrey');
            } else {
                addSpan.classList.add('colorGreen');
            }
            addList.append(addSpan); //loop을 돌때마다 만들어진 하나의 span을 Li에 넣어준다
        }
        let addDelete = document.createElement('span'); //위에 만든 로또번호 6자리를 지울 수 있게 하려고 추가 span을 만든다
        addDelete.classList.add('deleteIcon'); //해당 span에 deleteIcon이라는 클래스를 부여한다
        addDelete.setAttribute("dataxidx2",i);
        addDelete.textContent = 'x'; // 해당 span에 'x' text를 넣어준다
        addList.append(addDelete); //해당 span을 위에 만들어진 addList 'li' 끝에 넣어준다
        addDelete.addEventListener('click', deleteLottoNumber2); //addDelete에 (이곳에 이벤트 부여할 용으로 텍스트 'x'를 넣어놓음)

        //이렇게 최종적으로 span들이 들어간 li를 'ul'에 넣어준다. lottoNumbersArr배열안에 있는 값의 갯수만큼 넣어줄 예정
        addUl.prepend(addList);
    }
        $purchasableList.append(addUl); //만들어진 li를 ul($purchasableList)에 넣어준다
}


const purchasable = document.getElementById('saveNumbers'); //리스트 저장버튼을 지정해준다
purchasable.addEventListener('click', purchasableLottoList); //리스트 저장 버튼에 임시 번호 생성창에 만들어놓은 로또 번호들을
                                                             //구매 예정창으로 옮겨주는 함수를 할당해준다           

function resetPurchasableLottoList () { //구매 할 로또 리스트를 리셋하는 함수
    document.getElementById('purchasableLottoNumbers').remove();
    purchasableArr = [];  //구매 할 로또 리스트들이 담겨져 있는 ul의 innerHTML을 비어준다
}

const resetPurchasableList = document.getElementById('resetPurchasableNumbers');  //리셋 버튼에 구매 할 로또 리스트를 리셋하는 함수를 할당한다
resetPurchasableList.addEventListener('click', resetPurchasableLottoList);


function deleteLottoNumber2 (event) { //만들어진 6개 로또숫자 리스트 마다에 해당 리스트를 지울 수 있도록 하는 'x'버튼의 기능이 담긴 함수
    purchasableArr.splice(event.target.getAttribute("dataxidx2"),1);

    let ulSection = document.getElementById('purchasableLottoNumbers');
    if(ulSection!==null){
        ulSection.remove();
    }
    const addUl = document.createElement('ul'); //'ul'을 생성하는 메소드를 addUl에 할당한다
    addUl.setAttribute('id', 'purchasableLottoNumbers'); //생성된 'ul'에 lottoNumbersResult라는 id를 넣어준다
    for (i = 0; i < purchasableArr.length; i++) { //lottoNumbersArr에 있는 배열의 갯수 만큼

        let addList = document.createElement('li'); //'li'를 한개 생성하고

        for (j = 0; j < purchasableArr[i].length; j++) { //lottoNumbersArr에 있는 각 배열안에 있는 값의 갯수 만큼
            const addSpan = document.createElement('span'); //'span'을 한개 생성하고
            addSpan.textContent = purchasableArr[i][j]; //그 span안의 text값을 i번째 배열에서 j번째의 숫자를 할당하고
            if (purchasableArr[i][j] <= 10) { //숫자 크기의 범위에 따라 아래 class를 넣어준다
                addSpan.classList.add('colorOrange');
            } else if (purchasableArr[i][j] <= 20) {
                addSpan.classList.add('colorBlue');
            } else if (purchasableArr[i][j] <= 30) {
                addSpan.classList.add('colorPink');
            } else if (purchasableArr[i][j] <= 40) {
                addSpan.classList.add('colorGrey');
            } else {
                addSpan.classList.add('colorGreen');
            }
            addList.append(addSpan); //loop을 돌때마다 만들어진 하나의 span을 Li에 넣어준다
        }
        let addDelete = document.createElement('span'); //위에 만든 로또번호 6자리를 지울 수 있게 하려고 추가 span을 만든다
        addDelete.classList.add('deleteIcon'); //해당 span에 deleteIcon이라는 클래스를 부여한다
        addDelete.setAttribute("dataxidx2",i);
        addDelete.textContent = 'x'; // 해당 span에 'x' text를 넣어준다
        addList.append(addDelete); //해당 span을 위에 만들어진 addList 'li' 끝에 넣어준다
        addDelete.addEventListener('click', deleteLottoNumber2); //addDelete에 (이곳에 이벤트 부여할 용으로 텍스트 'x'를 넣어놓음)

        //이렇게 최종적으로 span들이 들어간 li를 'ul'에 넣어준다. lottoNumbersArr배열안에 있는 값의 갯수만큼 넣어줄 예정
        addUl.prepend(addList);
    }
        $purchasableList.append(addUl);
}



//말도 안된다 걍 낼 다시 정신 차리고 재활용 함수 최대한 써서 만들자. 일단 어떻게든 완수해보고 다 뜯어 고친다



//************************************** 구매한 로또 번호들과 금주 당첨번호와 당첨 결과 확인 *************************************

const purchasedListArr = [];
const $purchasedList = document.getElementById('purchasedLottoList');

function purchaseList () {
    for (i = 0; i < purchasableArr.length; i++) {
        purchasedListArr.push(purchasableArr[i]);
    }

    
    let ulSection = document.getElementById('purchasedList');
    if(ulSection!==null){
        ulSection.remove();
    }
    const addUl = document.createElement('ul'); 
    addUl.setAttribute('id', 'purchasedList'); 
    for (i = 0; i < purchasedListArr.length; i++) { 

        let addList = document.createElement('li'); 

        for (j = 0; j < purchasedListArr[i].length; j++) { 
            const addSpan = document.createElement('span'); 
            addSpan.textContent = purchasedListArr[i][j]; 
            if (purchasedListArr[i][j] <= 10) {
                addSpan.classList.add('colorOrange');
            } else if (purchasedListArr[i][j] <= 20) {
                addSpan.classList.add('colorBlue');
            } else if (purchasedListArr[i][j] <= 30) {
                addSpan.classList.add('colorPink');
            } else if (purchasedListArr[i][j] <= 40) {
                addSpan.classList.add('colorGrey');
            } else {
                addSpan.classList.add('colorGreen');
            }
            addList.append(addSpan); 
        }
        
        addUl.prepend(addList);
    }
        $purchasedList.append(addUl);
}

const purchaseNumbers = document.getElementById('purchaseNumbers');
purchaseNumbers.addEventListener('click', purchaseList);


function resetPurchasedLottoNumber () { 
    document.getElementById('purchasedList').remove();
    while(purchasedListArr.length>0){
        purchasedListArr.pop();
    }
}

const resetPurchasedNumbers = document.getElementById('resetPurchasedNumbers');
resetPurchasedNumbers.addEventListener('click',resetPurchasedLottoNumber);


function checkWinningNumbers () {
    
}