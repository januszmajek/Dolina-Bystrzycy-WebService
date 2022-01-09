const pointsMonument = {
  type: "FeatureCollection",
  name: "pointsMonument",
  crs: {
    type: "name",
    properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" },
  },
  features: [
    {
      type: "Feature",
      properties: {
        name: "Pałac w Sośnicy",
        icon: "monumentMarker",
        category: "Obiekt historyczny",
        place: "Sośnica",
        tags: "obiekt historyczny • zwiedzanie z zewnątrz (obiekt zamknięty)",
        mainPhoto: "style/photos/monumentPhoto1.jpg",
        description:
          "Pierwsze wzmianki o budowli pojawiały się w XVII w., jednak znajdował się wtedy w innym miejscu niż obecnie. Został zniszczony przez pożar w 1751 r. Istniejący pałac został zbudowany w XIX w. na planie prostokąta. Przeszedł on jeszcze dwie przebudowy, które nadały mu cechy neobarokowe. Dobudowano wtedy wieżę, a prosta pierwotnie bryła została urozmaicona przez dodanie dachu mansardowego z facjatami i glorietty. W skład zespołu pałacowego oprócz samego pałacu wchodzą również zabudowania folwarczne z 2 połowy XIX wieku znajdujące się za pałacem.",
        media: [
          "./style/photos/other_photos/sosnica_palace/20211021_114845.jpg",
          "./style/photos/other_photos/sosnica_palace/20211021_114913.jpg",
          "./style/photos/other_photos/sosnica_palace/20211021_114956.jpg",
          "./style/photos/other_photos/sosnica_palace/20211021_115031.jpg",
        ],
      },
      geometry: {
        type: "Point",
        coordinates: [16.782581993570759, 51.031757458373775],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Pałac w Małkowicach",
        icon: "monumentMarker",
        category: "Obiekt historyczny",
        place: "Małkowice",
        tags: "obiekt historyczny • zwiedzanie z zewnątrz (obiekt zamknięty)",
        mainPhoto: "style/photos/monumentPhoto2.jpg",
        description:
          "Obecny pałac ufundował w połowie XIX wieku kupiec Jacob Silberstein. Budynek jest zachowany w stylu neoklasycystycznym, posiada dwie kondygnacje, zbudowany z cegły, otynkowany, założony na planie prostokąta, z płaskim dachem. Fasada pałacu skierowana jest w stronę dawnego folwarku, w skład którego wchodzi oficyna mieszkalna, stajnia, wozownia, obory, stodoły i spichlerz. Park znajdujący się z przodu pałacu jest obecnie zaniedbany.",
        media: [
          "./style/photos/other_photos/malkowice_palace/20211021_112549.jpg",
        ],
      },
      geometry: {
        type: "Point",
        coordinates: [16.821502750605713, 51.075693409274116],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Kościół w Małkowicach",
        icon: "monumentMarker",
        category: "Obiekt historyczny",
        place: "Małkowice",
        tags: "kościół katolicki • zwiedzanie z zewnątrz (obiekt zamknięty)",
        mainPhoto: "style/photos/monumentPhoto3.jpg",
        description:
          "Otoczony kamiennym murem Kościół pw. św. Trójcy jest datowany na około 1400 rok. Wieża kościoła na szczycie ma charakterystyczny neobarokowy hełm powstały jednak po przebudowie obiektu w 1680 r. Hełm pasuje do wystroju wewnątrz kościoła w tym samym stylu. W środku znajdują się trzy ołtarze (jeden główny i dwa boczne), liczne rzeźby świętych, chrzcielnica, ambona, konfesjonał.",
        media: [
          "./style/photos/other_photos/malkowice_church/20211021_112323.jpg",
        ],
      },
      geometry: {
        type: "Point",
        coordinates: [16.823295638903858, 51.076235188356726],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Most w Małkowicach",
        icon: "monumentMarker",
        category: "Obiekt historyczny",
        place: "Małkowice",
        tags: "obiekt historyczny • na otwartej przestrzeni",
        mainPhoto: "style/photos/monumentPhoto4.jpg",
        description:
          "Przenośny most modułowo stalowy, którego projekt został opracowany przez angielskiego inżyniera Donalda Baileya. Mosty tego typu budowane były w segmentach, które następnie składano w potrzebnym miejscu. Elementy wykonane były ze stali, a ich konstrukcja była na tyle prosta, że części wykonane w wielu różnych zakładach mogły być używane zamiennie. Każdy pojedynczy segment był stosunkowo lekki i mały, umożliwiając w ten sposób dużo szybsze przewożenie elementów (np. zwykłymi ciężarówkami). Wyszkolony zespół żołnierzy mógł zbudować prostą przeprawę w około pół godziny. Ciekawa cechą mostu Baileya jest to, że wystarczy stać na jednym z brzegów rzeki, z którego przerzuca się części na druga stronę aby postawić konstrukcję.",
        media: [
          "./style/photos/other_photos/malkowice_bridge/20211021_111958.jpg",
        ],
      },
      geometry: {
        type: "Point",
        coordinates: [16.817936955569404, 51.077239127180938],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Ruiny Pałacu w Stoszycach",
        icon: "monumentMarker",
        category: "Obiekt historyczny",
        place: "Stoszyce",
        tags: "obiekt historyczny • zwiedzanie z zewnątrz (obiekt zamknięty)",
        mainPhoto: "style/photos/monumentPhoto5.jpg",
        description:
          "Pałac został wzniesiony w 1860 r. przez rodzinę Köpke. Budynek jest dwukondygnacyjny, zbudowany na planie litery T, przykryty jest dachem dwuspadowym. Neogotyckiego charakteru dodają takie detale jak szczyty, sterczyny, gzymsy. Pałac jest skierowany frontem w stronę Ślęży, podobnie jak większość budynków w okolicy. Przy pałacu jest też stary ogród, w tej chwili zaniedbany i zapuszczony, podobnie jak sam pałac, który jest obecnie w ruinie i grozi zawaleniem. Na wprost pałacu znajdują się zabudowania folwarczne z XIX w.",
        media: [
          "./style/photos/other_photos/stoszyce_ruins/20211021_111059.jpg",
          "./style/photos/other_photos/stoszyce_ruins/20211021_111105.jpg",
        ],
      },
      geometry: {
        type: "Point",
        coordinates: [16.77874264894508, 51.076210140820372],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Kościół w Sośnicy",
        icon: "monumentMarker",
        category: "Obiekt historyczny",
        place: "Sośnica",
        tags: "kościół katolicki • zwiedzanie z zewnątrz (obiekt zamknięty)",
        mainPhoto: "style/icons/bx-camera-off.svg",
        description:
          "Kościół pw. Podwyższenia Krzyża Świętego wzmiankowany był już w 1244 r. Na początku XIV w. stanowił kościół odpustowy pw. Najświętszej Marii Panny, co było przyczyną licznych pielgrzymek do Sośnicy. Najstarsze są prezbiterium i mury obwodowe nawy datowane na koniec XIII w. Na przestrzeni czasu kościół uległ kilku przebudowom, pierwsza na przełomie XV i XVI wieku  zaowocowała powstaniem wieży, w której znajduje się główne wejście do kościoła. W latach 1776-1779 powstała Kaplica Świętych Schodów z 28 stopniowymi schodami, w których podobno umieszczono różne relikwie m.in. część gwoździa z Krzyża Chrystusa. Schody były wzorowane na Świętych Schodach (Scala Santa) z bazyliki św. Jana na Lateranie. Kościół zaprojektowano na planie krzyża greckiego. Ramiona krzyża stanowią nawa i prezbiterium oraz barokowe przybudówki. Wewnątrz zachował się ołtarz główny z 1714 r. oraz liczne epitafia i nagrobki z XVI i XVII w.",
        media: [],
      },
      geometry: {
        type: "Point",
        coordinates: [16.782487621518094, 51.032664961890312],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Zabytkowa brama w Krobielowicach",
        icon: "monumentMarker",
        category: "Obiekt historyczny",
        place: "Krobielowice",
        tags: "obiekt historyczny • na otwartej przestrzeni",
        mainPhoto: "style/photos/monumentPhoto7.jpg",
        description:
          "Zabytkowa brama stanowiąca częśc zespołu zamkowego w Krobielowicach.",
        media: [
          "./style/photos/other_photos/krobielowice_gate/20211021_152921.jpg",
        ],
      },
      geometry: {
        type: "Point",
        coordinates: [16.798659635828258, 51.009049171686485],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Pałac w Krobielowicach",
        icon: "monumentMarker",
        category: "Obiekt historyczny",
        place: "Krobielowice",
        tags: "obiekt historyczny • zwiedzanie z zewnątrz (obiekt zamknięty)",
        mainPhoto: "style/photos/monumentPhoto8.jpg",
        description:
          "W latach 1570-1580. Wtedy powstał jednoskrzydłowy, renesansowy dwór opata, który obecnie stanowi północno-zachodnie skrzydło pałacu. Z tego czasu zachował się także portal nad wejściem głównym. Na początku XVIII w. pałac został rozbudowany o trzy dodatkowe skrzydła, dzięki czemu powstał wewnętrzny dziedziniec z arkadowymi krużgankami. W 1878 r. rodzina feldmarszałka Blüchera przebudowała budynek aby był w stylu neorenesansowym (dobudowano dwukondygnacyjne krużganki z dwiema okrągłymi wieżyczkami na rogach). W takim kształcie pałac zachował się do dziś. Teraz zamek został zaaranżowany pod usługi hotelarskie. Zamek w Krobielowicach jest wpisany do rejestru zabytków.",
        media: [
          "./style/photos/other_photos/krobielowice_palace/20211021_152626.jpg",
          "./style/photos/other_photos/krobielowice_palace/20211021_152640.jpg",
          "./style/photos/other_photos/krobielowice_palace/20211021_152650.jpg",
          "./style/photos/other_photos/krobielowice_palace/20211021_152658.jpg",
          "./style/photos/other_photos/krobielowice_palace/20211021_152716.jpg",
        ],
      },
      geometry: {
        type: "Point",
        coordinates: [16.798359982603657, 51.007011432702718],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Ruiny pałacu w Czerńczycach",
        icon: "monumentMarker",
        category: "Obiekt historyczny",
        place: "Czerńczyce",
        tags: "obiekt historyczny • zwiedzanie z zewnątrz (obiekt zamknięty)",
        mainPhoto: "style/photos/monumentPhoto9.jpg",
        description:
          "Pałac w Czerńczycach został zbudowany w 1735 roku z polecenia małżonków Karola Zygmunta von Zedlitz oraz jego żony Ewy Eleonory.  Początkowo konstrukcja miała charakter barokowy, zbudowana na kształt podkowy, z dwoma kondygnacjami. W latach 1825 i 1845 dobudowano jedno piętro pokryte płaskim dachem. Za pałacem znajduje się stary park w stylu angielskim, zachowała się również zabudowa folwarczna. Nad wejściem do pałacu można zobaczyć herby rodów fundatorów pałacu.",
        media: [
          "./style/photos/other_photos/czernczyce_palace/20211021_151022.jpg",
          "./style/photos/other_photos/czernczyce_palace/20211021_151054.jpg",
          "./style/photos/other_photos/czernczyce_palace/20211021_151109.jpg",
        ],
      },
      geometry: {
        type: "Point",
        coordinates: [16.756011634699419, 50.972177119964407],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Ruiny pałacu Kamionna",
        icon: "monumentMarker",
        category: "Obiekt historyczny",
        place: "Kamionna",
        tags: "obiekt historyczny • zwiedzanie z zewnątrz (obiekt zamknięty)",
        mainPhoto: "style/photos/monumentPhoto10.jpg",
        description:
          "Pałac zbudował w około 1571 roku Konrad von Seydlitz.Jego przebudowa w latach 1740-1744 zaowocowała nadaniem mu bardziej barokowego stylu. Do dzisiejszych czasów zachowały się jedynie północne i zachodnie skrzydła pałacu. Po drugiej wojnie światowej budynek pełnił funkcję mieszkalną i zaczął powoli popadać w ruinę.",
        media: [
          "./style/photos/other_photos/kamionna_ruins/20211021_130257.jpg",
          "./style/photos/other_photos/kamionna_ruins/20211021_130354.jpg",
          "./style/photos/other_photos/kamionna_ruins/20211021_130432.jpg",
        ],
      },
      geometry: {
        type: "Point",
        coordinates: [16.749989757397113, 50.979048409274412],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Pałac w Milinie",
        icon: "monumentMarker",
        category: "Obiekt historyczny",
        place: "Milin",
        tags: "obiekt historyczny • zwiedzanie z zewnątrz (obiekt zamknięty)",
        mainPhoto: "style/photos/monumentPhoto11.jpg",
        description:
          "Początki historii pałacu sięgają XVII w. Był to czteroskrzydłowy budynek z dziedzińcem, otoczony fosą. Neobarokowy styl został mu nadany w wyniku przebudowy około 1750 r. Od tego czasu posiada trzy skrzydła tworzące podkowę, z wewnętrznym dziedzińcem, zamkniętym od strony zachodniej pergolą z murowanymi filarami. Zasypano wtedy także fosę. Po wojnie zaaranżowano go na podstawówkę, obecnie są tu mieszkania prywatne.",
        media: ["./style/photos/other_photos/milin_palace/20211021_132020.jpg"],
      },
      geometry: {
        type: "Point",
        coordinates: [16.693191064928104, 50.976983047404552],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Ruina pałacu w Mietkowie",
        icon: "monumentMarker",
        category: "Obiekt historyczny",
        place: "Mietków",
        tags: "obiekt historyczny • zwiedzanie z zewnątrz (obiekt zamknięty)",
        mainPhoto: "style/photos/monumentPhoto12.jpg",
        description:
          "Pierwsze informacje na temat pałacu pochodzą z XVI w. W wieku XVIII miejsce to pełniło funkcję dworu obronnego, a w XIX w. na skutek przebudowy powstał pałac neogotycki. Początkowo była to budowla z dwoma kondygnacjami, na planie prostokąta, z kwadratową wieżą. Dziś pałac jest w znacznym stopniu zrujnowany.",
        media: [
          "./style/photos/other_photos/mietkow_ruins/20211021_133251.jpg",
          "./style/photos/other_photos/mietkow_ruins/20211021_133347.jpg",
          "./style/photos/other_photos/mietkow_ruins/20211021_133555.jpg",
          "./style/photos/other_photos/mietkow_ruins/20211021_133623.jpg",
        ],
      },
      geometry: {
        type: "Point",
        coordinates: [16.648639257374612, 50.973300180382715],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Pałac w Domanicach",
        icon: "monumentMarker",
        category: "Obiekt historyczny",
        place: "Domanice",
        tags: "obiekt historyczny • zwiedzanie z zewnątrz (obiekt zamknięty)",
        mainPhoto: "style/photos/monumentPhoto13.jpg",
        description:
          "Najcenniejszym zabytkiem w Domanicach jest zamek, pochodzący prawdopodobnie z XIII w. Zbudowany na planie litery L, w stylu klasycystycznym, posiada trzy kondygnacje i wieżę, przykryty dachem mansardowym. Otoczony jest fosą, nie ma w niej jednak wody. Wraz ze starym parkiem angielskim i folwarkiem zamek jest wpisany do rejestru zabytków.",
        media: [
          "./style/photos/other_photos/domanice_palace/20211021_142008.jpg",
        ],
      },
      geometry: {
        type: "Point",
        coordinates: [16.586118340827905, 50.943183149570402],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Pałac w Samotworze",
        icon: "monumentMarker",
        category: "Obiekt historyczny",
        place: "Samotwór",
        tags: "obiekt historyczny • zwiedzanie z zewnątrz (obiekt zamknięty)",
        mainPhoto: "style/photos/monumentPhoto14.jpg",
        description:
          "Pałac został zaprojektowany przez architekta Karla Gottharda Landhansa (autora m.in. projektu Bramy Brandenburskiej w Berlinie) i powstał w XVIII w. W 1919 roku uległ przebudowie. Budynek ma trzy kondygnacje, elewacje ze stiukowymi zdobieniami, a przed wejściem można zauważyć kartusz herbowy rodu von Saruma. Obecnie po remoncie przez nowych właścicieli pałac został przekształcony na hotel.",
        media: [
          "./style/photos/other_photos/samotwor_palace/20211021_102343.jpg",
          "./style/photos/other_photos/samotwor_palace/20211021_102410.jpg",
        ],
      },
      geometry: {
        type: "Point",
        coordinates: [16.829951694698803, 51.103313952322893],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Ruiny pałacu w Gałowie",
        icon: "monumentMarker",
        category: "Obiekt historyczny",
        place: "Gałów",
        tags: "obiekt historyczny • zwiedzanie z zewnątrz (obiekt zamknięty)",
        mainPhoto: "style/photos/monumentPhoto15.jpg",
        description:
          "Zrujnowany pałac w Gałowie był wielokrotnie przebudowany, a ostateczny kształt uzyskał na początku XX w. W wyniku licznych remontów elewacje łączą gotyckie, barokowe i klasycystyczne cechy stylowe. W 1998 r. na terenie pałacu był pożar, który przyczynił się do zrujnowania pałacu. Za pałacem rozciągał się park, dziś już całkowicie zarośnięty.",
        media: [
          "./style/photos/other_photos/galow_ruins/20211021_104417.jpg",
          "./style/photos/other_photos/galow_ruins/20211021_104508.jpg",
          "./style/photos/other_photos/galow_ruins/20211021_104533.jpg",
        ],
      },
      geometry: {
        type: "Point",
        coordinates: [16.817967019604588, 51.110136306547624],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Figura św. Jana Nepomucena",
        icon: "monumentMarker",
        category: "Obiekt historyczny",
        place: "Gałów",
        tags: "obiekt historyczny • na otwartej przestrzeni",
        mainPhoto: "style/photos/monumentPhoto16.jpg",
        description:
          "Jan Nepomucen żył w latach 1350-1393. Przez Kościół Katolicki jest uznawany za męczennika i świętego. Urodził się w Czechach w miejscowości Pomuk (Nepomuk). Był klerykiem i notariuszem w praskiej kurii arcybiskupiej, posiadał również święcenia kapłańskie. Istnieje kilka legend opisujących śmierć Jana Nepomucena. Jedna z nich głosi, że arcybiskup i cała jego kapituła byli przeciwnikami ówczesnego króla Czech, Wacława IV Luksemburczyka, przez co władca kazał ich aresztować. Po pewnym czasie więźniów wypuszczono, pozostał tylko Jan, którego poddano okrutnym torturom, a 20 marca 1393 r. wrzucono do rzeki Wełtawy. Istnieje też inna wersja wydarzeń, która zakłada, że przyczyną sporu między Janem Nepomucenem, a Wacławem IV były nieudane próby zmuszenia księdza do złamania tajemnicy spowiedzi. Był on bowiem spowiednikiem królowej Zofii, którą król podejrzewał o zdradę. Jan został kanonizowany w 1729 r. Jest patronem m. in. dobrej spowiedzi, chroni przed powodzią, a według wierzeń ludowych także przed suszą (dlatego też jego figury można spotkać w pobliżu rzek, mostów, na placach i skrzyżowaniach, także na terenie Parku Krajobrazowego Doliny Bystrzycy). Często przedstawiany jest w stroju kapłańskim, z aureolą z 5 gwiazdkami (oznaczają 5 cnót męczennika oraz litery łacińskiego wyrazu tacui – milczałem).",
        media: [
          "./style/photos/other_photos/galow_monument/20211021_103620.jpg",
        ],
      },
      geometry: {
        type: "Point",
        coordinates: [16.814987065815377, 51.110700737442194],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Kościół w Gałowie",
        icon: "monumentMarker",
        category: "Obiekt historyczny",
        place: "Gałów",
        tags: "kościół katolicki• zwiedzanie z zewnątrz (obiekt zamknięty)",
        mainPhoto: "style/icons/bx-camera-off.svg",
        description:
          "Kościół powołania Niepokalanego Poczęcia Najświętszej Maryi Panny zbudowany został na początku XVI w. Kościół jest otoczony kamiennym murem, jego elewacja pokryta jest dekoracją sgraffitową. Posiada jedną nawę, wieżę od strony zachodniej oraz trójbocznie zakończone prezbiterium. Wewnątrz znajdują się płyty nagrobne rodziny von Wolf oraz rodziny von Seidlitz, a także barokowy ołtarz i konfesjonał. ",
        media: [],
      },
      geometry: {
        type: "Point",
        coordinates: [16.814583492871737, 51.110744850989192],
      },
    },
  ],
};
