export interface Project {
  id: string;
  titleKo: string;
  titleEn: string;
  category: "PUBLIC" | "RESIDENCE" | "COMMERCIAL" | "RENOVATION";
  categoryLabel: string;
  year: string;
  location: string;
  thumbnail: string;
  images: string[];
  isMockupImage?: boolean;
  imageNotice?: string;
  drawings: {
    title: string;
    url: string;
    caption: string;
  }[];
  spec: {
    location: string;
    siteArea: string;
    buildingArea: string;
    grossArea: string;
    coverageRatio?: string;
    floorAreaRatio?: string;
    scale: string;
    structure: string;
    exteriorFinish: string;
    principalArchitect: string;
    team: string;
    awardOrStatus?: string;
  };
  summary: string;
  description: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "yangju-nammyeon-sports-center",
    titleKo: "양주시 남면 실내체육시설 건립공사",
    titleEn: "Yangju Nammyeon Indoor Sports Center",
    category: "PUBLIC",
    categoryLabel: "공공 · 체육시설",
    year: "2024",
    location: "경기도 양주시 남면 신산리",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600&auto=format&fit=crop"
    ],
    isMockupImage: true,
    imageNotice: "※ 시안용 연출 이미지 (실데이터 반영 가능)",
    drawings: [
      {
        title: "배치도 (Site Plan Concept)",
        url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
        caption: "자연 녹지 축과 보행자 진입로를 연계한 개방형 배치 계획"
      },
      {
        title: "기준층 평면도 (Floor Plan Concept)",
        url: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format&fit=crop",
        caption: "다양한 실내 구기 종목과 주민 여가 프로그램을 수용하는 다목적 평면 구조"
      }
    ],
    spec: {
      location: "경기도 양주시 남면 신산리 364-7 일원",
      siteArea: "4,127.00 ㎡ (1,248.4평)",
      buildingArea: "980.50 ㎡ (296.6평)",
      grossArea: "약 1,500.00 ㎡ (453.7평)",
      coverageRatio: "23.76 %",
      floorAreaRatio: "36.34 %",
      scale: "지상 2층",
      structure: "철근콘크리트조 (RC) + 대공간 철골 트러스 지붕",
      exteriorFinish: "치장벽돌, 로이복층유리, 알루미늄 복합패널",
      principalArchitect: "이슬기 (노랑달건축사사무소)",
      team: "노랑달 설계팀",
      awardOrStatus: "설계공모 입상작 (Prize Winner)"
    },
    summary: "지역 주민의 생활체육 활성화와 커뮤니티 화합을 이끄는 친환경 개방형 복합 체육시설 제안.",
    description: [
      "양주시 남면 실내체육시설 건립공사 설계공모 입상작입니다.",
      "주변 자연경관 및 마을의 스케일과 자연스럽게 조화되도록 저층부의 매스를 분절하고, 수평적 루버와 벽돌의 따뜻한 물성을 강조했습니다.",
      "체육관 이용자와 보행자의 동선을 입체적으로 분리하고, 사계절 채광과 자연 환기를 유도하는 에너지 절약형 친환경 공공건축으로 계획되었습니다."
    ]
  },
  {
    id: "eomsa-parking-tower",
    titleKo: "엄사면 공영주차타워 조성사업",
    titleEn: "Eomsa-myeon Public Parking Tower",
    category: "PUBLIC",
    categoryLabel: "공공 · 주차시설",
    year: "2024",
    location: "충청남도 계룡시 엄사면",
    thumbnail: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1600&auto=format&fit=crop"
    ],
    isMockupImage: true,
    imageNotice: "※ 시안용 연출 이미지 (실데이터 반영 가능)",
    drawings: [
      {
        title: "입면 파사드 분석도 (Facade Concept)",
        url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
        caption: "알루미늄 루버 각도 변화를 통해 소음과 차폐, 환기 효율을 극대화한 파사드"
      }
    ],
    spec: {
      location: "충청남도 계룡시 엄사면 중심상업지역",
      siteArea: "1,850.00 ㎡",
      buildingArea: "1,110.00 ㎡",
      grossArea: "3,850.00 ㎡",
      coverageRatio: "60.00 %",
      floorAreaRatio: "208.10 %",
      scale: "지상 4층",
      structure: "철골철근콘크리트조 (SRC)",
      exteriorFinish: "수직 알루미늄 루버, 테라코타 패널, 노출콘크리트",
      principalArchitect: "이슬기 (노랑달건축사사무소)",
      team: "노랑달 설계팀",
      awardOrStatus: "제안 설계공모 입상작 (Prize Winner)"
    },
    summary: "도심 주차난을 해소하고 가로 경관을 개선하는 조형미를 갖춘 차세대 친환경 공영주차타워 제안.",
    description: [
      "엄사면 공영주차타워 조성사업 제안 설계공모 입상작입니다.",
      "기존 주차전용 건축물의 폐쇄적이고 삭막한 이미지를 탈피하여, 가로와 소통하는 수직 루버와 야간 경관조명을 결합한 도시 랜드마크를 제안했습니다.",
      "입체적인 보차분리와 최적의 회전반경 설계를 통해 초보 운전자도 안전하고 쾌적하게 이용할 수 있도록 배려했습니다."
    ]
  },
  {
    id: "bangi-courtyard-house",
    titleKo: "방이동 어반 코트야드 (상가주택)",
    titleEn: "Bangi Urban Courtyard Mixed-Use",
    category: "COMMERCIAL",
    categoryLabel: "근린생활시설 · 상가주택",
    year: "2023",
    location: "서울특별시 송파구 방이동",
    thumbnail: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600&auto=format&fit=crop"
    ],
    isMockupImage: true,
    imageNotice: "※ 시안용 연출 이미지 (실데이터 반영 가능)",
    drawings: [
      {
        title: "단면 다이어그램 (Section Concept)",
        url: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format&fit=crop",
        caption: "하부 근린생활시설과 상부 임대주택의 채광과 프라이버시를 분리한 단면 구성"
      }
    ],
    spec: {
      location: "서울특별시 송파구 방이동 (올림픽공원 인근)",
      siteArea: "218.40 ㎡ (66.07평)",
      buildingArea: "128.80 ㎡ (38.96평)",
      grossArea: "432.10 ㎡ (130.71평)",
      coverageRatio: "58.97 %",
      floorAreaRatio: "197.85 %",
      scale: "지하 1층, 지상 5층",
      structure: "철근콘크리트조 (RC)",
      exteriorFinish: "모노타일, 유로폼 노출콘크리트, 로이삼중유리",
      principalArchitect: "이슬기 (노랑달건축사사무소)",
      team: "노랑달 설계팀"
    },
    summary: "올림픽공원의 푸른 결을 품고 가로 활성화와 주거 쾌적성을 양립시킨 송파구 도심형 상가주택.",
    description: [
      "방이동 주택가 모퉁이 대지의 불리한 일조권 사선을 유려한 테라스 매스로 치환한 프로젝트입니다.",
      "1~2층은 높은 층고의 트렌디한 F&B 및 공방 공간으로 계획하고, 상층부는 마당을 품은 중정형 단독 주거를 구성하여 건축주의 임대수익과 삶의 질을 동시에 극대화했습니다."
    ]
  },
  {
    id: "yangpyeong-moonlight-house",
    titleKo: "양평 문호리 달빛재 (단독주택)",
    titleEn: "Yangpyeong Moonlight House",
    category: "RESIDENCE",
    categoryLabel: "단독주택 · 전원주거",
    year: "2023",
    location: "경기도 양평군 서종면 문호리",
    thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1600&auto=format&fit=crop"
    ],
    isMockupImage: true,
    imageNotice: "※ 시안용 연출 이미지 (실데이터 반영 가능)",
    drawings: [
      {
        title: "배치 및 일조 분석도 (Sunlight Analysis)",
        url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
        caption: "사계절 일사각도를 고려한 처마 돌출 길이 및 안마당 채광 계획"
      }
    ],
    spec: {
      location: "경기도 양평군 서종면 문호리",
      siteArea: "620.00 ㎡ (187.55평)",
      buildingArea: "115.40 ㎡ (34.91평)",
      grossArea: "199.20 ㎡ (60.26평)",
      coverageRatio: "18.61 %",
      floorAreaRatio: "32.13 %",
      scale: "지상 2층",
      structure: "경골목구조 + 철근콘크리트 기단",
      exteriorFinish: "세라믹사이딩, 알루미늄 징크, 탄화목 루버",
      principalArchitect: "이슬기 (노랑달건축사사무소)",
      team: "노랑달 설계팀"
    },
    summary: "북한강의 유려한 능선과 마당을 실내로 끌어들여 사계절 변화를 온전히 누리는 현대 단독주택.",
    description: [
      "경사 지형의 레벨 차이를 활용하여 주차와 진입 동선을 분리하고, 본채를 남향으로 배치하여 사계절 채광을 확보했습니다.",
      "거실과 연결된 넓은 목재 데크는 전통 한옥의 대청마루처럼 안과 밖의 경계를 허물며 가족들의 소통 공간이 됩니다."
    ]
  },
  {
    id: "munjeong-cube-renovation",
    titleKo: "문정동 큐브오피스 대수선 (리모델링)",
    titleEn: "Munjeong Cube Office Renovation",
    category: "RENOVATION",
    categoryLabel: "대수선 · 리모델링",
    year: "2022",
    location: "서울특별시 송파구 문정동",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600&auto=format&fit=crop"
    ],
    isMockupImage: true,
    imageNotice: "※ 시안용 연출 이미지 (실데이터 반영 가능)",
    drawings: [
      {
        title: "구조보강 계획도 (Structural Plan)",
        url: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format&fit=crop",
        caption: "내력벽 철거 부위 H빔 철골 보강 및 엘리베이터 신설 샤프트"
      }
    ],
    spec: {
      location: "서울특별시 송파구 문정동",
      siteArea: "290.00 ㎡ (87.72평)",
      buildingArea: "155.10 ㎡ (46.91평)",
      grossArea: "680.20 ㎡ (205.76평)",
      coverageRatio: "53.48 %",
      floorAreaRatio: "198.80 %",
      scale: "지하 1층, 지상 4층",
      structure: "기존 RC 구조 + H형강 철골보강",
      exteriorFinish: "타공 알루미늄 패널, 유리 커튼월",
      principalArchitect: "이슬기 (노랑달건축사사무소)",
      team: "노랑달 설계팀"
    },
    summary: "노후 건물을 승강기 신설과 구조보강을 통해 임대 가치와 공간 효율을 극대화한 도심 재생 리모델링.",
    description: [
      "송파구 문정동의 노후 건물을 크리에이티브 오피스를 위한 복합 근생 사옥으로 재탄생시켰습니다.",
      "내력벽을 선별적으로 철거하고 H빔으로 구조를 보강하여 넓고 기둥 없는 열린 업무 공간을 구현하였으며, 타공 알루미늄 패널로 현대적인 도심 파사드를 완성했습니다."
    ]
  }
];

