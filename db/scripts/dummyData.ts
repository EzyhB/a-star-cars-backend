const carDB = [
  {
    id: "radomIDGen2000",
    name: "BMW 2 Series Gran Coupe",
    subName: "1.5L M Sport 218i",
    image:
      "https://cdn.discordapp.com/attachments/786789211315109927/1023647229191397456/unknown.png",
    price: 31800,
    miles: 2597,
    reg: 2022,
    trans: "Automatic",
    fuel: "Petrol",
    seats: 5,
    engine: 1.5,
    bodyType: "4 door Saloon",
    exteriorColour: "Storm Bay",
    driveType: "Front wheel drive",
    regNum: "FD22 GYZ",
    previousOwners: 1,
    numOfKeys: 1,
    topSpeed: 134,
    acceleration: 9.2,
    power: 134,
  },
  {
    id: "radomIDGen2001",
    name: "Audi e-tron",
    subName: "S line",
    image:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025036196226797628/unknown.png",
    price: 56250,
    miles: 12494,
    reg: 2020,
    trans: "Automatic",
    fuel: "Electric",
    seats: 5,
    engine: 0,
    bodyType: "5 door SUV",
    exteriorColour: "Black",
    driveType: "Four wheel drive",
    regNum: "LS70 CDO",
    previousOwners: 1,
    numOfKeys: 2,
    topSpeed: 124,
    acceleration: 5.7,
    power: 402,
  },
  {
    id: "radomIDGen2002",
    name: "Mercedes-Benz CLA Class",
    subName: "2L AMG CLA45",
    image:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025037978818592899/unknown.png",
    price: 33850,
    miles: 22285,
    reg: 2018,
    trans: "Automatic",
    fuel: "Petrol",
    seats: 5,
    engine: 2,
    bodyType: "4 door Saloon",
    exteriorColour: "Grey",
    driveType: "Four wheel drive",
    regNum: "DY18 VMM",
    previousOwners: 2,
    numOfKeys: 2,
    topSpeed: 155,
    acceleration: 4.2,
    power: 376,
  },
];

const carImageDB = [
  {
    id: "radomIDGen2000",
    image1:
      "https://cdn.discordapp.com/attachments/786789211315109927/1023647229191397456/unknown.png",
    image2:
      "https://cdn.discordapp.com/attachments/786789211315109927/1023647267795775558/unknown.png",
    image3:
      "https://cdn.discordapp.com/attachments/786789211315109927/1023647288389800047/unknown.png",
    image4:
      "https://cdn.discordapp.com/attachments/786789211315109927/1023647322187513966/unknown.png",
    image5:
      "https://cdn.discordapp.com/attachments/786789211315109927/1023647352248090815/unknown.png",
    image6:
      "https://cdn.discordapp.com/attachments/786789211315109927/1023647380471558174/unknown.png",
    image7:
      "https://cdn.discordapp.com/attachments/786789211315109927/1023647412264374433/unknown.png",
    image8:
      "https://cdn.discordapp.com/attachments/786789211315109927/1023647441142153308/unknown.png",
    image9:
      "https://cdn.discordapp.com/attachments/786789211315109927/1023647465934688376/unknown.png",
    image10:
      "https://cdn.discordapp.com/attachments/786789211315109927/1023647490374905967/unknown.png",
    image11:
      "https://cdn.discordapp.com/attachments/786789211315109927/1023647513175134279/unknown.png",
    image12:
      "https://cdn.discordapp.com/attachments/786789211315109927/1023647542686257193/unknown.png",
  },
  {
    id: "radomIDGen2001",
    image1:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025036196226797628/unknown.png",
    image2:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025036223921799308/unknown.png",
    image3:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025036243240751144/unknown.png",
    image4:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025036273947262996/unknown.png",
    image5:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025036289885622293/unknown.png",
    image6:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025036316980809818/unknown.png",
    image7:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025036350224867399/unknown.png",
    image8:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025036399512133663/unknown.png",
    image9:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025036430147338320/unknown.png",
    image10:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025036442608607242/unknown.png",
    image11:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025036463118749817/unknown.png",
    image12:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025036514897436742/unknown.png",
  },
  {
    id: "radomIDGen2002",
    image1:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025037978818592899/unknown.png",
    image2:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025038001174233198/unknown.png",
    image3:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025038023613759508/unknown.png",
    image4:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025038044597854348/unknown.png",
    image5:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025038061626732584/unknown.png",
    image6:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025038082971549757/unknown.png",
    image7:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025038099526467644/unknown.png",
    image8:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025038116605661214/unknown.png",
    image9:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025038134200782930/unknown.png",
    image10:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025038153607819264/unknown.png",
    image11:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025038173539151932/unknown.png",
    image12:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025038201414504498/unknown.png",
  },
];

const postman = {
  name: "Ford Kuga",
  subName: "2.5L ST-Line X EcoBoost Duratec",
  price: 31000,
  miles: 15123,
  reg: 2020,
  trans: "Automatic",
  fuel: "Petrol",
  seats: 5,
  engine: 2.5,
  bodyType: "5 door SUV",
  exteriorColour: "Grey",
  driveType: "Front wheel drive",
  regNum: "YR20 YXU",
  previousOwners: 1,
  numOfKeys: 2,
  topSpeed: 125,
  acceleration: 9.2,
  power: 222,
  image: {
    image1:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025101243712028692/unknown.png",
    image2:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025101267749572668/unknown.png",
    image3:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025101289518022656/unknown.png",
    image4:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025101308723744808/unknown.png",
    image5:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025101323722563654/unknown.png",
    image6:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025101345885274132/unknown.png",
    image7:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025101361760718888/unknown.png",
    image8:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025101380467294280/unknown.png",
    image9:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025101396946731048/unknown.png",
    image10:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025101421743456376/unknown.png",
    image11:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025101437371428945/unknown.png",
    image12:
      "https://cdn.discordapp.com/attachments/786789211315109927/1025101456010919988/unknown.png",
  },
};

export { carDB, carImageDB };
