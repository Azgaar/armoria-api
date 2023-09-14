const tinctures = {
  field: {metals: 32, colours: 49, stains: 1, patterns: 14},
  division: {metals: 35, colours: 49, stains: 1, patterns: 8},
  charge: {metals: 16, colours: 24, stains: 1, patterns: 0},
  metals: {argent: 3, or: 2},
  colours: {gules: 5, azure: 4, sable: 3, purpure: 3, vert: 2},
  stains: {murrey: 1, sanguine: 1, tenné: 1},
  patterns: {
    semy: 8,
    ermine: 6,
    vair: 4,
    counterVair: 1,
    vairInPale: 1,
    vairEnPointe: 2,
    vairAncien: 2,
    potent: 2,
    counterPotent: 1,
    potentInPale: 1,
    potentEnPointe: 1,
    chequy: 8,
    lozengy: 5,
    fusily: 2,
    pally: 8,
    barry: 10,
    gemelles: 1,
    bendy: 8,
    bendySinister: 4,
    palyBendy: 2,
    barryBendy: 1,
    pappellony: 2,
    pappellony2: 3,
    scaly: 1,
    plumetty: 1,
    masoned: 6,
    fretty: 3,
    grillage: 1,
    chainy: 1,
    maily: 2,
    honeycombed: 1
  }
};

const colors = {
  argent: "#fafafa",
  or: "#ffe066",
  gules: "#d7374a",
  sable: "#333333",
  azure: "#377cd7",
  vert: "#26c061",
  purpure: "#522d5b",
  murrey: "#85185b",
  sanguine: "#b63a3a",
  tenné: "#cc7f19"
};

const shields = {
  types: {basic: 10, regional: 2, historical: 1, specific: 1, banner: 1, simple: 2, fantasy: 1, middleEarth: 0},
  basic: {heater: 12, spanish: 6, french: 1},
  regional: {horsehead: 1, horsehead2: 1, polish: 1, hessen: 1, swiss: 1},
  historical: {boeotian: 1, roman: 2, kite: 1, oldFrench: 5, renaissance: 2, baroque: 2},
  specific: {targe: 1, targe2: 0, pavise: 5, wedged: 10},
  banner: {flag: 1, pennon: 0, guidon: 0, banner: 0, dovetail: 1, gonfalon: 5, pennant: 0},
  simple: {round: 12, oval: 6, vesicaPiscis: 1, square: 1, diamond: 2, no: 0},
  middleEarth: {noldor: 1, gondor: 1, easterling: 1, erebor: 1, ironHills: 1, urukHai: 1, moriaOrc: 1},
  fantasy: {fantasy1: 2, fantasy2: 2, fantasy3: 1, fantasy4: 1, fantasy5: 3}
};

const positions = {
  conventional: {
    e: 20,
    abcdefgzi: 3,
    beh: 3,
    behdf: 2,
    acegi: 1,
    kn: 3,
    bhdf: 1,
    jeo: 1,
    abc: 3,
    jln: 6,
    jlh: 3,
    kmo: 2,
    jleh: 1,
    def: 3,
    abcpqh: 4,
    ABCDEFGHIJKL: 1
  },
  complex: {e: 40, beh: 1, kn: 1, jeo: 1, abc: 2, jln: 7, jlh: 2, def: 1, abcpqh: 1},
  divisions: {
    perPale: {e: 15, pq: 5, jo: 2, jl: 2, ABCDEFGHIJKL: 1},
    perFess: {e: 12, kn: 4, jkl: 2, gizgiz: 1, jlh: 3, kmo: 1, ABCDEFGHIJKL: 1},
    perBend: {e: 5, lm: 5, bcfdgh: 1},
    perBendSinister: {e: 1, jo: 1},
    perCross: {e: 4, jlmo: 1, j: 1, jo: 2, jl: 1},
    perChevron: {e: 1, jlh: 1, dfk: 1, dfbh: 2, bdefh: 1},
    perChevronReversed: {e: 1, mok: 2, dfh: 2, dfbh: 1, bdefh: 1},
    perSaltire: {bhdf: 8, e: 3, abcdefgzi: 1, bh: 1, df: 1, ABCDEFGHIJKL: 1},
    perPile: {ee: 3, be: 2, abceh: 1, abcabc: 1, jleh: 1}
  },
  inescutcheon: {e: 4, jln: 1}
};

const lines = {
  straight: 50,
  wavy: 8,
  engrailed: 4,
  invecked: 3,
  rayonne: 3,
  embattled: 1,
  raguly: 1,
  urdy: 1,
  dancetty: 1,
  indented: 2,
  dentilly: 1,
  bevilled: 1,
  angled: 1,
  flechy: 1,
  barby: 1,
  enclavy: 1,
  escartely: 1,
  arched: 2,
  archedReversed: 1,
  nowy: 1,
  nowyReversed: 1,
  embattledGhibellin: 1,
  embattledNotched: 1,
  embattledGrady: 1,
  dovetailedIndented: 1,
  dovetailed: 1,
  potenty: 1,
  potentyDexter: 1,
  potentySinister: 1,
  nebuly: 2,
  seaWaves: 1,
  dragonTeeth: 1,
  firTrees: 1
};

const divisions = {
  variants: {
    perPale: 5,
    perFess: 5,
    perBend: 2,
    perBendSinister: 1,
    perChevron: 1,
    perChevronReversed: 1,
    perCross: 5,
    perPile: 1,
    perSaltire: 1,
    gyronny: 1,
    chevronny: 1
  },
  perPale: lines,
  perFess: lines,
  perBend: lines,
  perBendSinister: lines,
  perChevron: lines,
  perChevronReversed: lines,
  perCross: {
    straight: 20,
    wavy: 5,
    engrailed: 4,
    invecked: 3,
    rayonne: 1,
    embattled: 1,
    raguly: 1,
    urdy: 1,
    indented: 2,
    dentilly: 1,
    bevilled: 1,
    angled: 1,
    embattledGhibellin: 1,
    embattledGrady: 1,
    dovetailedIndented: 1,
    dovetailed: 1,
    potenty: 1,
    potentyDexter: 1,
    potentySinister: 1,
    nebuly: 1
  },
  perPile: lines
};

const ordinaries = {
  lined: {
    pale: 7,
    fess: 5,
    bend: 3,
    bendSinister: 2,
    chief: 5,
    bar: 2,
    gemelle: 1,
    fessCotissed: 1,
    fessDoubleCotissed: 1,
    bendlet: 2,
    bendletSinister: 1,
    terrace: 3,
    cross: 6,
    crossParted: 1,
    saltire: 2,
    saltireParted: 1
  },
  straight: {
    bordure: 8,
    orle: 4,
    mount: 1,
    point: 2,
    flaunches: 1,
    gore: 1,
    gyron: 1,
    quarter: 1,
    canton: 2,
    pall: 3,
    pallReversed: 2,
    chevron: 4,
    chevronReversed: 3,
    pile: 2,
    pileInBend: 2,
    pileInBendSinister: 1,
    piles: 1,
    pilesInPoint: 2,
    label: 1
  },
  data: {
    bar: {
      positionsOn: {defdefdef: 1},
      positionsOff: {abc: 2, abcgzi: 1, jlh: 5, bgi: 2, ach: 1}
    },
    bend: {
      positionsOn: {ee: 2, jo: 1, joe: 1},
      positionsOff: {ccg: 2, ccc: 1}
    },
    bendSinister: {
      positionsOn: {ee: 1, lm: 1, lem: 4},
      positionsOff: {aai: 2, aaa: 1}
    },
    bendlet: {
      positionsOn: {joejoejoe: 1},
      positionsOff: {ccg: 2, ccc: 1}
    },
    bendletSinister: {
      positionsOn: {lemlemlem: 1},
      positionsOff: {aai: 2, aaa: 1}
    },
    bordure: {
      positionsOn: {ABCDEFGHIJKL: 1},
      positionsOff: {e: 4, jleh: 2, kenken: 1, peqpeq: 1}
    },
    canton: {
      positionsOn: {yyyy: 1},
      positionsOff: {e: 5, beh: 1, def: 1, bdefh: 1, kn: 1}
    },
    chevron: {
      positionsOn: {ach: 3, hhh: 1}
    },
    chevronReversed: {
      positionsOff: {bbb: 1}
    },
    chief: {
      positionsOn: {abc: 5, bbb: 1},
      positionsOff: {emo: 2, emoz: 1, ez: 2}
    },
    cross: {
      positionsOn: {eeee: 1, behdfbehdf: 3, behbehbeh: 2},
      positionsOff: {acgi: 1}
    },
    crossParted: {
      positionsOn: {e: 5, ee: 1}
    },
    fess: {
      positionsOn: {ee: 1, def: 3},
      positionsOff: {abc: 3, abcz: 1}
    },
    fessCotissed: {
      positionsOn: {ee: 1, def: 3}
    },
    fessDoubleCotissed: {
      positionsOn: {ee: 1, defdef: 3}
    },
    flaunches: {
      positionsOff: {e: 3, kn: 1, beh: 3}
    },
    gemelle: {
      positionsOff: {abc: 1}
    },
    gyron: {
      positionsOff: {bh: 1}
    },
    label: {
      positionsOff: {defgzi: 2, eh: 3, defdefhmo: 1, egiegi: 1, pqn: 5}
    },
    mount: {
      positionsOff: {e: 5, def: 1, bdf: 3}
    },
    orle: {
      positionsOff: {e: 4, jleh: 1, kenken: 1, peqpeq: 1}
    },
    pale: {
      positionsOn: {ee: 12, beh: 10, kn: 3, bb: 1},
      positionsOff: {yyy: 1}
    },
    pall: {
      positionsOn: {ee: 1, jleh: 5, jlhh: 3},
      positionsOff: {BCKFEILGJbdmfo: 1}
    },
    pallReversed: {
      positionsOn: {ee: 1, bemo: 5},
      positionsOff: {aczac: 1}
    },
    pile: {
      positionsOn: {bbb: 1},
      positionsOff: {acdfgi: 1, acac: 1}
    },
    pileInBend: {
      positionsOn: {eeee: 1, eeoo: 1},
      positionsOff: {cg: 1}
    },
    pileInBendSinister: {
      positionsOn: {eeee: 1, eemm: 1},
      positionsOff: {ai: 1}
    },
    point: {
      positionsOff: {e: 2, def: 1, bdf: 3, acbdef: 1}
    },
    quarter: {
      positionsOn: {jjj: 1},
      positionsOff: {e: 1}
    },
    saltire: {
      positionsOn: {ee: 5, jlemo: 1}
    },
    saltireParted: {
      positionsOn: {e: 5, ee: 1}
    },
    terrace: {
      positionsOff: {e: 5, def: 1, bdf: 3}
    }
  }
};