export const STUDIO_INFO = {
  nameKo: "노랑달 건축사사무소",
  nameEn: "NORANGDAL ARCHITECTS",
  founder: "이슬기",
  title: "대표 건축사 / KIRA",
  license: "대한건축사협회 정회원 (대한민국 공인 건축사)",
  address: "서울특별시 송파구 백제고분로 446, 송암빌딩 3층 3076호 (방이동)",
  tel: "02-402-2646",
  mobile: "010-9110-3161",
  email: "norangdal50@naver.com",
  blogUrl: "https://blog.naver.com/norangdal50",
  instagramUrl: "https://instagram.com/norangdal_architects",
  positioning: "단독주택 · 다가구 · 다세대 · 상가주택 · 주상복합 전문 건축사사무소",
  scopeText: "건축설계, 건축디자인, 인허가, 감리, 사업성 검토를 위한 기획설계, 건축 전반 업무 수행",
  statement: "우리는 대지가 품은 고유한 시간과 도시의 결을 읽고, 사람의 온기와 자연의 빛이 머무는 건강한 공간을 설계합니다.",
  philosophy: [
    "노랑달 건축사사무소는 단독주택, 다가구주택, 다세대, 상가주택, 주상복합부터 근린생활시설, 업무시설까지 주거와 상업 복합건축을 전문으로 수행하는 아틀리에입니다.",
    "토지 매입 단계에서의 사업성 검토 기획설계부터, 감각적인 건축디자인과 철저한 인허가, 정밀한 실시설계와 현장 공사감리까지 건축 전반의 모든 과정을 대표 건축사가 직접 책임 있게 총괄합니다.",
    "설계부터 준공까지 다수의 풍부한 실무 경력을 바탕으로, 건축주의 소중한 자산 가치를 극대화하고 일상의 온기가 채워지는 완성도 높은 공간을 실현합니다."
  ],
  credentials: [
    "대한건축사협회 (KIRA) 정회원 공인 건축사",
    "단독주택 / 다가구주택 / 다세대 / 상가주택 / 주상복합 전문 설계 아틀리에",
    "사업성 검토 기획설계 · 건축 인허가 · 공사감리 (설계부터 준공까지 다수 경력)",
    "서울특별시건축사회 신진건축사위원회 위원",
    "한국여성건축가협회 정회원",
    "서울특별시 건축공사 감리자 및 해체공사 감리자 명부 등재",
    "양주시 남면 실내체육시설 건립공사 설계공모 입상 (2024)",
    "엄사면 공영주차타워 조성사업 제안 설계공모 입상 (2024)"
  ],
  processSteps: [
    {
      step: "01",
      title: "사업성 검토 기획설계 & 대지 분석",
      desc: "토지이용계획원, 건폐율, 용적률, 도로 사선 및 법적 조례를 면밀히 분석하고, 토지 매입 및 건축 전 최적의 사업 타당성과 건축 가능 규모를 사전 기획합니다."
    },
    {
      step: "02",
      title: "기본 & 계획 설계",
      desc: "건축주의 라이프스타일과 예산을 반영하여 평면, 입면, 매스 모형(3D)을 발전시키고 최적의 공간 배치를 제안합니다."
    },
    {
      step: "03",
      title: "건축 인허가 & 실시설계",
      desc: "지자체 심의 및 건축허가를 완수하고, 실제 시공이 오차 없이 이루어지도록 구조, 설비, 마감재 상세도면을 작성합니다."
    },
    {
      step: "04",
      title: "시공사 견적 검토 & 입찰 지원",
      desc: "신뢰할 수 있는 종합건설사를 선별하고 내역서 및 견적을 객관적으로 비교 분석하여 공사비 누수와 분쟁을 예방합니다."
    },
    {
      step: "05",
      title: "설계 의도 구현 & 공사 감리",
      desc: "도면대로 정밀하게 시공되는지 현장을 상시 점검하고 품질과 마감을 총괄하여 최종 사용승인(준공)을 완수합니다."
    }
  ]
};
