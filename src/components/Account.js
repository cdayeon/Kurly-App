export default function Account() {
  return (
    <>
      <h1 className="text-center font-bold text-xl pb-2 mt-3 bg-purple-900 text-white pt-1">My Kurly</h1>
      <div className="ml-5 mt-5 h-10">
        <div className="border inline px-2 py-3 rounded text-purple-900 font-bold text-sm border-purple-800">일반</div>
        <p className="inline ml-3 font-bold">천다연님</p>
      </div>

      <div className="mt-2 flex">
        <p className="text-xs py-2 w-48 bg-slate-100 rounded-full text-center ">전체등급 보기</p>
        <p className="text-xs py-2 w-48 bg-slate-100 rounded-full text-center  ml-2">다음 달 예상등급 보기</p>
      </div>

      <hr className="w-full h-1 mt-2 bg-gray-200" />
      <img className="h-8 w-full object-cover" src={process.env.PUBLIC_URL + '/banner2.png'} alt="banner2" />
      <hr className="w-full h-1 mb-2 bg-gray-200" />

      <ul>
        <li className="w-full h-9 border-t border-b text-sm justify-between flex">
          <span className="mt-1.5">적립금</span>
          <img className="w-4 h-4 inline mt-2" src={process.env.PUBLIC_URL + '/right.png'} alt="right" />
        </li>
        <li className="w-full h-9 border-b text-sm justify-between flex">
          <span className="mt-1.5">쿠폰</span>
          <img className="w-4 h-4 inline mt-2" src={process.env.PUBLIC_URL + '/right.png'} alt="right" />
        </li>
        <li className="w-full h-9 border-b text-sm justify-between flex">
          <span className="mt-1.5">주문 내역</span>
          <img className="w-4 h-4 inline mt-2" src={process.env.PUBLIC_URL + '/right.png'} alt="right" />
        </li>
        <li className="w-full h-9 border-b text-sm justify-between flex">
          <span className="mt-1.5">선물 내역</span>
          <img className="w-4 h-4 inline mt-2" src={process.env.PUBLIC_URL + '/right.png'} alt="right" />
        </li>
        <li className="w-full h-9 border-b text-sm justify-between flex">
          <span className="mt-1.5">자주 사는 상품</span>
          <img className="w-4 h-4 inline mt-2" src={process.env.PUBLIC_URL + '/right.png'} alt="right" />
        </li>
        <li className="w-full h-9 border-b text-sm justify-between flex">
          <span className="mt-1.5">찜한 상품</span>
          <img className="w-4 h-4 inline mt-2" src={process.env.PUBLIC_URL + '/right.png'} alt="right" />
        </li>
        <li className="w-full h-8 text-sm justify-between flex">
          <span className="mt-1.5">상품 후기</span>
          <img className="w-4 h-4 inline mt-2" src={process.env.PUBLIC_URL + '/right.png'} alt="right" />
        </li>
      </ul>
      <hr className="w-full h-1 bg-gray-200 mb-1" />
      <div className="w-full h-7">
        <span className="text-sm">로그아웃</span>
      </div>
      <hr className="w-full h-1 bg-gray-200" />
    </>
  )
}