const chargeData = {
  agnusDei: {
    colors: 2,
    sinister: true
  },
  angel: {
    colors: 2,
    positions: {e: 1}
  },
  anvil: {
    sinister: true
  },
  apple: {
    colors: 2
  },
  arbalest: {
    colors: 3,
    reversed: true
  },
  archer: {
    colors: 3,
    sinister: true
  },
  armEmbowedHoldingSabre: {
    colors: 3,
    sinister: true
  },
  armEmbowedVambraced: {
    sinister: true
  },
  armEmbowedVambracedHoldingSword: {
    colors: 3,
    sinister: true
  },
  armillarySphere: {
    positions: {e: 1}
  },
  arrow: {
    colors: 3,
    reversed: true
  },
  arrowsSheaf: {
    colors: 3,
    reversed: true
  },
  axe: {
    colors: 2,
    sinister: true
  },
  badgerStatant: {
    colors: 2,
    sinister: true
  },
  banner: {
    colors: 2
  },
  basilisk: {
    colors: 3,
    sinister: true
  },
  bearPassant: {
    colors: 3,
    sinister: true
  },
  bearRampant: {
    colors: 3,
    sinister: true
  },
  bee: {
    colors: 3,
    reversed: true
  },
  bell: {
    colors: 2
  },
  boarHeadErased: {
    colors: 3,
    sinister: true
  },
  boarRampant: {
    colors: 3,
    sinister: true,
    positions: {e: 12, beh: 1, kn: 1, jln: 2}
  },
  boat: {
    colors: 2
  },
  bookClosed: {
    colors: 3,
    sinister: true
  },
  bookClosed2: {
    sinister: true
  },
  bookOpen: {
    colors: 3
  },
  bow: {
    sinister: true
  },
  bowWithArrow: {
    colors: 3,
    reversed: true
  },
  bowWithThreeArrows: {
    colors: 3
  },
  bucket: {
    colors: 2
  },
  bugleHorn: {
    colors: 2
  },
  bugleHorn2: {
    colors: 2
  },
  bullHeadCaboshed: {
    colors: 2
  },
  bullPassant: {
    colors: 3,
    sinister: true
  },
  butterfly: {
    colors: 3,
    reversed: true
  },
  camel: {
    colors: 2,
    sinister: true
  },
  cancer: {
    reversed: true
  },
  cannon: {
    colors: 2,
    sinister: true
  },
  caravel: {
    colors: 3,
    sinister: true
  },
  castle: {
    colors: 2
  },
  castle2: {
    colors: 3
  },
  catPassantGuardant: {
    colors: 2,
    sinister: true
  },
  cavalier: {
    colors: 3,
    sinister: true,
    positions: {e: 1}
  },
  centaur: {
    colors: 3,
    sinister: true
  },
  chalice: {
    colors: 2
  },
  cinquefoil: {
    reversed: true
  },
  cock: {
    colors: 3,
    sinister: true
  },
  comet: {
    reversed: true
  },
  cowStatant: {
    colors: 3,
    sinister: true
  },
  cossack: {
    colors: 3,
    sinister: true
  },
  crescent: {
    reversed: true
  },
  crocodile: {
    colors: 2,
    sinister: true
  },
  crosier: {
    sinister: true
  },
  crossbow: {
    colors: 3,
    sinister: true
  },
  crossGamma: {
    sinister: true
  },
  crossLatin: {
    reversed: true
  },
  crossTau: {
    reversed: true
  },
  crossTriquetra: {
    reversed: true
  },
  crown: {
    colors: 2,
    positions: {
      e: 10,
      abcdefgzi: 1,
      beh: 3,
      behdf: 2,
      acegi: 1,
      kn: 1,
      pq: 2,
      abc: 1,
      jln: 4,
      jleh: 1,
      def: 2,
      abcpqh: 3
    }
  },
  crown2: {
    colors: 3,
    positions: {
      e: 10,
      abcdefgzi: 1,
      beh: 3,
      behdf: 2,
      acegi: 1,
      kn: 1,
      pq: 2,
      abc: 1,
      jln: 4,
      jleh: 1,
      def: 2,
      abcpqh: 3
    }
  },
  deerHeadCaboshed: {
    colors: 2
  },
  dolphin: {
    colors: 2,
    sinister: true
  },
  donkeyHeadCaboshed: {
    colors: 2
  },
  dove: {
    colors: 2,
    natural: "argent",
    sinister: true
  },
  doveDisplayed: {
    colors: 2,
    natural: "argent",
    sinister: true
  },
  dragonfly: {
    colors: 2,
    reversed: true
  },
  dragonPassant: {
    colors: 3,
    sinister: true
  },
  dragonRampant: {
    colors: 3,
    sinister: true
  },
  drakkar: {
    colors: 3,
    sinister: true
  },
  drawingCompass: {
    sinister: true
  },
  drum: {
    colors: 3
  },
  duck: {
    colors: 3,
    sinister: true
  },
  eagle: {
    colors: 3,
    sinister: true,
    positions: {e: 15, beh: 1, kn: 1, abc: 1, jlh: 2, def: 2, pq: 1}
  },
  eagleTwoHeads: {
    colors: 3
  },
  elephant: {
    colors: 2,
    sinister: true
  },
  elephantHeadErased: {
    colors: 2,
    sinister: true
  },
  falchion: {
    colors: 2,
    reversed: true
  },
  falcon: {
    colors: 3,
    sinister: true
  },
  fan: {
    colors: 2,
    reversed: true
  },
  fasces: {
    colors: 3,
    sinister: true
  },
  feather: {
    sinister: true
  },
  flamberge: {
    colors: 2,
    reversed: true
  },
  flangedMace: {
    reversed: true
  },
  fly: {
    colors: 3,
    reversed: true
  },
  foot: {
    sinister: true
  },
  fountain: {
    natural: "azure"
  },
  frog: {
    reversed: true
  },
  garb: {
    colors: 2,
    natural: "or",
    positions: {e: 1, def: 3, abc: 2, beh: 1, kn: 1, jln: 3, jleh: 1, abcpqh: 1, joe: 1, lme: 1}
  },
  gauntlet: {
    sinister: true,
    reversed: true
  },
  goat: {
    colors: 3,
    sinister: true
  },
  goutte: {
    reversed: true
  },
  grapeBunch: {
    colors: 3,
    sinister: true
  },
  grapeBunch2: {
    colors: 3,
    sinister: true
  },
  grenade: {
    colors: 2
  },
  greyhoundCourant: {
    colors: 3,
    sinister: true,
    positions: {e: 10, def: 1, abc: 1, bdefh: 1, jlh: 1, abcpqh: 1}
  },
  greyhoundRampant: {
    colors: 2,
    sinister: true,
    positions: {e: 10, def: 1, abc: 1, bdefh: 1, jlh: 1, abcpqh: 1}
  },
  greyhoundSejant: {
    colors: 3,
    sinister: true
  },
  griffinPassant: {
    colors: 3,
    sinister: true,
    positions: {e: 10, def: 2, abc: 2, bdefh: 1, kn: 1, jlh: 2, abcpqh: 1}
  },
  griffinRampant: {
    colors: 3,
    sinister: true,
    positions: {e: 10, def: 1, abc: 1, bdefh: 1, jlh: 1, abcpqh: 1}
  },
  hand: {
    sinister: true,
    reversed: true,
    positions: {e: 10, jln: 2, kn: 1, jeo: 1, abc: 2, pqe: 1}
  },
  harp: {
    colors: 2,
    sinister: true
  },
  hatchet: {
    colors: 2,
    sinister: true
  },
  head: {
    colors: 2,
    sinister: true,
    positions: {e: 1}
  },
  headWreathed: {
    colors: 3,
    sinister: true,
    positions: {e: 1}
  },
  hedgehog: {
    colors: 3,
    sinister: true
  },
  helmet: {
    sinister: true
  },
  helmetCorinthian: {
    colors: 3,
    sinister: true
  },
  helmetGreat: {
    sinister: true
  },
  helmetZischagge: {
    sinister: true
  },
  heron: {
    colors: 2,
    sinister: true
  },
  hindStatant: {
    colors: 2,
    sinister: true
  },
  hook: {
    sinister: true
  },
  horseHeadCouped: {
    sinister: true
  },
  horsePassant: {
    colors: 2,
    sinister: true
  },
  horseRampant: {
    colors: 3,
    sinister: true
  },
  horseSalient: {
    colors: 2,
    sinister: true
  },
  horseshoe: {
    reversed: true
  },
  hourglass: {
    colors: 3
  },
  ladybird: {
    colors: 3,
    reversed: true
  },
  lamb: {
    colors: 2,
    sinister: true
  },
  lambPassantReguardant: {
    colors: 2,
    sinister: true
  },
  lanceWithBanner: {
    colors: 3,
    sinister: true
  },
  laurelWreath: {
    colors: 2
  },
  lighthouse: {
    colors: 3
  },
  lionHeadCaboshed: {
    colors: 2
  },
  lionHeadErased: {
    colors: 2,
    sinister: true
  },
  lionPassant: {
    colors: 3,
    sinister: true,
    positions: {e: 10, def: 1, abc: 1, bdefh: 1, jlh: 1, abcpqh: 1}
  },
  lionPassantGuardant: {
    colors: 3,
    sinister: true
  },
  lionRampant: {
    colors: 3,
    sinister: true,
    positions: {e: 10, def: 2, abc: 2, bdefh: 1, kn: 1, jlh: 2, abcpqh: 1}
  },
  lionSejant: {
    colors: 3,
    sinister: true
  },
  lizard: {
    reversed: true
  },
  lochaberAxe: {
    colors: 2,
    sinister: true
  },
  log: {
    sinister: true
  },
  lute: {
    colors: 2,
    sinister: true
  },
  lymphad: {
    colors: 3,
    sinister: true,
    positions: {e: 1}
  },
  mace: {
    colors: 2
  },
  maces: {
    colors: 2
  },
  mallet: {
    colors: 2
  },
  mantle: {
    colors: 3
  },
  martenCourant: {
    colors: 3,
    sinister: true
  },
  mascle: {
    positions: {
      e: 15,
      abcdefgzi: 3,
      beh: 3,
      bdefh: 4,
      acegi: 1,
      kn: 3,
      joe: 2,
      abc: 3,
      jlh: 8,
      jleh: 1,
      df: 3,
      abcpqh: 4,
      pqe: 3,
      eknpq: 3
    }
  },
  mastiffStatant: {
    colors: 3,
    sinister: true
  },
  mitre: {
    colors: 3
  },
  monk: {
    sinister: true
  },
  moonInCrescent: {
    sinister: true
  },
  mullet: {
    reversed: true
  },
  mullet7: {
    reversed: true
  },
  oak: {
    colors: 3
  },
  orb: {
    colors: 3
  },
  ouroboros: {
    sinister: true
  },
  owl: {
    colors: 2,
    sinister: true
  },
  owlDisplayed: {
    colors: 2
  },
  palmTree: {
    colors: 3
  },
  parrot: {
    colors: 2,
    sinister: true
  },
  peacock: {
    colors: 3,
    sinister: true
  },
  peacockInPride: {
    colors: 3,
    sinister: true
  },
  pear: {
    colors: 2
  },
  pegasus: {
    colors: 3,
    sinister: true
  },
  pike: {
    colors: 2,
    sinister: true
  },
  pineTree: {
    colors: 2
  },
  plaice: {
    colors: 2,
    sinister: true
  },
  plough: {
    colors: 2,
    sinister: true
  },
  ploughshare: {
    sinister: true
  },
  porcupine: {
    colors: 2,
    sinister: true
  },
  portcullis: {
    colors: 2
  },
  rabbitSejant: {
    colors: 2,
    sinister: true
  },
  rake: {
    reversed: true
  },
  rapier: {
    colors: 2,
    sinister: true,
    reversed: true
  },
  ramHeadErased: {
    colors: 3,
    sinister: true
  },
  ramPassant: {
    colors: 3,
    sinister: true
  },
  ratRampant: {
    colors: 2,
    sinister: true
  },
  raven: {
    colors: 2,
    natural: "sable",
    sinister: true,
    positions: {e: 15, beh: 1, kn: 1, jeo: 1, abc: 3, jln: 3, def: 1}
  },
  rhinoceros: {
    colors: 2,
    sinister: true
  },
  rose: {
    colors: 3
  },
  sabre: {
    colors: 2,
    sinister: true
  },
  sabre2: {
    colors: 2,
    sinister: true,
    reversed: true
  },
  sabresCrossed: {
    colors: 2,
    reversed: true
  },
  sagittarius: {
    colors: 3,
    sinister: true
  },
  salmon: {
    colors: 2,
    sinister: true
  },
  saw: {
    colors: 2
  },
  scale: {
    colors: 2
  },
  scaleImbalanced: {
    colors: 2,
    sinister: true
  },
  scissors: {
    reversed: true
  },
  scorpion: {
    reversed: true
  },
  scrollClosed: {
    colors: 2,
    sinister: true
  },
  scythe: {
    colors: 2,
    sinister: true,
    reversed: true
  },
  scythe2: {
    sinister: true
  },
  serpent: {
    colors: 2,
    sinister: true
  },
  shield: {
    colors: 2,
    sinister: true
  },
  sickle: {
    colors: 2,
    sinister: true,
    reversed: true
  },
  snail: {
    colors: 2,
    sinister: true
  },
  snake: {
    colors: 2,
    sinister: true
  },
  spear: {
    colors: 2,
    reversed: true
  },
  spiral: {
    sinister: true,
    reversed: true
  },
  squirrel: {
    sinister: true
  },
  stagLodgedRegardant: {
    colors: 3,
    sinister: true
  },
  stagPassant: {
    colors: 2,
    sinister: true
  },
  stirrup: {
    colors: 2
  },
  swallow: {
    colors: 2,
    sinister: true
  },
  swan: {
    colors: 3,
    sinister: true
  },
  swanErased: {
    colors: 3,
    sinister: true
  },
  sword: {
    colors: 2,
    reversed: true
  },
  talbotPassant: {
    colors: 3,
    sinister: true
  },
  talbotSejant: {
    colors: 3,
    sinister: true
  },
  tower: {
    colors: 2
  },
  tree: {
    positions: {e: 1}
  },
  trefoil: {
    reversed: true
  },
  trowel: {
    colors: 2,
    sinister: true,
    reversed: true
  },
  unicornRampant: {
    colors: 3,
    sinister: true
  },
  wasp: {
    colors: 3,
    reversed: true
  },
  wheatStalk: {
    colors: 2
  },
  windmill: {
    colors: 3,
    sinister: true
  },
  wing: {
    sinister: true
  },
  wingSword: {
    colors: 3,
    sinister: true
  },
  wolfHeadErased: {
    colors: 2,
    sinister: true
  },
  wolfPassant: {
    colors: 3,
    sinister: true,
    positions: {e: 10, def: 1, abc: 1, bdefh: 1, jlh: 1, abcpqh: 1}
  },
  wolfRampant: {
    colors: 3,
    sinister: true
  },
  wolfStatant: {
    colors: 3,
    sinister: true
  },
  wyvern: {
    colors: 3,
    sinister: true,
    positions: {e: 10, jln: 1}
  },
  wyvernWithWingsDisplayed: {
    colors: 3,
    sinister: true
  }
};

