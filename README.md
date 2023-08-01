# Market Kurly App
### 천다연 개인 프로젝트
### 프로젝트 기간 : 2023.07.03 ~ 2023.07.05
### 디플로이한 주소 : https://cdayeon.github.io/Kurly-App
------
### react 설치
<img width="738" alt="스크린샷 2023-08-01 오후 3 31 10" src="https://github.com/cdayeon/Kurly-App/assets/119835857/6f2d640a-8e59-450a-ae49-78f5bd9e4007">

* vscode터미널에 **npx create-react-app 파일명** 을 입력하면 리액트가 설치된다.
* cd 파일명 을 입력해서 해당 파일의 경로로 이동한다.
* **npm start**를 입력하면 react가 실행된다.
------
### react에 tailwindcss 설치
<img width="762" alt="스크린샷 2023-08-01 오후 3 36 24" src="https://github.com/cdayeon/Kurly-App/assets/119835857/fdbe16fe-d6e7-4b22-b828-058b04077f53">

* 원래라면 react를 설치한 파일경로에서 npm install -D tailwindcss를 입력하면 tailwindcss가 설치된다.
* 그러나 필자는 계속해서 **npm audit / npm fund**라는 2개의 에러가 발생해서 설치가 되지 않았다.
* 이를 해결하기 위해 구글링한 결과, NSP의 데이터베이스를 이용해서 취약점을 점검해주는 기능이 추가되었기 때문에 해당 에러가 발생한다는 점을 발견했다.
* 따라서, tailwindcss를 설치할 때 **npm install -D tailwindcss --no-audit --no-fund**로 입력하면 에러없이 tailwindcss가 설치된다.
------
### tailwindcss 환경설정
<img width="762" alt="스크린샷 2023-08-01 오후 3 48 51" src="https://github.com/cdayeon/Kurly-App/assets/119835857/e9516a3c-ad1f-4065-8972-d0394612f38c">

* tailwindcss를 설치했다면, 터미널에서 **npc tailwindcss init**을 입력해 **tailwind.config.js** 파일을 생성해준다.

<img width="418" alt="스크린샷 2023-08-01 오후 3 51 33" src="https://github.com/cdayeon/Kurly-App/assets/119835857/0edbb53e-b82c-4610-9489-aed784301aad">

* **tailwind.config.js** 파일 내에 **"./src/**/*.{js,jsx,ts,tsx}"** 를 입력해준다.

<img width="277" alt="스크린샷 2023-08-01 오후 3 53 38" src="https://github.com/cdayeon/Kurly-App/assets/119835857/d4aa232f-137d-4a63-a66e-a4833f539a70">

* index.css 파일 내에서
* **@tailwind base;**
* **@tailwind components;**
* **@tailwind utilities;** 를 입력해주면 tailwindcss의 환경설정이 완료된다.
------
### 1. Home
![kurly_main](https://github.com/cdayeon/Kurly-App/assets/119835857/cd1172ca-31df-45b7-a373-14ea234c9261)

* header : 홈, 장바구니, 카테고리, 검색, 계정 페이지로 이동하도록 구현하였다.
* Home 내의 **컬리추천, 신상품, 베스트, 알뜰쇼핑, 특가/혜택**은 각각 마켓컬리의 해당 페이지로 이동하도록 링크를 연결하였다.
------
### 2. Category
![category1](https://github.com/cdayeon/Kurly-App/assets/119835857/164bea5c-631f-42ef-93cc-191f53efa53f) 
<br>
![category2](https://github.com/cdayeon/Kurly-App/assets/119835857/7205d9ee-9f69-4b42-88f1-551435d5f4fa)
<br>
![캡처1](https://github.com/cdayeon/Kurly-App/assets/119835857/63a3ee44-2d8b-49a9-818b-97791d150481)

* Category 내에는 6개의 **채소, 과일, 수산, 정육, 메인요리, 간편식, 양념list**를 만들었다.
* 각 list를 누르면 또 다른 세부적인 list들이 나타나도록 구현했다.

<br>

![캡처2](https://github.com/cdayeon/Kurly-App/assets/119835857/39c5687e-859f-4c45-8e2d-00d8928a158e)

* 최종적으로 마지막 list를 누르면 **장바구니 담기** 버튼이 나타나고, 버튼을 누르면 장바구니에 list가 담긴다.
------
### 3. 장바구니
```
export default function Menu() {

  const {menuId} = useParams();
 
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart") || "[]"))
  const [inCart, setInCart] = useState(false);

  // fetching data
  const menu = DATA.find(menu => menu.menuId == menuId);

  useEffect(() => {
    cart.forEach(item => {
      if(item === menuId) {
        setInCart(true)
      }
    })
  }, [])

  // 장바구니 담기 버튼을 누르면 실행될 함수
  function addToCart() {
    const updatedCart = [...cart, menu.name, menu.price]; // 장바구니에 담으면 메뉴이름, 가격이 보이도록 하였다.
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setInCart(true);
  }

  return(
    <>
      <h1 className="text-center font-bold text-xl pb-2 mt-3 bg-purple-900 text-white pt-1">Category</h1>
      <h1 className="mt-2 text-lg font-bold text-purple-900">
        {menu.name}
        <span> {menu.price}</span>
      </h1>
      <button className="text-sm mt-2 px-2 py-1 rounded-full bg-slate-100"
        onClick={addToCart} disabled={inCart}>
        장바구니 담기
      </button>
    </>
  )
```

![캡처4](https://github.com/cdayeon/Kurly-App/assets/119835857/f7eb441b-f762-43a2-8bd4-51933125eac6)
<br>
<img width="443" alt="스크린샷 2023-07-19 오후 11 45 47" src="https://github.com/cdayeon/Kurly-App/assets/119835857/0024302b-e66d-4780-8948-e88f207faba1">

* 장바구니에 아무것도 담겨있지 않으면 **장바구니가 비어있습니다** 라는 글이 보인다.
* 카테고리에서 **장바구니 담기** 버튼을 통해 음식을 담으면 장바구니에 음식의 이름과 가격이 나타난다.
------
### 4. 검색 & 마이페이지
<img width="443" alt="스크린샷 2023-07-19 오후 11 47 15" src="https://github.com/cdayeon/Kurly-App/assets/119835857/15f32258-6c4c-4679-9b7f-c9170c42b779">
<br>
<img width="443" alt="스크린샷 2023-07-19 오후 11 50 24" src="https://github.com/cdayeon/Kurly-App/assets/119835857/31ca87e8-8bdc-4844-883c-d704d0b73792">

* 검색 & 마이페이지는 마켓컬리 어플과 비슷하게 css를 구현해보았다.
------
### 회고
* 리액트 내에서 데이터를 입력해 사용했다보니, 카테고리에 데이터의 양이 적은 아쉬움이 있다.
* 리액트 내에서 데이터를 원활하게 다루는 것이 아직 부족하다.
* 카테고리와 장바구니에 이미지를 넣지 못한 점과 검색, 로그인 등 더 다양한 기능을 구현하지 못한 점이 아쉽다.
