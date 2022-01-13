# 유지민 구현 관련 이슈

------

### 키워드가 여러개인 경우 처리 로직

#### 구조
- 여러개의 키워드를 script.js 파일의 KEYWORDS arr에 넣기 위해서는
    1. KEYWORDS 배열의 size를 popup.html에서 입력받은 키워드의 개수에 따라 counter만큼 동적할당 해주어야 하지 않을까라는 생각
    2. 2-1)keyExist 변수 역시 1차원 배열로 선언해 KEYWORDS의 각 인덱스 원소와 mapping
        - 2-2) KEYWORDS 배열 자체를 2차원으로 만들어 keyExist 여부를 한번에 저장하면 처리가 조금 더 간단해질 것으로 보여짐

#### 처리 로직
1. popup.html에 input tag etc... 사용해 키워드 입력받음
    - 어떻게 입력받을 예정인지??
2. 입력받은 키워드의 개수만큼 KEYWORDS 배열을 동적할당
3. KEYWORDS 값 넣음
4. 돌려서 해당 키워드 존재하는 문장 contents[]에 push()


### 버튼 구현