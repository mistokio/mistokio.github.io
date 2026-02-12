import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'hu' | 'en' | 'jp';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<Language, Record<string, string>> = {
  hu: {
    'nav.home': 'Főoldal',
    'nav.about': 'Rólunk',
    'nav.programs': 'Oktatás',
    'nav.news': 'Hírek',
    'nav.media': 'Média',
    'nav.participation': 'Részvétel',
    'nav.contact': 'Kapcsolat',
    'hero.title': 'Magyar Iskola Tokió',
    'hero.subtitle': 'Hagyomány, Közösség, Jövő',
    'hero.cta': 'Csatlakozz hozzánk',
    'about.title': 'Iskolánkról',
    'about.mission': 'Küldetésünk',
    'about.desc': 'A Magyar Iskola Tokió célja a magyar nyelv és kultúra ápolása Japánban élő gyermekek számára.',
    'programs.title': 'Oktatás',
    'programs.desc': 'Havonta kétszer, szombatonként tartunk foglalkozásokat. A csoportokhoz létszám függvényében lehet csatlakozni.',
    
    'programs.creative.title': 'Ovis csoport (2–5/6 éves korig)',
    'programs.creative.desc': 'Éneklés, játékos foglalkozások, verstanulás, mesék és bábozás.',

    'programs.language.title': 'Iskolás csoport (6–8 évesek)',
    'programs.language.desc': 'Írás és olvasás tanulása játékos feladatokkal.',

    'programs.community.title': 'Iskolás csoport (8–12 évesek)',
    'programs.community.desc': 'A már írni-olvasni tudó gyermekek szövegértésének fejlesztése.',
    
    'news.title': 'Híreink',
    'news.desc': 'Aktuális információk és események iskolánk életéből.',
    'news.video.tag': 'Videó Interjú',
    'news.video.title': 'Beszélgetés Nagyváthy Viktóriával',
    'news.video.desc': 'Tekintsétek meg a legújabb videóinterjút iskolánk vezetőjével, ahol mesél a kezdetekről és a mindennapokról.',
    'news.fbvideo.tag': 'Facebook Videó',
    'news.fbvideo.title': 'Bemutatkozó Interjú',
    'news.fbvideo.desc': 'Nézzétek meg az iskola első videós bemutatkozását, melyet Máté Zita készített Nagyváthy Viktóriával.',
    'news.article1.date': '2025. Augusztus 05.',
    'news.article1.title': 'Interjú Nagyváthy Viktóriával',
    'news.article1.desc': 'Olvassátok el a Marie Claire interjúját iskolánk vezetőjével az alapításról és a jövőbeli tervekről.',
    'news.readMore': 'Tovább olvasom',
    'news.article2.date': '2025. Szeptember',
    'news.article2.title': 'Új tanév indul!',
    'news.article2.desc': 'Szeretettel várunk minden régi és új diákot a szeptemberben induló foglalkozásainkra. Jelentkezni emailben lehet.',
    'news.contactUs': 'Kapcsolatfelvétel',
    'media.title': 'Média',
    'media.desc': 'Iskolánk megjelenése a médiában és videós interjúk.',
    'contact.title': 'Lépj kapcsolatba velünk',
    'contact.desc': 'Szeretettel várunk!',
    'contact.location': 'Helyszín',
    'contact.address': 'Helyszín',
    'contact.institute': 'Liszt Intézet Magyar Kulturális Központ Tokió',
    'contact.email': 'Email címünk',
    'contact.form.name': 'Név',
    'contact.form.email': 'E-mail',
    'contact.form.message': 'Üzenet',
    'contact.form.send': 'Küldés',
    'participation.title': 'Részvétel',
    'participation.desc': 'Csatlakozz a Magyar Iskola Tokióhoz!',
    'participation.welcome': 'Kiket várunk?',
    'participation.welcome.desc': 'Magyar, illetve magyar származású gyermekeket várunk az alábbi korcsoportokba:',
    
    'participation.group1.title': 'Ovis csoport',
    'participation.group1.age': '2–5/6 éves korig',
    'participation.group1.desc': 'Éneklés, játékos foglalkozások, verstanulás, mesék és bábozás.',

    'participation.group2.title': 'Iskolás csoport',
    'participation.group2.age': '6–8 évesek',
    'participation.group2.desc': 'Írás és olvasás tanulása játékos feladatokkal.',

    'participation.group3.title': 'Iskolás csoport',
    'participation.group3.age': '8–12 évesek',
    'participation.group3.desc': 'A már írni-olvasni tudó gyermekek szövegértésének fejlesztése.',
    
    'participation.membership': 'Tagdíj',
    'participation.membership.desc': 'Az éves tagdíj: XY yen',
    'participation.apply': 'Jelentkezés',
    'participation.apply.desc': 'Kérjük, töltsd ki a jelentkezési űrlapot az alábbi gombra kattintva.',
    'participation.applyButton': 'Jelentkezési Űrlap',
    'footer.rights': 'Minden jog fenntartva.',
    'footer.creator': 'Készítette: Nishizawa Gabriella Szilvia',
    'form.title': 'Jelentkezési Lap',
    'form.desc': 'Kérjük, töltse ki az alábbi űrlapot a jelentkezéshez.',
    'form.childName': 'Gyermek neve',
    'form.birthDate': 'Születési dátum',
    'form.parentName': 'Szülő neve',
    'form.email': 'Email cím',
    'form.phone': 'Telefonszám',
    'form.message': 'Egyéb megjegyzés',
    'form.submit': 'Jelentkezés elküldése',

    // Honlapra.docx – minőségjavított (HU)
    'doc.title': 'Tokiói Magyar Iskola',
    'doc.history.title': 'Történeti áttekintés',
    'doc.history.p1':
      'Az iskola 2020 szeptemberében indult, elsősorban a Japánban élő, magyar származású és magyarul értő gyermekek számára. A COVID egyik hozadéka az online oktatás elterjedése volt, amely átíveli a földrajzi távolságokat.',
    'doc.history.p2':
      'Jelenleg is jelenléti és online formában zajlik a gyermekek magyar nyelvi képzése.',
    'doc.history.p3':
      'Az online foglalkozások előre egyeztetett időpontban, hétköznap délutánonként érhetők el.',
    'doc.history.p4':
      'A jelenléti foglalkozásokat havonta kétszer, hétvégenként, korosztályok szerinti bontásban – rendszerint szombat délelőtt – tartjuk.',

    'doc.groups.title': 'Csoportok',
    'doc.groups.p1': 'Az iskola három csoporttal működik:',
    'doc.groups.p2':
      'Ovis csoport (2–5/6 éves korig): éneklés, játékos foglalkozások, verstanulás, mesék és bábozás.',
    'doc.groups.p3':
      'Iskolás csoport (6–8 évesek): írás és olvasás tanulása játékos feladatokkal.',
    'doc.groups.p4':
      'Iskolás csoport (8–12 évesek): a már írni-olvasni tudó gyermekek szövegértésének fejlesztése.',
    'doc.groups.p5':
      'A csoportokhoz létszám függvényében lehet csatlakozni.',

    'doc.org.title': 'Az iskola háttérszervezete',
    'doc.org.p1': 'Az iskola nonprofit szervezetként működik.',
    'doc.org.nameHu': 'Neve magyarul: Magyar Nyelvet Oktatók Egyesülete',
    'doc.org.nameEn': 'Angolul: NPO TOKYO HUNGARY LANGUAGE EDUCATION ASSOCIATION',
    'doc.org.nameJp': 'Japánul: 一般社団法人東京ハンガリー語教育団体',
    'doc.org.email': 'E-mail cím: magyariskolatokio@gmail.com',
    'doc.org.tax': 'Adószám: 5 0114 0500 2303',
    'doc.org.registry': 'Nyilvántartási szám: 0114 0500 2303',
    'doc.org.p2': 'A támogatásokat a gyermekek oktatására fordítjuk.',

    'doc.extra.title': 'Egyéb programok',
    'doc.extra.p1':
      'Évente egy-két alkalommal tábort szervezünk az iskola növendékeinek. A táborokban Japánban élő, magyar származású művészek tartanak foglalkozásokat. Eddig két alkalommal kerámiatábor, kokeshi-baba workshop, valamint természetben zajló festőfoglalkozás is volt egy polihisztor művésszel.',
    'doc.extra.p2': 'Néptánctalálkozókon is rendszeresen részt veszünk.',
    'doc.extra.p3': 'Tavaszi és őszi pikniket szervezünk.',
    'doc.extra.p4':
      'Célunk, hogy a gyerekek minél többet legyenek magyar nyelvi környezetben, és hogy a családok megismerjék egymást. Az évek során egy igazi, összetartó közösséggé váltunk itt, 9 000 kilométerre az anyaországtól.',
  },

  en: {
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.programs': 'Programs',
    'nav.news': 'News',
    'nav.media': 'Media',
    'nav.participation': 'Participation',
    'nav.contact': 'Contact',
    'hero.title': 'Hungarian School Tokyo',
    'hero.subtitle': 'Tradition, Community, Future',
    'hero.cta': 'Join Us',
    'about.title': 'About Our School',
    'about.mission': 'Our Mission',
    'about.desc': 'The Hungarian School Tokyo aims to nurture Hungarian language and culture for children living in Japan.',
    'programs.title': 'Activities',
    'programs.desc': 'We hold classes twice a month on Saturdays.',
    'programs.creative.title': 'Creative Workshops',
    'programs.creative.desc': 'Arts and crafts with Hungarian motifs.',
    'programs.language.title': 'Language Education',
    'programs.language.desc': 'Playful Hungarian language learning for all levels.',
    'programs.community.title': 'Community Events',
    'programs.community.desc': 'Holidays, camps, and excursions for families.',
    'news.title': 'Latest News',
    'news.desc': 'Current information and events from our school life.',
    'news.video.tag': 'Video Interview',
    'news.video.title': 'Conversation with Viktória Nagyváthy',
    'news.video.desc': 'Watch the latest video interview with the head of our school, talking about the beginnings and daily life.',
    'news.fbvideo.tag': 'Facebook Video',
    'news.fbvideo.title': 'Introductory Interview',
    'news.fbvideo.desc': "Watch the school's first video introduction, an interview with Viktória Nagyváthy by Zita Máté.",
    'news.article1.date': 'August 05, 2025',
    'news.article1.title': 'Interview with Viktória Nagyváthy',
    'news.article1.desc': 'Read the Marie Claire interview with our school leader about the foundation and future plans.',
    'news.readMore': 'Read More',
    'news.article2.date': 'September 2025',
    'news.article2.title': 'New School Year Starts!',
    'news.article2.desc': 'We welcome all old and new students to our classes starting in September. You can apply via email.',
    'news.contactUs': 'Contact Us',
    'media.title': 'Media',
    'media.desc': 'Our school in the media and video interviews.',
    'contact.title': 'Contact Us',
    'contact.desc': 'We look forward to hearing from you!',
    'contact.location': 'Location',
    'contact.address': 'Location',
    'contact.institute': 'Liszt Institute Hungarian Cultural Center Tokyo',
    'contact.email': 'Our Email',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send',
    'participation.title': 'Participation',
    'participation.desc': 'Join the Hungarian School Tokyo!',
    'participation.welcome': 'Who are we looking for?',
    'participation.welcome.desc': 'We welcome Hungarian and Hungarian-heritage children in the following age groups:',
    'participation.group1.title': 'Young Group',
    'participation.group1.age': 'Up to 5 years old',
    'participation.group1.desc': 'Songs, rhymes and games for the youngest.',
    'participation.group2.title': 'Middle Group',
    'participation.group2.age': '6-9 years old',
    'participation.group2.desc': 'Reading, writing and playful Hungarian language learning.',
    'participation.group3.title': 'Older Group',
    'participation.group3.age': '10 years and up',
    'participation.group3.desc': 'Vocabulary development and spelling practice.',
    'participation.membership': 'Membership Fee',
    'participation.membership.desc': 'Annual membership fee: XY yen',
    'participation.apply': 'Application',
    'participation.apply.desc': 'Please fill out the application form by clicking the button below.',
    'participation.applyButton': 'Application Form',
    'footer.rights': 'All rights reserved.',
    'footer.creator': 'Created by Gabriella Szilvia Nishizawa',
    'form.title': 'Application Form',
    'form.desc': 'Please fill out the form below to apply.',
    'form.childName': "Child's Name",
    'form.birthDate': 'Date of Birth',
    'form.parentName': "Parent's Name",
    'form.email': 'Email Address',
    'form.phone': 'Phone Number',
    'form.message': 'Other Comments',
    'form.submit': 'Send Application',

    // Honlapra.docx – polished (EN)
    'doc.title': 'Hungarian School Tokyo',
    'doc.history.title': 'Historical Overview',
    'doc.history.p1':
      'The school started in September 2020, primarily for Hungarian-heritage children living in Japan who understand Hungarian. One positive outcome of COVID was the spread of online education, which can bridge geographical distances.',
    'doc.history.p2':
      'Today, we provide Hungarian language education both in person and online.',
    'doc.history.p3':
      'Online classes are available on weekday afternoons at an individually arranged time.',
    'doc.history.p4':
      'In-person classes are held twice a month on weekends—typically on Saturday mornings—in age-based groups.',

    'doc.groups.title': 'Groups',
    'doc.groups.p1': 'The school operates with three groups:',
    'doc.groups.p2':
      'Preschool group (ages 2 to 5–6): singing, playful activities, learning poems, stories, and puppetry.',
    'doc.groups.p3':
      'School-age group (ages 6–8): learning reading and writing through playful tasks.',
    'doc.groups.p4':
      'School-age group (ages 8–12): developing reading comprehension for children who can already read and write.',
    'doc.groups.p5':
      'Joining a group is possible depending on available capacity.',

    'doc.org.title': 'Organizational Background',
    'doc.org.p1': 'The school operates as a nonprofit organization.',
    'doc.org.nameHu': 'Hungarian name: Magyar Nyelvet Oktatók Egyesülete',
    'doc.org.nameEn': 'English name: NPO TOKYO HUNGARY LANGUAGE EDUCATION ASSOCIATION',
    'doc.org.nameJp': 'Japanese name: 一般社団法人東京ハンガリー語教育団体',
    'doc.org.email': 'Email: magyariskolatokio@gmail.com',
    'doc.org.tax': 'Tax number: 5 0114 0500 2303',
    'doc.org.registry': 'Registration number: 0114 0500 2303',
    'doc.org.p2': 'All support is used to fund children’s education.',

    'doc.extra.title': 'Additional Programs',
    'doc.extra.p1':
      'Once or twice a year, we organize camps for our students. At these camps, Hungarian-heritage artists living in Japan lead workshops. So far we have held ceramic camps twice, a kokeshi doll workshop, and outdoor painting in nature with a multi-talented artist.',
    'doc.extra.p2': 'We also regularly participate in folk dance gatherings.',
    'doc.extra.p3': 'We organize spring and autumn picnics.',
    'doc.extra.p4':
      'Our goal is for children to spend as much time as possible in a Hungarian-language environment and for families to get to know each other. Over the years, we have become a truly close-knit community here—9,000 km from Hungary.',
  },

  jp: {
    'nav.home': 'ホーム',
    'nav.about': '私たちについて',
    'nav.programs': 'プログラム',
    'nav.news': 'ニュース',
    'nav.media': 'メディア',
    'nav.participation': '参加',
    'nav.contact': 'お問い合わせ',
    'hero.title': '東京ハンガリー学校',
    'hero.subtitle': '伝統、コミュニティ、未来',
    'hero.cta': '参加する',
    'about.title': '学校紹介',
    'about.mission': '私たちの使命',
    'about.desc': '東京ハンガリー学校は、日本に住む子供たちのためにハンガリー語と文化を育むことを目的としています。',
    'programs.title': '活動内容',
    'programs.desc': '月に2回、土曜日に授業を行っています。',
    'programs.creative.title': 'クリエイティブ・ワークショップ',
    'programs.creative.desc': 'ハンガリーのモチーフを使った芸術と工芸。',
    'programs.language.title': '語学教育',
    'programs.language.desc': 'あらゆるレベルに対応した遊び心のあるハンガリー語学習。',
    'programs.community.title': 'コミュニティイベント',
    'programs.community.desc': '家族向けの祝日行事、キャンプ、遠足。',
    'news.title': 'ニュース',
    'news.desc': '学校生活からの最新情報とイベント。',
    'news.video.tag': 'ビデオインタビュー',
    'news.video.title': 'ナジヴァーティ・ヴィクトリアとの対談',
    'news.video.desc': '学校代表への最新ビデオインタビューをご覧ください。設立の経緯や日々の活動について語っています。',
    'news.fbvideo.tag': 'Facebookビデオ',
    'news.fbvideo.title': '紹介インタビュー',
    'news.fbvideo.desc': 'マーテー・ジタによるナジヴァーティ・ヴィクトリアへのインタビュー、学校初の紹介ビデオをご覧ください。',
    'news.article1.date': '2025年8月5日',
    'news.article1.title': 'ナジヴァーティ・ヴィクトリア インタビュー',
    'news.article1.desc': '設立と今後の計画について、学校代表へのMarie Claire誌のインタビューをお読みください。',
    'news.readMore': '続きを読む',
    'news.article2.date': '2025年9月',
    'news.article2.title': '新学期が始まります！',
    'news.article2.desc': '9月から始まるクラスに、新旧すべての生徒を歓迎します。メールでお申し込みいただけます。',
    'news.contactUs': 'お問い合わせ',
    'media.title': 'メディア',
    'media.desc': 'メディアに掲載された学校と動画インタビュー。',
    'contact.title': 'お問い合わせ',
    'contact.desc': 'ご連絡をお待ちしております！',
    'contact.location': '場所',
    'contact.address': '場所',
    'contact.institute': 'リスト・ハンガリー文化センター東京',
    'contact.email': 'メールアドレス',
    'contact.form.name': '名前',
    'contact.form.email': 'メール',
    'contact.form.message': 'メッセージ',
    'contact.form.send': '送信',
    'participation.title': '参加',
    'participation.desc': '東京ハンガリー学校に参加しましょう！',
    'participation.welcome': 'どんなお子様をお待ちしていますか？',
    'participation.welcome.desc': 'ハンガリー系またはハンガリーにルーツのあるお子様を、以下の年齢グループでお待ちしています：',
    'participation.group1.title': '小さいグループ',
    'participation.group1.age': '5歳まで',
    'participation.group1.desc': '最年少のための歌、童謡、ゲーム。',
    'participation.group2.title': '中グループ',
    'participation.group2.age': '6～9歳',
    'participation.group2.desc': '読み書きと楽しいハンガリー語学習。',
    'participation.group3.title': '大きいグループ',
    'participation.group3.age': '10歳以上',
    'participation.group3.desc': '語彙開発とスペリング練習。',
    'participation.membership': '会費',
    'participation.membership.desc': '年間会費：XY円',
    'participation.apply': '申し込み',
    'participation.apply.desc': '下のボタンをクリックして申し込みフォームにご記入ください。',
    'participation.applyButton': '申し込みフォーム',
    'footer.rights': 'All rights reserved.',
    'footer.creator': '作成者: 西澤 ガブリエッラ シルビア',
    'form.title': '申込書',
    'form.desc': '申し込みには以下のフォームに記入してください。',
    'form.childName': 'お子様の名前',
    'form.birthDate': '生年月日',
    'form.parentName': '保護者の名前',
    'form.email': 'メールアドレス',
    'form.phone': '電話番号',
    'form.message': 'その他コメント',
    'form.submit': '申し込みを送信',

    // Honlapra.docx – polished (JP)
    'doc.title': '東京ハンガリー学校',
    'doc.history.title': '沿革',
    'doc.history.p1':
      '当校は2020年9月に開校し、日本に住むハンガリー系でハンガリー語を理解する子どもたちを主な対象としています。COVID-19の影響でオンライン教育が広がり、地理的な距離を越えて学べる環境が整いました。',
    'doc.history.p2':
      '現在は対面授業とオンライン授業の両方で、子どもたちのハンガリー語教育を行っています。',
    'doc.history.p3':
      'オンライン授業は個別に日時を調整し、平日の午後に実施しています。',
    'doc.history.p4':
      '対面授業は月2回、週末に年齢別グループで行い、通常は土曜日の午前中に実施しています。',

    'doc.groups.title': 'グループ',
    'doc.groups.p1': '当校は3つのグループで運営しています：',
    'doc.groups.p2':
      '幼児グループ（2歳〜5〜6歳）：歌、遊びを通した活動、詩の学習、読み聞かせ、人形劇など。',
    'doc.groups.p3':
      '学齢期グループ（6〜8歳）：遊びを取り入れながら読み書きを学びます。',
    'doc.groups.p4':
      '学齢期グループ（8〜12歳）：すでに読み書きができる子どもたちの読解力を伸ばします。',
    'doc.groups.p5': '参加は定員状況により可能です。',

    'doc.org.title': '運営団体',
    'doc.org.p1': '当校は非営利団体として運営されています。',
    'doc.org.nameHu': 'ハンガリー語名：Magyar Nyelvet Oktatók Egyesülete',
    'doc.org.nameEn': '英語名：NPO TOKYO HUNGARY LANGUAGE EDUCATION ASSOCIATION',
    'doc.org.nameJp': '日本語名：一般社団法人東京ハンガリー語教育団体',
    'doc.org.email': 'メール：magyariskolatokio@gmail.com',
    'doc.org.tax': '納税者番号：5 0114 0500 2303',
    'doc.org.registry': '登録番号：0114 0500 2303',
    'doc.org.p2': 'ご支援はすべて子どもたちの教育のために活用されます。',

    'doc.extra.title': 'その他の活動',
    'doc.extra.p1':
      '年に1〜2回、生徒向けのキャンプを開催しています。キャンプでは、日本在住のハンガリー系アーティストがワークショップを行います。これまでに陶芸キャンプ（2回）、こけし人形ワークショップ、自然の中での屋外ペインティングなどを実施しました。',
    'doc.extra.p2': 'フォークダンスの交流会にも定期的に参加しています。',
    'doc.extra.p3': '春と秋にピクニックを企画しています。',
    'doc.extra.p4':
      '子どもたちができるだけ多くハンガリー語環境で過ごし、家族同士がつながることを目指しています。祖国から9,000km離れたこの地で、私たちは年々、強い絆のあるコミュニティへと成長してきました。',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('hu');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
