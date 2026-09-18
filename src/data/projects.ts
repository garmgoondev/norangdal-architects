export interface Project {
  id: string;
  titleKo: string;
  titleEn: string;
  category: "PUBLIC" | "COMMERCIAL" | "RENOVATION" | "RESIDENCE";
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
    use: string;
    siteArea?: string;
    buildingArea?: string;
    grossArea: string;
    coverageRatio?: string;
    floorAreaRatio?: string;
    scale: string;
    structure?: string;
    exteriorFinish?: string;
    principalArchitect: string;
    team: string;
    awardOrStatus?: string;
  };
  summary: string;
  conceptTitle?: string;
  description: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "andong-complex-community-center",
    titleKo: "안동 복합커뮤니티센터",
    titleEn: "Andong Complex Community Center",
    category: "PUBLIC",
    categoryLabel: "공공업무시설",
    year: "2024",
    location: "경상북도 안동시 풍천면 갈전리 1181 외 3필지",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop"
    ],
    isMockupImage: true,
    imageNotice: "※ 시안용 연출 이미지 (실데이터 반영 가능)",
    drawings: [
      {
        title: "배치 및 누하 진입 동선 개념도",
        url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
        caption: "검무산 자락 끝 부채꼴 형상을 따라 너른 평상과 누하 진입 공간을 형성"
      },
      {
        title: "주민 소통 복합 평면 계획도",
        url: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format&fit=crop",
        caption: "공공청사와 주거지 사이 햇살과 바람이 드나드는 대청마루형 보행 통로"
      }
    ],
    spec: {
      location: "경상북도 안동시 풍천면 갈전리 1181 외 3필지",
      use: "공공업무시설",
      grossArea: "2,268.13 ㎡ (약 686평)",
      scale: "지상 3층",
      principalArchitect: "이슬기 대표 건축사, 이대호 이사",
      team: "노랑달건축사사무소 설계팀",
      awardOrStatus: "공식 프로젝트 아카이브"
    },
    conceptTitle: "햇살, 물, 바람이 함께하는 누하 진입 공간",
    summary: "검무산 자락을 따라 너른 평상을 들어 올려 만든 누하 공간이 주민들이 막힘없이 소통하는 열린 길이 되는 복합커뮤니티센터.",
    description: [
      "검무산에서 마을로 이어지는 산자락 끝, 부채꼴 모양의 형상을 따라 사람들을 반기는 너른 평상이 들어서고 그 평상을 사뿐 들어 만들어지는 누하는 절로 햇살, 물, 바람과 함께 주민들이 막힘없이 드나드는 소통의 길이 됩니다.",
      "공공청사와 주거지 사이, 주된 도로를 따라 들어선 공간은 보행로를 따라 햇볕이 따가운 날에는 그늘 길을, 비가 오는 날에는 대청마루나 툇마루가 되어주며 주민들을 반갑게 맞이합니다."
    ]
  },
  {
    id: "geumgok-public-library",
    titleKo: "금곡동 공공도서관",
    titleEn: "Geumgok-dong Public Library",
    category: "PUBLIC",
    categoryLabel: "공공도서관 · 교육문화",
    year: "2024",
    location: "경기도 수원시 권선구 금곡동 1080번지",
    thumbnail: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507842229451-79731e712e4f?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=1600&auto=format&fit=crop"
    ],
    isMockupImage: true,
    imageNotice: "※ 시안용 연출 이미지 (실데이터 반영 가능)",
    drawings: [
      {
        title: "공원-도서관 연계 지형 단면도",
        url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
        caption: "공원의 쉼터 역할을 보존하며 층층이 지식을 쌓아 올린 책동산 매스"
      }
    ],
    spec: {
      location: "경기도 수원시 권선구 금곡동 1080번지",
      use: "공공도서관",
      grossArea: "1,644.15 ㎡ (약 497평)",
      scale: "지상 2층",
      principalArchitect: "이슬기 대표 건축사, 이대호 이사",
      team: "노랑달건축사사무소 설계팀",
      awardOrStatus: "공식 프로젝트 아카이브"
    },
    conceptTitle: "주민의 쉼터 위 지식을 쌓아 만든 책동산",
    summary: "공동주택과 초·중학교 인근 공원의 역할을 계승하며, 안전한 등하굣길과 탐험하는 독서 동산을 결합한 공공도서관.",
    description: [
      "대상지는 공동주택 단지와 가온초등학교, 산촌중학교의 인근에 위치한 공원 부지입니다.",
      "주민들의 쉼터가 되어 온 대상지의 역할을 기억하며, 새로운 공공도서관을 쌓아 새로운 지식 동산을 만들어냅니다. 아이들의 안전한 등하교를 위해 차량 동선을 분리하고 자연스레 동산을 넘나들며 공원과 도서관을 탐험하도록 설계했습니다."
    ]
  },
  {
    id: "guri-startup-forest",
    titleKo: "창업혁신공간 북서부(구리) 및 코워킹스페이스",
    titleEn: "Guri Start-up Innovation Space & Coworking",
    category: "COMMERCIAL",
    categoryLabel: "업무시설 · 코워킹스페이스",
    year: "2024",
    location: "경기도 구리시",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600&auto=format&fit=crop"
    ],
    isMockupImage: true,
    imageNotice: "※ 시안용 연출 이미지 (실데이터 반영 가능)",
    drawings: [
      {
        title: "코워킹스페이스 공간 구획 다이어그램",
        url: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format&fit=crop",
        caption: "4개의 독립 업무영역과 이를 유기적으로 잇는 숲속 모티브 라운지"
      }
    ],
    spec: {
      location: "경기도 구리시 갈매순환로",
      use: "업무시설 (지식산업센터 내부)",
      grossArea: "19,124.00 ㎡ (전체 지식산업센터 연계)",
      scale: "지상 4층 (일부)",
      principalArchitect: "이슬기 대표 건축사, 이대호 이사",
      team: "노랑달건축사사무소 설계팀",
      awardOrStatus: "공식 프로젝트 아카이브"
    },
    conceptTitle: "숲속의 오두막, Guri Forest",
    summary: "높은 층고와 광대한 면적을 활용하여 자연의 감각을 자극하고 창의적 몰입을 이끄는 혁신 코워킹 플랫폼.",
    description: [
      "최근 준공된 지식산업센터 공간으로 높은 층고와 넓은 공간의 장점을 활용하여 다양한 휴게공간과 업무공간을 ‘숲속의 공간’을 모티브로 디자인하였습니다.",
      "자연적인 요소는 이용자의 다양한 감각(시각, 촉각, 후각, 미각)을 자극하여 지속할 수 있는 창의적 환경을 조성합니다. 대규모 공간을 활용하여 4개의 업무영역과 그 공간을 연결해 주는 휴게 및 소통공간으로 코워킹스페이스를 구축하였습니다."
    ]
  },
  {
    id: "goyang-startup-space",
    titleKo: "창업혁신공간 북서부(고양) 및 코워킹스페이스",
    titleEn: "Goyang Start-up Innovation Space",
    category: "COMMERCIAL",
    categoryLabel: "업무시설 · 공간재생",
    year: "2024",
    location: "경기도 고양시",
    thumbnail: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
    ],
    isMockupImage: true,
    imageNotice: "※ 시안용 연출 이미지 (실데이터 반영 가능)",
    drawings: [
      {
        title: "중정 채광 연계 평면 계획도",
        url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
        caption: "중정을 바라보는 복도에 휴게 및 미팅 포켓을 배치해 자연채광 극대화"
      }
    ],
    spec: {
      location: "경기도 고양시",
      use: "업무시설",
      grossArea: "1,662.10 ㎡ (약 502평)",
      scale: "지상 5층 (일부)",
      principalArchitect: "이슬기 대표 건축사, 이대호 이사",
      team: "노랑달건축사사무소 설계팀",
      awardOrStatus: "공식 프로젝트 아카이브"
    },
    conceptTitle: "창업의 시작! 활력의 공간 Goyang",
    summary: "노후화로 어둡고 침체된 업무시설에 자연 채광과 생동감 넘치는 색채를 불어넣은 스타트업 육성 공간.",
    description: [
      "기존 건축물의 노후화로 어둡고 침체된 분위기의 업무공간을 새로운 시작을 준비하는 창업공간으로 활력을 불어넣는 환경개선 프로젝트입니다.",
      "중정을 바라보는 복도에 전용면적을 할애하여 휴게공간 및 소규모 미팅공간을 조성함으로써 자연채광 및 기존 공용부를 적극 활용하여 활동성 있는 공간으로 개선하였습니다. 새로운 시작을 준비하는 창업공간에 생동감 있는 색상과 디자인을 적용하여 활기 넘치는 창업공간으로 탄생합니다."
    ]
  },
  {
    id: "mungyeong-tennis-center",
    titleKo: "문경 실내테니스장",
    titleEn: "Mungyeong Tennis Sports Center",
    category: "PUBLIC",
    categoryLabel: "체육시설 · 대공간건축",
    year: "2024",
    location: "경상북도 문경시 흥덕동 80-2번지 외 17필지",
    thumbnail: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
    ],
    isMockupImage: true,
    imageNotice: "※ 시안용 연출 이미지 (실데이터 반영 가능)",
    drawings: [
      {
        title: "코트 배치 및 관람석 단면도",
        url: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format&fit=crop",
        caption: "실내코트와 실외코트 관람석을 유기적으로 넘나드는 시민 친화적 동선"
      }
    ],
    spec: {
      location: "경상북도 문경시 흥덕동 80-2번지 외 17필지",
      use: "운동시설",
      grossArea: "3,004.72 ㎡ (약 909평)",
      scale: "지상 1층 (대공간)",
      principalArchitect: "이슬기 대표 건축사, 이대호 이사",
      team: "노랑달건축사사무소 설계팀",
      awardOrStatus: "공식 프로젝트 아카이브"
    },
    conceptTitle: "문희(聞喜)랑 경서(慶瑞)랑 놀재",
    summary: "비가 와도 눈이 와도 시민들이 함께 라켓을 맞대고 응원하며 기쁜 소식을 나누는 전천후 실내 스포츠 거점.",
    description: [
      "여기는 새도 넘기 힘든 고개가 아니다! 실내코트와 실외코트 관람석을 넘나들며 모든 코트의 게임을 즐기는 시민들의 발걸음이 모이니 기쁜 소식이 날아들고, 플레이마다 손뼉을 마주치며 서로를 응원하는 코트에서는 경사스러운 기운이 샘솟습니다.",
      "문희와 경서가 반겨주는 생기 넘치는 이 공간은 이제, 비가 와도 눈이 와도 시민들이 한데 모여 활력을 충전하는 문경의 랜드마크가 됩니다."
    ]
  },
  {
    id: "gudeok-art-museum",
    titleKo: "구덕 민속예술관",
    titleEn: "Gudeok Folk Art Museum",
    category: "PUBLIC",
    categoryLabel: "문화 및 집회시설",
    year: "2024",
    location: "부산광역시 서구 서대신동3가 산2-3 외 2필지",
    thumbnail: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
    ],
    isMockupImage: true,
    imageNotice: "※ 시안용 연출 이미지 (실데이터 반영 가능)",
    drawings: [
      {
        title: "지형 순환 레벨 다이어그램",
        url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
        caption: "대지 레벨을 활용하여 계곡물이 흐르듯 자연스럽게 이어지는 보행 순환로"
      }
    ],
    spec: {
      location: "부산광역시 서구 서대신동3가 산2-3 외 2필지",
      use: "문화 및 집회시설",
      grossArea: "1,960.79 ㎡ (약 593평)",
      scale: "지하 1층 / 지상 3층",
      principalArchitect: "이슬기 대표 건축사, 이대호 이사",
      team: "노랑달건축사사무소 설계팀",
      awardOrStatus: "공식 프로젝트 아카이브"
    },
    conceptTitle: "자연과 하나 된 구덕 민속예술관과 우연히 만나다",
    summary: "산책 중 우연히 들리는 마당극 가락처럼, 지형 레벨을 순환하며 일상 속에서 민속 예술을 향유하는 열린 문화 쉼터.",
    description: [
      "어디선가 시작된 지 모를 계곡의 물이 우연히 길을 만들고 저수지에 모여 머물다 흘러가듯, 대지 레벨을 이용한 순환되는 보행 동선으로 사람들은 공원 산책 중 우연히 발견한 이곳에서 휴식하며 머물다 흥겨운 악기 소리와 몇 마디 가락을 듣습니다.",
      "생소하지만 어딘가 익숙한 마당극의 연습을 보거나 들으며 자연스럽게 체험의 기회를 높입니다. 일상 속에서 민속 예술을 접하고 뜻밖의 즐거움을 누릴 수 있는 구덕 민속예술관은 우리 곁의 친근한 쉼터로 자리 잡습니다."
    ]
  },
  {
    id: "yeoncheon-senior-center",
    titleKo: "연천군 노인회관",
    titleEn: "Yeoncheon Senior Welfare Center",
    category: "PUBLIC",
    categoryLabel: "노유자시설 · 복지건축",
    year: "2023",
    location: "경기도 연천군 연천읍 옥산리 807-17번지 외 4필지",
    thumbnail: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
    ],
    isMockupImage: true,
    imageNotice: "※ 시안용 연출 이미지 (실데이터 반영 가능)",
    drawings: [
      {
        title: "배치 및 소통마당 계획도",
        url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
        caption: "연천 읍내로부터 이어지는 오래된 노루 길을 맞이하는 열린 소통마당"
      }
    ],
    spec: {
      location: "경기도 연천군 연천읍 옥산리 807-17번지 외 4필지",
      use: "노유자시설 (노인복지시설)",
      grossArea: "781.05 ㎡ (약 236평)",
      scale: "지상 2층",
      principalArchitect: "이슬기 대표 건축사, 이대호 이사",
      team: "노랑달건축사사무소 설계팀",
      awardOrStatus: "공식 프로젝트 아카이브"
    },
    conceptTitle: "도시와 '공유'하고 주민과 '소통'하며 노인들을 '연결'하는 복지공간",
    summary: "남북 지형 축과 인근 복지관과의 연계를 극대화하고, 안전한 열린 마당으로 전 세대를 포용하는 따뜻한 복지 공간.",
    description: [
      "남북방향으로 길쭉한 지형 축에 인근 노인복지관과의 시설연계 축을 따라 건물을 배치하고, 자연스럽게 형성된 다양한 외부공간은 주변 현황을 섬세하게 받아들여 영역을 설정하였습니다.",
      "자연스럽게 열린 소통마당은 대지의 접한 위계가 낮은 도로를 향해 안전하게 위치해 연천 읍내로부터 진입하는 오래된 노루 길을 맞이하며, 모두가 공유하는 복지 공간으로서 정면성과 인지성을 확보하였습니다."
    ]
  },
  {
    id: "daybreak-cafe-lobby",
    titleKo: "Daybreak Cafe (공공 로비 환경개선)",
    titleEn: "Daybreak Cafe & Public Lobby Renovation",
    category: "RENOVATION",
    categoryLabel: "공공업무시설 · 공간환경개선",
    year: "2024",
    location: "경기도 수원시",
    thumbnail: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1600&auto=format&fit=crop"
    ],
    isMockupImage: true,
    imageNotice: "※ 시안용 연출 이미지 (실데이터 반영 가능)",
    drawings: [
      {
        title: "로비 환경개선 면적 구성도",
        url: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format&fit=crop",
        caption: "격자형 노출 구조에 따뜻한 면적 요소를 부여하여 안정감 있는 카페 라운지 조성"
      }
    ],
    spec: {
      location: "경기도 수원시",
      use: "공공업무시설 (로비 일부 리노베이션)",
      grossArea: "90.00 ㎡ (약 27평)",
      scale: "지상 1층 (로비 일부)",
      principalArchitect: "이슬기 대표 건축사, 이대호 이사",
      team: "노랑달건축사사무소 설계팀",
      awardOrStatus: "공식 프로젝트 아카이브"
    },
    conceptTitle: "일출을 맞이하며 하루의 시작을 알리는 'Daybreak Cafe'",
    summary: "노출 격자 구조로 다소 삭막했던 공공 로비에 일출의 온기와 휴게성을 더한 첫 번째 공간 환경개선 프로젝트.",
    description: [
      "1층 로비는 증축을 고려하여 구조물을 노출해 디자인된 형태로 격자형 구조물들로 사면이 둘러싸여 있어 다소 삭막한 분위기를 연출하고 있었습니다.",
      "이를 보완하기 위한 첫 번째 환경개선 프로젝트로 ”다시 또 시작“을 알리는 일출의 의미를 부여한 Daybreak Cafe를 제안하여 격자형 공간의 면적인 요소를 부여하여 안정감을 부여하고 이용자들의 활용성을 극대화할 수 있는 휴게형 카페 공간 조성으로 새로운 이미지를 부여하였습니다."
    ]
  },
  {
    id: "parking-facility-expansion",
    titleKo: "친환경 주차시설 증축",
    titleEn: "Eco-friendly Parking Facility Expansion",
    category: "PUBLIC",
    categoryLabel: "부설주차장 · 도시인프라",
    year: "2024",
    location: "경기도 첨단도시계획시설 부지",
    thumbnail: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1600&auto=format&fit=crop"
    ],
    isMockupImage: true,
    imageNotice: "※ 시안용 연출 이미지 (실데이터 반영 가능)",
    drawings: [
      {
        title: "입면 루버 및 공원 연계 데크 개념도",
        url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
        caption: "기존 건축물의 입면 비례를 계승하며 보행자 녹지 휴게 동선을 결합"
      }
    ],
    spec: {
      location: "경기도",
      use: "자동차관련시설 - 부설주차장",
      grossArea: "9,644.17 ㎡ (약 2,917평)",
      scale: "지상 5층",
      principalArchitect: "이슬기 대표 건축사, 이대호 이사",
      team: "노랑달건축사사무소 설계팀",
      awardOrStatus: "공식 프로젝트 아카이브"
    },
    conceptTitle: "기존 건축물과 조화되는 친환경 주차장",
    summary: "연구시설 단지의 주차난을 해소하고 인근 공원과 보행 동선을 연결하는 휴게 데크를 결합한 친환경 주차시설.",
    description: [
      "연구시설이 모여있는 도시계획시설 단지 내 주차용도로 사용 중인 부지에 주차시설 증축을 검토한 프로젝트입니다.",
      "단지 내 주차난을 해소하고 인근 공원시설과 보행동선을 연결하는 휴게시설도 함께 제안합니다. 대상 부지의 부속 건축물로서 기존 건축물의 입면 및 형태 요소를 반영하여 조화를 이루고, 주차뿐만 아니라 휴게공간의 역할을 담당하기 위해 친환경적인 요소를 적극 활용하였습니다."
    ]
  }
];

