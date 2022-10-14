/*
0. 배열
    0.1 배열에 필요한 정보
        a. 6개의 숫자가 담긴 번호 배열                 numbers_arr : [1,2,3,4,5,6];
        b. 배열을 지울 수 있는 버튼                    deleteKey : true or false;   
        c. 배열을 확인 해 당첨 여부를 알려주는 멘트     prize: '5등에 당첨되었습니다.'
        obj = [
            {
                numbers_arr: [1,2,3,4,5,6];
                deleteKey: true;
                prize:'0' 
            }
            {
                numbers_arr: [10,20,30,40,41,42];
                deleteKey: false;
                prize:'5' 
            }
        ]

        

1. 그리는 함수
    function drawArr (obj, divId) {  //arr = 그릴 배열이 들어있는 객체, divId = 그릴 장소가 담긴 div id
    }
    1.  Arr 관련 그리기
        0. 그릴 숫자가 담겨져 있는 객체와 그릴 장소에 있는 div id를 받아온다
        1. 해당 위치의 div를 잡는다
        2. div 안에 들어갈 ul을 만들기 위해 우선적으로 있진 않지만 가상의 ul에 id를 부여한다
        3. id를 부여한 ul을 구역으로 잡는다
        4. 우리의 그리는 함수는 작동이 될때 기존 화면에서 보인 내용을 다 지우고 새롭게 그리는 함수이기 때문에, 함수가 작동할 때 이미 만들어진
            ul이 존재하다면 지워준다
        5. ul을 새롭게 생성하고 위에 설정해둔 id값으로 id를 부여한다
        6. obj 안의 numbers_arr의 모든 값들을 loop을 돌린다. 
        7. obj의 길이만큼 돌릴때마다 li를 생성하고 obj[i]의 numbers_arr 안에 있는 각각의 숫자 값들의 범위에 따라 알맞는 class를 부여해서 span형태로 li에 담아준다
        8. span들이 담아진 li를 for loop이 한번 끝나기 전에 ul에 넣어준다.

    2.  deleteKey 추가하기
        0. deleteKey버튼을 span으로 만든다. 
        1. deleteKey가 포함된 mother, 즉 자신이 속해 있는 li 전체를 지우고 다시 그리는 기능을 넣어줘야 한다.
        2. deleteKey버튼이 담긴 span을 for loop 에서 li가 다 만들어진 뒤 append로 넣어준다
    
    3.  prize 멘트 추가하기
        0. 일단 기본적으로 obj 에 prize 는 넣지 않는다. 하지만 마지막 단계(로토 리스트를 구매하는)뒤에 당첨 확인 버튼을 누를때 당첨 번호 숫자에 따라
        1. 해당 obj에 prize를 넣어줄 예정. 그래서 그리는 함수에는 typeof 를 사용해 prize 항목이 존재하면 만들어진 li 뒤에 prize값이 들어간 span을 추가한다.
        2. 그래서 prize값이 있는 애들들은 그려주고 아닌애들은 그려주지 않는다.
*/

//(1) 그리는 공용 함수
function drawObj (obj, divId) {
    let $div = document.getElementById(divId);  //1.0 ~ 1.3까지의 내용
    let ulId = divId + '_Ul';
    let $ul = document.getElementById(ulId);
    
    if ($ul !== null) {
        $ul.remove;
    }
}