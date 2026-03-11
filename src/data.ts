export interface VerbForms {
  v1: string;
  i1: string;
  v2: string;
  i2: string;
  v3: string;
  i3: string;
}

export const verbDict: Record<string, VerbForms> = {
  "wash": { v1: "wash", i1: "/wɒʃ/", v2: "washed", i2: "/wɒʃt/", v3: "washed", i3: "/wɒʃt/" },
  "cut": { v1: "cut", i1: "/kʌt/", v2: "cut", i2: "/kʌt/", v3: "cut", i3: "/kʌt/" },
  "prepare": { v1: "prepare", i1: "/prɪˈpeə/", v2: "prepared", i2: "/prɪˈpeəd/", v3: "prepared", i3: "/prɪˈpeəd/" },
  "put": { v1: "put", i1: "/pʊt/", v2: "put", i2: "/pʊt/", v3: "put", i3: "/pʊt/" },
  "go": { v1: "go", i1: "/ɡəʊ/", v2: "went", i2: "/went/", v3: "gone", i3: "/ɡɒn/" },
  "water": { v1: "water", i1: "/ˈwɔːtə/", v2: "watered", i2: "/ˈwɔːtəd/", v3: "watered", i3: "/ˈwɔːtəd/" },
  "wear": { v1: "wear", i1: "/weə/", v2: "wore", i2: "/wɔː/", v3: "worn", i3: "/wɔːn/" },
  "get": { v1: "get", i1: "/ɡet/", v2: "got", i2: "/ɡɒt/", v3: "got/gotten", i3: "/ɡɒt/" },
  "eat": { v1: "eat", i1: "/iːt/", v2: "ate", i2: "/et/", v3: "eaten", i3: "/ˈiːtn/" },
  "drink": { v1: "drink", i1: "/drɪŋk/", v2: "drank", i2: "/dræŋk/", v3: "drunk", i3: "/drʌŋk/" },
  "rest": { v1: "rest", i1: "/rest/", v2: "rested", i2: "/ˈrestɪd/", v3: "rested", i3: "/ˈrestɪd/" },
  "stretch": { v1: "stretch", i1: "/stretʃ/", v2: "stretched", i2: "/stretʃt/", v3: "stretched", i3: "/stretʃt/" },
  "feel": { v1: "feel", i1: "/fiːl/", v2: "felt", i2: "/felt/", v3: "felt", i3: "/felt/" },
  "start": { v1: "start", i1: "/stɑːt/", v2: "started", i2: "/ˈstɑːtɪd/", v3: "started", i3: "/ˈstɑːtɪd/" },
  "use": { v1: "use", i1: "/juːz/", v2: "used", i2: "/juːzd/", v3: "used", i3: "/juːzd/" },
  "choose": { v1: "choose", i1: "/tʃuːz/", v2: "chose", i2: "/tʃəʊz/", v3: "chosen", i3: "/ˈtʃəʊzn/" },
  "compare": { v1: "compare", i1: "/kəmˈpeə/", v2: "compared", i2: "/kəmˈpeəd/", v3: "compared", i3: "/kəmˈpeəd/" },
  "visit": { v1: "visit", i1: "/ˈvɪzɪt/", v2: "visited", i2: "/ˈvɪzɪtɪd/", v3: "visited", i3: "/ˈvɪzɪtɪd/" },
  "pick": { v1: "pick", i1: "/pɪk/", v2: "picked", i2: "/pɪkt/", v3: "picked", i3: "/pɪkt/" },
  "weed": { v1: "weed", i1: "/wiːd/", v2: "weeded", i2: "/ˈwiːdɪd/", v3: "weeded", i3: "/ˈwiːdɪd/" },
  "grow": { v1: "grow", i1: "/ɡrəʊ/", v2: "grew", i2: "/ɡruː/", v3: "grown", i3: "/ɡrəʊn/" },
  "catch": { v1: "catch", i1: "/kætʃ/", v2: "caught", i2: "/kɔːt/", v3: "caught", i3: "/kɔːt/" },
  "climb": { v1: "climb", i1: "/klaɪm/", v2: "climbed", i2: "/klaɪmd/", v3: "climbed", i3: "/klaɪmd/" },
  "hide": { v1: "hide", i1: "/haɪd/", v2: "hid", i2: "/hɪd/", v3: "hidden", i3: "/ˈhɪdn/" },
  "watch": { v1: "watch", i1: "/wɒtʃ/", v2: "watched", i2: "/wɒtʃt/", v3: "watched", i3: "/wɒtʃt/" },
  "text": { v1: "text", i1: "/tekst/", v2: "texted", i2: "/ˈtekstɪd/", v3: "texted", i3: "/ˈtekstɪd/" },
  "listen": { v1: "listen", i1: "/ˈlɪsn/", v2: "listened", i2: "/ˈlɪsnd/", v3: "listened", i3: "/ˈlɪsnd/" },
  "dance": { v1: "dance", i1: "/dɑːns/", v2: "danced", i2: "/dɑːnst/", v3: "danced", i3: "/dɑːnst/" },
  "park": { v1: "park", i1: "/pɑːk/", v2: "parked", i2: "/pɑːkt/", v3: "parked", i3: "/pɑːkt/" },
  "pedal": { v1: "pedal", i1: "/ˈpedl/", v2: "pedalled", i2: "/ˈpedld/", v3: "pedalled", i3: "/ˈpedld/" },
  "coast": { v1: "coast", i1: "/kəʊst/", v2: "coasted", i2: "/ˈkəʊstɪd/", v3: "coasted", i3: "/ˈkəʊstɪd/" },
  "take": { v1: "take", i1: "/teɪk/", v2: "took", i2: "/tʊk/", v3: "taken", i3: "/ˈteɪkən/" },
  "swim": { v1: "swim", i1: "/swɪm/", v2: "swam", i2: "/swæm/", v3: "swum", i3: "/swʌm/" },
  "celebrate": { v1: "celebrate", i1: "/ˈselɪbreɪt/", v2: "celebrated", i2: "/ˈselɪbreɪtɪd/", v3: "celebrated", i3: "/ˈselɪbreɪtɪd/" },
  "stay": { v1: "stay", i1: "/steɪ/", v2: "stayed", i2: "/steɪd/", v3: "stayed", i3: "/steɪd/" },
  "laugh": { v1: "laugh", i1: "/lɑːf/", v2: "laughed", i2: "/lɑːft/", v3: "laughed", i3: "/lɑːft/" },
  "carry": { v1: "carry", i1: "/ˈkæri/", v2: "carried", i2: "/ˈkærid/", v3: "carried", i3: "/ˈkærid/" },
  "see": { v1: "see", i1: "/siː/", v2: "saw", i2: "/sɔː/", v3: "seen", i3: "/siːn/" },
  "smell": { v1: "smell", i1: "/smel/", v2: "smelled", i2: "/smeld/", v3: "smelled", i3: "/smeld/" },
  "taste": { v1: "taste", i1: "/teɪst/", v2: "tasted", i2: "/ˈteɪstɪd/", v3: "tasted", i3: "/ˈteɪstɪd/" },
  "look": { v1: "look", i1: "/lʊk/", v2: "looked", i2: "/lʊkt/", v3: "looked", i3: "/lʊkt/" },
  "wiggle": { v1: "wiggle", i1: "/ˈwɪɡl/", v2: "wiggled", i2: "/ˈwɪɡld/", v3: "wiggled", i3: "/ˈwɪɡld/" },
  "cover": { v1: "cover", i1: "/ˈkʌvə/", v2: "covered", i2: "/ˈkʌvəd/", v3: "covered", i3: "/ˈkʌvəd/" },
  "win": { v1: "win", i1: "/wɪn/", v2: "won", i2: "/wʌn/", v3: "won", i3: "/wʌn/" },
  "lose": { v1: "lose", i1: "/luːz/", v2: "lost", i2: "/lɒst/", v3: "lost", i3: "/lɒst/" },
  "help": { v1: "help", i1: "/help/", v2: "helped", i2: "/helpt/", v3: "helped", i3: "/helpt/" },
  "hold": { v1: "hold", i1: "/həʊld/", v2: "held", i2: "/held/", v3: "held", i3: "/held/" },
  "hug": { v1: "hug", i1: "/hʌɡ/", v2: "hugged", i2: "/hʌɡd/", v3: "hugged", i3: "/hʌɡd/" },
  "feed": { v1: "feed", i1: "/fiːd/", v2: "fed", i2: "/fed/", v3: "fed", i3: "/fed/" },
  "protect": { v1: "protect", i1: "/prəˈtekt/", v2: "protected", i2: "/prəˈtektɪd/", v3: "protected", i3: "/prəˈtektɪd/" },
  "teach": { v1: "teach", i1: "/tiːtʃ/", v2: "taught", i2: "/tɔːt/", v3: "taught", i3: "/tɔːt/" },
  "take care": { v1: "take care", i1: "/teɪk keə/", v2: "took care", i2: "/tʊk keə/", v3: "taken care", i3: "/ˈteɪkən keə/" }
};

