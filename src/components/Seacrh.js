export default function Search() {
  return (
    <>
      <input 
        className="w-full h-10 bg-slate-100 mt-3 rounded-md relative text-sm" 
        placeholder="  검색어를 입력해주세요"
      />

      <div className="mt-3">
        <p className="text-sm text-purple-900 font-bold">최근 검색어</p>
        <div className="text-xs mt-4">
          <p className="border rounded-full inline px-2 py-1 border-slate-300">샤브샤브</p>
          <p className="border rounded-full inline px-2 py-1 border-slate-300 ml-2">푸주</p>
          <p className="border rounded-full inline px-2 py-1 border-slate-300 ml-2">닭가슴살 소시지</p>
          <p className="border rounded-full inline px-2 py-1 border-slate-300 ml-2">소시지</p>
        </div>
      </div>

      <div className="mt-10">
        <p className="text-sm text-purple-900 font-bold">추천 검색어</p>
        <div className="text-xs mt-4">
          <p className="bg-violet-100 rounded-full inline px-3 py-2 text-purple-900">상반기결산특가</p>
          <p className="bg-violet-100 rounded-full inline px-3 py-2 text-purple-900 ml-2">컬리온리</p>
          <p className="bg-violet-100 rounded-full inline px-3 py-2 text-purple-900 ml-2">복숭아</p>
          <p className="bg-violet-100 rounded-full inline px-3 py-2 text-purple-900 ml-2">옥수수</p>
        </div>
      </div>

      <div className="mt-10">
        <p className="text-sm text-purple-900 font-bold">급상승 검색어</p>
        <ul className="mt-3 text-sm">
          <li className="mb-1"><span className="text-purple-900 font-bold">1</span> 루메나</li>
          <li className="mb-1"><span className="text-purple-900 font-bold">2</span> 치폴레</li>
          <li className="mb-1"><span className="text-purple-900 font-bold">3</span> 라구</li>
          <li className="mb-1"><span className="text-purple-900 font-bold">4</span> 마스크팩</li>
          <li className="mb-1"><span className="text-purple-900 font-bold">5</span> 사과식초</li>
        </ul>
      </div>
    </>
  )
}