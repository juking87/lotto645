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
    1.  0. 그릴 숫자가 담겨져 있는 객체와 그릴 장소에 있는 div id를 받아온다
        1. 해당 위치의 div를 잡는다
        2. div 안에 들어갈 ul을 만들기 위해 우선적으로 있진 않지만 가상의 ul에 id를 부여한다
        3. id를 부여한 ul을 구역으로 잡는다
        4. 우리의 그리는 함수는 작동이 될때 기존 화면에서 보인 내용을 다 지우고 새롭게 그리는 함수이기 때문에, 함수가 작동할 때 이미 만들어진
            ul이 존재하다면 지워준다
        5. ul을 새롭게 생성하고 위에 설정해둔 id값으로 id를 부여한다
        6. 





*/