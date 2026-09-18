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
    id: "yangju-rehabilitation-center",
    titleKo: "양주시 장애인 직업재활시설 건립공사",
    titleEn: "Yangju Vocational Rehabilitation Center",
    category: "PUBLIC",
    categoryLabel: "공공 · 복지시설",
    year: "2024",
    location: "경기도 양주시",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600&auto=format&fit=crop"
    ],
    drawings: [
      {
        title: "배치도 (Site Plan)",
        url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
        caption: "자연 녹지 축과 보행자 진입로를 고려한 완만한 배치 계획"
      },
      {
        title: "1층 평면도 (Ground Floor Plan)",
        url: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format&fit=crop",
        caption: "장애인 이용자의 편의를 극대화한 무단차 수평 순환 동선"
      }
    ],
    spec: {
      location: "경기도 양주시 산북동",
      siteArea: "1,980.00 ㎡ (598.95평)",
      buildingArea: "495.20 ㎡ (149.79평)",
      grossArea: "1,320.60 ㎡ (399.48평)",
      coverageRatio: "25.01 %",
      floorAreaRatio: "66.69 %",
      scale: "지하 1층, 지상 3층",
      structure: "철근콘크리트조 (RC)",
      exteriorFinish: "치장벽돌, 로이삼중유리, 알루미늄 루버",
      principalArchitect: "양인애 (노랑달건축사사무소)",
      team: "노랑달 설계팀 (김민지, 박성호)",
      awardOrStatus: "설계공모 당선작 (1등 당선 / 실시설계 중)"
    },
    summary: "자연과 호흡하는 중정형 배치를 통해 장애인 이용자에게 따뜻한 빛과 편안한 휴식을 선사하는 배려형 공공건축.",
    description: [
      "양주시 장애인 직업재활시설 건립공사 설계공모 1등 당선작입니다.",
      "단순한 보호시설을 넘어 자립과 회복의 공간이 될 수 있도록 중앙 중정을 중심으로 모든 훈련실과 휴게 공간을 유기적으로 연결했습니다.",
      "단차 없는 유니버설 디자인(Universal Design)을 철저히 준수하였으며, 치장벽돌과 목재 루버의 질감을 활용하여 이용자들에게 심리적 안정감을 제공하도록 계획되었습니다."
    ]
  },
  {
    id: "garak-louver-house",
    titleKo: "가락동 루버하우스 (상가주택)",
    titleEn: "Garak Louver House & Commercial",
    category: "COMMERCIAL",
    categoryLabel: "근린생활시설 · 상가주택",
    year: "2023",
    location: "서울특별시 송파구 가락동",
    thumbnail: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1600&auto=format&fit=crop"
    ],
    drawings: [
      {
        title: "입면도 (Elevation)",
        url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
        caption: "도시 가로변 시선을 조율하는 테라코타 루버 시스템"
      }
    ],
    spec: {
      location: "서울특별시 송파구 가락동",
      siteArea: "218.40 ㎡ (66.06평)",
      buildingArea: "129.80 ㎡ (39.26평)",
      grossArea: "435.50 ㎡ (131.73평)",
      coverageRatio: "59.43 %",
      floorAreaRatio: "199.40 %",
      scale: "지상 5층",
      structure: "철근콘크리트조",
      exteriorFinish: "화이트 노출콘크리트, 테라코타 루버, 로이복층유리",
      principalArchitect: "양인애 (노랑달건축사사무소)",
      team: "노랑달 설계팀"
    },
    summary: "1~2층 상가의 가시성과 상층부 주거세대의 사생활 보호를 수직 루버로 명쾌하게 해결한 송파구 도심형 상가주택.",
    description: [
      "송파구 가락동 일반주거지역의 법적 일조권 사선제한과 주차 규제를 극복하며 최대 용적률을 확보한 프로젝트입니다.",
      "가로와 맞닿은 저층부는 시원한 전면 유리로 상업적 매력을 극대화하고, 3~5층 주거 세대는 테라코타 루버로 외부 시선을 차단하면서도 풍부한 일조를 들였습니다."
    ]
  },
  {
    id: "moonlight-house-yangpyeong",
    titleKo: "양평 문호리 달빛재 (단독주택)",
    titleEn: "Moonlight House in Munho-ri",
    category: "RESIDENCE",
    categoryLabel: "단독주택",
    year: "2023",
    location: "경기도 양평군 서종면",
    thumbnail: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop"
    ],
    drawings: [
      {
        title: "단면도 (Section)",
        url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
        caption: "북한강 조망을 담는 2개 층 오픈형 보이드 공간 단면"
      }
    ],
    spec: {
      location: "경기도 양평군 서종면 문호리",
      siteArea: "580.00 ㎡ (175.45평)",
      buildingArea: "112.30 ㎡ (33.97평)",
      grossArea: "186.40 ㎡ (56.38평)",
      coverageRatio: "19.36 %",
      floorAreaRatio: "32.13 %",
      scale: "지상 2층",
      structure: "경골목구조 + 철근콘크리트 기단",
      exteriorFinish: "세라믹사이딩, 알루미늄 징크, 탄화목 루버",
      principalArchitect: "양인애 (노랑달건축사사무소)",
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
      principalArchitect: "양인애 (노랑달건축사사무소)",
      team: "노랑달 설계팀"
    },
    summary: "30년 된 노후 적벽돌 건물을 승강기 신설과 구조보강을 통해 임대 가치를 250% 상승시킨 도심 재생 리모델링.",
    description: [
      "송파구 문정동의 노후 다가구 주택을 크리에이티브 스타트업을 위한 복합 근생 사옥으로 재탄생시켰습니다.",
      "내력벽을 선별적으로 철거하고 H빔으로 구조를 보강하여 넓고 기둥 없는 열린 업무 공간을 구현하였으며, 타공 알루미늄 패널로 현대적인 도심 파사드를 완성했습니다."
    ]
  },
  {
    id: "wirye-canopy-pavilion",
    titleKo: "위례 어반 캐노피 파빌리온",
    titleEn: "Wirye Urban Canopy Pavilion",
    category: "PUBLIC",
    categoryLabel: "공공 · 쉼터시설",
    year: "2024",
    location: "서울특별시 송파구 위례동",
    thumbnail: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop"
    ],
    drawings: [
      {
        title: "개념 다이어그램 (Concept Diagram)",
        url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
        caption: "곡면 목구조 집성재를 활용한 비정형 지붕 프레임 분석"
      }
    ],
    spec: {
      location: "서울특별시 송파구 위례동",
      siteArea: "450.00 ㎡",
      buildingArea: "68.50 ㎡",
      grossArea: "68.50 ㎡",
      coverageRatio: "15.22 %",
      floorAreaRatio: "15.22 %",
      scale: "지상 1층",
      structure: "글루램 (Glulam) 목구조",
      exteriorFinish: "구조용 집성목, 티타늄 아연판",
      principalArchitect: "양인애 (노랑달건축사사무소)",
      team: "노랑달 설계팀"
    },
    summary: "위례신도시 주민들의 일상 산책로에 따뜻한 쉼터를 제공하는 유려한 곡면 목구조 공공 쉼터.",
    description: [
      "보행자 전용도로변에 위치한 소규모 공공 프로젝트로, 목재의 유려한 곡선과 그늘을 통해 도시민에게 휴식과 만남의 장소를 제공합니다."
    ]
  }
];

