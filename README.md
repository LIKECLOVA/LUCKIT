# 🍀 취향을 잇다, LUCKIT
![top](https://user-images.githubusercontent.com/102042383/210462009-f4159ea6-b16e-4861-8ed4-cb85fa54ef57.png)




📄 진행 기간 : 2022. 12. 09 ~ 2023. 01. 04

📄 URL : https://cloverluckit.netlify.app/

📄 서비스 이용을 위한 테스트 계정

```
💌 ID: luckit@luckit.com
🔐 PASSWORD: luckit
```

<br><br>
  
## 프로젝트 소개

### 🍀 널 만난 건 행운이야!
*취향을 잇다,* **LUCKIT** 은 취미 메이트 매칭 플랫폼입니다.
<br><br>

### 💌 나와 취향이 맞는 취미 메이트를 구해요
매칭글 등록, 매칭 신청 기능을 통해 딱 맞는 럭킷 메이트 매칭이 가능합니다.

집꾸미기, 베이킹, 다이어리 꾸미기, 사진 촬영, 아이돌, 콘서트 메이트부터 <br>
가고 싶었던 국내 여행, 해외 여행 메이트까지 럭킷에서 쉽게 찾을 수 있어요.
<br><br>

### 📸 나의 일상을 실시간으로 공유해요
쉽고 간편하게 나의 일상을 공유하고, 내가 팔로잉하고 있는 유저들의 소식도 실시간으로 받아볼 수 있어요. <br>
또한, 서로의 게시글에 좋아요와 댓글을 달 수 있어 활발한 소통도 가능하답니다.
<br><br>

### 📍 럭킷 스팟 지도로 모임 장소 고민을 해결해요
어디서 만나지? 오프라인 만남 장소 고민은 이제 그만! <br>
럭킷이 엄선한 럭킷 스팟 50곳에서 럭킷 유저와 편하게 만나요. 
<br><br>

### 💬 유저들과 일대일 채팅이 가능해요
내 취향에 맞는 유저와 프라이빗하게 채팅을 주고 받을 수 있어요. <br>
연락처를 공유하지 않고도 안전하게 약속을 잡을 수 있습니다.
<br><br>


<br><br>

## 팀원 소개

|최유정|김성진|김현빈|박혜영|
|:---:|:---:|:---:|:---:|
|<img src = "https://user-images.githubusercontent.com/102042383/210314902-aa3a7ce0-5a19-4c72-bf70-4842ce1d3437.png" width="250" height="280">|<img src = "https://user-images.githubusercontent.com/102042383/210314898-90e66e9f-36e7-4fb6-b821-d60fda7089f8.png" width="250" height="280">|<img src = "https://user-images.githubusercontent.com/102042383/210314903-3a832f77-2d02-4512-b7a7-0dba4a96f978.png" width="250" height="280">|<img src = "https://user-images.githubusercontent.com/102042383/210314907-4117cd13-51d4-46ba-a570-31bb0e91cdc2.png" width="250" height="280">|
|**팀 리딩, Git, 디자인 리더** <br> 버전 관리, 디테일 끝판왕|**개발, 전역상태관리 리더** <br> 성능 최적화 끝판왕|**컴포넌트, 기록 문서화 리더** <br> 컴포넌트 관리 끝판왕|**코드 리뷰, 웹 접근성 리더** <br> 사용자 경험 개선 끝판왕|
|🔗[yuzomi](https://github.com/yuzomi)|🔗[seongjin77](https://github.com/seongjin77)|🔗[christianB053](https://github.com/christianB053)|🔗[bakhyeyeong](https://github.com/bakhyeyeong)|

<br><br>


### [목차]
[1. 기술 및 개발 환경](#기술-및-개발-환경) <br>
[2. 구현 기능](#구현-기능) <br>
[3. UI](#ui) <br>
[4. 폴더 구조](#폴더-구조) <br>
[5. 역할 분담](#역할-분담) <br>
[6. 트러블 슈팅](#트러블-슈팅) <br>
[7. 버전 계획](#버전-계획) <br>

<br><br>
## 기술 및 개발 환경 
### [기술]
🛠 FrontEnd: React, redux-toolkit, redux-thunk, Styled-components, Figma <br>
🛠 BackEnd: 제공된 API 사용
<br><br>

### [개발환경]
|개발환경|우리가 선택한 방식|
|:---:|---|
|브랜치전략|Git-flow|
|이슈 관리|Github-Issues|
|정적 코드 분석 도구|ESLint|
|Code Formatter|Prettier|
|협업 도구|GitHub Project: 진행사항 칸반보드로 관리 <br> Notion: 삽질노트, 회의록 기록 <br> Discord: 실시간 채팅 및 화면 공유를 통한 협업 <br> GitHub Discord Wehook 연동 <br>|

<br><br><br>

## 구현 기능

- 🔐 계정
  - 로그인 / 로그아웃
  - 회원가입
  - 회원 정보 수정
  - 유효성 검증
  - 토큰 검증

- 🔍 홈 피드
  - 캐러셀
  - 유저 검색
  - 마켓게시글 목록 조회
  - 럭킷 메이트 신청 / 취소
  - 마켓 게시글 등록 / 신고

- 🔍 sns 피드
  - 유저 검색
  - 팔로잉 유저 프로필 조회 
  - sns게시글 목록 조회
  - 무한 스크롤
  - 게시글 좋아요 등록 / 취소
  - sns게시글 등록 / 신고

- 🚩 럭킷스팟
  - 럭킷 만남장소 조회

- 👥 프로필
  - 팔로우 / 언팔로우
  - 포스트 등록 / 수정 / 삭제 / 신고
  - 럭킷 매칭 게시글 조회
  - SNS 게시글 조회 앨범뷰 / 리스트뷰
  - 럭킷 매칭 게시글 등록 / 수정 / 삭제
  - SNS 게시글 등록 / 수정 / 삭제

- 🍀 럭킷 매칭
  - 럭킷 매칭 게시글/ 등록 / 수정 / 삭제 / 신고
  - 이미지 파일 업로드 / 수정 / 미리보기
  - 유효성 평가
  - 럭킷 메이트 신청 / 취소

- 💌 SNS
  - sns 게시글 등록 / 수정 / 삭제 / 신고
  - 다중 이미지 파일 업로드 / 수정 / 미리보기
  - 포스트 앨범뷰 / 리스트뷰
  - 이미지 슬라이드
  - 좋아요
  - 좋아요 설정/ 취소

- 💬 댓글
  - 댓글 작성 / 삭제 / 신고
  - 댓글 시간 보기
  - 댓글 등록 시간 보기


<br><br>


## UI
|splash| 회원가입| 로그인 | 
|---|---|---|
|![스플래쉬](https://user-images.githubusercontent.com/102042383/210394343-e78fa09a-fafd-4ea3-8f88-60ede19e5664.gif)|![회원가입](https://user-images.githubusercontent.com/102042383/210399031-6104ea3e-95f9-47bd-a477-3e7263c71115.gif)|![로그인](https://user-images.githubusercontent.com/102042383/210374690-cef0e54e-af15-4ac1-9ab3-8b7f5db351a3.gif)|

|홈 화면| SNS 화면 | 럭킷 스팟 |
|---|---|---|
|![홈화면수정](https://user-images.githubusercontent.com/102042383/210402297-1f1e0da9-2463-4764-bb90-eda2d46a6128.gif)|![sns](https://user-images.githubusercontent.com/102042383/210383785-c5e13d95-9923-4b70-993d-8e4116a5c50e.gif)|![럭킷스팟](https://user-images.githubusercontent.com/102042383/210402198-5683068a-c18b-412f-afa9-1d3c6e804e78.gif)|

|채팅 페이지| 내 프로필 | 내 프로필 수정 |
|---|---|---|
|![채팅](https://user-images.githubusercontent.com/102042383/210389286-3a68daea-af30-467c-9747-3c0bbd506d89.gif)|![내 프로필](https://user-images.githubusercontent.com/102042383/210397886-b565fe76-3542-4f30-bf78-0a0e46ccd8b6.gif)|![프로필수정](https://user-images.githubusercontent.com/102042383/210383737-4a1eed33-4ced-40e1-a195-e108e41d258f.gif)|

|럭킷 매칭글 등록| 럭킷 매칭글 수정 | 럭킷 매칭글 삭제 |
|---|---|---|
|![상품등록](https://user-images.githubusercontent.com/102042383/210380945-d466077c-a371-4f9e-98cb-87b1982b4c4a.gif)|![상품수정 (1)](https://user-images.githubusercontent.com/102042383/210404979-7640fa0b-08a7-4d9d-b02a-92509a2593b3.gif)|![상품삭제](https://user-images.githubusercontent.com/102042383/210378198-a88a8602-3d56-4b19-b52b-c13b02bd506b.gif)|

|SNS 게시글 등록 | SNS 게시글 수정 | SNS 게시글 삭제 |
|---|---|---|
|![게시글작성](https://user-images.githubusercontent.com/102042383/210388739-e1b14107-3bbe-459c-86cd-6e7fb6603039.gif)|![게시글수정](https://user-images.githubusercontent.com/102042383/210389152-11703f74-4294-479a-a425-be39e11d6d60.gif)|![게시글삭제](https://user-images.githubusercontent.com/102042383/210379752-a4de877b-9e1d-4c61-8a3c-fdbb7b7fd234.gif)|

|검색 기능 | 유저 프로필 | 팔로우 기능 |
|---|---|---|
|![검색](https://user-images.githubusercontent.com/102042383/210383667-a09f081b-89f0-4130-a584-e3c91fdd3f83.gif)|![상대프로필](https://user-images.githubusercontent.com/102042383/210384890-0e84a299-c992-4ac8-9e1f-6e401a8ab3ef.gif)|![팔로우](https://user-images.githubusercontent.com/102042383/210388269-bad7d7e5-86b4-47ab-bd8b-3fd63f5f4a89.gif)|

| SNS 좋아요 기능 | SNS 댓글 기능 | 매칭 신청 화면 |
|---|---|---|
|![좋아요](https://user-images.githubusercontent.com/102042383/210388183-cae52162-0e4d-4912-802b-08861e46ec24.gif)|![댓글](https://user-images.githubusercontent.com/102042383/210388209-6b7b9654-8712-4057-bc1b-a628c3ab91f6.gif)|![매칭신청](https://user-images.githubusercontent.com/102042383/210390293-274398bf-c0e9-4372-8931-f4e72678611a.gif)|

| 로그아웃 | 에러 페이지 | 신고 기능 |
|---|---|---|
|![로그아웃](https://user-images.githubusercontent.com/102042383/210398666-f3d67f42-bf56-49a1-99de-99f77a771d03.gif)|![404](https://user-images.githubusercontent.com/102042383/210398443-e26697a7-ab83-489b-a8d5-e5f378620d57.gif)|![신고](https://user-images.githubusercontent.com/102042383/210388536-bad4b7c8-c68a-4242-96e6-2f1283f55197.gif)|

<br><br>

## 폴더 구조
```
assets : 이미지 파일 집합
components : 재사용 가능한 컴포넌트 집합
template : 페이지를 만들 수 있도록 컴포넌트/레이아웃 주입
pages : 유저가 보는 실제 콘텐츠
style : 공통 스타일드 컴포넌트, reset.css, 프로젝트 컬러 상수화
				
📦src
 ┣ 📂assets
 ┃ ┣ 📂icon
 ┣ 📂components
 ┃ ┣ 📂button
 ┃ ┣ 📂carousel
 ┃ ┣ 📂comment
 ┃ ┣ 📂follow
 ┃ ┣ 📂header
 ┃ ┣ 📂join
 ┃ ┣ 📂loading
 ┃ ┣ 📂login
 ┃ ┣ 📂mainpost
 ┃ ┣ 📂market-post
 ┃ ┣ 📂market-preview-post
 ┃ ┣ 📂modal
 ┃ ┣ 📂navbar
 ┃ ┣ 📂profile-box
 ┃ ┣ 📂sns-post
 ┃ ┣ 📂splash
 ┣ 📂pages
 ┃ ┣ 📂404-error
 ┃ ┣ 📂chat
 ┃ ┣ 📂follow
 ┃ ┣ 📂home
 ┃ ┣ 📂map
 ┃ ┣ 📂market
 ┃ ┣ 📂profile
 ┃ ┣ 📂search
 ┃ ┣ 📂sns
 ┃ ┣ 📂start
 ┃ ┗ 📜pages.jsx
 ┣ 📂reducers
 ┣ 📂styles
 ┃ ┗ 📂global
 ┣ 📜App.js
 ┣ 📜Route.js
 ┣ 📜index.js
 ┗ 📜store.js
```


<br><br>

## 역할 분담
### 공통 담당
- 폴더 및 파일 생성
- Button 컴포넌트화
- 깃허브 이슈 관리 및 코드리뷰

### 최유정
- 프로젝트 기획 및 전체 디자인 총괄
- Github 리드미, Issue & PR 템플릿, Git-branch 사용 가이드 라인 제공, Project Board 관리
- splash 페이지 
- 로그인 기능
- 회원가입 유효성 검사 및 기능
- 404 페이지
- 럭킷 매칭 게시글 등록, 수정, 삭제 기능
- 홈 페이지 럭킷 메이트 신청 모달창 UI
- 채팅리스트 페이지 UI & 채팅룸 페이지 UI
- 프로젝트 리팩토링 버전 관리 


### 김성진
- 전반적인 프로젝트 개발 총괄 및 피드백 제공
- Redux-toolkit 및 Redux-thunk를 이용한 전역 상태 관리
- 프로필 설정, 프로필 수정 기능 구현
- 팔로우 & 언팔로우 기능
- 로그인 토큰 인증에 따른 페이지 라우팅 처리
- 로딩 페이지
- 카카오 맵 API 사용 지도 기능
- 성능 최적화
- 프로젝트 배포 (netlify)

### 김현빈
- 재사용성 높은 부분 컴포넌트 설계 및 관리 총괄
- 홈 페이지 및 마켓 게시글 렌더링, 럭킷 메이트 신청 기능, 상단 캐러셀
- 검색 페이지 기능 구현
- 하단 네비게이션 바, 상단 바(헤더) 컴포넌트, 모달 창, 로그아웃 기능
- My & User 프로필 페이지 구현 및 게시글 렌더링
- 마켓 게시글 리스트 페이지 구현 및 게시글 렌더링
- 회의록 작성 및 팀 내 기록 문서화

### 박혜영
- 사용자 경험 개선을 위한 웹접근성 가이드 제공 및 총괄
- react-helmet-async를 이용한 SEO 최적화
- SNS피드 페이지 구현 및 팔로워 게시글 및 프로필 랜더링
- SNS게시글 상세 페이지 구현
- 게시글 랜더링, 등록, 수정, 삭제, 기능
- 댓글 생성 및 삭제 기능
- 좋아요 / 좋아요 취소 기능

<br><br>
<br>

## 트러블 슈팅
### 1. 회원가입 구현시 문제해결
회원가입 기능 구현시 이메일과 패스워드를 입력하는 페이지, 프로필 설정을 하는 페이지를 구분해 놓았는데 api명세상 아이디,패스워드 페이지에서 이메일과 패스워드 값을 받아와 프로필 설정 페이지에서 값을 합쳐 서버에 보내야 했습니다.

<img src="https://velog.velcdn.com/images/jinss77/post/019b2628-8064-488d-9e1b-fa04c018c94a/image.jpg" width="70%" aling="left">

일반적인 방법으로는 자식 컴포넌트가 아닌 값들을 다른 컴포넌트에 가지고 갈 수 없었습니다. 리덕스로 회원가입시 필요 데이터를 관리할까 생각했지만 코드량이 많아지는 부분을 고려하여 좀 더 간단한 방법이 없는지 고민하였습니다.
### 해결방법
useNavigate을 이용하여 페이지 이동시 두번째 인자로 state값을 같이 가지고 갈 수 있었습니다.

1. navigate() 함수의 첫번째 인자에 이동할 경로, 두번째 인자의 state 속성에 파라미터를 넣어준다.
2. 이동한 페이지에서 useLocation을 사용해 locaiton.state 로 전달 받은 파라미터를 취득할 수 있다.

![](https://velog.velcdn.com/images/jinss77/post/728c00c8-e38d-404a-9d1c-1ed8fb4e78e5/image.png)
![](https://velog.velcdn.com/images/jinss77/post/8c728d26-d0d9-433a-ac42-03c27e9e099d/image.png)

이렇게 전달받은 state값들을 useLocation으로 꺼내 현 페이지의 닉네임, 계정아이디 state값들과 함께 서버에 보내주었습니다.

<br><br>

### 2.홈페이지 재렌더링 문제해결
내가 팔로잉 한 사람들의 상품 목록들만 불러와서 홈페이지에 뿌려주는 것이 구현 목표였습니다. 하지만 제공된 api에는 그런 기능이 없었습니다. 때문에 제공된 api 기능중에 내가 팔로잉 한 사람들의 목록을 가져오기와 해당계정의 상품 리스트 가져오기의 기능을 혼합해서 구현하였습니다.
```js
// followimgData는 api로 불러온 내가 팔로잉 하고 있는 유저 계정 리스트
// 예 ) [ 철수, 미나, 민우, 유리, 민수 ]

const [productData, setProductData] = useState([]);

useEffect(() => {
     followingData.forEach((list) => {
       axios({
         method: 'get',
         url: `https:~~~/product/${list.accountname}`,
         headers: {
           Authorization: `Bearer ${token}`,
           'Content-type': 'application/json',
         },
       }).then((res) => {
         for (const product of res.data.product) {
           setProductData((v) => {
            return [...v, product]
           });
         }
       });
     });
   }, []);

// MarketPostBox에 props로 data를 전달해 피드에 뿌려주기
productData.map((data) => <MarketPostBox key={data.id} data={data}/> );

```
문제없이 잘 작동하지만 내가 팔로잉한 계정들을 순회하면서 가져온 상품 목록들을 가져와 useState값에 넣어줄때마다 재렌더링이 일어났습니다. 예를들어 내가 현재 100명을 팔로잉하고 있다면 100명의 상품들을 useState값에 넣어줄때마다 state값이 변해 100번의 재렌더링이 일어났습니다.
### 해결방안
useState값에 상품들을 모아놨다가 한 번에 전달하는 방법을 고민 하였습니다. 그렇게 된다면 렌더링이 한 번 일어날 것이고 불필요한 재렌더링을 많이 줄여 효율적이라고 생각하였습니다.
해결방안으로는 Promise.all을 사용했습니다. Promise.all은 복수의 URL에 동시에 요청을 보내고 모두 완료된 후에 한번에 처리할때 사용. 즉 여러개의 비동기 처리를 병렬적으로 할 수 있습니다.
```js
const ProductList = async () => {

  const followProductList = await followingData.map((list) => {

   return axios({
      method: 'get',
      url: `https:~~~/product/${list.accountname}`,
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    }).then(res => res.data.product)

  })
 
  return Promise.all(followProductList)
};
```
Promise.all을 사용하기 위해 async 함수로 따로 빼주었고 모든 팔로잉 유저의 상품을 불러오고 나서 값을 반환되게 하였습니다.
> async 함수 Return 값
<img src="https://velog.velcdn.com/images/jinss77/post/f612ab74-0f1e-4e26-8e46-4d6ac690f852/image.png" width="50%" >

각각의 2차원 배열들을 useState값에 병합하여 넣어주기 위해 flat() 함수 사용.

> 해당결과

![](https://velog.velcdn.com/images/jinss77/post/29288757-2d11-4dc4-a8de-1f56e46ffc65/image.png)

병합한 상품목록들을 useState에 넣어주면 한 번만 렌더링이 일어나게 됩니다.
```js
useEffect(()=>{
   ProductList().then(res => setProductData( res.flat(1) ))

  },[])

```


<br><br>


### 3. onScroll 이벤트 적용과 관련한 재렌더링 문제 해결
일정 길이의 스크롤이 내려가면(scrollTop값이 300 이상일 때) Header 스타일의 변경을 주기 위해 홈페이지 컴포넌트에 onScroll event를 적용하였습니다. 
그러나 스크롤을 움직일 때마다 재렌더링 되는 이슈가 발생했습니다.
![온스크롤이슈3-min](https://user-images.githubusercontent.com/83122749/210471276-23b44a5a-5810-4587-8da1-1dfffbea0739.gif)
<br>

### 내가 생각한 오류 원인
scrollTop 값 자체를 state 값으로 지정했기 때문에 스크롤을 움직일 때마다, 즉 scrollTop 값이 변할 때마다 재렌더링이 되는 것이라 생각했습니다.
![트러블슈팅코드1](https://user-images.githubusercontent.com/83122749/210471950-7cdd7a00-ed94-4cd5-8b1e-bd4b6db3b605.png)
![트러블슈팅코드2](https://user-images.githubusercontent.com/83122749/210471960-37b83ff0-0f4d-49bb-a6fa-b44e052e7d60.png)
<br>

### 해결 방법
scrollTop 값 자체를 state로 지정하지 않고, scrollTop 값이 300 이상일 때 true, 300 미만일 때 false 값을 지정하여 재렌더링 되는 횟수를 대폭 줄임으로 해결하였습니다.
![트러블슈팅해결1](https://user-images.githubusercontent.com/83122749/210471601-948f12f6-a503-43a9-b68a-9e56137318d9.png)
![트러블슈팅해결2](https://user-images.githubusercontent.com/83122749/210471611-5959a661-775b-4b4d-b289-3d749beb92ee.png)
<br>

그 결과 스크롤을 움직일 때마다 재렌더링 되지 않고, scrollTop 300 값을 기준으로 재렌더링 되었습니다.
![온스크롤이슈해결3-min](https://user-images.githubusercontent.com/83122749/210472021-054026ee-8615-4be2-895a-d7e6ee34c84b.gif)

<br><br>

## 버전 계획
### 럭킷 v1.1 (2023년 1월 18일 예정)

- 사용자 경험 개선
  - SNS 피드 이미지 여러장일 때 캐러셀로 처리

- 재사용성 고려
  - 재사용되는 컴포넌트, API를 한 곳에 분류해 추후 변경될 경우 수정에 용이하도록 할 예정

<br><br>
[![TOP](https://user-images.githubusercontent.com/102042383/210679860-c559fe5c-0bf9-42f0-af91-6b50ac25f02e.png)](#top)
