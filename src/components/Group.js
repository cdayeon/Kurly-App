import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const DATA = [
  {
    groupId: 1, name: "고구마, 감자, 당근", menu: [
      {menuId: 1, name: "감자 1kg", price: "4,190원"},
      {menuId: 2, name: "호박고구마 800g", price: "5,990원"},
      {menuId: 3, name: "흙당근 1kg", price: "3,990원"},
    ]
  },
  {
    groupId: 2, name: "시금치, 쌈채소, 나물", menu: [
      {menuId: 4, name: "알배기 배추 1봉", price: "3,290원"},
      {menuId: 5, name: "경기 시금치 250g", price: "3,290원"},
      {menuId: 6, name: "데친 나물 9종", price: "2,690원~"},
    ]
  },
  {
    groupId: 3, name: "오이, 호박, 고추", menu: [
      {menuId: 7, name: "다다기오이 3입", price: "2,690원"},
      {menuId: 8, name: "애호박 1개", price: "1,490원"},
      {menuId: 9, name: "청양고추 200g", price: "2,990원"},
    ]
  },
  {
    groupId: 4, name: "국산과일", menu: [
      {menuId: 10, name: "유명산지 고당도사과 1.5kg (5~6입)", price: "17,900원"},
      {menuId: 11, name: "[귤로장생] 제주 하우스 감귤 1kg", price: "11,900원"},
      {menuId: 12, name: "조각 수박 850g", price: "13,900원"},
    ]
  },
  {
    groupId: 5, name: "수입과일", menu: [
      {menuId: 13, name: "뉴질랜드 골드키위 1.1kg (7~10입)", price: "12,900원"},
      {menuId: 14, name: "미국산 워싱턴 생체리 500g", price: "9,900원"},
      {menuId: 15, name: "페루산 아보카도 (1개)", price: "1,570원"},
    ]
  },
  {
    groupId: 6, name: "냉동, 건과일", menu: [
      {menuId: 16, name: "냉동 블루베리 1kg (칠레산)", price: "10,800원"},
      {menuId: 17, name: "상주 곶감 또개 200g", price: "6,900원"},
      {menuId: 18, name: "냉동 딸기 1kg (국산)", price: "7,950원"},
    ]
  },
  {
    groupId: 7, name: "생선류", menu: [
      {menuId: 19, name: "[모현상회] 자연산 광어 스테이크 150g (냉동)", price: "8,600원"},
      {menuId: 20, name: "참다랑어 모듬회 150g (냉동)", price: "19,900원"},
      {menuId: 21, name: "[아라찬] 수제 동태살 300g (냉동)", price: "6,400원"},
    ]
  },
  {
    groupId: 8, name: "새우, 게", menu: [
      {menuId: 22, name: "곱게다진 새우살 120g", price: "11,900원"},
      {menuId: 23, name: "국산 꽃게 다짐살 120g", price: "13,900원"},
      {menuId: 24, name: "[만선] 자연산 대하 500g (8-9미) (냉동)", price: "17,900원"},
    ]
  },
  {
    groupId: 9, name: "조개류", menu: [
      {menuId: 25, name: "[삼삼물산] 자연산 보라 성게알 100g", price: "26,910원"},
      {menuId: 26, name: "[어보선] 껍질벗긴 오징어링 250g", price: "7,980원"},
      {menuId: 27, name: "[동해가문] 증숙한 피문어 350g", price: "27,900원"},
    ]
  },
  {
    groupId: 10, name: "소고기", menu: [
      {menuId: 28, name: "[1등급 한우] 안심 스테이크 200g (냉장)", price: "29,100원"},
      {menuId: 29, name: "[일상미소] 채끝 250g (냉장)", price: "13,982원"},
      {menuId: 30, name: "[이목] 무항생제 소고기 등심 구이용 200g (냉장)", price: "11,475원"},
    ]
  },
  {
    groupId: 11, name: "돼지고기", menu: [
      {menuId: 31, name: "한돈 목살 구이용 1kg (냉장)", price: "26,900원"},
      {menuId: 32, name: "한돈 삼겹살 구이용 1kg (냉장)", price: "25,110원"},
      {menuId: 33, name: "한돈 마라 불고기 (소스증정)", price: "6,210원"},
    ]
  },
  {
    groupId: 12, name: "닭, 오리", menu: [
      {menuId: 34, name: "훈제오리 150g*2pk", price: "7,990원"},
      {menuId: 35, name: "1등급 닭 다리 1kg (냉장)", price: "11,990원"},
      {menuId: 36, name: "[자연실록] 무항생제 두마리 통닭 (550g*2입)", price: "10,900원"},
    ]
  },
  {
    groupId: 13, name: "국, 탕, 찌개", menu: [
      {menuId: 37, name: "[강남면옥] 갈비탕", price: "11,900원"},
      {menuId: 38, name: "[바른식] 강릉식 짬뽕순두부찌개", price: "8,900원"},
      {menuId: 39, name: "[삼진어묵] 김치 우동 어묵 전골 (리뉴얼)", price: "8,320원"},
    ]
  },
  {
    groupId: 14, name: "밀키트", menu: [
      {menuId: 40, name: "[방방곡곡] 망향식 비빔국수 키트 (2인분)", price: "9,900원"},
      {menuId: 41, name: "[도리깨침] 월남쌈 밀키트", price: "20,900원"},
      {menuId: 42, name: "[에머이] 소고기 쌀국수 키트 (2인분)", price: "11,900원"},
    ]
  },
  {
    groupId: 15, name: "밑반찬", menu: [
      {menuId: 43, name: "[비움반찬] 도시락 밑반찬 세트 5종(택1)", price: "9,900원"},
      {menuId: 44, name: "[진가네반찬] 모둠나물", price: "9,800원"},
      {menuId: 45, name: "동물복지 지짐 반숙 계란장 매운맛", price: "5,900원"},
    ]
  },
  {
    groupId: 16, name: "샐러드", menu: [
      {menuId: 46, name: "[스윗밸런스] 오늘의 샐러드 10종 (리뉴얼) (택1)", price: "4,900원~"},
      {menuId: 47, name: "[샐러드판다] 병 샐러드 12종 (리뉴얼) (택1)", price: "5,500원~"},
      {menuId: 48, name: "샐러드랩 샌드위치 7종 (택1)", price: "3,900원~"},
    ]
  },
  {
    groupId: 17, name: "도시락", menu: [
      {menuId: 49, name: "[탄단지] 가벼운 한식 도시락 6종 (2개입) (택1))", price: "9,900원"},
      {menuId: 50, name: "[스윗밸런드] 오늘의 식단 도시락 6종 (택1)", price: "4,500원~"},
      {menuId: 51, name: "[풀무원] 롤 유부초밥", price: "6,980원"},
    ]
  },
  {
    groupId: 18, name: "파스타", menu: [
      {menuId: 52, name: "[이연복의 목란] 짬뽕 2인분 (맵기선택)", price: "12,555원"},
      {menuId: 53, name: "[울면] 속초식 명태 회냉면 2인분", price: "10,200원"},
      {menuId: 54, name: "[투다리] 시그니처 김치우동 (2인분)", price: "12,900원"},
    ]
  },
  {
    groupId: 19, name: "드레싱", menu: [
      {menuId: 55, name: "[폰타나] 파스타소스 8종", price: "3,980원~"},
      {menuId: 56, name: "[위크위크서울] 바질 페스토", price: "15,980원"},
      {menuId: 57, name: "[레오나르디] 모데나산 콘디멘토 화이트 발사믹", price: "29,000원"},
    ]
  },
  {
    groupId: 20, name: "향신료", menu: [
      {menuId: 58, name: "[말돈] 플레이크 소금 2종", price: "8,200원~"},
      {menuId: 59, name: "[백설] 자일로스 설탕 2종", price: "3,780원"},
      {menuId: 60, name: "[지리산처럼] 행복한 정은씨의 고소한 들깨가루", price: "9,980원"},
    ]
  },
  {
    groupId: 21, name: "오일", menu: [
      {menuId: 61, name: "[청양] 통참깨 참기름 & 통들깨 들기름 180ml", price: "7,900원~"},
      {menuId: 62, name: "[폰타나] 엑스트라 버진 올리브유", price: "11,700원"},
      {menuId: 63, name: "라온 현미유 500ml", price: "8,350원"},
    ]
  },
]

export default function MenuList() {

  const { groupId } = useParams();
  // fetching data
  const group = DATA.find(group => group.groupId == groupId);

  const menuList = group.menu.map(item => (
    <li key={item.menuId}
        className="flex justify-between list-none">
        <Link to={`/menu/${item.menuId}`}>
          <span>{item.name}</span>
        </Link>
        <span> {item.price}</span>
    </li>
  ))

  return (
    <>
      <h1 className="text-center font-bold text-xl pb-2 mt-3 bg-purple-900 text-white pt-1">Category</h1>
      <h1 className="mt-1 text-lg font-bold text-purple-900">{group.name}</h1>
      <ul className="text-sm">
        {menuList}
      </ul>
    </>
  )
}