const charges = {
  types: {
    conventional: 33, // 40 charges
    crosses: 13, // 30 charges
    beasts: 7, // 41 charges
    beastHeads: 3, // 10 charges
    birds: 3, // 16 charges
    reptiles: 2, // 5 charges
    bugs: 2, // 8 charges
    fishes: 1, // 3 charges
    molluscs: 1, // 2 charges
    plants: 3, // 18 charges
    fantastic: 5, // 14 charges
    agriculture: 2, // 8 charges
    arms: 5, // 32 charges
    bodyparts: 2, // 12 charges
    people: 2, // 4 charges
    architecture: 3, // 11 charges
    seafaring: 3, // 9 charges
    tools: 3, // 15 charges
    miscellaneous: 5, // 30 charges
    inescutcheon: 3, // 43 charges
    ornaments: 0, // 9 charges
    uploaded: 0
  },
  single: {
    conventional: 10,
    crosses: 8,
    beasts: 7,
    beastHeads: 3,
    birds: 3,
    reptiles: 2,
    bugs: 2,
    fishes: 1,
    molluscs: 1,
    plants: 3,
    fantastic: 5,
    agriculture: 2,
    arms: 5,
    bodyparts: 2,
    people: 2,
    architecture: 3,
    seafaring: 3,
    tools: 3,
    miscellaneous: 5,
    inescutcheon: 1
  },
  semy: {
    conventional: 4,
    crosses: 1
  },
  conventional: {
    annulet: 4,
    billet: 5,
    carreau: 1,
    comet: 1,
    compassRose: 1,
    crescent: 5,
    delf: 0,
    estoile: 1,
    fleurDeLis: 6,
    fountain: 1,
    fusil: 4,
    gear: 1,
    goutte: 4,
    heart: 4,
    lozenge: 2,
    lozengeFaceted: 3,
    lozengePloye: 1,
    mascle: 4,
    moonInCrescent: 1,
    mullet: 5,
    mullet10: 1,
    mullet4: 3,
    mullet6: 4,
    mullet6Faceted: 1,
    mullet6Pierced: 1,
    mullet7: 1,
    mullet8: 1,
    mulletFaceted: 1,
    mulletPierced: 1,
    pique: 2,
    roundel: 4,
    roundel2: 3,
    rustre: 2,
    spiral: 1,
    sun: 3,
    sunInSplendour: 1,
    sunInSplendour2: 1,
    trefle: 2,
    triangle: 3,
    trianglePierced: 1
  },
  crosses: {
    crossHummetty: 15,
    crossVoided: 1,
    crossPattee: 2,
    crossPatteeAlisee: 1,
    crossFormee: 1,
    crossFormee2: 2,
    crossPotent: 2,
    crossJerusalem: 1,
    crosslet: 1,
    crossClechy: 3,
    crossBottony: 1,
    crossFleury: 3,
    crossPatonce: 1,
    crossPommy: 1,
    crossGamma: 1,
    crossArrowed: 1,
    crossFitchy: 1,
    crossCercelee: 1,
    crossMoline: 2,
    crossFourchy: 1,
    crossAvellane: 1,
    crossErminee: 1,
    crossBiparted: 1,
    crossMaltese: 3,
    crossTemplar: 2,
    crossCeltic: 1,
    crossCeltic2: 1,
    crossTriquetra: 1,
    crossCarolingian: 1,
    crossOccitan: 1,
    crossSaltire: 3,
    crossBurgundy: 1,
    crossLatin: 3,
    crossPatriarchal: 1,
    crossOrthodox: 1,
    crossCalvary: 1,
    crossDouble: 1,
    crossTau: 1,
    crossSantiago: 1,
    crossAnkh: 1
  },
  beasts: {
    agnusDei: 1,
    badgerStatant: 1,
    bearPassant: 1,
    bearRampant: 3,
    boarRampant: 1,
    bullPassant: 1,
    camel: 1,
    catPassantGuardant: 1,
    cowStatant: 1,
    dolphin: 1,
    elephant: 1,
    goat: 1,
    greyhoundCourant: 1,
    greyhoundRampant: 1,
    greyhoundSejant: 1,
    hedgehog: 1,
    hindStatant: 1,
    horsePassant: 1,
    horseRampant: 2,
    horseSalient: 1,
    lamb: 1,
    lambPassantReguardant: 1,
    lionPassant: 3,
    lionPassantGuardant: 2,
    lionRampant: 7,
    lionSejant: 2,
    martenCourant: 1,
    mastiffStatant: 1,
    porcupine: 1,
    rabbitSejant: 1,
    ramPassant: 1,
    ratRampant: 1,
    rhinoceros: 1,
    squirrel: 1,
    stagLodgedRegardant: 1,
    stagPassant: 1,
    talbotPassant: 1,
    talbotSejant: 1,
    wolfPassant: 1,
    wolfRampant: 1,
    wolfStatant: 1
  },
  beastHeads: {
    wolfHeadErased: 2,
    bullHeadCaboshed: 1,
    deerHeadCaboshed: 1,
    donkeyHeadCaboshed: 1,
    lionHeadCaboshed: 2,
    lionHeadErased: 2,
    boarHeadErased: 1,
    horseHeadCouped: 1,
    ramHeadErased: 1,
    elephantHeadErased: 1
  },
  birds: {
    eagle: 9,
    falcon: 2,
    raven: 2,
    cock: 3,
    parrot: 1,
    swan: 2,
    swanErased: 1,
    heron: 1,
    owl: 1,
    owlDisplayed: 1,
    dove: 2,
    doveDisplayed: 1,
    duck: 1,
    peacock: 1,
    peacockInPride: 1,
    swallow: 1
  },
  reptiles: {
    crocodile: 1,
    frog: 1,
    lizard: 1,
    ouroboros: 1,
    snake: 1
  },
  bugs: {
    bee: 1,
    butterfly: 1,
    cancer: 1,
    dragonfly: 1,
    fly: 1,
    ladybird: 1,
    scorpion: 1,
    wasp: 1
  },
  fishes: {
    pike: 1,
    plaice: 1,
    salmon: 1
  },
  molluscs: {
    escallop: 4,
    snail: 1
  },
  plants: {
    apple: 1,
    cinquefoil: 1,
    earOfWheat: 1,
    grapeBunch: 1,
    grapeBunch2: 1,
    mapleLeaf: 1,
    oak: 1,
    palmTree: 1,
    pear: 1,
    pineCone: 1,
    pineTree: 1,
    quatrefoil: 1,
    rose: 1,
    sextifoil: 1,
    thistle: 1,
    tree: 1,
    trefoil: 1,
    wheatStalk: 1
  },
  fantastic: {
    angel: 3,
    basilisk: 1,
    centaur: 1,
    dragonPassant: 3,
    dragonRampant: 2,
    eagleTwoHeads: 2,
    griffinPassant: 1,
    griffinRampant: 2,
    pegasus: 1,
    sagittarius: 1,
    serpent: 1,
    unicornRampant: 1,
    wyvern: 1,
    wyvernWithWingsDisplayed: 1
  },
  agriculture: {
    garb: 2,
    millstone: 1,
    plough: 1,
    ploughshare: 1,
    rake: 1,
    scythe: 1,
    scythe2: 1,
    sickle: 1
  },
  arms: {
    arbalest: 1,
    arbalest2: 1,
    arrow: 1,
    arrowsSheaf: 1,
    axe: 3,
    bow: 1,
    bowWithArrow: 2,
    bowWithThreeArrows: 1,
    cannon: 1,
    falchion: 1,
    flamberge: 1,
    flangedMace: 1,
    gauntlet: 1,
    grenade: 1,
    hatchet: 3,
    helmet: 2,
    helmetCorinthian: 1,
    helmetGreat: 2,
    helmetZischagge: 1,
    lanceHead: 1,
    lanceWithBanner: 1,
    lochaberAxe: 1,
    mace: 1,
    maces: 1,
    mallet: 1,
    rapier: 1,
    sabre: 1,
    sabre2: 1,
    sabresCrossed: 1,
    shield: 1,
    spear: 1,
    sword: 4
  },
  bodyparts: {
    armEmbowedHoldingSabre: 1,
    armEmbowedVambraced: 1,
    armEmbowedVambracedHoldingSword: 1,
    bone: 1,
    crossedBones: 2,
    foot: 1,
    hand: 4,
    head: 1,
    headWreathed: 1,
    skeleton: 2,
    skull: 2,
    skull2: 1
  },
  people: {
    cavalier: 3,
    cossack: 1,
    archer: 1,
    monk: 1
  },
  architecture: {
    bridge: 1,
    bridge2: 1,
    castle: 2,
    castle2: 1,
    column: 1,
    lighthouse: 1,
    palace: 1,
    pillar: 1,
    portcullis: 1,
    tower: 2,
    windmill: 1
  },
  seafaring: {
    anchor: 6,
    armillarySphere: 1,
    boat: 2,
    boat2: 1,
    caravel: 1,
    drakkar: 1,
    lymphad: 2,
    raft: 1,
    shipWheel: 1
  },
  tools: {
    anvil: 2,
    drawingCompass: 2,
    fan: 1,
    hook: 1,
    ladder: 1,
    ladder2: 1,
    pincers: 1,
    saw: 1,
    scale: 1,
    scaleImbalanced: 1,
    scalesHanging: 1,
    scissors: 1,
    scissors2: 1,
    shears: 1,
    trowel: 1
  },
  miscellaneous: {
    attire: 2,
    banner: 2,
    bell: 3,
    bookClosed: 1,
    bookClosed2: 1,
    bookOpen: 1,
    bucket: 1,
    buckle: 1,
    bugleHorn: 2,
    bugleHorn2: 1,
    chain: 2,
    chalice: 2,
    cowHorns: 3,
    crosier: 1,
    crown: 3,
    crown2: 2,
    drum: 1,
    fasces: 1,
    feather: 3,
    harp: 2,
    horseshoe: 3,
    hourglass: 2,
    key: 3,
    laurelWreath: 2,
    laurelWreath2: 1,
    log: 1,
    lute: 2,
    lyre: 1,
    mitre: 1,
    orb: 1,
    pot: 2,
    ramsHorn: 1,
    sceptre: 1,
    scrollClosed: 1,
    snowflake: 1,
    stagsAttires: 1,
    stirrup: 2,
    wheel: 3,
    wing: 2,
    wingSword: 1
  },
  inescutcheon: {
    inescutcheonHeater: 1,
    inescutcheonSpanish: 1,
    inescutcheonFrench: 1,
    inescutcheonHorsehead: 1,
    inescutcheonHorsehead2: 1,
    inescutcheonPolish: 1,
    inescutcheonHessen: 1,
    inescutcheonSwiss: 1,
    inescutcheonBoeotian: 1,
    inescutcheonRoman: 1,
    inescutcheonKite: 1,
    inescutcheonOldFrench: 1,
    inescutcheonRenaissance: 1,
    inescutcheonBaroque: 1,
    inescutcheonTarge: 1,
    inescutcheonTarge2: 1,
    inescutcheonPavise: 1,
    inescutcheonWedged: 1,
    inescutcheonFlag: 1,
    inescutcheonPennon: 1,
    inescutcheonGuidon: 1,
    inescutcheonBanner: 1,
    inescutcheonDovetail: 1,
    inescutcheonGonfalon: 1,
    inescutcheonPennant: 1,
    inescutcheonRound: 1,
    inescutcheonOval: 1,
    inescutcheonVesicaPiscis: 1,
    inescutcheonSquare: 1,
    inescutcheonDiamond: 1,
    inescutcheonNo: 1,
    inescutcheonFantasy1: 1,
    inescutcheonFantasy2: 1,
    inescutcheonFantasy3: 1,
    inescutcheonFantasy4: 1,
    inescutcheonFantasy5: 1,
    inescutcheonNoldor: 1,
    inescutcheonGondor: 1,
    inescutcheonEasterling: 1,
    inescutcheonErebor: 1,
    inescutcheonIronHills: 1,
    inescutcheonUrukHai: 1,
    inescutcheonMoriaOrc: 1
  },
  ornaments: {
    mantle: 0,
    ribbon1: 3,
    ribbon2: 2,
    ribbon3: 1,
    ribbon4: 1,
    ribbon8: 1,
    ribbon7: 1,
    ribbon6: 1,
    ribbon5: 1
  },
  uploaded: {},
  data: chargeData
};

