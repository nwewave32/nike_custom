import { Filter } from "types/Filter";
import { Product } from "types/Product";

export const categories = [
  "신발",
  "탑 & 티셔츠",
  "후디 & 크루",
  "재킷 & 베스트",
  "팬츠 & 타이츠",
  "쇼츠",
  "스포츠 브라",

  "트랙수트",
  "스커트 & 드레스",
  "양말",
  "용품",
];
export const filters: Record<"sex" | "color" | "sports" | "price", Filter> = {
  sex: {
    id: 0,
    title: "성별",
    name: "sex",
    type: "checkbox",
    items: [
      { id: 0, isSelected: false, name: "남성" },
      { id: 1, isSelected: false, name: "여성" },
      { id: 2, isSelected: false, name: "유니섹스" },
    ],
  },
  sports: {
    id: 1,
    title: "스포츠",
    name: "sports",
    type: "checkbox",
    items: [
      { id: 0, isSelected: false, name: "라이프스타일" },
      { id: 1, isSelected: false, name: "Performance" },
      { id: 2, isSelected: false, name: "러닝" },
      { id: 3, isSelected: false, name: "트레이닝 및 짐" },
      { id: 4, isSelected: false, name: "농구" },
      { id: 5, isSelected: false, name: "축구" },
      { id: 6, isSelected: false, name: "골프" },
      { id: 7, isSelected: false, name: "스케이트보딩" },
      { id: 8, isSelected: false, name: "테니스" },
      { id: 9, isSelected: false, name: "트랙 및 필드" },
      { id: 10, isSelected: false, name: "워킹" },
      { id: 11, isSelected: false, name: "댄스" },
      { id: 12, isSelected: false, name: "요가" },
    ],
  },
  price: {
    id: 2,
    title: "가격대",
    name: "price",
    type: "checkbox",
    items: [
      { id: 0, isSelected: false, name: "0 - 50,000 원" },
      { id: 1, isSelected: false, name: "50,000 - 100,000 원" },
      { id: 2, isSelected: false, name: "100,000 - 150,000 원" },
      { id: 3, isSelected: false, name: "150,000 - 200,000 원" },
      { id: 4, isSelected: false, name: "200,000 원 +" },
    ],
  },
  color: {
    id: 3,
    title: "색상",
    name: "color",
    type: "color",
    items: [
      { id: 0, name: "퍼플", isSelected: false, code: "#8d429f" },
      { id: 1, name: "블랙", isSelected: false, code: "#000" },
      { id: 2, name: "레드", isSelected: false, code: "#e7352b" },
      { id: 3, name: "오렌지", isSelected: false, code: "#f36b26" },
      { id: 4, name: "블루", isSelected: false, code: "#1790c8" },
      { id: 5, name: "화이트", isSelected: false, code: "#fff" },
      { id: 6, name: "브라운", isSelected: false, code: "#825d41" },
      { id: 7, name: "그린", isSelected: false, code: "#7bba3c" },
      { id: 8, name: "옐로우", isSelected: false, code: "#fed533" },
      { id: 9, name: "멀티컬러", isSelected: false, code: "multi" },
      { id: 10, name: "그레이", isSelected: false, code: "#808080" },
      { id: 11, name: "핑크", isSelected: false, code: "#f0728f" },
    ],
  },
};