export const STUDIO_INFO = {
  nameKo: "노랑달건축사사무소",
  nameEn: "NORANGDAL ARCHITECTS",
  businessNumber: "586-14-02305",
  officialUrl: "http://norangdal.co.kr",
  address: "서울특별시 송파구 백제고분로 446, 3층 3076호 (송암빌딩)",
  tel: "02-402-2646",
  mobile: "010-9110-3161",
  email: "norangdal50@naver.com",
  blogUrl: "https://blog.naver.com/norangdal50",
  instagramUrl: "https://www.instagram.com/norangdal_architects",
  
  // Authentic Core Identity
  brandStoryHeadline: "옐로우페이퍼 위에 소원을 그리는 남매 건축가",
  brandStorySub: "Yellow Paper & The Moon",
  statement: "옐로우페이퍼 위에 소원하는 바를 그리며 기분 좋은 공간을 만들어 가고자 하는 남매 건축가의 바람을 담아 시작하였습니다.",
  
  philosophy: [
    "노랑달건축사사무소는 옐로우페이퍼 위에 소원하는 바를 그리며 기분 좋은 공간을 만들어 가고자 하는 남매 건축가의 바람을 담아 시작하였습니다.",
    "이를 위해 사용자에 대한 이해를 가장 중요시하며, 과정을 즐기고 다른 생각과의 만남을 소중하게 여깁니다. 사용자의 스토리가 기반이 된다면 다양한 접근 방식으로 기분이 좋은 공간을 제시할 수 있다고 믿습니다.",
    "단독주택 및 상가주택 등 소규모 건축물부터 공동주택 및 주상복합까지 건축물의 계획부터 인허가, 실시 및 감리 등 규모별·공정별 15년 이상의 실무경험을 바탕으로, 공공건축물 현상설계, 사전기획, 리모델링 등 다양한 형태의 건축 업무를 성실히 수행하고 있습니다."
  ],

  // Two Principals
  principals: [
    {
      nameKo: "이슬기",
      nameEn: "SEUL GI, LEE",
      role: "대표 / 건축사 (Principal Architect)",
      education: "광운대학교 건축공학과 학사",
      license: "대한건축사협회 (KIRA) 정회원 · 공인건축사",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
      isAuthenticPhoto: false,
      photoNotice: "※ 대표 건축사 프로필 시안 컷 (실제 프로필 사진 교체 반영)",
      affiliations: [
        "한국여성건축가협회 정회원",
        "양주시 공공건축가",
        "2024 서울특별시건축사회 신진건축사위원회 위원",
        "2024 GH (경기주택도시공사) SOS 품질점검단 위원",
        "2023 ~ 현재 노랑달건축사사무소 대표"
      ],
      careerHighlights: [
        "2012 ~ 2019 (주)유타건축사사무소 (UTAA)",
        "2021 ~ 2022 토문건축사사무소",
        "2020 ~ 2021 큐브아키건축사사무소",
        "2012 (주)예공포럼건축사사무소",
        "2008 ~ 2011 (주)유앤디건축사사무소"
      ]
    },
    {
      nameKo: "이대호",
      nameEn: "DAE HO, LEE",
      role: "이사 / Director",
      education: "국립안동대학교 건축공학과 학사",
      license: "대한건축사협회 건설기술인",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
      isAuthenticPhoto: false,
      photoNotice: "※ 이사 프로필 시안 컷 (실제 프로필 사진 교체 반영)",
      affiliations: [
        "대한건축사협회 건설기술인",
        "노랑달건축사사무소 기획·설계 총괄 이사"
      ],
      careerHighlights: [
        "2023 ~ 2024 ㈜공진건축사사무소 [현상설계부 PM / Designer]",
        "  - 외포리 종합어시장 [당선]",
        "  - 중부지방해양경찰청 청사 [당선]",
        "  - 부산대학교 캠퍼스 제6공학관 [당선]",
        "  - 도계복합체육센터 [당선]",
        "  - 송내동 행정복지센터 [당선]",
        "2014 ~ 2021 ㈜마디종합건축사사무소 [기획-설계-인허가-감리]",
        "  - 삼성동 155 근린생활시설, 일산 장항동 파크스테이, 라코지스테이서울 호텔",
        "2009 ~ 2013 ㈜건축사사무소 신도시21 [현상설계 / SOC 턴키]",
        "  - 동대구역 고가 및 역사 확장공사 턴키, 대구도시철도 1호선 명곡역",
        "2008 ~ 2009 삼우종합건축사사무소 [성남시청 및 의회동]"
      ]
    }
  ],

  // Specialization Scope
  scopeText: "공공건축물 현상설계 · 사전기획 · 단독 및 상가주택 · 다가구 · 주상복합 · 대수선 리모델링",
  positioning: "단독주택 · 다가구 · 상가주택 · 주상복합 & 공공건축 현상설계 전문 아틀리에",

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