const patternSize = {standard: 154, small: 20, smaller: 20, big: 5, smallest: 1};

const shieldPositions = {
  // shield-specific position: [x, y] (relative to center)
  heater: {
    a: [-43.75, -50],
    b: [0, -50],
    c: [43.75, -50],
    d: [-43.75, 0],
    e: [0, 0],
    f: [43.75, 0],
    g: [-32.25, 37.5],
    h: [0, 50],
    i: [32.25, 37.5],
    y: [-50, -50],
    z: [0, 62.5],
    j: [-37.5, -37.5],
    k: [0, -37.5],
    l: [37.5, -37.5],
    m: [-30, 30],
    n: [0, 42.5],
    o: [30, 30],
    p: [-37.5, 0],
    q: [37.5, 0],
    A: [-66.2, -66.6],
    B: [-22, -66.6],
    C: [22, -66.6],
    D: [66.2, -66.6],
    K: [-66.2, -20],
    E: [66.2, -20],
    J: [-55.5, 26],
    F: [55.5, 26],
    I: [-33, 62],
    G: [33, 62],
    H: [0, 89.5]
  },
  spanish: {
    a: [-43.75, -50],
    b: [0, -50],
    c: [43.75, -50],
    d: [-43.75, 0],
    e: [0, 0],
    f: [43.75, 0],
    g: [-43.75, 50],
    h: [0, 50],
    i: [43.75, 50],
    y: [-50, -50],
    z: [0, 50],
    j: [-37.5, -37.5],
    k: [0, -37.5],
    l: [37.5, -37.5],
    m: [-37.5, 37.5],
    n: [0, 37.5],
    o: [37.5, 37.5],
    p: [-37.5, 0],
    q: [37.5, 0],
    A: [-66.2, -66.6],
    B: [-22, -66.6],
    C: [22, -66.6],
    D: [66.2, -66.6],
    K: [-66.4, -20],
    E: [66.4, -20],
    J: [-66.4, 26],
    F: [66.4, 26],
    I: [-49, 70],
    G: [49, 70],
    H: [0, 92]
  },
  french: {
    a: [-43.75, -50],
    b: [0, -50],
    c: [43.75, -50],
    d: [-43.75, 0],
    e: [0, 0],
    f: [43.75, 0],
    g: [-43.75, 50],
    h: [0, 50],
    i: [43.75, 50],
    y: [-50, -50],
    z: [0, 65],
    j: [-37.5, -37.5],
    k: [0, -37.5],
    l: [37.5, -37.5],
    m: [-37.5, 37.5],
    n: [0, 37.5],
    o: [37.5, 37.5],
    p: [-37.5, 0],
    q: [37.5, 0],
    A: [-66.2, -66.6],
    B: [-22, -66.6],
    C: [22, -66.6],
    D: [66.2, -66.6],
    K: [-66.4, -20],
    E: [66.4, -20],
    J: [-66.4, 26],
    F: [66.4, 26],
    I: [-65.4, 70],
    G: [65.4, 70],
    H: [0, 89]
  },
  horsehead: {
    a: [-43.75, -47.5],
    b: [0, -50],
    c: [43.75, -47.5],
    d: [-35, 0],
    e: [0, 0],
    f: [35, 0],
    h: [0, 50],
    y: [-50, -50],
    z: [0, 55],
    j: [-35, -35],
    k: [0, -40],
    l: [35, -35],
    m: [-30, 30],
    n: [0, 40],
    o: [30, 30],
    p: [-27.5, 0],
    q: [27.5, 0],
    A: [-71, -52],
    B: [-24, -73],
    C: [24, -73],
    D: [71, -52],
    K: [-62, -16],
    E: [62, -16],
    J: [-39, 20],
    F: [39, 20],
    I: [-33.5, 60],
    G: [33.5, 60],
    H: [0, 91.5]
  },
  horsehead2: {
    a: [-37.5, -47.5],
    b: [0, -50],
    c: [37.5, -47.5],
    d: [-35, 0],
    e: [0, 0],
    f: [35, 0],
    g: [-35, 47.5],
    h: [0, 50],
    i: [35, 47.5],
    y: [-50, -50],
    z: [0, 55],
    j: [-30, -30],
    k: [0, -40],
    l: [30, -30],
    m: [-30, 30],
    n: [0, 40],
    o: [30, 30],
    p: [-27.5, 0],
    q: [27.5, 0],
    A: [-49, -39],
    B: [-22, -70],
    C: [22, -70],
    D: [49, -39],
    K: [-51, -2],
    E: [51, -2],
    J: [-38.5, 31],
    F: [38.5, 31],
    I: [-35, 67],
    G: [35, 67],
    H: [0, 85]
  },
  polish: {
    a: [-35, -50],
    b: [0, -50],
    c: [35, -50],
    d: [-40, 0],
    e: [0, 0],
    f: [40, 0],
    g: [-37.5, 50],
    h: [0, 50],
    i: [37.5, 50],
    y: [-50, -50],
    z: [0, 65],
    j: [-27.5, -27.5],
    k: [0, -45],
    l: [27.5, -27.5],
    m: [-27.5, 27.5],
    n: [0, 45],
    o: [27.5, 27.5],
    p: [-32.5, 0],
    q: [32.5, 0],
    A: [-48, -52],
    B: [-23, -80],
    C: [23, -80],
    D: [48, -52],
    K: [-47, -10],
    E: [47, -10],
    J: [-62, 32],
    F: [62, 32],
    I: [-37, 68],
    G: [37, 68],
    H: [0, 86]
  },
  hessen: {
    a: [-43.75, -50],
    b: [0, -50],
    c: [43.75, -50],
    d: [-43.75, 0],
    e: [0, 0],
    f: [43.75, 0],
    g: [-43.75, 50],
    h: [0, 50],
    i: [43.75, 50],
    y: [-50, -50],
    z: [0, 52.5],
    j: [-40, -40],
    k: [0, -40],
    l: [40, -40],
    m: [-40, 40],
    n: [0, 40],
    o: [40, 40],
    p: [-40, 0],
    q: [40, 0],
    A: [-69, -64],
    B: [-22, -76],
    C: [22, -76],
    D: [69, -64],
    K: [-66.4, -20],
    E: [66.4, -20],
    J: [-62, 26],
    F: [62, 26],
    I: [-46, 70],
    G: [46, 70],
    H: [0, 91.5]
  },
  swiss: {
    a: [-43.75, -50],
    b: [0, -50],
    c: [43.75, -50],
    d: [-43.75, 0],
    e: [0, 0],
    f: [43.75, 0],
    g: [-32, 37.5],
    h: [0, 50],
    i: [32, 37.5],
    y: [-50, -50],
    z: [0, 62.5],
    j: [-37.5, -37.5],
    k: [0, -37.5],
    l: [37.5, -37.5],
    m: [-32, 32.5],
    n: [0, 42.5],
    o: [32, 32.5],
    p: [-37.5, 0],
    q: [37.5, 0],
    A: [-66.2, -66.6],
    B: [-22, -66],
    C: [22, -66],
    D: [66.2, -66.6],
    K: [-63, -20],
    E: [63, -20],
    J: [-50, 26],
    F: [50, 26],
    I: [-29, 62],
    G: [29, 62],
    H: [0, 89.5]
  },
  boeotian: {
    a: [-37.5, -47.5],
    b: [0, -47.5],
    c: [37.5, -47.5],
    d: [-25, 0],
    e: [0, 0],
    f: [25, 0],
    g: [-37.5, 47.5],
    h: [0, 47.5],
    i: [37.5, 47.5],
    y: [-48, -48],
    z: [0, 60],
    j: [-32.5, -37.5],
    k: [0, -45],
    l: [32.5, -37.5],
    m: [-32.5, 37.5],
    n: [0, 45],
    o: [32.5, 37.5],
    p: [-20, 0],
    q: [20, 0],
    A: [-45, -55],
    B: [-20, -77],
    C: [20, -77],
    D: [45, -55],
    K: [-59, -25],
    E: [59, -25],
    J: [-58, 27],
    F: [58, 27],
    I: [-39, 63],
    G: [39, 63],
    H: [0, 81]
  },
  roman: {
    a: [-40, -52.5],
    b: [0, -52.5],
    c: [40, -52.5],
    d: [-40, 0],
    e: [0, 0],
    f: [40, 0],
    g: [-40, 52.5],
    h: [0, 52.5],
    i: [40, 52.5],
    y: [-42.5, -52.5],
    z: [0, 65],
    j: [-30, -37.5],
    k: [0, -37.5],
    l: [30, -37.5],
    m: [-30, 37.5],
    n: [0, 37.5],
    o: [30, 37.5],
    p: [-30, 0],
    q: [30, 0],
    A: [-51.5, -65],
    B: [-17, -75],
    C: [17, -75],
    D: [51.5, -65],
    K: [-51.5, -21],
    E: [51.5, -21],
    J: [-51.5, 21],
    F: [51.5, 21],
    I: [-51.5, 65],
    G: [51.5, 65],
    H: [-17, 75],
    L: [17, 75]
  },
  kite: {
    b: [0, -65],
    e: [0, -15],
    h: [0, 35],
    z: [0, 35],
    k: [0, -50],
    n: [0, 20],
    p: [-20, -15],
    q: [20, -15],
    A: [-38, -52],
    B: [-29, -78],
    C: [29, -78],
    D: [38, -52],
    K: [-33, -20],
    E: [33, -20],
    J: [-25, 11],
    F: [25, 11],
    I: [-15, 42],
    G: [15, 42],
    H: [0, 73],
    L: [0, -91]
  },
  oldFrench: {
    a: [-43.75, -50],
    b: [0, -50],
    c: [43.75, -50],
    d: [-43.75, 0],
    e: [0, 0],
    f: [43.75, 0],
    g: [-37.5, 50],
    h: [0, 50],
    i: [37.5, 50],
    y: [-50, -50],
    z: [0, 62.5],
    j: [-37.5, -37.5],
    k: [0, -37.5],
    l: [37.5, -37.5],
    m: [-37.5, 37.5],
    n: [0, 45],
    o: [37.5, 37.5],
    p: [-37.5, 0],
    q: [37.5, 0],
    A: [-66.2, -66.6],
    B: [-22, -66.6],
    C: [22, -66.6],
    D: [66.2, -66.6],
    K: [-66.2, -20],
    E: [66.2, -20],
    J: [-64, 26],
    F: [64, 26],
    I: [-45, 62],
    G: [45, 62],
    H: [0, 91]
  },
  renaissance: {
    a: [-43.75, -50],
    b: [0, -50],
    c: [43.75, -50],
    d: [-41.5, 0],
    e: [0, 0],
    f: [41.5, 0],
    g: [-43.75, 50],
    h: [0, 50],
    i: [43.75, 50],
    y: [-50, -50],
    z: [0, 62.5],
    j: [-37.5, -37.5],
    k: [0, -37.5],
    l: [37.5, -37.5],
    m: [-37.5, 37.5],
    n: [0, 37.5],
    o: [37.5, 37.5],
    p: [-37.5, 0],
    q: [37.5, 0],
    A: [-61, -55],
    B: [-23, -67],
    C: [23, -67],
    D: [61, -55],
    K: [-55, -11],
    E: [55, -11],
    J: [-65, 31],
    F: [65, 31],
    I: [-45, 76],
    G: [45, 76],
    H: [0, 87]
  },
  baroque: {
    a: [-43.75, -45],
    b: [0, -45],
    c: [43.75, -45],
    d: [-43.75, 0],
    e: [0, 0],
    f: [43.75, 0],
    g: [-43.75, 50],
    h: [0, 50],
    i: [43.75, 50],
    y: [-50, -50],
    z: [0, 60],
    j: [-37.5, -37.5],
    k: [0, -37.5],
    l: [37.5, -37.5],
    m: [-37.5, 37.5],
    n: [0, 37.5],
    o: [37.5, 37.5],
    p: [-37.5, 0],
    q: [37.5, 0],
    A: [-65, -54.5],
    B: [-22, -65],
    C: [22, -65],
    D: [65, -54.5],
    K: [-58.5, -15],
    E: [58.5, -15],
    J: [-65, 31],
    F: [66, 31],
    I: [-35, 73],
    G: [35, 73],
    H: [0, 89]
  },
  targe: {
    a: [-43.75, -50],
    b: [0, -50],
    c: [43.75, -50],
    d: [-43.75, 0],
    e: [0, 0],
    f: [43.75, 0],
    g: [-43.75, 50],
    h: [0, 50],
    i: [43.75, 50],
    y: [-50, -50],
    z: [0, 50],
    j: [-40, -40],
    k: [0, -40],
    l: [40, -40],
    m: [-40, 40],
    n: [0, 40],
    o: [40, 40],
    p: [-32.5, 0],
    q: [32.5, 0],
    A: [-66.2, -60],
    B: [-22, -77],
    C: [22, -86],
    D: [60, -66.6],
    K: [-28, -20],
    E: [57, -20],
    J: [-61, 26],
    F: [61, 26],
    I: [-49, 63],
    G: [49, 59],
    H: [0, 80]
  },
  targe2: {
    a: [-43.75, -50],
    b: [0, -50],
    c: [43.75, -50],
    d: [-40, 0],
    e: [0, 0],
    f: [40, 0],
    g: [-43.75, 50],
    h: [0, 50],
    i: [43.75, 50],
    y: [-50, -50],
    z: [0, 60],
    j: [-37.5, -37.5],
    k: [0, -37.5],
    l: [37.5, -37.5],
    m: [-37.5, 37.5],
    n: [0, 37.5],
    o: [37.5, 37.5],
    p: [-32.5, 0],
    q: [32.5, 0],
    A: [-55, -59],
    B: [-15, -59],
    C: [24, -79],
    D: [51, -58],
    K: [-40, -14],
    E: [51, -14],
    J: [-64, 26],
    F: [62, 26],
    I: [-46, 66],
    G: [48, 67],
    H: [0, 83]
  },
  pavise: {
    a: [-40, -52.5],
    b: [0, -52.5],
    c: [40, -52.5],
    d: [-40, 0],
    e: [0, 0],
    f: [40, 0],
    g: [-40, 52.5],
    h: [0, 52.5],
    i: [40, 52.5],
    y: [-42.5, -52.5],
    z: [0, 60],
    j: [-30, -35],
    k: [0, -37.5],
    l: [30, -35],
    m: [-30, 35],
    n: [0, 37.5],
    o: [30, 35],
    p: [-30, 0],
    q: [30, 0],
    A: [-57, -55],
    B: [-22, -74],
    C: [22, -74],
    D: [57, -55],
    K: [-54, -11],
    E: [54, -11],
    J: [-50, 36],
    F: [50, 36],
    I: [-46, 81],
    G: [46, 81],
    H: [0, 81]
  },
  wedged: {
    a: [-43.75, -50],
    b: [0, -50],
    c: [43.75, -50],
    d: [-43.75, 0],
    e: [0, 0],
    f: [43.75, 0],
    g: [-32.25, 37.5],
    h: [0, 50],
    i: [32.25, 37.5],
    y: [-50, -50],
    z: [0, 62.5],
    j: [-37.5, -37.5],
    k: [0, -37.5],
    l: [37.5, -37.5],
    m: [-32.5, 32.5],
    n: [0, 42.5],
    o: [32.5, 32.5],
    p: [-37.5, 0],
    q: [37.5, 0],
    A: [-66, -53],
    B: [-22, -72.5],
    C: [22, -72.5],
    D: [66, -53],
    K: [-62.6, -13],
    E: [62.6, -13],
    J: [-50, 26],
    F: [50, 26],
    I: [-27, 62],
    G: [27, 62],
    H: [0, 87]
  },
  flag: {
    a: [-60, -40],
    b: [0, -40],
    c: [60, -40],
    d: [-60, 0],
    e: [0, 0],
    f: [60, 0],
    g: [-60, 40],
    h: [0, 40],
    i: [60, 40],
    y: [-60, -42.5],
    z: [0, 40],
    j: [-45, -30],
    k: [0, -30],
    l: [45, -30],
    m: [-45, 30],
    n: [0, 30],
    o: [45, 30],
    p: [-45, 0],
    q: [45, 0],
    A: [-81, -51],
    B: [-27, -51],
    C: [27, -51],
    D: [81, -51],
    K: [-81, -17],
    E: [81, -17],
    J: [-81, 17],
    F: [81, 17],
    I: [-81, 51],
    G: [81, 51],
    H: [-27, 51],
    L: [27, 51]
  },
  pennon: {
    a: [-75, -40],
    d: [-75, 0],
    e: [-25, 0],
    f: [25, 0],
    g: [-75, 40],
    y: [-70, -42.5],
    j: [-60, -30],
    m: [-60, 30],
    p: [-60, 0],
    q: [5, 0],
    A: [-81, -48],
    B: [-43, -36],
    C: [-4.5, -24],
    D: [33, -12],
    E: [72, 0],
    F: [33, 12],
    G: [-4.5, 24],
    H: [-43, 36],
    I: [-81, 48],
    J: [-81, 17],
    K: [-81, -17]
  },
  guidon: {
    a: [-60, -40],
    b: [0, -40],
    c: [60, -40],
    d: [-60, 0],
    e: [0, 0],
    g: [-60, 40],
    h: [0, 40],
    i: [60, 40],
    y: [-60, -42.5],
    z: [0, 40],
    j: [-45, -30],
    k: [0, -30],
    l: [45, -30],
    m: [-45, 30],
    n: [0, 30],
    o: [45, 30],
    p: [-45, 0],
    A: [-81, -51],
    B: [-27, -51],
    C: [27, -51],
    D: [78, -51],
    K: [-81, -17],
    E: [40.5, -17],
    J: [-81, 17],
    F: [40.5, 17],
    I: [-81, 51],
    G: [78, 51],
    H: [-27, 51],
    L: [27, 51]
  },
  banner: {
    a: [-50, -50],
    b: [0, -50],
    c: [50, -50],
    d: [-50, 0],
    e: [0, 0],
    f: [50, 0],
    g: [-50, 40],
    h: [0, 40],
    i: [50, 40],
    y: [-50, -50],
    z: [0, 40],
    j: [-37.5, -37.5],
    k: [0, -37.5],
    l: [37.5, -37.5],
    m: [-37.5, 27.5],
    n: [0, 27.5],
    o: [37.5, 27.5],
    p: [-37.5, 0],
    q: [37.5, 0],
    A: [-66.5, -66.5],
    B: [-22, -66.5],
    C: [22, -66.5],
    D: [66.5, -66.5],
    K: [-66.5, -20],
    E: [66.5, -20],
    J: [-66.5, 26],
    F: [66.5, 26],
    I: [-66.5, 66.5],
    G: [66.5, 66.5],
    H: [-25, 75],
    L: [25, 75]
  },
  dovetail: {
    a: [-49.75, -50],
    b: [0, -50],
    c: [49.75, -50],
    d: [-49.75, 0],
    e: [0, 0],
    f: [49.75, 0],
    g: [-49.75, 50],
    i: [49.75, 50],
    y: [-50, -50],
    z: [0, 40],
    j: [-37.5, -37.5],
    k: [0, -37.5],
    l: [37.5, -37.5],
    m: [-37.5, 37.5],
    n: [0, 32.5],
    o: [37.5, 37.5],
    p: [-37.5, 0],
    q: [37.5, 0],
    A: [-66.5, -66.5],
    B: [-22, -66.5],
    C: [22, -66.5],
    D: [66.5, -66.5],
    K: [-66.5, -16.5],
    E: [66.5, -16.5],
    J: [-66.5, 34.5],
    F: [66.5, 34.5],
    I: [-66.5, 84.5],
    G: [66.5, 84.5],
    H: [-25, 64],
    L: [25, 64]
  },
  gonfalon: {
    a: [-49.75, -50],
    b: [0, -50],
    c: [49.75, -50],
    d: [-49.75, 0],
    e: [0, 0],
    f: [49.75, 0],
    g: [-49.75, 50],
    h: [0, 50],
    i: [49.75, 50],
    y: [-50, -50],
    z: [0, 50],
    j: [-37.5, -37.5],
    k: [0, -37.5],
    l: [37.5, -37.5],
    m: [-37.5, 37.5],
    n: [0, 37.5],
    o: [37.5, 37.5],
    p: [-37.5, 0],
    q: [37.5, 0],
    A: [-66.5, -66.5],
    B: [-22, -66.5],
    C: [22, -66.5],
    D: [66.5, -66.5],
    K: [-66.5, -20],
    E: [66.5, -20],
    J: [-66.5, 26],
    F: [66.5, 26],
    I: [-40, 63],
    G: [40, 63],
    H: [0, 88]
  },
  pennant: {
    a: [-45, -50],
    b: [0, -50],
    c: [45, -50],
    e: [0, 0],
    h: [0, 50],
    y: [-50, -50],
    z: [0, 50],
    j: [-32.5, -37.5],
    k: [0, -37.5],
    l: [32.5, -37.5],
    n: [0, 37.5],
    A: [-60, -76],
    B: [-22, -76],
    C: [22, -76],
    D: [60, -76],
    K: [-46, -38],
    E: [46, -38],
    J: [-31, 0],
    F: [31, 0],
    I: [-16, 38],
    G: [16, 38],
    H: [0, 76]
  },
  round: {
    a: [-40, -40],
    b: [0, -40],
    c: [40, -40],
    d: [-40, 0],
    e: [0, 0],
    f: [40, 0],
    g: [-40, 40],
    h: [0, 40],
    i: [40, 40],
    y: [-48, -48],
    z: [0, 57.5],
    j: [-35.5, -35.5],
    k: [0, -37.5],
    l: [35.5, -35.5],
    m: [-35.5, 35.5],
    n: [0, 37.5],
    o: [35.5, 35.5],
    p: [-36.5, 0],
    q: [36.5, 0],
    A: [-59, -48],
    B: [-23, -73],
    C: [23, -73],
    D: [59, -48],
    K: [-76, -10],
    E: [76, -10],
    J: [-70, 31],
    F: [70, 31],
    I: [-42, 64],
    G: [42, 64],
    H: [0, 77]
  },
  oval: {
    a: [-37.5, -50],
    b: [0, -50],
    c: [37.5, -50],
    d: [-43, 0],
    e: [0, 0],
    f: [43, 0],
    g: [-37.5, 50],
    h: [0, 50],
    i: [37.5, 50],
    y: [-48, -48],
    z: [0, 60],
    j: [-35.5, -37.5],
    k: [0, -37.5],
    l: [35.5, -37.5],
    m: [-35.5, 37.5],
    n: [0, 50],
    o: [35.5, 37.5],
    p: [-36.5, 0],
    q: [36.5, 0],
    A: [-48, -48],
    B: [-23, -78],
    C: [23, -78],
    D: [48, -48],
    K: [-59, -10],
    E: [59, -10],
    J: [-55, 31],
    F: [55, 31],
    I: [-36, 68],
    G: [36, 68],
    H: [0, 85]
  },
  vesicaPiscis: {
    a: [-32, -37],
    b: [0, -50],
    c: [32, -37],
    d: [-32, 0],
    e: [0, 0],
    f: [32, 0],
    g: [-32, 37],
    h: [0, 50],
    i: [32, 37],
    y: [-50, -50],
    z: [0, 62],
    j: [-27.5, -27.5],
    k: [0, -37],
    l: [27.5, -27.5],
    m: [-27.5, 27.5],
    n: [0, 42],
    o: [27.5, 27.5],
    p: [-27.5, 0],
    q: [27.5, 0],
    A: [-45, -32],
    B: [-29, -63],
    C: [29, -63],
    D: [45, -32],
    K: [-50, 0],
    E: [50, 0],
    J: [-45, 32],
    F: [45, 32],
    I: [-29, 63],
    G: [29, 63],
    H: [0, 89],
    L: [0, -89]
  },
  square: {
    a: [-49.75, -50],
    b: [0, -50],
    c: [49.75, -50],
    d: [-49.75, 0],
    e: [0, 0],
    f: [49.75, 0],
    g: [-49.75, 50],
    h: [0, 50],
    i: [49.75, 50],
    y: [-50, -50],
    z: [0, 50],
    j: [-37.5, -37.5],
    k: [0, -37.5],
    l: [37.5, -37.5],
    m: [-37.5, 37.5],
    n: [0, 37.5],
    o: [37.5, 37.5],
    p: [-37.5, 0],
    q: [37.5, 0],
    A: [-66.5, -66.5],
    B: [-22, -66.5],
    C: [22, -66.5],
    D: [66.5, -66.5],
    K: [-66.5, -20],
    E: [66.5, -20],
    J: [-66.5, 26],
    F: [66.5, 26],
    I: [-66.5, 66.5],
    G: [66.5, 66.5],
    H: [-22, 66.5],
    L: [22, 66.5]
  },
  diamond: {
    a: [-32, -37],
    b: [0, -50],
    c: [32, -37],
    d: [-43, 0],
    e: [0, 0],
    f: [43, 0],
    g: [-32, 37],
    h: [0, 50],
    i: [32, 37],
    y: [-50, -50],
    z: [0, 62],
    j: [-27.5, -27.5],
    k: [0, -37],
    l: [27.5, -27.5],
    m: [-27.5, 27.5],
    n: [0, 42],
    o: [27.5, 27.5],
    p: [-37, 0],
    q: [37, 0],
    A: [-43, -28],
    B: [-22, -56],
    C: [22, -56],
    D: [43, -28],
    K: [-63, 0],
    E: [63, 0],
    J: [-42, 28],
    F: [42, 28],
    I: [-22, 56],
    G: [22, 56],
    H: [0, 83],
    L: [0, -82]
  },
  no: {
    a: [-66.5, -66.5],
    b: [0, -66.5],
    c: [66.5, -66.5],
    d: [-66.5, 0],
    e: [0, 0],
    f: [66.5, 0],
    g: [-66.5, 66.5],
    h: [0, 66.5],
    i: [66.5, 66.5],
    y: [-50, -50],
    z: [0, 75],
    j: [-50, -50],
    k: [0, -50],
    l: [50, -50],
    m: [-50, 50],
    n: [0, 50],
    o: [50, 50],
    p: [-50, 0],
    q: [50, 0],
    A: [-91.5, -91.5],
    B: [-30.5, -91.5],
    C: [30.5, -91.5],
    D: [91.5, -91.5],
    K: [-91.5, -30.5],
    E: [91.5, -30.5],
    J: [-91.5, 30.5],
    F: [91.5, 30.5],
    I: [-91.5, 91.5],
    G: [91.5, 91.5],
    H: [-30.5, 91.5],
    L: [30.5, 91.5]
  },
  fantasy1: {
    a: [-45, -45],
    b: [0, -50],
    c: [45, -45],
    d: [-40, 0],
    e: [0, 0],
    f: [40, 0],
    g: [-36, 42.5],
    h: [0, 50],
    i: [36, 42.5],
    y: [-50, -50],
    z: [0, 60],
    j: [-37, -37],
    k: [0, -40],
    l: [37, -37],
    m: [-32, 32],
    n: [0, 40],
    o: [32, 32],
    p: [-28.5, 0],
    q: [28.5, 0],
    A: [-66, -55],
    B: [-22, -67],
    C: [22, -67],
    D: [66, -55],
    K: [-53, -20],
    E: [53, -20],
    J: [-46, 26],
    F: [46, 26],
    I: [-29, 62],
    G: [29, 62],
    H: [0, 84]
  },
  fantasy2: {
    a: [-45, -45],
    b: [0, -45],
    c: [45, -45],
    d: [-35, 0],
    e: [0, 0],
    f: [35, 0],
    g: [-36, 42.5],
    h: [0, 45],
    i: [36, 42.5],
    y: [-50, -50],
    z: [0, 55],
    j: [-32.5, -32.5],
    k: [0, -40],
    l: [32.5, -32.5],
    m: [-30, 30],
    n: [0, 40],
    o: [30, 30],
    p: [-27.5, 0],
    q: [27.5, 0],
    A: [-58, -35],
    B: [-44, -67],
    C: [44, -67],
    D: [58, -35],
    K: [-39, -5],
    E: [39, -5],
    J: [-57, 26],
    F: [57, 26],
    I: [-32, 58],
    G: [32, 58],
    H: [0, 83],
    L: [0, -72]
  },
  fantasy3: {
    a: [-40, -45],
    b: [0, -50],
    c: [40, -45],
    d: [-35, 0],
    e: [0, 0],
    f: [35, 0],
    g: [-36, 42.5],
    h: [0, 50],
    i: [36, 42.5],
    y: [-50, -50],
    z: [0, 55],
    j: [-32.5, -32.5],
    k: [0, -40],
    l: [32.5, -32.5],
    m: [-30, 30],
    n: [0, 40],
    o: [30, 30],
    p: [-27.5, 0],
    q: [27.5, 0],
    A: [-56, -42],
    B: [-22, -72],
    C: [22, -72],
    D: [56, -42],
    K: [-37, -11],
    E: [37, -11],
    J: [-60, 20],
    F: [60, 20],
    I: [-34, 56],
    G: [34, 56],
    H: [0, 83]
  },
  fantasy4: {
    a: [-50, -45],
    b: [0, -50],
    c: [50, -45],
    d: [-45, 0],
    e: [0, 0],
    f: [45, 0],
    g: [-40, 45],
    h: [0, 50],
    i: [40, 45],
    y: [-50, -50],
    z: [0, 62.5],
    j: [-37.5, -37.5],
    k: [0, -45],
    l: [37.5, -37.5],
    m: [-37.5, 37.5],
    n: [0, 45],
    o: [37.5, 37.5],
    p: [-35, 0],
    q: [35, 0],
    A: [-75, -56],
    B: [-36, -61],
    C: [36, -61],
    D: [75, -56],
    K: [-67, -12],
    E: [67, -12],
    J: [-63, 32],
    F: [63, 32],
    I: [-42, 75],
    G: [42, 75],
    H: [0, 91.5],
    L: [0, -79]
  },
  fantasy5: {
    a: [-45, -50],
    b: [0, -50],
    c: [45, -50],
    d: [-40, 0],
    e: [0, 0],
    f: [40, 0],
    g: [-30, 45],
    h: [0, 50],
    i: [30, 45],
    y: [-50, -50],
    z: [0, 60],
    j: [-37, -37],
    k: [0, -40],
    l: [37, -37],
    m: [-32, 32],
    n: [0, 40],
    o: [32, 32],
    p: [-28.5, 0],
    q: [28.5, 0],
    A: [-61, -67],
    B: [-22, -76],
    C: [22, -76],
    D: [61, -67],
    K: [-58, -25],
    E: [58, -25],
    J: [-48, 20],
    F: [48, 20],
    I: [-28.5, 60],
    G: [28.5, 60],
    H: [0, 89]
  },
  noldor: {
    b: [0, -65],
    e: [0, -15],
    h: [0, 35],
    z: [0, 35],
    k: [0, -50],
    n: [0, 30],
    p: [-20, -15],
    q: [20, -15],
    A: [-34, -47],
    B: [-20, -68],
    C: [20, -68],
    D: [34, -47],
    K: [-18, -20],
    E: [18, -20],
    J: [-26, 11],
    F: [26, 11],
    I: [-14, 43],
    G: [14, 43],
    H: [0, 74],
    L: [0, -85]
  },
  gondor: {
    a: [-32.5, -50],
    b: [0, -50],
    c: [32.5, -50],
    d: [-32.5, 0],
    e: [0, 0],
    f: [32.5, 0],
    g: [-32.5, 50],
    h: [0, 50],
    i: [32.5, 50],
    y: [-42.5, -52.5],
    z: [0, 65],
    j: [-25, -37.5],
    k: [0, -37.5],
    l: [25, -37.5],
    m: [-25, 30],
    n: [0, 37.5],
    o: [25, 30],
    p: [-25, 0],
    q: [25, 0],
    A: [-42, -52],
    B: [-17, -75],
    C: [17, -75],
    D: [42, -52],
    K: [-42, -15],
    E: [42, -15],
    J: [-42, 22],
    F: [42, 22],
    I: [-26, 60],
    G: [26, 60],
    H: [0, 87]
  },
  easterling: {
    a: [-40, -47.5],
    b: [0, -47.5],
    c: [40, -47.5],
    d: [-40, 0],
    e: [0, 0],
    f: [40, 0],
    g: [-40, 47.5],
    h: [0, 47.5],
    i: [40, 47.5],
    y: [-42.5, -52.5],
    z: [0, 65],
    j: [-30, -37.5],
    k: [0, -37.5],
    l: [30, -37.5],
    m: [-30, 37.5],
    n: [0, 37.5],
    o: [30, 37.5],
    p: [-30, 0],
    q: [30, 0],
    A: [-52, -72],
    B: [0, -65],
    D: [52, -72],
    K: [-52, -24],
    E: [52, -24],
    J: [-52, 24],
    F: [52, 24],
    I: [-52, 72],
    G: [52, 72],
    H: [0, 65]
  },
  erebor: {
    a: [-40, -40],
    b: [0, -55],
    c: [40, -40],
    d: [-40, 0],
    e: [0, 0],
    f: [40, 0],
    g: [-40, 40],
    h: [0, 55],
    i: [40, 40],
    y: [-50, -50],
    z: [0, 50],
    j: [-35, -35],
    k: [0, -45],
    l: [35, -35],
    m: [-35, 35],
    n: [0, 45],
    o: [35, 35],
    p: [-37.5, 0],
    q: [37.5, 0],
    A: [-47, -46],
    B: [-22, -81],
    C: [22, -81],
    D: [47, -46],
    K: [-66.5, 0],
    E: [66.5, 0],
    J: [-47, 46],
    F: [47, 46],
    I: [-22, 81],
    G: [22, 81]
  },
  ironHills: {
    a: [-43.75, -50],
    b: [0, -50],
    c: [43.75, -50],
    d: [-43.25, 0],
    e: [0, 0],
    f: [43.25, 0],
    g: [-42.5, 42.5],
    h: [0, 50],
    i: [42.5, 42.5],
    y: [-50, -50],
    z: [0, 62.5],
    j: [-32.5, -32.5],
    k: [0, -40],
    l: [32.5, -32.5],
    m: [-32.5, 32.5],
    n: [0, 40],
    o: [32.5, 32.5],
    p: [-37.5, 0],
    q: [37.5, 0],
    A: [-61, -67],
    B: [-22, -74],
    C: [22, -74],
    D: [61, -67],
    K: [-59, -20],
    E: [59, -20],
    J: [-57, 26],
    F: [57, 26],
    I: [-33, 64],
    G: [33, 64],
    H: [0, 88]
  },
  urukHai: {
    a: [-40, -45],
    b: [0, -45],
    c: [40, -45],
    d: [-36, 0],
    e: [0, 0],
    f: [36, 0],
    g: [-32.25, 40],
    h: [0, 40],
    i: [32.25, 40],
    y: [-50, -50],
    z: [0, 40],
    j: [-32.5, -32.5],
    k: [0, -37.5],
    l: [32.5, -32.5],
    m: [-27.5, 27.5],
    n: [0, 32.5],
    o: [27.5, 27.5],
    p: [-37.5, 0],
    q: [37.5, 0],
    A: [-31, -79],
    B: [-1, -90],
    C: [31, -74],
    D: [61, -57],
    K: [-55, -19],
    E: [53, -19],
    J: [-45, 19],
    F: [45, 19],
    I: [-33, 57],
    G: [35, 57],
    H: [0, 57],
    L: [-39, -50]
  },
  moriaOrc: {
    a: [-37.5, -37.5],
    b: [0, -37.5],
    c: [37.5, -37.5],
    d: [-37.5, 0],
    e: [0, 0],
    f: [37.5, 0],
    g: [-37.5, 37.5],
    h: [0, 37.5],
    i: [37.5, 37.5],
    y: [-50, -50],
    z: [0, 40],
    j: [-30, -30],
    k: [0, -30],
    l: [30, -30],
    m: [-30, 30],
    n: [0, 30],
    o: [30, 30],
    p: [-30, 0],
    q: [30, 0],
    A: [-48, -48],
    B: [-16, -50],
    C: [16, -46],
    D: [39, -61],
    K: [-52, -19],
    E: [52, -26],
    J: [-42, 9],
    F: [52, 9],
    I: [-31, 40],
    G: [40, 43],
    H: [4, 47]
  }
};

