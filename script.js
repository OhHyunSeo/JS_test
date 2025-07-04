// 문파 정보
const sects = {
    // 정파 (正派)
    shaolin: {
        name: "소림사",
        symbol: "🏛️",
        category: "정파",
        description: "천하제일의 무림 정파. 불교의 가르침을 바탕으로 한 강직하고 정의로운 문파입니다. 외공을 중시하며, 엄격한 계율 속에서 심신을 단련합니다.",
        characteristics: [
            "강인한 외공과 금강불괴의 몸",
            "자비와 정의를 중시하는 불교 정신",
            "엄격한 계율과 수행 생활",
            "칠십이절예, 역근경 등 강력한 무공",
            "중원 무림의 태산북두"
        ]
    },
    wudang: {
        name: "무당파",
        symbol: "☯️",
        category: "정파",
        description: "도교의 가르침을 따르는 내공의 성지. 태극의 이치로 강함과 부드러움을 조화시키는 현묘한 무공을 구사합니다.",
        characteristics: [
            "심오한 내공과 태극검법",
            "유능제강의 도가 철학",
            "자연과의 조화를 추구",
            "태극권, 무당검법 등 유연한 무공",
            "은둔과 수련을 중시"
        ]
    },
    huashan: {
        name: "화산파",
        symbol: "⚔️",
        category: "정파",
        description: "검의 명가로 알려진 정파. 매화의 기품처럼 고결하고 날카로운 검술로 무림에 이름을 떨칩니다.",
        characteristics: [
            "화려하고 정교한 검술",
            "매화의 기품을 닮은 고결함",
            "정의와 협의를 중시",
            "자하신공, 화산검법의 정수",
            "문무를 겸비한 선비 정신"
        ]
    },
    gaibang: {
        name: "개방",
        symbol: "🥋",
        category: "정파",
        description: "천하의 거지들이 모인 의협 집단. 신분의 귀천을 따지지 않고 정의를 실현하는 자유로운 영혼들의 모임입니다.",
        characteristics: [
            "강호의 정보통, 어디서나 환영받는 협객",
            "타룡십팔장, 항룡십팔장의 호쾌한 장법",
            "의리와 형제애를 중시",
            "자유분방한 생활 방식",
            "약자를 돕는 협객 정신"
        ]
    },
    emei: {
        name: "아미파",
        symbol: "🌸",
        category: "정파",
        description: "여성이 주축이 된 불교 문파. 자비와 지혜를 겸비한 여협들이 모여 정의를 수호합니다.",
        characteristics: [
            "여성 중심의 문파 체계",
            "자비와 인내의 불교 정신",
            "부드러우면서도 강한 무공",
            "구양신공, 아미검법의 정교함",
            "지혜와 자비를 중시"
        ]
    },
    kunlun: {
        name: "곤륜파",
        symbol: "🏔️",
        category: "정파",
        description: "서역 곤륜산의 신비로운 문파. 중원과는 다른 독특한 무공으로 고고한 자태를 뽐냅니다.",
        characteristics: [
            "서역의 신비로운 무공",
            "고고하고 초연한 성품",
            "중원과 다른 독특한 문화",
            "양관삼첩, 곤륜검법의 위력",
            "은둔 생활을 선호"
        ]
    },
    namgung: {
        name: "남궁세가",
        symbol: "🏯",
        category: "정파",
        description: "검황의 가문으로 명성이 자자한 무림세가. 패왕의 기상과 함께 고귀한 품격을 지닌 명문가입니다.",
        characteristics: [
            "패왕검법의 위용",
            "세가의 품격과 명예 중시",
            "문무를 겸비한 귀족 정신",
            "후손 교육에 심혈을 기울임",
            "강호의 질서 유지에 앞장"
        ]
    },
    
    // 사파 (邪派)
    tangmen: {
        name: "사천당가",
        symbol: "🗡️",
        category: "사파",
        description: "사천의 독과 암기의 명가. 은밀하고 치명적인 무공으로 적을 제압하는 신비로운 가문입니다.",
        characteristics: [
            "독약과 암기술의 대가",
            "은밀하고 효율적인 전투 방식",
            "가문의 비전을 중시",
            "만천화우, 천라지망 등 암기술",
            "폐쇄적이지만 가족애가 강함"
        ]
    },
    nokrim: {
        name: "녹림",
        symbol: "🌲",
        category: "사파",
        description: "산적들의 연합체. 의적을 자처하며 나름의 의리를 지키는 무법자들의 세계입니다.",
        characteristics: [
            "자유분방한 산적 생활",
            "나름의 의리와 규율",
            "약탈과 분배의 철학",
            "호쾌한 도법과 산악 무공",
            "권력에 대한 저항 정신"
        ]
    },
    heukdo: {
        name: "흑도",
        symbol: "🌑",
        category: "사파",
        description: "어둠 속에서 활동하는 살수 조직. 돈을 받고 일을 처리하는 프로페셔널한 암살자 집단입니다.",
        characteristics: [
            "은밀한 암살 기술",
            "철저한 비밀주의",
            "감정 없는 냉혹함",
            "효율적인 살인 기법",
            "돈이면 무엇이든 가능"
        ]
    },
    
    // 마교 (魔敎)
    mingjiao: {
        name: "명교",
        symbol: "🔥",
        category: "마교",
        description: "세상의 편견에 맞서는 자유로운 영혼들. 정사를 구분하지 않고 자신만의 정의를 추구하는 혁명가들의 성지입니다.",
        characteristics: [
            "기존 질서에 도전하는 혁명 정신",
            "개성과 자유를 최고로 여김",
            "성화령, 건곤대나이의 기이한 무공",
            "단결력과 형제애가 강함",
            "편견 없는 포용력"
        ]
    },
    cheonma: {
        name: "천마신교",
        symbol: "👹",
        category: "마교",
        description: "천마의 가르침을 따르는 최강의 마교. 극강의 무공과 함께 인간의 한계를 뛰어넘는 수련법을 추구합니다.",
        characteristics: [
            "천마신공의 압도적 위력",
            "약육강식의 생존 철학",
            "한계를 뛰어넘는 극한 수련",
            "절대 강자에 대한 숭배",
            "파괴와 재창조의 이념"
        ]
    },
    hyulgyo: {
        name: "혈교",
        symbol: "🩸",
        category: "마교",
        description: "피와 살육을 숭배하는 극단적 마교. 혈마공을 통해 적의 정기를 흡수하는 사악한 무공을 구사합니다.",
        characteristics: [
            "흡혈마공의 사악한 위력",
            "피를 통한 힘의 획득",
            "극단적 쾌락주의",
            "잔혹함을 미덕으로 여김",
            "금기를 깨는 것을 즐김"
        ]
    }
};

