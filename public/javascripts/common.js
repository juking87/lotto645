const lottoNumbers_result = document.querySelector('#lottoNumbers_result');
const generate = document.querySelector('#makeNumbers');
const reset = document.querySelector('#removeNumbers')

function gernateLottoNumbers () {   //lottoNumbers_result div에 새로운 li를 생성해서 중복되지 않는 6개의 숫자를 조건에 맞춰 스타일을 적용해주는 함수
    let newArr = [];  //생성된 로또 번호 넣을 배열 생성
    const addList = document.createElement('li');  //'li'를 추가하는 요소 생성
    
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
    addList.classList.add('lottoList'); //e

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

generate.addEventListener('click', gernateLottoNumbers); // 로또 숫자 6자리 생성하는 이벤트를 부여한다
reset.addEventListener('click', removeLottoNumbers);  // 만들어진 숫자 6자리 전체 리스트를 없엔다





