import React, { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div className={`container ${darkMode ? 'dark' : ''}`}>
        <button onClick={toggleDarkMode} className="toggle-btn">
          <span className="bright">
            {darkMode ? <img src="sun.svg" alt="Quyosh" /> : <img src="moon.svg" alt="Oy" />}
          </span>
        </button>
        <div className="container">
          <div className="uzbekistan">
            <div className="imgs">
              <img className="state" src="./uzb.png" alt="flag" />
              <img src="./EmblemUzbekistan.png" className="emblem" alt="" />
            </div>
            <h1> Uzbekistan</h1>
            <h2> Uzbek</h2>
            <p className="info">Uzbekistan is a secular state, with a presidential constitutional government in place. Uzbekistan comprises 12 regions (vilayats), Tashkent City, and one autonomous republic, Karakalpakstan. While non-governmental organisations have defined Uzbekistan as "an authoritarian state with limited civil rights",[14][2] significant reforms under Uzbekistan's second president, Shavkat Mirziyoyev, have been made following the death of the first president, Islam Karimov. Owing to these reforms, relations with the neighbouring countries of Kyrgyzstan, Tajikistan, and Afghanistan have drastically improved.[15][16][17][18] A United Nations report of 2020 found much progress toward achieving the UN's Sustainable Development Goals.[19]</p>
          </div>
          <div className="Kazakhstan">
            <div className="imgs">
              <img className="state" src="./Kazahstan.jpg" alt="flag" />
              <img src="./EmblemKazakhstan.png" className="emblem" alt="" />
            </div>
            <h1 className="name">Kazahstan</h1>
            <h2 className="nation">Kazah</h2>
            <p className="info">Kazakhstan, landlocked country of Central Asia. It is bounded on the northwest and north by Russia, on the east by China, and on the south by Kyrgyzstan, Uzbekistan, the Aral Sea, and Turkmenistan; the Caspian Sea bounds Kazakhstan to the southwest. Kazakhstan is the largest country in Central Asia and the ninth largest in the world. Between its most distant points, Kazakhstan measures about 1,820 miles (2,930 kilometres) east to west and 960 miles north to south. While Kazakhstan was not considered by authorities in the former Soviet Union to be a part of Central Asia, it does have physical and cultural geographic characteristics similar to those of the other Central Asian countries. The capital is Astana (formerly Nur-Sultan, Aqmola, and Tselinograd), in the north-central part of the country. Kazakhstan, formerly a constituent (union) republic of the U.S.S.R., declared independence on December 16, 1991. </p>
          </div>
          <div className="Tadjikistan">
            <div className="imgs">
              <img className="state" src="./Tajikistan.png" alt="flag" />
              <img src="./EmblemTajikistan.svg" className="emblem" alt="" />
            </div>
            <h1 className="name">Tadjikistan</h1>
            <h2 className="nation">Tajik</h2>
            <p className="info">Таджикиста́н (тадж. Тоҷикистон), официальное название — Респу́блика Таджикиста́н (тадж. Ҷумҳурии Тоҷикистон, перс. جمهوری ) — государство в Центральной Азии, расположенное в предгорьях Памира и не имеющее выхода к морю. Это наименьшее по площади государство Средней Азии. Граничит c Узбекистаном на западе и северо-западе, c Кыргызстаном — на севере, c Китаем — на востоке, c Афганистаном — на юге. Государственный язык — таджикский, при этом Таджикистан — единственное персоязычное государство в бывшей советской Средней Азии. Большинство населения Таджикистана исповедует ислам суннитского толка.</p>
          </div>
          <div className="Kyrgyzstan">
            <div className="imgs">
              <img className="state" src="./Qirgizistan.jpg" alt="flag" />
              <img src="./EmblemKyrgyzstan.png" className="emblem" alt="" />
            </div>
            <h1 className="name">Qirgizistan</h1>
            <h2 className="nation">Qirg'iz</h2>
            <p className="info">Qirg'iziston (qirg'izcha: Кыргызстан [qwrʁwz'stan] Kirgizstan) yoki Qirg'iz Respublikasi (qirg'izcha: Кыргыз Республикасы) - O'rta Osiyoning shimoli-sharqida joylashgan davlat. Poytaxti - Bishkek shahri. Qirg'iziston BMTning a'zosidir. Mamlakat shimolda Qozog'iston, g'arbida O'zbekiston, janubi-g'arbida Tojikiston va janubi-sharqida Xitoy Xalq Respublikasi joylashgan. Qirg'iziston aholisi bugungi kunda 6 million kishidan ortiq. Uning 72,6 % qirg'izlar, 14,34 % o'zbeklar, 10,65 % ruslar va 8,31 % 5% tojiklar boshqa turli millat vakillari tashkil qiladi. Umuman, mamlakatda 90 dan oshiq millat va elat vakillari istiqomat qiladilar[1]. Qirg'izistonning aholisi soni-6 550 000 kishi.</p>
          </div>
          <div className="Turkmenistan">
            <div className="imgs">
              <img className="state" src="Turkmenistan.png" alt="flag" />
              <img src="./EmblemTurkmenistan.png" className="emblem" alt="" />
            </div>
            <h1 className="name">Turkmenistan</h1>
            <h2 className="nation">Turkmen</h2>
            <p className="info">Туркменистан - страна в Центральной Азии, омываемая водами Каспийского моря. Значительную площадь страны занимает пустыня Каракум. Здесь расположены руины древних поселений Ниса и Мерв, через которые когда-то пролегал Великий шёлковый путь. Ашхабад, столица Туркменистана, был перестроен в советском стиле в середине XX века. Впоследствии архитектурный ландшафт города был дополнен грандиозными памятниками в честь бывшего президента страны Сапармурата Ниязова. Столица: Ашхабад. Выбросы углекислого газа на душу населения: 11,83 т на (2019 g.) Всемирный банк. Энергопотребление на душу населения: 4 723,34 кг нефтяного эквивалента на душу населения (2014 g.) Всемирный банк</p>
          </div>
          <div className="Afghanistan">
            <div className="imgs">
              <img className="state" src="Afghanistan.jpg" alt="flag" />
              <img src="./EmblemAfghanistan.png" className="emblem" alt="" />
            </div>
            <h1 className="name">Afghanistan</h1>
            <h2 className="nation">Afgan</h2>
            <p className="info">Afghanistan,[d] officially the Islamic Emirate of Afghanistan,[e] is a landlocked country located at the crossroads of Central Asia and South Asia. Referred to as the Heart of Asia,[26] it is bordered by Pakistan to the east and south,[f] Iran to the west, Turkmenistan to the northwest, Uzbekistan to the north, Tajikistan to the northeast, and China to the northeast and east. Occupying 652,864 square kilometers (252,072 sq mi) of land, the country is predominantly mountainous with plains in the north and the southwest, which are separated by the Hindu Kush mountain range. Kabul is the country's largest city and serves as its capital. According to the World Population review, as of 2021, Afghanistan's population is 40.2 million.[6] The National Statistics Information Authority of Afghanistan estimated the population to be 32.9 million as of 2020.[28]</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