// 질문 데이터
const questions = [
    {
        text: "강호에 첫발을 내딛은 당신, 무엇을 가장 중요하게 생각하나요?",
        answers: [
            { text: "정의를 실현하고 약자를 보호하는 것", points: { shaolin: 3, huashan: 2, gaibang: 2, namgung: 2 } },
            { text: "자연과 조화를 이루며 도를 깨닫는 것", points: { wudang: 3, kunlun: 2, emei: 1 } },
            { text: "권력을 얻어 세상을 지배하는 것", points: { cheonma: 3, hyulgyo: 2, heukdo: 1 } },
            { text: "자유롭게 살며 속박받지 않는 것", points: { mingjiao: 3, nokrim: 2, gaibang: 2 } }
        ]
    },
    {
        text: "당신이 선호하는 무공 스타일은?",
        answers: [
            { text: "강인한 외공으로 정면 돌파", points: { shaolin: 3, gaibang: 2, namgung: 2 } },
            { text: "부드러운 내공으로 상대를 제압", points: { wudang: 3, emei: 2, kunlun: 1 } },
            { text: "은밀한 암기와 독으로 효율적으로", points: { tangmen: 3, heukdo: 3, hyulgyo: 1 } },
            { text: "압도적인 마공으로 적을 제압", points: { cheonma: 3, hyulgyo: 3, mingjiao: 1 } }
        ]
    },
    {
        text: "무림의 규율과 도덕에 대한 당신의 생각은?",
        answers: [
            { text: "규율은 반드시 지켜야 할 신성한 것", points: { shaolin: 3, huashan: 2, emei: 2 } },
            { text: "상황에 따라 유연하게 해석해야 함", points: { wudang: 2, gaibang: 2, tangmen: 1 } },
            { text: "나에게 이익이 되는 것만 따른다", points: { nokrim: 3, heukdo: 2, tangmen: 2 } },
            { text: "기존 규율은 타파해야 할 구습", points: { mingjiao: 3, cheonma: 2, hyulgyo: 1 } }
        ]
    },
    {
        text: "적과의 대결에서 당신이 선택할 방법은?",
        answers: [
            { text: "정정당당한 일대일 대결", points: { huashan: 3, shaolin: 2, namgung: 3 } },
            { text: "최소한의 피해로 제압", points: { wudang: 3, emei: 2, kunlun: 2 } },
            { text: "어떤 수단이든 승리가 중요", points: { heukdo: 3, tangmen: 2, hyulgyo: 2 } },
            { text: "적을 완전히 파멸시킨다", points: { cheonma: 3, hyulgyo: 3, nokrim: 1 } }
        ]
    },
    {
        text: "당신이 추구하는 힘의 원천은?",
        answers: [
            { text: "끊임없는 수련과 정진", points: { shaolin: 3, wudang: 2, huashan: 2 } },
            { text: "가문의 비전과 전통 무공", points: { namgung: 3, tangmen: 3, kunlun: 1 } },
            { text: "타인의 힘을 흡수하거나 빼앗음", points: { hyulgyo: 3, cheonma: 2, heukdo: 1 } },
            { text: "자유로운 깨달음과 혁신", points: { mingjiao: 3, gaibang: 2, nokrim: 1 } }
        ]
    },
    {
        text: "당신이 생각하는 이상적인 문파는?",
        answers: [
            { text: "엄격한 규율과 전통이 있는 곳", points: { shaolin: 3, huashan: 2, namgung: 2 } },
            { text: "자유롭고 개성을 존중하는 곳", points: { gaibang: 3, mingjiao: 2, nokrim: 2 } },
            { text: "실력만이 인정받는 곳", points: { cheonma: 3, heukdo: 2, tangmen: 1 } },
            { text: "깨달음과 수양을 중시하는 곳", points: { wudang: 3, emei: 2, kunlun: 3 } }
        ]
    },
    {
        text: "강호의 보물을 발견했을 때 당신의 선택은?",
        answers: [
            { text: "정당한 주인에게 돌려준다", points: { shaolin: 3, emei: 2, gaibang: 1 } },
            { text: "문파의 발전을 위해 사용", points: { huashan: 2, wudang: 2, namgung: 2 } },
            { text: "나의 힘을 키우는데 사용", points: { cheonma: 3, hyulgyo: 2, mingjiao: 1 } },
            { text: "필요한 대가를 받고 처분", points: { tangmen: 2, heukdo: 3, nokrim: 2 } }
        ]
    },
    {
        text: "적의 가족이 복수를 위해 찾아왔다면?",
        answers: [
            { text: "대화로 원한을 풀어보려 노력", points: { wudang: 3, emei: 3, gaibang: 1 } },
            { text: "정당방위로만 대응", points: { shaolin: 2, huashan: 2, kunlun: 2 } },
            { text: "선제공격으로 위협 제거", points: { heukdo: 3, tangmen: 2, hyulgyo: 1 } },
            { text: "더 강한 힘으로 모두 제압", points: { cheonma: 3, hyulgyo: 3, nokrim: 1 } }
        ]
    },
    {
        text: "당신이 선호하는 수련 방식은?",
        answers: [
            { text: "스승의 가르침을 충실히 따름", points: { shaolin: 3, huashan: 2, emei: 2 } },
            { text: "자연 속에서 스스로 깨달음", points: { wudang: 3, kunlun: 3, mingjiao: 1 } },
            { text: "실전을 통한 경험 축적", points: { gaibang: 2, nokrim: 3, heukdo: 2 } },
            { text: "금기된 방법이라도 효과적이면 사용", points: { cheonma: 3, hyulgyo: 3, tangmen: 1 } }
        ]
    },
    {
        text: "무림맹주 자리에 대한 당신의 생각은?",
        answers: [
            { text: "덕망 있는 자가 맡아야 한다", points: { shaolin: 3, wudang: 2, emei: 2 } },
            { text: "실력이 가장 강한 자의 자리", points: { huashan: 2, namgung: 3, cheonma: 2 } },
            { text: "불필요한 권위주의의 상징", points: { mingjiao: 3, gaibang: 2, nokrim: 2 } },
            { text: "내가 차지해야 할 자리", points: { cheonma: 3, hyulgyo: 2, heukdo: 1 } }
        ]
    },
    {
        text: "당신에게 배신자가 나타났다면?",
        answers: [
            { text: "이유를 듣고 용서를 고려", points: { emei: 3, wudang: 2, gaibang: 1 } },
            { text: "문파의 규율에 따라 처벌", points: { shaolin: 2, huashan: 3, namgung: 2 } },
            { text: "즉시 제거하여 본보기로 삼음", points: { heukdo: 3, hyulgyo: 3, cheonma: 2 } },
            { text: "이용 가치를 판단 후 결정", points: { tangmen: 3, nokrim: 2, mingjiao: 1 } }
        ]
    },
    {
        text: "평화로운 시기 당신의 생활은?",
        answers: [
            { text: "수련과 학문에 정진", points: { shaolin: 3, wudang: 3, kunlun: 2 } },
            { text: "강호를 유람하며 견문 넓힘", points: { gaibang: 3, mingjiao: 2, nokrim: 1 } },
            { text: "가문과 제자 양성에 집중", points: { namgung: 3, huashan: 2, tangmen: 2 } },
            { text: "더 큰 힘을 위한 준비", points: { cheonma: 3, hyulgyo: 2, heukdo: 2 } }
        ]
    },
    {
        text: "정파와 사파의 충돌이 일어난다면?",
        answers: [
            { text: "정의를 위해 정파 편에 선다", points: { shaolin: 3, huashan: 3, emei: 2 } },
            { text: "중립을 지키며 화해를 중재", points: { wudang: 3, kunlun: 2, gaibang: 1 } },
            { text: "이익에 따라 편을 선택", points: { tangmen: 3, nokrim: 3, heukdo: 2 } },
            { text: "혼란을 이용해 세력 확장", points: { cheonma: 3, hyulgyo: 2, mingjiao: 2 } }
        ]
    },
    {
        text: "죽음을 앞둔 상황에서 당신의 선택은?",
        answers: [
            { text: "끝까지 신념을 지키며 맞선다", points: { shaolin: 3, huashan: 2, gaibang: 2 } },
            { text: "후일을 도모하여 전략적 후퇴", points: { wudang: 2, tangmen: 3, kunlun: 2 } },
            { text: "적과 함께 자폭하여 동귀어진", points: { mingjiao: 3, cheonma: 2, hyulgyo: 1 } },
            { text: "어떤 수단을 써서라도 생존", points: { nokrim: 3, heukdo: 3, tangmen: 1 } }
        ]
    },
    {
        text: "당신이 꿈꾸는 최종 목표는?",
        answers: [
            { text: "무림의 평화와 정의 실현", points: { shaolin: 3, emei: 2, gaibang: 3 } },
            { text: "천인합일의 경지 도달", points: { wudang: 3, kunlun: 3, emei: 1 } },
            { text: "천하제일의 명성과 영광", points: { huashan: 3, namgung: 3, tangmen: 1 } },
            { text: "무림을 지배하는 절대 권력", points: { cheonma: 3, hyulgyo: 3, heukdo: 2 } }
        ]
    }
];

