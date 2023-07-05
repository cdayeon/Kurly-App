import { useState } from "react";
import { Link } from "react-router-dom";

const DATA = [
  { groupId: 1, name: "고구마, 감자, 당근", categoryName: "채소"},
  { groupId: 2, name: "시금치, 쌈채소, 나물", categoryName: "채소"},
  { groupId: 3, name: "오이, 호박, 고추", categoryName: "채소"},

  { groupId: 4, name: "국산과일", categoryName: "과일"},
  { groupId: 5, name: "수입과일", categoryName: "과일"},
  { groupId: 6, name: "냉동, 건과일", categoryName: "과일"},

  { groupId: 7, name: "생선류", categoryName: "수산"},
  { groupId: 8, name: "새우, 게", categoryName: "수산"},
  { groupId: 9, name: "조개류", categoryName: "수산"},

  { groupId: 10, name: "소고기", categoryName: "정육"},
  { groupId: 11, name: "돼지고기", categoryName: "정육"},
  { groupId: 12, name: "닭, 오리", categoryName: "정육"},

  { groupId: 13, name: "국, 탕, 찌개", categoryName: "메인요리"},
  { groupId: 14, name: "밀키트", categoryName: "메인요리"},
  { groupId: 15, name: "밑반찬", categoryName: "메인요리"},

  { groupId: 16, name: "샐러드", categoryName: "간편식"},
  { groupId: 17, name: "도시락", categoryName: "간편식"},
  { groupId: 18, name: "파스타", categoryName: "간편식"},

  { groupId: 19, name: "드레싱", categoryName: "양념"},
  { groupId: 20, name: "향신료", categoryName: "양념"},
  { groupId: 21, name: "오일", categoryName: "양념"}
]

const category = ["채소", "과일", "수산", "정육", "메인요리", "간편식", "양념"];

function FilterButton({ name, isPressed, setFilter }) {
  return (
    <button
      // ispressed는 효과 기능을 한다 , 눌렀을 때
      className={`mx-2 ${isPressed && "text-purple-900 font-bold"}`}
      onClick = {() => setFilter(name)}
    >
      {name}
    </button>
  )
}

export default function Category() {
  const [ filter, setFilter ] = useState(""); // useState를 빈 문자열로 하면
  // group.categoryName === filter 에 빈 문자열이 담겨 DATA.filter()메서드가 빈 배열을 반환
  const groupList = DATA.filter(group => group.categoryName === filter).map(group => (
      <li key={group.name}>
        <Link to={`/group/${group.groupId}`}>
          {/* group.name에 아무것도 담기지 않아서 첫 화면이 빈 화면으로 나타난다 */}
          {group.name} 
        </Link>
      </li>
  ))

  return (
    <>
      <h1 className="text-center font-bold text-xl pb-2 mt-3 bg-purple-900 text-white pt-1">Category</h1>

      <div className="h-10 justify-center flex mt-1">
        {category.map(name => (
          <FilterButton
            key={name}
            name={name}
            isPressed={filter === name}
            setFilter={setFilter}
          />
        ))}
      </div>
      <ul className="ml-2">
        <li>
          {groupList}
        </li>
      </ul>
    </>
  )
}
