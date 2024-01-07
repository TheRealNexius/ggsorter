dataSetVersion = "2023-03-12"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Group",
    key: "group",
    tooltip: "Check this to restrict to certain groups.",
    checked: false,
    sub: [
      {name: "As One", key: "As One"},
      {name: "PAPAYA", key: "PAPAYA"},
      {name: "S.E.S.", key: "S.E.S."},
      {name: "2NE1", key: "2NE1"},
      {name: "4Minute", key: "4Minute"},
      {name: "9Muses", key: "9Muses"},
      {name: "AOA", key: "AOA"},
      {name: "After School", key: "After School"},
      {name: "Apink", key: "Apink"},
      {name: "Brave Girls", key: "Brave Girls"},
      {name: "Brown Eyed Girls", key: "Brown Eyed Girls"},
      {name: "Crayon Pop", key: "Crayon Pop"},
      {name: "Dal★Shabet", key: "Dal★Shabet"},
      {name: "Davichi", key: "Davichi"},
      {name: "EXID", key: "EXID"},
      {name: "Fiestar", key: "Fiestar"},
      {name: "Girl's Day", key: "Girl's Day"},
      {name: "Girls' Generation", key: "Girls' Generation"},
      {name: "Hellovenus", key: "Hellovenus"},
      {name: "Kara", key: "Kara"},
      {name: "Miss A", key: "Miss A"},
      {name: "Rainbow", key: "Rainbow"},
      {name: "SPICA", key: "SPICA"},
      {name: "Secret", key: "Secret"},
      {name: "SeeYa", key: "SeeYa"},
      {name: "Sistar", key: "Sistar"},
      {name: "Stellar", key: "Stellar"},
      {name: "Sunny Hill", key: "Sunny Hill"},
      {name: "T-ara", key: "T-ara"},
      {name: "Wonder Girls", key: "Wonder Girls"},
      {name: "f(x)", key: "f(x)"},
      {name: "Alice", key: "Alice"},
      {name: "April", key: "April"},
      {name: "BESTie", key: "BESTie"},
      {name: "Blackpink", key: "Blackpink"},
      {name: "Busters", key: "Busters"},
      {name: "CLC", key: "CLC"},
      {name: "Dia", key: "Dia"},
      {name: "Dreamcatcher", key: "Dreamcatcher"},
      {name: "GFriend", key: "GFriend"},
      {name: "Gugudan", key: "Gugudan"},
      {name: "I.O.I", key: "I.O.I"},
      {name: "Laboum", key: "Laboum"},
      {name: "Ladies' code", key: "Ladies' code"},
      {name: "Lovelyz", key: "Lovelyz"},
      {name: "Mamamoo", key: "Mamamoo"},
      {name: "Momoland", key: "Momoland"},
      {name: "Oh My Girl", key: "Oh My Girl"},
      {name: "Pristin", key: "Pristin"},
      {name: "Red Velvet", key: "Red Velvet"},
      {name: "Sonamoo", key: "Sonamoo"},
      {name: "Twice", key: "Twice"},
      {name: "WJSN", key: "WJSN"},
      {name: "Weki Meki", key: "Weki Meki"},
      {name: "(G)I-dle", key: "(G)I-dle"},
      {name: "Aespa", key: "Aespa"},
      {name: "Billlie", key: "Billlie"},
      {name: "CLASS:y", key: "CLASS:y"},
      {name: "CSR", key: "CSR"},
      {name: "Cherry Bullet", key: "Cherry Bullet"},
      {name: "DreamNote", key: "DreamNote"},
      {name: "Everglow", key: "Everglow"},
      {name: "Fromis 9", key: "Fromis 9"},
      {name: "GOT the beat", key: "GOT the beat"},
      {name: "GWSN", key: "GWSN"},
      {name: "H1-KEY", key: "H1-KEY"},
      {name: "ILY:1", key: "ILY:1"},
      {name: "ITZY", key: "ITZY"},
      {name: "IVE", key: "IVE"},
      {name: "IZ*ONE", key: "IZ*ONE"},
      {name: "Kep1er", key: "Kep1er"},
      {name: "LE SSERAFIM", key: "LE SSERAFIM"},
      {name: "LIMELIGHT", key: "LIMELIGHT"},
      {name: "LOONA", key: "LOONA"},
      {name: "Lightsum", key: "Lightsum"},
      {name: "Nature", key: "Nature"},
      {name: "NewJeans", key: "NewJeans"},
      {name: "Nmixx", key: "Nmixx"},
      {name: "Pixy", key: "Pixy"},
      {name: "Purple Kiss", key: "Purple Kiss"},
      {name: "Rocket Punch", key: "Rocket Punch"},
      {name: "Secret Number", key: "Secret Number"},
      {name: "StayC", key: "StayC"},
      {name: "Tri.be", key: "Tri.be"},
      {name: "UNI.T", key: "UNI.T"},
      {name: "Weeekly", key: "Weeekly"},
      {name: "bugAboo", key: "bugAboo"},
      {name: "mimiirose", key: "mimiirose"},
      {name: "tripleS", key: "tripleS"},
      {name: "woo!ah!", key: "woo!ah!"},
      {name: "Soloists", key: "soloist"}
    ]
  },
  {
    name: "Filter by generation",
    key: "gen",
    tooltip: "Check this to restrict groups by generation.",
    checked: false,
    sub: [ { name: "Gen 1", key: "gen1" }, { name: "Gen 2", key: "gen2" }, { name: "Gen 3", key: "gen3" }, { name: "Gen 4", key: "gen4" }
    ]
  }
];