export interface Verb {
  id: number;
  core: string;
  phrase: string;
  vi: string;
  emoji: string;
  audio: {
    q: string;
    yes: string;
    no: string;
    follow: string;
  };
  scripts: {
    q: string;
    yes: string;
    no: string;
    follow: string;
  };
  vi_scripts: {
    q: string;
    yes: string;
    no: string;
    follow: string;
  };
}

export interface Category {
  meta: {
    id: string;
    label: string;
    color: string;
    folder: string;
  };
  verbs: Verb[];
}

export const categories: Category[] = [
  {
    meta: { id: "daily", label: "🏠 Việc nhà", color: "#FF6B6B", folder: "daily" },
    verbs: [
      { id: 1, core: "wash", phrase: "wash the clothes", vi: "giặt quần áo", emoji: "👕", audio: { q: "1.wav", yes: "2.wav", no: "3.wav", follow: "4.wav" }, scripts: { q: "When did you last wash the clothes?", yes: "I washed the clothes this morning.", no: "I didn't wash them today — maybe tomorrow!", follow: "How often do you wash your clothes?" }, vi_scripts: { q: "Lần cuối bạn giặt quần áo là khi nào?", yes: "Tôi đã giặt đồ sáng nay.", no: "Hôm nay tôi chưa giặt - chắc là mai thôi!", follow: "Bạn có thường xuyên giặt đồ không?" } },
      { id: 2, core: "cut", phrase: "wash and cut the vegetables", vi: "rửa và cắt rau", emoji: "🥦", audio: { q: "5.wav", yes: "6.wav", no: "7.wav", follow: "8.wav" }, scripts: { q: "When did you last wash and cut the vegetables?", yes: "I washed and cut the vegetables before dinner.", no: "I haven't done that yet today.", follow: "Who usually cuts the vegetables in your family?" }, vi_scripts: { q: "Lần cuối bạn rửa và cắt rau là khi nào?", yes: "Tôi đã rửa và cắt rau trước bữa tối.", no: "Tôi chưa làm việc đó trong hôm nay.", follow: "Ai là người thường cắt rau trong nhà bạn?" } },
      { id: 3, core: "prepare", phrase: "prepare a meal", vi: "chuẩn bị bữa ăn", emoji: "🍳", audio: { q: "9.wav", yes: "10.wav", no: "11.wav", follow: "12.wav" }, scripts: { q: "When did you last prepare a meal?", yes: "I prepared breakfast this morning.", no: "I didn't prepare it — my mom did!", follow: "What did you prepare?" }, vi_scripts: { q: "Lần cuối bạn chuẩn bị bữa ăn là khi nào?", yes: "Tôi đã chuẩn bị bữa sáng sáng nay.", no: "Tôi không làm - mẹ tôi làm đấy!", follow: "Bạn đã chuẩn bị món gì vậy?" } },
      { id: 4, core: "put", phrase: "put away your things", vi: "cất đồ vào chỗ", emoji: "🗂️", audio: { q: "13.wav", yes: "14.wav", no: "15.wav", follow: "16.wav" }, scripts: { q: "When did you last put away your things?", yes: "I put away my toys before bedtime.", no: "I haven't put them away yet!", follow: "Where do you usually put them?" }, vi_scripts: { q: "Lần cuối bạn cất đồ đạc ngăn nắp là khi nào?", yes: "Tôi đã cất đồ chơi trước khi đi ngủ.", no: "Tôi vẫn chưa cất chúng!", follow: "Bạn thường cất chúng ở đâu?" } },
      { id: 5, core: "go", phrase: "go to bed early", vi: "đi ngủ sớm", emoji: "🌙", audio: { q: "17.wav", yes: "18.wav", no: "19.wav", follow: "20.wav" }, scripts: { q: "When did you last go to bed early?", yes: "I went to bed early last Sunday.", no: "I stayed up late last night!", follow: "What time did you go to bed?" }, vi_scripts: { q: "Lần cuối bạn đi ngủ sớm là khi nào?", yes: "Tôi đã ngủ sớm tối Chủ Nhật tuần trước.", no: "Tối qua tôi đã thức khuya!", follow: "Lúc đó bạn đi ngủ mấy giờ?" } },
      { id: 6, core: "water", phrase: "water the plants", vi: "tưới cây", emoji: "🌱", audio: { q: "21.wav", yes: "22.wav", no: "23.wav", follow: "24.wav" }, scripts: { q: "When did you last water the plants?", yes: "I watered them this morning.", no: "Oh no — I forgot!", follow: "How often do you water your plants?" }, vi_scripts: { q: "Lần cuối bạn tưới cây là khi nào?", yes: "Tôi đã tưới cây sáng nay rồi.", no: "Ôi không - tôi quên mất tiêu!", follow: "Bạn thường tưới cây bao lâu một lần?" } },
      { id: 7, core: "wear", phrase: "wear a uniform", vi: "mặc đồng phục", emoji: "👔", audio: { q: "25.wav", yes: "26.wav", no: "27.wav", follow: "28.wav" }, scripts: { q: "When did you last wear a uniform?", yes: "I wore my uniform yesterday at school.", no: "We don't wear uniforms on Saturdays.", follow: "Do you like wearing a uniform?" }, vi_scripts: { q: "Lần cuối bạn mặc đồng phục là khi nào?", yes: "Hôm qua đi học tôi có mặc.", no: "Thứ Bảy chúng tôi không mặc đồng phục.", follow: "Bạn có thích mặc đồng phục không?" } }
    ]
  },
  {
    meta: { id: "health", label: "💪 Sức khoẻ", color: "#26de81", folder: "health" },
    verbs: [
      { id: 1, core: "get", phrase: "get enough sleep", vi: "ngủ đủ giấc", emoji: "😴", audio: { q: "1.wav", yes: "2.wav", no: "3.wav", follow: "4.wav" }, scripts: { q: "When did you last get enough sleep?", yes: "I got enough sleep last night — nine hours!", no: "I didn't sleep well last night.", follow: "How many hours of sleep did you get?" }, vi_scripts: { q: "Lần cuối bạn ngủ đủ giấc là khi nào?", yes: "Tối qua tôi ngủ đủ 9 tiếng luôn!", no: "Tối qua tôi ngủ không ngon giấc.", follow: "Bạn đã ngủ được mấy tiếng?" } },
      { id: 2, core: "get", phrase: "get exercise", vi: "tập thể dục", emoji: "🏃", audio: { q: "5.wav", yes: "6.wav", no: "7.wav", follow: "8.wav" }, scripts: { q: "When did you last get exercise?", yes: "I exercised yesterday — I went running.", no: "I haven't exercised this week yet.", follow: "What kind of exercise did you do?" }, vi_scripts: { q: "Lần cuối bạn tập thể dục là khi nào?", yes: "Hôm qua tôi có chạy bộ.", no: "Tuần này tôi vẫn chưa tập tành gì.", follow: "Bạn đã tập bài gì vậy?" } },
      { id: 3, core: "eat", phrase: "eat a healthy snack", vi: "ăn đồ nhẹ lành mạnh", emoji: "🍎", audio: { q: "9.wav", yes: "10.wav", no: "11.wav", follow: "12.wav" }, scripts: { q: "When did you last eat a healthy snack?", yes: "I ate an apple after school.", no: "I had chips instead — oops!", follow: "What healthy snack do you like?" }, vi_scripts: { q: "Lần cuối bạn ăn quà vặt lành mạnh là khi nào?", yes: "Tôi đã ăn một quả táo sau giờ học.", no: "Tôi lại ăn khoai tây chiên mất rồi.", follow: "Bạn thích món ăn nhẹ lành mạnh nào?" } },
      { id: 4, core: "eat", phrase: "eat eight servings of fruit", vi: "ăn 8 phần trái cây", emoji: "🍇", audio: { q: "13.wav", yes: "14.wav", no: "15.wav", follow: "16.wav" }, scripts: { q: "When did you last eat eight servings of fruit?", yes: "I ate lots of fruit last weekend.", no: "That's a lot! I only ate two servings.", follow: "What is your favourite fruit?" }, vi_scripts: { q: "Lần cuối bạn ăn đủ 8 phần trái cây là khi nào?", yes: "Cuối tuần trước tôi ăn rất nhiều.", no: "Nhiều quá! Tôi mới ăn có 2 phần thôi.", follow: "Loại trái cây yêu thích của bạn là gì?" } },
      { id: 5, core: "drink", phrase: "drink a big glass of water", vi: "uống ly nước to", emoji: "💧", audio: { q: "17.wav", yes: "18.wav", no: "19.wav", follow: "20.wav" }, scripts: { q: "When did you last drink a big glass of water?", yes: "I drank a big glass right after waking up.", no: "I keep forgetting to drink enough water!", follow: "How many glasses of water do you drink per day?" }, vi_scripts: { q: "Lần cuối bạn uống một ly nước thật to là khi nào?", yes: "Tôi uống một ly ngay sau khi ngủ dậy.", no: "Tôi cứ hay quên uống đủ nước.", follow: "Mỗi ngày bạn uống bao nhiêu ly nước?" } },
      { id: 6, core: "eat", phrase: "eat junk food", vi: "ăn đồ ăn vặt", emoji: "🍟", audio: { q: "21.wav", yes: "22.wav", no: "23.wav", follow: "24.wav" }, scripts: { q: "When did you last eat junk food?", yes: "I had some chips yesterday.", no: "I've been eating healthy this week!", follow: "What junk food do you like most?" }, vi_scripts: { q: "Lần cuối bạn ăn đồ ăn vặt không tốt cho sức khỏe là khi nào?", yes: "Hôm qua tôi có ăn khoai tây chiên.", no: "Tuần này tôi ăn uống rất lành mạnh.", follow: "Bạn thích món ăn vặt nào nhất?" } },
      { id: 7, core: "get", phrase: "get rest", vi: "nghỉ ngơi", emoji: "🛋️", audio: { q: "25.wav", yes: "26.wav", no: "27.wav", follow: "28.wav" }, scripts: { q: "When did you last get rest?", yes: "I rested all afternoon on Sunday.", no: "I've been really busy this week!", follow: "What do you do when you rest?" }, vi_scripts: { q: "Lần cuối bạn được nghỉ ngơi thoải mái là khi nào?", yes: "Chiều Chủ Nhật tôi đã nghỉ ngơi cả buổi.", no: "Tuần này tôi bận túi bụi.", follow: "Khi nghỉ ngơi bạn thường làm gì?" } },
      { id: 8, core: "stretch", phrase: "stretch your muscles", vi: "giãn cơ", emoji: "🤸", audio: { q: "29.wav", yes: "30.wav", no: "31.wav", follow: "32.wav" }, scripts: { q: "When did you last stretch your muscles?", yes: "I stretched before PE class.", no: "I should stretch more often!", follow: "Which muscles did you stretch?" }, vi_scripts: { q: "Lần cuối bạn tập giãn cơ là khi nào?", yes: "Tôi giãn cơ trước giờ thể dục.", no: "Đáng lẽ tôi nên tập giãn cơ thường xuyên hơn.", follow: "Bạn đã giãn nhóm cơ nào thế?" } },
      { id: 9, core: "feel", phrase: "feel happy", vi: "cảm thấy vui", emoji: "😊", audio: { q: "33.wav", yes: "34.wav", no: "35.wav", follow: "36.wav" }, scripts: { q: "When did you last feel happy?", yes: "I felt really happy yesterday when I won a game!", no: "I felt a bit tired, not very happy.", follow: "What made you feel happy?" }, vi_scripts: { q: "Lần cuối bạn cảm thấy thật sự hạnh phúc là khi nào?", yes: "Hôm qua thắng trận game tôi vui cực kỳ!", no: "Tôi hơi mệt nên cũng không vui lắm.", follow: "Điều gì đã khiến bạn vui vậy?" } }
    ]
  },
  {
    meta: { id: "school", label: "📚 Học tập", color: "#4A90D9", folder: "school" },
    verbs: [
      { id: 1, core: "start", phrase: "start a new book", vi: "bắt đầu đọc sách mới", emoji: "📖", audio: { q: "1.wav", yes: "2.wav", no: "3.wav", follow: "4.wav" }, scripts: { q: "When did you last start a new book?", yes: "I started a new book last Monday.", no: "I'm still reading my current one.", follow: "What book did you start?" }, vi_scripts: { q: "Lần cuối bạn bắt đầu một cuốn sách mới là khi nào?", yes: "Tôi bắt đầu một cuốn sách mới vào thứ Hai tuần trước.", no: "Tôi vẫn đang đọc cuốn hiện tại.", follow: "Bạn đã bắt đầu cuốn sách nào?" } },
      { id: 2, core: "use", phrase: "use colorful paper", vi: "dùng giấy màu", emoji: "🎨", audio: { q: "5.wav", yes: "6.wav", no: "7.wav", follow: "8.wav" }, scripts: { q: "When did you last use colorful paper?", yes: "I used colorful paper in art class.", no: "I haven't done any crafts recently.", follow: "What did you make with the paper?" }, vi_scripts: { q: "Lần cuối bạn dùng giấy màu là khi nào?", yes: "Tôi dùng giấy màu trong giờ mỹ thuật.", no: "Gần đây tôi chưa làm đồ thủ công.", follow: "Bạn đã làm gì với giấy đó?" } },
      { id: 3, core: "choose", phrase: "choose a book", vi: "chọn một cuốn sách", emoji: "📚", audio: { q: "9.wav", yes: "10.wav", no: "11.wav", follow: "12.wav" }, scripts: { q: "When did you last choose a book?", yes: "I chose a new book at the library on Saturday.", no: "I've been reading the same book.", follow: "How did you choose it?" }, vi_scripts: { q: "Lần cuối bạn chọn một cuốn sách là khi nào?", yes: "Tôi chọn một cuốn sách mới ở thư viện thứ Bảy.", no: "Tôi vẫn đang đọc cuốn cũ.", follow: "Bạn đã chọn nó như thế nào?" } },
      { id: 4, core: "compare", phrase: "compare two things", vi: "so sánh hai thứ", emoji: "⚖️", audio: { q: "13.wav", yes: "14.wav", no: "15.wav", follow: "16.wav" }, scripts: { q: "When did you last compare two things?", yes: "I compared two phones in class.", no: "I can't remember the last time!", follow: "What did you compare?" }, vi_scripts: { q: "Lần cuối bạn so sánh hai thứ là khi nào?", yes: "Tôi so sánh hai chiếc điện thoại trong lớp.", no: "Tôi không nhớ lần cuối là khi nào.", follow: "Bạn đã so sánh những gì?" } },
      { id: 5, core: "prepare", phrase: "prepare for a test", vi: "chuẩn bị cho bài kiểm tra", emoji: "📝", audio: { q: "17.wav", yes: "18.wav", no: "19.wav", follow: "20.wav" }, scripts: { q: "When did you last prepare for a test?", yes: "I prepared for my English test last night.", no: "I need to start preparing!", follow: "What subject was the test?" }, vi_scripts: { q: "Lần cuối bạn chuẩn bị cho bài kiểm tra là khi nào?", yes: "Tối qua tôi chuẩn bị cho bài kiểm tra tiếng Anh.", no: "Tôi cần bắt đầu chuẩn bị.", follow: "Đó là bài kiểm tra môn gì?" } },
      { id: 6, core: "visit", phrase: "visit a museum", vi: "thăm bảo tàng", emoji: "🏛️", audio: { q: "21.wav", yes: "22.wav", no: "23.wav", follow: "24.wav" }, scripts: { q: "When did you last visit a museum?", yes: "I visited a history museum last month.", no: "I haven't visited one recently.", follow: "What was the most interesting thing there?" }, vi_scripts: { q: "Lần cuối bạn thăm bảo tàng là khi nào?", yes: "Tôi đã thăm bảo tàng lịch sử tháng trước.", no: "Gần đây tôi chưa đi bảo tàng.", follow: "Điều thú vị nhất ở đó là gì?" } }
    ]
  },
  {
    meta: { id: "nature", label: "🌿 Thiên nhiên", color: "#00B894", folder: "nature" },
    verbs: [
      { id: 1, core: "pick", phrase: "pick fruit or vegetables", vi: "hái rau hoặc quả", emoji: "🍅", audio: { q: "1.wav", yes: "2.wav", no: "3.wav", follow: "4.wav" }, scripts: { q: "When did you last pick fruit or vegetables?", yes: "I picked tomatoes from our garden last Sunday.", no: "We don't have a garden yet.", follow: "What did you pick?" }, vi_scripts: { q: "Lần cuối bạn hái rau hoặc quả là khi nào?", yes: "Tôi đã hái cà chua trong vườn nhà vào Chủ nhật tuần trước.", no: "Nhà tôi vẫn chưa có vườn.", follow: "Bạn đã hái gì?" } },
      { id: 2, core: "weed", phrase: "weed the garden", vi: "nhổ cỏ dại", emoji: "🌾", audio: { q: "5.wav", yes: "6.wav", no: "7.wav", follow: "8.wav" }, scripts: { q: "When did you last weed the garden?", yes: "I weeded for an hour last Saturday.", no: "The garden is getting a bit wild!", follow: "How long did it take?" }, vi_scripts: { q: "Lần cuối bạn nhổ cỏ dại trong vườn là khi nào?", yes: "Tôi đã nhổ cỏ trong một giờ vào thứ Bảy tuần trước.", no: "Khu vườn đang mọc cỏ khá nhiều!", follow: "Việc đó mất bao lâu?" } },
      { id: 3, core: "grow", phrase: "grow something", vi: "trồng thứ gì đó", emoji: "🌱", audio: { q: "9.wav", yes: "10.wav", no: "11.wav", follow: "12.wav" }, scripts: { q: "When did you last grow something?", yes: "I grew some herbs on the windowsill.", no: "I'd love to try growing something!", follow: "What did you grow?" }, vi_scripts: { q: "Lần cuối bạn trồng thứ gì đó là khi nào?", yes: "Tôi đã trồng vài loại rau thơm ở bệ cửa sổ.", no: "Tôi rất muốn thử trồng thứ gì đó!", follow: "Bạn đã trồng gì?" } },
      { id: 4, core: "catch", phrase: "catch a bug or animal", vi: "bắt côn trùng hoặc động vật", emoji: "🐛", audio: { q: "13.wav", yes: "14.wav", no: "15.wav", follow: "16.wav" }, scripts: { q: "When did you last catch a bug or animal?", yes: "I caught a firefly last summer!", no: "I've never caught one!", follow: "What did you catch?" }, vi_scripts: { q: "Lần cuối bạn bắt côn trùng hoặc động vật là khi nào?", yes: "Tôi đã bắt được một con đom đóm vào mùa hè năm ngoái.", no: "Tôi chưa bao giờ bắt được con nào!", follow: "Bạn đã bắt được con gì?" } },
      { id: 5, core: "climb", phrase: "climb a tree", vi: "leo cây", emoji: "🌳", audio: { q: "17.wav", yes: "18.wav", no: "19.wav", follow: "20.wav" }, scripts: { q: "When did you last climb a tree?", yes: "I climbed a big mango tree last week.", no: "I haven't climbed a tree in ages!", follow: "How high did you climb?" }, vi_scripts: { q: "Lần cuối bạn leo cây là khi nào?", yes: "Tôi đã leo một cây xoài lớn vào tuần trước.", no: "Tôi đã lâu rồi chưa leo cây.", follow: "Bạn đã leo cao đến mức nào?" } },
      { id: 6, core: "hide", phrase: "hide in the grasslands", vi: "trốn trong đồng cỏ", emoji: "🌿", audio: { q: "21.wav", yes: "22.wav", no: "23.wav", follow: "24.wav" }, scripts: { q: "When did you last hide in the grasslands?", yes: "I played hide-and-seek in tall grass last weekend.", no: "That sounds fun — I'd love to try!", follow: "Were you hiding or seeking?" }, vi_scripts: { q: "Lần cuối bạn trốn trong đồng cỏ là khi nào?", yes: "Cuối tuần trước tôi chơi trốn tìm trong bãi cỏ cao.", no: "Nghe vui quá — tôi muốn thử!", follow: "Bạn là người trốn hay người đi tìm?" } }
    ]
  },
  {
    meta: { id: "screen", label: "📱 Giải trí", color: "#A55EEA", folder: "screen" },
    verbs: [
      { id: 1, core: "watch", phrase: "watch a movie", vi: "xem phim", emoji: "🎬", audio: { q: "1.wav", yes: "2.wav", no: "3.wav", follow: "4.wav" }, scripts: { q: "When did you last watch a movie?", yes: "I watched a movie last Friday night.", no: "I haven't watched one this week.", follow: "What movie did you watch?" }, vi_scripts: { q: "Lần cuối bạn xem phim là khi nào?", yes: "Tôi đã xem một bộ phim vào tối thứ Sáu tuần trước.", no: "Tuần này tôi chưa xem phim.", follow: "Bạn đã xem phim gì?" } },
      { id: 2, core: "go", phrase: "go to the movies", vi: "đi xem phim rạp", emoji: "🎥", audio: { q: "5.wav", yes: "6.wav", no: "7.wav", follow: "8.wav" }, scripts: { q: "When did you last go to the movies?", yes: "I went to the movies last Saturday!", no: "It's been a few months since I went.", follow: "Which cinema did you go to?" }, vi_scripts: { q: "Lần cuối bạn đi xem phim ở rạp là khi nào?", yes: "Tôi đã đi xem phim vào thứ Bảy tuần trước.", no: "Đã vài tháng rồi tôi chưa đi rạp.", follow: "Bạn đã đến rạp nào?" } },
      { id: 3, core: "text", phrase: "text your friends", vi: "nhắn tin cho bạn bè", emoji: "💬", audio: { q: "9.wav", yes: "10.wav", no: "11.wav", follow: "12.wav" }, scripts: { q: "When did you last text your friends?", yes: "I texted my friends after dinner.", no: "I called instead of texting!", follow: "What did you text about?" }, vi_scripts: { q: "Lần cuối bạn nhắn tin cho bạn bè là khi nào?", yes: "Tôi đã nhắn tin cho bạn bè sau bữa tối.", no: "Tôi đã gọi điện thay vì nhắn tin.", follow: "Bạn đã nhắn tin về chuyện gì?" } },
      { id: 4, core: "listen", phrase: "listen to music", vi: "nghe nhạc", emoji: "🎵", audio: { q: "13.wav", yes: "14.wav", no: "15.wav", follow: "16.wav" }, scripts: { q: "When did you last listen to music?", yes: "I listened to music on the bus this morning.", no: "I haven't listened much lately.", follow: "What kind of music do you like?" }, vi_scripts: { q: "Lần cuối bạn nghe nhạc là khi nào?", yes: "Tôi đã nghe nhạc trên xe buýt sáng nay.", no: "Gần đây tôi không nghe nhạc nhiều.", follow: "Bạn thích loại nhạc nào?" } },
      { id: 5, core: "dance", phrase: "dance", vi: "nhảy múa", emoji: "💃", audio: { q: "17.wav", yes: "18.wav", no: "19.wav", follow: "20.wav" }, scripts: { q: "When did you last dance?", yes: "I danced at my cousin's birthday party.", no: "I'm too shy to dance!", follow: "What song were you dancing to?" }, vi_scripts: { q: "Lần cuối bạn nhảy múa là khi nào?", yes: "Tôi đã nhảy trong bữa tiệc sinh nhật của anh/chị họ.", no: "Tôi quá ngại để nhảy.", follow: "Bạn đã nhảy theo bài hát nào?" } }
    ]
  },
  {
    meta: { id: "outing", label: "🚴 Ra ngoài", color: "#FF9F43", folder: "outing" },
    verbs: [
      { id: 1, core: "get", phrase: "get on your bike", vi: "leo lên xe đạp", emoji: "🚲", audio: { q: "1.wav", yes: "2.wav", no: "3.wav", follow: "4.wav" }, scripts: { q: "When did you last get on your bike?", yes: "I got on my bike this morning.", no: "My bike needs fixing!", follow: "Where did you ride to?" }, vi_scripts: { q: "Lần cuối bạn leo lên xe đạp là khi nào?", yes: "Sáng nay tôi đã leo lên xe đạp.", no: "Xe đạp của tôi cần sửa rồi!", follow: "Bạn đã đạp xe đến đâu?" } },
      { id: 2, core: "get", phrase: "get off your bike", vi: "xuống xe đạp", emoji: "🛑", audio: { q: "5.wav", yes: "6.wav", no: "7.wav", follow: "8.wav" }, scripts: { q: "When did you last get off your bike?", yes: "I got off at the park gate.", no: "I rode all the way home without stopping.", follow: "Why did you get off?" }, vi_scripts: { q: "Lần cuối bạn xuống xe đạp là khi nào?", yes: "Tôi xuống xe ở cổng công viên.", no: "Tôi đạp xe thẳng về nhà không dừng.", follow: "Tại sao bạn xuống xe?" } },
      { id: 3, core: "park", phrase: "park your bike", vi: "dắt xe vào chỗ đỗ", emoji: "🅿️", audio: { q: "9.wav", yes: "10.wav", no: "11.wav", follow: "12.wav" }, scripts: { q: "When did you last park your bike?", yes: "I parked my bike outside the library.", no: "I left it in the garden.", follow: "Is there a safe place to park near you?" }, vi_scripts: { q: "Lần cuối bạn đỗ xe đạp là khi nào?", yes: "Tôi đã đỗ xe đạp trước thư viện.", no: "Tôi để nó trong vườn.", follow: "Gần bạn có chỗ đỗ xe an toàn không?" } },
      { id: 4, core: "pedal", phrase: "pedal uphill", vi: "đạp xe lên dốc", emoji: "⛰️", audio: { q: "13.wav", yes: "14.wav", no: "15.wav", follow: "16.wav" }, scripts: { q: "When did you last pedal uphill?", yes: "I pedalled uphill to school — so tiring!", no: "I get off and push my bike uphill.", follow: "How steep was the hill?" }, vi_scripts: { q: "Lần cuối bạn đạp xe lên dốc là khi nào?", yes: "Tôi đã đạp xe lên dốc đến trường — rất mệt!", no: "Tôi thường xuống xe và dắt xe lên dốc.", follow: "Con dốc đó dốc đến mức nào?" } },
      { id: 5, core: "coast", phrase: "coast downhill", vi: "lao xe xuống dốc", emoji: "🏔️", audio: { q: "17.wav", yes: "18.wav", no: "19.wav", follow: "20.wav" }, scripts: { q: "When did you last coast downhill?", yes: "I coasted down a big hill — so fast!", no: "The road near me is quite flat.", follow: "Was it scary or exciting?" }, vi_scripts: { q: "Lần cuối bạn lao xe xuống dốc là khi nào?", yes: "Tôi đã lao xuống một con dốc lớn — rất nhanh!", no: "Con đường gần nhà tôi khá bằng phẳng.", follow: "Bạn thấy sợ hay thấy thú vị?" } },
      { id: 6, core: "take", phrase: "take the bus", vi: "đi xe buýt", emoji: "🚌", audio: { q: "21.wav", yes: "22.wav", no: "23.wav", follow: "24.wav" }, scripts: { q: "When did you last take the bus?", yes: "I took the bus to school yesterday.", no: "My parents drive me to school.", follow: "How long was the bus ride?" }, vi_scripts: { q: "Lần cuối bạn đi xe buýt là khi nào?", yes: "Hôm qua tôi đi xe buýt đến trường.", no: "Bố mẹ chở tôi đến trường.", follow: "Chuyến xe buýt kéo dài bao lâu?" } },
      { id: 7, core: "swim", phrase: "swim", vi: "bơi lội", emoji: "🏊", audio: { q: "25.wav", yes: "26.wav", no: "27.wav", follow: "28.wav" }, scripts: { q: "When did you last swim?", yes: "I swam at the pool last Sunday.", no: "I haven't been swimming this month.", follow: "Where did you swim?" }, vi_scripts: { q: "Lần cuối bạn bơi là khi nào?", yes: "Tôi đã bơi ở hồ bơi vào Chủ nhật tuần trước.", no: "Tháng này tôi chưa đi bơi.", follow: "Bạn đã bơi ở đâu?" } },
      { id: 8, core: "go", phrase: "go to the park", vi: "đi công viên", emoji: "🌳", audio: { q: "29.wav", yes: "30.wav", no: "31.wav", follow: "32.wav" }, scripts: { q: "When did you last go to the park?", yes: "I went to the park after school yesterday.", no: "I've been staying home recently.", follow: "What did you do at the park?" }, vi_scripts: { q: "Lần cuối bạn đi công viên là khi nào?", yes: "Hôm qua tôi đã đi công viên sau giờ học.", no: "Gần đây tôi ở nhà nhiều hơn.", follow: "Bạn đã làm gì ở công viên?" } }
    ]
  },
  {
    meta: { id: "social", label: "🎉 Xã hội", color: "#FD79A8", folder: "social" },
    verbs: [
      { id: 1, core: "celebrate", phrase: "celebrate a birthday", vi: "mừng sinh nhật", emoji: "🎂", audio: { q: "1.wav", yes: "2.wav", no: "3.wav", follow: "4.wav" }, scripts: { q: "When did you last celebrate a birthday?", yes: "I celebrated my friend's birthday last weekend.", no: "The next birthday is my mom's next month!", follow: "Whose birthday was it?" }, vi_scripts: { q: "Lần cuối bạn mừng sinh nhật là khi nào?", yes: "Tôi đã mừng sinh nhật bạn tôi vào cuối tuần trước.", no: "Sinh nhật tiếp theo là của mẹ tôi vào tháng sau!", follow: "Đó là sinh nhật của ai?" } },
      { id: 2, core: "stay", phrase: "stay with your grandma", vi: "ở nhà bà", emoji: "👵", audio: { q: "5.wav", yes: "6.wav", no: "7.wav", follow: "8.wav" }, scripts: { q: "When did you last stay with your grandma?", yes: "I stayed at grandma's house last school holiday.", no: "She lives far away so I don't visit often.", follow: "What did you do together?" }, vi_scripts: { q: "Lần cuối bạn ở nhà bà là khi nào?", yes: "Tôi đã ở nhà bà vào kỳ nghỉ học trước.", no: "Bà ở xa nên tôi không ghé thăm thường xuyên.", follow: "Hai bà cháu đã làm gì cùng nhau?" } },
      { id: 3, core: "eat", phrase: "eat out", vi: "ăn ngoài nhà hàng", emoji: "🍜", audio: { q: "9.wav", yes: "10.wav", no: "11.wav", follow: "12.wav" }, scripts: { q: "When did you last eat out?", yes: "I ate out at a noodle shop last Saturday.", no: "We mostly cook at home.", follow: "What did you eat?" }, vi_scripts: { q: "Lần cuối bạn ăn ngoài là khi nào?", yes: "Tôi đã ăn ở quán mì vào thứ Bảy tuần trước.", no: "Chúng tôi thường nấu ăn ở nhà.", follow: "Bạn đã ăn món gì?" } },
      { id: 4, core: "visit", phrase: "visit someone", vi: "đến thăm ai đó", emoji: "🏠", audio: { q: "13.wav", yes: "14.wav", no: "15.wav", follow: "16.wav" }, scripts: { q: "When did you last visit someone?", yes: "I visited my aunt last Sunday.", no: "I haven't visited anyone recently.", follow: "How long did you stay?" }, vi_scripts: { q: "Lần cuối bạn đến thăm ai đó là khi nào?", yes: "Tôi đã đến thăm dì tôi vào Chủ nhật tuần trước.", no: "Gần đây tôi chưa thăm ai cả.", follow: "Bạn ở lại bao lâu?" } },
      { id: 5, core: "laugh", phrase: "laugh a lot", vi: "cười thật nhiều", emoji: "😂", audio: { q: "17.wav", yes: "18.wav", no: "19.wav", follow: "20.wav" }, scripts: { q: "When did you last laugh a lot?", yes: "I laughed so much watching a funny video yesterday!", no: "It's been a serious week!", follow: "What made you laugh?" }, vi_scripts: { q: "Lần cuối bạn cười thật nhiều là khi nào?", yes: "Hôm qua tôi cười rất nhiều khi xem một video hài!", no: "Tuần này khá nghiêm túc!", follow: "Điều gì làm bạn cười?" } },
      { id: 6, core: "carry", phrase: "carry a baby", vi: "bế em bé", emoji: "👶", audio: { q: "21.wav", yes: "22.wav", no: "23.wav", follow: "24.wav" }, scripts: { q: "When did you last carry a baby?", yes: "I carried my baby cousin last Sunday.", no: "I've never carried a baby!", follow: "How old was the baby?" }, vi_scripts: { q: "Lần cuối bạn bế em bé là khi nào?", yes: "Tôi đã bế em họ của mình vào Chủ nhật tuần trước.", no: "Tôi chưa từng bế em bé!", follow: "Em bé bao nhiêu tuổi?" } }
    ]
  },
  {
    meta: { id: "senses", label: "👁️ Giác quan", color: "#2BCBBA", folder: "senses" },
    verbs: [
      { id: 1, core: "see", phrase: "see something amazing", vi: "nhìn thấy thứ gì tuyệt vời", emoji: "😲", audio: { q: "1.wav", yes: "2.wav", no: "3.wav", follow: "4.wav" }, scripts: { q: "When did you last see something amazing?", yes: "I saw a beautiful rainbow last evening!", no: "Nothing amazing recently — I need to look more!", follow: "What did you see?" }, vi_scripts: { q: "Lần cuối bạn nhìn thấy điều gì đó tuyệt vời là khi nào?", yes: "Tôi đã thấy một cầu vồng tuyệt đẹp vào tối hôm qua!", no: "Gần đây không có gì đặc biệt — tôi cần quan sát nhiều hơn!", follow: "Bạn đã nhìn thấy gì?" } },
      { id: 2, core: "smell", phrase: "smell something nice", vi: "ngửi thấy mùi dễ chịu", emoji: "👃", audio: { q: "5.wav", yes: "6.wav", no: "7.wav", follow: "8.wav" }, scripts: { q: "When did you last smell something nice?", yes: "I smelled fresh bread from the bakery this morning.", no: "I had a cold so I couldn't smell anything!", follow: "What was the smell?" }, vi_scripts: { q: "Lần cuối bạn ngửi thấy mùi dễ chịu là khi nào?", yes: "Tôi đã ngửi thấy mùi bánh mì mới từ tiệm bánh sáng nay.", no: "Tôi bị cảm nên không ngửi thấy gì!", follow: "Đó là mùi gì?" } },
      { id: 3, core: "taste", phrase: "taste something new", vi: "nếm thử thứ mới", emoji: "👅", audio: { q: "9.wav", yes: "10.wav", no: "11.wav", follow: "12.wav" }, scripts: { q: "When did you last taste something new?", yes: "I tasted dragon fruit for the first time last week.", no: "I'm quite a picky eater!", follow: "Did you like the taste?" }, vi_scripts: { q: "Lần cuối bạn nếm thử một thứ mới là khi nào?", yes: "Tôi đã nếm thử thanh long lần đầu tiên vào tuần trước.", no: "Tôi khá kén ăn!", follow: "Bạn có thích vị đó không?" } },
      { id: 4, core: "look", phrase: "look at the stars", vi: "ngắm sao", emoji: "⭐", audio: { q: "13.wav", yes: "14.wav", no: "15.wav", follow: "16.wav" }, scripts: { q: "When did you last look at the stars?", yes: "I looked at the stars from the rooftop last night.", no: "The city lights make it hard to see stars.", follow: "Could you see many stars?" }, vi_scripts: { q: "Lần cuối bạn ngắm các vì sao là khi nào?", yes: "Tôi đã ngắm sao từ sân thượng tối hôm qua.", no: "Ánh đèn thành phố làm cho việc nhìn thấy sao trở nên khó khăn.", follow: "Bạn có thấy nhiều ngôi sao không?" } },
      { id: 5, core: "wiggle", phrase: "wiggle your nose", vi: "nhún mũi", emoji: "👃", audio: { q: "17.wav", yes: "18.wav", no: "19.wav", follow: "20.wav" }, scripts: { q: "When did you last wiggle your nose?", yes: "I wiggled my nose trying to smell something funny.", no: "Ha! I don't think I ever do that!", follow: "Why did you wiggle it?" }, vi_scripts: { q: "Lần cuối bạn nhún mũi là khi nào?", yes: "Tôi nhún mũi khi cố ngửi một mùi lạ.", no: "Ha! Tôi nghĩ mình chưa bao giờ làm vậy!", follow: "Tại sao bạn lại nhún mũi?" } },
      { id: 6, core: "cover", phrase: "cover your eyes", vi: "che mắt", emoji: "🙈", audio: { q: "21.wav", yes: "22.wav", no: "23.wav", follow: "24.wav" }, scripts: { q: "When did you last cover your eyes?", yes: "I covered my eyes during a scary part of the movie!", no: "I'm brave — I don't cover my eyes!", follow: "What were you covering your eyes from?" }, vi_scripts: { q: "Lần cuối bạn che mắt là khi nào?", yes: "Tôi đã che mắt trong một cảnh đáng sợ của bộ phim!", no: "Tôi rất can đảm — tôi không che mắt!", follow: "Bạn đã che mắt vì điều gì?" } },
      { id: 7, core: "hide", phrase: "hide something", vi: "giấu thứ gì đó", emoji: "🫙", audio: { q: "25.wav", yes: "26.wav", no: "27.wav", follow: "28.wav" }, scripts: { q: "When did you last hide something?", yes: "I hid Easter eggs for my little brother.", no: "I can't remember hiding anything!", follow: "Where did you hide it?" }, vi_scripts: { q: "Lần cuối bạn giấu thứ gì đó là khi nào?", yes: "Tôi đã giấu trứng Phục Sinh cho em trai tôi.", no: "Tôi không nhớ đã giấu thứ gì!", follow: "Bạn đã giấu nó ở đâu?" } }
    ]
  },
  {
    meta: { id: "games", label: "🎮 Trò chơi", color: "#FDCB6E", folder: "games" },
    verbs: [
      { id: 1, core: "win", phrase: "win a game", vi: "thắng một trò chơi", emoji: "🏆", audio: { q: "1.wav", yes: "2.wav", no: "3.wav", follow: "4.wav" }, scripts: { q: "When did you last win a game?", yes: "I won a board game last Sunday!", no: "I lost the last three games I played!", follow: "What game did you win?" }, vi_scripts: { q: "Lần cuối bạn thắng một trò chơi là khi nào?", yes: "Tôi đã thắng một trò chơi cờ vào Chủ nhật tuần trước!", no: "Tôi đã thua ba trò chơi gần đây!", follow: "Bạn đã thắng trò chơi nào?" } },
      { id: 2, core: "lose", phrase: "lose a game", vi: "thua một trò chơi", emoji: "😅", audio: { q: "5.wav", yes: "6.wav", no: "7.wav", follow: "8.wav" }, scripts: { q: "When did you last lose a game?", yes: "I lost at chess yesterday.", no: "I've been on a winning streak!", follow: "What game did you lose?" }, vi_scripts: { q: "Lần cuối bạn thua một trò chơi là khi nào?", yes: "Tôi đã thua cờ vua hôm qua.", no: "Tôi đang có chuỗi chiến thắng!", follow: "Bạn đã thua trò chơi nào?" } },
      { id: 3, core: "feel", phrase: "feel busy", vi: "cảm thấy bận rộn", emoji: "😤", audio: { q: "9.wav", yes: "10.wav", no: "11.wav", follow: "12.wav" }, scripts: { q: "When did you last feel busy?", yes: "I felt really busy last week with lots of homework.", no: "I've had a relaxed week!", follow: "What made you feel busy?" }, vi_scripts: { q: "Lần cuối bạn cảm thấy bận rộn là khi nào?", yes: "Tôi cảm thấy rất bận vào tuần trước vì có nhiều bài tập.", no: "Tuần này tôi khá thư giãn!", follow: "Điều gì khiến bạn bận rộn?" } },
      { id: 4, core: "swim", phrase: "swim in the ocean", vi: "bơi ở biển", emoji: "🌊", audio: { q: "13.wav", yes: "14.wav", no: "15.wav", follow: "16.wav" }, scripts: { q: "When did you last swim in the ocean?", yes: "I swam in the ocean last summer holiday!", no: "I've only swum in a pool.", follow: "Which beach was it?" }, vi_scripts: { q: "Lần cuối bạn bơi ở biển là khi nào?", yes: "Tôi đã bơi ở biển vào kỳ nghỉ hè năm ngoái!", no: "Tôi chỉ bơi ở hồ bơi thôi.", follow: "Đó là bãi biển nào?" } },
      { id: 5, core: "start", phrase: "start something new", vi: "bắt đầu thứ gì mới", emoji: "🆕", audio: { q: "17.wav", yes: "18.wav", no: "19.wav", follow: "20.wav" }, scripts: { q: "When did you last start something new?", yes: "I started a new hobby — painting!", no: "Everything has been the same routine.", follow: "What did you start?" }, vi_scripts: { q: "Lần cuối bạn bắt đầu một điều mới là khi nào?", yes: "Tôi đã bắt đầu một sở thích mới — vẽ tranh!", no: "Mọi thứ vẫn theo thói quen cũ.", follow: "Bạn đã bắt đầu điều gì?" } }
    ]
  },
  {
    meta: { id: "care", label: "🤗 Yêu thương", color: "#E84393", folder: "care" },
    verbs: [
      { id: 1, core: "help", phrase: "help someone", vi: "giúp đỡ ai đó", emoji: "🙌", audio: { q: "1.wav", yes: "2.wav", no: "3.wav", follow: "4.wav" }, scripts: { q: "When did you last help someone?", yes: "I helped my mom carry the groceries yesterday.", no: "I've been busy with my own work this week.", follow: "Who did you help and what did you do?" }, vi_scripts: { q: "Lần cuối bạn giúp ai đó là khi nào?", yes: "Tôi đã giúp mẹ mang đồ tạp hóa hôm qua.", no: "Tuần này tôi bận với công việc của mình.", follow: "Bạn đã giúp ai và bạn đã làm gì?" } },
      { id: 2, core: "hold", phrase: "hold hands with someone", vi: "nắm tay ai đó", emoji: "🤝", audio: { q: "5.wav", yes: "6.wav", no: "7.wav", follow: "8.wav" }, scripts: { q: "When did you last hold hands with someone?", yes: "I held my little sister's hand when we crossed the street.", no: "I don't often hold hands with people.", follow: "Who did you hold hands with?" }, vi_scripts: { q: "Lần cuối bạn nắm tay ai đó là khi nào?", yes: "Tôi đã nắm tay em gái khi chúng tôi băng qua đường.", no: "Tôi không thường nắm tay người khác.", follow: "Bạn đã nắm tay ai?" } },
      { id: 3, core: "pick", phrase: "pick someone up", vi: "bế hoặc đỡ ai đó lên", emoji: "🫂", audio: { q: "9.wav", yes: "10.wav", no: "11.wav", follow: "12.wav" }, scripts: { q: "When did you last pick someone up?", yes: "I picked up my baby cousin last Sunday.", no: "I'm not strong enough to pick people up yet!", follow: "Who did you pick up?" }, vi_scripts: { q: "Lần cuối bạn bế hoặc đỡ ai đó lên là khi nào?", yes: "Tôi đã bế em họ nhỏ vào Chủ nhật tuần trước.", no: "Tôi chưa đủ khỏe để bế người khác!", follow: "Bạn đã bế ai?" } },
      { id: 4, core: "hug", phrase: "hug someone", vi: "ôm ai đó", emoji: "🤗", audio: { q: "13.wav", yes: "14.wav", no: "15.wav", follow: "16.wav" }, scripts: { q: "When did you last hug someone?", yes: "I hugged my grandma when she visited yesterday.", no: "I'm not a very huggy person!", follow: "Who did you hug and why?" }, vi_scripts: { q: "Lần cuối bạn ôm ai đó là khi nào?", yes: "Tôi đã ôm bà khi bà đến thăm hôm qua.", no: "Tôi không phải là người hay ôm người khác.", follow: "Bạn đã ôm ai và vì sao?" } },
      { id: 5, core: "feed", phrase: "feed your pet", vi: "cho thú cưng ăn", emoji: "🐾", audio: { q: "17.wav", yes: "18.wav", no: "19.wav", follow: "20.wav" }, scripts: { q: "When did you last feed your pet?", yes: "I fed my dog this morning before school.", no: "I don't have a pet right now.", follow: "What does your pet like to eat?" }, vi_scripts: { q: "Lần cuối bạn cho thú cưng ăn là khi nào?", yes: "Tôi đã cho chó ăn sáng nay trước khi đi học.", no: "Hiện tại tôi không có thú cưng.", follow: "Thú cưng của bạn thích ăn gì?" } },
      { id: 6, core: "give", phrase: "give your pet a bath", vi: "tắm cho thú cưng", emoji: "🛁", audio: { q: "21.wav", yes: "22.wav", no: "23.wav", follow: "24.wav" }, scripts: { q: "When did you last give your pet a bath?", yes: "I gave my dog a bath last Saturday — so wet!", no: "My pet doesn't need baths very often.", follow: "Did your pet enjoy the bath?" }, vi_scripts: { q: "Lần cuối bạn tắm cho thú cưng là khi nào?", yes: "Tôi đã tắm cho chó vào thứ Bảy tuần trước — rất ướt!", no: "Thú cưng của tôi không cần tắm thường xuyên.", follow: "Thú cưng của bạn có thích tắm không?" } },
      { id: 7, core: "protect", phrase: "protect someone", vi: "bảo vệ ai đó", emoji: "🛡️", audio: { q: "25.wav", yes: "26.wav", no: "27.wav", follow: "28.wav" }, scripts: { q: "When did you last protect someone?", yes: "I protected my little brother from a bully at school.", no: "I haven't needed to protect anyone recently.", follow: "Who did you protect and from what?" }, vi_scripts: { q: "Lần cuối bạn bảo vệ ai đó là khi nào?", yes: "Tôi đã bảo vệ em trai khỏi một kẻ bắt nạt ở trường.", no: "Gần đây tôi không cần bảo vệ ai.", follow: "Bạn đã bảo vệ ai và khỏi điều gì?" } },
      { id: 8, core: "teach", phrase: "teach someone something", vi: "dạy ai đó thứ gì", emoji: "👩‍🏫", audio: { q: "29.wav", yes: "30.wav", no: "31.wav", follow: "32.wav" }, scripts: { q: "When did you last teach someone something?", yes: "I taught my little sister how to ride a bike last weekend.", no: "I don't feel confident enough to teach yet.", follow: "What did you teach and who did you teach it to?" }, vi_scripts: { q: "Lần cuối bạn dạy ai đó điều gì là khi nào?", yes: "Tôi đã dạy em gái cách đi xe đạp vào cuối tuần trước.", no: "Tôi chưa đủ tự tin để dạy người khác.", follow: "Bạn đã dạy điều gì và dạy cho ai?" } },
      { id: 9, core: "care", phrase: "take care of your pet", vi: "chăm sóc thú cưng", emoji: "🐶", audio: { q: "33.wav", yes: "34.wav", no: "35.wav", follow: "36.wav" }, scripts: { q: "When did you last take care of your pet?", yes: "I took care of my cat all day when she was sick.", no: "I'd love a pet but I don't have one.", follow: "What do you do to take care of your pet?" }, vi_scripts: { q: "Lần cuối bạn chăm sóc thú cưng là khi nào?", yes: "Tôi đã chăm sóc con mèo cả ngày khi nó bị ốm.", no: "Tôi rất muốn có thú cưng nhưng hiện tại chưa có.", follow: "Bạn làm gì để chăm sóc thú cưng?" } }
    ]
  }
];

export const AUDIO_BASE_URL = "https://raw.githubusercontent.com/klamts/when_did_you_last_audio/main/";
