import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="w-20 mx-auto">
        <img src={process.env.PUBLIC_URL + '/kurlylogo2.jpg'} />
      </div>
      
      <nav className="h-10 justify-center flex mt-2 bg-purple-900">
        <ul className="list-none flex">
          <a href="#">
            <li className="mx-2 text-sm pt-2 text-white">컬리 추천</li>
          </a>
          <a href="https://www.kurly.com/collections/market-newproduct">
            <li  className="mx-2 text-sm pt-2 text-white">신상품</li>
          </a>
          <a href="https://www.kurly.com/collections/market-best">
            <li  className="mx-2 text-sm pt-2 text-white">베스트</li>
          </a>
          <a href="https://www.kurly.com/collections/market-time-sales">
            <li  className="mx-2 text-sm pt-2 text-white">알뜰쇼핑</li>
          </a>
          <a href="https://www.kurly.com/market-benefit">
            <li  className="mx-2 text-sm pt-2 text-white">특가/혜택</li>
          </a>
        </ul>
      </nav>

      <div className="mt-2 w-full">
        <img src={process.env.PUBLIC_URL + '/banner.png'} />
      </div>

      <p className="mt-6 text-sm font-bold">상반기 결산 일일특가</p>
      <p className="text-sm">24시간 한정 특가</p>
      <div className="w-full mt-2">
        <img className="" src={process.env.PUBLIC_URL + '/food1.png'}/>
      </div>
      <p className="text-gray-400 text-xs mt-1">국산 감자로 만든 옹심이가 쏙쏙</p>
      <p className="text-sm mt-1">[시골보쌈과 감자옹심이] 감자 옹심이 칼국수(2인분)</p>
      <p className="text-sm mt-1 font-bold">
        <span className="text-orange-600 mr-1">31%</span>
        7,245원
      </p>

      <div className="w-full mt-5">
        <img src={process.env.PUBLIC_URL + '/food2.png'} />
      </div>
      <p className="text-gray-400 text-xs mt-1">인기 부위만 푸짐하게 담은 치킨</p>
      <p className="text-sm mt-1">99치킨 콤보 (윙&봉)</p>
      <p className="text-sm mt-1 font-bold">
        <span className="text-orange-600 mr-1">28%</span>
        9,900원
      </p>
    </>
  )
};