dataSet[dataSetVersion].characterData = [
    {
        name: "S.E.S. Bada",
        img: "EJAI9ha.jpeg",
        opts: {
            group: ["S.E.S."],
            gen: ["gen1"]
        }
    },
    {
        name: "Baek Jiyoung",
        img: "oxkOVz6.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen1"]
        }
    },
    {
        name: "BoA",
        img: "xesVuX8.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen1"]
        }
    },
    {
        name: "As One Crystal",
        img: "EGYUvjY.jpeg",
        opts: {
            group: ["As One"],
            gen: ["gen1"]
        }
    },
    {
        name: "S.E.S. Eugene",
        img: "qFgTDvT.jpeg",
        opts: {
            group: ["S.E.S."],
            gen: ["gen1"]
        }
    },
    {
        name: "PAPAYA Go Naeun",
        img: "69gH9za.jpeg",
        opts: {
            group: ["PAPAYA"],
            gen: ["gen1"]
        }
    },
    {
        name: "Gummy",
        img: "31YllBl.png",
        opts: {
            group: ["soloist"],
            gen: ["gen1"]
        }
    },
    {
        name: "Jaurim Kim Yuna",
        img: "cJaGs9h.jpeg",
        opts: {
            group: ["Jaurim"],
            gen: ["gen1"]
        }
    },
    {
        name: "Lee Soo Young",
        img: "5dNDrln.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen1"]
        }
    },
    {
        name: "Lee Sora",
        img: "oG8QF7S.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen1"]
        }
    },
    {
        name: "Lee Sun Hee",
        img: "0KsQZYo.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen1"]
        }
    },
    {
        name: "Lena Park",
        img: "Vsau6I0.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen1"]
        }
    },
    {
        name: "Lyn",
        img: "CG9dMHG.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen1"]
        }
    },
    {
        name: "As One Min",
        img: "hoFNepH.jpeg",
        opts: {
            group: ["As One"],
            gen: ["gen1"]
        }
    },
    {
        name: "Park Jiyoon",
        img: "MZGbDVJ.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen1"]
        }
    },
    {
        name: "S.E.S. Shoo",
        img: "gf48iHk.png",
        opts: {
            group: ["S.E.S."],
            gen: ["gen1"]
        }
    },
    {
        name: "Yangpa",
        img: "1QKactI.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen1"]
        }
    },
    {
        name: "Wonder Girls Ahn Sohee",
        img: "qMPi1sx.jpeg",
        opts: {
            group: ["Wonder Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Dal\u2605Shabet Ahyoung",
        img: "u05uzw4.jpeg",
        opts: {
            group: ["Dal\u2605Shabet"],
            gen: ["gen2"]
        }
    },
    {
        name: "Ailee",
        img: "q0TWy1J.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen2"]
        }
    },
    {
        name: "Hellovenus Alice",
        img: "L80EqJw.jpeg",
        opts: {
            group: ["Hellovenus"],
            gen: ["gen2"]
        }
    },
    {
        name: "f(x) Amber",
        img: "6B5Oi7W.jpeg",
        opts: {
            group: ["f(x)"],
            gen: ["gen2"]
        }
    },
    {
        name: "T-ara Areum",
        img: "ykZoQ4f.png",
        opts: {
            group: ["T-ara"],
            gen: ["gen2"]
        }
    },
    {
        name: "After School Bekah",
        img: "7lgqVeu.png",
        opts: {
            group: ["After School"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses Bini",
        img: "K970Pu4.png",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "Sunny Hill Bitna",
        img: "LPLDlv6.png",
        opts: {
            group: ["Sunny Hill"],
            gen: ["gen2"]
        }
    },
    {
        name: "SPICA BoA",
        img: "wcFNldT.jpeg",
        opts: {
            group: ["SPICA"],
            gen: ["gen2"]
        }
    },
    {
        name: "Apink Bomi",
        img: "FHllnqY.jpeg",
        opts: {
            group: ["Apink"],
            gen: ["gen2"]
        }
    },
    {
        name: "Sistar Bora",
        img: "XFSnOXe.png",
        opts: {
            group: ["Sistar"],
            gen: ["gen2"]
        }
    },
    {
        name: "SeeYa Boram",
        img: "UG2vBKK.jpeg",
        opts: {
            group: ["SeeYa"],
            gen: ["gen2"]
        }
    },
    {
        name: "T-ara Boram",
        img: "IGHUvD6.jpeg",
        opts: {
            group: ["T-ara"],
            gen: ["gen2"]
        }
    },
    {
        name: "2NE1 CL",
        img: "6Qzsiwy.jpeg",
        opts: {
            group: ["2NE1"],
            gen: ["gen2"]
        }
    },
    {
        name: "Fiestar Cao Lu",
        img: "CPb4yFd.png",
        opts: {
            group: ["Fiestar"],
            gen: ["gen2"]
        }
    },
    {
        name: "AOA Chanmi",
        img: "QZ1eJwc.jpeg",
        opts: {
            group: ["AOA"],
            gen: ["gen2"]
        }
    },
    {
        name: "AOA Choa",
        img: "YrjSiU3.jpeg",
        opts: {
            group: ["AOA"],
            gen: ["gen2"]
        }
    },
    {
        name: "Crayon Pop Choa",
        img: "pL4n6X9.png",
        opts: {
            group: ["Crayon Pop"],
            gen: ["gen2"]
        }
    },
    {
        name: "Apink Chorong",
        img: "Nj8CLUy.jpeg",
        opts: {
            group: ["Apink"],
            gen: ["gen2"]
        }
    },
    {
        name: "Dal\u2605Shabet Dalsooobin",
        img: "6piZqXS.jpeg",
        opts: {
            group: ["Dal\u2605Shabet"],
            gen: ["gen2"]
        }
    },
    {
        name: "Sistar Dasom",
        img: "MWpFZoW.png",
        opts: {
            group: ["Sistar"],
            gen: ["gen2"]
        }
    },
    {
        name: "After School E-Young",
        img: "csrUlVG.png",
        opts: {
            group: ["After School"],
            gen: ["gen2"]
        }
    },
    {
        name: "Crayon Pop Ellin",
        img: "wmHfcsR.png",
        opts: {
            group: ["Crayon Pop"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses Euaerin",
        img: "Dc3VJAA.png",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses Eunji",
        img: "IPadsTs.png",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brave Girls Eunji",
        img: "lB3n0ZP.jpeg",
        opts: {
            group: ["Brave Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Sunny Hill Eunju",
        img: "cgnfhWT.png",
        opts: {
            group: ["Sunny Hill"],
            gen: ["gen2"]
        }
    },
    {
        name: "T-ara Eunjung",
        img: "26nxfOZ.png",
        opts: {
            group: ["T-ara"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brave Girls Eunyoung",
        img: "rNZ7IZz.png",
        opts: {
            group: ["Brave Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Miss A Fei",
        img: "lP6qqL5.jpeg",
        opts: {
            group: ["Miss A"],
            gen: ["gen2"]
        }
    },
    {
        name: "G.na",
        img: "TiQJcab.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brown Eyed Girls Gain",
        img: "rWdWerY.png",
        opts: {
            group: ["Brown Eyed Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "4Minute Gayoon",
        img: "kd2BuSf.png",
        opts: {
            group: ["4Minute"],
            gen: ["gen2"]
        }
    },
    {
        name: "Stellar Gayoung",
        img: "dbKKYym.png",
        opts: {
            group: ["Stellar"],
            gen: ["gen2"]
        }
    },
    {
        name: "Kara Goo Hara",
        img: "grCkR4r.jpeg",
        opts: {
            group: ["Kara"],
            gen: ["gen2"]
        }
    },
    {
        name: "Crayon Pop Gummi",
        img: "un1AjHv.png",
        opts: {
            group: ["Crayon Pop"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses Gyeongree",
        img: "qMouRtF.jpeg",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "SeeYa Gyuri",
        img: "GopQZk1.jpeg",
        opts: {
            group: ["SeeYa"],
            gen: ["gen2"]
        }
    },
    {
        name: "Wonder Girls HA:TFELT",
        img: "iEJtb8V.jpeg",
        opts: {
            group: ["Wonder Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "EXID Haeryung",
        img: "SHXJ1rh.png",
        opts: {
            group: ["EXID"],
            gen: ["gen2"]
        }
    },
    {
        name: "Secret Hana",
        img: "t5SBTjU.png",
        opts: {
            group: ["Secret"],
            gen: ["gen2"]
        }
    },
    {
        name: "EXID Hani",
        img: "1tqFknq.jpeg",
        opts: {
            group: ["EXID"],
            gen: ["gen2"]
        }
    },
    {
        name: "Apink Hayoung",
        img: "qRFys3W.jpeg",
        opts: {
            group: ["Apink"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brave Girls Hayun",
        img: "dDBDWKs.png",
        opts: {
            group: ["Brave Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "T-ara Hwayoung",
        img: "rvFXwzi.png",
        opts: {
            group: ["T-ara"],
            gen: ["gen2"]
        }
    },
    {
        name: "AOA Hyejeong",
        img: "okjVFkD.jpeg",
        opts: {
            group: ["AOA"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses Hyemi",
        img: "JSDwiDr.jpeg",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "Stellar Hyeoeun",
        img: "aDKZiIc.jpeg",
        opts: {
            group: ["Stellar"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brave Girls Hyeran",
        img: "DSIOLO0.jpeg",
        opts: {
            group: ["Brave Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girl's Day Hyeri",
        img: "gzAFqGO.jpeg",
        opts: {
            group: ["Girl's Day"],
            gen: ["gen2"]
        }
    },
    {
        name: "Wonder Girls Hyerim",
        img: "9r2baV5.png",
        opts: {
            group: ["Wonder Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "EXID Hyerin",
        img: "C7spu99.jpeg",
        opts: {
            group: ["EXID"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girls' Generation Hyo",
        img: "dS8UPyw.jpeg",
        opts: {
            group: ["Girls' Generation"],
            gen: ["gen2"]
        }
    },
    {
        name: "Sistar Hyolyn",
        img: "NwwNnAe.jpeg",
        opts: {
            group: ["Sistar"],
            gen: ["gen2"]
        }
    },
    {
        name: "T-ara Hyomin",
        img: "kGwMkpR.jpeg",
        opts: {
            group: ["T-ara"],
            gen: ["gen2"]
        }
    },
    {
        name: "Wonder Girls Hyuna",
        img: "IQwVrnE.jpeg",
        opts: {
            group: ["Wonder Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Rainbow Hyunyoung",
        img: "vAmAcai.png",
        opts: {
            group: ["Rainbow"],
            gen: ["gen2"]
        }
    },
    {
        name: "IU",
        img: "Wfz8smb.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses Jaekyung",
        img: "SPUJZAO.png",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "Rainbow Jaekyung",
        img: "bSpTc6d.jpeg",
        opts: {
            group: ["Rainbow"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brown Eyed Girls JeA",
        img: "6Ap3i2Q.jpeg",
        opts: {
            group: ["Brown Eyed Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Fiestar Jei",
        img: "RKNbiuS.png",
        opts: {
            group: ["Fiestar"],
            gen: ["gen2"]
        }
    },
    {
        name: "4Minute Jenyer",
        img: "e0RvTm0.jpeg",
        opts: {
            group: ["4Minute"],
            gen: ["gen2"]
        }
    },
    {
        name: "Stellar Jeon Youl",
        img: "zldrNFu.png",
        opts: {
            group: ["Stellar"],
            gen: ["gen2"]
        }
    },
    {
        name: "Apink Jeong Eunji",
        img: "CY4G9Ea.jpeg",
        opts: {
            group: ["Apink"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girls' Generation Jessica",
        img: "3yBxR2a.jpeg",
        opts: {
            group: ["Girls' Generation"],
            gen: ["gen2"]
        }
    },
    {
        name: "Miss A Jia",
        img: "KhxYm7P.jpeg",
        opts: {
            group: ["Miss A"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girl's Day Jihae",
        img: "FRAV4bp.png",
        opts: {
            group: ["Girl's Day"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girl's Day Jiin",
        img: "gJVat1j.jpeg",
        opts: {
            group: ["Girl's Day"],
            gen: ["gen2"]
        }
    },
    {
        name: "AOA Jimin",
        img: "4uDETkl.jpeg",
        opts: {
            group: ["AOA"],
            gen: ["gen2"]
        }
    },
    {
        name: "Rainbow Jisook",
        img: "FK6sA4j.jpeg",
        opts: {
            group: ["Rainbow"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girl's Day Jisun",
        img: "VwhJdKB.jpeg",
        opts: {
            group: ["Girl's Day"],
            gen: ["gen2"]
        }
    },
    {
        name: "SPICA Jiwon",
        img: "XakKbI2.jpeg",
        opts: {
            group: ["SPICA"],
            gen: ["gen2"]
        }
    },
    {
        name: "T-ara Jiyeon",
        img: "Okxset2.jpeg",
        opts: {
            group: ["T-ara"],
            gen: ["gen2"]
        }
    },
    {
        name: "Kara Jiyoung Kang",
        img: "T4A7iLl.jpeg",
        opts: {
            group: ["Kara"],
            gen: ["gen2"]
        }
    },
    {
        name: "Dal\u2605Shabet Jiyul",
        img: "nY8gfw0.png",
        opts: {
            group: ["Dal\u2605Shabet"],
            gen: ["gen2"]
        }
    },
    {
        name: "Urban Zakapa Jo Hyunah",
        img: "xeXrRTc.jpeg",
        opts: {
            group: ["Urban Zakapa"],
            gen: ["gen2"]
        }
    },
    {
        name: "After School Jooyeon",
        img: "A5bIC9w.jpeg",
        opts: {
            group: ["After School"],
            gen: ["gen2"]
        }
    },
    {
        name: "Sunny Hill Jubi",
        img: "dhNquru.jpeg",
        opts: {
            group: ["Sunny Hill"],
            gen: ["gen2"]
        }
    },
    {
        name: "Secret Jun Hyo Seong",
        img: "W2uBc0u.jpeg",
        opts: {
            group: ["Secret"],
            gen: ["gen2"]
        }
    },
    {
        name: "After School Jungah",
        img: "opFUnvb.png",
        opts: {
            group: ["After School"],
            gen: ["gen2"]
        }
    },
    {
        name: "EXID Junghwa",
        img: "PSWBIiK.jpeg",
        opts: {
            group: ["EXID"],
            gen: ["gen2"]
        }
    },
    {
        name: "Juniel",
        img: "feVufX2.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen2"]
        }
    },
    {
        name: "After School Kaeun",
        img: "HxUv65q.png",
        opts: {
            group: ["After School"],
            gen: ["gen2"]
        }
    },
    {
        name: "Dal\u2605Shabet Kaeun",
        img: "GFb96Kp.jpeg",
        opts: {
            group: ["Dal\u2605Shabet"],
            gen: ["gen2"]
        }
    },
    {
        name: "After School Kahi",
        img: "SmrYhQp.png",
        opts: {
            group: ["After School"],
            gen: ["gen2"]
        }
    },
    {
        name: "EXID Kang Hye Yeon",
        img: "cRnrT3V.jpeg",
        opts: {
            group: ["EXID"],
            gen: ["gen2"]
        }
    },
    {
        name: "Davichi Kang Min Kyung",
        img: "3Luzslf.jpeg",
        opts: {
            group: ["Davichi"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses Keumjo",
        img: "OAclbVO.png",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "SPICA Kim Bo Hyung",
        img: "C2EYCVQ.jpeg",
        opts: {
            group: ["SPICA"],
            gen: ["gen2"]
        }
    },
    {
        name: "SeeYa Kim Yeonji",
        img: "n3v1Ce6.jpeg",
        opts: {
            group: ["SeeYa"],
            gen: ["gen2"]
        }
    },
    {
        name: "Sunny Hill Kota",
        img: "0ZhMFJR.jpeg",
        opts: {
            group: ["Sunny Hill"],
            gen: ["gen2"]
        }
    },
    {
        name: "f(x) Krystal",
        img: "TWqxrSX.jpeg",
        opts: {
            group: ["f(x)"],
            gen: ["gen2"]
        }
    },
    {
        name: "EXID LE",
        img: "c6UN0Ym.jpeg",
        opts: {
            group: ["EXID"],
            gen: ["gen2"]
        }
    },
    {
        name: "Davichi Lee Haeri",
        img: "ijdX6ql.jpeg",
        opts: {
            group: ["Davichi"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses LeeSem",
        img: "lR10SEn.jpeg",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "Lim Jeonghee",
        img: "OAauOYi.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen2"]
        }
    },
    {
        name: "Hellovenus Lime",
        img: "nWSoes9.png",
        opts: {
            group: ["Hellovenus"],
            gen: ["gen2"]
        }
    },
    {
        name: "Fiestar Linzy",
        img: "IpTqES7.png",
        opts: {
            group: ["Fiestar"],
            gen: ["gen2"]
        }
    },
    {
        name: "After School Lizzy",
        img: "DZutdTF.png",
        opts: {
            group: ["After School"],
            gen: ["gen2"]
        }
    },
    {
        name: "f(x) Luna",
        img: "F6PnQYs.jpeg",
        opts: {
            group: ["f(x)"],
            gen: ["gen2"]
        }
    },
    {
        name: "Miss A Min",
        img: "0KDJOOy.jpeg",
        opts: {
            group: ["Miss A"],
            gen: ["gen2"]
        }
    },
    {
        name: "AOA Mina",
        img: "D3RhzOZ.jpeg",
        opts: {
            group: ["AOA"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girl's Day Minah",
        img: "Y5Gym6b.jpeg",
        opts: {
            group: ["Girl's Day"],
            gen: ["gen2"]
        }
    },
    {
        name: "Stellar Minhee",
        img: "G8KNsPe.jpeg",
        opts: {
            group: ["Stellar"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brave Girls Minyoung",
        img: "8PI1iUL.jpeg",
        opts: {
            group: ["Brave Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "2NE1 Minzy",
        img: "QV2m2YD.png",
        opts: {
            group: ["2NE1"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brown Eyed Girls Miryo",
        img: "BhJL72x.png",
        opts: {
            group: ["Brown Eyed Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Sunny Hill Misung",
        img: "dRZShyr.jpeg",
        opts: {
            group: ["Sunny Hill"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses Moon Hyuna",
        img: "4wjrf1x.png",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "NS Yoon-G",
        img: "GacNRgx.png",
        opts: {
            group: ["soloist"],
            gen: ["gen2"]
        }
    },
    {
        name: "Apink Naeun",
        img: "jtKQ0Y1.png",
        opts: {
            group: ["Apink"],
            gen: ["gen2"]
        }
    },
    {
        name: "Apink Namjoo",
        img: "4cQYpZG.jpeg",
        opts: {
            group: ["Apink"],
            gen: ["gen2"]
        }
    },
    {
        name: "After School Nana",
        img: "aEPXgvI.jpeg",
        opts: {
            group: ["After School"],
            gen: ["gen2"]
        }
    },
    {
        name: "Hellovenus Nara",
        img: "VAkpDrm.png",
        opts: {
            group: ["Hellovenus"],
            gen: ["gen2"]
        }
    },
    {
        name: "SPICA Narae",
        img: "8vzrTBv.jpeg",
        opts: {
            group: ["SPICA"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brown Eyed Girls Narsha",
        img: "qm3vDGi.png",
        opts: {
            group: ["Brown Eyed Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Kara Nicole Jung",
        img: "6NVZxwf.jpeg",
        opts: {
            group: ["Kara"],
            gen: ["gen2"]
        }
    },
    {
        name: "Rainbow Noeul",
        img: "yYq9pvJ.jpeg",
        opts: {
            group: ["Rainbow"],
            gen: ["gen2"]
        }
    },
    {
        name: "2NE1 Park Bom",
        img: "Wvw6Bix.jpeg",
        opts: {
            group: ["2NE1"],
            gen: ["gen2"]
        }
    },
    {
        name: "Kara Park Gyuri",
        img: "6WKYTcA.jpeg",
        opts: {
            group: ["Kara"],
            gen: ["gen2"]
        }
    },
    {
        name: "T-ara Qri",
        img: "rpAmbgO.jpeg",
        opts: {
            group: ["T-ara"],
            gen: ["gen2"]
        }
    },
    {
        name: "After School Raina",
        img: "s096Kif.jpeg",
        opts: {
            group: ["After School"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses Rana",
        img: "E2fcm6C.jpeg",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses Ryu Sera",
        img: "5YhVzpg.png",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "2NE1 Sandara Park",
        img: "3vmY6iW.png",
        opts: {
            group: ["2NE1"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brave Girls Seoah",
        img: "su2U2BK.jpeg",
        opts: {
            group: ["Brave Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girls' Generation Seohyun",
        img: "NhJDxQE.jpeg",
        opts: {
            group: ["Girls' Generation"],
            gen: ["gen2"]
        }
    },
    {
        name: "AOA Seolhyun",
        img: "S7ZvDk6.png",
        opts: {
            group: ["AOA"],
            gen: ["gen2"]
        }
    },
    {
        name: "Hellovenus Seoyoung",
        img: "4rugp2j.png",
        opts: {
            group: ["Hellovenus"],
            gen: ["gen2"]
        }
    },
    {
        name: "Dal\u2605Shabet Serri",
        img: "mygXwW4.jpeg",
        opts: {
            group: ["Dal\u2605Shabet"],
            gen: ["gen2"]
        }
    },
    {
        name: "Rainbow Seungah",
        img: "S6s54kt.png",
        opts: {
            group: ["Rainbow"],
            gen: ["gen2"]
        }
    },
    {
        name: "Kara Seungyeon",
        img: "5RugHBn.jpeg",
        opts: {
            group: ["Kara"],
            gen: ["gen2"]
        }
    },
    {
        name: "4Minute Sohyun",
        img: "my8vZo3.png",
        opts: {
            group: ["4Minute"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses Sojin",
        img: "6Kyua2G.jpeg",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girl's Day Sojin",
        img: "VkVdhVb.png",
        opts: {
            group: ["Girl's Day"],
            gen: ["gen2"]
        }
    },
    {
        name: "EXID Solji",
        img: "CcQuKCx.jpeg",
        opts: {
            group: ["EXID"],
            gen: ["gen2"]
        }
    },
    {
        name: "Secret Song Jieun",
        img: "lRuvgj4.jpeg",
        opts: {
            group: ["Secret"],
            gen: ["gen2"]
        }
    },
    {
        name: "SeeYa Soomi",
        img: "YkPhJ32.jpeg",
        opts: {
            group: ["SeeYa"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girls' Generation Sooyoung",
        img: "fEuwz0V.jpeg",
        opts: {
            group: ["Girls' Generation"],
            gen: ["gen2"]
        }
    },
    {
        name: "T-ara Soyeon",
        img: "wrjNMVE.jpeg",
        opts: {
            group: ["T-ara"],
            gen: ["gen2"]
        }
    },
    {
        name: "Sistar Soyou",
        img: "kYWWowy.jpeg",
        opts: {
            group: ["Sistar"],
            gen: ["gen2"]
        }
    },
    {
        name: "After School Soyoung",
        img: "8PlRaaj.png",
        opts: {
            group: ["After School"],
            gen: ["gen2"]
        }
    },
    {
        name: "Stellar Soyoung",
        img: "HP78cfK.jpeg",
        opts: {
            group: ["Stellar"],
            gen: ["gen2"]
        }
    },
    {
        name: "Crayon Pop Soyul",
        img: "Rc8DEkn.png",
        opts: {
            group: ["Crayon Pop"],
            gen: ["gen2"]
        }
    },
    {
        name: "f(x) Sulli",
        img: "aB8qobB.png",
        opts: {
            group: ["f(x)"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses Sungah",
        img: "WbwRjF5.jpeg",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "Secret Sunhwa",
        img: "DOJIoMW.jpeg",
        opts: {
            group: ["Secret"],
            gen: ["gen2"]
        }
    },
    {
        name: "Wonder Girls Sunmi",
        img: "0HA5ZPr.jpeg",
        opts: {
            group: ["Wonder Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girls' Generation Sunny",
        img: "wBYhaRw.jpeg",
        opts: {
            group: ["Girls' Generation"],
            gen: ["gen2"]
        }
    },
    {
        name: "Wonder Girls Sunye",
        img: "6S6l2ak.png",
        opts: {
            group: ["Wonder Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Miss A Suzy",
        img: "my0Ea9g.jpeg",
        opts: {
            group: ["Miss A"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girls' Generation Taeyeon",
        img: "hNM4nC9.jpeg",
        opts: {
            group: ["Girls' Generation"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girls' Generation Tiffany",
        img: "leSjkjs.png",
        opts: {
            group: ["Girls' Generation"],
            gen: ["gen2"]
        }
    },
    {
        name: "After School UEE",
        img: "kko3ZUs.png",
        opts: {
            group: ["After School"],
            gen: ["gen2"]
        }
    },
    {
        name: "EXID Uji",
        img: "nLIt2bQ.png",
        opts: {
            group: ["EXID"],
            gen: ["gen2"]
        }
    },
    {
        name: "f(x) Victoria",
        img: "rCAsPIZ.png",
        opts: {
            group: ["f(x)"],
            gen: ["gen2"]
        }
    },
    {
        name: "Dal\u2605Shabet Viki",
        img: "6qcfmOJ.jpeg",
        opts: {
            group: ["Dal\u2605Shabet"],
            gen: ["gen2"]
        }
    },
    {
        name: "Crayon Pop Way",
        img: "gIls0qZ.png",
        opts: {
            group: ["Crayon Pop"],
            gen: ["gen2"]
        }
    },
    {
        name: "Dal\u2605Shabet Woohee",
        img: "lLTP6r9.jpeg",
        opts: {
            group: ["Dal\u2605Shabet"],
            gen: ["gen2"]
        }
    },
    {
        name: "Rainbow Woori",
        img: "WTUuW4w.png",
        opts: {
            group: ["Rainbow"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brave Girls Yejin",
        img: "wyg2jYi.png",
        opts: {
            group: ["Brave Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Fiestar Yel",
        img: "1VZcfM9.jpeg",
        opts: {
            group: ["Fiestar"],
            gen: ["gen2"]
        }
    },
    {
        name: "Hellovenus Yeoreum",
        img: "sg7G4IP.jpeg",
        opts: {
            group: ["Hellovenus"],
            gen: ["gen2"]
        }
    },
    {
        name: "Fiestar Yezi",
        img: "7CKCWi4.jpeg",
        opts: {
            group: ["Fiestar"],
            gen: ["gen2"]
        }
    },
    {
        name: "Hellovenus Yoo Ara",
        img: "WCtTjHt.png",
        opts: {
            group: ["Hellovenus"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brave Girls Yoojin",
        img: "xJKHQAo.png",
        opts: {
            group: ["Brave Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Apink Yookyung",
        img: "z33MiBf.png",
        opts: {
            group: ["Apink"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girls' Generation Yoona",
        img: "uw1gNJ9.jpeg",
        opts: {
            group: ["Girls' Generation"],
            gen: ["gen2"]
        }
    },
    {
        name: "Rainbow Yoonhye",
        img: "BIl6OGo.jpeg",
        opts: {
            group: ["Rainbow"],
            gen: ["gen2"]
        }
    },
    {
        name: "Hellovenus Yooyoung",
        img: "MNyU2bO.jpeg",
        opts: {
            group: ["Hellovenus"],
            gen: ["gen2"]
        }
    },
    {
        name: "AOA Youkyung",
        img: "FE2p4AT.png",
        opts: {
            group: ["AOA"],
            gen: ["gen2"]
        }
    },
    {
        name: "Kara Youngji",
        img: "gqoUs82.jpeg",
        opts: {
            group: ["Kara"],
            gen: ["gen2"]
        }
    },
    {
        name: "Younha",
        img: "JIDpg8x.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen2"]
        }
    },
    {
        name: "Wonder Girls Yubin",
        img: "0ZXbmdS.jpeg",
        opts: {
            group: ["Wonder Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "AOA Yuna",
        img: "SwByUez.jpeg",
        opts: {
            group: ["AOA"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brave Girls Yuna",
        img: "iFIDW5T.jpeg",
        opts: {
            group: ["Brave Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girl's Day Yura",
        img: "1BRmv8s.jpeg",
        opts: {
            group: ["Girl's Day"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girls' Generation Yuri",
        img: "MHU8ojX.jpeg",
        opts: {
            group: ["Girls' Generation"],
            gen: ["gen2"]
        }
    },
    {
        name: "Momoland AhIn",
        img: "NRliQWy.jpeg",
        opts: {
            group: ["Momoland"],
            gen: ["gen3"]
        }
    },
    {
        name: "Oh My Girl Arin",
        img: "llxjzqr.jpeg",
        opts: {
            group: ["Oh My Girl"],
            gen: ["gen3"]
        }
    },
    {
        name: "Ladies' code Ashley",
        img: "aYxcakV.jpeg",
        opts: {
            group: ["Ladies' code"],
            gen: ["gen3"]
        }
    },
    {
        name: "Bolbbalgan4",
        img: "HZIIQEY.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Bona",
        img: "tKXYTSD.jpeg",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "Alice Chaejeong",
        img: "J7WKqXB.jpeg",
        opts: {
            group: ["Alice"],
            gen: ["gen3"]
        }
    },
    {
        name: "April Chaewon",
        img: "lGTX0QM.jpeg",
        opts: {
            group: ["April"],
            gen: ["gen3"]
        }
    },
    {
        name: "Busters Chaeyeon",
        img: "PoRJPyp.jpeg",
        opts: {
            group: ["Busters"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dia Chaeyeon",
        img: "ZgJblRe.jpeg",
        opts: {
            group: ["Dia"],
            gen: ["gen3"]
        }
    },
    {
        name: "Twice Chaeyoung",
        img: "B1mdidp.jpeg",
        opts: {
            group: ["Twice"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Cheng Xiao",
        img: "yOL4OOz.png",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "I.O.I Chung ha",
        img: "6dAvFeC.jpeg",
        opts: {
            group: ["I.O.I"],
            gen: ["gen3"]
        }
    },
    {
        name: "Sonamoo D.ana",
        img: "7pmUTmb.jpeg",
        opts: {
            group: ["Sonamoo"],
            gen: ["gen3"]
        }
    },
    {
        name: "BESTie Dahye",
        img: "nCRU50l.png",
        opts: {
            group: ["BESTie"],
            gen: ["gen3"]
        }
    },
    {
        name: "Twice Dahyun",
        img: "rc0f2rq.jpeg",
        opts: {
            group: ["Twice"],
            gen: ["gen3"]
        }
    },
    {
        name: "Momoland Daisy",
        img: "KV06GVf.jpeg",
        opts: {
            group: ["Momoland"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dreamcatcher Dami",
        img: "LXPKoCn.jpeg",
        opts: {
            group: ["Dreamcatcher"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Dawon",
        img: "BgOyRyT.jpeg",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Dayoung",
        img: "9BSdPVs.jpeg",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "Alice Do-A",
        img: "zVRRLbI.jpeg",
        opts: {
            group: ["Alice"],
            gen: ["gen3"]
        }
    },
    {
        name: "Weki Meki Doyeon",
        img: "oLgfQuh.jpeg",
        opts: {
            group: ["Weki Meki"],
            gen: ["gen3"]
        }
    },
    {
        name: "Alice Ej",
        img: "a24mRTW.jpeg",
        opts: {
            group: ["Alice"],
            gen: ["gen3"]
        }
    },
    {
        name: "CLC Elkie",
        img: "A2ePc4V.jpeg",
        opts: {
            group: ["CLC"],
            gen: ["gen3"]
        }
    },
    {
        name: "Weki Meki Elly",
        img: "0RZY088.jpeg",
        opts: {
            group: ["Weki Meki"],
            gen: ["gen3"]
        }
    },
    {
        name: "Ladies' code EunB",
        img: "LCw9ump.jpeg",
        opts: {
            group: ["Ladies' code"],
            gen: ["gen3"]
        }
    },
    {
        name: "CLC Eunbin",
        img: "IoGJjmK.jpeg",
        opts: {
            group: ["CLC"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dia Eunchae",
        img: "1KOuyih.jpeg",
        opts: {
            group: ["Dia"],
            gen: ["gen3"]
        }
    },
    {
        name: "GFriend Eunha",
        img: "yU7yh7S.jpeg",
        opts: {
            group: ["GFriend"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dia Eunice",
        img: "4C3jEjt.jpeg",
        opts: {
            group: ["Dia"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dia Eunjin",
        img: "L1N6Ddx.png",
        opts: {
            group: ["Dia"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Eunseo",
        img: "tOUutRB.jpeg",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "Pristin Eunwoo",
        img: "bqdFPUB.png",
        opts: {
            group: ["Pristin"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Exy",
        img: "yyvmSX3.jpeg",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dreamcatcher Gahyeon",
        img: "0Ozkm0F.jpeg",
        opts: {
            group: ["Dreamcatcher"],
            gen: ["gen3"]
        }
    },
    {
        name: "Pristin Gyeongwon",
        img: "nXrXa18.png",
        opts: {
            group: ["Pristin"],
            gen: ["gen3"]
        }
    },
    {
        name: "Gugudan Haebin",
        img: "AWJi6yX.png",
        opts: {
            group: ["Gugudan"],
            gen: ["gen3"]
        }
    },
    {
        name: "Laboum Haein",
        img: "WsWVkNQ.png",
        opts: {
            group: ["Laboum"],
            gen: ["gen3"]
        }
    },
    {
        name: "Gugudan Hana",
        img: "vWD6w0L.png",
        opts: {
            group: ["Gugudan"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dreamcatcher Handong",
        img: "VahvT6i.jpeg",
        opts: {
            group: ["Dreamcatcher"],
            gen: ["gen3"]
        }
    },
    {
        name: "Heize",
        img: "Prw6zC8.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen3"]
        }
    },
    {
        name: "Sonamoo Hezz",
        img: "UkRdSmt.jpeg",
        opts: {
            group: ["Sonamoo"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dia Huihyeon",
        img: "MBXvrak.jpeg",
        opts: {
            group: ["Dia"],
            gen: ["gen3"]
        }
    },
    {
        name: "Mamamoo Hwasa",
        img: "ygsowHa.jpeg",
        opts: {
            group: ["Mamamoo"],
            gen: ["gen3"]
        }
    },
    {
        name: "Momoland Hyebin",
        img: "TP4UuZz.jpeg",
        opts: {
            group: ["Momoland"],
            gen: ["gen3"]
        }
    },
    {
        name: "Gugudan Hyeyeon",
        img: "vmszKBK.png",
        opts: {
            group: ["Gugudan"],
            gen: ["gen3"]
        }
    },
    {
        name: "Oh My Girl Hyojung",
        img: "bLDLeLv.jpeg",
        opts: {
            group: ["Oh My Girl"],
            gen: ["gen3"]
        }
    },
    {
        name: "Busters Hyungseo",
        img: "76eOWOk.png",
        opts: {
            group: ["Busters"],
            gen: ["gen3"]
        }
    },
    {
        name: "April Hyunjoo",
        img: "CLyOCbx.png",
        opts: {
            group: ["April"],
            gen: ["gen3"]
        }
    },
    {
        name: "Red Velvet Irene",
        img: "M4PFiW8.jpeg",
        opts: {
            group: ["Red Velvet"],
            gen: ["gen3"]
        }
    },
    {
        name: "Momoland Jane",
        img: "c4Abx8D.jpeg",
        opts: {
            group: ["Momoland"],
            gen: ["gen3"]
        }
    },
    {
        name: "Blackpink Jennie",
        img: "oRi9ZfP.jpeg",
        opts: {
            group: ["Blackpink"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dia Jenny",
        img: "6uCDTP1.jpeg",
        opts: {
            group: ["Dia"],
            gen: ["gen3"]
        }
    },
    {
        name: "Twice Jeongyeon",
        img: "n1MFrpZ.jpeg",
        opts: {
            group: ["Twice"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dreamcatcher JiU",
        img: "wuf8iAj.jpeg",
        opts: {
            group: ["Dreamcatcher"],
            gen: ["gen3"]
        }
    },
    {
        name: "Oh My Girl Jiho",
        img: "0vVJewB.png",
        opts: {
            group: ["Oh My Girl"],
            gen: ["gen3"]
        }
    },
    {
        name: "Twice Jihyo",
        img: "R744YmB.jpeg",
        opts: {
            group: ["Twice"],
            gen: ["gen3"]
        }
    },
    {
        name: "Lovelyz Jin",
        img: "MjnB8Ot.jpeg",
        opts: {
            group: ["Lovelyz"],
            gen: ["gen3"]
        }
    },
    {
        name: "Oh My Girl JinE",
        img: "TSdPLQU.jpeg",
        opts: {
            group: ["Oh My Girl"],
            gen: ["gen3"]
        }
    },
    {
        name: "April Jinsol",
        img: "rGtmHUL.jpeg",
        opts: {
            group: ["April"],
            gen: ["gen3"]
        }
    },
    {
        name: "Laboum Jinye",
        img: "Oxl5XAy.jpeg",
        opts: {
            group: ["Laboum"],
            gen: ["gen3"]
        }
    },
    {
        name: "Blackpink Jisoo",
        img: "eVViRoz.jpeg",
        opts: {
            group: ["Blackpink"],
            gen: ["gen3"]
        }
    },
    {
        name: "Busters Jisoo",
        img: "feiCXXG.png",
        opts: {
            group: ["Busters"],
            gen: ["gen3"]
        }
    },
    {
        name: "Lovelyz Jisoo",
        img: "TaZnCBd.png",
        opts: {
            group: ["Lovelyz"],
            gen: ["gen3"]
        }
    },
    {
        name: "KARD Jiwoo",
        img: "5tG01k3.jpeg",
        opts: {
            group: ["KARD"],
            gen: ["gen3"]
        }
    },
    {
        name: "Momoland Joo E",
        img: "oUW6DCU.jpeg",
        opts: {
            group: ["Momoland"],
            gen: ["gen3"]
        }
    },
    {
        name: "Red Velvet Joy",
        img: "Cnht1zT.jpeg",
        opts: {
            group: ["Red Velvet"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dia Jueun",
        img: "ncYfGGU.jpeg",
        opts: {
            group: ["Dia"],
            gen: ["gen3"]
        }
    },
    {
        name: "Alice Karin",
        img: "6wA6ahq.jpeg",
        opts: {
            group: ["Alice"],
            gen: ["gen3"]
        }
    },
    {
        name: "Lovelyz Kei",
        img: "0dpd0Sc.png",
        opts: {
            group: ["Lovelyz"],
            gen: ["gen3"]
        }
    },
    {
        name: "Sonamoo Kim Dohee",
        img: "8BxW2I1.jpeg",
        opts: {
            group: ["Sonamoo"],
            gen: ["gen3"]
        }
    },
    {
        name: "Pristin Kyla",
        img: "A00uB8p.jpeg",
        opts: {
            group: ["Pristin"],
            gen: ["gen3"]
        }
    },
    {
        name: "Pristin Kyulkyung",
        img: "H4Hz5VK.png",
        opts: {
            group: ["Pristin"],
            gen: ["gen3"]
        }
    },
    {
        name: "Akmu Lee Suhyun",
        img: "YRy5K03.jpeg",
        opts: {
            group: ["Akmu"],
            gen: ["gen3"]
        }
    },
    {
        name: "Lovelyz Lee Sujeong",
        img: "Euc9c5T.jpeg",
        opts: {
            group: ["Lovelyz"],
            gen: ["gen3"]
        }
    },
    {
        name: "Blackpink Lisa",
        img: "gTMe2BZ.jpeg",
        opts: {
            group: ["Blackpink"],
            gen: ["gen3"]
        }
    },
    {
        name: "Weki Meki Lua",
        img: "AAIefLr.jpeg",
        opts: {
            group: ["Weki Meki"],
            gen: ["gen3"]
        }
    },
    {
        name: "Weki Meki Lucy",
        img: "qVBzkZB.jpeg",
        opts: {
            group: ["Weki Meki"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Luda",
        img: "sNHeJoK.jpeg",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Meiqi",
        img: "XnMFo7C.jpeg",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "Lovelyz Mijoo",
        img: "GO76GvH.jpeg",
        opts: {
            group: ["Lovelyz"],
            gen: ["gen3"]
        }
    },
    {
        name: "Gugudan Mimi",
        img: "n4nSp5k.png",
        opts: {
            group: ["Gugudan"],
            gen: ["gen3"]
        }
    },
    {
        name: "Oh My Girl Mimi",
        img: "GNk3VxJ.jpeg",
        opts: {
            group: ["Oh My Girl"],
            gen: ["gen3"]
        }
    },
    {
        name: "Gugudan Mina",
        img: "7o0H9Nr.jpeg",
        opts: {
            group: ["Gugudan"],
            gen: ["gen3"]
        }
    },
    {
        name: "Twice Mina",
        img: "0dMaUgi.jpeg",
        opts: {
            group: ["Twice"],
            gen: ["gen3"]
        }
    },
    {
        name: "Sonamoo Minjae",
        img: "gfHBHrx.jpeg",
        opts: {
            group: ["Sonamoo"],
            gen: ["gen3"]
        }
    },
    {
        name: "Busters Minji",
        img: "7edXXtP.jpeg",
        opts: {
            group: ["Busters"],
            gen: ["gen3"]
        }
    },
    {
        name: "Busters Minjung",
        img: "qA8QcCK.png",
        opts: {
            group: ["Busters"],
            gen: ["gen3"]
        }
    },
    {
        name: "Pristin Minkyeung",
        img: "y3wT8vP.jpeg",
        opts: {
            group: ["Pristin"],
            gen: ["gen3"]
        }
    },
    {
        name: "Twice Momo",
        img: "L08Fqco.jpeg",
        opts: {
            group: ["Twice"],
            gen: ["gen3"]
        }
    },
    {
        name: "Mamamoo Moonbyul",
        img: "fUTjQlS.jpeg",
        opts: {
            group: ["Mamamoo"],
            gen: ["gen3"]
        }
    },
    {
        name: "April Naeun",
        img: "Jix84A3.png",
        opts: {
            group: ["April"],
            gen: ["gen3"]
        }
    },
    {
        name: "Sonamoo Nahyun",
        img: "b9hrARV.png",
        opts: {
            group: ["Sonamoo"],
            gen: ["gen3"]
        }
    },
    {
        name: "Momoland Nancy",
        img: "Q91XfYi.jpeg",
        opts: {
            group: ["Momoland"],
            gen: ["gen3"]
        }
    },
    {
        name: "Twice Nayeon",
        img: "rMTKhtO.jpeg",
        opts: {
            group: ["Twice"],
            gen: ["gen3"]
        }
    },
    {
        name: "Gugudan Nayoung",
        img: "VfTZREV.png",
        opts: {
            group: ["Gugudan"],
            gen: ["gen3"]
        }
    },
    {
        name: "Pristin Nayoung",
        img: "Z1yUB5o.jpeg",
        opts: {
            group: ["Pristin"],
            gen: ["gen3"]
        }
    },
    {
        name: "Momoland Nayun",
        img: "bYOICFA.jpeg",
        opts: {
            group: ["Momoland"],
            gen: ["gen3"]
        }
    },
    {
        name: "Sonamoo New Sun",
        img: "QbSOXTl.jpeg",
        opts: {
            group: ["Sonamoo"],
            gen: ["gen3"]
        }
    },
    {
        name: "CLC Oh Seunghee",
        img: "xaWD832.jpeg",
        opts: {
            group: ["CLC"],
            gen: ["gen3"]
        }
    },
    {
        name: "Punch",
        img: "UPzn0lC.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen3"]
        }
    },
    {
        name: "April Rachel",
        img: "xhHVsT7.jpeg",
        opts: {
            group: ["April"],
            gen: ["gen3"]
        }
    },
    {
        name: "Ladies' code RiSe",
        img: "hskde0N.jpeg",
        opts: {
            group: ["Ladies' code"],
            gen: ["gen3"]
        }
    },
    {
        name: "Weki Meki Rina",
        img: "KfrW86f.jpeg",
        opts: {
            group: ["Weki Meki"],
            gen: ["gen3"]
        }
    },
    {
        name: "Blackpink Ros\u00e9",
        img: "P0NEqEM.jpeg",
        opts: {
            group: ["Blackpink"],
            gen: ["gen3"]
        }
    },
    {
        name: "Lovelyz Ryu Sujeong",
        img: "Ivby2Av.png",
        opts: {
            group: ["Lovelyz"],
            gen: ["gen3"]
        }
    },
    {
        name: "Gugudan Sally",
        img: "RN7np0k.jpeg",
        opts: {
            group: ["Gugudan"],
            gen: ["gen3"]
        }
    },
    {
        name: "Twice Sana",
        img: "q9KXu3Q.jpeg",
        opts: {
            group: ["Twice"],
            gen: ["gen3"]
        }
    },
    {
        name: "Weki Meki Sei",
        img: "jSqz3aa.jpeg",
        opts: {
            group: ["Weki Meki"],
            gen: ["gen3"]
        }
    },
    {
        name: "Busters Seira",
        img: "31YFjob.jpeg",
        opts: {
            group: ["Busters"],
            gen: ["gen3"]
        }
    },
    {
        name: "Gugudan Sejeong",
        img: "c8lddJe.jpeg",
        opts: {
            group: ["Gugudan"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Seola",
        img: "orAL7JJ.jpeg",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "Red Velvet Seulgi",
        img: "W06kTIF.jpeg",
        opts: {
            group: ["Red Velvet"],
            gen: ["gen3"]
        }
    },
    {
        name: "Oh My Girl Seunghee",
        img: "Q50ROdm.jpeg",
        opts: {
            group: ["Oh My Girl"],
            gen: ["gen3"]
        }
    },
    {
        name: "CLC Seungyeon",
        img: "Jed8028.jpeg",
        opts: {
            group: ["CLC"],
            gen: ["gen3"]
        }
    },
    {
        name: "GFriend SinB",
        img: "kifYGgw.jpeg",
        opts: {
            group: ["GFriend"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dreamcatcher Siyeon",
        img: "TBBq4WL.jpeg",
        opts: {
            group: ["Dreamcatcher"],
            gen: ["gen3"]
        }
    },
    {
        name: "Alice Sohee",
        img: "dneO14e.jpeg",
        opts: {
            group: ["Alice"],
            gen: ["gen3"]
        }
    },
    {
        name: "I.O.I Sohye",
        img: "231Gyzs.png",
        opts: {
            group: ["I.O.I"],
            gen: ["gen3"]
        }
    },
    {
        name: "Ladies' code Sojung",
        img: "q38dheA.jpeg",
        opts: {
            group: ["Ladies' code"],
            gen: ["gen3"]
        }
    },
    {
        name: "Mamamoo Solar",
        img: "U8TvcPF.jpeg",
        opts: {
            group: ["Mamamoo"],
            gen: ["gen3"]
        }
    },
    {
        name: "Laboum Solbin",
        img: "qwnO8JO.jpeg",
        opts: {
            group: ["Laboum"],
            gen: ["gen3"]
        }
    },
    {
        name: "I.O.I Somi",
        img: "gH5W882.jpeg",
        opts: {
            group: ["I.O.I"],
            gen: ["gen3"]
        }
    },
    {
        name: "KARD Somin",
        img: "D4NphCi.jpeg",
        opts: {
            group: ["KARD"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dia Somyi",
        img: "JuL4LPs.jpeg",
        opts: {
            group: ["Dia"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Soobin",
        img: "BQwv9Tz.jpeg",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "CLC Sorn",
        img: "eSEm3uN.jpeg",
        opts: {
            group: ["CLC"],
            gen: ["gen3"]
        }
    },
    {
        name: "GFriend Sowon",
        img: "oDV5H6X.jpeg",
        opts: {
            group: ["GFriend"],
            gen: ["gen3"]
        }
    },
    {
        name: "Gugudan Soyee",
        img: "DGoidGt.jpeg",
        opts: {
            group: ["Gugudan"],
            gen: ["gen3"]
        }
    },
    {
        name: "Laboum Soyeon",
        img: "Om7AJq7.jpeg",
        opts: {
            group: ["Laboum"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dreamcatcher SuA",
        img: "ST8JIWU.jpeg",
        opts: {
            group: ["Dreamcatcher"],
            gen: ["gen3"]
        }
    },
    {
        name: "Sonamoo Sumin",
        img: "a74zhuJ.jpeg",
        opts: {
            group: ["Sonamoo"],
            gen: ["gen3"]
        }
    },
    {
        name: "Pristin Sungyeon",
        img: "E46v8Xi.jpeg",
        opts: {
            group: ["Pristin"],
            gen: ["gen3"]
        }
    },
    {
        name: "Weki Meki Suyeon",
        img: "ADBEexx.jpeg",
        opts: {
            group: ["Weki Meki"],
            gen: ["gen3"]
        }
    },
    {
        name: "Momoland Taeha",
        img: "QUbhYcj.png",
        opts: {
            group: ["Momoland"],
            gen: ["gen3"]
        }
    },
    {
        name: "Twice Tzuyu",
        img: "WAvCrsx.jpeg",
        opts: {
            group: ["Twice"],
            gen: ["gen3"]
        }
    },
    {
        name: "GFriend Umji",
        img: "wrPp8Cy.jpeg",
        opts: {
            group: ["GFriend"],
            gen: ["gen3"]
        }
    },
    {
        name: "Red Velvet Wendy",
        img: "WH9rr6x.jpeg",
        opts: {
            group: ["Red Velvet"],
            gen: ["gen3"]
        }
    },
    {
        name: "Mamamoo WheeIn",
        img: "c3mIzuY.jpeg",
        opts: {
            group: ["Mamamoo"],
            gen: ["gen3"]
        }
    },
    {
        name: "Pristin Xiyeon",
        img: "PXSay1q.jpeg",
        opts: {
            group: ["Pristin"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Xuanyi",
        img: "mBe70T7.jpeg",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "Pristin Yaebin",
        img: "SILiqqU.jpeg",
        opts: {
            group: ["Pristin"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dia Yebin",
        img: "TSGPRTC.jpeg",
        opts: {
            group: ["Dia"],
            gen: ["gen3"]
        }
    },
    {
        name: "CLC Yeeun",
        img: "5kHZibb.jpeg",
        opts: {
            group: ["CLC"],
            gen: ["gen3"]
        }
    },
    {
        name: "Pristin Yehana",
        img: "BNW3taY.jpeg",
        opts: {
            group: ["Pristin"],
            gen: ["gen3"]
        }
    },
    {
        name: "Lovelyz Yein",
        img: "0eNJcPU.jpeg",
        opts: {
            group: ["Lovelyz"],
            gen: ["gen3"]
        }
    },
    {
        name: "April Yena",
        img: "m5fVbg3.png",
        opts: {
            group: ["April"],
            gen: ["gen3"]
        }
    },
    {
        name: "Alice Yeonjae",
        img: "10ZPchD.jpeg",
        opts: {
            group: ["Alice"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Yeonjung",
        img: "ignvRnZ.jpeg",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "Momoland Yeonwoo",
        img: "7Ttl95b.png",
        opts: {
            group: ["Momoland"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Yeoreum",
        img: "Jl9w5bL.jpeg",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "Red Velvet Yeri",
        img: "MPGNtBJ.jpeg",
        opts: {
            group: ["Red Velvet"],
            gen: ["gen3"]
        }
    },
    {
        name: "GFriend Yerin",
        img: "s9eLWMA.jpeg",
        opts: {
            group: ["GFriend"],
            gen: ["gen3"]
        }
    },
    {
        name: "Lovelyz Yoo Jiae",
        img: "xQrdeua.jpeg",
        opts: {
            group: ["Lovelyz"],
            gen: ["gen3"]
        }
    },
    {
        name: "Oh My Girl Yooa",
        img: "1o1qhJJ.jpeg",
        opts: {
            group: ["Oh My Girl"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dreamcatcher Yoohyeon",
        img: "9xEwr19.jpeg",
        opts: {
            group: ["Dreamcatcher"],
            gen: ["gen3"]
        }
    },
    {
        name: "I.O.I Yoojung",
        img: "hijXCo5.jpeg",
        opts: {
            group: ["I.O.I"],
            gen: ["gen3"]
        }
    },
    {
        name: "Oh My Girl Yubin",
        img: "CEsnUUc.jpeg",
        opts: {
            group: ["Oh My Girl"],
            gen: ["gen3"]
        }
    },
    {
        name: "Laboum Yujeong",
        img: "1iaSdoc.jpeg",
        opts: {
            group: ["Laboum"],
            gen: ["gen3"]
        }
    },
    {
        name: "GFriend Yuju",
        img: "FPWfUtk.jpeg",
        opts: {
            group: ["GFriend"],
            gen: ["gen3"]
        }
    },
    {
        name: "Alice Yukyung",
        img: "iVNPZCO.jpeg",
        opts: {
            group: ["Alice"],
            gen: ["gen3"]
        }
    },
    {
        name: "Laboum Yulhee",
        img: "inQag92.jpeg",
        opts: {
            group: ["Laboum"],
            gen: ["gen3"]
        }
    },
    {
        name: "Ladies' code Zuny",
        img: "PpoMDel.png",
        opts: {
            group: ["Ladies' code"],
            gen: ["gen3"]
        }
    },
    {
        name: "Everglow Aisha",
        img: "rJa57AJ.jpeg",
        opts: {
            group: ["Everglow"],
            gen: ["gen4"]
        }
    },
    {
        name: "GWSN Anne",
        img: "qqoSuW0.jpeg",
        opts: {
            group: ["GWSN"],
            gen: ["gen4"]
        }
    },
    {
        name: "ILY:1 Ara",
        img: "wdFISWA.png",
        opts: {
            group: ["ILY:1"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nature Aurora",
        img: "yDQiKNB.jpeg",
        opts: {
            group: ["Nature"],
            gen: ["gen4"]
        }
    },
    {
        name: "BIBI",
        img: "MZYVjcB.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nmixx Bae",
        img: "4v7fawb.jpeg",
        opts: {
            group: ["Nmixx"],
            gen: ["gen4"]
        }
    },
    {
        name: "DreamNote Boni",
        img: "8JLrlbY.jpeg",
        opts: {
            group: ["DreamNote"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cherry Bullet Bora",
        img: "7daGrAp.jpeg",
        opts: {
            group: ["Cherry Bullet"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nature Chaebin",
        img: "sSUNygK.png",
        opts: {
            group: ["Nature"],
            gen: ["gen4"]
        }
    },
    {
        name: "Kep1er Chaehyun",
        img: "3iFkhIT.jpeg",
        opts: {
            group: ["Kep1er"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cherry Bullet Chaerin",
        img: "x4kf1Ze.jpeg",
        opts: {
            group: ["Cherry Bullet"],
            gen: ["gen4"]
        }
    },
    {
        name: "ITZY Chaeryeong",
        img: "ktFMVRd.jpeg",
        opts: {
            group: ["ITZY"],
            gen: ["gen4"]
        }
    },
    {
        name: "CLASS:y Chaewon",
        img: "bBK9diE.png",
        opts: {
            group: ["CLASS:y"],
            gen: ["gen4"]
        }
    },
    {
        name: "IZ*ONE Chaewon",
        img: "mkJfJiC.jpeg",
        opts: {
            group: ["IZ*ONE"],
            gen: ["gen4"]
        }
    },
    {
        name: "Fromis 9 Chaeyoung",
        img: "fRgO8rH.jpeg",
        opts: {
            group: ["Fromis 9"],
            gen: ["gen4"]
        }
    },
    {
        name: "cignature Chloe",
        img: "UBDrA3z.jpeg",
        opts: {
            group: ["cignature"],
            gen: ["gen4"]
        }
    },
    {
        name: "LOONA Choerry",
        img: "h4pgvzO.jpeg",
        opts: {
            group: ["LOONA"],
            gen: ["gen4"]
        }
    },
    {
        name: "mimiirose Choi Yeonjae",
        img: "6VjYFLa.jpeg",
        opts: {
            group: ["mimiirose"],
            gen: ["gen4"]
        }
    },
    {
        name: "Lightsum Chowon",
        img: "fhK3oM8.jpeg",
        opts: {
            group: ["Lightsum"],
            gen: ["gen4"]
        }
    },
    {
        name: "bugAboo Choyeon",
        img: "OFDqTuX.jpeg",
        opts: {
            group: ["bugAboo"],
            gen: ["gen4"]
        }
    },
    {
        name: "LOONA Chuu",
        img: "t8Jbyq1.jpeg",
        opts: {
            group: ["LOONA"],
            gen: ["gen4"]
        }
    },
    {
        name: "bugAboo Cyan",
        img: "6XoXRLX.jpeg",
        opts: {
            group: ["bugAboo"],
            gen: ["gen4"]
        }
    },
    {
        name: "Pixy Dajeong",
        img: "KaxognB.png",
        opts: {
            group: ["Pixy"],
            gen: ["gen4"]
        }
    },
    {
        name: "Kep1er Dayeon",
        img: "AL2O2Ru.jpeg",
        opts: {
            group: ["Kep1er"],
            gen: ["gen4"]
        }
    },
    {
        name: "Secret Number Denise",
        img: "KfSxnem.jpeg",
        opts: {
            group: ["Secret Number"],
            gen: ["gen4"]
        }
    },
    {
        name: "Pixy Dia",
        img: "d8TzxWI.png",
        opts: {
            group: ["Pixy"],
            gen: ["gen4"]
        }
    },
    {
        name: "Secret Number Dita",
        img: "qGjdpqr.png",
        opts: {
            group: ["Secret Number"],
            gen: ["gen4"]
        }
    },
    {
        name: "cignature Dohee",
        img: "GsC1rbA.jpeg",
        opts: {
            group: ["cignature"],
            gen: ["gen4"]
        }
    },
    {
        name: "Purple Kiss Dosie",
        img: "v1Rk5HP.jpeg",
        opts: {
            group: ["Purple Kiss"],
            gen: ["gen4"]
        }
    },
    {
        name: "Everglow E:U",
        img: "JWAmY6N.jpeg",
        opts: {
            group: ["Everglow"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cherry Bullet Ella",
        img: "8DcEdmC.jpeg",
        opts: {
            group: ["Cherry Bullet"],
            gen: ["gen4"]
        }
    },
    {
        name: "ILY:1 Elva",
        img: "yKnI76g.png",
        opts: {
            group: ["ILY:1"],
            gen: ["gen4"]
        }
    },
    {
        name: "bugAboo Eunchae",
        img: "tdR8pe2.jpeg",
        opts: {
            group: ["bugAboo"],
            gen: ["gen4"]
        }
    },
    {
        name: "DreamNote Eunjo",
        img: "Q3ED4Vh.jpeg",
        opts: {
            group: ["DreamNote"],
            gen: ["gen4"]
        }
    },
    {
        name: "IVE Gaeul",
        img: "T8Z3Ygf.jpeg",
        opts: {
            group: ["IVE"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nature Gaga",
        img: "pO2yzmX.png",
        opts: {
            group: ["Nature"],
            gen: ["gen4"]
        }
    },
    {
        name: "Aespa Giselle",
        img: "MVMIuQo.jpeg",
        opts: {
            group: ["Aespa"],
            gen: ["gen4"]
        }
    },
    {
        name: "Purple Kiss Goeun",
        img: "1sKutUg.jpeg",
        opts: {
            group: ["Purple Kiss"],
            gen: ["gen4"]
        }
    },
    {
        name: "LOONA Gowon",
        img: "2yWdo3m.jpeg",
        opts: {
            group: ["LOONA"],
            gen: ["gen4"]
        }
    },
    {
        name: "Fromis 9 Gyuri",
        img: "CmU2rZ4.jpeg",
        opts: {
            group: ["Fromis 9"],
            gen: ["gen4"]
        }
    },
    {
        name: "DreamNote Habin",
        img: "pGo5cIi.jpeg",
        opts: {
            group: ["DreamNote"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nmixx Haewon",
        img: "dG6TDai.jpeg",
        opts: {
            group: ["Nmixx"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cherry Bullet Haeyoon",
        img: "rfaEF7x.jpeg",
        opts: {
            group: ["Cherry Bullet"],
            gen: ["gen4"]
        }
    },
    {
        name: "mimiirose Han Yewon",
        img: "utoAJKi.jpeg",
        opts: {
            group: ["mimiirose"],
            gen: ["gen4"]
        }
    },
    {
        name: "ILY:1 Hana",
        img: "nBShYK6.png",
        opts: {
            group: ["ILY:1"],
            gen: ["gen4"]
        }
    },
    {
        name: "DreamNote Hanbyeol",
        img: "eVUb6VA.jpeg",
        opts: {
            group: ["DreamNote"],
            gen: ["gen4"]
        }
    },
    {
        name: "NewJeans Hanni",
        img: "BAQpf6d.jpeg",
        opts: {
            group: ["NewJeans"],
            gen: ["gen4"]
        }
    },
    {
        name: "Billlie Haram",
        img: "ASjn2Cf.jpeg",
        opts: {
            group: ["Billlie"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nature Haru",
        img: "S4zYLD6.jpeg",
        opts: {
            group: ["Nature"],
            gen: ["gen4"]
        }
    },
    {
        name: "LOONA Haseul",
        img: "jPpp2t2.jpeg",
        opts: {
            group: ["LOONA"],
            gen: ["gen4"]
        }
    },
    {
        name: "Fromis 9 Hayoung",
        img: "j7D1QPu.jpeg",
        opts: {
            group: ["Fromis 9"],
            gen: ["gen4"]
        }
    },
    {
        name: "LOONA Heejin",
        img: "WVsI25A.jpeg",
        opts: {
            group: ["LOONA"],
            gen: ["gen4"]
        }
    },
    {
        name: "Kep1er Hikaru",
        img: "aL6LdXP.jpeg",
        opts: {
            group: ["Kep1er"],
            gen: ["gen4"]
        }
    },
    {
        name: "Lightsum Hina",
        img: "j4uAXQq.jpeg",
        opts: {
            group: ["Lightsum"],
            gen: ["gen4"]
        }
    },
    {
        name: "IZ*ONE Hitomi",
        img: "dD1LwN0.png",
        opts: {
            group: ["IZ*ONE"],
            gen: ["gen4"]
        }
    },
    {
        name: "Kep1er Huening Bahiyyih",
        img: "kIRtP4b.jpeg",
        opts: {
            group: ["Kep1er"],
            gen: ["gen4"]
        }
    },
    {
        name: "H1-KEY Hwiseo",
        img: "iEvd4KG.jpeg",
        opts: {
            group: ["H1-KEY"],
            gen: ["gen4"]
        }
    },
    {
        name: "CLASS:y Hyeju",
        img: "AmEu3MQ.png",
        opts: {
            group: ["CLASS:y"],
            gen: ["gen4"]
        }
    },
    {
        name: "IZ*ONE Hyewon",
        img: "DN8c4L9.jpeg",
        opts: {
            group: ["IZ*ONE"],
            gen: ["gen4"]
        }
    },
    {
        name: "Tri.be Hyunbin",
        img: "2mK5yFQ.png",
        opts: {
            group: ["Tri.be"],
            gen: ["gen4"]
        }
    },
    {
        name: "LOONA Hyunjin",
        img: "SoY7pdM.jpeg",
        opts: {
            group: ["LOONA"],
            gen: ["gen4"]
        }
    },
    {
        name: "mimiirose Inn Hyori",
        img: "Uds2YBK.jpeg",
        opts: {
            group: ["mimiirose"],
            gen: ["gen4"]
        }
    },
    {
        name: "Purple Kiss Ireh",
        img: "AyJEkUZ.jpeg",
        opts: {
            group: ["Purple Kiss"],
            gen: ["gen4"]
        }
    },
    {
        name: "StayC Isa",
        img: "LyE3vcA.jpeg",
        opts: {
            group: ["StayC"],
            gen: ["gen4"]
        }
    },
    {
        name: "StayC J",
        img: "AOKfu2K.jpeg",
        opts: {
            group: ["StayC"],
            gen: ["gen4"]
        }
    },
    {
        name: "Weeekly Jaehee",
        img: "Kpwpbas.jpeg",
        opts: {
            group: ["Weeekly"],
            gen: ["gen4"]
        }
    },
    {
        name: "(G)I-dle Jeon Soyeon",
        img: "y5TmZTG.jpeg",
        opts: {
            group: ["(G)I-dle"],
            gen: ["gen4"]
        }
    },
    {
        name: "Purple Kiss Jieun",
        img: "Ns3zyui.jpeg",
        opts: {
            group: ["Purple Kiss"],
            gen: ["gen4"]
        }
    },
    {
        name: "Weeekly Jihan",
        img: "sIFY4Jw.jpeg",
        opts: {
            group: ["Weeekly"],
            gen: ["gen4"]
        }
    },
    {
        name: "Fromis 9 Jiheon",
        img: "M8fWt8Q.jpeg",
        opts: {
            group: ["Fromis 9"],
            gen: ["gen4"]
        }
    },
    {
        name: "Tri.be Jinha",
        img: "EvecQmc.jpeg",
        opts: {
            group: ["Tri.be"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nmixx Jinni",
        img: "uFwhX3r.jpeg",
        opts: {
            group: ["Nmixx"],
            gen: ["gen4"]
        }
    },
    {
        name: "Secret Number Jinny",
        img: "wl3BDmb.png",
        opts: {
            group: ["Secret Number"],
            gen: ["gen4"]
        }
    },
    {
        name: "LOONA Jinsoul",
        img: "mhYU3fx.jpeg",
        opts: {
            group: ["LOONA"],
            gen: ["gen4"]
        }
    },
    {
        name: "Fromis 9 Jisun",
        img: "kNOLlTe.jpeg",
        opts: {
            group: ["Fromis 9"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cherry Bullet Jiwon",
        img: "qQFXszP.jpeg",
        opts: {
            group: ["Cherry Bullet"],
            gen: ["gen4"]
        }
    },
    {
        name: "Fromis 9 Jiwon",
        img: "cBlQ9zV.jpeg",
        opts: {
            group: ["Fromis 9"],
            gen: ["gen4"]
        }
    },
    {
        name: "IZ*ONE Jo Yuri",
        img: "yuA83rb.jpeg",
        opts: {
            group: ["IZ*ONE"],
            gen: ["gen4"]
        }
    },
    {
        name: "Lightsum Juhyeon",
        img: "V8ZVLu4.jpeg",
        opts: {
            group: ["Lightsum"],
            gen: ["gen4"]
        }
    },
    {
        name: "Rocket Punch Juri",
        img: "0UCxUoQ.jpeg",
        opts: {
            group: ["Rocket Punch"],
            gen: ["gen4"]
        }
    },
    {
        name: "Aespa Karina",
        img: "D1Ap9wA.jpeg",
        opts: {
            group: ["Aespa"],
            gen: ["gen4"]
        }
    },
    {
        name: "LE SSERAFIM Kazuha",
        img: "Wvk9PQY.jpeg",
        opts: {
            group: ["LE SSERAFIM"],
            gen: ["gen4"]
        }
    },
    {
        name: "Tri.be Kelly",
        img: "1tQY5TV.png",
        opts: {
            group: ["Tri.be"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Kim Chaeyeon",
        img: "gyhIW6r.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "LOONA Kim Lip",
        img: "DIgYviS.jpeg",
        opts: {
            group: ["LOONA"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Kim Nakyoung",
        img: "SQe9B3t.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Kim Yooyeon",
        img: "UzUIDb9.png",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cherry Bullet Kokoro",
        img: "aNCymZr.jpeg",
        opts: {
            group: ["Cherry Bullet"],
            gen: ["gen4"]
        }
    },
    {
        name: "IZ*ONE Kwon Eunbi",
        img: "PTIHNWz.jpeg",
        opts: {
            group: ["IZ*ONE"],
            gen: ["gen4"]
        }
    },
    {
        name: "DreamNote Lara",
        img: "vDtITvk.jpeg",
        opts: {
            group: ["DreamNote"],
            gen: ["gen4"]
        }
    },
    {
        name: "IZ*ONE Lee Chaeyeon",
        img: "yj8ONrF.jpeg",
        opts: {
            group: ["IZ*ONE"],
            gen: ["gen4"]
        }
    },
    {
        name: "Weeekly Lee Soojin",
        img: "BmxYS16.jpeg",
        opts: {
            group: ["Weeekly"],
            gen: ["gen4"]
        }
    },
    {
        name: "GWSN Lena",
        img: "9wnEfOL.jpeg",
        opts: {
            group: ["GWSN"],
            gen: ["gen4"]
        }
    },
    {
        name: "ITZY Lia",
        img: "zZvLYqT.jpeg",
        opts: {
            group: ["ITZY"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nmixx Lily",
        img: "w2vB92S.jpeg",
        opts: {
            group: ["Nmixx"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cherry Bullet Lin Lin",
        img: "FqL9MWI.jpeg",
        opts: {
            group: ["Cherry Bullet"],
            gen: ["gen4"]
        }
    },
    {
        name: "IVE Liz",
        img: "zPiNlw6.jpeg",
        opts: {
            group: ["IVE"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nature Loha",
        img: "0bysoNG.png",
        opts: {
            group: ["Nature"],
            gen: ["gen4"]
        }
    },
    {
        name: "Pixy Lola",
        img: "KGgriYW.png",
        opts: {
            group: ["Pixy"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nature Lu",
        img: "oRUu9Sd.jpeg",
        opts: {
            group: ["Nature"],
            gen: ["gen4"]
        }
    },
    {
        name: "woo!ah! Lucy",
        img: "MTcjlVy.jpeg",
        opts: {
            group: ["woo!ah!"],
            gen: ["gen4"]
        }
    },
    {
        name: "Secret Number L\u00e9a",
        img: "Rn9L1Ds.png",
        opts: {
            group: ["Secret Number"],
            gen: ["gen4"]
        }
    },
    {
        name: "Kep1er Mashiro",
        img: "QiAFTGI.jpeg",
        opts: {
            group: ["Kep1er"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cherry Bullet May",
        img: "ghR9CsQ.jpeg",
        opts: {
            group: ["Cherry Bullet"],
            gen: ["gen4"]
        }
    },
    {
        name: "LIMELIGHT MiU",
        img: "t6qoDwF.jpeg",
        opts: {
            group: ["LIMELIGHT"],
            gen: ["gen4"]
        }
    },
    {
        name: "Everglow Mia",
        img: "9D1XiU4.jpeg",
        opts: {
            group: ["Everglow"],
            gen: ["gen4"]
        }
    },
    {
        name: "NewJeans Minji",
        img: "WlQor8p.jpeg",
        opts: {
            group: ["NewJeans"],
            gen: ["gen4"]
        }
    },
    {
        name: "Secret Number Minji",
        img: "xLx3UZd.png",
        opts: {
            group: ["Secret Number"],
            gen: ["gen4"]
        }
    },
    {
        name: "GWSN Minju",
        img: "Gh3eLd1.jpeg",
        opts: {
            group: ["GWSN"],
            gen: ["gen4"]
        }
    },
    {
        name: "IZ*ONE Minju",
        img: "P34Syds.png",
        opts: {
            group: ["IZ*ONE"],
            gen: ["gen4"]
        }
    },
    {
        name: "(G)I-dle Minnie",
        img: "uqvtN7Y.jpeg",
        opts: {
            group: ["(G)I-dle"],
            gen: ["gen4"]
        }
    },
    {
        name: "woo!ah! Minseo",
        img: "0BLlFET.jpeg",
        opts: {
            group: ["woo!ah!"],
            gen: ["gen4"]
        }
    },
    {
        name: "DreamNote Miso",
        img: "nluCDti.jpeg",
        opts: {
            group: ["DreamNote"],
            gen: ["gen4"]
        }
    },
    {
        name: "GWSN Miya",
        img: "MDcY9lW.jpeg",
        opts: {
            group: ["GWSN"],
            gen: ["gen4"]
        }
    },
    {
        name: "(G)I-dle Miyeon",
        img: "XMybvbH.jpeg",
        opts: {
            group: ["(G)I-dle"],
            gen: ["gen4"]
        }
    },
    {
        name: "Weeekly Monday",
        img: "tbEpRad.jpeg",
        opts: {
            group: ["Weeekly"],
            gen: ["gen4"]
        }
    },
    {
        name: "Billlie Moon Sua",
        img: "o6DbBam.jpeg",
        opts: {
            group: ["Billlie"],
            gen: ["gen4"]
        }
    },
    {
        name: "Fromis 9 Nagyung",
        img: "pcJXBJb.jpeg",
        opts: {
            group: ["Fromis 9"],
            gen: ["gen4"]
        }
    },
    {
        name: "IZ*ONE Nako",
        img: "3Ql89jt.png",
        opts: {
            group: ["IZ*ONE"],
            gen: ["gen4"]
        }
    },
    {
        name: "woo!ah! Nana",
        img: "z5JYUNc.jpeg",
        opts: {
            group: ["woo!ah!"],
            gen: ["gen4"]
        }
    },
    {
        name: "Lightsum Nayoung",
        img: "QWKyXl4.jpeg",
        opts: {
            group: ["Lightsum"],
            gen: ["gen4"]
        }
    },
    {
        name: "ILY:1 Nayu",
        img: "TBVsFmi.png",
        opts: {
            group: ["ILY:1"],
            gen: ["gen4"]
        }
    },
    {
        name: "Aespa Ningning",
        img: "zvTRLPD.jpeg",
        opts: {
            group: ["Aespa"],
            gen: ["gen4"]
        }
    },
    {
        name: "LOONA Olivia Hye",
        img: "xK2dn8s.jpeg",
        opts: {
            group: ["LOONA"],
            gen: ["gen4"]
        }
    },
    {
        name: "Everglow Onda",
        img: "ldQJqYq.jpeg",
        opts: {
            group: ["Everglow"],
            gen: ["gen4"]
        }
    },
    {
        name: "bugAboo Rainie",
        img: "JV1pmC0.jpeg",
        opts: {
            group: ["bugAboo"],
            gen: ["gen4"]
        }
    },
    {
        name: "IVE Rei",
        img: "tnmyE9S.jpeg",
        opts: {
            group: ["IVE"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cherry Bullet Remi",
        img: "c6cwmtZ.jpeg",
        opts: {
            group: ["Cherry Bullet"],
            gen: ["gen4"]
        }
    },
    {
        name: "H1-KEY Riina",
        img: "oo8HjWu.jpeg",
        opts: {
            group: ["H1-KEY"],
            gen: ["gen4"]
        }
    },
    {
        name: "ILY:1 Ririka",
        img: "xaiQNp1.png",
        opts: {
            group: ["ILY:1"],
            gen: ["gen4"]
        }
    },
    {
        name: "ILY:1 Rona",
        img: "nhfmbG5.png",
        opts: {
            group: ["ILY:1"],
            gen: ["gen4"]
        }
    },
    {
        name: "ITZY Ryujin",
        img: "cowp7cK.jpeg",
        opts: {
            group: ["ITZY"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nature Saebom",
        img: "Q2vhdMI.png",
        opts: {
            group: ["Nature"],
            gen: ["gen4"]
        }
    },
    {
        name: "Fromis 9 Saerom",
        img: "QBUCKpy.jpeg",
        opts: {
            group: ["Fromis 9"],
            gen: ["gen4"]
        }
    },
    {
        name: "IZ*ONE Sakura",
        img: "eaZ3LVk.jpeg",
        opts: {
            group: ["IZ*ONE"],
            gen: ["gen4"]
        }
    },
    {
        name: "Lightsum Sangah",
        img: "B4MXH2e.jpeg",
        opts: {
            group: ["Lightsum"],
            gen: ["gen4"]
        }
    },
    {
        name: "Pixy Satbyeol",
        img: "FM29cSI.jpeg",
        opts: {
            group: ["Pixy"],
            gen: ["gen4"]
        }
    },
    {
        name: "StayC Seeun",
        img: "itxLiZW.jpeg",
        opts: {
            group: ["StayC"],
            gen: ["gen4"]
        }
    },
    {
        name: "cignature Seline",
        img: "P9L2iM6.jpeg",
        opts: {
            group: ["cignature"],
            gen: ["gen4"]
        }
    },
    {
        name: "cignature Semi",
        img: "u2J7BeX.jpeg",
        opts: {
            group: ["cignature"],
            gen: ["gen4"]
        }
    },
    {
        name: "H1-KEY Seoi",
        img: "sV3B4VD.jpeg",
        opts: {
            group: ["H1-KEY"],
            gen: ["gen4"]
        }
    },
    {
        name: "GWSN Seokyoung",
        img: "zzBu01U.jpeg",
        opts: {
            group: ["GWSN"],
            gen: ["gen4"]
        }
    },
    {
        name: "GWSN Seoryoung",
        img: "BarWRMK.jpeg",
        opts: {
            group: ["GWSN"],
            gen: ["gen4"]
        }
    },
    {
        name: "Fromis 9 Seoyeon",
        img: "Xrfy3lS.jpeg",
        opts: {
            group: ["Fromis 9"],
            gen: ["gen4"]
        }
    },
    {
        name: "Billlie Sheon",
        img: "BVVD16R.jpeg",
        opts: {
            group: ["Billlie"],
            gen: ["gen4"]
        }
    },
    {
        name: "Weeekly Shin Jiyoon",
        img: "ysrCJoA.jpeg",
        opts: {
            group: ["Weeekly"],
            gen: ["gen4"]
        }
    },
    {
        name: "(G)I-dle Shuhua",
        img: "Qdr4R8k.jpeg",
        opts: {
            group: ["(G)I-dle"],
            gen: ["gen4"]
        }
    },
    {
        name: "StayC Sieun",
        img: "4BQ1fOw.jpeg",
        opts: {
            group: ["StayC"],
            gen: ["gen4"]
        }
    },
    {
        name: "Everglow Sihyeon",
        img: "mcUJPQo.jpeg",
        opts: {
            group: ["Everglow"],
            gen: ["gen4"]
        }
    },
    {
        name: "H1-KEY Sitala",
        img: "9j3p0sQ.jpeg",
        opts: {
            group: ["H1-KEY"],
            gen: ["gen4"]
        }
    },
    {
        name: "GWSN SoSo",
        img: "MCxJuQI.jpeg",
        opts: {
            group: ["GWSN"],
            gen: ["gen4"]
        }
    },
    {
        name: "Weeekly Soeun",
        img: "5VHXXX9.jpeg",
        opts: {
            group: ["Weeekly"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nature Sohee",
        img: "S8kogXh.jpeg",
        opts: {
            group: ["Nature"],
            gen: ["gen4"]
        }
    },
    {
        name: "Rocket Punch Sohee",
        img: "ZLWJdWL.jpeg",
        opts: {
            group: ["Rocket Punch"],
            gen: ["gen4"]
        }
    },
    {
        name: "Tri.be SongSun",
        img: "gPXlpkp.png",
        opts: {
            group: ["Tri.be"],
            gen: ["gen4"]
        }
    },
    {
        name: "woo!ah! Songyee",
        img: "jbpJSjX.png",
        opts: {
            group: ["woo!ah!"],
            gen: ["gen4"]
        }
    },
    {
        name: "Secret Number Soodam",
        img: "R9IEFX8.png",
        opts: {
            group: ["Secret Number"],
            gen: ["gen4"]
        }
    },
    {
        name: "(G)I-dle Soojin",
        img: "OwYItiW.jpeg",
        opts: {
            group: ["(G)I-dle"],
            gen: ["gen4"]
        }
    },
    {
        name: "woo!ah! Sora",
        img: "IcM5rvi.jpeg",
        opts: {
            group: ["woo!ah!"],
            gen: ["gen4"]
        }
    },
    {
        name: "Pixy Sua",
        img: "YaCIUiX.png",
        opts: {
            group: ["Pixy"],
            gen: ["gen4"]
        }
    },
    {
        name: "LIMELIGHT Suhye",
        img: "Wzh3dxC.jpeg",
        opts: {
            group: ["LIMELIGHT"],
            gen: ["gen4"]
        }
    },
    {
        name: "Billlie Suhyeon",
        img: "KP9mD0a.jpeg",
        opts: {
            group: ["Billlie"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nmixx Sullyoon",
        img: "Xzpy7WP.jpeg",
        opts: {
            group: ["Nmixx"],
            gen: ["gen4"]
        }
    },
    {
        name: "DreamNote Sumin",
        img: "43evPlY.jpeg",
        opts: {
            group: ["DreamNote"],
            gen: ["gen4"]
        }
    },
    {
        name: "StayC Sumin",
        img: "pKmyPO6.jpeg",
        opts: {
            group: ["StayC"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nature Sunshine",
        img: "AVR69wD.jpeg",
        opts: {
            group: ["Nature"],
            gen: ["gen4"]
        }
    },
    {
        name: "Rocket Punch Suyun",
        img: "zjSoRLp.jpeg",
        opts: {
            group: ["Rocket Punch"],
            gen: ["gen4"]
        }
    },
    {
        name: "Purple Kiss Swan",
        img: "nu2C9mE.jpeg",
        opts: {
            group: ["Purple Kiss"],
            gen: ["gen4"]
        }
    },
    {
        name: "Billlie Tsuki",
        img: "dmrJFz9.jpeg",
        opts: {
            group: ["Billlie"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nature Uchae",
        img: "uZywcNI.jpeg",
        opts: {
            group: ["Nature"],
            gen: ["gen4"]
        }
    },
    {
        name: "LOONA Vivi",
        img: "JRJ1z7J.jpeg",
        opts: {
            group: ["LOONA"],
            gen: ["gen4"]
        }
    },
    {
        name: "Aespa Winter",
        img: "uyH3Fk2.jpeg",
        opts: {
            group: ["Aespa"],
            gen: ["gen4"]
        }
    },
    {
        name: "IZ*ONE Wonyoung",
        img: "ffiYmls.jpeg",
        opts: {
            group: ["IZ*ONE"],
            gen: ["gen4"]
        }
    },
    {
        name: "woo!ah! Wooyeon",
        img: "klfi3gm.jpeg",
        opts: {
            group: ["woo!ah!"],
            gen: ["gen4"]
        }
    },
    {
        name: "Kep1er XiaoTing",
        img: "6mKGQai.jpeg",
        opts: {
            group: ["Kep1er"],
            gen: ["gen4"]
        }
    },
    {
        name: "IZ*ONE YENA",
        img: "Iu3kw6J.jpeg",
        opts: {
            group: ["IZ*ONE"],
            gen: ["gen4"]
        }
    },
    {
        name: "ITZY Yeji",
        img: "v34n03f.jpeg",
        opts: {
            group: ["ITZY"],
            gen: ["gen4"]
        }
    },
    {
        name: "H1-KEY Yel",
        img: "i5hCOlG.jpeg",
        opts: {
            group: ["H1-KEY"],
            gen: ["gen4"]
        }
    },
    {
        name: "LOONA Yeojin",
        img: "PxM3e82.jpeg",
        opts: {
            group: ["LOONA"],
            gen: ["gen4"]
        }
    },
    {
        name: "Rocket Punch Yeonhee",
        img: "pvfUDf0.jpeg",
        opts: {
            group: ["Rocket Punch"],
            gen: ["gen4"]
        }
    },
    {
        name: "Everglow Yiren",
        img: "3OJnqr6.jpeg",
        opts: {
            group: ["Everglow"],
            gen: ["gen4"]
        }
    },
    {
        name: "StayC Yoon",
        img: "d0JkzEi.jpeg",
        opts: {
            group: ["StayC"],
            gen: ["gen4"]
        }
    },
    {
        name: "mimiirose Yoon Jia",
        img: "deltl13.jpeg",
        opts: {
            group: ["mimiirose"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Yoon Seoyeon",
        img: "W9s8QlT.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "bugAboo Yoona",
        img: "SxPWVXv.jpeg",
        opts: {
            group: ["bugAboo"],
            gen: ["gen4"]
        }
    },
    {
        name: "UNI.T Yoonjo",
        img: "OdCgmz0.jpeg",
        opts: {
            group: ["UNI.T"],
            gen: ["gen4"]
        }
    },
    {
        name: "DreamNote Youi",
        img: "htfKw3r.jpeg",
        opts: {
            group: ["DreamNote"],
            gen: ["gen4"]
        }
    },
    {
        name: "Kep1er Youngeun",
        img: "mJi6Ydw.jpeg",
        opts: {
            group: ["Kep1er"],
            gen: ["gen4"]
        }
    },
    {
        name: "Lightsum Yujeong",
        img: "DSuJ9Fe.jpeg",
        opts: {
            group: ["Lightsum"],
            gen: ["gen4"]
        }
    },
    {
        name: "IZ*ONE Yujin",
        img: "vAir9sK.jpeg",
        opts: {
            group: ["IZ*ONE"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cherry Bullet Yuju",
        img: "7nuHrwk.jpeg",
        opts: {
            group: ["Cherry Bullet"],
            gen: ["gen4"]
        }
    },
    {
        name: "Purple Kiss Yuki",
        img: "TQUCZcw.jpeg",
        opts: {
            group: ["Purple Kiss"],
            gen: ["gen4"]
        }
    },
    {
        name: "Yukika",
        img: "BuRyLZf.jpeg",
        opts: {
            group: ["soloist"],
            gen: ["gen4"]
        }
    },
    {
        name: "ITZY Yuna",
        img: "Ci4oipF.jpeg",
        opts: {
            group: ["ITZY"],
            gen: ["gen4"]
        }
    },
    {
        name: "LE SSERAFIM Yunjin",
        img: "HWB9vGc.jpeg",
        opts: {
            group: ["LE SSERAFIM"],
            gen: ["gen4"]
        }
    },
    {
        name: "Rocket Punch Yunkyoung",
        img: "PwcvE8N.jpeg",
        opts: {
            group: ["Rocket Punch"],
            gen: ["gen4"]
        }
    },
    {
        name: "(G)I-dle Yuqi",
        img: "0Sv9uJB.jpeg",
        opts: {
            group: ["(G)I-dle"],
            gen: ["gen4"]
        }
    },
    {
        name: "LOONA Yves",
        img: "UsZ7cPu.jpeg",
        opts: {
            group: ["LOONA"],
            gen: ["gen4"]
        }
    },
    {
        name: "bugAboo Zin",
        img: "RDa2WZg.jpeg",
        opts: {
            group: ["bugAboo"],
            gen: ["gen4"]
        }
    },
    {
        name: "Secret Number Zuu",
        img: "9a0eCn2.png",
        opts: {
            group: ["Secret Number"],
            gen: ["gen4"]
        }
    },
	{
        name: "LE SSERAFIM Eunchae",
        img: "xJkFNTR.jpg",
        opts: {
            group: ["LE SSERAFIM"],
            gen: ["gen4"]
        }
    }
];