export const gara: Product[] = [
  {
    id: 0,
    title: "나이키 에어 포스 1",
    subtitle: "주니어 신발",
    category: "주니어 신발",
    price: 129000,
    sort: [
      {
        id: 0,
        url: "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/ae3763c4-8ef6-4032-bf7d-94b1318f4e19/AIR+FORCE+1+LV8+%28GS%29.png",
        soldOut: false,
        name: "라이트 스모크 그레이/시멘트 그레이/메탈릭 골드/라이트 스모크 그레이",
      },
      {
        id: 1,
        url: "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/daa66c05-cf93-46cb-af2f-6f827263ea04/AIR+FORCE+1+LV8+3+%28GS%29.png",
        soldOut: false,
        name: "화이트/화이트/라이트 카키",
      },
      {
        id: 2,
        url: "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/8e74f181-a5bf-4030-ae18-dcd9bd838f7b/AIR+FORCE+1+%28GS%29.png",
        soldOut: false,
        name: "포톤 더스트/옵시디언/포톤 더스트",
      },
      {
        id: 3,
        url: "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/e3dd9e5d-e939-4344-8105-f54adeca4bdb/AIR+FORCE+1+LV8+3+%28GS%29.png",
        soldOut: false,
        name: "화이트/팀 레드/화이트",
      },
      {
        id: 4,
        url: "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/95f54b8d-a75b-4708-a911-a6e5ce729f32/AIR+FORCE+1+LV8+3+%28GS%29.png",
        soldOut: false,
        name: "화이트/화이트/화이트/화이트",
      },
      {
        id: 5,
        url: "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/6766f1e6-c5e7-4434-af10-562de3473b1b/AIR+FORCE+1+LE+%28GS%29.png",
        soldOut: false,
        name: "코코넛 밀크/세서미/씨폼/바로크 브라운",
      },
      {
        id: 6,
        url: "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/da43848d-0101-4f30-9aa6-8bd8b555bd13/AIR+FORCE+1+LV8+%28GS%29.png",
        soldOut: false,
        name: "라이트 아이언 오어/화이트/블랙/라이트 아이언 오어",
      },
      {
        id: 7,
        url: "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/72e1a6bd-9ae6-4a69-9194-a2e26aede58f/AIR+FORCE+1+LV8+1+%28GS%29.png",
        soldOut: false,
        name: "서밋 화이트/카키/코코넛 밀크/서밋 화이트",
      },
      {
        id: 8,
        url: "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/532b65e8-e336-45db-b22d-633d7041445c/AIR+FORCE+1+LV8+4+%28GS%29.png",
        soldOut: false,
        name: "블랙/블랙/블랙/블랙",
      },
      {
        id: 9,
        url: "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/38cad9d3-6574-406c-b015-23ca7f65533a/AIR+FORCE+1+LE+%28GS%29.png",
        soldOut: false,
        name: "미드나이트 네이비/화이트/유니버시티 레드/블랙",
      },
      {
        id: 10,
        url: "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/19f4ea63-b82d-4e29-aca3-c25f0573a13c/NIKE+AIR+FORCE+1+GS.png",
        soldOut: false,
        name: "화이트/화이트/세이프티 오렌지",
      },
      {
        id: 11,
        url: "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/05dac6e5-5a9d-48c6-830b-3e1a7b7c8538/AIR+FORCE+1+%28GS%29.png",
        soldOut: false,
        name: "라이트 실버/화이트/애스트로너미 블루/미드나이트 네이비",
      },
      {
        id: 12,
        url: "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/09b991c5-2cd8-4df3-9303-3c8f3008f41b/AIR+FORCE+1+LV8+2+%28GS%29.png",
        soldOut: false,
        name: "세일/화이트/블랙/세일",
      },
      {
        id: 13,
        url: "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/cfde74a5-919c-4d9a-af8c-d4f936e70719/AIR+FORCE+1+LV8+1+%28GS%29.png",
        soldOut: false,
        name: "화이트/오일 그린/빈티지 그린",
      },
      {
        id: 14,
        url: "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/84afe9b0-cfdf-41fa-a8b5-93d78500e032/AIR+FORCE+1+%28GS%29.png",
        soldOut: false,
        name: "라이트 브리티시 탠/코코넛 밀크/검 다크 브라운/버건디 크러시",
      },
      {
        id: 15,
        url: "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/0cab9380-d5bd-4976-9c56-ca952965a000/AIR+FORCE+1+LV8+3+%28GS%29.png",
        soldOut: true,
        name: "화이트/블랙",
      },
      {
        id: 16,
        url: "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/1aa3abc4-692e-466b-b985-570a178f25ef/AIR+FORCE+1+%28GS%29.png",
        soldOut: true,
        name: "화이트/화이트/블랙/허니듀",
      },
      {
        id: 17,
        url: "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/75114927-6040-4159-a5a2-45ad3f797ecd/AIR+FORCE+1+%28GS%29.png",
        soldOut: true,
        name: "다크 스투코/뉴트럴 올리브/팬텀/미디엄 올리브",
      },
      {
        id: 18,
        url: "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/7d28a35f-eac1-4a31-b660-5d631e8382d0/AIR+FORCE+1+LV8+4+%28GS%29.png",
        soldOut: true,
        name: "페일 아이보리/피칸테 레드/발틱 블루/화이트",
      },
      {
        id: 19,
        url: "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/8e094eda-781b-445b-8b99-8f06931de0db/AIR+FORCE+1+LV8+2+BG.png",
        soldOut: true,
        name: "코코넛 밀크/바이코스털/검 다크 브라운/빈티지 그린",
      },
      {
        id: 20,
        url: "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/34a5a613-4e87-4fc7-9a3d-a9db1bbda896/AIR+FORCE+1+LV8+3+%28GS%29.png",
        soldOut: true,
        name: "화이트/매직 엠버",
      },
      {
        id: 21,
        url: "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/9c6a501e-7115-40ea-bb34-bce20a68c742/AIR+FORCE+1+%28GS%29.png",
        soldOut: false,
        name: "화이트/검 라이트 브라운/블루 비욘드",
      },
      {
        id: 22,
        url: "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/c00fda44-8a48-4ad2-ab0b-239b766e44a6/AIR+FORCE+1+%28GS%29.png",
        soldOut: false,
        name: "세일/화이트/라이트 본/올리브 아우라",
      },
      {
        id: 23,
        url: "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/c0c92e05-b6f8-4637-bbcf-5b4d16c06452/AIR+FORCE+1+LV8+%28GS%29.png",
        soldOut: false,
        name: "팬텀/서밋 화이트/에코 핑크",
      },
      {
        id: 24,
        url: "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/195c6c25-cc54-4b6e-8693-0c32abd3c684/AIR+FORCE+1+%28GS%29.png",
        soldOut: false,
        name: "휘트/검 라이트 브라운/휘트",
      },
    ],
    size: [225, 230, 235, 240, 245, 250],
    image: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0745eae3-6834-4a84-b310-8d66651f7472/AIR+FORCE+1+%28GS%29.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bc329c33-aea4-4973-a0d5-72fe9fbd656d/AIR+FORCE+1+%28GS%29.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0d4de4aa-5ecc-49cc-b1ca-6ab92b995c91/AIR+FORCE+1+%28GS%29.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/87dc7c07-7789-4a8f-b23f-9da40330c1d7/AIR+FORCE+1+%28GS%29.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2cfc74b0-79b5-422c-afcd-b8c35dcd1261/AIR+FORCE+1+%28GS%29.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6939e63a-4255-4341-9a68-eefaae84aeb8/AIR+FORCE+1+%28GS%29.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c3a549ee-f7ab-4ed2-ae0c-6aaddce2a87f/AIR+FORCE+1+%28GS%29.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/84561e9c-59a8-4165-9eca-3be564c75ccb/AIR+FORCE+1+%28GS%29.png",
    ],
    thumnails: [
      "https://static.nike.com/a/images/t_default/9c6a501e-7115-40ea-bb34-bce20a68c742/AIR+FORCE+1+%28GS%29.png",
      "https://static.nike.com/a/images/t_default/777a4118-299c-4d26-a383-a71ae8bc2265/AIR+FORCE+1+%28GS%29.png",
      "https://static.nike.com/a/images/t_default/7d830ce8-8dc3-4640-96c6-3070ce6ab638/AIR+FORCE+1+%28GS%29.png",
      "https://static.nike.com/a/images/t_default/a1d0a06e-00fd-4270-ac23-0f0cd2b2272e/AIR+FORCE+1+%28GS%29.png",
      "https://static.nike.com/a/images/t_default/24edecc6-eb76-451b-a622-42fdd46c8da9/AIR+FORCE+1+%28GS%29.png",
      "https://static.nike.com/a/images/t_default/73fed314-7c3b-48e2-81ec-9e02a7c92736/AIR+FORCE+1+%28GS%29.png",
      "https://static.nike.com/a/images/t_default/80a73af7-3613-41d0-8af1-c301a889fe9a/AIR+FORCE+1+%28GS%29.png",
      "https://static.nike.com/a/images/t_default/2edebc96-64bd-43ed-8ccb-7c60a53eb6a8/AIR+FORCE+1+%28GS%29.png",
    ],
  },

  {
    id: 1,
    title: "나이키 에어 포스 1 '07",
    subtitle: "남성 신발",
    category: "남성 신발",
    price: 139000,
    sort: [
      {
        id: 0,
        url: "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/4f37fca8-6bce-43e7-ad07-f57ae3c13142/AIR+FORCE+1+%2707.png",
        soldOut: false,
        name: "화이트/화이트",
      },
      {
        id: 1,
        url: "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/ca38a642-ec6e-450f-8935-f0d71f279d33/AIR+FORCE+1+%2707+FRESH.png",
        soldOut: true,
        name: "블랙/블랙/블랙/앤트러사이트",
      },
    ],
    size: [240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300],
    image: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/AIR+FORCE+1+%2707.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/00375837-849f-4f17-ba24-d201d27be49b/AIR+FORCE+1+%2707.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/33533fe2-1157-4001-896e-1803b30659c8/AIR+FORCE+1+%2707.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a0a300da-2e16-4483-ba64-9815cf0598ac/AIR+FORCE+1+%2707.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/82aa97ed-98bf-4b6f-9d0b-31a9f907077b/AIR+FORCE+1+%2707.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ef92df87-6098-4fa5-bc88-7107492febcf/AIR+FORCE+1+%2707.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/120a31b0-efa7-41c7-9a84-87b1e56ab9c3/AIR+FORCE+1+%2707.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1c1e5f55-99c2-4522-b398-2352e01ba566/AIR+FORCE+1+%2707.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0a0e1b96-043c-46d4-96a0-22408b6c771d/AIR+FORCE+1+%2707.png",
    ],
    thumnails: [
      "https://static.nike.com/a/images/t_default/4f37fca8-6bce-43e7-ad07-f57ae3c13142/AIR+FORCE+1+%2707.png",
      "https://static.nike.com/a/images/t_default/d0ad440c-2d9b-4a58-93a4-9e2ea050fea3/AIR+FORCE+1+%2707.png",
      "https://static.nike.com/a/images/t_default/6036bbbb-1cf1-410c-9546-8fb737c95797/AIR+FORCE+1+%2707.png",
      "https://static.nike.com/a/images/t_default/ea33db62-7df9-480a-b5f7-3634525852eb/AIR+FORCE+1+%2707.png",
      "https://static.nike.com/a/images/t_default/4e7ab05b-409d-4871-9806-0ce1726d3365/AIR+FORCE+1+%2707.png",
      "https://static.nike.com/a/images/t_default/120cea43-932a-4743-a537-052f9c664956/AIR+FORCE+1+%2707.png",
      "https://static.nike.com/a/images/t_default/b4fff5a0-0204-4437-9181-c56817812daa/AIR+FORCE+1+%2707.png",
      "https://static.nike.com/a/images/t_default/aa33f175-561c-4635-bea2-b516b18a70b8/AIR+FORCE+1+%2707.png",
      "https://static.nike.com/a/images/t_default/9bf152de-bad7-4ee9-aab7-245d89c5d86c/AIR+FORCE+1+%2707.png",
    ],
  },
];
