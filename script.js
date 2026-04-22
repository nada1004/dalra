/* ══ 문제 뱅크 ══ */
const BANK_TRUE=[
["지구의 자전 방향은 서쪽에서 동쪽이다",true,"🔬과학"],
["달은 지구의 위성이다",true,"🔬과학"],
["혜성은 태양에 가까워질수록 꼬리가 길어진다",true,"🔬과학"],
["태양의 표면 온도는 약 6000℃이다",true,"🔬과학"],
["지구의 내부는 핵·맨틀·지각으로 이루어진다",true,"🔬과학"],
["빛의 속도는 초속 약 30만km이다",true,"🔬과학"],
["현미경은 작은 물체를 크게 보이게 하는 도구이다",true,"🔬과학"],
["온도계는 물체의 온도를 측정하는 도구이다",true,"🔬과학"],
["밀도는 단위 부피당 질량이다",true,"🔬과학"],
["물질은 고체·액체·기체 세 가지 상태로 존재한다",true,"🔬과학"],
["산과 염기가 만나면 중화 반응이 일어난다",true,"🔬과학"],
["드라이아이스는 이산화탄소의 고체 상태이다",true,"🔬과학"],
["연소가 일어나려면 산소가 필요하다",true,"🔬과학"],
["철은 자석에 붙는 금속이다",true,"🔬과학"],
["구리는 전기가 잘 통하는 금속이다",true,"🔬과학"],
["합금은 두 가지 이상의 금속을 섞어 만든 것이다",true,"🔬과학"],
["태양풍은 태양에서 방출되는 입자의 흐름이다",true,"🔬과학"],
["북극성은 항상 북쪽 하늘에 보인다",true,"🔬과학"],
["달의 위상은 약 한 달을 주기로 변한다",true,"🔬과학"],
["일식은 달이 태양을 가릴 때 생긴다",true,"🔬과학"],
["월식은 지구의 그림자가 달을 가릴 때 생긴다",true,"🔬과학"],
["진도는 지진으로 인한 피해 정도를 나타낸다",true,"🔬과학"],
["규모는 지진의 절대적 에너지 크기를 나타낸다",true,"🔬과학"],
["침식은 물이나 바람이 암석을 깎는 현상이다",true,"🔬과학"],
["퇴적은 운반된 물질이 쌓이는 현상이다",true,"🔬과학"],
["삼각형의 세 각의 합은 항상 180도이다",true,"📐수학"],
["소수점 이하 자릿수가 유한한 소수를 유한소수라 한다",true,"📐수학"],
["두 수의 공약수 중 가장 큰 수를 최대공약수라 한다",true,"📐수학"],
["두 수의 공배수 중 가장 작은 수를 최소공배수라 한다",true,"📐수학"],
["음수와 양수를 합한 개념이 정수이다",true,"📐수학"],
["절댓값은 수직선에서 원점까지의 거리이다",true,"📐수학"],
["직육면체의 부피는 가로×세로×높이이다",true,"📐수학"],
["원기둥의 부피는 밑면의 넓이×높이이다",true,"📐수학"],
["피타고라스 정리는 직각삼각형에 성립한다",true,"📐수학"],
["비율은 기준량에 대한 비교하는 양의 값이다",true,"📐수학"],
["백분율은 기준량을 100으로 할 때의 비율이다",true,"📐수학"],
["경우의 수는 어떤 일이 일어날 수 있는 모든 가짓수이다",true,"📐수학"],
["좌표는 점의 위치를 숫자로 나타낸 것이다",true,"📐수학"],
["함수는 입력값마다 하나의 출력값을 갖는다",true,"📐수학"],
["대한민국의 면적은 약 10만km²이다",true,"🗺️사회"],
["서울의 인구는 약 950만 명이다",true,"🗺️사회"],
["한반도의 길이는 남북으로 약 1000km이다",true,"🗺️사회"],
["동해는 한반도의 동쪽에 있는 바다이다",true,"🗺️사회"],
["서해는 한반도의 서쪽에 있는 바다이다",true,"🗺️사회"],
["남해는 한반도의 남쪽에 있는 바다이다",true,"🗺️사회"],
["한국의 행정구역은 특별시·광역시·도 등으로 나뉜다",true,"🗺️사회"],
["강원도에는 설악산이 있다",true,"🗺️사회"],
["경주는 신라의 옛 수도이다",true,"🗺️사회"],
["전주는 전라북도의 도청 소재지이다",true,"🗺️사회"],
["제주도는 대한민국에서 가장 큰 섬이다",true,"🗺️사회"],
["독일의 수도는 베를린이다",true,"🗺️사회"],
["스페인의 수도는 마드리드이다",true,"🗺️사회"],
["호주의 수도는 캔버라이다",true,"🗺️사회"],
["브라질의 수도는 브라질리아이다",true,"🗺️사회"],
["인도의 수도는 뉴델리이다",true,"🗺️사회"],
["캐나다의 수도는 오타와이다",true,"🗺️사회"],
["멕시코의 수도는 멕시코시티이다",true,"🗺️사회"],
["이집트에는 피라미드가 있다",true,"🗺️사회"],
["그리스는 민주주의의 발상지이다",true,"🗺️사회"],
["로마는 이탈리아의 수도이다",true,"🗺️사회"],
["조선 후기에 실학이 발달했다",true,"📜역사"],
["갑오개혁은 1894년에 일어났다",true,"📜역사"],
["대한제국은 1897년에 선포되었다",true,"📜역사"],
["을사늑약은 1905년에 체결되었다",true,"📜역사"],
["한일병합은 1910년에 이루어졌다",true,"📜역사"],
["윤봉길 의사는 상하이 홍커우 공원에서 의거를 일으켰다",true,"📜역사"],
["신사임당은 조선시대 여류 예술가이다",true,"📜역사"],
["홍길동전은 조선시대 허균이 쓴 소설이다",true,"📜역사"],
["판소리는 한국의 전통 공연 예술이다",true,"📜역사"],
["태조 왕건은 고려를 세우고 후삼국을 통일했다",true,"📜역사"],
["고구려는 광개토대왕 때 영토가 가장 넓었다",true,"📜역사"],
["백제의 수도는 한성·웅진·사비로 변했다",true,"📜역사"],
["신라는 삼국 중 불교를 가장 늦게 받아들였다",true,"📜역사"],
["고려시대 금속활자는 세계 최초이다",true,"📜역사"],
["조선왕조실록은 유네스코 세계기록유산이다",true,"📜역사"],
["한글 맞춤법에서 띄어쓰기는 단어 단위로 한다",true,"✏️국어"],
["문장 부호 중 마침표는 문장의 끝에 쓴다",true,"✏️국어"],
["높임말은 상대방을 존중할 때 사용한다",true,"✏️국어"],
["비유법에는 직유·은유·의인법 등이 있다",true,"✏️국어"],
["글의 주제는 글 전체를 통해 전달하려는 중심 생각이다",true,"✏️국어"],
["독서 후 요약하기는 글의 내용을 이해하는 데 도움이 된다",true,"✏️국어"],
["토론은 서로 다른 주장을 논리적으로 펼치는 말하기이다",true,"✏️국어"],
["발표할 때는 청중을 바라보며 또렷하게 말해야 한다",true,"✏️국어"],
["cow의 뜻은 암소이다",true,"🔤영어"],
["horse의 뜻은 말이다",true,"🔤영어"],
["tree의 뜻은 나무이다",true,"🔤영어"],
["flower의 뜻은 꽃이다",true,"🔤영어"],
["sun의 뜻은 태양이다",true,"🔤영어"],
["moon의 뜻은 달이다",true,"🔤영어"],
["sky의 뜻은 하늘이다",true,"🔤영어"],
["rain의 뜻은 비이다",true,"🔤영어"],
["happy의 뜻은 행복한이다",true,"🔤영어"],
["sad의 뜻은 슬픈이다",true,"🔤영어"],
["big의 반의어는 small이다",true,"🔤영어"],
["hot의 반의어는 cold이다",true,"🔤영어"],
["fast의 반의어는 slow이다",true,"🔤영어"],
["I am은 '나는 ~이다'라는 뜻이다",true,"🔤영어"],
["She has는 '그녀는 ~을 가지고 있다'는 뜻이다",true,"🔤영어"],
["교향악단은 많은 악기로 이루어진 대규모 연주 단체이다",true,"🎵예술"],
["오페라는 음악과 연기가 결합된 공연 예술이다",true,"🎵예술"],
["발레는 음악에 맞추어 춤을 추는 무용 예술이다",true,"🎵예술"],
["현악 사중주는 바이올린 2, 비올라 1, 첼로 1로 구성된다",true,"🎵예술"],
["서양 음악에서 온음계는 도레미파솔라시로 이루어진다",true,"🎵예술"],
["고흐는 해바라기 그림으로 유명하다",true,"🎵예술"],
["모네는 인상주의 화가이다",true,"🎵예술"],
["미켈란젤로는 시스티나 성당 천장화를 그렸다",true,"🎵예술"],
["조각은 3차원 입체 예술이다",true,"🎵예술"],
["색의 3요소는 색상·명도·채도이다",true,"🎵예술"],
["올림픽 개최지는 4년마다 바뀐다",true,"⚽체육"],
["패럴림픽은 장애인을 위한 올림픽이다",true,"⚽체육"],
["수영 자유형에서는 어떤 영법이든 사용할 수 있다",true,"⚽체육"],
["탁구는 실내 스포츠이다",true,"⚽체육"],
["핸드볼은 한 팀이 7명이다",true,"⚽체육"],
["사이클은 자전거를 타고 경기하는 스포츠이다",true,"⚽체육"],
["체조는 균형과 유연성이 중요한 스포츠이다",true,"⚽체육"],
["근육은 수축과 이완으로 신체를 움직인다",true,"❤️건강"],
["비타민D는 뼈 건강에 중요한 영양소이다",true,"❤️건강"],
["당뇨병은 혈당이 비정상적으로 높은 질환이다",true,"❤️건강"],
["혈압은 혈관 벽에 가해지는 혈액의 압력이다",true,"❤️건강"],
["면역 시스템은 외부 세균과 바이러스로부터 몸을 보호한다",true,"❤️건강"],
["체온은 약 36.5℃가 정상이다",true,"❤️건강"],
["운동 후에는 충분한 수분을 보충해야 한다",true,"❤️건강"],
["탄수화물은 우리 몸의 주요 에너지원이다",true,"❤️건강"],
["단백질은 근육을 만드는 데 필요하다",true,"❤️건강"],
["지방은 에너지를 저장하고 장기를 보호한다",true,"❤️건강"],
["해양 플라스틱은 해양 생태계를 위협한다",true,"🌱환경"],
["생태계는 생물과 환경이 상호작용하는 시스템이다",true,"🌱환경"],
["멸종위기종은 법으로 보호받는다",true,"🌱환경"],
["탄소 발자국은 개인이 배출하는 이산화탄소의 양이다",true,"🌱환경"],
["분리수거는 쓰레기를 줄이는 효과적인 방법이다",true,"🌱환경"],
["USB는 컴퓨터와 기기를 연결하는 규격이다",true,"💻기술"],
["와이파이는 무선 인터넷 연결 기술이다",true,"💻기술"],
["블루투스는 근거리 무선 통신 기술이다",true,"💻기술"],
["클라우드는 인터넷을 통해 데이터를 저장하는 기술이다",true,"💻기술"],
["해킹은 타인의 컴퓨터에 무단으로 침입하는 행위이다",true,"💻기술"],
["QR코드는 스마트폰으로 읽을 수 있는 2차원 코드이다",true,"💻기술"],
["3D 프린터는 3차원 물체를 인쇄할 수 있는 기기이다",true,"💻기술"],
["드론은 조종사 없이 비행하는 무인 항공기이다",true,"💻기술"],
["치즈는 우유를 발효시켜 만든 식품이다",true,"🍱음식"],
["요구르트는 유산균으로 발효한 유제품이다",true,"🍱음식"],
["빵은 밀가루를 주재료로 만든다",true,"🍱음식"],
["된장찌개는 된장을 주재료로 한 한국 음식이다",true,"🍱음식"],
["냉면은 메밀이나 감자전분으로 만든 면 요리이다",true,"🍱음식"],
["비빔밥은 밥에 여러 나물과 고추장을 넣고 비빈 음식이다",true,"🍱음식"],
["불고기는 양념한 쇠고기를 구운 한국 음식이다",true,"🍱음식"],
["삼겹살은 돼지 뱃살 부위이다",true,"🍱음식"],
["참치는 바다에서 잡히는 생선이다",true,"🍱음식"],
["고등어는 등이 파란 무늬인 생선이다",true,"🍱음식"],
["지구는 태양에서 세 번째 행성이다",true,"🔬과학"],
["태양계에는 8개의 행성이 있다",true,"🔬과학"],
["수성은 태양과 가장 가까운 행성이다",true,"🔬과학"],
["해왕성은 태양계 행성 중 가장 바깥쪽에 있다",true,"🔬과학"],
["중력은 질량이 있는 물체 사이에 작용하는 힘이다",true,"🔬과학"],
["뉴턴은 만유인력의 법칙을 발견했다",true,"🔬과학"],
["용수철은 탄성력을 이용한 도구이다",true,"🔬과학"],
["빛은 직진한다",true,"🔬과학"],
["렌즈를 통해 빛은 굴절한다",true,"🔬과학"],
["거울은 빛을 반사시킨다",true,"🔬과학"],
["소금은 나트륨과 염소로 이루어진 화합물이다",true,"🔬과학"],
["이산화탄소는 탄소와 산소로 이루어진다",true,"🔬과학"],
["광물은 자연에서 만들어진 무기물이다",true,"🔬과학"],
["암석은 하나 이상의 광물로 이루어진다",true,"🔬과학"],
["화성암은 마그마가 식어서 만들어진다",true,"🔬과학"],
["퇴적암은 퇴적물이 쌓여 굳어진 암석이다",true,"🔬과학"],
["변성암은 열과 압력을 받아 변한 암석이다",true,"🔬과학"],
["플라스틱은 석유에서 만들어진다",true,"🔬과학"],
["고무는 탄성이 뛰어난 소재이다",true,"🔬과학"],
["전기회로에서 전류는 (+)극에서 (-)극으로 흐른다",true,"🔬과학"],
["직렬연결에서 전구 하나가 꺼지면 나머지도 꺼진다",true,"🔬과학"],
["병렬연결에서 전구 하나가 꺼져도 나머지는 켜진다",true,"🔬과학"],
["자연수는 1부터 시작하는 양의 정수이다",true,"📐수학"],
["분모가 같은 분수끼리는 바로 더하고 뺄 수 있다",true,"📐수학"],
["곱셈은 덧셈을 반복한 것이다",true,"📐수학"],
["나눗셈은 뺄셈을 반복한 것이다",true,"📐수학"],
["음수끼리 곱하면 양수가 된다",true,"📐수학"],
["지름은 반지름의 2배이다",true,"📐수학"],
["둘레는 도형의 바깥 선 길이의 합이다",true,"📐수학"],
["소인수분해는 자연수를 소수의 곱으로 나타내는 것이다",true,"📐수학"],
["대한민국 국기는 태극기이다",true,"🗺️사회"],
["대한민국 국가는 애국가이다",true,"🗺️사회"],
["대한민국 정부 형태는 민주공화국이다",true,"🗺️사회"],
["국회는 법률을 만드는 입법 기관이다",true,"🗺️사회"],
["법원은 법을 해석하고 판결하는 사법 기관이다",true,"🗺️사회"],
["정부는 법률을 집행하는 행정 기관이다",true,"🗺️사회"],
["헌법은 대한민국 최고의 법이다",true,"🗺️사회"],
["세금은 국가 운영에 필요한 재원이다",true,"🗺️사회"],
["주민등록증은 만 17세부터 발급받을 수 있다",true,"🗺️사회"],
["선거는 국민이 대표를 직접 뽑는 제도이다",true,"🗺️사회"],
["과거제는 고려시대 때 시작되었다",true,"📜역사"],
["팔만대장경은 고려시대에 만들어졌다",true,"📜역사"],
["임진왜란 때 의병이 활약했다",true,"📜역사"],
["조선시대 신분제도는 양반·중인·상민·천민으로 나뉘었다",true,"📜역사"],
["동학농민운동은 1894년에 일어났다",true,"📜역사"],
["한국전쟁 정전협정은 1953년에 체결되었다",true,"📜역사"],
["4.19 혁명은 이승만 정부에 대한 저항이었다",true,"📜역사"],
["새마을운동은 1970년대에 시작된 농촌 근대화 운동이다",true,"📜역사"],
["1988년 서울 올림픽이 열렸다",true,"📜역사"],
["2002년 한일 월드컵에서 한국은 4강에 올랐다",true,"📜역사"],
["국어사전에서 단어는 가나다 순으로 정렬된다",true,"✏️국어"],
["동음이의어는 발음은 같지만 뜻이 다른 단어이다",true,"✏️국어"],
["다의어는 하나의 단어가 여러 뜻을 가지는 것이다",true,"✏️국어"],
["관용어는 둘 이상의 단어가 합쳐져 특별한 의미를 갖는 표현이다",true,"✏️국어"],
["높임 표현에는 주체 높임·객체 높임·상대 높임이 있다",true,"✏️국어"],
["명사는 사물이나 사람의 이름을 나타내는 품사이다",true,"✏️국어"],
["동사는 사물의 동작이나 작용을 나타내는 품사이다",true,"✏️국어"],
["형용사는 사물의 성질이나 상태를 나타내는 품사이다",true,"✏️국어"],
["부사는 동사나 형용사를 꾸며주는 품사이다",true,"✏️국어"],
["조사는 앞말과의 문법적 관계를 나타내는 품사이다",true,"✏️국어"],
["pencil의 뜻은 연필이다",true,"🔤영어"],
["eraser의 뜻은 지우개이다",true,"🔤영어"],
["teacher의 뜻은 선생님이다",true,"🔤영어"],
["student의 뜻은 학생이다",true,"🔤영어"],
["hospital의 뜻은 병원이다",true,"🔤영어"],
["library의 뜻은 도서관이다",true,"🔤영어"],
["market의 뜻은 시장이다",true,"🔤영어"],
["yesterday는 '어제'를 뜻한다",true,"🔤영어"],
["tomorrow는 '내일'을 뜻한다",true,"🔤영어"],
["always는 '항상'을 뜻하는 부사이다",true,"🔤영어"],
["한국 전통 악기 거문고는 현악기이다",true,"🎵예술"],
["국악에서 장구는 타악기이다",true,"🎵예술"],
["판소리 다섯 마당에는 춘향가가 포함된다",true,"🎵예술"],
["탈춤은 탈을 쓰고 추는 한국 전통 춤이다",true,"🎵예술"],
["한국화에서는 먹과 한지를 주로 사용한다",true,"🎵예술"],
["도자기는 흙을 구워 만든 공예품이다",true,"🎵예술"],
["박물관은 역사적 유물을 전시하는 곳이다",true,"🎵예술"],
["미술관은 예술 작품을 전시하는 곳이다",true,"🎵예술"],
["월드컵은 4년마다 열린다",true,"⚽체육"],
["야구에서 홈런은 공이 펜스 밖으로 나가는 것이다",true,"⚽체육"],
["농구에서 3점 슛 라인 밖에서 넣으면 3점이다",true,"⚽체육"],
["배구에서 서브는 경기 시작 때 치는 공이다",true,"⚽체육"],
["태권도 유단자는 검은 띠를 맨다",true,"⚽체육"],
["육상 100m 세계 신기록은 9초대이다",true,"⚽체육"],
["체질량지수(BMI)는 체중을 키의 제곱으로 나눈 값이다",true,"❤️건강"],
["인슐린은 혈당을 조절하는 호르몬이다",true,"❤️건강"],
["알레르기는 면역 과잉 반응으로 생긴다",true,"❤️건강"],
["충분한 수면은 면역력 향상에 도움이 된다",true,"❤️건강"],
["자외선은 피부암의 원인이 될 수 있다",true,"❤️건강"],
["음식물은 소장에서 대부분 흡수된다",true,"❤️건강"],
["GPS는 위성을 이용한 위치 측정 시스템이다",true,"💻기술"],
["인터넷 주소(URL)는 웹 페이지의 위치를 나타낸다",true,"💻기술"],
["반도체는 전기가 조건에 따라 통하기도 하고 안 통하기도 하는 물질이다",true,"💻기술"],
["소셜 미디어는 사용자가 콘텐츠를 공유하는 플랫폼이다",true,"💻기술"],
["사이버 불링은 온라인에서 일어나는 괴롭힘이다",true,"💻기술"],
["개인정보 보호는 디지털 시대에 매우 중요하다",true,"💻기술"],
];

const BANK_FALSE=[
["지구의 자전 방향은 동쪽에서 서쪽이다",false,"🔬과학"],
["달은 태양 주위를 직접 돌고 있다",false,"🔬과학"],
["태양의 표면 온도는 약 100℃이다",false,"🔬과학"],
["빛의 속도는 소리보다 느리다",false,"🔬과학"],
["드라이아이스는 수소의 고체 상태이다",false,"🔬과학"],
["연소가 일어나려면 수소가 필요하다",false,"🔬과학"],
["철은 자석에 붙지 않는 금속이다",false,"🔬과학"],
["일식은 달이 지구를 가릴 때 생긴다",false,"🔬과학"],
["월식은 태양의 그림자가 달을 가릴 때 생긴다",false,"🔬과학"],
["산과 염기가 만나면 폭발 반응이 일어난다",false,"🔬과학"],
["물질은 고체와 액체 두 가지 상태만 존재한다",false,"🔬과학"],
["밀도는 단위 질량당 부피이다",false,"🔬과학"],
["북극성은 남쪽 하늘에 항상 보인다",false,"🔬과학"],
["침식은 물질이 쌓이는 현상이다",false,"🔬과학"],
["퇴적은 암석이 깎이는 현상이다",false,"🔬과학"],
["지구의 내부는 핵·대기·지각으로 이루어진다",false,"🔬과학"],
["진도는 지진의 절대적 에너지 크기를 나타낸다",false,"🔬과학"],
["규모는 지진 피해 정도를 나타낸다",false,"🔬과학"],
["두 수의 최대공약수는 두 수의 공배수 중 가장 작은 수이다",false,"📐수학"],
["두 수의 최소공배수는 두 수의 공약수 중 가장 큰 수이다",false,"📐수학"],
["직육면체의 부피는 가로+세로+높이이다",false,"📐수학"],
["피타고라스 정리는 모든 삼각형에 성립한다",false,"📐수학"],
["백분율에서 기준량은 10이다",false,"📐수학"],
["음수는 양수보다 항상 크다",false,"📐수학"],
["절댓값은 항상 음수이다",false,"📐수학"],
["함수는 입력값마다 여러 출력값을 가질 수 있다",false,"📐수학"],
["정사각형은 직사각형이 아니다",false,"📐수학"],
["원기둥의 부피는 밑면의 둘레×높이이다",false,"📐수학"],
["독일의 수도는 뮌헨이다",false,"🗺️사회"],
["스페인의 수도는 바르셀로나이다",false,"🗺️사회"],
["호주의 수도는 시드니이다",false,"🗺️사회"],
["브라질의 수도는 리우데자네이루이다",false,"🗺️사회"],
["인도의 수도는 뭄바이이다",false,"🗺️사회"],
["캐나다의 수도는 토론토이다",false,"🗺️사회"],
["제주도는 전라남도에 속한 섬이다",false,"🗺️사회"],
["동해는 한반도의 서쪽에 있는 바다이다",false,"🗺️사회"],
["경주는 고구려의 옛 수도이다",false,"🗺️사회"],
["강원도에는 한라산이 있다",false,"🗺️사회"],
["이집트에는 자유의 여신상이 있다",false,"🗺️사회"],
["그리스는 로마법의 발상지이다",false,"🗺️사회"],
["갑오개혁은 1904년에 일어났다",false,"📜역사"],
["대한제국은 1907년에 선포되었다",false,"📜역사"],
["을사늑약은 1910년에 체결되었다",false,"📜역사"],
["한일병합은 1919년에 이루어졌다",false,"📜역사"],
["신사임당은 조선시대 여류 무용가이다",false,"📜역사"],
["홍길동전은 이황이 쓴 소설이다",false,"📜역사"],
["태조 왕건은 신라를 세우고 삼국을 통일했다",false,"📜역사"],
["고구려는 장수왕 때 영토가 가장 넓었다",false,"📜역사"],
["고려시대 목판활자는 세계 최초이다",false,"📜역사"],
["조선왕조실록은 이순신이 저술했다",false,"📜역사"],
["신라의 수도는 평양이었다",false,"📜역사"],
["백제는 고려에 의해 멸망했다",false,"📜역사"],
["문장 부호 중 쉼표는 문장의 끝에 쓴다",false,"✏️국어"],
["높임말은 어린이에게 사용한다",false,"✏️국어"],
["토론은 같은 주장을 함께 나누는 말하기이다",false,"✏️국어"],
["글의 주제는 글의 제목과 항상 같다",false,"✏️국어"],
["직유법은 '~처럼', '~같이'를 쓰지 않는 비유법이다",false,"✏️국어"],
["발표할 때는 바닥을 바라보며 조용히 말해야 한다",false,"✏️국어"],
["cow의 뜻은 수소이다",false,"🔤영어"],
["horse의 뜻은 양이다",false,"🔤영어"],
["tree의 뜻은 꽃이다",false,"🔤영어"],
["sun의 뜻은 달이다",false,"🔤영어"],
["rain의 뜻은 눈이다",false,"🔤영어"],
["happy의 뜻은 슬픈이다",false,"🔤영어"],
["big의 반의어는 tall이다",false,"🔤영어"],
["hot의 반의어는 warm이다",false,"🔤영어"],
["fast의 반의어는 short이다",false,"🔤영어"],
["She has는 '그녀는 ~이다'라는 뜻이다",false,"🔤영어"],
["I am은 '나는 ~을 가지고 있다'라는 뜻이다",false,"🔤영어"],
["flower의 뜻은 나무이다",false,"🔤영어"],
["sky의 뜻은 바다이다",false,"🔤영어"],
["sad의 뜻은 행복한이다",false,"🔤영어"],
["moon의 뜻은 태양이다",false,"🔤영어"],
["오페라는 음악 없이 연기만 하는 공연이다",false,"🎵예술"],
["발레는 악기를 연주하는 음악 예술이다",false,"🎵예술"],
["서양 음악에서 온음계는 5개 음으로 이루어진다",false,"🎵예술"],
["고흐는 모나리자 그림으로 유명하다",false,"🎵예술"],
["모네는 초현실주의 화가이다",false,"🎵예술"],
["미켈란젤로는 게르니카를 그렸다",false,"🎵예술"],
["색의 3요소는 빨강·파랑·노랑이다",false,"🎵예술"],
["현악 사중주는 피아노 4대로 구성된다",false,"🎵예술"],
["패럴림픽은 비장애인을 위한 올림픽이다",false,"⚽체육"],
["핸드볼은 한 팀이 11명이다",false,"⚽체육"],
["수영 자유형에서는 평영만 허용된다",false,"⚽체육"],
["탁구는 실외 스포츠이다",false,"⚽체육"],
["올림픽 개최지는 2년마다 바뀐다",false,"⚽체육"],
["체온은 약 42℃가 정상이다",false,"❤️건강"],
["탄수화물은 근육을 만드는 데만 쓰인다",false,"❤️건강"],
["단백질은 에너지를 저장하는 영양소이다",false,"❤️건강"],
["지방은 모두 몸에 해로운 영양소이다",false,"❤️건강"],
["비타민D는 시력 건강에 주로 필요하다",false,"❤️건강"],
["혈압은 혈관에서 분비되는 호르몬의 양이다",false,"❤️건강"],
["면역 시스템은 몸의 소화를 담당한다",false,"❤️건강"],
["당뇨병은 혈당이 비정상적으로 낮은 질환이다",false,"❤️건강"],
["탄소 발자국은 개인이 심은 나무의 수를 나타낸다",false,"🌱환경"],
["생태계는 생물만으로 이루어진 시스템이다",false,"🌱환경"],
["분리수거는 쓰레기를 늘리는 방법이다",false,"🌱환경"],
["해양 플라스틱은 해양 생태계에 이롭다",false,"🌱환경"],
["멸종위기종은 자유롭게 사냥해도 된다",false,"🌱환경"],
["와이파이는 유선 인터넷 연결 기술이다",false,"💻기술"],
["블루투스는 장거리 위성 통신 기술이다",false,"💻기술"],
["클라우드는 오프라인에서만 사용 가능한 저장 기술이다",false,"💻기술"],
["해킹은 컴퓨터를 수리하는 합법적인 행위이다",false,"💻기술"],
["QR코드는 1차원 선형 바코드이다",false,"💻기술"],
["3D 프린터는 2차원 평면만 인쇄할 수 있다",false,"💻기술"],
["USB는 음식을 저장하는 용기 규격이다",false,"💻기술"],
["드론은 조종사가 반드시 탑승해야 하는 항공기이다",false,"💻기술"],
["치즈는 육류를 발효시켜 만든 식품이다",false,"🍱음식"],
["요구르트는 열을 가해 만드는 음료이다",false,"🍱음식"],
["빵은 쌀가루를 주재료로 만든다",false,"🍱음식"],
["냉면은 밀가루로만 만든 면 요리이다",false,"🍱음식"],
["불고기는 돼지 뱃살을 구운 음식이다",false,"🍱음식"],
["삼겹살은 소의 갈비 부위이다",false,"🍱음식"],
["참치는 민물에서 잡히는 생선이다",false,"🍱음식"],
["고등어는 등이 붉고 화려한 무늬인 생선이다",false,"🍱음식"],
["된장찌개는 고추장을 주재료로 한 음식이다",false,"🍱음식"],
["비빔밥은 면에 여러 재료를 넣어 만든 음식이다",false,"🍱음식"],
["코끼리는 육식 동물이다",false,"🐾동물"],
["기린의 목이 긴 이유는 하늘을 날기 위해서이다",false,"🐾동물"],
["코알라는 대나무를 주로 먹는다",false,"🐾동물"],
["판다는 육식성 동물이다",false,"🐾동물"],
["카멜레온은 천적을 공격하기 위해 색을 바꾼다",false,"🐾동물"],
["돌고래는 지능이 낮은 어류이다",false,"🐾동물"],
["상어는 뼈로 이루어진 경골어류이다",false,"🐾동물"],
["꿀벌은 원형 춤으로 꿀의 위치를 알린다",false,"🐾동물"],
["연어는 바다에서 태어나 강으로 이동한다",false,"🐾동물"],
["독수리는 채식성 조류이다",false,"🐾동물"],
["태양계에는 10개의 행성이 있다",false,"🔬과학"],
["수성은 태양계에서 가장 큰 행성이다",false,"🔬과학"],
["해왕성은 태양에서 가장 가까운 행성이다",false,"🔬과학"],
["중력은 전하를 가진 물체 사이에만 작용한다",false,"🔬과학"],
["뉴턴은 상대성 이론을 발견했다",false,"🔬과학"],
["빛은 곡선으로 나아간다",false,"🔬과학"],
["렌즈를 통해 빛은 반사된다",false,"🔬과학"],
["거울은 빛을 굴절시킨다",false,"🔬과학"],
["직렬연결에서 전구 하나가 꺼져도 나머지는 켜진다",false,"🔬과학"],
["병렬연결에서 전구 하나가 꺼지면 나머지도 꺼진다",false,"🔬과학"],
["화성암은 퇴적물이 굳어진 암석이다",false,"🔬과학"],
["퇴적암은 마그마가 식어서 만들어진다",false,"🔬과학"],
["변성암은 마그마가 분출하면서 만들어진다",false,"🔬과학"],
["플라스틱은 나무에서 만들어진다",false,"🔬과학"],
["소금은 산소와 수소로 이루어진 화합물이다",false,"🔬과학"],
["이산화탄소는 수소와 질소로 이루어진다",false,"🔬과학"],
["전기회로에서 전류는 (-)극에서 (+)극으로 흐른다",false,"🔬과학"],
["음수끼리 곱하면 음수가 된다",false,"📐수학"],
["지름은 반지름의 3배이다",false,"📐수학"],
["소인수분해는 자연수를 합성수의 합으로 나타내는 것이다",false,"📐수학"],
["분모가 다른 분수끼리는 바로 더하고 뺄 수 있다",false,"📐수학"],
["곱셈은 나눗셈을 반복한 것이다",false,"📐수학"],
["둘레는 도형 내부의 넓이이다",false,"📐수학"],
["자연수는 0부터 시작하는 정수이다",false,"📐수학"],
["대한민국 국기는 오륜기이다",false,"🗺️사회"],
["국회는 법률을 해석하는 사법 기관이다",false,"🗺️사회"],
["법원은 법률을 만드는 입법 기관이다",false,"🗺️사회"],
["정부는 법률을 만드는 입법 기관이다",false,"🗺️사회"],
["헌법은 대한민국에서 가장 낮은 단계의 법이다",false,"🗺️사회"],
["주민등록증은 만 14세부터 발급받을 수 있다",false,"🗺️사회"],
["세금은 자발적으로 내는 기부금이다",false,"🗺️사회"],
["과거제는 조선시대 때 처음 시작되었다",false,"📜역사"],
["팔만대장경은 조선시대에 만들어졌다",false,"📜역사"],
["동학농민운동은 1904년에 일어났다",false,"📜역사"],
["한국전쟁 정전협정은 1945년에 체결되었다",false,"📜역사"],
["4.19 혁명은 박정희 정부에 대한 저항이었다",false,"📜역사"],
["새마을운동은 1990년대에 시작된 운동이다",false,"📜역사"],
["1988년 부산 올림픽이 열렸다",false,"📜역사"],
["2002년 한일 월드컵에서 한국은 우승했다",false,"📜역사"],
["조선시대 신분제도는 왕족·귀족·평민으로 나뉘었다",false,"📜역사"],
["임진왜란은 명나라의 침략으로 시작되었다",false,"📜역사"],
["동음이의어는 발음과 뜻이 모두 같은 단어이다",false,"✏️국어"],
["다의어는 여러 단어가 하나의 뜻을 공유하는 것이다",false,"✏️국어"],
["명사는 사물의 동작을 나타내는 품사이다",false,"✏️국어"],
["동사는 사물의 성질을 나타내는 품사이다",false,"✏️국어"],
["형용사는 다른 형용사를 꾸며주는 품사이다",false,"✏️국어"],
["부사는 명사를 꾸며주는 품사이다",false,"✏️국어"],
["국어사전에서 단어는 획수 순으로 정렬된다",false,"✏️국어"],
["관용어는 모든 단어를 글자 그대로 해석해야 한다",false,"✏️국어"],
["pencil의 뜻은 볼펜이다",false,"🔤영어"],
["eraser의 뜻은 연필이다",false,"🔤영어"],
["teacher의 뜻은 학생이다",false,"🔤영어"],
["student의 뜻은 선생님이다",false,"🔤영어"],
["hospital의 뜻은 학교이다",false,"🔤영어"],
["library의 뜻은 서점이다",false,"🔤영어"],
["market의 뜻은 공원이다",false,"🔤영어"],
["yesterday는 '내일'을 뜻한다",false,"🔤영어"],
["tomorrow는 '어제'를 뜻한다",false,"🔤영어"],
["always는 '절대로'를 뜻하는 부사이다",false,"🔤영어"],
["거문고는 타악기이다",false,"🎵예술"],
["장구는 현악기이다",false,"🎵예술"],
["탈춤은 탈을 쓰지 않고 추는 현대 무용이다",false,"🎵예술"],
["판소리는 서양에서 유래한 음악 장르이다",false,"🎵예술"],
["도자기는 나무를 깎아 만든 공예품이다",false,"🎵예술"],
["한국화에서는 유화물감을 주로 사용한다",false,"🎵예술"],
["박물관은 예술 작품만을 전시하는 곳이다",false,"🎵예술"],
["미술관은 역사적 유물을 전시하는 곳이다",false,"🎵예술"],
["월드컵은 2년마다 열린다",false,"⚽체육"],
["야구에서 홈런은 공을 땅에 굴리는 것이다",false,"⚽체육"],
["농구에서 3점 슛 라인 안에서 넣으면 3점이다",false,"⚽체육"],
["태권도 유단자는 흰 띠를 맨다",false,"⚽체육"],
["체질량지수(BMI)는 체중을 키로 나눈 값이다",false,"❤️건강"],
["인슐린은 혈압을 조절하는 호르몬이다",false,"❤️건강"],
["알레르기는 면역이 전혀 없어서 생긴다",false,"❤️건강"],
["음식물은 대장에서 대부분 흡수된다",false,"❤️건강"],
["자외선은 피부에 항상 이롭다",false,"❤️건강"],
["충분한 수면은 건강에 나쁜 영향을 미친다",false,"❤️건강"],
["GPS는 지하 케이블을 이용한 위치 측정 시스템이다",false,"💻기술"],
["반도체는 항상 전기가 통하는 물질이다",false,"💻기술"],
["사이버 불링은 오프라인에서만 일어나는 괴롭힘이다",false,"💻기술"],
["소셜 미디어는 사용자가 콘텐츠를 공유할 수 없는 플랫폼이다",false,"💻기술"],
["개인정보는 누구에게나 자유롭게 공유해도 된다",false,"💻기술"],
["인터넷 주소(URL)는 파일 크기를 나타낸다",false,"💻기술"],
];

/* ══ 상수 ══ */
const MAX_LIVES=3, TIME=15, RANK_KEY='cgSchoolRank', WRONG_KEY='cgSchoolWrong', CAT_STATS_KEY='cgSchoolCatStats', BEST_COMBO_KEY='cgSchoolBestCombo', CUSTOM_QS_KEY='cgCustomQs', FONT_SIZE_KEY='cgFontSize', DARK_MODE_KEY='cgDarkMode';

/* ══ 설정 상태 ══ */
const CFG={
  selectedCats:null, // null = 전체
  qCount:20,
  qTime:15,
};

/* ══ 상태 ══ */
const S={
  queue:[],idx:0,score:0,combo:0,maxCombo:0,
  correct:0,wrong:0,lives:MAX_LIVES,
  locked:false,gameOver:false,quizStarted:false,
  soundOn:true,timerID:null,timeLeft:TIME,
  catCorrect:{},catWrong:{},
  customQs:[],pickAnsVal:null,destVal:'quiz',
  playerName:'학생',
  studyPool:[],studyIdx:0,studyFilter:null,
  studyMode:'normal',fcFlipped:false,
};

/* ══ DOM 캐시 ══ */
const $=id=>document.getElementById(id);
const EL={
  nameScreen:$('name-screen'),app:$('app'),
  nameInput:$('name-input'),nsStart:$('ns-start'),
  dispName:$('disp-name'),homeName:$('home-name'),homeRankList:$('home-rank-list'),
  gscore:$('gscore'),sc:$('sc'),sw:$('sw'),smx:$('smx'),scur:$('scur'),
  pgf:$('pgf'),ppct:$('ppct'),piv:$('piv'),qnum:$('qnum'),
  board:$('board'),blbl:$('blbl'),qtxt:$('qtxt'),
  fb:$('fb'),gom:$('gom'),lives:$('lives'),combo:$('combo'),
  lvBadge:$('lv-badge'),
  tval:$('tval'),timerFg:$('timer-fg'),sndToggle:$('snd-toggle'),
  hdLives:$('hd-lives'),hdCombo:$('hd-combo'),hdScore:$('hd-score'),
  bo:$('bo'),bx:$('bx'),
  ov:$('ov'),
  rankWrap:$('rank-list-wrap'),statsGrid:$('stats-grid'),catBars:$('cat-bars'),
  makeQ:$('make-q'),makeCat:$('make-cat'),
  pickO:$('pick-o'),pickX:$('pick-x'),
  cqCount:$('cq-count'),cqList:$('custom-list'),
  quizReady:$('quiz-ready'),quizPlaying:$('quiz-playing'),
  sbCat:$('sb-cat'),sbQuestion:$('sb-question'),sbBadge:$('sb-badge'),
  sbAnsText:$('sb-ans-text'),sbAddBtn:$('sb-add-btn'),
  studyProg:$('study-prog'),studyCnt:$('study-cnt'),
  studyFilter:$('study-filter'),studyPrev:$('study-prev'),studyNext:$('study-next'),
  // 성적표
  rcSubtitle:$('rc-subtitle'),rcStampGrade:$('rc-stamp-grade'),
  rcName:$('rc-name'),rcDate:$('rc-date'),
  rcScore:$('rc-score'),rcScoreSub:$('rc-score-sub'),
  rcCorrect:$('rc-correct'),rcWrong:$('rc-wrong'),rcCombo:$('rc-combo'),rcTotal:$('rc-total'),
  rcCommentIcon:$('rc-comment-icon'),rcCommentText:$('rc-comment-text'),
  // 오답 노트
  wnCount:$('wn-count'),wnList:$('wn-list2'),wnRetryBtn:$('wn-retry-btn'),
  // FEVER
  feverOverlay:$('fever-overlay'),feverText:$('fever-text'),
  confettiCanvas:$('confetti-canvas'),
  // 핫패스 캐시 (퀴즈 진행 중 매번 조회되는 요소)
  sbarHearts:$('sbar-hearts'),
  xpFill:$('sbar-xp-fill'),
  xpNext:$('sbar-lv-next'),
  cheerBar:$('quiz-cheer-bar'),
  tabBadgeWrong:$('tab-badge-wrong'),
};

/* ══ 레벨 테이블 (상수) ══ */
const LV_TABLE=[
  [12000,'Lv.8 전설','👑',12000,99999],
  [8000, 'Lv.7 신동','🌟',8000, 12000],
  [5000, 'Lv.6 천재','💎',5000, 8000],
  [3500, 'Lv.5 달인','🏆',3500, 5000],
  [2000, 'Lv.4 고수','🔥',2000, 3500],
  [1000, 'Lv.3 중급','📚',1000, 2000],
  [500,  'Lv.2 견습','🌱',500,  1000],
  [0,    'Lv.1 초보','⭐',0,    500],
];

/* ══ 전체 문제 풀 ══ */
let ALL_QS=[...BANK_TRUE,...BANK_FALSE];

/* ══ localStorage 안전 헬퍼 ══ */
function lsSet(key,val){try{localStorage.setItem(key,typeof val==='string'?val:JSON.stringify(val));}catch(e){}}
function lsGet(key,def){try{return localStorage.getItem(key)??def;}catch(e){return def;}}
function lsGetJSON(key,def){try{const v=localStorage.getItem(key);return v?JSON.parse(v):def;}catch(e){return def;}}

/* ══ XSS 방어 헬퍼 ══ */
function esc(str){
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

/* ══ 상수 정의 ══ */
const MAX_RANKING = 10;
const HOME_RANK_DISPLAY = 5;
const MAX_COMBO_DISPLAY = 10;
const GAME_BEST_KEY = 'game_best_v1';

/* ══ 출석 스탬프 ══ */
const ATT_KEY = 'cgSchoolAttendance';
const DAY_LABELS = ['월','화','수','목','금','토','일'];
const STAMPS = ['⭐','🌟','🔥','💎','🏆','🎉','👑'];

/* ══ 게임 최고기록 ══ */
function updateGameBestDisplay(id, score){
  const el = document.getElementById('gbest-'+id);
  if(el) el.textContent = score > 0 ? '최고 '+score : '최고 -';
}
function loadGameBests(){
  const bests = lsGet(GAME_BEST_KEY, {});
  ['tetris','minesweeper','mole','snake','breakout','typing','pacman','stack','dino','dodge','simon'].forEach(id=>{
    updateGameBestDisplay(id, bests[id]||0);
  });
}
function saveGameBest(id, score){
  if(score<=0) return;
  let bests = lsGet(GAME_BEST_KEY, {});
  if(score > (bests[id]||0)){
    bests[id] = score;
    lsSet(GAME_BEST_KEY, bests);
    updateGameBestDisplay(id, score);
    return true; // 신기록
  }
  return false;
}

function attLoad() {
  return lsGetJSON(ATT_KEY, {});
}
function attGetWeekKey() {
  const now = new Date();
  const day = now.getDay(); // 0=일
  const monday = new Date(now);
  monday.setDate(now.getDate() - ((day + 6) % 7));
  return monday.getFullYear() + '-' + String(monday.getMonth()+1).padStart(2,'0') + '-' + String(monday.getDate()).padStart(2,'0');
}
function attTodayKey() {
  const now = new Date();
  return now.getFullYear() + '-' + String(now.getMonth()+1).padStart(2,'0') + '-' + String(now.getDate()).padStart(2,'0');
}
function attRender() {
  const el = document.getElementById('att-days');
  const msgEl = document.getElementById('att-msg');
  if (!el) return;
  const data = attLoad();
  const weekKey = attGetWeekKey();
  const todayKey = attTodayKey();
  const weekData = data[weekKey] || {};
  // 이번 주 월~일
  const weekStart = new Date(weekKey);
  const days = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(weekStart);
    d.setDate(weekStart.getDate() + i);
    const dk = d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
    days.push({ dk, label: DAY_LABELS[i], done: !!weekData[dk], isToday: dk === todayKey });
  }
  // 오늘 출석 체크
  if (!weekData[todayKey]) {
    if (!data[weekKey]) data[weekKey] = {};
    data[weekKey][todayKey] = true;
    weekData[todayKey] = true;
    lsSet(ATT_KEY, data);
  }
  const doneCount = days.filter(d => d.done || d.isToday).length;
  const msgs = ['오늘도 공부하러 왔어요! ⭐', '이틀 연속 출석! 👍', '3일 출석! 대단해요! 🌟', '4일 출석! 열심히네요! 🔥', '5일 출석! 거의 완벽! 💎', '6일 출석! 놀라워요! 🏆', '7일 개근! 최고예요! 👑'];
  if (msgEl) msgEl.textContent = msgs[Math.min(doneCount - 1, 6)] || msgs[0];
  // 7일 개근 스티커 획득
  if(doneCount===7) stickerEarn('s8');
  // 렌더 (today도 done으로 표시)
  el.innerHTML = days.map((d, i) => {
    const done = d.done || d.isToday;
    return '<div class="att-day">' +
      '<div class="att-day-label">' + d.label + '</div>' +
      '<div class="att-stamp' + (done ? ' done' : '') + '">' +
        (done ? STAMPS[i] : '○') +
      '</div>' +
    '</div>';
  }).join('');
}


function initStudy(){
  // 마지막 필터 유지 (탭 재진입 시)
  const lastFilter = S.studyFilter || null;
  S.studyPool = lastFilter ? ALL_QS.filter(q=>q[2]===lastFilter) : [...ALL_QS];
  S.studyPool.sort(()=>Math.random()-.5);
  S.studyIdx=0;
  renderStudyFilter();
  renderStudyCard();
}
function renderStudyFilter(){
  const cats=[...new Set(ALL_QS.map(q=>q[2]))].sort();
  EL.studyFilter.innerHTML=
    `<button class="sf-btn ${!S.studyFilter?'on':''}" onclick="setStudyFilter(null,this)">전체</button>`+
    cats.map(c=>`<button class="sf-btn ${S.studyFilter===c?'on':''}" onclick="setStudyFilter('${c.replace(/'/g,"\\'")}',this)">${c}</button>`).join('');
}
function setStudyFilter(cat,btn){
  S.studyFilter=cat;
  document.querySelectorAll('.sf-btn').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  S.studyPool=cat?ALL_QS.filter(q=>q[2]===cat):[...ALL_QS];
  S.studyPool.sort(()=>Math.random()-.5);
  S.studyIdx=0;
  renderStudyCard();
}
function setStudyMode(mode){
  S.studyMode=mode;S.fcFlipped=false;
  $('mode-normal').className='smt-btn'+(mode==='normal'?' on':'');
  $('mode-flash').className='smt-btn'+(mode==='flash'?' on':'');
  $('study-normal-view').style.display=mode==='normal'?'flex':'none';
  $('study-flash-view').style.display=mode==='flash'?'flex':'none';
  if(mode==='flash'){const fc=$('flashcard');if(fc)fc.classList.remove('flipped');}
  renderStudyCard();
}
function flipCard(){
  S.fcFlipped=!S.fcFlipped;
  const fc=$('flashcard');
  if(fc) fc.classList.toggle('flipped',S.fcFlipped);
}
function renderStudyCard(){
  const pool=S.studyPool,idx=S.studyIdx,total=pool.length;
  EL.studyProg.textContent=total?(idx+1)+' / '+total:'0 / 0';
  EL.studyCnt.textContent=total?(idx+1)+' / '+total:'0 / 0';
  EL.studyPrev.disabled=(idx===0||!total);
  EL.studyNext.disabled=(idx===total-1||!total);
  if(!total){
    if(S.studyMode==='normal') EL.sbQuestion.textContent='해당 카테고리에 문제가 없어요';
    return;
  }
  const[q,ans,cat]=pool[idx];
  // 일반 모드
  EL.sbCat.textContent=cat||'📚 상식';
  EL.sbQuestion.textContent=q;
  const isO=ans===true;
  EL.sbBadge.textContent=isO?'O':'X';
  EL.sbBadge.className='sb-ans-badge '+(isO?'t':'f');
  EL.sbAnsText.textContent='정답: '+(isO?'O (맞다)':'X (틀리다)');
  const alreadyAdded=S.customQs.some(cq=>cq[0]===q);
  EL.sbAddBtn.textContent=alreadyAdded?'✅ 이미 추가됨':'➕ 내 문제로 추가';
  EL.sbAddBtn.className='sb-add-btn'+(alreadyAdded?' added':'');
  EL.sbAddBtn.disabled=alreadyAdded;
  // 플래시카드 모드
  const fcCat=$('fc-cat'),fcQ=$('fc-question'),fcAns=$('fc-ans-big'),fcLbl=$('fc-ans-label');
  if(fcCat) fcCat.textContent=cat||'📚 상식';
  if(fcQ) fcQ.textContent=q;
  if(fcAns){fcAns.textContent=isO?'O':'X';fcAns.className='fc-ans-big '+(isO?'o':'x');}
  if(fcLbl) fcLbl.textContent=isO?'맞다 (O)':'틀리다 (X)';
  // 카드 뒤집기 초기화
  S.fcFlipped=false;
  const fc=$('flashcard');if(fc) fc.classList.remove('flipped');
}
function studyNav(dir){
  S.studyIdx=Math.max(0,Math.min(S.studyPool.length-1,S.studyIdx+dir));
  renderStudyCard();
}
function addCurrentToCustom(){
  const pool=S.studyPool;
  if(!pool.length)return;
  const[q,ans,cat]=pool[S.studyIdx];
  if(S.customQs.some(cq=>cq[0]===q)){return;}
  S.customQs.push([q,ans,cat,'both']);
  renderStudyCard();
  renderCustomList();
  EL.sbAddBtn.textContent='✅ 추가됐어요!';
}

/* ══ 탭 전환 ══ */
const TABS=['home','school','study','exam','game','media','rankstats','settings'];
function switchTab(name,btn){
  // 퀴즈 진행 중 타이머 일시정지/재개
  if(S.quizStarted && !S.gameOver && name!=='exam'){
    stopTimer(); S._paused=true;
    showToast('⏸ 시험 일시정지 — 시험 탭 돌아오면 재개돼요!',3000);
  }
  if(name==='exam' && S._paused && S.quizStarted && !S.gameOver){
    S._paused=false; startTimer();
    showToast('▶ 시험 재개!',1500);
  }
  // 열려있는 게임화면 닫기 (게임 중이면 확인)
  const activeGame = ['tetris','minesweeper','mole','snake','breakout','typing','pacman','stack','dino','dodge','simon'].find(id=>{
    const g=document.getElementById('game-'+id);
    return g&&g.classList.contains('on');
  });
  if(activeGame){
    cgConfirm('게임이 진행 중이에요!\n나가면 기록이 저장되지 않아요.', ()=>{
      closeGame(activeGame);
      _doSwitchTab(name,btn);
    }, '🎮', '나가기', 'linear-gradient(135deg,#f08030,#ea580c)');
    return;
  }
  _doSwitchTab(name,btn);
}
function _doSwitchTab(name,btn){
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('on'));
  document.querySelectorAll('[role="tab"]').forEach(t=>t.setAttribute('aria-selected','false'));
  if(btn) btn.classList.add('on');
  else{const i=TABS.indexOf(name);if(i>=0)document.querySelectorAll('.tab')[i].classList.add('on');}
  if(btn) btn.setAttribute('aria-selected','true');
  else{const i=TABS.indexOf(name);if(i>=0)document.querySelectorAll('[role="tab"]')[i].setAttribute('aria-selected','true');}
  // 탭 이름 → 패널 ID 매핑
  const panelMap = {
    school:'panel-school', study:'panel-study',
    game:'panel-game',
    media:'panel-media', rankstats:'panel-rankstats', settings:'panel-settings'
  };
  const panelId = panelMap[name] || ('panel-'+name);
  const panel = document.getElementById(panelId);
  if(panel) panel.classList.add('on');
  // 각 탭별 초기화
  if(name==='home'){renderHomeRank && renderHomeRank();attRender && attRender();stickerRender && stickerRender();renderTodayStats && renderTodayStats();}
  if(name==='make'){const lo=document.getElementById('make-lock-overlay');if(lo)lo.style.display=adminIsLogged()?'none':'flex';}
  if(name==='school'){noticeRender && noticeRender();ttRender && ttRender();}
  if(name==='study')initStudyGame && initStudyGame();
  if(name==='game') loadGameBests && loadGameBests();
  if(name==='exam'){
    renderQsCats && renderQsCats();
    updateWrongBtn && updateWrongBtn();
    renderWrongNote && renderWrongNote();
    _updateQPreview && _updateQPreview();
    // 공부하기에서 카테고리 필터 선택했으면 시험도 동기화
    if(S.studyFilter && typeof CFG !== 'undefined'){
      if(!CFG.selectedCats) CFG.selectedCats=[S.studyFilter];
      // 해당 카테고리 버튼 선택 표시
      setTimeout(()=>{
        document.querySelectorAll('.qs-cat-btn').forEach(b=>{
          if(b.dataset.cat===S.studyFilter){
            b.classList.add('on');
            const allBtn=document.querySelector('.qs-cat-btn.all');
            if(allBtn)allBtn.classList.remove('on');
          }
        });
        _updateQPreview && _updateQPreview();
      }, 50);
    }
  }
  if(name==='media')initMedia && initMedia();
  if(name==='rankstats'){renderRank&&renderRank();renderStats&&renderStats();renderReportHistory&&renderReportHistory();}
  if(name==='settings'){
    settingsRender&&settingsRender();
    renderCustomList2&&renderCustomList2();
    const adminTools=document.getElementById('admin-tools-section');
    if(adminTools)adminTools.style.display=adminIsLogged()?'block':'none';
  }
  // 헤더 퀴즈UI: 시험 탭이거나 퀴즈 진행 중일 때만 표시
  const onQuiz=(name==='exam') || (S.quizStarted && !S.gameOver);
  const hdc=$('hd-center'), tr=$('timer-ring');
  if(hdc) hdc.style.display=onQuiz?'flex':'none';
  if(tr)  tr.style.display =onQuiz?'flex':'none';
}

/* ══ 입학/귀가 ══ */
function startGame(){
  try {
    const nm = EL.nameInput.value.trim();
    if (!nm) return;
    S.playerName = nm;
    EL.dispName.textContent = nm;
    EL.homeName.textContent = nm;

    // localStorage에서 사용자 문제 복원
    try {
      const saved = lsGetJSON(CUSTOM_QS_KEY, []);
      if (saved.length) {
        S.customQs = saved;
        saved.forEach(q => { if (!ALL_QS.some(a => a[0] === q[0])) ALL_QS.push(q); });
      }
    } catch (e) { console.warn('Custom questions restore failed:', e); }

    // 화면 전환
    if (EL.nameScreen) EL.nameScreen.style.display = 'none';
    if (EL.app) EL.app.style.display = 'flex';

    // 아바타 이모지 - 이름 첫 글자 기반 배정
    const AVATARS = ['🐰', '🐻', '🦁', '🐸', '🐯', '🐼', '🦊', '🐨', '🐹', '🦉', '🐧', '🦋'];
    const avatarIdx = S.playerName.charCodeAt(0) % AVATARS.length;
    const avatarEl = document.getElementById('sbar-avatar');
    if (avatarEl) avatarEl.textContent = AVATARS[avatarIdx];

    // 하트 초기화 (MAX_LIVES 기반)
    if (EL.sbarHearts) EL.sbarHearts.textContent = '❤️'.repeat(MAX_LIVES);

    // 탭 전환
    const tabs = document.querySelectorAll('.tab');
    if (tabs.length > 0) switchTab('home', tabs[0]);

    // 초기화 함수 호출 (각각 try-catch로 보호)
    try { renderHomeRank(); } catch (e) { console.warn('renderHomeRank failed:', e); }
    try { attRender(); } catch (e) { console.warn('attRender failed:', e); }
    try { initDailyWord(); } catch (e) { console.warn('initDailyWord failed:', e); }
    try { initWelcomeBanner(); } catch (e) { console.warn('initWelcomeBanner failed:', e); }
    try { renderDailyMissions(); } catch (e) { console.warn('renderDailyMissions failed:', e); }
    try { initTodayQuiz(); } catch (e) { console.warn('initTodayQuiz failed:', e); }
    try { stickerRender(); } catch (e) { console.warn('stickerRender failed:', e); }
    try { updateWrongBtn(); } catch (e) { console.warn('updateWrongBtn failed:', e); }
    try { initFontSize(); } catch (e) { console.warn('initFontSize failed:', e); }

    // 입학 환영 메시지
    setTimeout(() => showMascotCheer(S.playerName + '님 환영해요! 오늘도 열심히 해봐요 🎒'), 800);
  } catch (e) {
    console.error('startGame error:', e);
    alert('입학 중 오류가 발생했습니다: ' + e.message);
  }
}
function goHome(){
  stopTimer();EL.ov.classList.remove('on');
  // 퀴즈 상태 완전 초기화
  S.quizStarted=false;S.gameOver=false;S.locked=false;S.idx=0;S.queue=[];
  S.score=0;S.combo=0;S.maxCombo=0;S.correct=0;S.wrong=0;S.lives=MAX_LIVES;
  S.catCorrect={};S.catWrong={};S._paused=false;S._todayQuizMode=false;
  // 커스텀 문제 초기화 (다음 학생에게 이전 학생 문제 노출 방지)
  // BANK_TRUE/BANK_FALSE 문제는 유지, 커스텀으로만 추가된 문제 제거
  const bankSet=new Set([...BANK_TRUE,...BANK_FALSE].map(q=>q[0]));
  ALL_QS=ALL_QS.filter(q=>bankSet.has(q[0]));
  S.customQs=[];S.pickAnsVal=null;S.destVal='quiz';
  EL.app.style.display='none';EL.nameScreen.style.display='flex';
  EL.nameInput.value='';EL.nsStart.disabled=true;EL.nameInput.focus();
}




/* ══ 오답 노트 ══ */
function loadWrong(){return lsGetJSON(WRONG_KEY,[]);}
function saveWrong(q,correctAns,cat){
  const list=loadWrong();
  const exist=list.find(w=>w.q===q);
  if(exist){exist.cnt=(exist.cnt||1)+1;}
  else{list.push({q,ans:correctAns,cat,cnt:1});}
  lsSet(WRONG_KEY, list);
}
function renderWrongNote(){
  const list=loadWrong();
  EL.wnCount.textContent=list.length+'개';
  if(EL.wnRetryBtn) EL.wnRetryBtn.disabled=list.length===0;
  // 탭 뱃지 업데이트
  if(EL.tabBadgeWrong){
    EL.tabBadgeWrong.style.display=list.length?'flex':'none';
    EL.tabBadgeWrong.textContent=list.length>99?'99+':list.length;
  }
  if(!list.length){
    EL.wnList.innerHTML='<div class="wn-empty">아직 오답이 없어요 🎉<br>시험을 보면 틀린 문제가 여기에 쌓여요!</div>';
    return;
  }
  EL.wnList.innerHTML=list.map((w,i)=>{
    const isO=w.ans===true;
    return`<div class="wn-item">
      <div class="wn-ans ${isO?'o':'x'}">${isO?'O':'X'}</div>
      <div class="wn-body">
        <div class="wn-q">${esc(w.q)}</div>
        <div class="wn-meta">
          <span class="wn-cat">${esc(w.cat||'')}</span>
          <span class="wn-cnt">틀린 횟수 ${w.cnt||1}회</span>
        </div>
      </div>
      <button class="wn-del" onclick="deleteWrong('${w.q.replace(/'/g,"&#39;")}')" title="삭제">🗑</button>
    </div>`;
  }).join('');
}
function deleteWrong(q){
  const list=loadWrong();
  const idx=list.findIndex(w=>w.q===q);
  if(idx>=0){list.splice(idx,1);lsSet(WRONG_KEY, list);}
  renderWrongNote();updateWrongBtn();renderStats && renderStats();
}

/* ══ FEVER 이펙트 ══ */
let _feverTO=null;
function showFever(msg){
  if(_feverTO)clearTimeout(_feverTO);
  EL.feverText.textContent=msg;
  EL.feverOverlay.style.display='flex';
  // 텍스트 애니메이션 재시작
  EL.feverText.style.animation='none';
  void EL.feverText.offsetWidth;
  EL.feverText.style.animation='feverAnim .8s cubic-bezier(.175,.885,.32,1.5) forwards';
  launchConfetti();
  playSound('fever');
  _feverTO=setTimeout(()=>{EL.feverOverlay.style.display='none';},900);
}
function launchConfetti(){
  const canvas=EL.confettiCanvas;
  const ctx=canvas.getContext('2d');
  canvas.width=window.innerWidth;canvas.height=window.innerHeight;
  const pieces=[];
  const COLORS=['#ffc840','#f08030','#d04050','#34c498','#e05870','#a855f7','#ec4899'];
  for(let i=0;i<90;i++){
    pieces.push({
      x:Math.random()*canvas.width,y:canvas.height*0.3+Math.random()*canvas.height*0.2,
      r:Math.random()*7+3,
      color:COLORS[Math.floor(Math.random()*COLORS.length)],
      vx:(Math.random()-0.5)*8,vy:-(Math.random()*10+6),
      rot:Math.random()*360,vrot:(Math.random()-0.5)*12,
      alpha:1,shape:Math.random()>.5?'rect':'circle'
    });
  }
  let frame=0;
  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(p=>{
      p.x+=p.vx;p.y+=p.vy;p.vy+=0.4;p.rot+=p.vrot;p.alpha-=0.018;
      if(p.alpha<=0)return;
      ctx.save();ctx.globalAlpha=p.alpha;ctx.fillStyle=p.color;
      ctx.translate(p.x,p.y);ctx.rotate(p.rot*Math.PI/180);
      if(p.shape==='rect'){ctx.fillRect(-p.r,-p.r/2,p.r*2,p.r);}
      else{ctx.beginPath();ctx.arc(0,0,p.r,0,Math.PI*2);ctx.fill();}
      ctx.restore();
    });
    frame++;
    if(frame<60) requestAnimationFrame(draw);
    else ctx.clearRect(0,0,canvas.width,canvas.height);
  }
  draw();
}

/* ══ 타이머 정리 ══ */
function stopTimer(){clearInterval(S.timerID);S.timerID=null;}
function updateTimerUI(){
  const T=S._TIME||TIME;
  if(T>=9999){EL.tval.textContent='∞';EL.timerFg.style.strokeDashoffset=0;return;}
  EL.tval.textContent=S.timeLeft;
  EL.timerFg.style.strokeDashoffset=(1-S.timeLeft/T)*100;
  EL.timerFg.style.stroke=S.timeLeft>8?'var(--yellow)':S.timeLeft>4?'var(--orange)':'var(--red)';
}

/* ══ UI 헬퍼 ══ */
function showFb(msg,ok){EL.fb.textContent=msg;EL.fb.className='fb '+(ok?'ok':'ng')+' show';}
function hideFb(){EL.fb.className='fb';EL.fb.textContent='';}
function updateLives(){
  const hearts='❤️'.repeat(S.lives)+'🖤'.repeat(MAX_LIVES-S.lives);
  EL.lives.textContent=hearts;
  EL.hdLives.textContent=S.lives;
  if(EL.sbarHearts) EL.sbarHearts.textContent=hearts;
}
function updateCombo(){
  if(S.combo>=3){EL.combo.classList.add('on');EL.combo.textContent='🔥 '+S.combo+' COMBO!';}
  else{EL.combo.classList.remove('on');EL.combo.textContent='🔥 COMBO';}
}
function updateLevel(){
  const cur = LV_TABLE.find(([s])=>S.score>=s) || LV_TABLE[7];
  const [,name,icon,from,to] = cur;
  EL.lvBadge.textContent = icon + ' ' + name;
  if(EL.xpFill){
    const pct = to>=99999 ? 100 : Math.min(100,Math.round((S.score-from)/(to-from)*100));
    EL.xpFill.style.width = pct+'%';
  }
  if(EL.xpNext){
    EL.xpNext.textContent = to>=99999 ? '🏆 최고 레벨!' : '다음까지 '+(to-S.score)+'점';
  }
}


/* ════════════════════════════════════════════════
   📤 성적표 공유
════════════════════════════════════════════════ */
function shareResultImage() {
  if (typeof html2canvas === 'undefined') {
    showToast('⚠️ 이미지 저장 라이브러리를 불러오는 중이에요. 잠시 후 다시 시도해주세요!', 2500);
    return;
  }
  const btn = document.getElementById('rc-img-btn');
  const card = document.querySelector('.report-card');
  if (!card || !btn) return;

  // 버튼 숨기고 캡처
  const shareRow = document.querySelector('.rc-share-row');
  const rcBtns = document.querySelector('.rc-btns');
  btn.classList.add('loading');
  btn.querySelector('.rsb-txt').textContent = '저장 중...';
  if (shareRow) shareRow.style.display = 'none';
  if (rcBtns) rcBtns.style.display = 'none';

  // 스크롤 위치 저장 후 맨 위로
  const prevScroll = card.scrollTop;
  card.scrollTop = 0;

  setTimeout(() => {
    html2canvas(card, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#fafaf8',
      logging: false,
      windowWidth: card.scrollWidth,
      windowHeight: card.scrollHeight,
      height: card.scrollHeight,
      onclone: function(doc) {
        const clonedCard = doc.querySelector('.report-card');
        if (clonedCard) {
          clonedCard.style.maxHeight = 'none';
          clonedCard.style.overflow = 'visible';
        }
      }
    }).then(canvas => {
      // 복원
      if (shareRow) shareRow.style.display = '';
      if (rcBtns) rcBtns.style.display = '';
      card.scrollTop = prevScroll;
      btn.classList.remove('loading');
      btn.classList.add('done');
      btn.querySelector('.rsb-txt').textContent = '✅ 저장됨!';
      setTimeout(() => {
        btn.classList.remove('done');
        btn.querySelector('.rsb-txt').textContent = '이미지 저장';
      }, 2500);

      // 다운로드
      const name = (document.getElementById('rc-name') || {}).textContent || '학생';
      const date = new Date().toLocaleDateString('ko-KR').replace(/\./g,'').replace(/ /g,'');
      const grade = (document.getElementById('rc-stamp-grade') || {}).textContent || '';
      const link = document.createElement('a');
      link.download = `달라초등학교_${name}_${grade}등급_${date}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      showToast('📸 성적표 이미지가 저장됐어요!', 2500);
    }).catch(() => {
      if (shareRow) shareRow.style.display = '';
      if (rcBtns) rcBtns.style.display = '';
      card.scrollTop = prevScroll;
      btn.classList.remove('loading');
      btn.querySelector('.rsb-txt').textContent = '이미지 저장';
      showToast('⚠️ 이미지 저장에 실패했어요', 2000);
    });
  }, 100);
}

function shareResultText() {
  const btn = document.getElementById('rc-txt-btn');
  const name  = (document.getElementById('rc-name') || {}).textContent || '학생';
  const date  = (document.getElementById('rc-date') || {}).textContent || '';
  const score = (document.getElementById('rc-score') || {}).textContent || '';
  const sub   = (document.getElementById('rc-score-sub') || {}).textContent || '';
  const cor   = (document.getElementById('rc-correct') || {}).textContent || '0';
  const wrng  = (document.getElementById('rc-wrong') || {}).textContent || '0';
  const combo = (document.getElementById('rc-combo') || {}).textContent || '0';
  const total = (document.getElementById('rc-total') || {}).textContent || '0';
  const grade = (document.getElementById('rc-stamp-grade') || {}).textContent || '';
  const cmnt  = (document.getElementById('rc-comment-text') || {}).textContent || '';

  const gradeEmoji = {S:'🏆',A:'🎉',B:'😊',C:'😅',D:'💪'}[grade] || '📋';

  const text = [
    '╔══════════════════════╗',
    '║  ✦ 달라 초등학교 성적표 ✦  ║',
    '╚══════════════════════╝',
    '',
    `👤 학생: ${name}`,
    `📅 날짜: ${date}`,
    '',
    `${gradeEmoji} 등급: ${grade}등급`,
    `🏅 점수: ${score}`,
    `📊 ${sub}`,
    '',
    `✅ 정답:   ${cor}문제`,
    `❌ 오답:   ${wrng}문제`,
    `📝 총문제: ${total}문제`,
    `🔥 최고콤보: ${combo}`,
    '',
    `💬 ${cmnt}`,
    '',
    '— 달라 초등학교 OX 퀴즈 —'
  ].join('\n');

  navigator.clipboard.writeText(text).then(() => {
    if (btn) {
      btn.classList.add('done');
      btn.querySelector('.rsb-txt').textContent = '✅ 복사됨!';
      setTimeout(() => {
        btn.classList.remove('done');
        btn.querySelector('.rsb-txt').textContent = '텍스트 복사';
      }, 2500);
    }
    showToast('📋 성적표가 클립보드에 복사됐어요!', 2500);
  }).catch(() => {
    // 폴백: textarea 방식
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;opacity:0;top:-9999px;';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    if (btn) {
      btn.classList.add('done');
      btn.querySelector('.rsb-txt').textContent = '✅ 복사됨!';
      setTimeout(() => {
        btn.classList.remove('done');
        btn.querySelector('.rsb-txt').textContent = '텍스트 복사';
      }, 2500);
    }
    showToast('📋 성적표가 복사됐어요!', 2500);
  });
}


/* ══ 랭킹 ══ */
function loadRank(){return lsGetJSON(RANK_KEY,[]);}
function saveRank(){
  const r=loadRank();
  const existing=r.find(e=>e.n===S.playerName);
  if(existing){
    if(S.score>existing.s){existing.s=S.score;existing.d=new Date().toLocaleDateString('ko-KR');}
  } else {
    r.push({n:S.playerName,s:S.score,d:new Date().toLocaleDateString('ko-KR')});
  }
  r.sort((a,b)=>b.s-a.s);r.splice(MAX_RANKING);
  lsSet(RANK_KEY, r);
}
function renderRank(){
  const r=loadRank();
  const M=['🥇','🥈','🥉'],NC=['g','s','b'];
  EL.rankWrap.innerHTML=r.length
    ?r.map((x,i)=>`<div class="ri"><div class="ri-no ${NC[i]||''}">${M[i]||i+1}</div><div class="ri-name">${esc(x.n)}</div><div class="ri-score">${esc(x.s)}점</div><div class="ri-date">${esc(x.d)}</div></div>`).join('')
    :'<div class="rank-empty">아직 기록이 없어요 🎯</div>';
}
function renderTodayStats(){
  // 세션 누적 데이터로 오늘 현황 표시
  const wrongCount = loadWrong().length;
  const solved = S.correct + S.wrong;
  const pct = solved>0 ? Math.round(S.correct/solved*100) : 0;
  const el_s=$('tsc-solved'),el_c=$('tsc-correct'),el_b=$('tsc-combo'),el_w=$('tsc-wrong');
  if(el_s) el_s.textContent = solved;
  if(el_c) el_c.textContent = pct+'%';
  if(el_b) el_b.textContent = S.maxCombo||0;
  if(el_w) el_w.textContent = wrongCount;
}
function renderHomeRank(){
  const r=loadRank();
  const M=['🥇','🥈','🥉'];
  EL.homeRankList.innerHTML=r.length
    ?r.slice(0,HOME_RANK_DISPLAY).map((x,i)=>`<div class="hrp-item"><span class="hrp-no">${M[i]||i+1}</span><span class="hrp-name">${esc(x.n)}</span><span class="hrp-score">${esc(x.s)}점</span></div>`).join('')
    :'<div class="hrp-empty">아직 기록이 없어요</div>';
}

/* ══ 통계 ══ */
function renderStats(){
  const tot=S.correct+S.wrong,rat=tot?Math.round(S.correct/tot*100):0;
  const rankList=loadRank();
  const bestScore=rankList.length?rankList[0].s:S.score;
  const bestCombo=Math.max(parseInt(lsGet(BEST_COMBO_KEY,'0'),10), S.maxCombo);
  EL.statsGrid.innerHTML=`<div class="sc2"><div class="l">총 도전</div><div class="v">${tot}</div></div><div class="sc2"><div class="l">정답률</div><div class="v">${rat}%</div></div><div class="sc2"><div class="l">역대 최고점수</div><div class="v">${bestScore}</div></div><div class="sc2"><div class="l">역대 최고콤보</div><div class="v">${bestCombo}</div></div>`;
  // 카테고리별 통계: localStorage 누적 + 현재 세션 데이터 합산
  const savedCats=lsGetJSON(CAT_STATS_KEY,{});
  // 세션 데이터를 savedCats에 병합 (표시 전용, 저장 안 함)
  const merged={};
  const allCats=new Set([...Object.keys(savedCats),...Object.keys(S.catCorrect),...Object.keys(S.catWrong)]);
  allCats.forEach(cat=>{
    const sc=(savedCats[cat]||[0,0])[0]+(S.catCorrect[cat]||0);
    const sw=(savedCats[cat]||[0,0])[1]+(S.catWrong[cat]||0);
    merged[cat]=[sc,sw];
  });
  const cats=[...allCats];
  const COLS=['#f08030','#e05870','#34c498','#ffc840','#a855f7','#ec4899','#14b8a6','#e05060'];
  EL.catBars.innerHTML=cats.length?cats.map((cat,i)=>{
    const [c,w]=merged[cat]||[0,0];
    const t2=c+w,r=t2?Math.round(c/t2*100):0;
    return`<div class="cbar"><div class="cbar-top"><span>${cat}</span><span style="color:#c0a0a8">${c}/${t2} (${r}%)</span></div><div class="cbar-track"><div class="cbar-fill" style="width:${r}%;background:${COLS[i%COLS.length]}"></div></div></div>`;
  }).join(''):'<div style="text-align:center;color:#c0a0a8;padding:20px 0">아직 통계가 없어요</div>';
}
function resetStats(){cgConfirm('통계와 랭킹을 초기화할까요?', ()=>{
  localStorage.removeItem(RANK_KEY);
  localStorage.removeItem(CAT_STATS_KEY);
  localStorage.removeItem(BEST_COMBO_KEY);
  S.catCorrect={};S.catWrong={};S.maxCombo=0;
  renderRank();renderStats();showToast('기록 초기화 완료 🗑');
}, '⚠️', '초기화', 'linear-gradient(135deg,#f08030,#ea580c)');}

/* ══ 목적지 선택 ══ */
function setDest(v){
  S.destVal=v;
  ['study','quiz','both'].forEach(d=>{
    const btn=$('dest-'+d);
    if(btn) btn.className='dest-btn d-'+d+(v===d?' on':'');
  });
}

/* ══ 문제 만들기 ══ */
function pickAns(v){S.pickAnsVal=v;EL.pickO.className='op-btn'+(v===true?' so':'');EL.pickX.className='op-btn'+(v===false?' sx':'');}
function addCustomQ(){
  if(!adminIsLogged()){showToast("⚠️ 관리자 로그인 후 문제를 추가할 수 있어요!");adminLogin();return;}
  const q=EL.makeQ.value.trim(),cat=EL.makeCat.value.trim()||'✏️내문제';
  if(!q){showToast('❗ 문제 내용을 입력해주세요!');return;}
  if(S.pickAnsVal===null){showToast('❗ 정답(O 또는 X)을 선택해주세요!');return;}
  if(S.customQs.some(cq=>cq[0]===q)){showToast('❗ 이미 있는 문제예요!');return;}
  const newQ=[q,S.pickAnsVal,cat,S.destVal];
  S.customQs.push(newQ);
  // ALL_QS 즉시 동기화
  if(!ALL_QS.some(a=>a[0]===q)) ALL_QS.push(newQ);
  try{lsSet(CUSTOM_QS_KEY, S.customQs);}catch(e){}
  EL.makeQ.value='';EL.makeCat.value='';S.pickAnsVal=null;
  EL.pickO.className='op-btn';EL.pickX.className='op-btn';
  renderCustomList();
  // 시험탭 카테고리 즉시 갱신
  renderQsCats && renderQsCats();
  completeMission('make');
  showToast('✅ 문제가 추가됐어요! 시험·공부에서 바로 사용 가능해요');
}
function renderCustomList(){
  EL.cqCount.textContent=S.customQs.length+'개';
  const DEST_LABEL={study:'📖공부',quiz:'📝시험',both:'✨둘다'};
  const DEST_CLS={study:'s',quiz:'q',both:'b'};
  EL.cqList.innerHTML=S.customQs.length
    ?S.customQs.map((q,i)=>`<div class="cq-item">
        <div class="cq-ans ${q[1]?'ao':'ax'}">${q[1]?'O':'X'}</div>
        <div class="cq-txt">${esc(q[0])}</div>
        <div class="cq-cat">${esc(q[2])}</div>
        <div class="cq-dest-tag ${DEST_CLS[q[3]||'quiz']}">${DEST_LABEL[q[3]||'quiz']}</div>
        <button class="cq-del" onclick="delCustomQ(${i})">🗑</button>
      </div>`).join('')
    :'<div class="cq-empty">아직 만든 문제가 없어요 ✏️</div>';
}
function clearCustomQ(){
  if(!adminIsLogged()){showToast('🔒 관리자만 사용할 수 있어요!');adminLogin();return;}
  if(!S.customQs.length){showToast('삭제할 문제가 없어요!');return;}
  cgConfirm('만든 문제를 전부 삭제할까요?', ()=>{
    S.customQs=[];
    try{lsSet(CUSTOM_QS_KEY, []);}catch(e){}
    renderCustomList();
    showToast('전체 삭제 완료 🗑');
  });
}

/* ══ 사운드 ══ */
let _ac=null;
function getAC(){if(!_ac)_ac=new(window.AudioContext||window.webkitAudioContext)();return _ac;}
function playSound(t){
  if(!S.soundOn)return;
  try{
    const ac=getAC();
    if(t==='ok'){
      // 정답: 밝고 귀여운 상승 멜로디 (도-미-솔)
      [[523,.0],[659,.1],[784,.2]].forEach(([freq,delay])=>{
        const o=ac.createOscillator(),g=ac.createGain();
        o.type='triangle';o.connect(g);g.connect(ac.destination);
        o.frequency.setValueAtTime(freq,ac.currentTime+delay);
        g.gain.setValueAtTime(.07,ac.currentTime+delay);
        g.gain.exponentialRampToValueAtTime(.001,ac.currentTime+delay+.18);
        o.start(ac.currentTime+delay);o.stop(ac.currentTime+delay+.18);
      });
    } else if(t==='ng'){
      // 오답: 낮은 부드러운 두 음
      [[294,.0],[220,.12]].forEach(([freq,delay])=>{
        const o=ac.createOscillator(),g=ac.createGain();
        o.type='sine';o.connect(g);g.connect(ac.destination);
        o.frequency.setValueAtTime(freq,ac.currentTime+delay);
        g.gain.setValueAtTime(.06,ac.currentTime+delay);
        g.gain.exponentialRampToValueAtTime(.001,ac.currentTime+delay+.22);
        o.start(ac.currentTime+delay);o.stop(ac.currentTime+delay+.22);
      });
    } else if(t==='fever'){
      // FEVER: 빠른 상승 아르페지오
      [[523,.0],[659,.06],[784,.12],[1047,.18]].forEach(([freq,delay])=>{
        const o=ac.createOscillator(),g=ac.createGain();
        o.type='triangle';o.connect(g);g.connect(ac.destination);
        o.frequency.setValueAtTime(freq,ac.currentTime+delay);
        g.gain.setValueAtTime(.08,ac.currentTime+delay);
        g.gain.exponentialRampToValueAtTime(.001,ac.currentTime+delay+.15);
        o.start(ac.currentTime+delay);o.stop(ac.currentTime+delay+.15);
      });
    }
  }catch(e){}
}
function toggleSound(){S.soundOn=!S.soundOn;EL.sndToggle.textContent=S.soundOn?'🔊':'🔇';}

/* ══ 키보드 ══ */
document.addEventListener('keydown',e=>{
  // 플래시카드 스페이스바
  if(e.code==='Space'&&S.studyMode==='flash'){e.preventDefault();flipCard();return;}
  if(S.locked||S.gameOver||!S.quizStarted)return;
  if(e.key==='z'||e.key==='Z'||e.key==='ArrowLeft') ans(true);
  if(e.key==='/'||e.key==='ArrowRight') ans(false);
});

// DOM 준비 후 초기화 (통합)
document.addEventListener('DOMContentLoaded', function() {
  // 관리자 로그인 상태 복구(새로고침해도 유지)
  adminRestoreSession && adminRestoreSession();
  // 로그인 상태에 따라 버튼/권한 UI 동기화
  try {
    settingsRender && settingsRender();
    noticeRender   && noticeRender();
    stuRender      && stuRender();
    schoolAdminBtnRefresh && schoolAdminBtnRefresh();
  } catch(e) {}
  updateWrongBtn();
  const si=document.getElementById('soop-inp');
  if (si && !si._sev) { si._sev=true; si.addEventListener('keydown',e=>{if(e.key==='Enter')soopAdd();}); }
});

/* ════════════════════════════════════════════════════════
   🎮 게임 공통
════════════════════════════════════════════════════════ */
function openGame(id){
  const gameEl = document.getElementById('game-'+id);
  if(!gameEl) return;
  const pw = document.querySelector('.pw');
  let topOffset = 0;
  if(pw){
    topOffset = Math.round(pw.getBoundingClientRect().top);
  } else {
    const hd = document.querySelector('.hd');
    const sbar = document.getElementById('sbar');
    const tabs = document.querySelector('.tabs');
    const pbar = document.querySelector('.pbar');
    topOffset = (hd?hd.offsetHeight:0)+(sbar?sbar.offsetHeight:0)+(tabs?tabs.offsetHeight:0)+(pbar?pbar.offsetHeight:0);
  }
  topOffset = Math.max(0, topOffset);
  gameEl.style.top = topOffset + 'px';
  gameEl.style.bottom = '0';
  gameEl.style.left = '0';
  gameEl.style.right = '0';
  gameEl.style.height = '';
  gameEl.classList.add('on');
  document.body.classList.add('game-open');
}
function closeGame(id){
  try{
    if(id==='tetris') closeTetris();
    if(id==='minesweeper'){clearInterval(MS&&MS.timerID);if(typeof msKey==='function')document.removeEventListener('keydown',msKey);}
    if(id==='mole') stopMole&&stopMole();
    if(id==='snake'){clearInterval(SNAKE&&SNAKE.timerID);if(typeof snakeKey==='function')document.removeEventListener('keydown',snakeKey);}
    if(id==='ladder'&&_spellTimer){clearInterval(_spellTimer);}
    if(id==='spelling'&&_spellTimer){clearInterval(_spellTimer);}
    if(id==='typing'){cancelAnimationFrame(TYPING&&TYPING.animID);clearInterval(TYPING&&TYPING.interval);}
    if(id==='pacman'){cancelAnimationFrame(PAC&&PAC.animID);if(typeof pacKey==='function')document.removeEventListener('keydown',pacKey);}
    if(id==='stack'){cancelAnimationFrame(STACK&&STACK.animID);if(typeof stackKey==='function')document.removeEventListener('keydown',stackKey);}
    if(id==='dino'){cancelAnimationFrame(DINO&&DINO.animID);if(typeof dinoKey==='function')document.removeEventListener('keydown',dinoKey);}
    if(id==='dodge'){cancelAnimationFrame(DODGE&&DODGE.animID);if(typeof dodgeKey==='function')document.removeEventListener('keydown',dodgeKey);if(typeof dodgeKeyUp==='function')document.removeEventListener('keyup',dodgeKeyUp);}
    if(id==='simon'){cancelAnimationFrame(SIMON&&SIMON.animID);}
    const scr=document.getElementById('game-'+id);
    if(scr){scr.classList.remove('on');scr.style.top='';scr.style.height='';}
    document.body.classList.remove('game-open');
    document.body.style.overflow='';
    const r=document.getElementById(id+'-result');if(r)r.classList.remove('on');
    setTimeout(()=>{switchTab('game',null);},100);
  }catch(e){console.error('closeGame error:',e);}
}
function showGameResult(id){
  document.getElementById(id+'-result').classList.add('on');
  completeMission('game');
  let bonus=0, currentScore=0;
  try{
    if(id==='tetris')      { currentScore=TET?.score||0; bonus=Math.round(currentScore*0.3); }
    else if(id==='minesweeper') { bonus=200; currentScore=200; }
    else if(id==='mole')   { currentScore=MOLE?.score||0; bonus=Math.round(currentScore*0.6); }
    else if(id==='snake')  { currentScore=SNAKE?.score||0; bonus=Math.round(currentScore*8); }
    else if(id==='breakout'){ currentScore=BRKOUT?.score||0; bonus=Math.round(currentScore*0.4); }
    else if(id==='typing') { currentScore=TYPING?.score||0; bonus=Math.round(currentScore*0.8); }
    else if(id==='pacman') { currentScore=PAC?.score||0; bonus=Math.round(currentScore*0.5); }
    else if(id==='stack')  { currentScore=STACK?.score||0; bonus=Math.round(currentScore*20); }
    else if(id==='dino')   { currentScore=DINO?.score||0; bonus=Math.round(currentScore*0.1); }
    else if(id==='dodge')  { currentScore=DODGE?.score||0; bonus=Math.round(currentScore*0.5); }
    else if(id==='simon')  { currentScore=SIMON?.level||0; bonus=Math.round(currentScore*30); }
  }catch(ex){}
  const isNewBest=saveGameBest(id,currentScore);
  if(isNewBest){const card=document.querySelector('#'+id+'-result .gr-card');if(card){const el=document.createElement('div');el.className='gr-newbest';el.textContent='🎉 신기록!';card.insertBefore(el,card.firstChild);}}
  if(bonus>0){
    S.score+=bonus;
    if(typeof updateLevel==='function') updateLevel();
    if(typeof showToast==='function') showToast('🎮 게임 보너스 +'+bonus+'점!');
  }
}

/* ════════════════════════════════════════════════════════
   🧱 테트리스 엔진
════════════════════════════════════════════════════════ */
const TET = {
  COLS: 10, ROWS: 20, CELL: 24,
  board: [], piece: null, next: null,
  score: 0, level: 1, lines: 0,
  paused: false, over: false,
  rafId: null, lastTime: 0, dropCounter: 0,
  dropInterval: 700,
  canvas: null, ctx: null, nctx: null,
};

const TET_COLORS = ['','#06b6d4','#e05870','#f08030','#ffc840','#34c498','#a855f7','#f43f5e'];
const TET_PIECES = [
  null,
  [[1,1,1,1]],                         // I
  [[2,0],[2,0],[2,2]],                  // J
  [[0,3],[0,3],[3,3]],                  // L
  [[4,4],[4,4]],                        // O
  [[0,5,5],[5,5,0]],                    // S
  [[6,6,6],[0,6,0]],                    // T
  [[7,7,0],[0,7,7]],                    // Z
];

function tetCreateBoard(){TET.board=Array.from({length:TET.ROWS},()=>new Array(TET.COLS).fill(0));}

function tetNewPiece(type){
  const matrix=TET_PIECES[type].map(r=>[...r]);
  return{type,matrix,x:Math.floor(TET.COLS/2)-Math.floor(matrix[0].length/2),y:0};
}

function tetRandomPiece(){return tetNewPiece(Math.floor(Math.random()*7)+1);}

function tetDraw(){
  const c=TET.ctx,cell=TET.CELL,R=TET.ROWS,C=TET.COLS;
  // background
  c.fillStyle='#fef9ee';c.fillRect(0,0,C*cell,R*cell);
  // grid lines
  c.strokeStyle='rgba(180,140,60,.12)';c.lineWidth=.5;
  for(let r=0;r<R;r++){c.beginPath();c.moveTo(0,r*cell);c.lineTo(C*cell,r*cell);c.stroke();}
  for(let col=0;col<C;col++){c.beginPath();c.moveTo(col*cell,0);c.lineTo(col*cell,R*cell);c.stroke();}
  // board
  TET.board.forEach((row,r)=>row.forEach((val,col)=>{
    if(val){tetDrawCell(c,col,r,TET_COLORS[val],cell);}
  }));
  // ghost piece
  if(TET.piece&&!TET.over){
    const ghost={...TET.piece,matrix:TET.piece.matrix.map(r=>[...r])};
    while(!tetCollides(ghost,0,1))ghost.y++;
    ghost.matrix.forEach((row,r)=>row.forEach((val,col)=>{
      if(val){
        c.fillStyle='rgba(230,160,40,.15)';
        c.fillRect((ghost.x+col)*cell,(ghost.y+r)*cell,cell,cell);
        c.strokeStyle='rgba(230,160,40,.25)';c.lineWidth=.5;
        c.strokeRect((ghost.x+col)*cell+.5,(ghost.y+r)*cell+.5,cell-1,cell-1);
      }
    }));
  }
  // current piece
  if(TET.piece){
    TET.piece.matrix.forEach((row,r)=>row.forEach((val,col)=>{
      if(val){tetDrawCell(c,TET.piece.x+col,TET.piece.y+r,TET_COLORS[val],cell);}
    }));
  }
}

function tetDrawCell(c,col,row,color,cell){
  c.fillStyle=color;
  c.fillRect(col*cell+1,row*cell+1,cell-2,cell-2);
  // shine
  c.fillStyle='rgba(255,255,255,.25)';
  c.fillRect(col*cell+2,row*cell+2,cell-4,4);
  c.fillRect(col*cell+2,row*cell+2,4,cell-4);
  // shadow
  c.fillStyle='rgba(0,0,0,.2)';
  c.fillRect(col*cell+2,row*cell+cell-5,cell-4,4);
}

function tetDrawNext(){
  const c=TET.nctx,cell=18,matrix=TET.next.matrix;
  c.fillStyle='#fef9ee';c.fillRect(0,0,80,80);
  const offX=Math.floor((4-matrix[0].length)/2);
  const offY=Math.floor((4-matrix.length)/2);
  matrix.forEach((row,r)=>row.forEach((val,col)=>{
    if(val){tetDrawCell(c,offX+col,offY+r,TET_COLORS[val],cell);}
  }));
}

function tetCollides(piece,dx,dy,matrix){
  const m=matrix||piece.matrix;
  return m.some((row,r)=>row.some((val,col)=>{
    if(!val)return false;
    const nx=piece.x+col+dx,ny=piece.y+r+dy;
    return nx<0||nx>=TET.COLS||ny>=TET.ROWS||(ny>=0&&TET.board[ny][nx]);
  }));
}

function tetLock(){
  TET.piece.matrix.forEach((row,r)=>row.forEach((val,col)=>{
    if(val){
      const ny=TET.piece.y+r;
      if(ny<0){tetGameOver();return;}
      TET.board[ny][TET.piece.x+col]=val;
    }
  }));
  tetClearLines();
  TET.piece=TET.next;
  TET.next=tetRandomPiece();
  if(tetCollides(TET.piece,0,0)){tetGameOver();return;}
  tetDrawNext();
}

function tetClearLines(){
  let cleared=0;
  for(let r=TET.ROWS-1;r>=0;r--){
    if(TET.board[r].every(v=>v)){
      TET.board.splice(r,1);
      TET.board.unshift(new Array(TET.COLS).fill(0));
      cleared++;r++;
    }
  }
  if(cleared){
    const pts=[0,100,300,500,800][cleared]*TET.level;
    TET.score+=pts;TET.lines+=cleared;
    TET.level=Math.floor(TET.lines/10)+1;
    TET.dropInterval=Math.max(100,700-TET.level*60);
    document.getElementById('tet-score').textContent=TET.score.toLocaleString();
    document.getElementById('tet-level').textContent=TET.level;
    document.getElementById('tet-lines').textContent=TET.lines;
    document.getElementById('tet-level-display').textContent='Lv.'+TET.level;
  }
}

function tetUpdate(time=0){
  if(TET.paused||TET.over)return;
  const delta=time-TET.lastTime;TET.lastTime=time;
  TET.dropCounter+=delta;
  if(TET.dropCounter>TET.dropInterval){TET.dropCounter=0;tetStep();}
  tetDraw();
  TET.rafId=requestAnimationFrame(tetUpdate);
}

function tetStep(){
  if(!tetCollides(TET.piece,0,1)){TET.piece.y++;}
  else{tetLock();}
}

function tetGameOver(){
  TET.over=true;cancelAnimationFrame(TET.rafId);
  document.getElementById('tet-result-score').textContent=TET.score.toLocaleString()+'점';
  document.getElementById('tet-result-sub').textContent='레벨 '+TET.level+' · '+TET.lines+'줄 제거';
  setTimeout(()=>showGameResult('tetris'),600);
}

/* 컨트롤 함수 */
function tetMoveDir(dx){
  if(TET.paused||TET.over||!TET.piece)return;
  if(!tetCollides(TET.piece,dx,0))TET.piece.x+=dx;
}
function tetDrop(){
  if(TET.paused||TET.over||!TET.piece)return;
  TET.dropCounter=TET.dropInterval;
}
function tetHardDrop(){
  if(TET.paused||TET.over||!TET.piece)return;
  while(!tetCollides(TET.piece,0,1))TET.piece.y++;
  tetLock();TET.dropCounter=0;
}
function tetMove(dx,dy){
  if(dy)tetDrop();else tetMoveDir(dx);
}
function tetRotate(){
  if(TET.paused||TET.over||!TET.piece)return;
  const m=TET.piece.matrix;
  const rotated=m[0].map((_,i)=>m.map(row=>row[i]).reverse());
  const prev=TET.piece.matrix;
  TET.piece.matrix=rotated;
  // wall kick
  if(tetCollides(TET.piece,0,0)){
    TET.piece.x+=TET.piece.x>TET.COLS/2?-1:1;
    if(tetCollides(TET.piece,0,0)){TET.piece.matrix=prev;}
  }
}
function tetTogglePause(){
  if(TET.over)return;
  TET.paused=!TET.paused;
  document.getElementById('tet-pause-overlay').classList.toggle('on',TET.paused);
  if(!TET.paused){TET.lastTime=0;requestAnimationFrame(tetUpdate);}
}
function tetRestart(){
  cancelAnimationFrame(TET.rafId);
  document.getElementById('tetris-result').classList.remove('on');
  tetInit();
}
function tetRetry(){
  document.getElementById('tetris-result').classList.remove('on');
  tetInit();
}

function tetInit(){
  tetCreateBoard();
  TET.score=0;TET.level=1;TET.lines=0;
  TET.paused=false;TET.over=false;TET.dropCounter=0;TET.dropInterval=700;TET.lastTime=0;
  document.getElementById('tet-score').textContent='0';
  document.getElementById('tet-level').textContent='1';
  document.getElementById('tet-lines').textContent='0';
  document.getElementById('tet-level-display').textContent='Lv.1';
  document.getElementById('tet-pause-overlay').classList.remove('on');
  TET.piece=tetRandomPiece();TET.next=tetRandomPiece();
  tetDrawNext();
  cancelAnimationFrame(TET.rafId);
  TET.rafId=requestAnimationFrame(tetUpdate);
}

function openTetris(){
  openGame('tetris');
  // Canvas setup (may have changed size)
  TET.canvas=document.getElementById('tet-canvas');
  TET.ctx=TET.canvas.getContext('2d');
  TET.nctx=document.getElementById('tet-next').getContext('2d');
  const cell=TET.CELL;
  TET.canvas.width=TET.COLS*cell;TET.canvas.height=TET.ROWS*cell;
  tetInit();
}

function closeTetris(){
  cancelAnimationFrame(TET.rafId);TET.over=true;closeGame('tetris');
}

// Override closeGame to stop tetris
/* tetris closeGame → 원본 통합 */

/* 키보드 */
document.addEventListener('keydown',e=>{
  if(!document.getElementById('game-tetris').classList.contains('on'))return;
  if(e.key==='ArrowLeft'){e.preventDefault();tetMoveDir(-1);}
  else if(e.key==='ArrowRight'){e.preventDefault();tetMoveDir(1);}
  else if(e.key==='ArrowDown'){e.preventDefault();tetDrop();}
  else if(e.key==='ArrowUp'||e.key==='z'||e.key==='Z'){e.preventDefault();tetRotate();}
  else if(e.key===' '){e.preventDefault();tetHardDrop();}
  else if(e.key==='p'||e.key==='P'){tetTogglePause();}
});


/* ════════════════════════════════════════════════════════
   💣 지뢰찾기
════════════════════════════════════════════════════════ */
const MS = {
  rows:0, cols:0, mines:0,
  board:[], revealed:[], flagged:[],
  started:false, over:false, won:false,
  startTime:0, timerID:null,
  diff:'normal'
};
const MS_DIFFS = {
  easy:   {rows:8,  cols:8,  mines:8,  label:'쉬움', icon:'😊'},
  normal: {rows:10, cols:10, mines:15, label:'보통', icon:'😐'},
  hard:   {rows:12, cols:12, mines:25, label:'어려움', icon:'😰'},
};

function openMinesweeper(){ openGame('minesweeper'); msShowSetup(); }
function retryMs(){ document.getElementById('minesweeper-result').classList.remove('on'); msShowSetup(); }

function msShowSetup(){
  clearInterval(MS.timerID); MS.over=false; MS.won=false; MS.started=false;
  document.getElementById('ms-status').textContent='준비';
  const body = document.getElementById('ms-body');
  body.innerHTML = `
    <div class="ms-setup">
      <div class="ms-setup-title">💣 난이도 선택</div>
      <div class="ms-diff-grid">
        ${Object.entries(MS_DIFFS).map(([k,v])=>`
          <div class="ms-diff-btn" onclick="msStart('${k}')">
            <span class="ms-diff-icon">${v.icon}</span>
            <span class="ms-diff-name">${v.label}</span>
            <span class="ms-diff-desc">${v.rows}×${v.cols} · 💣${v.mines}</span>
          </div>`).join('')}
      </div>
      <div class="ms-hint">💡 우클릭(PC) 또는 길게 누르기(모바일) = 깃발 🚩</div>
    </div>`;
}

function msStart(diff){
  MS.diff = diff;
  const d = MS_DIFFS[diff];
  MS.rows=d.rows; MS.cols=d.cols; MS.mines=d.mines;
  MS.revealed = Array.from({length:MS.rows},()=>new Array(MS.cols).fill(false));
  MS.flagged  = Array.from({length:MS.rows},()=>new Array(MS.cols).fill(false));
  MS.board    = Array.from({length:MS.rows},()=>new Array(MS.cols).fill(0));
  MS.started=false; MS.over=false; MS.won=false; MS.startTime=0;
  clearInterval(MS.timerID);
  document.getElementById('ms-status').textContent='클릭해서 시작!';
  msRender();
}

function msPlaceMines(safeR, safeC){
  let placed=0;
  while(placed < MS.mines){
    const r=Math.floor(Math.random()*MS.rows), c=Math.floor(Math.random()*MS.cols);
    if(MS.board[r][c]===-1) continue;
    if(Math.abs(r-safeR)<=1 && Math.abs(c-safeC)<=1) continue;
    MS.board[r][c]=-1; placed++;
  }
  for(let r=0;r<MS.rows;r++) for(let c=0;c<MS.cols;c++){
    if(MS.board[r][c]===-1) continue;
    let cnt=0;
    for(let dr=-1;dr<=1;dr++) for(let dc=-1;dc<=1;dc++){
      const nr=r+dr, nc=c+dc;
      if(nr>=0&&nr<MS.rows&&nc>=0&&nc<MS.cols&&MS.board[nr][nc]===-1) cnt++;
    }
    MS.board[r][c]=cnt;
  }
}

function msRender(){
  const body = document.getElementById('ms-body');
  const flagCount = MS.flagged.flat().filter(Boolean).length;
  const cellSize = Math.min(36, Math.floor(Math.min(window.innerWidth-40, 480) / MS.cols));
  body.innerHTML = `
    <div class="ms-board-wrap">
      <div class="ms-info-row">
        <div class="ms-badge">💣 ${MS.mines - flagCount}</div>
        <div class="ms-badge" id="ms-timer">⏱ 0초</div>
        <div class="ms-badge" id="ms-flag-cnt">🚩 ${flagCount}</div>
      </div>
      <div class="ms-board" id="ms-grid" style="grid-template-columns:repeat(${MS.cols},${cellSize}px);">
        ${Array.from({length:MS.rows},(_,r)=>Array.from({length:MS.cols},(_,c)=>msCellHTML(r,c,cellSize)).join('')).join('')}
      </div>
      <div class="ms-hint">우클릭 또는 길게 누르기 = 🚩 깃발</div>
    </div>`;
  // Attach events
  document.querySelectorAll('.ms-cell').forEach(el=>{
    const r=+el.dataset.r, c=+el.dataset.c;
    el.addEventListener('click',()=>msReveal(r,c));
    el.addEventListener('contextmenu',e=>{e.preventDefault();msFlag(r,c);});
    // mobile long press
    let lt; 
    el.addEventListener('touchstart',()=>{lt=setTimeout(()=>msFlag(r,c),500);},{passive:true});
    el.addEventListener('touchend',()=>clearTimeout(lt));
  });
}

function msCellHTML(r,c,size){
  const rev=MS.revealed[r][c], flag=MS.flagged[r][c], val=MS.board[r][c];
  let cls='ms-cell', txt='';
  if(rev){
    cls+=' ms-open';
    if(val===-1) cls+=(MS._boomR===r&&MS._boomC===c?' ms-mine-boom':' ms-mine-revealed'), txt='💣';
    else if(val>0) cls+=` n${val}`, txt=val;
  } else if(flag){ cls+=' ms-flag'; txt='🚩'; }
  return `<div class="${cls}" data-r="${r}" data-c="${c}" style="width:${size}px;height:${size}px;font-size:${Math.floor(size*.5)}px">${txt}</div>`;
}

function msReveal(r,c){
  if(MS.over||MS.revealed[r][c]||MS.flagged[r][c]) return;
  if(!MS.started){ MS.started=true; msPlaceMines(r,c); msStartTimer(); }
  if(MS.board[r][c]===-1){ MS._boomR=r; MS._boomC=c; msBoom(r,c); return; }
  msFlood(r,c);
  msRender();
  msCheckWin();
}

function msFlood(r,c){
  if(r<0||r>=MS.rows||c<0||c>=MS.cols) return;
  if(MS.revealed[r][c]||MS.flagged[r][c]) return;
  MS.revealed[r][c]=true;
  if(MS.board[r][c]===0) for(let dr=-1;dr<=1;dr++) for(let dc=-1;dc<=1;dc++) msFlood(r+dr,c+dc);
}

function msFlag(r,c){
  if(MS.over||MS.revealed[r][c]) return;
  MS.flagged[r][c]=!MS.flagged[r][c];
  msRender();
}

function msStartTimer(){
  MS.startTime=Date.now();
  MS.timerID=setInterval(()=>{
    const s=Math.floor((Date.now()-MS.startTime)/1000);
    const el=document.getElementById('ms-timer');
    if(el) el.textContent='⏱ '+s+'초';
  },500);
}

function msBoom(){
  clearInterval(MS.timerID); MS.over=true;
  // reveal all mines
  for(let r=0;r<MS.rows;r++) for(let c=0;c<MS.cols;c++) if(MS.board[r][c]===-1) MS.revealed[r][c]=true;
  msRender();
  const secs=Math.floor((Date.now()-MS.startTime)/1000);
  document.getElementById('minesweeper-result-icon').textContent='💥';
  document.getElementById('minesweeper-result-title').textContent='펑! 지뢰 밟았어요!';
  document.getElementById('minesweeper-result-score').textContent='😭';
  document.getElementById('minesweeper-result-sub').textContent=`${secs}초 만에 폭발…`;
  setTimeout(()=>showGameResult('minesweeper'),700);
}

function msCheckWin(){
  const total=MS.rows*MS.cols, revealed=MS.revealed.flat().filter(Boolean).length;
  if(revealed===total-MS.mines){
    clearInterval(MS.timerID); MS.over=true; MS.won=true;
    const secs=Math.floor((Date.now()-MS.startTime)/1000);
    document.getElementById('minesweeper-result-icon').textContent='🎉';
    document.getElementById('minesweeper-result-title').textContent='성공! 지뢰 다 찾았어요!';
    document.getElementById('minesweeper-result-score').textContent=secs+'초';
    document.getElementById('minesweeper-result-sub').textContent=`${MS_DIFFS[MS.diff].label} · 💣${MS.mines}개 클리어!`;
    setTimeout(()=>showGameResult('minesweeper'),400);
  }
}

/* ════════════════════════════════════════════════════════
   🎯 두더지 잡기
════════════════════════════════════════════════════════ */
const MOLE = {
  score:0, hits:0, miss:0,
  timeLeft:30, totalTime:30,
  timerID:null, moleTimers:[],
  active:[], holes:9,
  running:false, speed:1200, diff:'normal'
};
const MOLE_DIFFS={easy:{time:40,speed:1500},normal:{time:30,speed:1200},hard:{time:25,speed:800}};

function openMole(){ openGame('mole'); moleShowSetup(); }
function retryMole(){ document.getElementById('mole-result').classList.remove('on'); moleShowSetup(); }
function stopMole(){ clearInterval(MOLE.timerID); MOLE.moleTimers.forEach(clearTimeout); MOLE.moleTimers=[]; MOLE.running=false; }

function moleShowSetup(){
  stopMole(); MOLE.diff='normal';
  const body=document.getElementById('mole-body');
  body.innerHTML=`
    <div class="mole-start-wrap">
      <div class="mole-start-title">🐹 두더지 잡기</div>
      <div class="mole-diff-row">
        <button class="mole-diff-btn" onclick="moleSetDiff('easy',this)">😊 쉬움 (40초)</button>
        <button class="mole-diff-btn on" onclick="moleSetDiff('normal',this)">⚡ 보통 (30초)</button>
        <button class="mole-diff-btn" onclick="moleSetDiff('hard',this)">🔥 어려움 (25초)</button>
      </div>
      <button class="mole-go-btn" onclick="moleStart()">🔨 시작!</button>
    </div>`;
}

function moleSetDiff(d,btn){ MOLE.diff=d; document.querySelectorAll('.mole-diff-btn').forEach(b=>b.classList.remove('on')); btn.classList.add('on'); }

function moleStart(){
  const cfg=MOLE_DIFFS[MOLE.diff];
  MOLE.score=0; MOLE.hits=0; MOLE.miss=0;
  MOLE.timeLeft=cfg.time; MOLE.totalTime=cfg.time;
  MOLE.speed=cfg.speed; MOLE.active=new Array(MOLE.holes).fill(false);
  MOLE.running=true;
  document.getElementById('mole-time-display').textContent=cfg.time+'초';
  moleRenderGrid();
  MOLE.timerID=setInterval(()=>{
    MOLE.timeLeft--;
    const pct=MOLE.timeLeft/MOLE.totalTime*100;
    const fill=document.getElementById('mole-timer-fill');
    const disp=document.getElementById('mole-time-display');
    if(fill) fill.style.width=pct+'%';
    if(disp) disp.textContent=MOLE.timeLeft+'초';
    const sc=document.getElementById('mole-score-disp');
    if(sc) sc.textContent=MOLE.score;
    if(MOLE.timeLeft<=0){ stopMole(); moleEnd(); }
  },1000);
  moleSchedule();
}

function moleRenderGrid(){
  const body=document.getElementById('mole-body');
  body.innerHTML=`
    <div class="mole-info-row">
      <div class="mole-pill">점수 <span id="mole-score-disp">0</span></div>
      <div class="mole-pill">잡은 두더지 <span id="mole-hits-disp">0</span></div>
    </div>
    <div class="mole-timer-bar"><div class="mole-timer-fill" id="mole-timer-fill"></div></div>
    <div class="mole-grid">
      ${Array.from({length:MOLE.holes},(_,i)=>`
        <div class="mole-hole" id="hole-${i}" onclick="moleWhack(${i})">
          <div class="mole-inner" id="mole-inner-${i}">
            <span class="mole-face">🐹</span>
          </div>
          <div class="mole-whack" id="mole-whack-${i}">+10</div>
        </div>`).join('')}
    </div>`;
}

function moleSchedule(){
  if(!MOLE.running) return;
  const delay=Math.random()*400+100;
  const t=setTimeout(()=>{
    if(!MOLE.running) return;
    const free=Array.from({length:MOLE.holes},(_,i)=>i).filter(i=>!MOLE.active[i]);
    if(free.length){
      const i=free[Math.floor(Math.random()*free.length)];
      molePopUp(i);
    }
    moleSchedule();
  }, delay);
  MOLE.moleTimers.push(t);
}

function molePopUp(i){
  MOLE.active[i]=true;
  const el=document.getElementById('mole-inner-'+i);
  if(!el) return;
  el.classList.add('up'); el.classList.remove('hit');
  const hideAfter=MOLE.speed*(0.7+Math.random()*0.6);
  const t=setTimeout(()=>moleHide(i),hideAfter);
  MOLE.moleTimers.push(t);
}

function moleHide(i){
  MOLE.active[i]=false;
  const el=document.getElementById('mole-inner-'+i);
  if(el){ el.classList.remove('up'); el.classList.remove('hit'); }
}

function moleWhack(i){
  if(!MOLE.active[i]||!MOLE.running) return;
  MOLE.active[i]=false; MOLE.hits++; MOLE.score+=10;
  const el=document.getElementById('mole-inner-'+i);
  const wh=document.getElementById('mole-whack-'+i);
  if(el){ el.classList.add('hit'); setTimeout(()=>{ el.classList.remove('up'); el.classList.remove('hit'); },300); }
  if(wh){ wh.className='mole-whack show'; setTimeout(()=>wh.className='mole-whack',400); }
  const hd=document.getElementById('mole-hits-disp');
  if(hd) hd.textContent=MOLE.hits;
  const sc=document.getElementById('mole-score-disp');
  if(sc) sc.textContent=MOLE.score;
  playSound('ok');
}

function moleEnd(){
  document.getElementById('mole-result-score').textContent=MOLE.score+'점';
  document.getElementById('mole-result-sub').textContent=`두더지 ${MOLE.hits}마리 잡음!`;
  showGameResult('mole');
}

/* minesweeper/mole closeGame → 원본 통합 */

/* ════════════════════════════════════════════════════════
   🎵 미디어 v2 — YouTube IFrame API + 파일 업로드 + 뽀모도로
════════════════════════════════════════════════════════ */
let _mediaInited=false;

/* ─── 유튜브 IFrame 플레이어 ─── */
let ytPlayer=null;

function loadYouTubeAPI(){
  if(window._ytApiLoading||( window.YT&&window.YT.Player))return;
  window._ytApiLoading=true;
  const tag=document.createElement('script');
  tag.src='https://www.youtube.com/iframe_api';
  document.head.appendChild(tag);
}
window.onYouTubeIframeAPIReady=function(){window._ytApiReady=true;};

function ytParsId(inp){
  const m=inp.match(/(?:v=|youtu\.be\/|shorts\/|embed\/)([a-zA-Z0-9_-]{11})/);
  if(m) return m[1];
  if(/^[a-zA-Z0-9_-]{11}$/.test(inp)) return inp;
  return null;
}

function ytLoad(url){
  if(url && typeof url==='string' && url.startsWith('http')){
    const vid=ytParsId(url);
    if(vid){
      const inp=document.getElementById('yt-url-inp');if(inp)inp.value=url;
      ytSwitchTab('url',document.getElementById('yt-stab-url'));
      setTimeout(()=>ytShowPlayer(vid),80);
      return;
    }
  }
  const inp=document.getElementById('yt-url-inp').value.trim();
  if(!inp){showToast('유튜브 URL 또는 영상 ID를 입력해주세요!');return;}
  const vid=ytParsId(inp);
  if(!vid){showToast('올바른 유튜브 URL을 입력해주세요. 예) https://youtu.be/xxxxx');return;}
  ytShowPlayer(vid);
}

function ytShowPlayer(vid){
  const ph=document.getElementById('yt-placeholder');
  const ctrl=document.getElementById('yt-ctrl-row');
  const cb=document.getElementById('yt-clear-btn');
  if(ph) ph.style.display='none';
  if(ctrl) ctrl.style.display='flex';
  if(cb) cb.style.display='inline-flex';

  if(ytPlayer&&ytPlayer.loadVideoById){
    ytPlayer.loadVideoById(vid);
  } else if(window.YT&&window.YT.Player){
    // YT API 준비됨
    const div=document.getElementById('yt-player-div');
    if(div) div.innerHTML=''; // 이전 iframe 제거
    ytPlayer=new YT.Player('yt-player-div',{
      host:'https://www.youtube-nocookie.com',
      videoId:vid,
      width:'100%',height:'100%',
      playerVars:{autoplay:1,rel:0,modestbranding:1,playsinline:1},
      events:{
        onReady:e=>{e.target.playVideo();},
        onStateChange:e=>{
          // 재생 시작되면 iframe 크기 재강제
          const f=document.querySelector('#yt-player-div iframe');
          if(f){f.style.cssText='position:absolute;inset:0;width:100%;height:100%;border:none;';}
        }
      }
    });
  } else {
    // API 미로드 → iframe 직접 삽입
    const div=document.getElementById('yt-player-div');
    if(div) div.innerHTML=
      '<iframe src="https://www.youtube-nocookie.com/embed/'+vid+'?autoplay=1&rel=0&modestbranding=1&playsinline=1"'+
      ' style="position:absolute;inset:0;width:100%;height:100%;border:none;"'+
      ' allow="autoplay;encrypted-media;picture-in-picture" allowfullscreen></iframe>';
  }
}

function ytClear(){
  // 영상 정지 및 플레이어 초기화
  if(ytPlayer&&ytPlayer.stopVideo) ytPlayer.stopVideo();
  const div=document.getElementById('yt-player-div');
  if(div) div.innerHTML='';
  ytPlayer=null;
  // UI 복원
  const ph=document.getElementById('yt-placeholder');
  const ctrl=document.getElementById('yt-ctrl-row');
  const cb=document.getElementById('yt-clear-btn');
  const inp=document.getElementById('yt-url-inp');
  if(ph){ph.style.display='flex';}
  if(ctrl) ctrl.style.display='none';
  if(cb) cb.style.display='none';
  if(inp) inp.value='';
}

function ytOnInput(el){
  // 입력 지우면 클리어 버튼 숨김 (영상은 유지, ✕ 눌러야 닫힘)
  const cb=document.getElementById('yt-clear-btn');
  const hasPlayer=document.getElementById('yt-player-div').innerHTML.trim()!=='';
  if(cb) cb.style.display=hasPlayer?'inline-flex':'none';
}

function ytPlayerCmd(cmd){if(ytPlayer&&ytPlayer[cmd]) ytPlayer[cmd]();}
function ytSetVol(v){
  if(ytPlayer&&ytPlayer.setVolume) ytPlayer.setVolume(parseInt(v,10));
  const lbl=document.getElementById('yt-vol-label');if(lbl) lbl.textContent='🔊 '+v;
}
function ytSwitchTab(tab, btn){
  if(tab==='search'){const r=document.getElementById('yt-search-results');if(r){r.style.display='none';r.innerHTML='';}}
  document.querySelectorAll('[id^="yt-stab-"]').forEach(b=>{
    if(b&&b.style&&b.offsetParent!==null){b.style.background='#fff';b.style.color='#c07080';b.style.border='2px solid var(--border)';}
  });
  if(btn&&btn.style){btn.style.background='var(--blue)';btn.style.color='#fff';btn.style.border='none';}
  const tu=document.getElementById('yt-tab-url');
  const ts=document.getElementById('yt-tab-search');
  if(tu) tu.style.display = tab==='url' ? '' : 'none';
  if(ts) ts.style.display = tab==='search' ? '' : 'none';
}
function ytOpenSearch(){
  const _yi=document.getElementById('yt-search-inp');
  const q=_yi?_yi.value.trim():'';
  if(!q){ showToast('검색어를 입력하세요!'); return; }
  ytDoSearch(q);
}
function ytSetSearch(q){
  const _ys=document.getElementById('yt-search-inp');
  if(_ys)_ys.value=q;
  ytDoSearch(q);
}
function ytDoSearch(q){
  const results = document.getElementById('yt-search-results');
  if(!results) return;
  results.style.display='';
  const sq = encodeURIComponent(q);
  // ✅ 썸네일 목록 방식(YouTube Data API v3)
  const apiKey = lsGet('yt_api_key','');
  if(!apiKey){
    results.innerHTML = ytSearchNoKeyUI(q, sq);
    results.scrollIntoView({behavior:'smooth', block:'start'});
    return;
  }
  const openUrl  = `https://www.youtube.com/results?search_query=${sq}`;
  results.innerHTML = `<div style="padding:18px;text-align:center;color:#f4a0a8;font-size:13px;">🔍 검색 중...</div>`;
  fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&type=video&q=${sq}&key=${apiKey}`)
    .then(r=>r.json())
    .then(data=>{
      if(data.error){
        results.innerHTML = ytSearchNoKeyUI(q, sq, '❌ API 키 오류: '+data.error.message);
        results.scrollIntoView({behavior:'smooth', block:'start'});
        return;
      }
      if(!data.items||!data.items.length){
        results.innerHTML = `<div style="padding:18px;text-align:center;color:#f4a0a8;">검색 결과가 없어요</div>`;
        results.scrollIntoView({behavior:'smooth', block:'start'});
        return;
      }
      let html = `<div style="background:#fff;border:2px solid var(--border);border-radius:14px;overflow:hidden;">
        <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 16px;background:linear-gradient(135deg,#ff0000,#cc0000);">
          <span style="font-size:14px;font-weight:900;color:#fff;font-family:Jua,sans-serif;">📺 "${esc(q)}" 검색 결과</span>
        </div>
        <div style="display:flex;flex-direction:column;gap:0;">`;
      data.items.forEach(item=>{
        const vid = item?.id?.videoId;
        if(!vid) return;
        const title = (item.snippet?.title||'').replace(/</g,'&lt;').replace(/>/g,'&gt;');
        const ch = (item.snippet?.channelTitle||'').replace(/</g,'&lt;');
        const thumb = item.snippet?.thumbnails?.medium?.url || item.snippet?.thumbnails?.default?.url || '';
        html += `<div onclick="ytLoad('https://www.youtube.com/watch?v=${vid}')"
          style="display:flex;gap:12px;padding:10px 14px;cursor:pointer;border-top:1px solid #f0f0f0;align-items:flex-start;transition:background .15s;"
          onmouseover="this.style.background='#f8f8f8'" onmouseout="this.style.background=''">
          <img src="${thumb}" alt="" style="width:96px;height:54px;object-fit:cover;border-radius:6px;flex-shrink:0;background:#000;">
          <div style="flex:1;min-width:0;">
            <div style="font-size:13px;font-weight:700;color:#1a1a1a;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">${title}</div>
            <div style="font-size:11px;color:#888;margin-top:3px;">${ch}</div>
          </div>
          <div style="font-size:11px;color:#fff;background:#ff0000;border-radius:6px;padding:3px 8px;white-space:nowrap;flex-shrink:0;align-self:flex-start;">▶ 보기</div>
        </div>`;
      });
      html += `</div></div>`;
      results.innerHTML = html;
      results.scrollIntoView({behavior:'smooth', block:'start'});
    })
    .catch(()=>{ 
      results.innerHTML = ytSearchNoKeyUI(q, sq, '⚠️ 네트워크 오류');
      results.scrollIntoView({behavior:'smooth', block:'start'});
    });
}

function ytSearchNoKeyUI(q, sq, errMsg){
  const keyVal = lsGet('yt_api_key','');
  return `<div style="background:#fff;border:2px solid var(--border);border-radius:14px;overflow:hidden;">
    <div style="padding:10px 16px;background:linear-gradient(135deg,#ff0000,#cc0000);">
      <span style="font-size:14px;font-weight:900;color:#fff;font-family:Jua,sans-serif;">📺 유튜브 검색</span>
    </div>
    <div style="padding:16px;">
      ${errMsg?`<div style="background:#fef2f2;border:1.5px solid #f8a8b0;border-radius:10px;padding:10px 14px;font-size:12px;color:#b91c1c;margin-bottom:12px;">${errMsg}</div>`:''}
      <div style="font-size:13px;color:#4a5568;margin-bottom:12px;line-height:1.6;">
        앱 안에서 썸네일 목록 검색을 보려면 <b>YouTube Data API v3 키</b>가 필요해요.<br>
        아래에 입력하면 이 기기에 저장돼요.
      </div>
      <div style="display:flex;gap:8px;">
        <input id="yt-api-key-inp" type="password" placeholder="YouTube Data API v3 키 입력..."
          value="${keyVal}"
          style="flex:1;padding:9px 14px;font-size:13px;font-family:Jua,sans-serif;border:2px solid var(--border);border-radius:10px;outline:none;"
          onkeydown="if(event.key==='Enter')ytSaveApiKey()"/>
        <button onclick="ytSaveApiKey()"
          style="padding:9px 18px;font-size:13px;font-family:Jua,sans-serif;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border:none;border-radius:10px;cursor:pointer;white-space:nowrap;">
          저장
        </button>
      </div>
    </div>
  </div>`;
}

function ytSaveApiKey(){
  const inp = document.getElementById('yt-api-key-inp');
  if(!inp) return;
  const key = inp.value.trim();
  if(!key){ showToast('API 키를 입력하세요!'); return; }
  lsSet('yt_api_key', key);
  showToast('✅ API 키 저장!');
  const q = document.getElementById('yt-search-inp')?.value.trim();
  if(q) ytDoSearch(q);
}

function soopSwitchTab(tab, btn){
  document.querySelectorAll('[id^="soop-stab-"]').forEach(b=>{
    if(b&&b.style&&b.offsetParent!==null){b.style.background='#fff';b.style.color='#c07080';b.style.border='2px solid var(--border)';}
  });
  if(btn&&btn.style){btn.style.background='var(--blue)';btn.style.color='#fff';btn.style.border='none';}
  document.getElementById('soop-tab-id').style.display = tab==='id' ? '' : 'none';
  document.getElementById('soop-tab-search').style.display = tab==='search' ? '' : 'none';
  if(tab==='search'){soopRefreshFavChips();const r=document.getElementById('soop-search-results');if(r){r.style.display='none';r.innerHTML='';}}
}
function soopOpenSearch(){
  const _el=document.getElementById('soop-search-inp');
  const q=_el?_el.value.trim():'';
  if(!q){ showToast('검색어를 입력하세요!'); return; }
  soopDoSearch(q);
}
function soopDoSearch(q){
  const results = document.getElementById('soop-search-results');
  if(!results) return;
  results.style.display='';
  const sq = encodeURIComponent(q);
  // SOOP 검색 URL (통합 검색)
  // 사용자가 제공한 URL 형식: https://www.sooplive.com/search?szLocation=main&szSearchType=total&szKeyword=
  const soopSearchUrl = 'https://www.sooplive.com/search?szLocation=main&szSearchType=total&szKeyword='+sq;
  results.innerHTML = `
    <div style="border:2px solid #1a3a5c;border-radius:14px;overflow:hidden;background:#fff;margin-top:4px;">
      <div style="padding:10px 14px;background:linear-gradient(135deg,#0d1b2a,#1a4a7a);">
        <span style="font-size:14px;font-weight:900;color:#fff;font-family:Jua,sans-serif;">🎙 "${q}" SOOP 검색</span>
      </div>
      <div style="position:relative;width:100%;height:420px;background:#0d1b2a;">
        <iframe
          id="soop-search-frame"
          src="${soopSearchUrl}"
          style="position:absolute;inset:0;width:100%;height:100%;border:none;background:#0d1b2a;"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation">
        </iframe>
        <div id="soop-frame-msg" style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;background:linear-gradient(135deg,#0d1b2a,#1a3a5c);pointer-events:none;opacity:0;transition:opacity .3s;">
          <div style="font-size:32px;">🎙</div>
          <div style="font-size:14px;font-weight:900;color:#fff;">검색 결과를 불러오는 중...</div>
        </div>
      </div>
      <!-- soop-quick-id 제거됨 -->
    </div>`;
}
function soopQuickAdd(){
  // soop-quick-id 입력창이 제거됐으므로 prompt로 대체
  const id = (prompt('스트리머 ID를 입력하세요:') || '').trim();
  if(!id){ return; }
  soopAddId(id);
  soopSwitchTab('id', document.getElementById('soop-stab-id'));
  showToast('🎙 ' + id + ' 방송을 추가했어요!');
}
function soopRefreshFavChips(){
  const chips = document.getElementById('soop-fav-chips');
  const emptyMsg = document.getElementById('soop-fav-empty-msg');
  if(!chips) return;
  const presets = lsGetJSON(SOOP_KEY, []);
  // 기존 칩 (empty msg 제외) 제거
  Array.from(chips.children).forEach(c=>{ if(c.id!=='soop-fav-empty-msg') chips.removeChild(c); });
  const allIds = [];
  presets.forEach(p=>{ if(p.ids) p.ids.forEach(id=>{ if(!allIds.includes(id)) allIds.push(id); }); });
  if(allIds.length===0){
    if(emptyMsg) emptyMsg.style.display='';
    return;
  }
  if(emptyMsg) emptyMsg.style.display='none';
  allIds.forEach(id=>{
    const btn = document.createElement('button');
    btn.style.cssText='background:#fff9f9;color:var(--navy);border:1.5px solid var(--border);padding:6px 14px;border-radius:99px;font-size:13px;font-family:Jua,sans-serif;cursor:pointer;';
    btn.textContent='🎙 '+id;
    btn.onclick=()=>{ soopAddId(id); soopSwitchTab('id', document.getElementById('soop-stab-id')); };
    chips.insertBefore(btn, emptyMsg||null);
  });
}
function soopAddId(id){
  // 기존 soopAdd 로직 재활용
  const inp = document.getElementById('soop-inp');
  if(inp){ inp.value = id; soopAdd(); }
}

/* ─── 미디어 패널 전환 ─── */
function switchMedia(name,btn){
  const mtabs=document.querySelectorAll('.mtab');
  const mpanels=document.querySelectorAll('.mpanel');
  mtabs.forEach(b=>b.classList.remove('on'));
  mpanels.forEach(p=>p.classList.remove('on'));
  if(btn) btn.classList.add('on');
  const panel=document.getElementById('mpanel-'+name);
  if(panel) panel.classList.add('on');
  // 탭별 초기화
  if(name==='chzzk') chzzkRender&&chzzkRender();
  if(name==='soop') soopFavInit&&soopFavInit();
  if(name==='music') mpRenderList&&mpRenderList();
  if(name==='localvideo') lvRenderSaved&&lvRenderSaved();
}

/* ─── 미디어 초기화 ─── */
const PLAYLISTS=[
  {icon:'📜',title:'한국사 총정리',desc:'핵심 사건과 흐름을 빠르게 정리!',q:'한국사 총정리 강의'},
  {icon:'📐',title:'수학 개념 정리',desc:'개념부터 문제풀이까지 단계별',q:'수학 개념 정리 강의'},
  {icon:'🔬',title:'과학 실험 영상',desc:'직접 보면서 배우는 과학 원리',q:'초등 과학 실험 영상'},
  {icon:'🔤',title:'영어 회화 기초',desc:'왕초보도 따라할 수 있어요!',q:'영어 회화 기초 강의'},
  {icon:'✏️',title:'국어 문법',desc:'헷갈리는 문법 한 번에 정리',q:'국어 문법 정리 강의'},
  {icon:'🌍',title:'세계 지리',desc:'나라별 수도, 지리 총정리',q:'세계 지리 상식 퀴즈'},
  {icon:'🎧',title:'집중 BGM',desc:'공부 집중력을 높여주는 음악',q:'공부 집중 bgm 로파이'},
  {icon:'🎵',title:'클래식 음악',desc:'두뇌를 깨워주는 클래식 모음',q:'공부 클래식 음악 모음'},
];

const MP_BUILTIN=[
  {name:'🌙 로파이 비트',artist:'내장 BGM',type:'builtin',id:'lofi'},
  {name:'🌊 화이트 노이즈',artist:'내장 BGM',type:'builtin',id:'white'},
  {name:'🌿 빗소리',artist:'내장 BGM',type:'builtin',id:'rain'},
  {name:'☕ 카페 소리',artist:'내장 BGM',type:'builtin',id:'cafe'},
];
const MP_SAVE_KEY = 'cgMusicSavedLinks';
let MP={
  builtin:[...MP_BUILTIN],uploaded:[],
  idx:0,playing:false,shuffle:false,repeat:false,vol:0.7,
  ctx:null,nodes:[],audio:null,
};
function mpAllTracks(){return[...MP.builtin,...MP.uploaded];}

function mpLoadSavedLinks(){
  try{
    const list = lsGetJSON(MP_SAVE_KEY, []);
    if(!Array.isArray(list)) return [];
    // url/yt만 저장(업로드 파일은 저장 불가)
    return list
      .filter(x=>x && (x.type==='url' || x.type==='yt'))
      .map(x=>Object.assign({}, x, {persist:true}));
  } catch(e){ return []; }
}
function mpSaveSavedLinks(){
  try{
    const persist = MP.uploaded
      .filter(t=>t && t.persist && (t.type==='url' || t.type==='yt'))
      .map(t=>({name:t.name, artist:t.artist, type:t.type, url:t.url||'', vid:t.vid||'', updatedAt:t.updatedAt||Date.now()}));
    lsSet(MP_SAVE_KEY, persist);
  } catch(e){}
}

function initMedia(){
  if(!_mediaInited){
    _mediaInited=true;
    loadYouTubeAPI();
    renderPlaylists();
    ytRenderSaved();
    // 저장된 음악 링크(url/유튜브 오디오) 불러오기
    MP.uploaded = mpLoadSavedLinks();
    MP.audio=document.getElementById('mp-audio');
    if(MP.audio){
      MP.audio.volume=MP.vol;
      MP.audio.addEventListener('ended',()=>{if(MP.repeat)mpPlay();else mpNext();});
      MP.audio.addEventListener('timeupdate',mpUpdateProgress);
    }
    mpRenderList();
    // 저장된 영상 링크 불러오기
    lvRenderSaved && lvRenderSaved();
    pomoInit();
  }
  // URL 입력 엔터키
  const ui=document.getElementById('yt-url-inp');
  if(ui&&!ui._ev){ui._ev=true;ui.addEventListener('keydown',e=>{if(e.key==='Enter')ytLoad();});}
}

function renderPlaylists(){
  const g=document.getElementById('pl-grid');if(!g)return;
  g.innerHTML=PLAYLISTS.map(p=>`
    <div class="pl-card">
      <div class="pl-card-icon">${p.icon}</div>
      <div class="pl-card-title">${p.title}</div>
      <div class="pl-card-desc">${p.desc}</div>
      <button class="pl-card-btn" onclick="ytSetSearch('${p.q.replace(/'/g,"\\'")}')">📺 보기</button>
    </div>`).join('');
}

/* ─── 음악 플레이어 ─── */
function mpRenderList(){
  const list=document.getElementById('mp-list');if(!list)return;
  const all=mpAllTracks();
  const cnt=document.getElementById('mp-list-cnt');
  if(cnt) cnt.textContent='('+all.length+'곡)';
  if(!all.length){
    list.innerHTML='<div class="mp-empty">파일을 업로드하거나 내장 BGM을 선택하세요 🎧</div>';
    return;
  }
  list.innerHTML=all.map((t,i)=>`
    <div class="mp-item${MP.idx===i&&MP.playing?' playing':''}" onclick="mpSelect(${i})">
      <div class="mp-item-icon">${t.type==='builtin'?'🎵':t.type==='upload'?'📁':'🎧'}</div>
      <div class="mp-item-info">
        <div class="mp-item-name">${t.name}</div>
        <div class="mp-item-dur">${t.artist}</div>
      </div>
      ${i>=MP.builtin.length?`<button class="mp-item-del" onclick="event.stopPropagation();mpDeleteUpload(${i-MP.builtin.length})">🗑</button>`:''}
    </div>`).join('');
}

function mpSelect(i){MP.idx=i;mpPlay();}

function mpPlay(){
  const all=mpAllTracks();if(!all.length)return;
  const t=all[MP.idx];
  MP.playing=true;
  const pb=document.getElementById('mp-play-btn');if(pb) pb.textContent='⏸';
  const disc=document.getElementById('mp-disc');if(disc) disc.classList.remove('paused');
  const title=document.getElementById('mp-title');if(title) title.textContent=t.name;
  const artist=document.getElementById('mp-artist');if(artist) artist.textContent=t.artist;
  mpStopBuiltin();
  mpStopYT();
  if(MP.audio){MP.audio.pause();MP.audio.removeAttribute('src');}
  if(t.type==='builtin'){
    mpPlayBuiltin(t.id);
  } else if(t.type==='yt'){
    mpPlayYT(t.vid);
  } else if((t.type==='upload'||t.type==='url')&&MP.audio){
    MP.audio.pause();
    MP.audio.removeAttribute('src');
    MP.audio.load();
    MP.audio.src=t.url;
    MP.audio.volume=MP.vol;
    MP.audio.load();
    MP.audio.play().catch(e=>{
      const disc=document.getElementById('mp-disc');
      const titleEl=document.getElementById('mp-title');
      if(titleEl) titleEl.textContent='⚠️ 재생 실패 — 파일을 확인해주세요';
      if(disc) disc.classList.add('paused');
      MP.playing=false;
      const pb=document.getElementById('mp-play-btn');if(pb)pb.textContent='▶';
    });
  }
  mpRenderList();
}
function mpPause(){
  MP.playing=false;
  const pb=document.getElementById('mp-play-btn');if(pb) pb.textContent='▶';
  const disc=document.getElementById('mp-disc');if(disc) disc.classList.add('paused');
  if(MP.audio) MP.audio.pause();
  mpStopBuiltin();
  mpPauseYT();
}
function mpToggle(){MP.playing?mpPause():mpPlay();}
function mpNext(){
  const all=mpAllTracks();if(!all.length)return;
  MP.idx=MP.shuffle?Math.floor(Math.random()*all.length):(MP.idx+1)%all.length;
  mpPlay();
}
function mpPrev(){
  const all=mpAllTracks();if(!all.length)return;
  MP.idx=(MP.idx-1+all.length)%all.length;mpPlay();
}
function mpToggleShuffle(){
  MP.shuffle=!MP.shuffle;
  const b=document.getElementById('mp-shuffle-btn');if(b) b.classList.toggle('active',MP.shuffle);
}
function mpToggleRepeat(){
  MP.repeat=!MP.repeat;
  const b=document.getElementById('mp-repeat-btn');if(b) b.classList.toggle('active',MP.repeat);
}
function mpSetVol(v){
  MP.vol=parseFloat(v);
  if(MP.audio) MP.audio.volume=MP.vol;
  if(mpYtPlayer && mpYtPlayer.setVolume) mpYtPlayer.setVolume(Math.round(MP.vol*100));
}
function mpSeek(e){
  const all=mpAllTracks();if(!all.length)return;
  const t=all[MP.idx];
  const bar=e.currentTarget;
  if(t.type==='yt' && mpYtPlayer && mpYtPlayer.getDuration){
    const d=mpYtPlayer.getDuration()||0;
    if(!d) return;
    const to=(e.offsetX/bar.offsetWidth)*d;
    mpYtPlayer.seekTo(to, true);
    return;
  }
  if(!MP.audio||!MP.audio.duration)return;
  MP.audio.currentTime=(e.offsetX/bar.offsetWidth)*MP.audio.duration;
}
function mpUpdateProgress(){
  const all=mpAllTracks();if(!all.length)return;
  const t=all[MP.idx];
  let d=0,c=0;
  if(t.type==='yt' && mpYtPlayer && mpYtPlayer.getCurrentTime){
    d=mpYtPlayer.getDuration()||0;
    c=mpYtPlayer.getCurrentTime()||0;
  } else {
    if(!MP.audio)return;
    d=MP.audio.duration||0;
    c=MP.audio.currentTime||0;
  }
  const pct=d?c/d*100:0;
  const fill=document.getElementById('mp-fill');if(fill) fill.style.width=pct+'%';
  const fmt=s=>{const m=Math.floor(s/60),ss=Math.floor(s%60);return m+':'+(ss<10?'0':'')+ss;};
  const cur=document.getElementById('mp-cur'),dur=document.getElementById('mp-dur');
  if(cur) cur.textContent=fmt(c);if(dur) dur.textContent=fmt(d);
}
function mpClearAll(){
  cgConfirm('업로드한 음악을 전부 삭제할까요?', ()=>{
    MP.uploaded.forEach(t=>{if(t.url&&t.url.startsWith('blob:')) URL.revokeObjectURL(t.url);});
    MP.uploaded=[];MP.idx=0;
    mpSaveSavedLinks();
    if(MP.audio) MP.audio.pause();
    mpStopBuiltin();MP.playing=false;
    mpRenderList();
    showToast('음악 목록 삭제 완료 🗑');
  }, '🎵');
}

/* ─── 파일 업로드 ─── */
function mpFilePicked(files){
  if(!files||!files.length)return;
  const AUDIO_EXTS=/\.(mp3|ogg|wav|aac|flac|m4a|opus|weba|webm)$/i;
  let addedCount=0;
  Array.from(files).forEach(f=>{
    // MIME이 audio/*이거나, 확장자가 오디오면 허용 (환경마다 MIME이 다를 수 있음)
    const okMime=f.type.startsWith('audio/')||f.type===''||f.type==='application/octet-stream';
    const okExt=AUDIO_EXTS.test(f.name);
    if(!okMime&&!okExt)return;
    const url=URL.createObjectURL(f);
    const name=f.name.replace(/\.[^.]+$/, '');
    const sizeMB=(f.size/1024/1024).toFixed(1);
    MP.uploaded.push({name, artist:'내 음악 파일 · '+sizeMB+'MB', type:'upload', url, file:f});
    addedCount++;
  });
  if(!addedCount){alert('오디오 파일을 찾지 못했어요.\nMP3, OGG, WAV, AAC, FLAC, M4A 파일을 선택해주세요!');return;}
  mpRenderList();
  // 추가된 첫 파일부터 재생
  MP.idx=MP.builtin.length+MP.uploaded.length-addedCount;
  mpPlay();
}
function mpDrop(e){
  e.preventDefault();
  document.getElementById('mp-upload-zone').classList.remove('drag');
  mpFilePicked(e.dataTransfer.files);
}

/* ─── 링크 추가(오디오 URL / 유튜브 링크) ─── */
function mpAddUrl(){
  const urlInp=document.getElementById('mp-url-inp');
  const nameInp=document.getElementById('mp-url-name');
  const raw=(urlInp?.value||'').trim();
  const nm=(nameInp?.value||'').trim();
  if(!raw){ showToast('링크를 입력해주세요!'); return; }
  const vid = ytParsId(raw);
  const now = Date.now();
  if(vid){
    MP.uploaded.push({
      name: nm || '🎧 유튜브 오디오',
      artist:'YouTube · 음성만',
      type:'yt',
      vid,
      url:'',
      persist:true,
      updatedAt:now,
    });
  } else {
    let u;
    try{ u=new URL(raw, window.location.href); }catch{ showToast('올바른 URL이 아니에요!'); return; }
    if(!/^https?:$/i.test(u.protocol)){ showToast('http/https URL만 가능해요!'); return; }
    MP.uploaded.push({
      name: nm || '🔗 링크 음악',
      artist:'URL',
      type:'url',
      url:u.href,
      persist:true,
      updatedAt:now,
    });
  }
  mpSaveSavedLinks();
  mpRenderList();
  MP.idx = mpAllTracks().length-1;
  mpPlay();
  if(urlInp) urlInp.value='';
  if(nameInp) nameInp.value='';
  showToast('✅ 재생목록에 추가됐어요!');
}
function mpDeleteUpload(i){
  if(MP.uploaded[i]&&MP.uploaded[i].url.startsWith('blob:'))
    URL.revokeObjectURL(MP.uploaded[i].url);
  MP.uploaded.splice(i,1);
  mpSaveSavedLinks();
  if(MP.idx>=mpAllTracks().length) MP.idx=Math.max(0,mpAllTracks().length-1);
  mpRenderList();
}

/* ─── 내장 사운드 ─── */
function mpGetCtx(){
  if(!MP.ctx) MP.ctx=new(window.AudioContext||window.webkitAudioContext)();
  return MP.ctx;
}
function mpStopBuiltin(){
  MP.nodes.forEach(n=>{try{if(typeof n.stop==='function')n.stop();else if(typeof n==='number')clearTimeout(n);}catch(e){}});
  MP.nodes=[];
}

/* ─── 유튜브 오디오(화면 없이) ─── */
let mpYtPlayer = null;
let mpYtTimer = null;

function mpEnsureYTPlayer(vid){
  if(mpYtPlayer && mpYtPlayer.loadVideoById) return true;
  if(!(window.YT && window.YT.Player)){
    showToast('유튜브 로딩 중... 잠시 후 다시 시도해주세요!');
    return false;
  }
  const div = document.getElementById('mp-yt-audio-div');
  if(!div) return false;
  div.innerHTML = '';
  mpYtPlayer = new YT.Player('mp-yt-audio-div', {
    host:'https://www.youtube-nocookie.com',
    width:'0',
    height:'0',
    videoId: vid,
    playerVars:{
      autoplay:1,
      controls:0,
      rel:0,
      modestbranding:1,
      playsinline:1,
      fs:0,
      disablekb:1,
    },
    events:{
      onReady:()=>{ try{ mpYtPlayer.setVolume(Math.round(MP.vol*100)); }catch(e){} },
      onStateChange:(ev)=>{
        // 0: ended
        if(ev && ev.data===0){
          if(MP.repeat) mpPlay();
          else mpNext();
        }
      }
    }
  });
  return true;
}

function mpPlayYT(vid){
  if(!vid){ showToast('유튜브 링크가 올바르지 않아요!'); return; }
  if(!mpEnsureYTPlayer(vid)) return;
  try{
    if(mpYtPlayer.loadVideoById) mpYtPlayer.loadVideoById(vid);
    else if(mpYtPlayer.playVideo) mpYtPlayer.playVideo();
    mpYtPlayer.setVolume(Math.round(MP.vol*100));
  }catch(e){}
  // 진행바 업데이트 타이머
  if(mpYtTimer) clearInterval(mpYtTimer);
  mpYtTimer = setInterval(()=>{ if(MP.playing) mpUpdateProgress(); }, 500);
}

function mpPauseYT(){
  try{ if(mpYtPlayer && mpYtPlayer.pauseVideo) mpYtPlayer.pauseVideo(); }catch(e){}
  if(mpYtTimer){ clearInterval(mpYtTimer); mpYtTimer=null; }
}
function mpStopYT(){
  try{ if(mpYtPlayer && mpYtPlayer.stopVideo) mpYtPlayer.stopVideo(); }catch(e){}
  if(mpYtTimer){ clearInterval(mpYtTimer); mpYtTimer=null; }
}
function mpPlayBuiltin(id){
  const ctx=mpGetCtx();
  if(ctx.state==='suspended') ctx.resume();
  const master=ctx.createGain();master.gain.value=MP.vol*0.35;master.connect(ctx.destination);
  MP.nodes.push(master);
  function mkNoise(dur){
    const b=ctx.createBuffer(1,ctx.sampleRate*dur,ctx.sampleRate);
    const d=b.getChannelData(0);for(let i=0;i<d.length;i++) d[i]=Math.random()*2-1;
    const s=ctx.createBufferSource();s.buffer=b;s.loop=true;return s;
  }
  if(id==='white'){
    const s=mkNoise(4);s.connect(master);s.start();MP.nodes.push(s);
  } else if(id==='rain'){
    const s=mkNoise(4);const f=ctx.createBiquadFilter();f.type='lowpass';f.frequency.value=700;
    s.connect(f);f.connect(master);s.start();MP.nodes.push(s);
    // 빗방울 패딩 효果
    const f2=ctx.createBiquadFilter();f2.type='highpass';f2.frequency.value=2000;
    const s2=mkNoise(2);const g2=ctx.createGain();g2.gain.value=0.3;
    s2.connect(f2);f2.connect(g2);g2.connect(master);s2.start();MP.nodes.push(s2);
  } else if(id==='cafe'){
    const s=mkNoise(4);const f=ctx.createBiquadFilter();f.type='bandpass';f.frequency.value=1000;f.Q.value=0.3;
    const g=ctx.createGain();g.gain.value=0.4;s.connect(f);f.connect(g);g.connect(master);s.start();MP.nodes.push(s);
    [350,550,780].forEach(freq=>{
      const o=ctx.createOscillator(),g2=ctx.createGain();
      o.frequency.value=freq;o.type='sine';g2.gain.value=0.018;
      o.connect(g2);g2.connect(master);o.start();MP.nodes.push(o);
    });
  } else if(id==='lofi'){
    const bpm=78,beat=60/bpm;
    const scale=[261,294,311,349,392,415,440,466];
    let t=ctx.currentTime;
    function bar(){
      if(!MP.playing)return;
      // kick
      [0,1.5*beat].forEach(off=>{
        const o=ctx.createOscillator(),g=ctx.createGain();
        o.frequency.setValueAtTime(160,t+off);o.frequency.exponentialRampToValueAtTime(30,t+off+0.22);
        g.gain.setValueAtTime(0.6,t+off);g.gain.exponentialRampToValueAtTime(0.001,t+off+0.28);
        o.connect(g);g.connect(master);o.start(t+off);o.stop(t+off+0.28);MP.nodes.push(o);
      });
      // hi-hat
      for(let i=0;i<8;i++){
        const nb=ctx.createBuffer(1,ctx.sampleRate*0.05,ctx.sampleRate);
        const d=nb.getChannelData(0);for(let j=0;j<d.length;j++) d[j]=Math.random()*2-1;
        const s=ctx.createBufferSource();s.buffer=nb;
        const f=ctx.createBiquadFilter();f.type='highpass';f.frequency.value=8000;
        const g=ctx.createGain();g.gain.value=0.04;
        s.connect(f);f.connect(g);g.connect(master);s.start(t+i*beat*0.5);MP.nodes.push(s);
      }
      // melody
      for(let i=0;i<4;i++){
        const note=scale[Math.floor(Math.random()*scale.length)];
        const o=ctx.createOscillator(),g=ctx.createGain();
        o.type='triangle';o.frequency.value=note;
        g.gain.setValueAtTime(0.07,t+i*beat);g.gain.exponentialRampToValueAtTime(0.001,t+i*beat+beat*0.75);
        o.connect(g);g.connect(master);o.start(t+i*beat);o.stop(t+i*beat+beat*0.8);MP.nodes.push(o);
      }
      t+=4*beat;
      const tid=setTimeout(bar,(4*beat-0.25)*1000);
      MP.nodes.push({stop:()=>clearTimeout(tid)});
    }
    bar();
  }
}

/* ════════════════════════════════════════════════════════
   ⏰ 뽀모도로 타이머
════════════════════════════════════════════════════════ */
const POMO={
  workMin:25,shortMin:5,longMin:15,totalRounds:4,
  round:1,phase:'work',// 'work'|'short'|'long'
  running:false,timeLeft:0,totalTime:0,timerID:null,
  soundOn:true,log:[],
};
function pomoInit(){
  POMO.timeLeft=POMO.workMin*60;POMO.totalTime=POMO.workMin*60;
  pomoUpdateUI();
}
function pomoToggle(){
  if(POMO.running){
    clearInterval(POMO.timerID);POMO.running=false;
    document.getElementById('pomo-start-btn').textContent='▶ 시작';
  } else {
    POMO.running=true;
    document.getElementById('pomo-start-btn').textContent='⏸ 일시정지';
    POMO.timerID=setInterval(pomoTick,1000);
  }
}
function pomoTick(){
  POMO.timeLeft--;pomoUpdateUI();
  if(POMO.timeLeft<=0){
    clearInterval(POMO.timerID);POMO.running=false;
    pomoPhaseEnd();
  }
}
function pomoPhaseEnd(){
  if(POMO.soundOn) pomoPlayBell();
  const now=new Date().toLocaleTimeString('ko-KR',{hour:'2-digit',minute:'2-digit'});
  if(POMO.phase==='work'){
    POMO.log.unshift({time:now,text:'🍅 '+POMO.workMin+'분 집중 완료! Round '+POMO.round});
    if(POMO.round>=POMO.totalRounds){
      POMO.phase='long';POMO.timeLeft=POMO.longMin*60;POMO.totalTime=POMO.longMin*60;
      pomoCardStyle('long');document.getElementById('pomo-label').textContent='☕ 긴 휴식';
      POMO.round=1;
    } else {
      POMO.phase='short';POMO.timeLeft=POMO.shortMin*60;POMO.totalTime=POMO.shortMin*60;
      pomoCardStyle('short');document.getElementById('pomo-label').textContent='🌿 짧은 휴식';
    }
  } else {
    const isLong=POMO.phase==='long';
    POMO.log.unshift({time:now,text:(isLong?'☕ 긴 휴식':'🌿 짧은 휴식')+' 완료!'});
    if(!isLong) POMO.round++;
    POMO.phase='work';POMO.timeLeft=POMO.workMin*60;POMO.totalTime=POMO.workMin*60;
    pomoCardStyle('work');document.getElementById('pomo-label').textContent='🍅 집중 시간';
  }
  pomoUpdateUI();pomoRenderLog();
  // 자동 시작
  POMO.running=true;
  document.getElementById('pomo-start-btn').textContent='⏸ 일시정지';
  POMO.timerID=setInterval(pomoTick,1000);
}
function pomoCardStyle(phase){
  const card=document.querySelector('.pomo-card');if(!card)return;
  if(phase==='work') card.style.background='linear-gradient(135deg,#d04050,#b91c1c)';
  else if(phase==='short') card.style.background='linear-gradient(135deg,#16a34a,#15803d)';
  else card.style.background='linear-gradient(135deg,#e05870,#1d4ed8)';
}
function pomoReset(){
  clearInterval(POMO.timerID);POMO.running=false;
  POMO.phase='work';POMO.round=1;
  POMO.timeLeft=POMO.workMin*60;POMO.totalTime=POMO.workMin*60;
  pomoCardStyle('work');
  document.getElementById('pomo-label').textContent='🍅 집중 시간';
  document.getElementById('pomo-start-btn').textContent='▶ 시작';
  pomoUpdateUI();
}
function pomoSkip(){
  clearInterval(POMO.timerID);POMO.running=false;
  POMO.timeLeft=0;pomoPhaseEnd();
}
function pomoSet(type,min,btn){
  if(type==='work') POMO.workMin=min;
  else if(type==='short') POMO.shortMin=min;
  else POMO.longMin=min;
  btn.closest('.pomo-set-pills').querySelectorAll('.ppill').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  if(POMO.phase===type||type==='work'&&POMO.phase==='work'){
    if(!POMO.running){POMO.timeLeft=min*60;POMO.totalTime=min*60;pomoUpdateUI();}
  }
}
function pomoSetRounds(n,btn){
  POMO.totalRounds=n;
  btn.closest('.pomo-set-pills').querySelectorAll('.ppill').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  document.getElementById('pomo-total-rounds').textContent=n;
}
function pomoToggleSound(btn){
  POMO.soundOn=!POMO.soundOn;
  btn.textContent=POMO.soundOn?'🔊 켜짐':'🔇 꺼짐';
  btn.classList.toggle('on',POMO.soundOn);
}
function pomoUpdateUI(){
  const m=Math.floor(POMO.timeLeft/60),s=POMO.timeLeft%60;
  const clockEl=document.getElementById('pomo-clock');
  if(clockEl) clockEl.textContent=(m<10?'0':'')+m+':'+(s<10?'0':'')+s;
  const pct=POMO.totalTime?POMO.timeLeft/POMO.totalTime*100:100;
  const bar=document.getElementById('pomo-bar');if(bar) bar.style.width=pct+'%';
  const roundEl=document.getElementById('pomo-round');if(roundEl) roundEl.textContent=POMO.round;
  // 탭 제목에 시간 표시
  if(POMO.running){
    document.title=(m<10?'0':'')+m+':'+(s<10?'0':'')+s+' | 달라 초등학교';
  } else {
    document.title='달라 초등학교 OX 퀴즈';
  }
}
function pomoRenderLog(){
  const log=document.getElementById('pomo-log');if(!log)return;
  if(!POMO.log.length){log.innerHTML='<div style="color:#c0a0a8;font-size:13px;">아직 기록이 없어요. 공부를 시작해봐요! 🍅</div>';return;}
  log.innerHTML=POMO.log.slice(0,20).map(l=>`<div class="pomo-log-item"><span>${l.time}</span><span>${l.text}</span></div>`).join('');
}
function pomoPlayBell(){
  try{
    const ctx=getAC();
    [0,0.3,0.6].forEach(delay=>{
      const o=ctx.createOscillator(),g=ctx.createGain();
      o.frequency.value=880;o.type='sine';
      g.gain.setValueAtTime(0.4,ctx.currentTime+delay);
      g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+delay+0.5);
      o.connect(g);g.connect(ctx.destination);o.start(ctx.currentTime+delay);o.stop(ctx.currentTime+delay+0.5);
    });
  }catch(e){}
}

/* ════════════════════════════════════════════════════
   📌 유튜브 링크 저장
════════════════════════════════════════════════════ */
const YT_SAVE_KEY='cgSchoolYTLinks';
function ytSavedLoad(){return lsGetJSON(YT_SAVE_KEY,[]);}
function ytSavedSave(list){lsSet(YT_SAVE_KEY, list);}

function ytSaveLink(){
  const url=document.getElementById('yt-url-inp').value.trim();
  if(!url){alert('저장할 URL을 먼저 입력해주세요!');return;}
  const vid=ytParsId(url);
  if(!vid){alert('올바른 유튜브 URL을 입력해주세요.');return;}
  const name=document.getElementById('yt-save-name').value.trim()||'영상 '+new Date().toLocaleDateString('ko-KR');
  const list=ytSavedLoad();
  if(list.find(x=>x.vid===vid)){alert('이미 저장된 영상이에요!');return;}
  list.push({vid,name,savedAt:Date.now()});
  ytSavedSave(list);
  document.getElementById('yt-save-name').value='';
  ytRenderSaved();
}

function ytRenderSaved(){
  const list=ytSavedLoad();
  const cnt=document.getElementById('yt-saved-cnt');
  const wrap=document.getElementById('yt-saved-list');
  if(cnt) cnt.textContent='('+list.length+'개)';
  if(!wrap) return;
  if(!list.length){wrap.innerHTML='<div class="yt-saved-empty">저장된 영상이 없어요. URL 입력 후 💾 저장을 눌러보세요!</div>';return;}
  wrap.innerHTML=list.slice().reverse().map((item,ri)=>{
    const i=list.length-1-ri; // 실제 인덱스
    const thumb='https://img.youtube.com/vi/'+item.vid+'/mqdefault.jpg';
    return `<div class="yt-saved-item">
      <img class="yt-saved-thumb" src="${thumb}" onerror="this.style.display='none'" loading="lazy"/>
      <span class="yt-saved-name" title="${item.name}">${item.name}</span>
      <button class="yt-saved-play" onclick="ytPlaySaved('${item.vid}')">▶ 재생</button>
      <button class="yt-saved-del" onclick="ytDeleteSaved(${i})" title="삭제">🗑</button>
    </div>`;
  }).join('');
}

function ytPlaySaved(vid){
  const inp=document.getElementById('yt-url-inp');
  if(inp) inp.value='https://youtu.be/'+vid;
  ytShowPlayer(vid);
  const cb=document.getElementById('yt-clear-btn');
  if(cb) cb.style.display='inline-flex';
}

function ytDeleteSaved(i){
  const list=ytSavedLoad();
  list.splice(i,1);
  ytSavedSave(list);
  ytRenderSaved();
}

/* ════════════════════════════════════════════════════
   🔐 관리자 모드
════════════════════════════════════════════════════ */

// adminLogin → 아래 새 버전

// adminOpen → 새 버전

// adminClose → 새 버전

// adminRefresh → 새 버전

// adminAddQ → 새 버전

// adminDelCQ → 새 버전

// adminResetRank → 새 버전
// adminResetStats → 새 버전
// adminResetWrong → 새 버전
// adminResetAll → 새 버전

/* ════════════════════════════════════════════════════
   📋 가정통신문
════════════════════════════════════════════════════ */

// noticeLoad → 새 버전
// noticeSaveAll → 새 버전


// noticeRender → 새 버전

// noticeOpen → 새 버전

// noticeModalClose → 새 버전

// noticeDelete → 새 버전

// noticeFormOpen → 새 버전

// noticeFormClose → 새 버전

// noticeSave → 새 버전


/* ════════════════════════════════════════════════════
   🔐 관리자 시스템 v2
════════════════════════════════════════════════════ */

const STU_KEY = 'cgStudents';
let _stuEditId   = null;
let _stuPhotoData = null;
let _stuViewerId  = null;

function stuLoadAll()      { return lsGetJSON(STU_KEY, []); }
function stuSaveAll(list)  { lsSet(STU_KEY, list); }

/* ── 학생 사진 UI 공통 처리 ── */
function stuSetPhoto(src){
  _stuPhotoData = src || null;
  const previewDiv = document.getElementById('stu-preview-img');
  const previewImg = document.getElementById('stu-preview-img-el');
  const previewPh  = document.getElementById('stu-preview-placeholder');
  if (!src) {
    if (previewDiv) previewDiv.style.display='none';
    if (previewImg) previewImg.src='';
    if (previewPh)  previewPh.style.display='';
    return;
  }
  if (previewDiv) previewDiv.style.display='';
  if (previewImg) previewImg.src=src;
  if (previewPh)  previewPh.style.display='none';
}

function stuRender() {
  const grid    = document.getElementById('stu-grid');
  const empty   = document.getElementById('stu-empty');
  const addBtn  = document.getElementById('stu-add-btn');
  if (!grid) return;

  /* 관리자 여부에 따라 등록 버튼 토글 */
  if (addBtn) addBtn.style.display = adminIsLogged() ? '' : 'none';

  const list = stuLoadAll().sort((a,b)=>(+a.num||999)-(+b.num||999));

  if (!list.length) {
    grid.innerHTML = '';
    if (empty) empty.style.display = '';
    return;
  }
  if (empty) empty.style.display = 'none';

  grid.innerHTML = list.map(s => {
    const emoji  = s.gender === '여' ? '👧' : '👦';
    const photo  = s.photo
      ? `<img class="stu-avatar" src="${s.photo}" alt="${s.name}" loading="lazy"/>`
      : `<div class="stu-avatar-placeholder">${emoji}</div>`;
    const badges = s.hobby
      ? s.hobby.split(',').slice(0,2).map(h=>`<span class="stu-badge">${h.trim()}</span>`).join('')
      : '';
    const adminBtns = adminIsLogged()
      ? `<div class="stu-card-actions">
           <button class="stu-edit-btn" onclick="event.stopPropagation();stuOpenModal('${s.id}')">✏️</button>
           <button class="stu-del-btn"  onclick="event.stopPropagation();stuDelete('${s.id}')">🗑</button>
         </div>` : '';
    return `<div class="stu-card" onclick="stuViewerOpen('${s.id}')">
      ${adminBtns}
      ${photo}
      <div class="stu-name">${s.name}</div>
      <div class="stu-num">${s.num ? s.num+'번' : ''}${s.num && s.gender ? ' · ' : ''}${s.gender||''}</div>
      ${badges ? `<div class="stu-badges">${badges}</div>` : ''}
    </div>`;
  }).join('');
}

/* ── 등록/수정 모달 열기 ── */
function stuOpenModal(id) {
  if (!adminIsLogged()) { showToast('⚠️ 관리자만 등록할 수 있어요!'); adminLogin(); return; }
  _stuEditId   = id || null;
  _stuPhotoData = null;

  const titleEl = document.getElementById('stu-modal-title-text');
  if (titleEl) titleEl.textContent = id ? '✏️ 학생 수정' : '👨‍🎓 학생 등록';

  /* 폼 초기화 */
  ['stu-f-num','stu-f-name','stu-f-gender','stu-f-birth','stu-f-hobby','stu-f-memo']
    .forEach(fid => { const el=document.getElementById(fid); if(el) el.value=''; });
  const photoUrlEl = document.getElementById('stu-photo-url');
  if (photoUrlEl) photoUrlEl.value = '';
  const photoFileEl = document.getElementById('stu-photo-input');
  if (photoFileEl) photoFileEl.value = '';

  stuSetPhoto(null);

  /* 수정 시 기존 데이터 채우기 */
  if (id) {
    const s = stuLoadAll().find(x=>x.id===id);
    if (s) {
      const set = (fid,val) => { const el=document.getElementById(fid); if(el) el.value=val||''; };
      set('stu-f-num',   s.num);
      set('stu-f-name',  s.name);
      set('stu-f-gender',s.gender);
      set('stu-f-birth', s.birth);
      set('stu-f-hobby', s.hobby);
      set('stu-f-memo',  s.memo);
      if (s.photo) {
        stuSetPhoto(s.photo);
        // URL이면 입력칸에도 채워주기 (data:image... 는 제외)
        if (photoUrlEl && /^https?:\/\//i.test(s.photo)) photoUrlEl.value = s.photo;
      }
    }
  }
  const bg = document.getElementById('stu-modal-bg');
  if (bg) bg.classList.add('on');
}

/* ── 모달 닫기 ── */
function stuCloseModal() {
  const bg = document.getElementById('stu-modal-bg');
  if (bg) bg.classList.remove('on');
  _stuEditId   = null;
  _stuPhotoData = null;
  const photoUrlEl = document.getElementById('stu-photo-url');
  if (photoUrlEl) photoUrlEl.value = '';
  const photoFileEl = document.getElementById('stu-photo-input');
  if (photoFileEl) photoFileEl.value = '';
  stuSetPhoto(null);
}

/* ── 사진 선택 ── */
function stuPhotoChange(input) {
  const file = input.files[0];
  if (!file) return;
  // 파일 선택 시 URL 입력은 비우기
  const photoUrlEl = document.getElementById('stu-photo-url');
  if (photoUrlEl) photoUrlEl.value = '';
  /* 2MB 초과 시 리사이즈 */
  const reader = new FileReader();
  reader.onload = e => {
    const img = new Image();
    img.onload = () => {
      const MAX = 800;
      let w = img.width, h = img.height;
      if (w > MAX || h > MAX) {
        const ratio = Math.min(MAX/w, MAX/h);
        w = Math.round(w*ratio); h = Math.round(h*ratio);
      }
      const canvas = document.createElement('canvas');
      canvas.width=w; canvas.height=h;
      canvas.getContext('2d').drawImage(img,0,0,w,h);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.82);
      stuSetPhoto(dataUrl);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

/* ── 사진 URL 적용 ── */
function stuPhotoUrlApply() {
  const el = document.getElementById('stu-photo-url');
  const raw = (el?.value || '').trim();
  if (!raw) { showToast('이미지 URL을 입력해주세요!'); return; }
  let url;
  try {
    url = new URL(raw, window.location.href);
  } catch {
    showToast('올바른 URL이 아니에요. (예: https://...)');
    return;
  }
  if (!/^https?:$/i.test(url.protocol)) {
    showToast('http/https URL만 사용할 수 있어요!');
    return;
  }
  // URL 적용 시 파일 선택은 해제
  const photoFileEl = document.getElementById('stu-photo-input');
  if (photoFileEl) photoFileEl.value = '';
  stuSetPhoto(url.href);
  showToast('🔗 이미지 링크가 적용됐어요!');
}

/* ── 사진 지우기 ── */
function stuPhotoClear(){
  const el = document.getElementById('stu-photo-url');
  if (el) el.value = '';
  const photoFileEl = document.getElementById('stu-photo-input');
  if (photoFileEl) photoFileEl.value = '';
  stuSetPhoto(null);
}

/* ── 저장 ── */
function stuSave() {
  if (!adminIsLogged()) { showToast('⚠️ 관리자만 저장할 수 있어요!'); return; }
  const name = (document.getElementById('stu-f-name')?.value || '').trim();
  if (!name) { showToast('이름을 입력하세요!'); return; }

  const list = stuLoadAll();
  const data = {
    id:        _stuEditId || ('stu_' + Date.now()),
    num:       parseInt(document.getElementById('stu-f-num')?.value, 10) || 0,
    name,
    gender:    document.getElementById('stu-f-gender')?.value || '',
    birth:     (document.getElementById('stu-f-birth')?.value  || '').trim(),
    hobby:     (document.getElementById('stu-f-hobby')?.value  || '').trim(),
    memo:      (document.getElementById('stu-f-memo')?.value   || '').trim(),
    photo:     _stuPhotoData || null,
    updatedAt: Date.now(),
  };

  if (_stuEditId) {
    const idx = list.findIndex(x=>x.id===_stuEditId);
    if (idx >= 0) list[idx] = data; else list.push(data);
  } else {
    list.push(data);
  }
  stuSaveAll(list);
  stuCloseModal();
  stuRender();
  showToast(_stuEditId ? '✅ 학생 정보 수정됨!' : '✅ 학생 등록됨!');
}

/* ── 삭제 ── */
function stuDelete(id) {
  if (!adminIsLogged()) return;
  const s = stuLoadAll().find(x=>x.id===id);
  if (!s) return;
  cgConfirm(`${s.name} 학생을 삭제할까요?`, ()=>{
    stuSaveAll(stuLoadAll().filter(x=>x.id!==id));
    stuRender();
    showToast('🗑 삭제됐어요!');
  }, '🗑', '삭제', 'linear-gradient(135deg,#e04858,#f06878)');
}

/* ── 상세 뷰어 열기 ── */
function stuViewerOpen(id) {
  const s = stuLoadAll().find(x=>x.id===id);
  if (!s) return;
  _stuViewerId = id;

  /* 사진 or 이모지 */
  const photoWrap = document.getElementById('stu-viewer-photo-wrap');
  if (photoWrap) {
    const emoji = s.gender === '여' ? '👧' : '👦';
    photoWrap.innerHTML = s.photo
      ? `<img class="stu-viewer-photo" src="${s.photo}" alt="${s.name}"/>`
      : `<div class="stu-viewer-photo-placeholder">${emoji}</div>`;
  }

  const nameEl = document.getElementById('stu-viewer-name');
  const numEl  = document.getElementById('stu-viewer-num');
  if (nameEl) nameEl.textContent = s.name;
  if (numEl)  numEl.textContent  = [s.num?s.num+'번':'', s.gender].filter(Boolean).join(' · ');

  /* 정보 행 */
  const infoEl = document.getElementById('stu-viewer-info');
  if (infoEl) {
    const rows = [
      s.birth && ['📅 생년월일', s.birth],
      s.hobby && ['⭐ 특기/관심사', s.hobby],
      (adminIsLogged() && s.memo) && ['📝 메모', s.memo],
    ].filter(Boolean);
    infoEl.innerHTML = rows.map(([k,v])=>
      `<div class="stu-viewer-row">
         <span class="stu-viewer-key">${k}</span>
         <span class="stu-viewer-val">${v}</span>
       </div>`
    ).join('');
  }

  /* 수정 버튼은 관리자만 */
  const editBtn = document.getElementById('stu-viewer-edit-btn');
  if (editBtn) editBtn.style.display = adminIsLogged() ? '' : 'none';

  const bg = document.getElementById('stu-viewer-bg');
  if (bg) bg.classList.add('on');
}

/* ── 뷰어 닫기 ── */
function stuViewerClose() {
  const bg = document.getElementById('stu-viewer-bg');
  if (bg) bg.classList.remove('on');
  _stuViewerId = null;
}

/* ── 뷰어에서 수정 이동 ── */
function stuViewerEdit() {
  const id = _stuViewerId;
  stuViewerClose();
  if (id) stuOpenModal(id);
}


const ADMIN_KEY = 'cgSchoolAdmins';
/* ══ 단순 비밀번호 해시 (FNV-1a 32bit) ══ */
function _hashPw(str){
  let h=2166136261>>>0;
  for(let i=0;i<str.length;i++){h^=str.charCodeAt(i);h=Math.imul(h,16777619)>>>0;}
  // 항상 8자리(hex)로 고정 (이전 버전의 가변 길이 해시도 마이그레이션 가능)
  return (h>>>0).toString(16).padStart(8,'0');
}

let _loggedAdminId = null;
const ADMIN_SESSION_KEY = 'cgSchoolAdminSessionId';

function adminRestoreSession() {
  try {
    const sid = (lsGet(ADMIN_SESSION_KEY, '') || '').trim();
    if (!sid) return;
    const ok = adminGetList().some(a => a && a.id === sid);
    if (ok) _loggedAdminId = sid;
    else localStorage.removeItem(ADMIN_SESSION_KEY);
  } catch(e) {}
}

function adminGetList() {
  try {
    const saved = lsGetJSON(ADMIN_KEY, []);
    // 비밀번호 마이그레이션
    // - 이전 버전: 해시 길이가 1~8자리로 가변(toString(16) 결과)일 수 있음
    // - 평문/기타 문자열은 해시로 변환
    let migrated = false;
    saved.forEach(a => {
      if (!a || typeof a.pw !== 'string' || !a.pw) return;
      const pw = a.pw.trim();
      // 1~8자리의 hex 문자열이면 "기존 해시"로 보고 8자리로 정규화
      if (/^[0-9a-f]{1,8}$/i.test(pw)) {
        const norm = pw.toLowerCase().padStart(8,'0');
        if (a.pw !== norm) { a.pw = norm; migrated = true; }
        return;
      }
      // 그 외는 평문/기타로 판단 → 새 해시로 변환
      a.pw = _hashPw(pw);
      migrated = true;
    });
    if (!saved.find(a => a.id === 'admin99')) {
      saved.unshift({ id:'admin99', pw:_hashPw('99admin'), role:'최고관리자', isDefault:true });
      migrated = true;
    }
    if (migrated) adminSaveList(saved);
    return saved;
  } catch { return [{ id:'admin99', pw:_hashPw('99admin'), role:'최고관리자', isDefault:true }]; }
}
function adminSaveList(list) { lsSet(ADMIN_KEY, list); }
function adminIsLogged() { return _loggedAdminId !== null; }

function adminLogin() {
  // 전용 모달로 열기
  const modal = document.getElementById('admin-login-modal');
  if (modal) {
    const idEl = document.getElementById('alm-id');
    const pwEl = document.getElementById('alm-pw');
    const errEl = document.getElementById('alm-err');
    if (idEl) idEl.value = '';
    if (pwEl) pwEl.value = '';
    if (errEl) errEl.textContent = '';
    modal.classList.add('on');
    setTimeout(() => { if (idEl) idEl.focus(); }, 100);
  }
}
function adminLoginModalClose() {
  const modal = document.getElementById('admin-login-modal');
  if (modal) modal.classList.remove('on');
}
function adminLoginSubmit() {
  const id = (document.getElementById('alm-id')?.value || '').trim();
  const pw = (document.getElementById('alm-pw')?.value || '').trim();
  const errEl = document.getElementById('alm-err');
  if (!id || !pw) {
    if (errEl) errEl.textContent = '⚠ 아이디와 비밀번호를 모두 입력해주세요.';
    return;
  }
  const found = adminGetList().find(a => a.id === id && a.pw === _hashPw(pw));
  if (!found) {
    if (errEl) {
      errEl.textContent = '❌ 아이디 또는 비밀번호가 틀렸어요.';
      const pwEl = document.getElementById('alm-pw');
      if (pwEl) { pwEl.value=''; pwEl.focus(); }
    }
    return;
  }
  // ── 로그인 성공 ──
  _loggedAdminId = id;
  try { localStorage.setItem(ADMIN_SESSION_KEY, id); } catch(e) {}
  adminLoginModalClose();

  // 잠금 오버레이 해제
  const lo = document.getElementById('make-lock-overlay');
  if (lo) lo.style.display = 'none';

  // 각 탭 갱신
  settingsRender && settingsRender();
  noticeRender   && noticeRender();
  stuRender      && stuRender();
  schoolAdminBtnRefresh && schoolAdminBtnRefresh();

  // 설정탭 버튼에서 로그인했으면 → 설정탭으로 이동
  const settingsIdx = TABS.indexOf('settings');
  const settingsBtn = document.querySelectorAll('.tab')[settingsIdx];
  if (settingsBtn && settingsBtn.classList.contains('on')) {
    _doSwitchTab('settings', settingsBtn);
  }

  showToast('✅ 관리자 로그인됨 (@' + id + ')');

  // 관리자는 학생 이름 화면 건너뛰고 바로 진입
  setTimeout(() => {
    EL.nameInput.value = '관리자';
    startGame();
  }, 300);
}

function adminRefreshOverlay() {
  // 관리자 오버레이의 통계 업데이트
  const statsEl = document.getElementById('admin-stats');
  if (statsEl) {
    const rankList = loadRank();
    const wrongList = loadWrong();
    statsEl.innerHTML =
      '<div class="admin-stat"><div class="admin-stat-val">' + (typeof ALL_QS !== 'undefined' ? ALL_QS.length : 0) + '</div><div class="admin-stat-lbl">총 문제</div></div>' +
      '<div class="admin-stat"><div class="admin-stat-val">' + rankList.length + '</div><div class="admin-stat-lbl">랭킹 기록</div></div>' +
      '<div class="admin-stat"><div class="admin-stat-val">' + wrongList.length + '</div><div class="admin-stat-lbl">오답 수</div></div>';
  }
  const cqList = document.getElementById('admin-cq-list');
  const cqCnt = document.getElementById('admin-cq-cnt');
  if (typeof S !== 'undefined' && cqList) {
    if (cqCnt) cqCnt.textContent = S.customQs.length;
    cqList.innerHTML = S.customQs.length
      ? S.customQs.map((q,i) => '<div class="admin-cq-item"><span style="flex:1">' + esc(q[0]) + '</span><button class="admin-cq-del" onclick="adminDelCQ(' + i + ')">🗑</button></div>').join('')
      : '<div style="color:#c0a0a8;font-size:13px;">사용자 추가 문제 없음</div>';
  }
}

function adminClose() {
  const ov = document.getElementById('admin-overlay');
  if (ov) ov.classList.remove('on');
}

function adminDelCQ(i) {
  S.customQs.splice(i, 1);
  renderCustomList && renderCustomList();
  adminRefreshOverlay();
}

function adminLoginAs(id) {
  const modal = document.getElementById('admin-login-modal');
  const idEl = document.getElementById('alm-id');
  if (modal && idEl) {
    idEl.value = id;
    const pwEl = document.getElementById('alm-pw');
    if (pwEl) { pwEl.value=''; }
    document.getElementById('alm-err').textContent = '';
    modal.classList.add('on');
    setTimeout(()=>{ if(pwEl) pwEl.focus(); }, 100);
  }
}

function adminLogout() {
  _loggedAdminId = null;
  try { localStorage.removeItem(ADMIN_SESSION_KEY); } catch(e) {}
  // 잠금 오버레이 복원
  const _lo=document.getElementById('make-lock-overlay'); if(_lo) _lo.style.display='flex';
  noticeRender   && noticeRender();
  settingsRender && settingsRender();
  stuRender      && stuRender();
  schoolAdminBtnRefresh && schoolAdminBtnRefresh();
  showToast('👋 로그아웃 됐어요!');
}

function adminAddAccount() {
  if (!adminIsLogged()) { adminLogin(); return; }
  const id = prompt('새 관리자 ID:');
  if (!id || !id.trim()) return;
  const pw = prompt('새 관리자 비밀번호:');
  if (!pw || !pw.trim()) return;
  const role = prompt('역할:', '부관리자') || '부관리자';
  const list = adminGetList();
  if (list.find(a => a.id === id.trim())) { alert('이미 있는 ID예요!'); return; }
  list.push({ id: id.trim(), pw: _hashPw(pw.trim()), role: role.trim(), isDefault: false });
  adminSaveList(list);
  settingsRender();
  showToast('✅ '+id+' 관리자 추가 완료!');
}

function adminDeleteAccount(id) {
  if (!adminIsLogged()) return;
  const list = adminGetList();
  if (list.find(a => a.id === id && a.isDefault)) { showToast('⚠️ 기본 관리자는 삭제 불가!'); return; }
  cgConfirm(id + ' 관리자를 삭제할까요?', ()=>{
    adminSaveList(list.filter(a => a.id !== id));
    settingsRender();
  }, '👤');
}

function settingsRender() {
  const logged = adminIsLogged();
  // 관리자 전용 섹션 표시/숨김 (admin-tools-section 직접 참조)
  const toolsSec = document.getElementById('admin-tools-section');
  if (toolsSec) toolsSec.style.display = logged ? 'flex' : 'none';
  // 기존 .admin-section 도 함께 처리 (하위호환)
  document.querySelectorAll('.admin-section').forEach(el => {
    el.style.display = logged ? '' : 'none';
  });

  // 로그인 배너 업데이트
  const banner = document.getElementById('st-login-banner');
  const statusEl = document.getElementById('st-login-status');
  const hintEl = document.getElementById('st-login-hint');
  const loginBtn = document.getElementById('st-login-btn');
  if (banner) {
    if (logged) {
      banner.style.background = 'linear-gradient(135deg,#15803d,#16a34a)';
      if (statusEl) statusEl.textContent = '✅ 관리자 로그인됨 (@' + _loggedAdminId + ')';
      if (hintEl) hintEl.textContent = '관리자 권한으로 모든 기능을 사용할 수 있습니다';
      if (loginBtn) { loginBtn.textContent = '🚪 로그아웃'; loginBtn.onclick = adminLogout; loginBtn.style.color='#15803d'; }
    } else {
      banner.style.background = 'linear-gradient(135deg,#e06080,#7c3aed)';
      if (statusEl) statusEl.textContent = '🔒 관리자 로그인이 필요합니다';
      // 보안상 기본 계정/비밀번호는 화면에 표시하지 않음
      if (hintEl) hintEl.textContent = '관리자 계정으로 로그인하세요';
      if (loginBtn) { loginBtn.textContent = '🔓 로그인'; loginBtn.onclick = adminLogin; loginBtn.style.color='#e06080'; }
    }
  }

  // 계정 목록 렌더
  const wrap = document.getElementById('admin-accounts-list');
  if (wrap && logged) {
    const list = adminGetList();
    wrap.innerHTML = list.map(a => {
      const isMe = a.id === _loggedAdminId;
      return '<div class="admin-account-item">' +
        '<div class="aai-avatar">' + a.id[0].toUpperCase() + '</div>' +
        '<div class="aai-info"><div class="aai-id">@' + a.id + (a.isDefault ? ' 👑' : '') + '</div>' +
          '<div class="aai-role">' + a.role + '</div></div>' +
        (isMe ? '<span class="aai-logged">✅ 나</span>' : '<button class="aai-login-btn" onclick="adminLoginAs(\'' + a.id + '\')">전환</button>') +
        (!a.isDefault ? '<button class="aai-del" onclick="adminDeleteAccount(\'' + a.id + '\')">🗑</button>' : '') +
      '</div>';
    }).join('');
  }

  // 문제 수 업데이트
  const qCnt = document.getElementById('settings-q-cnt');
  if (qCnt) qCnt.textContent = (typeof ALL_QS !== 'undefined' ? ALL_QS.length : 0) + '문제';
}

/* ── 학급생활: 관리자 로그인 버튼 동기화 ── */
function schoolAdminBtnRefresh(){
  const logged = adminIsLogged();
  // body 클래스(모바일에서 hover 없이도 관리자 버튼 보이게)
  try{
    document.body.classList.toggle('admin-on', logged);
  } catch(e){}

  const ids = ['school-admin-btn-ann','school-admin-btn-notice','school-admin-btn-tt','school-admin-btn-stu'];
  ids.forEach(id=>{
    const btn = document.getElementById(id);
    if(!btn) return;
    if(logged){
      btn.textContent = '🚪 로그아웃';
      btn.onclick = adminLogout;
      btn.style.color = '#15803d';
    } else {
      btn.textContent = '🔐 관리자 로그인';
      btn.onclick = adminLogin;
      btn.style.color = '#e06080';
    }
  });
}

/* ══ 공통 문제 뱅크 추가 (설정탭 + 오버레이 공유) ══ */
function _adminAddQCore(textId, ansId, catId) {
  if (!adminIsLogged()) { showToast('⚠️ 관리자 로그인 후 사용 가능!'); adminLogin(); return; }
  const textEl = document.getElementById(textId);
  const ansEl  = document.getElementById(ansId);
  const catEl  = document.getElementById(catId);
  const text = (textEl?.value||'').trim();
  const ans  = ansEl ? ansEl.value === 'true' : true;
  const cat  = (catEl?.value||'').trim() || '📝사용자추가';
  if (!text) { showToast('⚠️ 문제 내용을 입력해주세요!'); return; }
  if (ALL_QS.some(q => q[0] === text)) { showToast('⚠️ 이미 동일한 문제가 있어요!'); return; }
  ALL_QS.push([text, ans, cat]);
  if(textEl) textEl.value='';
  if(catEl) catEl.value='';
  settingsRender && settingsRender();
  showToast('✅ 문제 추가 완료! 총 '+ALL_QS.length+'문제');
}
function adminAddQ()        { _adminAddQCore('admin-q-text',    'admin-q-ans',    'admin-q-cat'); }
function adminAddQOverlay() { _adminAddQCore('admin-q-text-ov', 'admin-q-ans-ov', 'admin-q-cat-ov'); }

function adminResetRank() {
  if(!adminIsLogged()){showToast("⚠️ 관리자 로그인 후 사용 가능!");adminLogin();return;}
  cgConfirm('랭킹을 초기화할까요?', ()=>{
    localStorage.removeItem(RANK_KEY);
    renderRank && renderRank();
    showToast('🏆 랭킹 초기화 완료!');
  }, '🏆', '초기화', 'linear-gradient(135deg,#f08030,#ea580c)');
}
function adminResetStats() {
  if(!adminIsLogged()){showToast("⚠️ 관리자 로그인 후 사용 가능!");adminLogin();return;}
  cgConfirm('통계를 초기화할까요?', ()=>{
    S.catCorrect = {}; S.catWrong = {}; S.maxCombo = 0;
    localStorage.removeItem(CAT_STATS_KEY);
    localStorage.removeItem(BEST_COMBO_KEY);
    renderStats && renderStats();
    showToast('📊 통계 초기화 완료!');
  }, '📊', '초기화', 'linear-gradient(135deg,#f08030,#ea580c)');
}
function adminResetAll() {
  cgConfirm('모든 데이터를 초기화할까요? 되돌릴 수 없어요!', ()=>{
    [RANK_KEY, WRONG_KEY, CAT_STATS_KEY, BEST_COMBO_KEY, CUSTOM_QS_KEY, 'cgSchoolYTLinks'].forEach(k => localStorage.removeItem(k));
    S.catCorrect = {}; S.catWrong = {}; S.customQs = []; S.maxCombo = 0;
    try{localStorage.removeItem(CUSTOM_QS_KEY);}catch(e){}
    renderRank && renderRank(); renderStats && renderStats();
    ytRenderSaved && ytRenderSaved();
    showToast('⚠️ 전체 초기화 완료!');
  }, '⚠️', '초기화', 'linear-gradient(135deg,#e05060,#b91c1c)');
}

/* ════════════════════════════════════════════════════
   📋 가정통신문
════════════════════════════════════════════════════ */
const NOTICE_KEY = 'cgSchoolNotices';
const NOTICE_ICONS = ['📢','📌','🏫','📝','🎒','🌸','⭐','📅','🎉','🔔'];

function noticeLoad() {
  return lsGetJSON(NOTICE_KEY, []);
}
function noticeSaveAll(list) { lsSet(NOTICE_KEY, list); }

function noticeRender() {
  // 관리자만 작성/삭제 버튼 표시
  const isAdmin = adminIsLogged();
  document.querySelectorAll('.np-add-btn, .np-del-btn2, .nm-del-btn').forEach(btn => {
    btn.style.display = isAdmin ? '' : 'none';
  });
  const list = noticeLoad();
  const grid = document.getElementById('np-grid');
  if (!grid) return;
  if (!list.length) {
    grid.innerHTML = '<div class="np-empty">📋 아직 등록된 가정통신문이 없어요!<br>위의 ✏️ 새 통신문 작성 버튼을 눌러보세요.</div>';
    return;
  }
  grid.innerHTML = list.slice().reverse().map((n, ri) => {
    const i = list.length - 1 - ri;
    const icon = NOTICE_ICONS[i % NOTICE_ICONS.length];
    const thumb = n.img
      ? '<img class="ng-card-thumb" src="' + n.img + '" alt="" onerror="this.style.display=\'none\'">'
      : '<div class="ng-card-thumb ng-card-thumb-icon">' + icon + '</div>';
    return '<div class="ng-card' + (n.read ? '' : ' unread') + '" onclick="noticeOpen(' + i + ')">' +
      thumb +
      '<div class="ng-card-body">' +
        (!n.read ? '<span class="np-new-badge">NEW</span>' : '') +
        '<div class="ng-card-title">' + esc(n.title) + '</div>' +
        '<div class="ng-card-meta">' +
          '<span class="ng-card-from">' + esc(n.from || '담임교사') + '</span>' +
          '<span class="ng-card-date">' + esc(n.date) + '</span>' +
        '</div>' +
      '</div>' +
    '</div>';
  }).join('');

  // 사이드바 최신 공지 3개 갱신
  const sicList = document.getElementById('sic-notice-list');
  if (sicList) {
    if (!list.length) {
      sicList.innerHTML = '<div class="sic-empty">등록된 공지가 없어요</div>';
    } else {
      const recent = list.slice().reverse().slice(0, 3);
      sicList.innerHTML = recent.map((n, ri) => {
        const i = list.length - 1 - ri;
        return '<div class="sic-notice-item" onclick="noticeOpen(' + i + ')">' +
          (n.read ? '' : '<span class="np-new-badge" style="margin-right:4px;">N</span>') +
          esc(n.title) + '</div>';
      }).join('');
    }
  }
}

function _buildVideoEmbed(url) {
  const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{11})/);
  if (ytMatch) {
    const vid = ytMatch[1];
    return '<iframe class="npd-video-frame" src="https://www.youtube.com/embed/' + vid +
      '" frameborder="0" allowfullscreen allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"></iframe>';
  }
  return '<video class="npd-video-player" src="' + url +
    '" controls playsinline preload="metadata"></video>';
}

let _noticeViewIdx = -1;
function noticeOpen(i) {
  const list = noticeLoad();
  const n = list[i];
  if (!n) return;
  _noticeViewIdx = i;
  if (!n.read) { n.read = true; noticeSaveAll(list); noticeRender(); }
  document.getElementById('npd-title').textContent = n.title;
  document.getElementById('npd-date').textContent = n.date;
  document.getElementById('npd-content').textContent = n.content;
  const fromEl = document.getElementById('npd-from');
  if (fromEl) fromEl.textContent = n.from || '담임교사';
  // 이미지
  let imgEl = document.getElementById('npd-img');
  if (!imgEl) {
    imgEl = document.createElement('img');
    imgEl.id = 'npd-img';
    imgEl.style.cssText = 'max-width:100%;border-radius:12px;margin-top:8px;border:2px solid #e8d5f5;';
    document.getElementById('npd-content').after(imgEl);
  }
  if (n.img) { imgEl.src = n.img; imgEl.style.display = ''; }
  else { imgEl.style.display = 'none'; }
  // 동영상 처리
  const videoWrap = document.getElementById('npd-video-wrap');
  if (videoWrap) {
    if (n.videoUrl) {
      videoWrap.style.display = '';
      videoWrap.innerHTML = _buildVideoEmbed(n.videoUrl);
    } else {
      videoWrap.style.display = 'none';
      videoWrap.innerHTML = '';
    }
  }
  document.getElementById('np-list-view').style.display = 'none';
  document.getElementById('np-header-row').style.display = 'none';
  document.getElementById('np-detail-view').style.display = '';
}
function noticeBackToList() {
  document.getElementById('np-list-view').style.display = '';
  document.getElementById('np-header-row').style.display = '';
  document.getElementById('np-detail-view').style.display = 'none';
  const videoWrap = document.getElementById('npd-video-wrap');
  if (videoWrap) { videoWrap.innerHTML = ''; videoWrap.style.display = 'none'; }
  _noticeViewIdx = -1;
}
function noticeDeleteInline() {
  if(!adminIsLogged()){showToast("⚠️ 관리자만 가정통신문을 삭제할 수 있어요!");adminLogin();return;}
  if (_noticeViewIdx < 0) return;
  cgConfirm('이 가정통신문을 삭제할까요?', ()=>{
    const list = noticeLoad();
    list.splice(_noticeViewIdx, 1);
    noticeSaveAll(list);
    noticeRender();
    noticeBackToList();
    showToast('삭제했어요 🗑');
  }, '📄');
}
function noticeModalClose() {
  document.getElementById('notice-modal-bg').classList.remove('on');
}
function noticeDelete() {
  if(!adminIsLogged()){showToast("⚠️ 관리자만 가정통신문을 삭제할 수 있어요!");adminLogin();return;}
  if (_noticeViewIdx < 0) return;
  cgConfirm('이 가정통신문을 삭제할까요?', ()=>{
    const list = noticeLoad();
    list.splice(_noticeViewIdx, 1);
    noticeSaveAll(list);
    noticeRender();
    noticeModalClose();
    showToast('삭제했어요 🗑');
  }, '📄');
}
function noticeFormOpen() {
  if(!adminIsLogged()){showToast("⚠️ 관리자만 가정통신문을 작성할 수 있어요!");adminLogin();return;}
  const title = document.getElementById('nf-title');
  const from = document.getElementById('nf-from');
  const content = document.getElementById('nf-content');
  const videoUrl = document.getElementById('nf-video-url');
  if(title) title.value = '';
  if(from) from.value = '';
  if(content) content.value = '';
  nfClearImg();
  if(videoUrl) videoUrl.value = '';
  const bg = document.getElementById('notice-form-bg');
  if(bg) bg.classList.add('on');
}
/* ════════════════════════════════════════════════
   🎬 로컬 영상 재생
════════════════════════════════════════════════ */
const LV_SAVE_KEY = 'cgLocalVideoLinks';

function lvLoadSaved(){
  try{
    const list = lsGetJSON(LV_SAVE_KEY, []);
    return Array.isArray(list) ? list : [];
  } catch(e){ return []; }
}
function lvSaveSaved(list){
  try{ lsSet(LV_SAVE_KEY, list); } catch(e){}
}

function lvLoadFile(input) {
  const file = input.files && input.files[0];
  if (!file) return;
  const url = URL.createObjectURL(file);
  const video = document.getElementById('lv-video');
  const ph    = document.getElementById('lv-video-placeholder');
  const fname = document.getElementById('lv-filename');
  if (!video) return;
  video.src = url;
  video.load();
  video.play().catch(()=>{});
  video.style.display = '';
  if (ph) ph.style.display = 'none';
  if (fname) { fname.textContent = '▶ ' + file.name; fname.style.color = ''; }
}

function lvAddUrl(){
  const urlInp=document.getElementById('lv-url-inp');
  const nameInp=document.getElementById('lv-url-name');
  const raw=(urlInp?.value||'').trim();
  const nm=(nameInp?.value||'').trim();
  if(!raw){ showToast('영상 URL을 입력해주세요!'); return; }
  // 유튜브 링크는 <video>로 직접 재생 불가
  if(ytParsId(raw)){ showToast('유튜브 링크는 “유튜브 탭”에서 재생해주세요!'); return; }
  let u;
  try{ u=new URL(raw, window.location.href); }catch{ showToast('올바른 URL이 아니에요!'); return; }
  if(!/^https?:$/i.test(u.protocol)){ showToast('http/https URL만 가능해요!'); return; }
  const list = lvLoadSaved();
  list.unshift({name: nm || '🔗 링크 영상', url:u.href, updatedAt:Date.now()});
  lvSaveSaved(list.slice(0,50)); // 너무 많아지지 않게 제한
  if(urlInp) urlInp.value='';
  if(nameInp) nameInp.value='';
  lvRenderSaved();
  showToast('✅ 저장됐어요!');
}

function lvPlayUrl(url, name){
  const video = document.getElementById('lv-video');
  const ph    = document.getElementById('lv-video-placeholder');
  const fname = document.getElementById('lv-filename');
  if(!video) return;
  video.src = url;
  video.load();
  video.play().catch(()=>{});
  video.style.display='';
  if(ph) ph.style.display='none';
  if(fname){ fname.textContent = '▶ ' + (name||url); fname.style.color=''; }
}

function lvDeleteSaved(idx){
  const list = lvLoadSaved();
  list.splice(idx,1);
  lvSaveSaved(list);
  lvRenderSaved();
  showToast('🗑 삭제됐어요!');
}

function lvRenderSaved(){
  const wrap=document.getElementById('lv-saved');
  if(!wrap) return;
  const list = lvLoadSaved();
  if(!list.length){
    wrap.innerHTML = `<div style="font-size:12px;color:#94a3b8;">저장된 링크 영상이 없어요.</div>`;
    return;
  }
  wrap.innerHTML = list.map((it, idx)=>`
    <div class="lv-saved-item">
      <div class="lv-saved-name">${esc(it.name||'링크 영상')}</div>
      <button class="lv-saved-btn lv-saved-play" onclick="lvPlayUrl('${(it.url||'').replace(/'/g,'&#39;')}','${(it.name||'').replace(/'/g,'&#39;')}')">▶ 보기</button>
      <button class="lv-saved-btn lv-saved-del" onclick="lvDeleteSaved(${idx})">🗑</button>
    </div>
  `).join('');
}

function lvFullscreen() {
  const video = document.getElementById('lv-video');
  if (!video) return;
  if (video.requestFullscreen) video.requestFullscreen();
  else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
}

let _nfImgData = null;
function nfPreviewImg(input) {
  const file = input.files && input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    _nfImgData = e.target.result;
    const prev = document.getElementById('nf-img-preview');
    const img = document.getElementById('nf-img-prev-el');
    const urlInp = document.getElementById('nf-img-url');
    if (img) img.src = _nfImgData;
    if (prev) prev.style.display = '';
    if (urlInp) urlInp.value = '';
  };
  reader.readAsDataURL(file);
}
function nfClearImg() {
  _nfImgData = null;
  const prev = document.getElementById('nf-img-preview');
  const inp = document.getElementById('nf-img-input');
  const urlInp = document.getElementById('nf-img-url');
  if (prev) prev.style.display = 'none';
  if (inp) inp.value = '';
  if (urlInp) urlInp.value = '';
}

function nfPreviewImgUrl(url) {
  url = url.trim();
  if (!url) { _nfImgData = null; return; }
  _nfImgData = url;
  const prev = document.getElementById('nf-img-preview');
  const img = document.getElementById('nf-img-prev-el');
  if (img) { img.src = url; }
  if (prev) prev.style.display = '';
}
function noticeFormClose() {
  document.getElementById('notice-form-bg').classList.remove('on');
  nfClearImg();
}
function noticeSave() {
  if(!adminIsLogged()){showToast("⚠️ 관리자 로그인 후 저장 가능합니다!");return;}
  const title = document.getElementById('nf-title').value.trim();
  const from  = document.getElementById('nf-from').value.trim();
  const content = document.getElementById('nf-content').value.trim();
  if (!title) { alert('제목을 입력해주세요!'); return; }
  if (!content) { alert('내용을 입력해주세요!'); return; }
  const now = new Date();
  const date = now.getFullYear() + '.' + String(now.getMonth()+1).padStart(2,'0') + '.' + String(now.getDate()).padStart(2,'0');
  const videoUrl = (document.getElementById('nf-video-url')?.value || '').trim();
  const list = noticeLoad();
  list.push({ title, from, content, date, read: false, id: Date.now(), img: _nfImgData || null, videoUrl: videoUrl || null });
  noticeSaveAll(list);
  noticeRender();
  noticeFormClose();
}

/* ════════════════════════════════════════════════════
   🎙 SOOP 멀티뷰
════════════════════════════════════════════════════ */
const SOOP_KEY = 'cgSchoolSoopPresets';
let _soopIds = [];
function soopLoadPresets() {
  return lsGetJSON(SOOP_KEY, []);
}
function soopSavePresets(list) { lsSet(SOOP_KEY, list); }
function soopAdd() {
  const inp = document.getElementById('soop-inp');
  if (!inp) return;
  const val = inp.value.trim();
  if (!val) { showToast('스트리머 ID를 입력하세요!'); return; }
  val.split(',').map(x=>x.trim()).filter(Boolean).forEach(raw => {
    const id = soopNormalizeId(raw);
    if (!id) return;
    if (!_soopIds.includes(id)) _soopIds.push(id);
  });
  inp.value = '';
  soopRender();
}

// SOOP 입력값에서 "스트리머 ID" 추출 (URL/ID 모두 지원)
function soopNormalizeId(input){
  const s = (input || '').trim();
  if(!s) return '';
  // 이미 ID 형태면 그대로
  if (/^[a-zA-Z0-9_]{2,}$/i.test(s) && !s.includes('/')) return s;
  // URL에서 추출 시도
  try{
    const u = new URL(s, window.location.href);
    const host = (u.hostname || '').toLowerCase();
    // play.sooplive.co.kr/{id}/embed...
    if(host.includes('play.sooplive.co.kr') || host.includes('play.sooplive.com')){
      const seg = u.pathname.split('/').filter(Boolean)[0] || '';
      return seg;
    }
    // sooplive.co.kr/{id} 또는 sooplive.com/{id}
    if(host.includes('sooplive.co.kr') || host.includes('sooplive.com')){
      const seg = u.pathname.split('/').filter(Boolean)[0] || '';
      // /search 는 제외
      if(seg && seg !== 'search') return seg;
    }
  } catch(e){}
  // 마지막 fallback: URL 문자열에서 정규식 추출
  const m = s.match(/(?:play\.)?sooplive\.(?:co\.kr|com)\/([a-zA-Z0-9_]+)/i);
  if(m && m[1] && m[1].toLowerCase()!=='search') return m[1];
  // 추출 실패: 특수문자 제거(사용자가 ID만 일부 입력한 경우)
  return s.replace(/[^a-zA-Z0-9_-]/g,'');
}

function soopAddFromPaste(){
  const el = document.getElementById('soop-add-paste');
  const raw = (el?.value || '').trim();
  if(!raw){ showToast('URL 또는 ID를 붙여넣어 주세요!'); return; }
  const id = soopNormalizeId(raw);
  if(!id || id.toLowerCase()==='search'){ showToast('올바른 SOOP 방송 URL/ID가 아니에요!'); return; }
  soopAddId(id);
  if(el) el.value = '';
  showToast('🎙 '+id+' 방송을 추가했어요!');
}
function soopRender() {
  const grid = document.getElementById('soop-grid');
  const cnt  = document.getElementById('soop-count');
  if (!grid) return;
  if (cnt) cnt.textContent = _soopIds.length;
  if (!_soopIds.length) {
    grid.innerHTML = '<div class="soop-empty"><div class="soop-empty-icon">🎙</div><div>스트리머 ID를 입력하거나<br>즐겨찾기에서 추가하세요!</div></div>';
    grid.removeAttribute('data-cols');
    return;
  }
  const cols = _soopIds.length <= 1 ? 1 : 2;
  grid.setAttribute('data-cols', cols);
  grid.innerHTML = _soopIds.map((id, i) =>
    '<div class="soop-cell">' +
      '<div class="soop-cell-bar">' +
        '<span class="soop-cell-id">🎙 ' + id + '</span>' +
        '<div style="display:flex;gap:4px;">' +
          '<button class="soop-cell-del" onclick="soopChatOpen(\'' + id + '\')" style="background:rgba(80,160,240,.8);">💬 채팅</button>' +
          '<button class="soop-cell-del" onclick="soopRemove(' + i + ')">✕</button>' +
        '</div>' +
      '</div>' +
      '<iframe src="https://play.sooplive.co.kr/' + id + '/embed?autoPlay=true&mute=false"' +
        ' allow="autoplay;fullscreen" allowfullscreen scrolling="no"></iframe>' +
    '</div>'
  ).join('');
}
function soopRemove(i) { _soopIds.splice(i,1); soopRender(); }
function soopClearAll() {
  if (!_soopIds.length) return;
  cgConfirm('모든 방송을 닫을까요?', ()=>{ _soopIds = []; soopRender(); }, '📺', '닫기', 'linear-gradient(135deg,#6366f1,#e06080)');
}

/* ─ SOOP 채팅 패널 ─ */
let _soopChatId = null;
function soopChatOpen(id) {
  _soopChatId = id;
  const panel = document.getElementById('soop-chat-panel');
  const bg    = document.getElementById('soop-chat-bg');
  const frame = document.getElementById('soop-chat-frame');
  const title = document.getElementById('soop-chat-title');
  const sub   = document.getElementById('soop-chat-sub');
  const tabs  = document.getElementById('soop-chat-tabs');
  if (!panel || !frame) return;

  // 채팅 URL: SOOP 공식 채팅 embed
  frame.src = 'https://ch.sooplive.co.kr/' + id + '/embed?type=chat';
  if (title) title.textContent = '💬 ' + id + ' 채팅';
  if (sub)   sub.textContent   = 'sooplive.co.kr · ' + id;

  // 현재 방송 중인 채널 탭
  if (tabs) {
    tabs.innerHTML = _soopIds.map(sid =>
      '<button onclick="soopChatOpen(\'' + sid + '\')" ' +
      'style="padding:3px 8px;font-size:10px;font-family:\'Jua\',sans-serif;border:none;border-radius:6px;cursor:pointer;white-space:nowrap;' +
      (sid === id ? 'background:#fff;color:#e04858;font-weight:900;' : 'background:rgba(255,255,255,.2);color:#fff;') + '">' +
      sid + '</button>'
    ).join('');
  }

  panel.style.display = 'flex';
  bg.style.display    = 'block';
}
function soopChatClose() {
  const panel = document.getElementById('soop-chat-panel');
  const bg    = document.getElementById('soop-chat-bg');
  const frame = document.getElementById('soop-chat-frame');
  if (panel) panel.style.display = 'none';
  if (bg)    bg.style.display    = 'none';
  if (frame) frame.src = '';
  _soopChatId = null;
}

/* ─ 즐겨찾기 등록 폼 토글 ─ */
function soopFavFormToggle() {
  const form = document.getElementById('soop-fav-form');
  if (!form) return;
  const shown = form.style.display === 'flex';
  form.style.display = shown ? 'none' : 'flex';
  if (!shown) {
    const inp = document.getElementById('soop-fav-new-id');
    if (inp) inp.focus();
  }
}


/* ════════════════════════════════════════════════════
   🟣 치지직 멀티뷰
════════════════════════════════════════════════════ */
let _chzzkIds = [];

function chzzkExtractId(input) {
  const m = input.match(/chzzk\.naver\.com\/live\/([a-zA-Z0-9]+)/);
  if (m) return m[1];
  return input.replace(/[^a-zA-Z0-9_-]/g,'');
}

function chzzkAdd() {
  const el = document.getElementById('chzzk-inp');
  const val = el ? el.value.trim() : '';
  if (!val) { showToast('채널 ID를 입력하세요!'); return; }
  const ids = val.split(',').map(s => chzzkExtractId(s.trim())).filter(Boolean);
  if (!ids.length) { showToast('올바른 채널 ID를 입력하세요!'); return; }
  ids.forEach(id => { if (!_chzzkIds.includes(id)) _chzzkIds.push(id); });
  if (el) el.value = '';
  chzzkRender();
  showToast('🟣 치지직 채널을 추가했어요!');
}

function chzzkRender() {
  const grid = document.getElementById('chzzk-grid');
  const cnt = document.getElementById('chzzk-count');
  if (!grid) return;
  if (cnt) cnt.textContent = _chzzkIds.length;
  if (!_chzzkIds.length) {
    grid.innerHTML = '<div class="soop-empty"><div class="soop-empty-icon">🟣</div><div>채널 ID를 입력해서<br>치지직 방송을 불러오세요!</div><div style="font-size:12px;opacity:.6;margin-top:6px;">예: abc123def456</div></div>';
    return;
  }
  const cols = +(grid.getAttribute('data-cols') || 1);
  grid.innerHTML = _chzzkIds.map((id, i) =>
    '<div class="soop-cell" style="position:relative;">' +
    '<iframe src="https://chzzk.naver.com/live/' + id + '" ' +
    'style="width:100%;height:100%;border:none;background:#0d0f16;" ' +
    'allow="autoplay; fullscreen" allowfullscreen></iframe>' +
    '<button onclick="chzzkRemove(' + i + ')" style="position:absolute;top:6px;right:6px;z-index:10;background:rgba(0,0,0,.7);color:#fff;border:none;border-radius:50%;width:28px;height:28px;font-size:15px;cursor:pointer;line-height:1;">✕</button>' +
    '</div>'
  ).join('');
  chzzkApplyLayout(cols);
}

function chzzkRemove(i) {
  _chzzkIds.splice(i, 1);
  chzzkRender();
}

function chzzkSetLayout(n) {
  const grid = document.getElementById('chzzk-grid');
  if (!grid) return;
  grid.setAttribute('data-cols', n);
  chzzkApplyLayout(n);
}

function chzzkApplyLayout(n) {
  const grid = document.getElementById('chzzk-grid');
  if (!grid) return;
  grid.style.gridTemplateColumns = 'repeat(' + n + ', 1fr)';
  const h = n === 1 ? 'min(56vw, 62vh)' : n === 2 ? 'min(40vw, 45vh)' : 'min(28vw, 32vh)';
  grid.querySelectorAll('.soop-cell').forEach(c => { c.style.height = h; });
}

function chzzkClearAll() {
  _chzzkIds = [];
  chzzkRender();
  showToast('전체 닫았어요');
}

function soopSetLayout(n) {
  const grid = document.getElementById('soop-grid');
  if (!grid || !_soopIds.length) return;
  grid.setAttribute('data-cols', n===1 ? 1 : 2);
}
function soopSavePreset() {
  if (!_soopIds.length) { showToast('방송을 먼저 추가하세요!'); return; }
  const nameInp = document.getElementById('soop-preset-name');
  const name = (nameInp?.value?.trim()) || ('즐겨찾기 '+new Date().toLocaleDateString('ko-KR'));
  const list = soopLoadPresets();
  list.push({ name, ids:[..._soopIds], savedAt:Date.now() });
  soopSavePresets(list);
  if(nameInp) nameInp.value = '';
  soopRenderPresets();
  alert(name+' 저장됐어요!');
}
function soopLoadPreset() {
  const wrap = document.getElementById('soop-preset-wrap');
  if (!wrap) return;
  wrap.style.display = wrap.style.display==='none' ? '' : 'none';
  soopRenderPresets();
}
function soopRenderPresets() {
  const list = soopLoadPresets();
  const el = document.getElementById('soop-preset-list');
  if (!el) return;
  el.innerHTML = list.length
    ? list.map((p,i) => '<div class="soop-preset-item"><span>'+p.name+' ('+p.ids.length+'개)</span><button onclick="soopApplyPreset('+i+')" title="불러오기">▶</button><button onclick="soopDelPreset('+i+')" title="삭제">🗑</button></div>').join('')
    : '<span style="color:#c0a0a8;font-size:13px;">저장된 즐겨찾기 없음</span>';
}
function soopApplyPreset(i) {
  const list = soopLoadPresets();
  if (!list[i]) return;
  _soopIds = [...list[i].ids]; soopRender();
  const w = document.getElementById('soop-preset-wrap'); if (w) w.style.display='none';
}
function soopDelPreset(i) {
  const list = soopLoadPresets(); list.splice(i,1); soopSavePresets(list); soopRenderPresets();
}


/* ════════════════════════════════════════════════════
   📋 시험 성적표 이력
════════════════════════════════════════════════════ */
const REPORT_KEY = 'cgSchoolReports';
function reportSave(data) {
  try {
    const list = lsGetJSON(REPORT_KEY, []);
    list.push({...data, savedAt:Date.now()});
    if (list.length > 50) list.splice(0, list.length-50);
    lsSet(REPORT_KEY, list);
  } catch(e) {}
}
function reportLoad() {
  return lsGetJSON(REPORT_KEY, []);
}
function renderReportHistory() {
  const list = reportLoad();
  const wrap = document.getElementById('report-history-list');
  if (!wrap) return;
  if (!list.length) {
    wrap.innerHTML = '<div style="color:#c0a0a8;font-size:13px;padding:8px;">아직 성적표가 없어요. 시험을 봐야 기록돼요!</div>';
    return;
  }
  wrap.innerHTML = list.slice().reverse().map((r,i) =>
    '<div class="rh-item" onclick="reportShowDetail('+(list.length-1-i)+')">' +
      '<div class="rh-grade '+(r.grade||'C')+'">'+(r.grade||'C')+'</div>' +
      '<div class="rh-info"><div class="rh-name">'+(r.name||'학생')+'</div>' +
        '<div class="rh-meta">'+(r.date||'')+' · '+(r.correct||0)+'/'+(r.total||0)+'문제</div></div>' +
      '<div class="rh-score">'+(r.score||0)+'점</div>' +
    '</div>'
  ).join('');
}
function reportShowDetail(i) {
  const list = reportLoad();
  const r = list[i]; if (!r) return;
  const fill = (id,val) => { const el=document.getElementById(id); if(el) el.textContent=val; };
  fill('rc-subtitle', r.subtitle||'시험 성적표');
  fill('rc-name', r.name||'학생');
  fill('rc-date', r.date||'');
  fill('rc-score', (r.score||0)+'점');
  fill('rc-score-sub', '정답률 '+Math.round((r.correct||0)/((r.total||1))*100)+'%');
  fill('rc-correct', r.correct||0);
  fill('rc-wrong', r.wrong||0);
  fill('rc-combo', r.maxCombo||0);
  fill('rc-total', r.total||0);
  const st = document.getElementById('rc-stamp-grade');
  if (st) st.textContent = r.grade||'C';
  const ov = document.getElementById('ov');
  if (ov) ov.classList.add('on');
}

/* ══════════════════════════════════════════
   📅 시간표 시스템
══════════════════════════════════════════ */
(function() {
  const TT_KEY = 'cgSchoolTimetable';
  const DAYS = ['월','화','수','목','금','토','일'];
  const PERIODS = 7;
  let editing = false;

  function load() {
    const d = lsGetJSON(TT_KEY, null);
    if (d && typeof d === 'object') return d;
    const empty = {};
    for (let p=0;p<PERIODS;p++) { empty[p]={}; DAYS.forEach((_,di)=>{empty[p][di]='';}) }
    return empty;
  }
  function save(d) { lsSet(TT_KEY, d); }

  function todayIdx() {
    const dow = new Date().getDay(); // 0=일,1=월,...,6=토
    if (dow === 0) return 6; // 일요일 → index 6
    return dow - 1; // 월=0,...,토=5
  }

  window.ttRender = function() {
    const data = load();
    const ti = todayIdx();
    const table = document.getElementById('tt-table');
    if (!table) return;

    // 헤더
    let h = '<thead><tr><th style="width:38px;">교시</th>';
    DAYS.forEach((d,i) => {
      h += `<th class="${i===ti?'tt-today-col':''}">${d}${i===ti?' 📌':''}</th>`;
    });
    h += '</tr></thead><tbody>';

    for (let p=0; p<PERIODS; p++) {
      h += `<tr><td class="tt-num">${p+1}</td>`;
      DAYS.forEach((_, di) => {
        const val = (data[p]&&data[p][di]) || '';
        const isToday = di===ti;
        h += `<td class="${isToday?'tt-today-cell':''}">`;
        if (editing) {
          h += `<input class="tt-chip-input" data-p="${p}" data-d="${di}" value="${val.replace(/"/g,'&quot;')}" placeholder="과목명">`;
        } else {
          h += `<div class="tt-chip${val?(isToday?' filled tc':' filled'):''}">${val||''}</div>`;
        }
        h += '</td>';
      });
      h += '</tr>';
    }
    h += '</tbody>';
    table.innerHTML = h;
    renderTodayBanner(data, ti);
  };

  function renderTodayBanner(data, ti) {
    const el = document.getElementById('tt-today-banner');
    if (!el) return;
    if (ti < 0) {
      el.innerHTML = '<div class="tt-today-banner-title">🎉 오늘은 주말! 푹 쉬어요 😴</div>';
      return;
    }
    const dayName = DAYS[ti];
    const classes = [];
    for (let p=0; p<PERIODS; p++) {
      const s = data[p] && data[p][ti] ? data[p][ti] : '';
      if (s) classes.push({n: p+1, s});
    }
    let html = `<div class="tt-today-banner-title">📌 오늘 ${dayName}요일 수업 (${classes.length}교시)</div><div class="tt-pills">`;
    if (!classes.length) {
      html += '<span style="color:#c0a0a8;font-size:13px;">편집 버튼으로 시간표를 등록해보세요 ✏️</span>';
    } else {
      classes.forEach(c => {
        html += `<div class="tt-pill">${c.n}교시 ${c.s}</div>`;
      });
    }
    html += '</div>';
    el.innerHTML = html;
  }

  window.ttToggleEdit = function() {
    if(!adminIsLogged()){showToast('⚠️ 관리자만 시간표를 편집할 수 있어요!');adminLogin();return;}
    editing = !editing;
    const eb = document.getElementById('tt-edit-btn');
    const sb = document.getElementById('tt-save-btn');
    if (eb) eb.style.display = editing ? 'none' : '';
    if (sb) sb.style.display = editing ? '' : 'none';
    window.ttRender();
  };

  window.ttSave = function() {
    if(!adminIsLogged()){showToast("⚠️ 관리자만 시간표를 수정할 수 있어요!");adminLogin();return;}
    const data = load();
    document.querySelectorAll('.tt-chip-input').forEach(inp => {
      const p = +inp.dataset.p, d = +inp.dataset.d;
      if (!data[p]) data[p] = {};
      data[p][d] = inp.value.trim();
    });
    save(data);
    editing = false;
    const eb = document.getElementById('tt-edit-btn');
    const sb = document.getElementById('tt-save-btn');
    if (eb) { eb.style.display = ''; eb.textContent = '✅ 저장됨!'; setTimeout(()=>{eb.textContent='✏️ 편집';},1600); }
    if (sb) sb.style.display = 'none';
    window.ttRender();
  };
})();

/* ════════════════════════════════════════════════════
   📌 공지사항(게시판 3종)
   - 학교 소개: 글 게시판
   - 담임 소개: 갤러리 게시판
   - 학급회장: 갤러리 게시판
════════════════════════════════════════════════════ */
const ASB_KEY = 'cgSchoolIntroPosts';
const GAL_TEACHER_KEY = 'cgTeacherGallery';
const GAL_PRES_KEY = 'cgPresidentGallery';

let _annTab = 'school';
let _asbViewIdx = -1;
let _asbEditIdx = null;

function annSubTab(name, btn){
  _annTab = name;
  document.querySelectorAll('.ann-stab').forEach(b=>b.classList.remove('on'));
  if(btn) btn.classList.add('on');
  ['school','teacher','president'].forEach(t=>{
    const el=document.getElementById('ann-panel-'+t);
    if(el) el.style.display = (t===name) ? '' : 'none';
  });
  annRenderBoards();
}

function annRenderBoards(){
  // 탭별 버튼 노출(관리자만)
  const isAdmin = adminIsLogged();
  const sbBtn = document.getElementById('asb-new-btn');
  if(sbBtn) sbBtn.style.display = isAdmin ? '' : 'none';
  const teBtn = document.getElementById('gal-teacher-add');
  if(teBtn) teBtn.style.display = isAdmin ? '' : 'none';
  const prBtn = document.getElementById('gal-president-add');
  if(prBtn) prBtn.style.display = isAdmin ? '' : 'none';

  if(_annTab==='teacher') galRender('teacher');
  else if(_annTab==='president') galRender('president');
  else asbRender();
}

/* ───────────────── 학교 소개: 글 게시판 ───────────────── */
function asbLoad(){ return lsGetJSON(ASB_KEY, []); }
function asbSaveAll(list){ lsSet(ASB_KEY, list); }
function asbFmtDate(ts){
  const d=new Date(ts||Date.now());
  const y=d.getFullYear(), m=String(d.getMonth()+1).padStart(2,'0'), da=String(d.getDate()).padStart(2,'0');
  return `${y}.${m}.${da}`;
}

function asbRender(){
  const list = asbLoad().slice().sort((a,b)=> (b.updatedAt||0)-(a.updatedAt||0));
  const wrap = document.getElementById('asb-list');
  if(!wrap) return;
  if(!list.length){
    wrap.innerHTML = `<div class="asb-empty">아직 글이 없어요. (관리자 로그인 후 글 작성 가능)</div>`;
  } else {
    wrap.innerHTML = list.map((p)=>`
      <div class="asb-item" onclick="asbOpen('${p.id}')">
        <div class="asb-item-title">${esc(p.title||'제목 없음')}</div>
        <div class="asb-item-meta">${asbFmtDate(p.updatedAt)}</div>
      </div>
    `).join('');
  }
  // 상세 닫고 목록 보이기
  const lv=document.getElementById('asb-list-view');
  const dv=document.getElementById('asb-detail-view');
  if(lv) lv.style.display='';
  if(dv) dv.style.display='none';
  _asbViewIdx = -1;
}

function asbOpen(id){
  const list = asbLoad().slice().sort((a,b)=> (b.updatedAt||0)-(a.updatedAt||0));
  const idx = list.findIndex(x=>x.id===id);
  if(idx<0) return;
  _asbViewIdx = idx;
  const p = list[idx];
  const t=document.getElementById('asb-d-title');
  const c=document.getElementById('asb-d-content');
  const d=document.getElementById('asb-d-date');
  if(t) t.textContent = p.title||'';
  if(c) c.textContent = p.content||'';
  if(d) d.textContent = asbFmtDate(p.updatedAt);
  const lv=document.getElementById('asb-list-view');
  const dv=document.getElementById('asb-detail-view');
  if(lv) lv.style.display='none';
  if(dv) dv.style.display='';

  // 관리자 버튼
  const isAdmin = adminIsLogged();
  const eb=document.getElementById('asb-edit-btn');
  const db=document.getElementById('asb-del-btn');
  if(eb) eb.style.display = isAdmin ? '' : 'none';
  if(db) db.style.display = isAdmin ? '' : 'none';
}
function asbBack(){ asbRender(); }

function asbOpenForm(editId){
  if(!adminIsLogged()){ showToast('🔒 관리자만 작성할 수 있어요!'); adminLogin(); return; }
  _asbEditIdx = null;
  const titleEl=document.getElementById('asb-modal-title');
  const t=document.getElementById('asb-f-title');
  const c=document.getElementById('asb-f-content');
  if(t) t.value='';
  if(c) c.value='';
  if(titleEl) titleEl.textContent='🏫 학교 소개 글 작성';

  if(editId){
    const list=asbLoad();
    const idx=list.findIndex(x=>x.id===editId);
    if(idx>=0){
      _asbEditIdx = idx;
      const p=list[idx];
      if(t) t.value=p.title||'';
      if(c) c.value=p.content||'';
      if(titleEl) titleEl.textContent='🏫 학교 소개 글 수정';
    }
  }
  const bg=document.getElementById('asb-modal-bg');
  if(bg) bg.classList.add('on');
}
function asbCloseForm(){
  const bg=document.getElementById('asb-modal-bg');
  if(bg) bg.classList.remove('on');
  _asbEditIdx = null;
}
function asbSaveForm(){
  if(!adminIsLogged()){ showToast('🔒 관리자만 저장할 수 있어요!'); return; }
  const t=(document.getElementById('asb-f-title')?.value||'').trim();
  const c=(document.getElementById('asb-f-content')?.value||'').trim();
  if(!t){ showToast('제목을 입력하세요!'); return; }
  if(!c){ showToast('내용을 입력하세요!'); return; }
  const list=asbLoad();
  const now=Date.now();
  if(_asbEditIdx!==null && _asbEditIdx>=0 && list[_asbEditIdx]){
    list[_asbEditIdx] = Object.assign({}, list[_asbEditIdx], {title:t, content:c, updatedAt:now});
  } else {
    list.push({id:'asb_'+now, title:t, content:c, updatedAt:now});
  }
  asbSaveAll(list);
  asbCloseForm();
  asbRender();
  showToast('✅ 저장됐어요!');
}
function asbEditCurrent(){
  if(!adminIsLogged()) return;
  const list = asbLoad().slice().sort((a,b)=> (b.updatedAt||0)-(a.updatedAt||0));
  const p = list[_asbViewIdx];
  if(p) asbOpenForm(p.id);
}
function asbDeleteCurrent(){
  if(!adminIsLogged()) return;
  const list = asbLoad().slice().sort((a,b)=> (b.updatedAt||0)-(a.updatedAt||0));
  const p = list[_asbViewIdx];
  if(!p) return;
  cgConfirm('이 글을 삭제할까요?', ()=>{
    const raw = asbLoad().filter(x=>x.id!==p.id);
    asbSaveAll(raw);
    asbRender();
    showToast('🗑 삭제됐어요!');
  }, '🗑', '삭제', 'linear-gradient(135deg,#e04858,#f06878)');
}

/* ───────────────── 담임/회장: 갤러리 게시판 ───────────────── */
function galKey(type){ return type==='teacher' ? GAL_TEACHER_KEY : GAL_PRES_KEY; }
function galLoad(type){ return lsGetJSON(galKey(type), []); }
function galSaveAll(type,list){ lsSet(galKey(type), list); }
function galNormUrl(raw){
  const s=(raw||'').trim();
  if(!s) return '';
  let u;
  try{ u=new URL(s, window.location.href); }catch{ return null; }
  if(!/^https?:$/i.test(u.protocol)) return null;
  return u.href;
}

function galRender(type){
  const grid = document.getElementById(type==='teacher'?'gal-teacher-grid':'gal-president-grid');
  if(!grid) return;
  const list = galLoad(type).slice().sort((a,b)=>(b.updatedAt||0)-(a.updatedAt||0));
  const isAdmin = adminIsLogged();
  if(!list.length){
    grid.innerHTML = `<div class="gal-empty">아직 등록된 카드가 없어요.</div>`;
    return;
  }
  grid.innerHTML = list.map((it, idx)=>`
    <div class="gal-card">
      ${isAdmin?`<div class="gal-actions">
        <button class="gal-act" onclick="event.stopPropagation();galOpenForm('${type}',${idx})">✏️</button>
        <button class="gal-act danger" onclick="event.stopPropagation();galDelete('${type}',${idx})">🗑</button>
      </div>`:''}
      <div class="gal-thumb">
        ${it.img?`<img src="${it.img}" alt="" loading="lazy" onerror="this.style.display='none'">`:`<div class="gal-ph">🖼️</div>`}
      </div>
      <div class="gal-body">
        <div class="gal-name">${esc(it.name||'')}</div>
        <div class="gal-desc">${esc(it.desc||'')}</div>
      </div>
    </div>
  `).join('');
}

function galOpenForm(type, editIdx){
  if(!adminIsLogged()){ showToast('🔒 관리자만 등록할 수 있어요!'); adminLogin(); return; }
  const bg=document.getElementById('gal-modal-bg'); if(!bg) return;
  const title=document.getElementById('gal-modal-title');
  const typeEl=document.getElementById('gal-f-type');
  const idxEl=document.getElementById('gal-f-edit-idx');
  const nameEl=document.getElementById('gal-f-name');
  const descEl=document.getElementById('gal-f-desc');
  const imgEl=document.getElementById('gal-f-img');
  if(typeEl) typeEl.value=type;
  if(idxEl) idxEl.value='';
  if(nameEl) nameEl.value='';
  if(descEl) descEl.value='';
  if(imgEl) imgEl.value='';
  if(title) title.textContent = (type==='teacher'?'👩‍🏫 담임 소개':'🧑‍🎓 학급회장') + ' 카드 등록';

  if(editIdx!==undefined && editIdx!==null && editIdx>=0){
    const list=galLoad(type).slice().sort((a,b)=>(b.updatedAt||0)-(a.updatedAt||0));
    const it=list[editIdx];
    if(it){
      if(idxEl) idxEl.value=String(editIdx);
      if(nameEl) nameEl.value=it.name||'';
      if(descEl) descEl.value=it.desc||'';
      if(imgEl) imgEl.value=it.img||'';
      if(title) title.textContent = (type==='teacher'?'👩‍🏫 담임 소개':'🧑‍🎓 학급회장') + ' 카드 수정';
    }
  }
  bg.classList.add('on');
}
function galCloseForm(){
  const bg=document.getElementById('gal-modal-bg');
  if(bg) bg.classList.remove('on');
}
function galSaveForm(){
  if(!adminIsLogged()){ showToast('🔒 관리자만 저장할 수 있어요!'); return; }
  const type=(document.getElementById('gal-f-type')?.value||'teacher').trim();
  const idxStr=(document.getElementById('gal-f-edit-idx')?.value||'').trim();
  const name=(document.getElementById('gal-f-name')?.value||'').trim();
  const desc=(document.getElementById('gal-f-desc')?.value||'').trim();
  const imgRaw=(document.getElementById('gal-f-img')?.value||'').trim();
  if(!name){ showToast('이름을 입력하세요!'); return; }
  const img = galNormUrl(imgRaw);
  if(img===null){ showToast('이미지 링크는 http/https URL만 가능해요!'); return; }
  const now=Date.now();
  const raw = galLoad(type); // 원본 순서 유지
  // 화면은 정렬해서 보여주지만, 저장은 id 기반으로 관리
  // -> editIdx는 정렬된 인덱스라서 id로 변환해야 함
  let list = raw.slice();
  if(idxStr){
    const sorted = raw.slice().sort((a,b)=>(b.updatedAt||0)-(a.updatedAt||0));
    const it = sorted[+idxStr];
    if(it){
      const ridx = raw.findIndex(x=>x.id===it.id);
      if(ridx>=0) list[ridx]=Object.assign({}, list[ridx], {name, desc, img:img||'', updatedAt:now});
    }
  } else {
    list.push({id:'gal_'+now, name, desc, img:img||'', updatedAt:now});
  }
  galSaveAll(type, list);
  galCloseForm();
  galRender(type);
  showToast('✅ 저장됐어요!');
}
function galDelete(type, sortedIdx){
  if(!adminIsLogged()) return;
  const raw = galLoad(type);
  const sorted = raw.slice().sort((a,b)=>(b.updatedAt||0)-(a.updatedAt||0));
  const it = sorted[sortedIdx];
  if(!it) return;
  cgConfirm('이 카드를 삭제할까요?', ()=>{
    galSaveAll(type, raw.filter(x=>x.id!==it.id));
    galRender(type);
    showToast('🗑 삭제됐어요!');
  }, '🗑', '삭제', 'linear-gradient(135deg,#e04858,#f06878)');
}

/* ════════════════════════════════════════════════
   🏫 학급생활 서브탭
════════════════════════════════════════════════ */
function schoolSubTab(name, btn) {
  document.querySelectorAll('.school-stab').forEach(b => b.classList.remove('on'));
  if (btn) btn.classList.add('on');
  const ann    = document.getElementById('school-sub-announcement');
  const notice = document.getElementById('school-sub-notice');
  const tt     = document.getElementById('school-sub-timetable');
  const stu    = document.getElementById('school-sub-students');
  [ann, notice, tt, stu].forEach(el => { if(el) el.style.display = 'none'; });
  schoolAdminBtnRefresh && schoolAdminBtnRefresh();
  if (name === 'announcement') {
    if (ann) ann.style.display = '';
    // 공지사항: 기본은 학교소개 탭
    const btn0 = document.querySelectorAll('.ann-stab')[0];
    annSubTab && annSubTab('school', btn0);
  } else if (name === 'notice') {
    if (notice) notice.style.display = '';
    noticeRender && noticeRender();
  } else if (name === 'students') {
    if (stu) stu.style.display = '';
    stuRender && stuRender();
  } else {
    if (tt) tt.style.display = '';
    ttRender && ttRender();
  }
}


/* ════ 설정 탭 문제 만들기 래퍼 ════ */
let _makeAns2 = null;
function pickAns2(v) {
  _makeAns2 = v;
  document.getElementById('pick-o2').classList.toggle('on', v === true);
  document.getElementById('pick-x2').classList.toggle('on', v === false);
}
function addCustomQ2() {
  if(!adminIsLogged()){showToast("⚠️ 관리자 로그인 후 문제를 추가할 수 있어요!");adminLogin();return;}
  const text = (document.getElementById('make-q2')?.value || '').trim();
  const cat = (document.getElementById('make-cat2')?.value || '').trim() || '🌟나만의문제';
  if (!text) { showToast('⚠️ 문제 내용을 입력해주세요!'); return; }
  if (_makeAns2 === undefined || _makeAns2 === null) { showToast('⚠️ 정답(O/X)을 선택해주세요!'); return; }
  S.customQs.push([text, _makeAns2, cat, 'quiz']);
  if (!ALL_QS.some(a => a[0] === text)) ALL_QS.push([text, _makeAns2, cat, 'quiz']);
  try{lsSet(CUSTOM_QS_KEY, S.customQs);}catch(e){}
  const el = document.getElementById('make-q2');
  if (el) { el.value=''; }
  const catEl = document.getElementById('make-cat2');
  if (catEl) catEl.value='';
  _makeAns2 = null;  // null로 초기화해서 미선택 상태
  document.getElementById('pick-o2')?.classList.remove('on');
  document.getElementById('pick-x2')?.classList.remove('on');
  renderCustomList2();
  renderCustomList&&renderCustomList();
  showToast('✅ 문제 추가 완료! 총 '+S.customQs.length+'개');
}
function renderCustomList2() {
  const list = document.getElementById('custom-list2');
  const cnt = document.getElementById('cq-count2');
  if (!list) return;
  if (cnt) cnt.textContent = S.customQs.length + '개';
  list.innerHTML = S.customQs.length
    ? S.customQs.map((q,i) =>
        '<div class="cq-item"><span class="cq-q">' + esc(q[0]) + '</span>' +
        '<span class="cq-ans ' + (q[1]?'t':'f') + '">' + (q[1]?'⭕':'❌') + '</span>' +
        '<button class="cq-del" onclick="delCustomQ2('+i+')">🗑</button></div>'
      ).join('')
    : '<div class="cq-empty">아직 만든 문제가 없어요 ✏️</div>';
}
function delCustomQ2(i){ delCustomQ(i); }
function delCustomQ(i) {
  S.customQs.splice(i, 1);
  try{lsSet(CUSTOM_QS_KEY, S.customQs);}catch(e){}
  ALL_QS = ALL_QS.filter(q => S.customQs.some(c=>c[0]===q[0]) || BANK_TRUE.some(b=>b[0]===q[0]) || BANK_FALSE.some(b=>b[0]===q[0]));
  renderCustomList && renderCustomList();
  renderCustomList2 && renderCustomList2();
}

/* ════════════════════════════════════════════════
   ⭐ 칭찬 스티커 시스템
════════════════════════════════════════════════ */
const STICKER_KEY = 'cgSchoolStickers';
const STICKER_LIST = [
  {id:'s1', emoji:'⭐', label:'첫 시험'},
  {id:'s2', emoji:'🌟', label:'오답 0개'},
  {id:'s3', emoji:'🏆', label:'100점'},
  {id:'s4', emoji:'🔥', label:'10콤보'},
  {id:'s5', emoji:'📚', label:'공부 5일'},
  {id:'s6', emoji:'🎯', label:'정답 50개'},
  {id:'s7', emoji:'💎', label:'정답 100개'},
  {id:'s8', emoji:'🌈', label:'7일 연속'},
  {id:'s9', emoji:'🦁', label:'용감한 학생'},
  {id:'s10',emoji:'🐝', label:'성실한 학생'},
  {id:'s11',emoji:'🌸', label:'봄학기 달성'},
  {id:'s12',emoji:'🏅', label:'랭킹 등록'},
];

function stickerLoad() {
  return lsGetJSON(STICKER_KEY, []);
}
function stickerSave(arr) { lsSet(STICKER_KEY, arr); }

function stickerEarn(id) {
  const earned = stickerLoad();
  if (earned.includes(id)) return false;
  earned.push(id);
  stickerSave(earned);
  stickerRender();
  return true;
}

function stickerRender() {
  const grid = document.getElementById('sticker-grid');
  if (!grid) return;
  const earned = stickerLoad();
  grid.innerHTML = STICKER_LIST.map(s => {
    const isEarned = earned.includes(s.id);
    return `<div class="sticker-item ${isEarned?'earned':'locked'}" title="${s.label}">
      <span>${s.emoji}</span>
    </div>`;
  }).join('');
}

// 시험 종료 시 스티커 체크 호출 (기존 endQuiz 연동)


/* ════════════════════════════════════════════════
   🌟 초등학교 콘텐츠 시스템
════════════════════════════════════════════════ */

/* 오늘의 한마디 */
const DAILY_WORDS = [
  {text:'지금 시작하는 게 가장 빠른 방법이에요!', sub:'— 부엉이 선생님 🦉', mascot:'🦉'},
  {text:'틀려도 괜찮아요! 틀려야 더 잘 알게 돼요 😊', sub:'— 토끼 선생님 🐰', mascot:'🐰'},
  {text:'오늘 배운 것은 평생 내 것이에요 ✨', sub:'— 곰 선생님 🐻', mascot:'🐻'},
  {text:'조금씩 매일! 그게 최고의 방법이에요 🌱', sub:'— 개구리 선생님 🐸', mascot:'🐸'},
  {text:'어렵다고 포기하지 마요! 나는 할 수 있어요 💪', sub:'— 사자 선생님 🦁', mascot:'🦁'},
  {text:'실수는 성장의 씨앗이에요. 포기하지 말아요!', sub:'— 다람쥐 선생님 🐿️', mascot:'🐿️'},
  {text:'공부하는 지금 이 순간이 빛나고 있어요 🌟', sub:'— 별빛 선생님 ⭐', mascot:'⭐'},
  {text:'오늘 배운 것을 내일도 복습해봐요 📚', sub:'— 독수리 선생님 🦅', mascot:'🦅'},
  {text:'궁금한 게 있으면 찾아봐요! 그게 진짜 공부예요 🔍', sub:'— 올빼미 선생님 🦉', mascot:'🦉'},
  {text:'실력은 매일 조금씩 쌓여요. 오늘도 파이팅! 🎯', sub:'— 판다 선생님 🐼', mascot:'🐼'},
  {text:'숫자가 어려워도 천천히 생각하면 돼요 🧮', sub:'— 거북이 선생님 🐢', mascot:'🐢'},
  {text:'오늘 하루도 최선을 다하는 멋진 학생이에요 🏅', sub:'— 부엉이 선생님 🦉', mascot:'🦉'},
  {text:'배운 것을 친구에게 설명해주면 더 잘 기억돼요!', sub:'— 앵무새 선생님 🦜', mascot:'🦜'},
  {text:'집중! 지금 이 순간에 충실히 하면 돼요 🎪', sub:'— 호랑이 선생님 🐯', mascot:'🐯'},
];

const MASCOT_CHEERS = [
  {emoji:'🦉', msgs:['잘하고 있어요! 계속 해봐요!','훌륭해요! 그 실력 대단해요!','오늘도 열심히 하네요!']},
  {emoji:'🐰', msgs:['틀렸어도 괜찮아요! 다시 도전!','정말 열심히 하고 있어요!','조금만 더! 거의 다 왔어요!']},
  {emoji:'🐻', msgs:['와! 대단한걸요!','잘 하고 있어요, 포기하지 말아요!','오늘 공부 멋있어요!']},
  {emoji:'🦁', msgs:['사자처럼 용감하게!','그 실력 최고예요!','파이팅! 할 수 있어요!']},
];

function initDailyWord() {
  const today = new Date().toDateString();
  const idx = today.split('').reduce((a,c)=>a+c.charCodeAt(0),0) % DAILY_WORDS.length;
  const w = DAILY_WORDS[idx];
  const el = document.getElementById('dw-text');
  const sub = document.getElementById('dw-sub');
  const mascot = document.getElementById('dw-mascot');
  if(el) el.textContent = w.text;
  if(sub) sub.textContent = w.sub;
  if(mascot) mascot.textContent = w.mascot;
}

function initWelcomeBanner() {
  const h = new Date().getHours();
  let emoji, greeting, sub;
  const nm = S.playerName;
  if(h < 7)       { emoji='🌙'; greeting=`밤새 잘 쉬었나요, <span class="wtb-player-name">${nm}</span>님!`; sub='일찍 일어났군요! 오늘도 파이팅 🌟'; }
  else if(h < 12) { emoji='🌞'; greeting=`좋은 아침이에요, <span class="wtb-player-name">${nm}</span>님!`; sub='아침부터 공부하는 멋진 학생이에요 ✨'; }
  else if(h < 14) { emoji='🍙'; greeting=`점심 먹었나요, <span class="wtb-player-name">${nm}</span>님!`; sub='든든하게 먹고 열심히 공부해봐요 💪'; }
  else if(h < 18) { emoji='☀️'; greeting=`안녕하세요, <span class="wtb-player-name">${nm}</span>님!`; sub='오후에도 열심히! 할 수 있어요 🎯'; }
  else if(h < 21) { emoji='🌆'; greeting=`저녁 시간이에요, <span class="wtb-player-name">${nm}</span>님!`; sub='오늘 하루 마무리 공부해봐요 📚'; }
  else             { emoji='🌜'; greeting=`오늘 하루도 수고했어요, <span class="wtb-player-name">${nm}</span>님!`; sub='마지막으로 복습하고 마무리해요 😊'; }

  const bannerEmoji = document.getElementById('wtb-emoji');
  const bannerGreeting = document.getElementById('wtb-greeting');
  const bannerSub = document.getElementById('wtb-sub');
  if(bannerEmoji) bannerEmoji.textContent = emoji;
  if(bannerGreeting) bannerGreeting.innerHTML = greeting;
  if(bannerSub) bannerSub.textContent = sub;
}

/* ─── 데일리 미션 ─── */
const MISSION_KEY = 'cgDailyMission';
const MISSIONS_POOL = [
  {id:'m1', text:'시험 1번 보기', reward:'⭐ 스티커 1개', type:'quiz', target:1},
  {id:'m2', text:'공부하기에서 10문제 보기', reward:'📖 경험치 UP', type:'study', target:10},
  {id:'m3', text:'정답 5개 연속 맞추기', reward:'🔥 콤보 마스터', type:'combo', target:5},
  {id:'m4', text:'타임어택 러시 1판 하기', reward:'⚡ 스피드 뱃지', type:'rush', target:1},
  {id:'m5', text:'문제 1개 만들어보기', reward:'✏️ 출제자 뱃지', type:'make', target:1},
  {id:'m6', text:'게임 1판 하기', reward:'🎮 게임왕 뱃지', type:'game', target:1},
];

function getDailyMissions() {
  const todayStr = new Date().toDateString();
  try {
    const saved = lsGetJSON(MISSION_KEY, {});
    if(saved.date === todayStr) return saved;
  } catch(e){}
  // 오늘 미션 새로 생성 (3개 뽑기)
  const today = new Date();
  const seed = today.getFullYear()*10000 + (today.getMonth()+1)*100 + today.getDate();
  const shuffled = [...MISSIONS_POOL].sort((a,b)=>{
    const ha = (a.id+seed).split('').reduce((s,c)=>s+c.charCodeAt(0),0);
    const hb = (b.id+seed).split('').reduce((s,c)=>s+c.charCodeAt(0),0);
    return ha - hb;
  }).slice(0,3);
  const data = {date:todayStr, missions:shuffled.map(m=>({...m,done:false,progress:0}))};
  lsSet(MISSION_KEY, data);
  return data;
}

// 자정 자동 갱신 타이머 (앱 켜둔 채로 날짜 바뀔 때)
function scheduleMidnightRefresh(){
  const now=new Date();
  const midnight=new Date(now);
  midnight.setHours(24,0,5,0); // 자정 5초 후
  const ms=midnight-now;
  setTimeout(()=>{
    renderDailyMissions&&renderDailyMissions();
    initTodayQuiz&&initTodayQuiz();
    initDailyWord&&initDailyWord();
    initWelcomeBanner&&initWelcomeBanner();
    scheduleMidnightRefresh();
  },ms);
}
scheduleMidnightRefresh();
// 탭 포커스 복귀 시 날짜 바뀌면 자동 갱신
document.addEventListener('visibilitychange',()=>{
  if(document.visibilityState==='visible' && document.getElementById('dm-list')){
    renderDailyMissions && renderDailyMissions();
    attRender && attRender();
    initTodayQuiz && initTodayQuiz();
  }
});

// 다크모드 초기화 (페이지 로드 즉시)
(function(){
  if(lsGet(DARK_MODE_KEY,'')==='1'){
    document.body.classList.add('dark-mode');
    document.addEventListener('DOMContentLoaded',()=>{
      const btn=document.getElementById('dark-toggle');if(btn)btn.textContent='☀️';
    });
  }
})();

function renderDailyMissions() {
  const list = document.getElementById('dm-list');
  const progressText = document.getElementById('dm-progress-text');
  if(!list) return;
  const data = getDailyMissions();
  const done = data.missions.filter(m=>m.done).length;
  if(progressText) progressText.textContent = `(${done}/${data.missions.length} 완료)`;
  list.innerHTML = data.missions.map(m=>`
    <div class="dm-item ${m.done?'done':''}">
      <div class="dm-check">${m.done?'✓':'○'}</div>
      <div class="dm-text">${m.text}</div>
      <div class="dm-reward">${m.reward}</div>
    </div>
  `).join('');
}

function completeMission(type) {
  try {
    const data = getDailyMissions();
    let changed = false;
    data.missions.forEach(m=>{
      if(!m.done && m.type===type) {
        m.progress = (m.progress||0)+1;
        if(m.progress >= m.target) {
          m.done = true;
          changed = true;
          showMascotCheer('미션 완료! ' + m.reward + ' 획득! 🎉');
        }
      }
    });
    if(changed) {
      lsSet(MISSION_KEY, data);
      renderDailyMissions();
      const allDone = data.missions.every(m=>m.done);
      if(allDone) setTimeout(()=>showToast('🎊 오늘의 미션 전부 완료! 대단해요!', 3000), 500);
    }
  } catch(e){}
}

/* ─── 마스코트 응원 팝업 ─── */
let _cheerTO = null;
function showMascotCheer(msg) {
  const cheer = document.getElementById('mascot-cheer');
  const emoji = document.getElementById('mc-emoji');
  const msgEl = document.getElementById('mc-msg');
  if(!cheer) return;
  const c = MASCOT_CHEERS[Math.floor(Math.random()*MASCOT_CHEERS.length)];
  if(emoji) emoji.textContent = c.emoji;
  if(msgEl) msgEl.textContent = msg || c.msgs[Math.floor(Math.random()*c.msgs.length)];
  cheer.classList.add('on');
  if(_cheerTO) clearTimeout(_cheerTO);
  _cheerTO = setTimeout(()=>cheer.classList.remove('on'), 3500);
}


/* 콤보 칭찬 텍스트 */
const COMBO_PRAISES = ['대박!','굉장해!','천재!','완벽!','최고!','엄청나!','와우!','짝짝짝!'];
function showComboPraise() {
  const el = document.getElementById('combo-praise');
  if(!el) return;
  el.textContent = COMBO_PRAISES[Math.floor(Math.random()*COMBO_PRAISES.length)];
  el.classList.remove('show');
  void el.offsetWidth;
  el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'), 700);
}

/* ════ 커스텀 Confirm 모달 ════ */
function cgConfirm(msg, onOk, icon='🗑', okLabel='삭제', okColor='linear-gradient(135deg,#e05060,#d04050)'){
  const bg = document.getElementById('cg-confirm-bg');
  document.getElementById('cg-confirm-msg').textContent = msg;
  document.getElementById('cg-confirm-icon').textContent = icon;
  const okBtn = document.getElementById('cg-confirm-ok');
  okBtn.textContent = okLabel;
  okBtn.style.background = okColor;
  bg.style.display = 'flex';
  const close = () => { bg.style.display = 'none'; };
  okBtn.onclick = () => { close(); onOk(); };
  document.getElementById('cg-confirm-cancel').onclick = close;
  bg.onclick = (e) => { if(e.target===bg) close(); };
}

/* ════ 토스트 ════ */
/* ════ 다크모드 ════ */
function toggleDark(){
  document.body.classList.toggle('dark-mode');
  const on=document.body.classList.contains('dark-mode');
  lsSet(DARK_MODE_KEY, on?'1':'');
  const btn=$('dark-toggle');
  if(btn) btn.textContent=on?'☀️':'🌙';
  showToast(on?'🌙 다크모드 켰어요':'☀️ 라이트모드로 바꿨어요');
}

/* ════ 글씨 크기 ════ */
const FONT_SIZES={small:'clamp(14px,2vw,18px)',medium:'clamp(17px,2.5vw,22px)',large:'clamp(20px,3vw,27px)',xlarge:'clamp(24px,3.5vw,32px)'};
function setFontSize(size,btn){
  document.querySelectorAll('.font-size-btn').forEach(b=>b.classList.remove('on'));
  if(btn) btn.classList.add('on');
  // 문제 텍스트, 공부하기, 퀴즈 등에 적용
  const targets=['.sb-question','.fc-question','.ox-question','.rush-q-text','.bingo-q-text','#sb-question','#fc-question'];
  const sz=FONT_SIZES[size]||FONT_SIZES.medium;
  let styleEl=$('cg-font-style');
  if(!styleEl){styleEl=document.createElement('style');styleEl.id='cg-font-style';document.head.appendChild(styleEl);}
  styleEl.textContent=`.sb-question,.fc-question,.ox-question,.rush-q-text,.mem-q-text{font-size:${sz}!important;}`;
  lsSet(FONT_SIZE_KEY, size);
  showToast('글씨 크기를 바꿨어요 ✏️');
}
function initFontSize(){
  const saved=lsGet(FONT_SIZE_KEY,'small');
  const btn=$('fs-'+saved);
  if(btn){btn.classList.add('on'); setFontSize(saved, btn);}
}

function showToast(msg,dur=2200){
  let t=document.getElementById('toast');
  if(!t){t=document.createElement('div');t.id='toast';document.body.appendChild(t);}
  t.textContent=msg;t.classList.add('show');
  clearTimeout(t._tid);
  t._tid=setTimeout(()=>t.classList.remove('show'),dur);
}

/* ════════════════════════════════════════════════
   🐍 스네이크 게임
════════════════════════════════════════════════ */
const SNAKE={score:0,foodCount:0,level:1,running:false,paused:false,
  dir:{x:1,y:0},nextDir:{x:1,y:0},snake:[],food:{x:10,y:10},timerID:null,
  gW:25,gH:20,cell:18};

function openSnake(){
  let scr=document.getElementById('game-snake');
  if(!scr){
    scr=document.createElement('div');
    scr.id='game-snake';scr.className='game-screen';
    scr.innerHTML=`<div class="gs-header" style="background:rgba(0,30,60,.97);backdrop-filter:blur(10px);">
      <span style="font-size:clamp(16px,2.5vw,22px);font-weight:900;color:#fff;">🐍 스네이크</span>
      <button class="gs-back" onclick="closeSnake()">✕ 닫기</button>
    </div>
    <div class="gs-body" style="align-items:center;gap:10px;padding:14px;background:linear-gradient(160deg,#001e3c,#3a1820);">
      <div style="display:flex;gap:18px;font-size:clamp(13px,1.8vw,16px);color:#ffeef0;font-weight:900;">
        <span>🏅 점수: <b id="snake-score">0</b></span>
        <span>⚡ 레벨: <b id="snake-lv">1</b></span>
        <span>🍎 먹이: <b id="snake-food">0</b></span>
      </div>
      <canvas id="snake-canvas" width="450" height="360" style="border:3px solid var(--border);border-radius:10px;background:#001e3c;max-width:100%;display:block;touch-action:none;"></canvas>
      <div style="font-size:12px;color:var(--blue2, #f09090);">⬅➡⬆⬇ 방향키 / 스페이스 일시정지</div>
      <div style="display:none;grid-template-columns:repeat(3,50px);grid-template-rows:repeat(3,50px);gap:4px;" id="snake-dpad">
        <div></div><button class="gc-btn" style="padding:0;font-size:20px;" onclick="snakeSetDir(0,-1)">⬆</button><div></div>
        <button class="gc-btn" style="padding:0;font-size:20px;" onclick="snakeSetDir(-1,0)">⬅</button>
        <button class="gc-btn" style="padding:0;font-size:16px;" onclick="snakePause()">⏸</button>
        <button class="gc-btn" style="padding:0;font-size:20px;" onclick="snakeSetDir(1,0)">➡</button>
        <div></div><button class="gc-btn" style="padding:0;font-size:20px;" onclick="snakeSetDir(0,1)">⬇</button><div></div>
      </div>
      <div class="game-result" id="snake-result">
        <div class="gr-card">
          <div class="gr-icon">🐍</div>
          <div class="gr-title">게임 오버!</div>
          <div class="gr-score" id="snake-result-score">0점</div>
          <div class="gr-sub" id="snake-result-sub"></div>
          <div class="gr-btns">
            <button class="gr-btn retry" onclick="snakeInit()">🔄 다시하기</button>
            <button class="gr-btn home" onclick="closeSnake()">🏠 닫기</button>
          </div>
        </div>
      </div>
    </div>`;
    document.getElementById('app').appendChild(scr);
    // 터치 스와이프
    let tx=0,ty=0;
    const cv=scr.querySelector('#snake-canvas');
    cv.addEventListener('touchstart',e=>{tx=e.touches[0].clientX;ty=e.touches[0].clientY;},{passive:true});
    cv.addEventListener('touchend',e=>{
      const dx=e.changedTouches[0].clientX-tx,dy=e.changedTouches[0].clientY-ty;
      if(Math.abs(dx)>Math.abs(dy))snakeSetDir(dx>0?1:-1,0);
      else snakeSetDir(0,dy>0?1:-1);
    },{passive:true});
    // 모바일 d-pad 표시
    if('ontouchstart' in window) document.getElementById('snake-dpad').style.display='grid';
  }
  document.removeEventListener('keydown',snakeKey);
  document.addEventListener('keydown',snakeKey);
  openGame('snake');
  snakeInit();
}
function closeSnake(){
  clearInterval(SNAKE.timerID);
  document.removeEventListener('keydown',snakeKey);
  closeGame('snake');
}
function snakeKey(e){
  const m={ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0},ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1}};
  if(m[e.key]){e.preventDefault();const d=m[e.key];if(SNAKE.dir.x!==-d.x||SNAKE.dir.y!==-d.y)SNAKE.nextDir=d;}
  if(e.key===' '){e.preventDefault();snakePause();}
}
function snakeSetDir(x,y){if(SNAKE.dir.x!==-x||SNAKE.dir.y!==-y)SNAKE.nextDir={x,y};}
function snakePause(){
  if(!SNAKE.running)return;
  if(SNAKE.paused){SNAKE.paused=false;clearInterval(SNAKE.timerID);snakeLoop();}
  else{SNAKE.paused=true;clearInterval(SNAKE.timerID);showToast('⏸ 일시정지 - 스페이스로 재개');}
}
function snakeInit(){
  clearInterval(SNAKE.timerID);
  SNAKE.score=0;SNAKE.foodCount=0;SNAKE.level=1;SNAKE.running=false;SNAKE.paused=false;
  SNAKE.snake=[{x:12,y:10},{x:11,y:10},{x:10,y:10}];
  SNAKE.dir={x:1,y:0};SNAKE.nextDir={x:1,y:0};
  snakeNewFood();
  ['snake-score','snake-lv','snake-food'].forEach((id,i)=>{ const el=document.getElementById(id);if(el)el.textContent=[0,1,0][i];});
  document.getElementById('snake-result').classList.remove('on');
  snakeDraw();
  setTimeout(()=>snakeLoop(),600);
}
function snakeLoop(){
  clearInterval(SNAKE.timerID);
  SNAKE.running=true;
  const spd=Math.max(90,200-SNAKE.level*18);
  SNAKE.timerID=setInterval(snakeTick,spd);
}
function snakeNewFood(){
  do{SNAKE.food={x:Math.floor(Math.random()*SNAKE.gW),y:Math.floor(Math.random()*SNAKE.gH)};}
  while(SNAKE.snake.some(s=>s.x===SNAKE.food.x&&s.y===SNAKE.food.y));
}
function snakeTick(){
  SNAKE.dir={...SNAKE.nextDir};
  const head={x:SNAKE.snake[0].x+SNAKE.dir.x,y:SNAKE.snake[0].y+SNAKE.dir.y};
  if(head.x<0||head.x>=SNAKE.gW||head.y<0||head.y>=SNAKE.gH||SNAKE.snake.some(s=>s.x===head.x&&s.y===head.y)){
    clearInterval(SNAKE.timerID);SNAKE.running=false;
    document.getElementById('snake-result-score').textContent=SNAKE.score+'점';
    document.getElementById('snake-result-sub').textContent='먹이 '+SNAKE.foodCount+'개 · 레벨 '+SNAKE.level;
    document.getElementById('snake-result').classList.add('on');
    showGameResult('snake');return;
  }
  SNAKE.snake.unshift(head);
  if(head.x===SNAKE.food.x&&head.y===SNAKE.food.y){
    SNAKE.foodCount++;SNAKE.score+=10*SNAKE.level;
    SNAKE.level=Math.min(10,1+Math.floor(SNAKE.foodCount/5));
    clearInterval(SNAKE.timerID);snakeLoop();
    snakeNewFood();
    document.getElementById('snake-score').textContent=SNAKE.score;
    document.getElementById('snake-lv').textContent=SNAKE.level;
    document.getElementById('snake-food').textContent=SNAKE.foodCount;
  }else{SNAKE.snake.pop();}
  snakeDraw();
}
function snakeDraw(){
  const cv=document.getElementById('snake-canvas');if(!cv)return;
  const ctx=cv.getContext('2d'),cw=SNAKE.cell;
  cv.width=SNAKE.gW*cw;cv.height=SNAKE.gH*cw;
  ctx.fillStyle='#001e3c';ctx.fillRect(0,0,cv.width,cv.height);
  ctx.strokeStyle='rgba(240,104,120,.12)';ctx.lineWidth=0.5;
  for(let x=0;x<SNAKE.gW;x++){ctx.beginPath();ctx.moveTo(x*cw,0);ctx.lineTo(x*cw,cv.height);ctx.stroke();}
  for(let y=0;y<SNAKE.gH;y++){ctx.beginPath();ctx.moveTo(0,y*cw);ctx.lineTo(cv.width,y*cw);ctx.stroke();}
  SNAKE.snake.forEach((s,i)=>{
    ctx.fillStyle=i===0?'#44c9a8':'#f06878';
    ctx.beginPath();ctx.roundRect(s.x*cw+1,s.y*cw+1,cw-2,cw-2,4);ctx.fill();
    if(i===0){ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(s.x*cw+cw*.65,s.y*cw+cw*.33,2.2,0,Math.PI*2);ctx.fill();}
  });
  ctx.font=(cw-2)+'px serif';ctx.textAlign='center';ctx.textBaseline='middle';
  ctx.fillText('🍎',(SNAKE.food.x+.5)*cw,(SNAKE.food.y+.5)*cw);
}

/* ════════════════════════════════════════════════
   🏓 벽돌깨기
════════════════════════════════════════════════ */
const BRKOUT={score:0,lives:3,level:1,running:false,animID:null,
  ball:{x:225,y:300,vx:3,vy:-4,r:8},
  pad:{x:185,w:80,h:12,y:390},bricks:[],cols:8,rows:4};

function openBreakout(){
  let scr=document.getElementById('game-breakout');
  if(!scr){
    scr=document.createElement('div');
    scr.id='game-breakout';scr.className='game-screen';
    scr.innerHTML=`<div class="gs-header" style="background:rgba(0,30,60,.97);backdrop-filter:blur(10px);">
      <span style="font-size:clamp(16px,2.5vw,22px);font-weight:900;color:#fff;">🏓 벽돌깨기</span>
      <button class="gs-back" onclick="closeBreakout()">✕ 닫기</button>
    </div>
    <div class="gs-body" style="align-items:center;gap:8px;padding:14px;background:linear-gradient(160deg,#001e3c,#3a1820);">
      <div style="display:flex;gap:18px;font-size:clamp(13px,1.8vw,16px);color:#ffeef0;font-weight:900;">
        <span>🏅 점수: <b id="brkout-score">0</b></span>
        <span>❤️ 목숨: <b id="brkout-lives">3</b></span>
        <span>⭐ 레벨: <b id="brkout-lv">1</b></span>
      </div>
      <canvas id="brkout-canvas" width="450" height="420" style="border:3px solid var(--border);border-radius:10px;background:#001e3c;max-width:100%;display:block;touch-action:none;cursor:none;"></canvas>
      <div style="font-size:12px;color:var(--blue2,#f09090);">마우스·터치로 패들 이동 / 클릭·스페이스 시작</div>
      <div class="game-result" id="breakout-result">
        <div class="gr-card">
          <div class="gr-icon">🏓</div>
          <div class="gr-title">게임 오버!</div>
          <div class="gr-score" id="brkout-result-score">0점</div>
          <div class="gr-sub" id="brkout-result-sub"></div>
          <div class="gr-btns">
            <button class="gr-btn retry" onclick="brkoutInit()">🔄 다시하기</button>
            <button class="gr-btn home" onclick="closeBreakout()">🏠 닫기</button>
          </div>
        </div>
      </div>
    </div>`;
    document.getElementById('app').appendChild(scr);
    const cv=scr.querySelector('#brkout-canvas');
    cv.addEventListener('mousemove',e=>{
      const r=cv.getBoundingClientRect(),scale=cv.width/r.width;
      BRKOUT.pad.x=Math.max(0,Math.min(cv.width-BRKOUT.pad.w,(e.clientX-r.left)*scale-BRKOUT.pad.w/2));
    });
    cv.addEventListener('touchmove',e=>{
      e.preventDefault();
      const r=cv.getBoundingClientRect(),scale=cv.width/r.width;
      BRKOUT.pad.x=Math.max(0,Math.min(cv.width-BRKOUT.pad.w,(e.touches[0].clientX-r.left)*scale-BRKOUT.pad.w/2));
    },{passive:false});
    cv.addEventListener('click',()=>{if(!BRKOUT.running)brkoutStart();});
    document.addEventListener('keydown',brkoutKey);
  }
  openGame('breakout');
  brkoutInit();
}
function closeBreakout(){
  cancelAnimationFrame(BRKOUT.animID);BRKOUT.running=false;
  document.removeEventListener('keydown',brkoutKey);
  closeGame('breakout');
}
function brkoutKey(e){
  if(e.key===' '){e.preventDefault();if(!BRKOUT.running)brkoutStart();}
  if(e.key==='ArrowLeft'){e.preventDefault();BRKOUT.pad.x=Math.max(0,BRKOUT.pad.x-12);}
  if(e.key==='ArrowRight'){e.preventDefault();BRKOUT.pad.x=Math.min(450-BRKOUT.pad.w,BRKOUT.pad.x+12);}
}
function brkoutInit(){
  cancelAnimationFrame(BRKOUT.animID);BRKOUT.running=false;
  BRKOUT.score=0;BRKOUT.lives=3;BRKOUT.level=1;
  brkoutMakeBricks();
  BRKOUT.pad.x=185;BRKOUT.pad.y=390;
  BRKOUT.ball={x:225,y:370,vx:3,vy:-4,r:8};
  ['brkout-score','brkout-lives','brkout-lv'].forEach((id,i)=>{const el=document.getElementById(id);if(el)el.textContent=[0,3,1][i];});
  document.getElementById('breakout-result').classList.remove('on');
  brkoutDraw();
}
function brkoutMakeBricks(){
  const C=[['#ffeef0','#ffccd4'],['#ffccd4','#f09090'],['#f09090','#ffb3ba'],['#ffb3ba','#f06878']];
  BRKOUT.bricks=[];
  for(let r=0;r<BRKOUT.rows;r++)
    for(let c=0;c<BRKOUT.cols;c++)
      BRKOUT.bricks.push({r,c,alive:true,hp:BRKOUT.rows-r,color:C[r]});
}
function brkoutStart(){
  if(BRKOUT.running)return;
  BRKOUT.running=true;
  BRKOUT.ball.vx=(Math.random()>.5?1:-1)*(2.5+BRKOUT.level*.5);
  BRKOUT.ball.vy=-(3+BRKOUT.level*.4);
  brkoutLoop();
}
function brkoutLoop(){brkoutTick();brkoutDraw();if(BRKOUT.running)BRKOUT.animID=requestAnimationFrame(brkoutLoop);}
function brkoutTick(){
  const cv=document.getElementById('brkout-canvas');if(!cv)return;
  const b=BRKOUT.ball,p=BRKOUT.pad,W=cv.width,H=cv.height;
  const bw=Math.floor((W-50)/BRKOUT.cols),bh=18,gap=3,ox=25;
  b.x+=b.vx;b.y+=b.vy;
  if(b.x<=b.r||b.x>=W-b.r)b.vx*=-1;
  if(b.y<=b.r)b.vy*=-1;
  if(b.y>=H+b.r){
    BRKOUT.lives--;BRKOUT.running=false;
    const el=document.getElementById('brkout-lives');if(el)el.textContent=BRKOUT.lives;
    if(BRKOUT.lives<=0){
      const rs=document.getElementById('brkout-result-score');if(rs)rs.textContent=BRKOUT.score+'점';
      const rb=document.getElementById('brkout-result-sub');if(rb)rb.textContent='레벨 '+BRKOUT.level+' 도달!';
      document.getElementById('breakout-result').classList.add('on');
      showGameResult('breakout');return;
    }
    b.x=W/2;b.y=p.y-20;b.vx=3;b.vy=-4;
    showToast('💔 목숨 -1! 클릭해서 재시작');return;
  }
  if(b.y+b.r>=p.y&&b.y-b.r<=p.y+p.h&&b.x>=p.x&&b.x<=p.x+p.w){
    b.vy=-Math.abs(b.vy);b.vx=((b.x-(p.x+p.w/2))/(p.w/2))*5;b.y=p.y-b.r-1;
  }
  BRKOUT.bricks.forEach(br=>{
    if(!br.alive)return;
    const bx=ox+br.c*(bw+gap),by=40+br.r*(bh+gap);
    if(b.x+b.r>bx&&b.x-b.r<bx+bw&&b.y+b.r>by&&b.y-b.r<by+bh){
      br.hp--;if(br.hp<=0){br.alive=false;BRKOUT.score+=10*(br.r+1)*BRKOUT.level;const el=document.getElementById('brkout-score');if(el)el.textContent=BRKOUT.score;}
      b.vy*=-1;
    }
  });
  if(BRKOUT.bricks.every(br=>!br.alive)){
    BRKOUT.running=false;BRKOUT.level++;
    const el=document.getElementById('brkout-lv');if(el)el.textContent=BRKOUT.level;
    showToast('🎉 레벨 클리어! 다음 레벨 시작!');
    setTimeout(()=>{brkoutMakeBricks();const cv2=document.getElementById('brkout-canvas');BRKOUT.ball={x:cv2.width/2,y:BRKOUT.pad.y-20,vx:3,vy:-4,r:8};brkoutDraw();},600);
  }
}
function brkoutDraw(){
  const cv=document.getElementById('brkout-canvas');if(!cv)return;
  const ctx=cv.getContext('2d'),W=cv.width,H=cv.height;
  const bw=Math.floor((W-50)/BRKOUT.cols),bh=18,gap=3,ox=25;
  ctx.fillStyle='#001e3c';ctx.fillRect(0,0,W,H);
  BRKOUT.bricks.forEach(br=>{
    if(!br.alive)return;
    const x=ox+br.c*(bw+gap),y=40+br.r*(bh+gap);
    const g=ctx.createLinearGradient(x,y,x,y+bh);
    g.addColorStop(0,br.color[0]);g.addColorStop(1,br.color[1]);
    ctx.fillStyle=g;ctx.beginPath();ctx.roundRect(x,y,bw,bh,3);ctx.fill();
    ctx.strokeStyle='rgba(255,255,255,.15)';ctx.lineWidth=1;ctx.stroke();
  });
  const p=BRKOUT.pad;
  const pg=ctx.createLinearGradient(p.x,p.y,p.x,p.y+p.h);
  pg.addColorStop(0,'#f09090');pg.addColorStop(1,'#f06878');
  ctx.fillStyle=pg;ctx.beginPath();ctx.roundRect(p.x,p.y,p.w,p.h,5);ctx.fill();
  const b=BRKOUT.ball;
  const bg=ctx.createRadialGradient(b.x-2,b.y-2,1,b.x,b.y,b.r);
  bg.addColorStop(0,'#fff');bg.addColorStop(1,'#44c9a8');
  ctx.fillStyle=bg;ctx.beginPath();ctx.arc(b.x,b.y,b.r,0,Math.PI*2);ctx.fill();
  if(!BRKOUT.running&&BRKOUT.lives>0&&BRKOUT.bricks.some(br=>br.alive)){
    ctx.fillStyle='rgba(0,0,0,.55)';ctx.fillRect(0,H/2-26,W,52);
    ctx.fillStyle='#fff';ctx.font="bold 17px 'Jua',sans-serif";ctx.textAlign='center';
    ctx.fillText('클릭 또는 스페이스로 시작!',W/2,H/2+7);
  }
}

/* ════════════════════════════════════════════════
   ⌨️ 타자연습
════════════════════════════════════════════════ */
const TYPING_WORDS=['사과','바나나','포도','딸기','수박','복숭아','체리','오렌지','레몬','망고','키위','멜론','파인애플','블루베리','라즈베리','학교','공부','선생님','친구','책상','연필','지우개','칠판','교실','운동장','도서관','급식','수업','시험','방학','대한민국','서울','부산','제주도','한강','태권도','김치','불고기','비빔밥','떡볶이','태양','달','별','구름','바람','비','눈','무지개','천둥','번개'];
let TYPING={words:[],score:0,lives:3,interval:null,speed:1.5,frame:0,animID:null,input:'',best:0};
function openTyping(){
  let scr=document.getElementById('game-typing');
  if(!scr){
    scr=document.createElement('div');scr.id='game-typing';scr.className='game-screen';
    scr.innerHTML=`<div class="gs-header" style="background:rgba(15,23,42,.97);backdrop-filter:blur(10px);">
      <span style="font-size:clamp(16px,2.5vw,22px);font-weight:900;color:#fff;">⌨️ 타자연습</span>
      <div style="display:flex;gap:8px;align-items:center;">
        <div style="background:rgba(255,255,255,.15);border-radius:10px;padding:4px 14px;color:#fff;font-size:13px;font-weight:900;">점수 <span id="typing-score">0</span></div>
        <div style="background:rgba(255,255,255,.15);border-radius:10px;padding:4px 14px;color:#fff;font-size:13px;font-weight:900;">❤️ <span id="typing-lives">3</span></div>
        <button class="gs-back" onclick="closeTyping()">✕ 닫기</button>
      </div>
    </div>
    <div class="gs-body" style="align-items:center;gap:12px;background:#0f0f1a;">
      <canvas id="typing-canvas" width="600" height="360" style="border-radius:14px;background:#0f172a;max-width:100%;max-height:55vh;display:block;box-shadow:0 8px 32px rgba(0,0,0,.4);"></canvas>
      <div style="display:flex;gap:10px;width:100%;max-width:600px;">
        <input id="typing-inp" type="text" autocomplete="off" autocorrect="off" spellcheck="false"
          placeholder="단어를 입력하고 Enter 또는 Space!"
          style="flex:1;padding:14px 18px;font-size:clamp(16px,2.5vw,20px);font-family:Jua,sans-serif;background:#1e293b;border:2px solid #334155;border-radius:14px;color:#fff;outline:none;"
          oninput="typingInput(this.value)" onkeydown="typingKey(event)"/>
      </div>
      <div class="game-result" id="typing-result">
        <div class="gr-card">
          <div class="gr-icon">⌨️</div><div class="gr-title">게임 오버!</div>
          <div class="gr-score" id="typing-result-score">0점</div>
          <div class="gr-sub" id="typing-result-sub"></div>
          <div class="gr-btns"><button class="gr-btn retry" onclick="typingReset();document.getElementById('typing-result').classList.remove('on');">🔄 다시하기</button><button class="gr-btn home" onclick="closeTyping()">🏠 닫기</button></div>
        </div>
      </div>
    </div>`;
    document.getElementById('app').appendChild(scr);
  }
  openGame('typing');typingReset();
  setTimeout(()=>{const inp=document.getElementById('typing-inp');if(inp)inp.focus();},300);
}
function closeTyping(){cancelAnimationFrame(TYPING.animID);clearInterval(TYPING.interval);closeGame('typing');}
function typingReset(){
  cancelAnimationFrame(TYPING.animID);clearInterval(TYPING.interval);
  TYPING.best = lsGet(GAME_BEST_KEY,{})['typing']||0;
  TYPING.words=[];TYPING.score=0;TYPING.lives=3;TYPING.speed=1.2;TYPING.frame=0;TYPING.input='';
  const sc=document.getElementById('typing-score');if(sc)sc.textContent='0';
  const lv=document.getElementById('typing-lives');if(lv)lv.textContent='3';
  const inp=document.getElementById('typing-inp');if(inp)inp.value='';
  TYPING.interval=setInterval(typingSpawn,2200);
  typingLoop();
}
function typingSpawn(){
  if(TYPING.lives<=0)return;
  const cv=document.getElementById('typing-canvas');if(!cv)return;
  const w=TYPING_WORDS[Math.floor(Math.random()*TYPING_WORDS.length)];
  const x=40+Math.random()*(cv.width-120);
  TYPING.words.push({text:w,x,y:0,speed:TYPING.speed+Math.random()*.6,matched:false,flash:0});
  TYPING.speed=Math.min(TYPING.speed+0.04,4);
}
function typingInput(v){TYPING.input=v;}
function typingKey(e){
  if(e.key==='Enter'||e.key===' '){
    e.preventDefault();
    const inp=document.getElementById('typing-inp');
    const typed=(inp?inp.value:'').trim();
    if(!typed)return;
    let hit=false;
    TYPING.words.forEach(w=>{if(!w.matched&&w.text===typed){w.matched=true;w.flash=12;TYPING.score+=typed.length*10;hit=true;}});
    if(hit){
      const sc=document.getElementById('typing-score');if(sc)sc.textContent=TYPING.score;
    }
    if(inp)inp.value='';TYPING.input='';
  }
}
function typingLoop(){
  const cv=document.getElementById('typing-canvas');if(!cv)return;
  const ctx=cv.getContext('2d');const W=cv.width,H=cv.height;
  ctx.clearRect(0,0,W,H);
  ctx.fillStyle='#0f172a';ctx.fillRect(0,0,W,H);
  // 격자 배경
  ctx.strokeStyle='rgba(255,255,255,.04)';ctx.lineWidth=1;
  for(let x=0;x<W;x+=40){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
  for(let y=0;y<H;y+=40){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}
  // 단어 이동
  TYPING.words=TYPING.words.filter(w=>{
    if(!w.matched)w.y+=w.speed;
    if(w.flash>0)w.flash--;
    if(w.y>H&&!w.matched){
      TYPING.lives--;
      const lv=document.getElementById('typing-lives');if(lv)lv.textContent=TYPING.lives;
      if(TYPING.lives<=0){
        clearInterval(TYPING.interval);
        if(TYPING.score>TYPING.best)TYPING.best=TYPING.score;
        document.getElementById('typing-result-score').textContent=TYPING.score+'점';
        document.getElementById('typing-result-sub').textContent='최고기록: '+TYPING.best+'점';
        document.getElementById('typing-result').classList.add('on');
        showGameResult('typing');
        return false;
      }
      return false;
    }
    if(w.matched&&w.flash<=0)return false;
    // 그리기
    const clr=w.matched?'#ffc840':w.y>H*0.75?'#f08090':'#38bdf8';
    ctx.font=`bold clamp(16px,2.5vw,20px) Jua,sans-serif`;
    ctx.font='bold 19px sans-serif';
    // 글로우
    ctx.shadowColor=clr;ctx.shadowBlur=w.matched?20:8;
    ctx.fillStyle=clr;ctx.textAlign='center';ctx.textBaseline='middle';
    if(w.matched){ctx.font='bold 22px sans-serif';}
    ctx.fillText(w.text,w.x,w.y);
    ctx.shadowBlur=0;
    // 입력 중 하이라이트
    if(!w.matched&&TYPING.input&&w.text.startsWith(TYPING.input)){
      ctx.fillStyle='rgba(255,200,60,.2)';const m=ctx.measureText(w.text);
      ctx.fillRect(w.x-m.width/2-6,w.y-14,m.width+12,28);
    }
    return true;
  });
  TYPING.animID=requestAnimationFrame(typingLoop);
}

/* ════════════════════════════════════════════════
   🟡 팩맨
════════════════════════════════════════════════ */
const PACMAP=[
  "####################",
  "#........##........#",
  "#.##.###.##.###.##.#",
  "#.##.###.##.###.##.#",
  "#..................#",
  "#.##.#.######.#.##.#",
  "#....#...##...#....#",
  "####.###    ###.####",
  "####.#      #.####",
  "    .   GGG  .    ",
  "####.#      #.####",
  "####.####### #.####",
  "#........##........#",
  "#.##.###.##.###.##.#",
  "#...#.......#...#..#",
  "###.#.#####.#.#.###",
  "#....#...##...#....#",
  "#.######.##.######.#",
  "#..................#",
  "####################"
];
let PAC={animID:null,score:0,best:0,lives:3,dots:0,totalDots:0,
  pac:{x:10,y:14,dx:1,dy:0,ndx:1,ndy:0,mouth:0.1,mouthDir:1},
  ghosts:[],cells:[],gameState:'idle',frame:0,moveTimer:0,MOVE_SPEED:16};

function openPacman(){
  let scr=document.getElementById('game-pacman');
  if(!scr){
    scr=document.createElement('div');scr.id='game-pacman';scr.className='game-screen';
    scr.innerHTML=`<div class="gs-header" style="background:rgba(15,15,30,.97);backdrop-filter:blur(10px);">
      <span style="font-size:clamp(16px,2.5vw,22px);font-weight:900;color:#ffc840;">🟡 팩맨</span>
      <div style="display:flex;gap:8px;align-items:center;">
        <div style="background:rgba(255,255,255,.1);border-radius:10px;padding:4px 14px;color:#fff;font-size:13px;font-weight:900;">점수 <span id="pac-score">0</span></div>
        <div style="background:rgba(255,255,255,.1);border-radius:10px;padding:4px 14px;color:#fff;font-size:13px;font-weight:900;">❤ <span id="pac-lives">3</span></div>
        <button class="gs-back" onclick="closePacman()">✕ 닫기</button>
      </div>
    </div>
    <div class="gs-body" style="background:#0a0a1a;align-items:center;gap:8px;">
      <canvas id="pac-canvas" style="border-radius:8px;max-width:100%;max-height:65vh;display:block;"></canvas>
      <div style="display:grid;grid-template-columns:repeat(3,44px);grid-template-rows:repeat(2,44px);gap:4px;justify-content:center;">
      <div></div>
      <button ontouchstart="PAC.pac.ndx=0;PAC.pac.ndy=-1;if(PAC.gameState==='idle')PAC.gameState='playing';" onclick="PAC.pac.ndx=0;PAC.pac.ndy=-1;if(PAC.gameState==='idle')PAC.gameState='playing';" style="background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);color:#fff;font-size:20px;border-radius:8px;cursor:pointer;">↑</button>
      <div></div>
      <button ontouchstart="PAC.pac.ndx=-1;PAC.pac.ndy=0;if(PAC.gameState==='idle')PAC.gameState='playing';" onclick="PAC.pac.ndx=-1;PAC.pac.ndy=0;if(PAC.gameState==='idle')PAC.gameState='playing';" style="background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);color:#fff;font-size:20px;border-radius:8px;cursor:pointer;">←</button>
      <button ontouchstart="PAC.pac.ndx=0;PAC.pac.ndy=1;if(PAC.gameState==='idle')PAC.gameState='playing';" onclick="PAC.pac.ndx=0;PAC.pac.ndy=1;if(PAC.gameState==='idle')PAC.gameState='playing';" style="background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);color:#fff;font-size:20px;border-radius:8px;cursor:pointer;">↓</button>
      <button ontouchstart="PAC.pac.ndx=1;PAC.pac.ndy=0;if(PAC.gameState==='idle')PAC.gameState='playing';" onclick="PAC.pac.ndx=1;PAC.pac.ndy=0;if(PAC.gameState==='idle')PAC.gameState='playing';" style="background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);color:#fff;font-size:20px;border-radius:8px;cursor:pointer;">→</button>
    </div>
      <div class="game-result" id="pac-result">
        <div class="gr-card">
          <div class="gr-icon">🟡</div>
          <div class="gr-title" id="pac-result-title">게임 오버!</div>
          <div class="gr-score" id="pac-result-score">0점</div>
          <div class="gr-btns">
            <button class="gr-btn retry" onclick="pacInit();document.getElementById('pac-result').classList.remove('on');">🔄 다시하기</button>
            <button class="gr-btn home" onclick="closePacman()">🏠 닫기</button>
          </div>
        </div>
      </div>
    </div>`;
    document.getElementById('app').appendChild(scr);
    const cv=scr.querySelector('#pac-canvas');
    let sx=0,sy=0;
    cv.addEventListener('touchstart',e=>{sx=e.touches[0].clientX;sy=e.touches[0].clientY;},{passive:true});
    cv.addEventListener('touchend',e=>{
      const dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;
      if(Math.abs(dx)>Math.abs(dy)){if(Math.abs(dx)>20)pacDir(dx>0?1:0,-0,dx>0?0:-0,0);}
      else{if(Math.abs(dy)>20)pacDir(0,dy>0?0:0,0,dy>0?1:-1);}
      if(Math.abs(dx)>Math.abs(dy)){PAC.pac.ndx=dx>0?1:-1;PAC.pac.ndy=0;}
      else{PAC.pac.ndy=dy>0?1:-1;PAC.pac.ndx=0;}
    },{passive:true});
    document.addEventListener('keydown',pacKey);
  }
  openGame('pacman');if(PAC.animID)cancelAnimationFrame(PAC.animID);pacInit();
}
function closePacman(){cancelAnimationFrame(PAC.animID);document.removeEventListener('keydown',pacKey);closeGame('pacman');}
function pacKey(e){
  if(!document.getElementById('game-pacman')?.classList.contains('on'))return;
  const m={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1],
    a:[-1,0],d:[1,0],w:[0,-1],s:[0,1]};
  const v=m[e.key];
  if(v){e.preventDefault();PAC.pac.ndx=v[0];PAC.pac.ndy=v[1];}
  if(PAC.gameState==='idle'){PAC.gameState='playing';}
}
function pacInit(){
  PAC.score=0;PAC.lives=3;PAC.frame=0;PAC.moveTimer=0;PAC.gameState='idle';
  PAC.pac={x:10,y:14,dx:1,dy:0,ndx:1,ndy:0,mouth:0.1,mouthDir:1};
  PAC.ghosts=[
    {x:9,y:9,dx:1,dy:0,color:'#ff4444',sc:0},{x:10,y:9,dx:-1,dy:0,color:'#ffb8ff',sc:0},
    {x:10,y:10,dx:0,dy:1,color:'#00ffff',sc:0},{x:11,y:10,dx:0,dy:-1,color:'#ffb852',sc:0}
  ];
  // Build cells from map
  const COLS=20,ROWS=20;
  PAC.cells=[];PAC.totalDots=0;PAC.dots=0;
  for(let r=0;r<ROWS;r++){
    PAC.cells[r]=[];
    const row=(PACMAP[r]||'').padEnd(COLS,' ');
    for(let c=0;c<COLS;c++){
      const ch=row[c];
      let type=ch==='#'?'wall':ch==='.'?'dot':ch==='G'?'ghost-home':'empty';
      if(type==='dot')PAC.totalDots++;
      PAC.cells[r][c]={type,hasDot:type==='dot',hasPow:false};
    }
  }
  // Add power pellets
  [[1,1],[1,18],[18,1],[18,18]].forEach(([r,c])=>{if(PAC.cells[r]&&PAC.cells[r][c]&&PAC.cells[r][c].type!=='wall'){PAC.cells[r][c].hasPow=true;PAC.cells[r][c].hasDot=false;}});
  const sc=document.getElementById('pac-score');if(sc)sc.textContent='0';
  const lv=document.getElementById('pac-lives');if(lv)lv.textContent='3';
  cancelAnimationFrame(PAC.animID);pacLoop();
}
function pacCanMove(x,y){
  const r=Math.round(y),c=Math.round(x);
  if(r<0||r>=20||c<0||c>=20)return false;
  return PAC.cells[r]&&PAC.cells[r][c]&&PAC.cells[r][c].type!=='wall';
}
function pacLoop(){
  const cv=document.getElementById('pac-canvas');if(!cv)return;
  const COLS=20,ROWS=20;
  const SZ=Math.min(Math.floor(cv.parentElement.clientWidth*0.92/COLS),Math.floor((window.innerHeight*0.55)/ROWS));
  cv.width=COLS*SZ;cv.height=ROWS*SZ;
  const ctx=cv.getContext('2d');
  PAC.frame++;
  if(PAC.gameState==='playing'){
    PAC.moveTimer++;
    if(PAC.moveTimer>=PAC.MOVE_SPEED){
      PAC.moveTimer=0;
      // Try new direction first
      const p=PAC.pac;
      const nx=p.x+p.ndx,ny=p.y+p.ndy;
      if(pacCanMove(nx,ny)){p.dx=p.ndx;p.dy=p.ndy;}
      const mx=p.x+p.dx,my=p.y+p.dy;
      if(pacCanMove(mx,my)){p.x=mx;p.y=my;}
      // Wrap
      if(p.x<0)p.x=COLS-1;if(p.x>=COLS)p.x=0;
      // Eat dot
      const cell=PAC.cells[Math.round(p.y)]?.[Math.round(p.x)];
      if(cell?.hasDot){cell.hasDot=false;PAC.score+=10;PAC.dots++;const sc=document.getElementById('pac-score');if(sc)sc.textContent=PAC.score;}
      if(cell?.hasPow){cell.hasPow=false;PAC.score+=50;}
      // Win
      if(PAC.dots>=PAC.totalDots){
        PAC.gameState='win';
        document.getElementById('pac-result-title').textContent='🎉 클리어!';
        document.getElementById('pac-result-score').textContent=PAC.score+'점';
        document.getElementById('pac-result').classList.add('on');
        setTimeout(()=>showGameResult('pacman'),400);
      }
      // Move ghosts
      PAC.ghosts.forEach(g=>{
        g.sc++;
        if(g.sc%8===0){
          const dirs=[[1,0],[-1,0],[0,1],[0,-1]];
          const valid=dirs.filter(([dx,dy])=>pacCanMove(g.x+dx,g.y+dy)&&!(dx===-g.dx&&dy===-g.dy));
          const chosen=valid.length?valid[Math.floor(Math.random()*valid.length)]:dirs.find(([dx,dy])=>pacCanMove(g.x+dx,g.y+dy))||[0,0];
          g.x+=chosen[0];g.y+=chosen[1];g.dx=chosen[0];g.dy=chosen[1];
          if(g.x<0)g.x=COLS-1;if(g.x>=COLS)g.x=0;
        }
        // Collision
        if(Math.abs(g.x-p.x)<0.9&&Math.abs(g.y-p.y)<0.9&&PAC.gameState==='playing'){
          PAC.lives--;const lv=document.getElementById('pac-lives');if(lv)lv.textContent=PAC.lives;
          if(PAC.lives<=0){
            PAC.gameState='dead';
            if(PAC.score>PAC.best)PAC.best=PAC.score;
            document.getElementById('pac-result-title').textContent='💀 게임 오버!';
            document.getElementById('pac-result-score').textContent=PAC.score+'점';
            document.getElementById('pac-result').classList.add('on');
            setTimeout(()=>showGameResult('pacman'),400);
          } else {
            PAC.pac.x=10;PAC.pac.y=14;PAC.pac.dx=1;PAC.pac.dy=0;
          }
        }
      });
    }
    PAC.pac.mouth+=0.07*PAC.pac.mouthDir;
    if(PAC.pac.mouth>0.35||PAC.pac.mouth<0.02)PAC.pac.mouthDir*=-1;
  }
  // Draw
  ctx.fillStyle='#0a0a1a';ctx.fillRect(0,0,cv.width,cv.height);
  for(let r=0;r<ROWS;r++){
    for(let c=0;c<COLS;c++){
      const cell=PAC.cells[r]?.[c];if(!cell)continue;
      const x=c*SZ,y=r*SZ;
      if(cell.type==='wall'){
        ctx.fillStyle='#1e3a8a';ctx.fillRect(x+1,y+1,SZ-2,SZ-2);
        ctx.strokeStyle='#f06878';ctx.lineWidth=1;ctx.strokeRect(x+2,y+2,SZ-4,SZ-4);
      } else if(cell.hasDot){
        ctx.fillStyle='#ffd880';ctx.beginPath();ctx.arc(x+SZ/2,y+SZ/2,SZ*0.12,0,Math.PI*2);ctx.fill();
      } else if(cell.hasPow){
        ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(x+SZ/2,y+SZ/2,SZ*0.25,0,Math.PI*2);ctx.fill();
      }
    }
  }
  // Draw pac
  const p=PAC.pac;
  const angle=Math.atan2(p.dy,p.dx);
  ctx.fillStyle='#ffc840';ctx.beginPath();
  ctx.moveTo((p.x+0.5)*SZ,(p.y+0.5)*SZ);
  ctx.arc((p.x+0.5)*SZ,(p.y+0.5)*SZ,SZ*0.44,angle+p.mouth*Math.PI,angle+(2-p.mouth)*Math.PI);
  ctx.closePath();ctx.fill();
  // Draw ghosts
  PAC.ghosts.forEach(g=>{
    const gx=(g.x+0.5)*SZ,gy=(g.y+0.5)*SZ,gr=SZ*0.44;
    ctx.fillStyle=g.color;
    ctx.beginPath();ctx.arc(gx,gy-gr*0.1,gr,Math.PI,0);
    ctx.lineTo(gx+gr,gy+gr*0.9);
    for(let i=3;i>=0;i--){ctx.lineTo(gx+gr*(1-i*0.67),gy+gr*0.9-(i%2)*gr*0.3);}
    ctx.closePath();ctx.fill();
    ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(gx-gr*0.28,gy-gr*0.1,gr*0.22,0,Math.PI*2);ctx.arc(gx+gr*0.28,gy-gr*0.1,gr*0.22,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#000';ctx.beginPath();ctx.arc(gx-gr*0.22,gy-gr*0.1,gr*0.11,0,Math.PI*2);ctx.arc(gx+gr*0.22,gy-gr*0.1,gr*0.11,0,Math.PI*2);ctx.fill();
  });
  // Idle overlay
  if(PAC.gameState==='idle'){
    ctx.fillStyle='rgba(0,0,0,.5)';ctx.fillRect(0,cv.height/2-28,cv.width,56);
    ctx.fillStyle='#ffc840';ctx.font=`bold ${SZ*0.8}px Jua,sans-serif`;ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.fillText('방향키로 시작!',cv.width/2,cv.height/2);
  }
  PAC.animID=requestAnimationFrame(pacLoop);
}

/* ════════════════════════════════════════════════
   🏗 블록 쌓기 (Stack)
════════════════════════════════════════════════ */
let STACK={animID:null,blocks:[],current:null,score:0,best:0,gameState:'idle',
  BASE_W:200,speed:2,dir:1,level:0};
function openStack(){
  let scr=document.getElementById('game-stack');
  if(!scr){
    scr=document.createElement('div');scr.id='game-stack';scr.className='game-screen';
    scr.innerHTML=`<div class="gs-header" style="background:rgba(2,62,138,.97);backdrop-filter:blur(10px);">
      <span style="font-size:clamp(16px,2.5vw,22px);font-weight:900;color:#fff;">🏗 블록 쌓기</span>
      <div style="display:flex;gap:8px;align-items:center;">
        <div style="background:rgba(255,255,255,.15);border-radius:10px;padding:4px 14px;color:#fff;font-size:13px;font-weight:900;">높이 <span id="stack-score">0</span></div>
        <button class="gs-back" onclick="closeStack()">✕ 닫기</button>
      </div>
    </div>
    <div class="gs-body" style="background:linear-gradient(180deg,#020617,#0f172a);align-items:center;gap:10px;">
      <div style="color:#c0a0a8;font-size:13px;">클릭 / 스페이스 / 터치로 블록 쌓기!</div>
      <canvas id="stack-canvas" style="border-radius:8px;max-width:100%;max-height:65vh;display:block;cursor:pointer;"
        onclick="stackDrop()" ontouchstart="event.preventDefault();stackDrop()"></canvas>
      <div class="game-result" id="stack-result">
        <div class="gr-card">
          <div class="gr-icon">🏗</div><div class="gr-title">무너졌어요!</div>
          <div class="gr-score" id="stack-result-score">0층</div>
          <div class="gr-btns">
            <button class="gr-btn retry" onclick="stackInit();document.getElementById('stack-result').classList.remove('on');">🔄 다시하기</button>
            <button class="gr-btn home" onclick="closeStack()">🏠 닫기</button>
          </div>
        </div>
      </div>
    </div>`;
    document.getElementById('app').appendChild(scr);
    document.addEventListener('keydown',stackKey);
  }
  openGame('stack');if(STACK.animID)cancelAnimationFrame(STACK.animID);stackInit();
}
function closeStack(){cancelAnimationFrame(STACK.animID);document.removeEventListener('keydown',stackKey);closeGame('stack');}
function stackKey(e){if(!document.getElementById('game-stack')?.classList.contains('on'))return;if(e.code==='Space'||e.key===' '){e.preventDefault();stackDrop();}}
function stackInit(){
  cancelAnimationFrame(STACK.animID);
  STACK.score=0;STACK.level=0;STACK.speed=2;STACK.dir=1;
  const cv=document.getElementById('stack-canvas');if(!cv)return;
  const W=Math.min(300,cv.parentElement.clientWidth*0.9);
  cv.width=W;cv.height=Math.min(500,window.innerHeight*0.6);
  const BH=24,BASE_W=W*0.7;
  STACK.blocks=[{x:(W-BASE_W)/2,w:BASE_W,y:cv.height-BH,h:BH,color:'#334155'}];
  STACK.current={x:0,w:BASE_W,y:cv.height-BH*2,h:BH,color:stackColor(1),dir:1};
  const sc=document.getElementById('stack-score');if(sc)sc.textContent='0';
  STACK.gameState='playing';
  stackLoop();
}
function stackColor(level){
  const colors=['#f06878','#8b5cf6','#ec4899','#f0a820','#10b981','#06b6d4','#f08030','#84cc16'];
  return colors[level%colors.length];
}
function stackDrop(){
  if(STACK.gameState!=='playing')return;
  const cv=document.getElementById('stack-canvas');if(!cv)return;
  const c=STACK.current,top=STACK.blocks[STACK.blocks.length-1];
  // Calculate overlap
  const left=Math.max(c.x,top.x);
  const right=Math.min(c.x+c.w,top.x+top.w);
  const overlap=right-left;
  if(overlap<=0){
    // Missed - game over
    STACK.gameState='dead';
    if(STACK.score>STACK.best)STACK.best=STACK.score;
    document.getElementById('stack-result-score').textContent=STACK.score+'층';
    document.getElementById('stack-result').classList.add('on');
    showGameResult('stack');
    return;
  }
  // Place block
  const newBlock={x:left,w:overlap,y:c.y,h:c.h,color:c.color};
  STACK.blocks.push(newBlock);
  STACK.score++;
  const sc=document.getElementById('stack-score');if(sc)sc.textContent=STACK.score;
  // Scroll if needed
  if(STACK.score>8){STACK.blocks.forEach(b=>b.y+=newBlock.h+2);}
  // New current block
  STACK.level++;STACK.speed=Math.min(2+STACK.level*0.3,8);
  STACK.current={x:0,w:overlap,y:STACK.blocks[STACK.blocks.length-1].y-newBlock.h-2,h:newBlock.h,color:stackColor(STACK.level+1),dir:1};
  if(STACK.score>=30)showGameResult('stack');
}
function stackLoop(){
  const cv=document.getElementById('stack-canvas');if(!cv)return;
  const ctx=cv.getContext('2d'),W=cv.width,H=cv.height;
  if(STACK.gameState==='playing'){
    STACK.current.x+=STACK.speed*STACK.current.dir;
    if(STACK.current.x+STACK.current.w>=W){STACK.current.dir=-1;STACK.current.x=W-STACK.current.w;}
    if(STACK.current.x<=0){STACK.current.dir=1;STACK.current.x=0;}
  }
  ctx.fillStyle='#020617';ctx.fillRect(0,0,W,H);
  // Draw placed blocks
  STACK.blocks.forEach((b,i)=>{
    ctx.fillStyle=b.color;ctx.fillRect(b.x,b.y,b.w,b.h);
    ctx.fillStyle='rgba(255,255,255,0.15)';ctx.fillRect(b.x,b.y,b.w,4);
  });
  // Draw moving block
  if(STACK.gameState==='playing'){
    const c=STACK.current;
    ctx.fillStyle=c.color;ctx.fillRect(c.x,c.y,c.w,c.h);
    ctx.fillStyle='rgba(255,255,255,0.2)';ctx.fillRect(c.x,c.y,c.w,4);
    // Shadow/guide
    const top=STACK.blocks[STACK.blocks.length-1];
    const left=Math.max(c.x,top.x),right=Math.min(c.x+c.w,top.x+top.w),ov=right-left;
    if(ov>0){ctx.fillStyle='rgba(255,255,255,0.08)';ctx.fillRect(left,c.y,ov,c.h);}
  }
  // Score overlay
  ctx.fillStyle='rgba(255,255,255,0.6)';ctx.font='bold 14px Jua,sans-serif';ctx.textAlign='center';
  ctx.fillText(`${STACK.score}층`,W/2,20);
  STACK.animID=requestAnimationFrame(stackLoop);
}

/* ════════════════════════════════════════════════
   🦕 공룡 달리기 (Dino)
════════════════════════════════════════════════ */
let DINO={animID:null,score:0,best:0,state:'idle',
  dino:{x:60,y:0,vy:0,h:40,w:30,onGround:true},
  obs:[],frame:0,speed:4,spawnTimer:0,groundY:0};
function openDino(){
  let scr=document.getElementById('game-dino');
  if(!scr){
    scr=document.createElement('div');scr.id='game-dino';scr.className='game-screen';
    scr.innerHTML=`<div class="gs-header" style="background:rgba(15,23,42,.97);backdrop-filter:blur(10px);">
      <span style="font-size:clamp(16px,2.5vw,22px);font-weight:900;color:#fff;">🦕 공룡 달리기</span>
      <div style="display:flex;gap:8px;align-items:center;">
        <div style="background:rgba(255,255,255,.15);border-radius:10px;padding:4px 14px;color:#fff;font-size:13px;font-weight:900;">점수 <span id="dino-score">0</span></div>
        <div style="background:rgba(255,255,255,.15);border-radius:10px;padding:4px 14px;color:#fff;font-size:13px;font-weight:900;">최고 <span id="dino-best">0</span></div>
        <button class="gs-back" onclick="closeDino()">✕ 닫기</button>
      </div>
    </div>
    <div class="gs-body" style="background:#f8fafc;align-items:center;gap:10px;">
      <canvas id="dino-canvas" style="border-radius:8px;max-width:100%;display:block;cursor:pointer;border:2px solid #e2e8f0;"
        onclick="dinoJump()" ontouchstart="event.preventDefault();dinoJump()"></canvas>
      <div style="color:#c0a0a8;font-size:13px;">스페이스 / 클릭 / 터치로 점프!</div>
      <div class="game-result" id="dino-result">
        <div class="gr-card">
          <div class="gr-icon">🦕</div><div class="gr-title">충돌!</div>
          <div class="gr-score" id="dino-result-score">0점</div>
          <div class="gr-sub" id="dino-result-sub"></div>
          <div class="gr-btns">
            <button class="gr-btn retry" onclick="dinoReset();document.getElementById('dino-result').classList.remove('on');">🔄 다시하기</button>
            <button class="gr-btn home" onclick="closeDino()">🏠 닫기</button>
          </div>
        </div>
      </div>
    </div>`;
    document.getElementById('app').appendChild(scr);
    document.addEventListener('keydown',dinoKey);
  }
  openGame('dino');if(DINO.animID)cancelAnimationFrame(DINO.animID);dinoReset();dinoLoop();
}
function closeDino(){cancelAnimationFrame(DINO.animID);document.removeEventListener('keydown',dinoKey);closeGame('dino');}
function dinoKey(e){
  if(!document.getElementById('game-dino')?.classList.contains('on'))return;
  if(e.code==='Space'||e.key===' '||e.key==='ArrowUp'){e.preventDefault();dinoJump();}
}
function dinoJump(){
  if(DINO.state==='idle'){DINO.state='playing';}
  if(DINO.dino.onGround){DINO.dino.vy=-14;DINO.dino.onGround=false;}
}
function dinoReset(){
  DINO.best = lsGet(GAME_BEST_KEY,{})['dino']||0;
  DINO.state='idle';DINO.score=0;DINO.obs=[];DINO.frame=0;DINO.speed=4;DINO.spawnTimer=0;
  DINO.dino.vy=0;DINO.dino.onGround=true;
  const sc=document.getElementById('dino-score');if(sc)sc.textContent='0';
}
function dinoLoop(){
  const cv=document.getElementById('dino-canvas');if(!cv)return;
  const W=Math.min(600,cv.parentElement.clientWidth*0.96);
  cv.width=W;cv.height=160;
  const ctx=cv.getContext('2d');
  DINO.groundY=cv.height-40;
  if(!DINO.dino.y)DINO.dino.y=DINO.groundY-DINO.dino.h;
  const D=DINO.dino;
  if(DINO.state==='playing'){
    DINO.frame++;DINO.score++;
    DINO.speed=4+Math.floor(DINO.frame/300)*0.5;
    const sc=document.getElementById('dino-score');
    if(sc&&DINO.frame%5===0)sc.textContent=Math.floor(DINO.score/5);
    // Gravity
    D.vy+=0.8;D.y+=D.vy;
    if(D.y>=DINO.groundY-D.h){D.y=DINO.groundY-D.h;D.vy=0;D.onGround=true;}else{D.onGround=false;}
    // Spawn obstacles
    DINO.spawnTimer++;
    const spawnInterval=Math.max(60,120-DINO.frame/20);
    if(DINO.spawnTimer>=spawnInterval){
      DINO.spawnTimer=0;
      const h=20+Math.random()*30;
      const type=Math.random()>.7?'bird':'cactus';
      const by=type==='bird'?DINO.groundY-60-Math.random()*30:DINO.groundY-h;
      DINO.obs.push({x:W,y:by,w:type==='bird'?40:20,h:h,type});
    }
    DINO.obs.forEach(o=>o.x-=DINO.speed);
    DINO.obs=DINO.obs.filter(o=>o.x>-60);
    // Collision
    for(const o of DINO.obs){
      if(D.x+D.w-6>o.x+4&&D.x+6<o.x+o.w-4&&D.y+D.h-4>o.y+4&&D.y+4<o.y+o.h){
        DINO.state='dead';
        const finalScore=Math.floor(DINO.score/5);
        if(finalScore>DINO.best)DINO.best=finalScore;
        document.getElementById('dino-result-score').textContent=finalScore+'점';
        document.getElementById('dino-result-sub').textContent='최고: '+DINO.best+'점';
        const bst=document.getElementById('dino-best');if(bst)bst.textContent=DINO.best;
        document.getElementById('dino-result').classList.add('on');
        showGameResult('dino');
        break;
      }
    }
  }
  // Draw background
  ctx.fillStyle='#f8fafc';ctx.fillRect(0,0,W,cv.height);
  // Clouds
  ctx.fillStyle='#e2e8f0';
  [W*0.2,W*0.5,W*0.8].forEach((cx,i)=>{
    const off=(DINO.frame*(0.3+i*0.1))%W;
    ctx.beginPath();ctx.ellipse((cx-off+W)%W,30,30,15,0,0,Math.PI*2);ctx.fill();
  });
  // Ground
  ctx.fillStyle='#475569';ctx.fillRect(0,DINO.groundY,W,3);
  ctx.strokeStyle='#c0a0a8';ctx.setLineDash([20,15]);ctx.lineWidth=1;
  ctx.beginPath();ctx.moveTo(0,DINO.groundY+1);ctx.lineTo(W,DINO.groundY+1);ctx.stroke();
  ctx.setLineDash([]);
  // Draw dino
  const legOff=DINO.dino.onGround?(DINO.frame%16<8?2:-2):0;
  ctx.fillStyle='#334155';
  ctx.fillRect(D.x,D.y,D.w,D.h*0.75);  // body
  ctx.fillRect(D.x+D.w*0.5,D.y-D.h*0.25,D.w*0.5,D.h*0.3);  // head
  ctx.fillStyle='#f8fafc';ctx.fillRect(D.x+D.w*0.8,D.y-D.h*0.2,5,5);  // eye
  ctx.fillStyle='#334155';
  ctx.fillRect(D.x+6,D.y+D.h*0.7,8,12+legOff);  // leg L
  ctx.fillRect(D.x+D.w-14,D.y+D.h*0.7,8,12-legOff);  // leg R
  // Draw obstacles
  DINO.obs.forEach(o=>{
    if(o.type==='cactus'){
      ctx.fillStyle='#15803d';
      ctx.fillRect(o.x+o.w*.3,o.y,o.w*.4,o.h);  // main stem
      ctx.fillRect(o.x,o.y+o.h*.3,o.w*.35,o.h*.4);  // left arm
      ctx.fillRect(o.x+o.w*.65,o.y+o.h*.2,o.w*.35,o.h*.4);  // right arm
    } else {
      // bird
      ctx.fillStyle='#7c3aed';
      ctx.fillRect(o.x,o.y+o.h*.3,o.w,o.h*.4);  // body
      const wingY=DINO.frame%20<10?o.y:o.y+o.h*.5;
      ctx.fillRect(o.x+o.w*.2,wingY,o.w*.6,o.h*.3);  // wing
    }
  });
  // Idle/dead overlay
  if(DINO.state==='idle'){
    ctx.fillStyle='rgba(0,0,0,.4)';ctx.fillRect(W/2-100,cv.height/2-20,200,40);
    ctx.fillStyle='#fff';ctx.font='bold 16px Jua,sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.fillText('클릭·스페이스로 시작!',W/2,cv.height/2);
  }
  DINO.animID=requestAnimationFrame(dinoLoop);
}

/* ════════════════════════════════════════════════
   🚀 우주 피하기 (Dodge)
════════════════════════════════════════════════ */
let DODGE={animID:null,score:0,best:0,state:'idle',
  ship:{x:0,y:0,w:34,h:34},rocks:[],frame:0,speed:2.5,spawnT:0,
  keys:{left:false,right:false},W:360,H:520};
function openDodge(){
  let scr=document.getElementById('game-dodge');
  if(!scr){
    scr=document.createElement('div');scr.id='game-dodge';scr.className='game-screen';
    scr.innerHTML=`<div class="gs-header" style="background:rgba(10,10,30,.97);backdrop-filter:blur(10px);">
      <span style="font-size:clamp(16px,2.5vw,22px);font-weight:900;color:#f08090;">🚀 우주 피하기</span>
      <div style="display:flex;gap:8px;align-items:center;">
        <div style="background:rgba(255,255,255,.1);border-radius:10px;padding:4px 14px;color:#fff;font-size:13px;font-weight:900;">점수 <span id="dodge-score">0</span></div>
        <div style="background:rgba(255,255,255,.1);border-radius:10px;padding:4px 14px;color:#fff;font-size:13px;font-weight:900;">최고 <span id="dodge-best">0</span></div>
        <button class="gs-back" onclick="closeDodge()">✕ 닫기</button>
      </div>
    </div>
    <div class="gs-body" style="background:#050510;align-items:center;gap:8px;">
      <canvas id="dodge-canvas" style="border-radius:8px;max-width:100%;max-height:65vh;display:block;cursor:pointer;touch-action:none;"></canvas>
      <div style="color:#4b5563;font-size:12px;">⬅➡ 방향키 · WASD · 터치 드래그</div>
      <div class="game-result" id="dodge-result">
        <div class="gr-card">
          <div class="gr-icon">🚀</div><div class="gr-title">충돌!</div>
          <div class="gr-score" id="dodge-result-score">0점</div>
          <div class="gr-sub" id="dodge-result-sub"></div>
          <div class="gr-btns">
            <button class="gr-btn retry" onclick="dodgeReset();document.getElementById('dodge-result').classList.remove('on');">🔄 다시하기</button>
            <button class="gr-btn home" onclick="closeDodge()">🏠 닫기</button>
          </div>
        </div>
      </div>
    </div>`;
    document.getElementById('app').appendChild(scr);
    const cv=scr.querySelector('#dodge-canvas');
    let tx=0;
    cv.addEventListener('touchstart',e=>{tx=e.touches[0].clientX;DODGE.state='playing';},{passive:true});
    cv.addEventListener('touchmove',e=>{
      const dx=e.touches[0].clientX-tx;
      DODGE.ship.x=Math.max(0,Math.min(DODGE.W-DODGE.ship.w,DODGE.ship.x+dx));
      tx=e.touches[0].clientX;
    },{passive:true});
    cv.addEventListener('click',()=>{if(DODGE.state==='idle')DODGE.state='playing';});
    document.addEventListener('keydown',dodgeKey);
    document.addEventListener('keyup',dodgeKeyUp);
  }
  openGame('dodge');if(DODGE.animID)cancelAnimationFrame(DODGE.animID);dodgeReset();dodgeLoop();
}
function closeDodge(){cancelAnimationFrame(DODGE.animID);document.removeEventListener('keydown',dodgeKey);document.removeEventListener('keyup',dodgeKeyUp);closeGame('dodge');}
function dodgeKey(e){
  if(!document.getElementById('game-dodge')?.classList.contains('on'))return;
  if(e.key==='ArrowLeft'||e.key==='a')DODGE.keys.left=true;
  if(e.key==='ArrowRight'||e.key==='d')DODGE.keys.right=true;
  if(DODGE.state==='idle')DODGE.state='playing';
  if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown',' '].includes(e.key))e.preventDefault();
}
function dodgeKeyUp(e){
  if(e.key==='ArrowLeft'||e.key==='a')DODGE.keys.left=false;
  if(e.key==='ArrowRight'||e.key==='d')DODGE.keys.right=false;
}
function dodgeReset(){
  DODGE.best = lsGet(GAME_BEST_KEY,{})['dodge']||0;
  DODGE.state='idle';DODGE.score=0;DODGE.rocks=[];DODGE.frame=0;DODGE.speed=2.5;DODGE.spawnT=0;
  DODGE.keys={left:false,right:false};DODGE._stars=[];
  DODGE.ship.x=DODGE.W/2-DODGE.ship.w/2;DODGE.ship.y=DODGE.H-60;
  const sc=document.getElementById('dodge-score');if(sc)sc.textContent='0';
}
function dodgeLoop(){
  const cv=document.getElementById('dodge-canvas');if(!cv)return;
  const W=Math.min(360,cv.parentElement.clientWidth*0.9);
  const H=Math.min(520,window.innerHeight*0.6);
  cv.width=W;cv.height=H;DODGE.W=W;DODGE.H=H;
  DODGE.ship.y=H-60;
  const ctx=cv.getContext('2d');
  if(DODGE.state==='playing'){
    DODGE.frame++;DODGE.score++;
    DODGE.speed=2.5+DODGE.frame/400;
    // Move ship
    const SHIPSPD=5;
    if(DODGE.keys.left)DODGE.ship.x=Math.max(0,DODGE.ship.x-SHIPSPD);
    if(DODGE.keys.right)DODGE.ship.x=Math.min(W-DODGE.ship.w,DODGE.ship.x+SHIPSPD);
    // Spawn rocks
    DODGE.spawnT++;
    const si=Math.max(28,60-DODGE.frame/60);
    if(DODGE.spawnT>=si){
      DODGE.spawnT=0;
      const rw=20+Math.random()*30;
      DODGE.rocks.push({x:Math.random()*(W-rw),y:-40,w:rw,h:rw,speed:DODGE.speed+Math.random()*1.5,rot:0,rotSpd:(Math.random()-.5)*0.15,type:Math.random()>.6?'star':'rock'});
    }
    DODGE.rocks.forEach(r=>{r.y+=r.speed;r.rot+=r.rotSpd;});
    DODGE.rocks=DODGE.rocks.filter(r=>r.y<H+50);
    // Collision
    const s=DODGE.ship;
    for(const r of DODGE.rocks){
      if(s.x+6<r.x+r.w-6&&s.x+s.w-6>r.x+6&&s.y+6<r.y+r.h-6&&s.y+s.h-6>r.y+6){
        DODGE.state='dead';
        const final=Math.floor(DODGE.score/10);
        if(final>DODGE.best)DODGE.best=final;
        document.getElementById('dodge-result-score').textContent=final+'점';
        document.getElementById('dodge-result-sub').textContent='최고: '+DODGE.best+'점';
        const bst=document.getElementById('dodge-best');if(bst)bst.textContent=DODGE.best;
        document.getElementById('dodge-result').classList.add('on');
        showGameResult('dodge');
        break;
      }
    }
    if(DODGE.frame%10===0){const sc=document.getElementById('dodge-score');if(sc)sc.textContent=Math.floor(DODGE.score/10);}
  }
  // Draw
  ctx.fillStyle='#050510';ctx.fillRect(0,0,W,H);
  // Stars bg
  if(!DODGE._stars||DODGE._stars.length===0){
    DODGE._stars=Array.from({length:60},()=>({x:Math.random()*400,y:Math.random()*600,s:Math.random()*2+0.5,b:Math.random()}));
  }
  DODGE._stars.forEach(st=>{
    if(DODGE.state==='playing')st.y+=0.3;
    if(st.y>H)st.y=0;
    ctx.fillStyle=`rgba(255,255,255,${st.b})`;ctx.beginPath();ctx.arc(st.x%W,st.y,st.s,0,Math.PI*2);ctx.fill();
  });
  // Rocks
  DODGE.rocks.forEach(r=>{
    ctx.save();ctx.translate(r.x+r.w/2,r.y+r.h/2);ctx.rotate(r.rot);
    if(r.type==='star'){
      ctx.fillStyle='#ffc840';ctx.font=`${r.w}px serif`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('☄️',0,0);
    } else {
      ctx.fillStyle='#6b7280';
      ctx.beginPath();
      const pts=6,ir=r.w*.35,or=r.w*.5;
      for(let i=0;i<pts*2;i++){const ang=i*Math.PI/pts,rad=i%2?ir:or;ctx.lineTo(Math.cos(ang)*rad,Math.sin(ang)*rad);}
      ctx.closePath();ctx.fill();
      ctx.fillStyle='#9ca3af';ctx.beginPath();ctx.arc(-r.w*.15,-r.h*.1,r.w*.12,0,Math.PI*2);ctx.fill();
    }
    ctx.restore();
  });
  // Ship
  const s=DODGE.ship;
  ctx.save();ctx.translate(s.x+s.w/2,s.y+s.h/2);
  ctx.fillStyle='#f06878';ctx.beginPath();ctx.moveTo(0,-s.h/2);ctx.lineTo(-s.w/2,s.h/2);ctx.lineTo(s.w/2,s.h/2);ctx.closePath();ctx.fill();
  ctx.fillStyle='#60a5fa';ctx.beginPath();ctx.moveTo(0,-s.h/2+4);ctx.lineTo(-s.w/2+8,s.h/2-4);ctx.lineTo(s.w/2-8,s.h/2-4);ctx.closePath();ctx.fill();
  // Engine fire
  if(DODGE.state==='playing'){
    ctx.fillStyle=`rgba(255,200,60,${0.6+Math.sin(DODGE.frame*.3)*.4})`;
    ctx.beginPath();ctx.moveTo(-8,s.h/2);ctx.lineTo(8,s.h/2);ctx.lineTo(0,s.h/2+10+Math.random()*8);ctx.closePath();ctx.fill();
  }
  ctx.restore();
  // Idle
  if(DODGE.state==='idle'){
    ctx.fillStyle='rgba(0,0,0,.6)';ctx.fillRect(0,H/2-28,W,56);
    ctx.fillStyle='#60a5fa';ctx.font=`bold 16px Jua,sans-serif`;ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.fillText('방향키 또는 클릭으로 시작!',W/2,H/2);
  }
  DODGE.animID=requestAnimationFrame(dodgeLoop);
}

/* ════════════════════════════════════════════════
   🎨 사이먼 게임 (Simon Says)
════════════════════════════════════════════════ */
let SIMON={seq:[],input:[],level:0,best:0,state:'idle',flashIdx:0,flashTimer:0,
  COLORS:['#e05060','#34c498','#f06878','#eab308'],
  LABELS:['빨강','초록','파랑','노랑'],
  EMOJIS:['🟥','🟩','🟦','🟨'],
  lit:-1,animID:null};
function openSimon(){
  let scr=document.getElementById('game-simon');
  if(!scr){
    scr=document.createElement('div');scr.id='game-simon';scr.className='game-screen';
    scr.innerHTML=`<div class="gs-header" style="background:rgba(15,10,30,.97);backdrop-filter:blur(10px);">
      <span style="font-size:clamp(16px,2.5vw,22px);font-weight:900;color:#c084fc;">🎨 사이먼 게임</span>
      <div style="display:flex;gap:8px;align-items:center;">
        <div style="background:rgba(255,255,255,.1);border-radius:10px;padding:4px 14px;color:#fff;font-size:13px;font-weight:900;">단계 <span id="simon-level">0</span></div>
        <div style="background:rgba(255,255,255,.1);border-radius:10px;padding:4px 14px;color:#fff;font-size:13px;font-weight:900;">최고 <span id="simon-best">0</span></div>
        <button class="gs-back" onclick="closeSimon()">✕ 닫기</button>
      </div>
    </div>
    <div class="gs-body" style="background:linear-gradient(180deg,#0f0a1e,#1e1040);align-items:center;justify-content:center;gap:clamp(14px,3vh,28px);">
      <div id="simon-msg" style="font-size:clamp(16px,2.5vw,22px);font-weight:900;color:#fff;text-align:center;min-height:36px;"></div>
      <div id="simon-board" style="display:grid;grid-template-columns:1fr 1fr;gap:12px;width:min(300px,80vw);">
        <div class="simon-btn" id="simon-0" onclick="simonPress(0)" style="background:#e05060;aspect-ratio:1;border-radius:18px;cursor:pointer;transition:filter .1s,transform .1s;border:4px solid rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;font-size:clamp(32px,8vw,52px);user-select:none;">🟥</div>
        <div class="simon-btn" id="simon-1" onclick="simonPress(1)" style="background:#34c498;aspect-ratio:1;border-radius:18px;cursor:pointer;transition:filter .1s,transform .1s;border:4px solid rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;font-size:clamp(32px,8vw,52px);user-select:none;">🟩</div>
        <div class="simon-btn" id="simon-2" onclick="simonPress(2)" style="background:#3b82f6;aspect-ratio:1;border-radius:18px;cursor:pointer;transition:filter .1s,transform .1s;border:4px solid rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;font-size:clamp(32px,8vw,52px);user-select:none;">🟦</div>
        <div class="simon-btn" id="simon-3" onclick="simonPress(3)" style="background:#eab308;aspect-ratio:1;border-radius:18px;cursor:pointer;transition:filter .1s,transform .1s;border:4px solid rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;font-size:clamp(32px,8vw,52px);user-select:none;">🟨</div>
      </div>
      <button id="simon-start-btn" onclick="simonStart()" style="padding:12px 36px;font-size:clamp(14px,2vw,18px);font-family:Jua,sans-serif;background:linear-gradient(135deg,#a855f7,#7c3aed);color:#fff;border:none;border-radius:14px;cursor:pointer;box-shadow:0 4px 0 #4c1d95;">🎮 게임 시작</button>
      <div class="game-result" id="simon-result">
        <div class="gr-card">
          <div class="gr-icon">🎨</div><div class="gr-title">틀렸어요!</div>
          <div class="gr-score" id="simon-result-score">0단계</div>
          <div class="gr-sub" id="simon-result-sub"></div>
          <div class="gr-btns">
            <button class="gr-btn retry" onclick="simonStart();document.getElementById('simon-result').classList.remove('on');">🔄 다시하기</button>
            <button class="gr-btn home" onclick="closeSimon()">🏠 닫기</button>
          </div>
        </div>
      </div>
    </div>`;
    document.getElementById('app').appendChild(scr);
  }
  openGame('simon');
  SIMON.seq=[];SIMON.input=[];SIMON.level=0;SIMON.state='idle';SIMON.lit=-1;
  simonSetBtnsEnabled(true);
  const _sr=document.getElementById('simon-result');if(_sr)_sr.classList.remove('on');
  simonSetMsg('🎮 시작 버튼을 눌러요!');
}
function closeSimon(){cancelAnimationFrame(SIMON.animID);closeGame('simon');}
function simonSetMsg(m){const el=document.getElementById('simon-msg');if(el)el.textContent=m;}
function simonStart(){
  SIMON.best = lsGet(GAME_BEST_KEY,{})['simon']||0;
  const btn=document.getElementById('simon-start-btn');if(btn)btn.style.display='none';
  SIMON.seq=[];SIMON.input=[];SIMON.level=0;
  simonNextRound();
}
function simonNextRound(){
  SIMON.input=[];SIMON.state='showing';
  SIMON.seq.push(Math.floor(Math.random()*4));
  SIMON.level++;
  const lv=document.getElementById('simon-level');if(lv)lv.textContent=SIMON.level;
  simonSetMsg(`👀 잘 보세요! ${SIMON.level}단계`);
  simonSetBtnsEnabled(false);
  let i=0;
  function flash(){
    if(i>=SIMON.seq.length){
      SIMON.state='input';
      simonSetMsg('🖐 따라 눌러요!');
      simonSetBtnsEnabled(true);
      return;
    }
    const c=SIMON.seq[i];
    simonLit(c,true);
    setTimeout(()=>{simonLit(c,false);setTimeout(()=>{i++;flash();},180);},520);
  }
  setTimeout(flash,600);
}
function simonLit(idx,on){
  const el=document.getElementById('simon-'+idx);
  if(!el)return;
  el.style.filter=on?'brightness(2.2) drop-shadow(0 0 18px white)':'brightness(1)';
  el.style.transform=on?'scale(1.08)':'scale(1)';
}
function simonSetBtnsEnabled(on){
  for(let i=0;i<4;i++){const el=document.getElementById('simon-'+i);if(el)el.style.pointerEvents=on?'auto':'none';}
}
function simonPress(idx){
  if(SIMON.state!=='input')return;
  simonLit(idx,true);setTimeout(()=>simonLit(idx,false),180);
  SIMON.input.push(idx);
  const pos=SIMON.input.length-1;
  if(SIMON.input[pos]!==SIMON.seq[pos]){
    // Wrong
    SIMON.state='dead';
    if(SIMON.level>SIMON.best)SIMON.best=SIMON.level-1;
    const bst=document.getElementById('simon-best');if(bst)bst.textContent=SIMON.best;
    simonSetMsg('❌ 틀렸어요!');
    document.getElementById('simon-result-score').textContent=(SIMON.level-1)+'단계';
    document.getElementById('simon-result-sub').textContent='최고: '+SIMON.best+'단계';
    setTimeout(()=>{
      document.getElementById('simon-result').classList.add('on');
      const sBtn=document.getElementById('simon-start-btn');if(sBtn)sBtn.style.display='';
      showGameResult('simon');
    },600);
    return;
  }
  if(SIMON.input.length===SIMON.seq.length){
    simonSetBtnsEnabled(false);
    simonSetMsg('✅ 정답!');
    setTimeout(simonNextRound,800);
  }
}

/* ════════════════════════════════════════════
   🎙 SOOP 즐겨찾기 스트리머 퀵버튼
════════════════════════════════════════════ */
const SOOP_FAV_KEY   = 'cgSoopFavStreamers';
const SOOP_SCHED_KEY = 'cgSoopSchedule';
const SOOP_VOTE_KEY  = 'cgSoopVotes';

function soopFavLoad() { return lsGetJSON(SOOP_FAV_KEY, []); }
function soopFavSave(list) { lsSet(SOOP_FAV_KEY, list); }

function soopFavInit() {
  soopFavRender();
  soopSchedRender();
  soopVoteRender();
}

function soopFavAdd() {
  const id   = (document.getElementById('soop-fav-new-id')?.value || '').trim().toLowerCase();
  const nick = (document.getElementById('soop-fav-new-nick')?.value || '').trim();
  if (!id) { showToast('스트리머 ID를 입력하세요!'); return; }
  const list = soopFavLoad();
  if (list.find(f => f.id === id)) { showToast('이미 등록된 스트리머예요!'); return; }
  list.push({ id, nick: nick || id });
  soopFavSave(list);
  const idInp = document.getElementById('soop-fav-new-id');
  const nickInp = document.getElementById('soop-fav-new-nick');
  if(idInp) idInp.value = '';
  if(nickInp) nickInp.value = '';
  soopFavRender();
  soopVoteRender();
  showToast('🎙 ' + (nick || id) + ' 등록됨!');
}

function soopFavRemove(id) {
  const list = soopFavLoad().filter(f => f.id !== id);
  soopFavSave(list);
  soopFavRender();
  soopVoteRender();
}

function soopFavRender() {
  const wrap = document.getElementById('soop-fav-quick');
  if (!wrap) return;
  const list = soopFavLoad();
  if (!list.length) {
    wrap.innerHTML = '<span style="font-size:11px;color:rgba(255,255,255,.3);">+ 등록을 눌러 즐겨찾기를 추가하세요!</span>';
    return;
  }
  wrap.innerHTML = list.map(f => `
    <div style="display:inline-flex;align-items:center;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.13);border-radius:20px;overflow:hidden;">
      <button onclick="soopFavQuickAdd('${esc(f.id)}')" title="방송보기"
        style="padding:4px 10px;font-size:12px;font-family:'Jua',sans-serif;background:none;border:none;color:#fff;cursor:pointer;white-space:nowrap;">&#9654; ${esc(f.nick)}</button>
      <button onclick="soopChatOpen('${esc(f.id)}')" title="채팅창"
        style="padding:4px 8px;font-size:11px;background:rgba(80,160,240,.25);border:none;border-left:1px solid rgba(255,255,255,.1);color:rgba(180,220,255,.9);cursor:pointer;">&#128172;</button>
      <button onclick="soopFavRemove('${esc(f.id)}')" title="삭제"
        style="padding:4px 6px;font-size:11px;background:none;border:none;border-left:1px solid rgba(255,255,255,.1);color:rgba(255,100,100,.6);cursor:pointer;">&#10005;</button>
    </div>`).join('');
}

function soopFavQuickAdd(id) {
  // 기존 soopAdd 로직을 재활용해 해당 스트리머를 바로 추가
  const inp = document.getElementById('soop-inp');
  if (inp) inp.value = id;
  soopAdd();
  showToast('🎙 ' + id + ' 방송 추가!');
}

/* ════ 방송 예정 메모 ════ */
function soopSchedLoad() { return lsGetJSON(SOOP_SCHED_KEY, []); }
function soopSchedSaveAll(list) { lsSet(SOOP_SCHED_KEY, list); }

function soopSchedAdd() {
  const form = document.getElementById('soop-sched-form');
  if (!form) return;
  form.style.display = form.style.display === 'none' ? 'flex' : 'none';
}
function soopSchedFormHide() {
  const form = document.getElementById('soop-sched-form');
  if (form) form.style.display = 'none';
}

function soopSchedSave() {
  const id   = (document.getElementById('soop-sched-id')?.value || '').trim().toLowerCase();
  const day  = (document.getElementById('soop-sched-day')?.value || '').trim();
  const time = (document.getElementById('soop-sched-time')?.value || '').trim();
  const note = (document.getElementById('soop-sched-note')?.value || '').trim();
  if (!id) { showToast('스트리머 ID를 입력하세요!'); return; }
  const list = soopSchedLoad();
  list.push({ id, day, time, note, ts: Date.now() });
  soopSchedSaveAll(list);
  ['soop-sched-id','soop-sched-day','soop-sched-time','soop-sched-note'].forEach(k => {
    const el = document.getElementById(k); if (el) el.value = '';
  });
  soopSchedFormHide();
  soopSchedRender();
  showToast('📅 방송 예정 등록됨!');
}

function soopSchedDelete(ts) {
  soopSchedSaveAll(soopSchedLoad().filter(s => s.ts !== ts));
  soopSchedRender();
}

const DAY_MAP = { '월':1,'화':2,'수':3,'목':4,'금':5,'토':6,'일':0 };
function soopSchedIsToday(dayStr) {
  if (!dayStr) return false;
  const today = new Date().getDay();
  return dayStr.split(/[,，\s]+/).some(d => DAY_MAP[d.trim()] === today);
}

function soopSchedRender() {
  const list  = document.getElementById('soop-sched-list');
  const empty = document.getElementById('soop-sched-empty');
  if (!list) return;
  const items = soopSchedLoad();
  if (!items.length) {
    list.innerHTML = '';
    if (empty) empty.style.display = '';
    return;
  }
  if (empty) empty.style.display = 'none';
  list.innerHTML = items.map(s => {
    const today = soopSchedIsToday(s.day);
    return `<div style="display:flex;align-items:center;gap:8px;padding:8px 10px;background:${today ? 'linear-gradient(135deg,#eafaf5,#d4f5ec)' : '#fff9f9'};border:1.5px solid ${today ? '#c4f0e4' : '#fce0e0'};border-radius:9px;">
      <span style="font-size:16px;">🎙</span>
      <div style="flex:1;min-width:0;">
        <div style="font-size:13px;font-family:'Jua',sans-serif;color:#3a1820;font-weight:900;">${s.id}${s.day ? ' · '+s.day : ''}${s.time ? ' '+s.time : ''}</div>
        ${s.note ? `<div style="font-size:11px;color:#a08088;margin-top:2px;">${s.note}</div>` : ''}
      </div>
      ${today ? '<span style="font-size:10px;background:#44c9a8;color:#fff;border-radius:99px;padding:2px 8px;white-space:nowrap;flex-shrink:0;">오늘!</span>' : ''}
      <button onclick="soopFavQuickAdd('${s.id}')"
        style="padding:4px 9px;font-size:11px;font-family:'Jua',sans-serif;background:linear-gradient(135deg,#e04858,#f06878);color:#fff;border:none;border-radius:7px;cursor:pointer;white-space:nowrap;">▶ 보기</button>
      <button onclick="soopSchedDelete(${s.ts})"
        style="background:none;border:none;color:#f09090;font-size:14px;cursor:pointer;padding:2px 4px;">✕</button>
    </div>`;
  }).join('');
}

/* ════ 응원 투표 ════ */
function soopVoteLoad() { return lsGetJSON(SOOP_VOTE_KEY, {}); }
function soopVoteSave(obj) { lsSet(SOOP_VOTE_KEY, obj); }

function soopVote(id) {
  const votes = soopVoteLoad();
  votes[id] = (votes[id] || 0) + 1;
  soopVoteSave(votes);
  soopVoteRender();
  showToast('💖 ' + id + ' 응원했어요!');
}

function soopVoteReset() {
  cgConfirm('응원 투표를 초기화할까요?', () => {
    soopVoteSave({});
    soopVoteRender();
  }, '🏆', '초기화', 'linear-gradient(135deg,#6366f1,#e06080)');
}

function soopVoteRender() {
  const wrap  = document.getElementById('soop-vote-list');
  const empty = document.getElementById('soop-vote-empty');
  if (!wrap) return;
  const favs  = soopFavLoad();
  const votes = soopVoteLoad();
  if (!favs.length) {
    wrap.innerHTML = '';
    if (empty) empty.style.display = '';
    return;
  }
  if (empty) empty.style.display = 'none';
  // 득표순 정렬
  const sorted = [...favs].sort((a, b) => (votes[b.id] || 0) - (votes[a.id] || 0));
  const maxV = Math.max(1, ...sorted.map(f => votes[f.id] || 0));
  const medals = ['🥇','🥈','🥉'];
  wrap.innerHTML = sorted.map((f, i) => {
    const v   = votes[f.id] || 0;
    const pct = Math.round((v / maxV) * 100);
    return `<div style="display:flex;align-items:center;gap:8px;">
      <span style="font-size:16px;width:20px;text-align:center;flex-shrink:0;">${medals[i] || '🎙'}</span>
      <div style="flex:1;min-width:0;">
        <div style="display:flex;justify-content:space-between;margin-bottom:3px;">
          <span style="font-size:12px;font-family:'Jua',sans-serif;color:#3a1820;font-weight:900;">${esc(f.nick)}</span>
          <span style="font-size:11px;color:#b08088;">${v}표</span>
        </div>
        <div style="background:#fce0e0;border-radius:99px;height:7px;overflow:hidden;">
          <div style="height:100%;width:${pct}%;background:linear-gradient(90deg,#f06878,#e04858);border-radius:99px;transition:width .4s;"></div>
        </div>
      </div>
      <button onclick="soopVote('${esc(f.id)}')"
        style="padding:5px 11px;font-size:13px;background:linear-gradient(135deg,#ffd166,#ffaa44);border:none;border-radius:9px;cursor:pointer;box-shadow:0 2px 0 #b06030;flex-shrink:0;">💖</button>
    </div>`;
  }).join('');
}

/* ═══════════════════════════════════════════════════════════════
   공부하기 - 퀴즈 게임 시스템
   OX 데이터를 객관식으로 변환하여 게임 제공
   ═══════════════════════════════════════════════════════════════ */

// 카테고리 매핑
const CAT_MAP = {
  '📖국어': 'korean',
  '🔢수학': 'math',
  '🏛역사': 'history',
  '🔬과학': 'science'
};

// OX 데이터 → QDB 포맷 변환
function convertToQDB(oxQuestions) {
  return oxQuestions.map(([q, ans, cat]) => ({
    c: CAT_MAP[cat] || 'science',
    d: 'normal',
    t: 30,
    q: q,
    a: ans ? 'O' : 'X',
    h: ''
  }));
}

/* ═══ QDB 퀴즈 시스템 ═══ */
const QZ = {
  pool: [], cat: 'all', diff: 'hard', idx: 0,
  score: 0, correct: 0, total: 0, combo: 0,
  answers: [], history: [], hintUsed: false
};

function initQuiz() {
  if (typeof QDB === 'undefined' || !QDB || QDB.length === 0) {
    console.error('QDB not loaded');
    return;
  }
  QZ.cat = 'all';
  QZ.diff = 'easy';
  loadQuiz();
}

function loadQuiz() {
  filterQuestions();
  QZ.idx = 0; QZ.score = 0; QZ.correct = 0; QZ.total = 0;
  QZ.combo = 0; QZ.answers = [];
  QZ.history = []; QZ.hintUsed = false;
  updateStats();
  renderBoard();
}

function filterQuestions() {
  let filtered = QDB || [];
  if (QZ.cat !== 'all') filtered = filtered.filter(q => q.c === QZ.cat);
  QZ.pool = filtered.sort(() => Math.random() - 0.5);
  QZ.idx = 0;
}

function setCat(cat, btn) {
  const row = document.getElementById('cat-row');
  if (!row) return;
  row.querySelectorAll('.study-cat-btn').forEach(b => b.classList.remove('on'));
  if (btn) btn.classList.add('on');
  QZ.cat = cat;
  loadQuiz();
}

function setDiff(diff, btn) {
  const row = document.getElementById('diff-row');
  if (!row) return;
  row.querySelectorAll('.study-diff-btn').forEach(b => b.classList.remove('on'));
  if (btn) btn.classList.add('on');
  QZ.diff = diff;
  loadQuiz();
}

function renderBoard() {
  const board = document.getElementById('board');
  if (!board) return;
  if (QZ.pool.length === 0) {
    board.innerHTML = '<div style="text-align:center;padding:40px;color:#999;font-family:\'Jua\';">문제가 없습니다</div>';
    return;
  }
  if (QZ.idx >= QZ.pool.length) {
    showWin();
    return;
  }
  const q = QZ.pool[QZ.idx];
  const catEmoji = { 'korean': '📖', 'math': '🔢', 'history': '🏛', 'science': '🔬', 'sports': '⚽', 'kpop': '🎤', 'general': '🧠', 'nonsense': '😂' }[q.c] || '📚';
  const catLabel = { 'korean': '국어', 'math': '수학', 'history': '역사', 'science': '과학', 'sports': '스포츠', 'kpop': '연예', 'general': '상식', 'nonsense': '넌센스' }[q.c] || '전체';

  board.innerHTML = `
    <div class="sb-header">
      <span class="sb-cat">${catEmoji} ${catLabel}</span>
      <span class="sb-num">${QZ.idx+1} / ${QZ.pool.length}</span>
    </div>
    <div class="sb-question">${esc(q.q)}</div>
    ${q.h ? `<div class="sb-hint-box" id="hint-box" style="display:none">💡 ${q.h}</div>` : ''}
    <div class="sb-input-wrap">
      <input class="sb-input" id="answer-input" type="text"
        placeholder="정답을 입력하세요"
        onkeypress="if(event.key==='Enter')submitAnswer()"
        autocomplete="off" />
    </div>
    <div class="sb-btns">
      <button class="sb-btn-submit" onclick="submitAnswer()">✅ 제출</button>
      ${q.h ? `<button class="sb-btn-hint" onclick="useHint()">💡 힌트</button>` : ''}
      <button class="sb-btn-skip" onclick="skipQuestion()">⏭ 넘기기</button>
    </div>
  `;
  setTimeout(() => document.getElementById('answer-input')?.focus(), 50);
}

function submitAnswer() {
  const inp = document.getElementById('answer-input');
  if (!inp) return;
  const selected = inp.value.trim();
  if (!selected) {
    showToast('정답을 입력하세요');
    return;
  }
  const q = QZ.pool[QZ.idx];
  const isCorrect = selected.toLowerCase() === q.a.toLowerCase();
  QZ.total++;
  if (isCorrect) {
    QZ.correct++; QZ.combo++;
    const points = Math.max(10, 100 - QZ.combo * 5);
    QZ.score += points;
    showToast('정답입니다! (+' + points + '점)');
  } else {
    QZ.combo = 0;
    showToast('오답입니다. 정답: ' + q.a);
  }
  QZ.answers.push({ q: q.q, selected, correct: q.a, isCorrect });
  QZ.history.push({ cat: q.c, correct: isCorrect });

  inp.disabled = true;
  setTimeout(() => {
    QZ.idx++;
    QZ.hintUsed = false;
    updateStats();
    renderBoard();
  }, 1500);
}

function useHint() {
  if (QZ.hintUsed) return;
  QZ.hintUsed = true;
  const hintBox = document.getElementById('hint-box');
  if (hintBox) hintBox.style.display = 'block';
}

function skipQuestion() {
  QZ.combo = 0;
  QZ.idx++;
  QZ.hintUsed = false;
  updateStats();
  renderBoard();
}

function updateStats() {
  const scoreEl = document.getElementById('score-display');
  const correctEl = document.getElementById('correct-display');
  const totalEl = document.getElementById('total-display');
  const comboEl = document.getElementById('combo-display');
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-text');

  if (scoreEl) scoreEl.textContent = QZ.score;
  if (correctEl) correctEl.textContent = QZ.correct;
  if (totalEl) totalEl.textContent = QZ.total;
  if (comboEl) comboEl.textContent = QZ.combo;

  // 진행도 업데이트
  if (QZ.pool.length > 0) {
    const progress = Math.round((QZ.idx / QZ.pool.length) * 100);
    if (progressBar) progressBar.style.width = progress + '%';
    if (progressText) progressText.textContent = progress;
  }
}

function showWin() {
  const modal = document.getElementById('win-bg');
  if (!modal) return;

  const rate = QZ.total > 0 ? Math.round((QZ.correct / QZ.total) * 100) : 0;

  const scoreEl = document.getElementById('win-score');
  const rateEl = document.getElementById('win-rate');

  if (scoreEl) scoreEl.textContent = QZ.score;
  if (rateEl) rateEl.textContent = rate;

  modal.classList.add('show');
}

function closeModal() {
  const modal = document.getElementById('win-bg');
  if (modal) modal.classList.remove('show');
}

function newGame() {
  closeModal();
  loadQuiz();
}

// ═══ 텐텐 게임 시스템 ═══
const TT = {
  canvas: null, ctx: null, grid: [], score: 0, timeLeft: 180, gameActive: false,
  isDragging: false, startX: 0, startY: 0, endX: 0, endY: 0, combo: 0,
  hintCells: [], hintFlash: 0, currentMission: null, ROWS: 10, COLS: 10, SIZE: 60
};
const TT_ICONS = { 1: '🍓', 2: '💖', 3: '⭐', 4: '🧸', 5: '🍭', 6: '🧁', 7: '🎀', 8: '🍑', 9: '💎' };
const TT_COLORS = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff', '#e2e2e2'];

// ═══ 유키 퀴즈타임 (공부하기) ═══
const STUDY = {
  canvas: null, ctx: null, grid: [], score: 0, timeLeft: 180, gameActive: false,
  isDragging: false, startX: 0, startY: 0, endX: 0, endY: 0, combo: 0,
  hintCells: [], hintFlash: 0, currentMission: null, ROWS: 10, COLS: 10, SIZE: 60
};
const STUDY_ICONS = { 1: '🍓', 2: '💖', 3: '⭐', 4: '🧸', 5: '🍭', 6: '🧁', 7: '🎀', 8: '🍑', 9: '💎' };
const STUDY_COLORS = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff', '#e2e2e2'];
const STUDY_CHAT_POOL = {
  idle: ["열심히 공부하니 멋진데!", "오늘 컨디션 좋네", "집중하자!", "화이팅!", "잘하고 있어!"],
  success: ["정답이야!", "와우!", "멋진데!", "좋아!", "완벽해!"],
  fail: ["아 아쉬워", "다시 해봐", "괜찮아", "집중하자", "화이팅!"],
  hint: ["힌트 사용했네", "수익 300원 차감", "더 열심히!", "한번 더!"],
  gold: ["황금 아이콘!", "대박 터졌다!", "역시 운!", "럭키!", "대단해!"]
};

function initStudyGame() {
  initQuiz();
}

function studySetMission() {
  const id = Math.floor(Math.random() * 9) + 1;
  STUDY.currentMission = { id, text: `${STUDY_ICONS[id]} 포함해서 10 만들기!` };
  const el = document.getElementById('mission-box');
  if (el) el.innerText = `🎁 미션: ${STUDY.currentMission.text}`;
}

function studyStartTimer() {
  const timer = setInterval(() => {
    if (!STUDY.gameActive) { clearInterval(timer); return; }
    STUDY.timeLeft--;
    if (STUDY.timeLeft <= 0) {
      clearInterval(timer);
      STUDY.gameActive = false;
      studyShowResult();
    }
  }, 1000);
}

function studyMouseDown(e) {
  if (!STUDY.gameActive) return;
  STUDY.isDragging = true;
  const rect = STUDY.canvas.getBoundingClientRect();
  STUDY.startX = e.clientX - rect.left;
  STUDY.startY = e.clientY - rect.top;
  STUDY.endX = STUDY.startX;
  STUDY.endY = STUDY.startY;
}

function studyMouseMove(e) {
  if (!STUDY.isDragging || !STUDY.gameActive) return;
  const rect = STUDY.canvas.getBoundingClientRect();
  STUDY.endX = e.clientX - rect.left;
  STUDY.endY = e.clientY - rect.top;
}

function studyMouseUp() {
  if (!STUDY.isDragging || !STUDY.gameActive) { STUDY.isDragging = false; return; }
  const x1 = Math.min(STUDY.startX, STUDY.endX), x2 = Math.max(STUDY.startX, STUDY.endX);
  const y1 = Math.min(STUDY.startY, STUDY.endY), y2 = Math.max(STUDY.startY, STUDY.endY);
  let sum = 0, sel = [], hasGold = false, metMission = false;

  for (let r = 0; r < STUDY.ROWS; r++) {
    for (let c = 0; c < STUDY.COLS; c++) {
      const cx = c * STUDY.SIZE + STUDY.SIZE / 2, cy = r * STUDY.SIZE + STUDY.SIZE / 2;
      if (cx >= x1 && cx <= x2 && cy >= y1 && cy <= y2 && STUDY.grid[r][c]) {
        sum += STUDY.grid[r][c].val;
        if (STUDY.grid[r][c].isGold) hasGold = true;
        if (STUDY.grid[r][c].val === STUDY.currentMission.id) metMission = true;
        sel.push({ r, c });
      }
    }
  }

  if (sum === 10) {
    sel.forEach(p => STUDY.grid[p.r][p.c] = null);
    let gain = 100;
    if (hasGold) { gain += 1000; addStudyChat('gold'); }
    if (metMission) { gain += 500; studySetMission(); }
    STUDY.score += gain;
    STUDY.combo++;
    addStudyChat('success');
    studyRefill();
  } else if (sel.length > 0) {
    addStudyChat('fail');
  }

  STUDY.isDragging = false;
}

function studyRefill() {
  for (let c = 0; c < STUDY.COLS; c++) {
    let empty = 0;
    for (let r = STUDY.ROWS - 1; r >= 0; r--) {
      if (STUDY.grid[r][c] === null) empty++;
      else if (empty > 0) { STUDY.grid[r + empty][c] = STUDY.grid[r][c]; STUDY.grid[r][c] = null; }
    }
    for (let r = 0; r < empty; r++) {
      STUDY.grid[r][c] = { val: Math.floor(Math.random() * 9) + 1, isGold: Math.random() < 0.05 };
    }
  }
}

function studyFindHint() {
  if (STUDY.score < 300 || !STUDY.gameActive) return;
  STUDY.score -= 300;
  addStudyChat('hint');

  for (let r1 = 0; r1 < STUDY.ROWS; r1++) {
    for (let c1 = 0; c1 < STUDY.COLS; c1++) {
      for (let r2 = r1; r2 < STUDY.ROWS; r2++) {
        for (let c2 = c1; c2 < STUDY.COLS; c2++) {
          let s = 0, cs = [];
          for (let r = r1; r <= r2; r++) {
            for (let c = c1; c <= c2; c++) {
              if (STUDY.grid[r][c]) { s += STUDY.grid[r][c].val; cs.push({ r, c }); }
            }
          }
          if (s === 10) { STUDY.hintCells = cs; STUDY.hintFlash = 30; return; }
        }
      }
    }
  }
}

function studyDraw() {
  if (!STUDY.ctx) return;
  STUDY.ctx.clearRect(0, 0, STUDY.canvas.width, STUDY.canvas.height);

  for (let r = 0; r < STUDY.ROWS; r++) {
    for (let c = 0; c < STUDY.COLS; c++) {
      if (!STUDY.grid[r][c]) continue;
      const x = c * STUDY.SIZE, y = r * STUDY.SIZE, d = STUDY.grid[r][c], color = STUDY_COLORS[d.val - 1];
      STUDY.ctx.fillStyle = d.isGold ? '#fffde7' : color + '77';
      STUDY.ctx.beginPath();
      if (STUDY.ctx.roundRect) {
        STUDY.ctx.roundRect(x + 4, y + 4, STUDY.SIZE - 8, STUDY.SIZE - 8, 15);
      } else {
        STUDY.ctx.rect(x + 4, y + 4, STUDY.SIZE - 8, STUDY.SIZE - 8);
      }
      STUDY.ctx.fill();

      const isH = STUDY.hintCells.some(h => h.r === r && h.c === c);
      STUDY.ctx.strokeStyle = isH && Math.floor(STUDY.hintFlash / 5) % 2 == 0 ? '#f44336' : (d.isGold ? '#fbc02d' : color);
      STUDY.ctx.lineWidth = d.isGold || isH ? 4 : 2;
      STUDY.ctx.stroke();

      STUDY.ctx.font = '28px Arial';
      STUDY.ctx.textAlign = 'center';
      STUDY.ctx.fillText(STUDY_ICONS[d.val], x + STUDY.SIZE / 2, y + STUDY.SIZE / 2 - 6);
      STUDY.ctx.fillStyle = d.isGold ? '#f57f17' : '#37474f';
      STUDY.ctx.font = 'bold 22px Jua';
      STUDY.ctx.fillText(d.val, x + STUDY.SIZE / 2, y + STUDY.SIZE / 2 + 18);

      if (d.isGold) { STUDY.ctx.font = '14px Arial'; STUDY.ctx.fillText('⭐', x + STUDY.SIZE - 12, y + 15); }
    }
  }

  if (STUDY.hintFlash > 0) STUDY.hintFlash--;
  else STUDY.hintCells = [];

  if (STUDY.isDragging) {
    STUDY.ctx.setLineDash([5, 5]);
    STUDY.ctx.strokeStyle = '#f06878';
    STUDY.ctx.strokeRect(STUDY.startX, STUDY.startY, STUDY.endX - STUDY.startX, STUDY.endY - STUDY.startY);
  }
}

function studyLoop() {
  if (STUDY.gameActive || STUDY.grid.length > 0) studyDraw();
  requestAnimationFrame(studyLoop);
}

function studyShowResult() {
  const points = Math.floor(STUDY.score / 100);
  S.points = (S.points || 0) + points;
  alert(`🎉 게임 종료! 총 ${STUDY.score.toLocaleString()}원 수익!\n\n포인트 +${points}점 적립됨`);
}

function addStudyChat(type) {
  const chatList = document.getElementById('chatList');
  if (!chatList) return;
  const text = STUDY_CHAT_POOL[type][Math.floor(Math.random() * STUDY_CHAT_POOL[type].length)];
  const div = document.createElement('div');
  div.style.cssText = 'margin-bottom:6px;animation:fadeIn 0.2s ease;border-bottom:1px solid #f1f1f1;padding-bottom:2px;color:#f06878;font-weight:bold;';
  div.textContent = text;
  chatList.appendChild(div);
  if (chatList.children.length > 15) chatList.removeChild(chatList.firstChild);
  chatList.scrollTop = chatList.scrollHeight;
}

function openTenTen() {
  openGame('tententen');
  const el = document.getElementById('game-tententen');
  if (!el) return;
  TT.canvas = document.getElementById('tt-canvas');
  TT.ctx = TT.canvas.getContext('2d');
  TT.gameActive = true;
  ttInitGame();
}

function closeTenTen() { closeGame('tententen'); }

function retryTenTen() {
  const resultEl = document.getElementById('tententen-result');
  if (resultEl) resultEl.style.display = 'none';
  openTenTen();
}

function ttInitGame() {
  TT.score = 0;
  TT.timeLeft = 180;
  TT.combo = 0;
  TT.grid = [];
  for (let r = 0; r < TT.ROWS; r++) {
    TT.grid[r] = [];
    for (let c = 0; c < TT.COLS; c++) {
      TT.grid[r][c] = { val: Math.floor(Math.random() * 9) + 1, isGold: Math.random() < 0.05 };
    }
  }
  ttSetMission();
  ttUpdateUI();
  ttStartTimer();
  if (TT.canvas) {
    TT.canvas.addEventListener('mousedown', ttMouseDown);
    TT.canvas.addEventListener('mousemove', ttMouseMove);
    window.addEventListener('mouseup', ttMouseUp);
  }
  ttLoop();
}

function ttSetMission() {
  const id = Math.floor(Math.random() * 9) + 1;
  TT.currentMission = { id, text: `${TT_ICONS[id]} 포함해서 10 만들기!` };
  const el = document.getElementById('tt-mission');
  if (el) el.innerText = `🎁 미션: ${TT.currentMission.text}`;
}

function ttUpdateUI() {
  const scoreEl = document.getElementById('tt-score');
  const timerEl = document.getElementById('tt-timer');
  if (scoreEl) scoreEl.innerText = TT.score.toLocaleString();
  if (timerEl) {
    const min = Math.floor(TT.timeLeft / 60);
    const sec = TT.timeLeft % 60;
    timerEl.innerText = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  }
}

function ttStartTimer() {
  const timer = setInterval(() => {
    if (!TT.gameActive) { clearInterval(timer); return; }
    TT.timeLeft--;
    ttUpdateUI();
    if (TT.timeLeft <= 0) {
      clearInterval(timer);
      TT.gameActive = false;
      ttShowResult();
    }
  }, 1000);
}

function ttMouseDown(e) {
  if (!TT.gameActive) return;
  TT.isDragging = true;
  const rect = TT.canvas.getBoundingClientRect();
  TT.startX = e.clientX - rect.left;
  TT.startY = e.clientY - rect.top;
  TT.endX = TT.startX;
  TT.endY = TT.startY;
}

function ttMouseMove(e) {
  if (!TT.isDragging || !TT.gameActive) return;
  const rect = TT.canvas.getBoundingClientRect();
  TT.endX = e.clientX - rect.left;
  TT.endY = e.clientY - rect.top;
}

function ttMouseUp() {
  if (!TT.isDragging || !TT.gameActive) { TT.isDragging = false; return; }
  const x1 = Math.min(TT.startX, TT.endX), x2 = Math.max(TT.startX, TT.endX);
  const y1 = Math.min(TT.startY, TT.endY), y2 = Math.max(TT.startY, TT.endY);
  let sum = 0, sel = [], hasGold = false, metMission = false;
  for (let r = 0; r < TT.ROWS; r++) {
    for (let c = 0; c < TT.COLS; c++) {
      const cx = c * TT.SIZE + TT.SIZE / 2, cy = r * TT.SIZE + TT.SIZE / 2;
      if (cx >= x1 && cx <= x2 && cy >= y1 && cy <= y2 && TT.grid[r][c]) {
        sum += TT.grid[r][c].val;
        if (TT.grid[r][c].isGold) hasGold = true;
        if (TT.grid[r][c].val === TT.currentMission.id) metMission = true;
        sel.push({ r, c });
      }
    }
  }
  if (sum === 10) {
    sel.forEach(p => TT.grid[p.r][p.c] = null);
    let gain = 100;
    if (hasGold) gain += 1000;
    if (metMission) { gain += 500; ttSetMission(); }
    TT.score += gain;
    TT.combo++;
    ttUpdateUI();
    ttRefill();
  }
  TT.isDragging = false;
}

function ttRefill() {
  for (let c = 0; c < TT.COLS; c++) {
    let empty = 0;
    for (let r = TT.ROWS - 1; r >= 0; r--) {
      if (TT.grid[r][c] === null) empty++;
      else if (empty > 0) { TT.grid[r + empty][c] = TT.grid[r][c]; TT.grid[r][c] = null; }
    }
    for (let r = 0; r < empty; r++) TT.grid[r][c] = { val: Math.floor(Math.random() * 9) + 1, isGold: Math.random() < 0.05 };
  }
}

function ttUseHint() {
  if (TT.score < 200 || !TT.gameActive) return;
  TT.score -= 200;
  ttUpdateUI();
  for (let r1 = 0; r1 < TT.ROWS; r1++) {
    for (let c1 = 0; c1 < TT.COLS; c1++) {
      for (let r2 = r1; r2 < TT.ROWS; r2++) {
        for (let c2 = c1; c2 < TT.COLS; c2++) {
          let s = 0, cs = [];
          for (let r = r1; r <= r2; r++) {
            for (let c = c1; c <= c2; c++) {
              if (TT.grid[r][c]) { s += TT.grid[r][c].val; cs.push({ r, c }); }
            }
          }
          if (s === 10) { TT.hintCells = cs; TT.hintFlash = 30; return; }
        }
      }
    }
  }
}

function ttDraw() {
  if (!TT.ctx) return;
  TT.ctx.clearRect(0, 0, TT.canvas.width, TT.canvas.height);
  for (let r = 0; r < TT.ROWS; r++) {
    for (let c = 0; c < TT.COLS; c++) {
      if (!TT.grid[r][c]) continue;
      const x = c * TT.SIZE, y = r * TT.SIZE, d = TT.grid[r][c], color = TT_COLORS[d.val - 1];
      TT.ctx.fillStyle = d.isGold ? '#fffde7' : color + '77';
      TT.ctx.beginPath();
      if (TT.ctx.roundRect) {
        TT.ctx.roundRect(x + 4, y + 4, TT.SIZE - 8, TT.SIZE - 8, 15);
      } else {
        TT.ctx.rect(x + 4, y + 4, TT.SIZE - 8, TT.SIZE - 8);
      }
      TT.ctx.fill();
      const isH = TT.hintCells.some(h => h.r === r && h.c === c);
      TT.ctx.strokeStyle = isH && Math.floor(TT.hintFlash / 5) % 2 == 0 ? '#f44336' : (d.isGold ? '#fbc02d' : color);
      TT.ctx.lineWidth = d.isGold || isH ? 4 : 2;
      TT.ctx.stroke();
      TT.ctx.font = '28px Arial';
      TT.ctx.textAlign = 'center';
      TT.ctx.fillText(TT_ICONS[d.val], x + TT.SIZE / 2, y + TT.SIZE / 2 - 6);
      TT.ctx.fillStyle = d.isGold ? '#f57f17' : '#37474f';
      TT.ctx.font = 'bold 22px Jua';
      TT.ctx.fillText(d.val, x + TT.SIZE / 2, y + TT.SIZE / 2 + 18);
      if (d.isGold) { TT.ctx.font = '14px Arial'; TT.ctx.fillText('⭐', x + TT.SIZE - 12, y + 15); }
    }
  }
  if (TT.hintFlash > 0) TT.hintFlash--;
  else TT.hintCells = [];
  if (TT.isDragging) {
    TT.ctx.setLineDash([5, 5]);
    TT.ctx.strokeStyle = '#f06878';
    TT.ctx.strokeRect(TT.startX, TT.startY, TT.endX - TT.startX, TT.endY - TT.startY);
  }
}

function ttLoop() {
  if (TT.gameActive || TT.grid.length > 0) ttDraw();
  requestAnimationFrame(ttLoop);
}

function ttShowResult() {
  const resultEl = document.getElementById('tententen-result');
  if (resultEl) {
    resultEl.style.display = 'flex';
    document.getElementById('tt-result-score').innerText = TT.score.toLocaleString() + '원';
  }
  S.points = (S.points || 0) + Math.floor(TT.score / 100);
}

// 초기화 (DOM 준비 시)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('board')) initQuiz();
  });
} else {
  if (document.getElementById('board')) initQuiz();
}