const shieldSize = {
  horsehead: 0.9,
  horsehead2: 0.9,
  polish: 0.85,
  swiss: 0.95,
  boeotian: 0.75,
  roman: 0.95,
  kite: 0.65,
  targe2: 0.9,
  pavise: 0.9,
  wedged: 0.95,
  flag: 0.7,
  pennon: 0.5,
  guidon: 0.65,
  banner: 0.8,
  dovetail: 0.8,
  pennant: 0.6,
  oval: 0.95,
  vesicaPiscis: 0.8,
  diamond: 0.8,
  no: 1.2,
  fantasy1: 0.8,
  fantasy2: 0.7,
  fantasy3: 0.7,
  fantasy5: 0.9,
  noldor: 0.5,
  gondor: 0.75,
  easterling: 0.8,
  erebor: 0.9,
  urukHai: 0.8,
  moriaOrc: 0.7
};

const shieldBox = {
  heater: "0 10 200 200",
  spanish: "0 10 200 200",
  french: "0 10 200 200",

  horsehead: "0 10 200 200",
  horsehead2: "0 10 200 200",
  polish: "0 0 200 200",
  hessen: "0 5 200 200",
  swiss: "0 10 200 200",

  boeotian: "0 0 200 200",
  roman: "0 0 200 200",
  kite: "0 0 200 200",
  oldFrench: "0 10 200 200",
  renaissance: "0 5 200 200",
  baroque: "0 10 200 200",

  targe: "0 0 200 200",
  targe2: "0 0 200 200",
  pavise: "0 0 200 200",
  wedged: "0 10 200 200",

  flag: "0 0 200 200",
  pennon: "2.5 0 200 200",
  guidon: "2.5 0 200 200",
  banner: "0 10 200 200",
  dovetail: "0 10 200 200",
  gonfalon: "0 10 200 200",
  pennant: "0 0 200 200",

  round: "0 0 200 200",
  oval: "0 0 200 200",
  vesicaPiscis: "0 0 200 200",
  square: "0 0 200 200",
  diamond: "0 0 200 200",
  no: "0 0 200 200",

  fantasy1: "0 0 200 200",
  fantasy2: "0 5 200 200",
  fantasy3: "0 5 200 200",
  fantasy4: "0 5 200 200",
  fantasy5: "0 0 200 200",

  noldor: "0 0 200 200",
  gondor: "0 5 200 200",
  easterling: "0 0 200 200",
  erebor: "0 0 200 200",
  ironHills: "0 5 200 200",
  urukHai: "0 0 200 200",
  moriaOrc: "0 0 200 200"
};

module.exports = {
  charges,
  divisions,
  lines,
  ordinaries,
  positions,
  tinctures,
  colors,
  shields,
  shieldPositions,
  shieldSize,
  shieldBox,
  patternSize
};