// 현재 질문 인덱스
let currentQuestion = 0;
let scores = {};

// 게임 시작
function startTest() {
    currentQuestion = 0;
    scores = {};
    
    // 모든 문파 점수 초기화
    Object.keys(sects).forEach(sect => {
        scores[sect] = 0;
    });
    
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('question-screen').classList.add('active');
    
    showQuestion();
}

// 질문 표시
function showQuestion() {
    const question = questions[currentQuestion];
    const questionNumber = document.getElementById('question-number');
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers');
    const progressFill = document.getElementById('progress-fill');
    
    // 진행률 업데이트
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressFill.style.width = progress + '%';
    
    // 질문 번호와 텍스트 업데이트
    questionNumber.textContent = `질문 ${currentQuestion + 1}/${questions.length}`;
    questionText.textContent = question.text;
    
    // 답변 버튼 생성
    answersContainer.innerHTML = '';
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer.text;
        button.onclick = () => selectAnswer(index);
        answersContainer.appendChild(button);
    });
}

// 답변 선택
function selectAnswer(answerIndex) {
    const question = questions[currentQuestion];
    const answer = question.answers[answerIndex];
    
    // 점수 추가
    Object.entries(answer.points).forEach(([sect, points]) => {
        scores[sect] += points;
    });
    
    // 다음 질문으로
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// 결과 표시
function showResult() {
    // 가장 높은 점수의 문파 찾기
    let maxScore = 0;
    let resultSect = 'shaolin';
    
    Object.entries(scores).forEach(([sect, score]) => {
        if (score > maxScore) {
            maxScore = score;
            resultSect = sect;
        }
    });
    
    const result = sects[resultSect];
    
    // 화면 전환
    document.getElementById('question-screen').classList.remove('active');
    document.getElementById('result-screen').classList.add('active');
    
    // 결과 표시
    document.getElementById('result-category').textContent = result.category;
    document.getElementById('result-title').textContent = result.name;
    document.getElementById('result-symbol').textContent = result.symbol;
    document.getElementById('result-description').textContent = result.description;
    
    // 특징 표시
    const characteristicsList = document.getElementById('result-characteristics');
    characteristicsList.innerHTML = '';
    result.characteristics.forEach(char => {
        const li = document.createElement('li');
        li.textContent = char;
        characteristicsList.appendChild(li);
    });
}

// 테스트 다시 시작
function restartTest() {
    document.getElementById('result-screen').classList.remove('active');
    document.getElementById('start-screen').classList.add('active');
} 