export const STUDIO_INFO = {
  nameKo: "노랑달 건축사사무소",
  nameEn: "NORANGDAL ARCHITECTS",
  founder: "양인애",
  title: "대표 건축사 / KIRA",
  license: "대한건축사협회 정회원 (대한민국 공인 건축사)",
  address: "서울특별시 송파구 가락동 78 (송파대로)",
  tel: "02-402-2646",
  mobile: "010-8260-2646",
  email: "norangdal@naver.com",
  blogUrl: "https://blog.naver.com/norangdal",
  instagramUrl: "https://instagram.com/norangdal_architects",
  statement: "우리는 대지가 품은 고유한 시간과 도시의 결을 읽고, 사람의 온기와 자연의 빛이 머무는 건강한 공간을 설계합니다.",
  philosophy: [
    "노랑달 건축사사무소는 서울 송파구를 기반으로 신축 주거, 상가주택, 공공건축, 대수선 리모델링까지 폭넓은 스펙트럼의 설계를 수행하는 건축 아틀리에입니다.",
    "설계는 단순한 조형 작업이 아닌, 건축주의 삶과 예산, 법적 테두리와 공공성의 균형을 찾아가는 정밀한 여정입니다.",
    "설계공모 당선으로 입증된 디자인 역량과 송파·수도권 일대의 풍부한 인허가 경험을 바탕으로, 최초 기획 검토부터 완공 후 감리까지 대표 건축사가 직접 책임 있게 동행합니다."
  ],
  credentials: [
    "대한건축사협회 (KIRA) 정회원 공인 건축사",
    "서울시립대학교 건축학 석사 (M.Arch)",
    "양주시 장애인 직업재활시설 건립공사 설계공모 1등 당선 (2024)",
    "서울시 송파구 마을건축가 / 공공건축 자문위원 위촉",
    "단독주택, 상가주택, 공공복지시설 다수 인허가 및 감리 완수"
  ],
  processSteps: [
    {
      step: "01",
      title: "대지 분석 & 법적 사전 검토",
      desc: "토지이용계획원, 건폐율, 용적률, 도로 사선 및 일조권 등 법적 규제를 면밀히 분석하고 초기 사업 타당성을 검토합니다."
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
