const shieldPaths = {
  heater: "m25,25 h150 v50 a150,150,0,0,1,-75,125 a150,150,0,0,1,-75,-125 z",
  spanish: "m25,25 h150 v100 a75,75,0,0,1,-150,0 z",
  french: "m 25,25 h 150 v 139.15 c 0,41.745 -66,18.15 -75,36.3 -9,-18.15 -75,5.445 -75,-36.3 v 0 z",
  horsehead:
    "m 20,40 c 0,60 40,80 40,100 0,10 -4,15 -0.35,30 C 65,185.7 81,200 100,200 c 19.1,0 35.3,-14.6 40.5,-30.4 C 144.2,155 140,150 140,140 140,120 180,100 180,40 142.72,40 150,15 100,15 55,15 55,40 20,40 Z",
  horsehead2:
    "M60 20c-5 20-10 35-35 55 25 35 35 65 30 100 20 0 35 10 45 26 10-16 30-26 45-26-5-35 5-65 30-100a87 87 0 01-35-55c-25 3-55 3-80 0z",
  polish:
    "m 90.3,6.3 c -12.7,0 -20.7,10.9 -40.5,14 0,11.8 -4.9,23.5 -11.4,31.1 0,0 12.7,6 12.7,19.3 C 51.1,90.8 30,90.8 30,90.8 c 0,0 -3.6,7.4 -3.6,22.4 0,34.3 23.1,60.2 40.7,68.2 17.6,8 27.7,11.4 32.9,18.6 5.2,-7.3 15.3,-10.7 32.8,-18.6 17.6,-8 40.7,-33.9 40.7,-68.2 0,-15 -3.6,-22.4 -3.6,-22.4 0,0 -21.1,0 -21.1,-20.1 0,-13.3 12.7,-19.3 12.7,-19.3 C 155.1,43.7 150.2,32.1 150.2,20.3 130.4,17.2 122.5,6.3 109.7,6.3 102.5,6.3 100,10 100,10 c 0,0 -2.5,-3.7 -9.7,-3.7 z",
  hessen:
    "M170 20c4 5 8 13 15 20 0 0-10 0-10 15 0 100-15 140-75 145-65-5-75-45-75-145 0-15-10-15-10-15l15-20c0 15 10-5 70-5s70 20 70 5z",
  swiss:
    "m 25,20 c -0.1,0 25.2,8.5 37.6,8.5 C 75.1,28.5 99.1,20 100,20 c 0.6,0 24.9,8.5 37.3,8.5 C 149.8,28.5 174.4,20 175,20 l -0.3,22.6 C 173.2,160.3 100,200 100,200 100,200 26.5,160.9 25.2,42.6 Z",
  boeotian:
    "M150 115c-5 0-10-5-10-15s5-15 10-15c10 0 7 10 15 10 10 0 0-30 0-30-10-25-30-55-65-55S45 40 35 65c0 0-10 30 0 30 8 0 5-10 15-10 5 0 10 5 10 15s-5 15-10 15c-10 0-7-10-15-10-10 0 0 30 0 30 10 25 30 55 65 55s55-30 65-55c0 0 10-30 0-30-8 0-5 10-15 10z",
  roman: "m 160,170 c -40,20 -80,20 -120,0 V 30 C 80,10 120,10 160,30 Z",
  kite: "m 53.3,46.4 c 0,4.1 1,12.3 1,12.3 7.1,55.7 45.7,141.3 45.7,141.3 0,0 38.6,-85.6 45.7,-141.2 0,0 1,-8.1 1,-12.3 C 146.7,20.9 125.8,0.1 100,0.1 74.2,0.1 53.3,20.9 53.3,46.4 Z",
  oldFrench: "m25,25 h150 v75 a100,100,0,0,1,-75,100 a100,100,0,0,1,-75,-100 z",
  renaissance:
    "M 25,33.9 C 33.4,50.3 36.2,72.9 36.2,81.7 36.2,109.9 25,122.6 25,141 c 0,29.4 24.9,44.1 40.2,47.7 15.3,3.7 29.3,0 34.8,11.3 5.5,-11.3 19.6,-7.6 34.8,-11.3 C 150.1,185 175,170.3 175,141 c 0,-18.4 -11.2,-31.1 -11.2,-59.3 0,-8.8 2.8,-31.3 11.2,-47.7 L 155.7,14.4 C 138.2,21.8 119.3,25.7 100,25.7 c -19.3,0 -38.2,-3.9 -55.7,-11.3 z",
  baroque:
    "m 100,25 c 18,0 50,2 75,14 v 37 l -2.7,3.2 c -4.9,5.4 -6.6,9.6 -6.7,16.2 0,6.5 2,11.6 6.9,17.2 l 2.8,3.1 v 10.2 c 0,17.7 -2.2,27.7 -7.8,35.9 -5,7.3 -11.7,11.3 -32.3,19.4 -12.6,5 -20.2,8.8 -28.6,14.5 C 103.3,198 100,200 100,200 c 0,0 -2.8,-2.3 -6.4,-4.7 C 85.6,189.8 78,186 65,180.9 32.4,168.1 26.9,160.9 25.8,129.3 L 25,116 l 3.3,-3.3 c 4.8,-5.2 7,-10.7 7,-17.3 0,-6.8 -1.8,-11.1 -6.5,-16.1 L 25,76 V 39 C 50,27 82,25 100,25 Z",
  targe:
    "m 20,35 c 15,0 115,-60 155,-10 -5,10 -15,15 -10,50 5,45 10,70 -10,90 C 125,195 75,195 50,175 25,150 30,130 35,85 50,95 65,85 65,70 65,50 50,45 40,50 30,55 27,65 30,70 23,73 20,70 14,70 11,60 20,45 20,35 Z",
  targe2:
    "m 84,32.2 c 6.2,-1 19.5,-31.4 94.1,-20.2 -30.57,33.64 -21.66,67.37 -11.2,95 20.2,69.5 -41.17549,84.7 -66.88,84.7 C 74.32,191.7071 8.38,168.95 32,105.9 36.88,92.88 31,89 31,82.6 35.15,82.262199 56.79,86.17 56.5,69.8 56.20,52.74 42.2,47.9 25.9,55.2 25.9,51.4 39.8,6.7 84,32.2 Z",
  pavise:
    "M95 7L39.9 37.3a10 10 0 00-5.1 9.5L46 180c.4 5.2 3.7 10 9 10h90c5.3 0 9.6-4.8 10-10l10.6-133.2a10 10 0 00-5-9.5L105 7c-4.2-2.3-6.2-2.3-10 0z",
  wedged:
    "m 51.2,19 h 96.4 c 3.1,12.7 10.7,20.9 26.5,20.8 C 175.7,94.5 165.3,144.3 100,200 43.5,154.2 22.8,102.8 25.1,39.7 37,38.9 47.1,34.7 51.2,19 Z",
  round: "m 185,100 a 85,85 0 0 1 -85,85 85,85 0 0 1 -85,-85 85,85 0 0 1 85,-85 85,85 0 0 1 85,85",
  oval: "m 32.3,99.5 a 67.7,93.7 0 1 1 0,1.3 z",
  vesicaPiscis:
    "M 100,0 C 63.9,20.4 41,58.5 41,100 c 0,41.5 22.9,79.6 59,100 36.1,-20.4 59,-58.5 59,-100 C 159,58.5 136.1,20.4 100,0 Z",
  square: "M 25,25 H 175 V 175 H 25 Z",
  diamond: "M 25,100 100,200 175,100 100,0 Z",
  no: "m0,0 h200 v200 h-200 z",
  flag: "M 10,40 h180 v120 h-180 Z",
  pennon: "M 10,40 l190,60 -190,60 Z",
  guidon: "M 10,40 h190 l-65,60 65,60 h-190 Z",
  banner: "m 25,25 v 170 l 25,-40 25,40 25,-40 25,40 25,-40 25,40 V 25 Z",
  dovetail: "m 25,25 v 175 l 75,-40 75,40 V 25 Z",
  gonfalon: "m 25,25 v 125 l 75,50 75,-50 V 25 Z",
  pennant: "M 25,15 100,200 175,15 Z",
  fantasy1:
    "M 100,5 C 85,30 40,35 15,40 c 40,35 20,90 40,115 15,25 40,30 45,45 5,-15 30,-20 45,-45 20,-25 0,-80 40,-115 C 160,35 115,30 100,5 Z",
  fantasy2:
    "m 152,21 c 0,0 -27,14 -52,-4 C 75,35 48,21 48,21 50,45 30,55 30,75 60,75 60,115 32,120 c 3,40 53,50 68,80 15,-30 65,-40 68,-80 -28,-5 -28,-45 2,-45 C 170,55 150,45 152,21 Z",
  fantasy3:
    "M 167,67 C 165,0 35,0 33,67 c 32,-7 27,53 -3,43 -5,45 60,65 70,90 10,-25 75,-47.51058 70,-90 -30,10 -35,-50 -3,-43 z",
  fantasy4:
    "M100 9C55 48 27 27 13 39c23 50 3 119 49 150 14 9 28 11 38 11s27-4 38-11c55-39 24-108 49-150-14-12-45 7-87-30z",
  fantasy5: "M 100,0 C 75,25 30,25 30,25 c 0,69 20,145 70,175 50,-30 71,-106 70,-175 0,0 -45,0 -70,-25 z",
  noldor:
    "m 55,75 h 2 c 3,-25 38,-10 3,20 15,50 30,75 40,105 10,-30 25,-55 40,-105 -35,-30 0,-45 3,-20 h 2 C 150,30 110,20 100,0 90,20 50,30 55,75 Z",
  gondor: "m 100,200 c 15,-15 38,-35 45,-60 h 5 V 30 h -5 C 133,10 67,10 55,30 h -5 v 110 h 5 c 7,25 30,45 45,60 z",
  easterling: "M 160,185 C 120,170 80,170 40,185 V 15 c 40,15 80,15 120,0 z",
  erebor: "M25 135 V60 l22-13 16-37 h75 l15 37 22 13 v75l-22 18-16 37 H63l-16-37z",
  ironHills: "m 30,25 60,-10 10,10 10,-10 60,10 -5,125 -65,50 -65,-50 z",
  urukHai: "M 30,60 C 40,60 60,50 60,20 l -5,-3 45,-17 75,40 -5,5 -35,155 -5,-35 H 70 v 35 z",
  moriaOrc:
    "M45 35c5 3 7 10 13 9h19c4-2 7-4 9-9 6 1 9 9 16 11 7-2 14 0 21 0 6-3 6-10 10-15 2-5 1-10-2-15-2-4-5-14-4-16 3 6 7 11 12 14 7 3 3 12 7 16 3 6 4 12 9 18 2 4 6 8 5 14 0 6-1 12 3 18-3 6-2 13-1 20 1 6-2 12-1 18 0 6-3 13 0 18 8 4 0 8-5 7-4 3-9 3-13 9-5 5-5 13-8 19 0 6 0 15-7 16-1 6-7 6-10 12-1-6 0-6-2-9l2-19c2-4 5-12-3-12-4-5-11-5-15 1l-13-18c-3-4-2 9-3 12 2 2-4-6-7-5-8-2-8 7-11 11-2 4-5 10-8 9 3-10 3-16 1-23-1-4 2-9-4-11 0-6 1-13-2-19-4-2-9-6-13-7V91c4-7-5-13 0-19-3-7 2-11 2-18-1-6 1-12 3-17v-1z"
};

const lines = {
  straight: "m 0,115 v -15 h 200 v 15",
  engrailed: `m 0,115 v -20 ${"a 6.25,6.25 0 0 0 12.5,0".repeat(16)} v 20`,
  invecked: `m 0,115 v -12.5 ${"a 6.25,6.25 0 0 1 12.5,0".repeat(16)} v 12.5`,
  embattled: `m 0,115 v -10 h 2.5 ${"v -10 h 15 v 10 h 15".repeat(6)} v -10 h 15 v 10 h 2.5 v 10`,
  wavy: `m 0,115 v -15 ${"c 8.9,-3.5 16,-3.1 25,0 8.9,3.5 16,3.1 25,0 8.9,-3.5 16,-3.2 25,0 8.9,3.5 16,3.2 25,0".repeat(2)} v 15`,
  raguly: `m 0,115 v -20 h 7 ${"l -5,10 h 10 l 5,-10 h 10".repeat(9)} l -5,10 h 10 l 5,-10 h 3 v 20`,
  dancetty: `m 0,115 v -10 l 10,-15 ${"l 15,20 15,-20".repeat(6)} l 10,15 v 10`,
  dentilly: `m 0,115 v -20 ${"l 10,10 v -10".repeat(19)} l 10,10 v 10`,
  angled: "m 0,115 v -20 h 100 v 10 h 100 v 10",
  urdy: `m 0,115 v -25 ${"l 5,5 v 10 l 5,5 5,-5 v -10 l 5,-5".repeat(3)} l 5,5 v 10 l 5,6 5,-6 v -10 l 5,-5 ${"l 5,5 v 10 l 5,5 5,-5 v -10 l 5,-5".repeat(2)} l 5,5 v 10 l 5,6 5,-6 v -10 l 5,-5 ${"l 5,5 v 10 l 5,5 5,-5 v -10 l 5,-5".repeat(3)} v 25`,
  indented: `m 0,115 v -20 ${"l 5,10 5,-10".repeat(20)} v 20`,
  bevilled: "m 0,115 v -22.5 h 110 l -20,15 h 110 v 7.5",
  nowy: "m 0,115 v -20 h 80 c 0,0 0.1,20.1 20,20 19.9,-0.1 20,-20 20,-20 h 80 v 20",
  nowyReversed: "m 0,115 v -10 h 80 c 0,0 0.1,-20.1 20,-20 19.9,0.1 20,20 20,20 h 80 v 10",
  potenty: `m 0,115 v -10 ${"h 7.5 v -5 h -5 v -5 h 15 v 5 h -5 v 5 h 7.5".repeat(10)} v 10`,
  potentyDexter: `m 0,115 v -20 h 3 ${"v 10 h 10 v -5 h -5 v -5 h 10".repeat(13)} v 10 h 2 v 20`,
  potentySinister: `m 0,115 v -10 h 2.5 ${"v -10 h 10 v 5 h -5 v 5 h 10".repeat(13)} v -10 h 2.5 v 20`,
  embattledGhibellin: `m 0,115 v -15 ${"l 5,-5 v 10 l 5,-5 5,5 V 95 l 5,5".repeat(10)} v 15`,
  embattledNotched: `m 0,115 v -10 ${"h 5 v -10 l 5,5 5,-5 v 10".repeat(13)} h 5 v 10`,
  embattledGrady: `m 0,115 v -20 ${"h 2.5 v 5 h 5 v 5 h 5 v -5 h 5 v -5 h 2.5".repeat(10)} v 20`,
  dovetailed: `m 0,115 v -20 ${"h 7 l -4,10 h 14 l -4,-10 h 7".repeat(10)} v 20`,
  dovetailedIndented: `m 0,115 v -15 ${"l 7,-5 -4,10 7,-5 7,5 -4,-10 7,5".repeat(10)} v 15`,
  nebuly: `m 0,115 v -10.1 h 2.35 ${"c 4,0 7.3,-2 7.3,-4.5 0,-1.2 -0.7,-2.3 -1.9,-3 -1.2,-0.8 -1.8,-1.9 -1.8,-3.1 0,-2.5 3.2,-4.5 7.2,-4.5 4.1,0 7.3,2 7.3,4.5 0,1.2 -0.7,2.3 -1.8,3.1 -1.2,0.7 -1.9,1.8 -1.9,3 0,2.5 3.3,4.5 7.3,4.5".repeat(9)} h 2.35 v 10.1`,
  rayonne: `m 0,115 v -5 ${"a9 9 0 003.1-4.6c.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4.5-2 1.7-3.6 3.1-4.6-.7 1.5-.8 3.4-.3 5.4.5 2 1.7 3.6 3.1 4.6a9 9 0 013.1 4.6c.5 2 .4 3.9-.3 5.4".repeat(17)} a9 9 0 003.1-4.6c.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4.5-2 1.7-3.6 3.1-4.6-.7 1.5-.8 3.4-.3 5.4.75 2.79 2.72 4.08 4.3 5.67 V 115`,
  seaWaves: `m 0,115 v -14.89 ${"c 1.59,-2.01 4.5,-5.18 8.74,-5.18 2.26,0 4.12,1.54 4.45,3.55 -0.57,-0.31 -1.23,-0.48 -1.93,-0.48 -2.16,0 -3.91,1.63 -3.91,3.64 0,2.01 1.75,3.64 3.91,3.64 4.25,0 7.16,-3.17 8.74,-5.18".repeat(10)} v 14.89`,
  dragonTeeth: `m 0,115 v -5.7 c 0,-2.7 2.4,4.2 3.9,5.7 ${"c -1.5,-4.6 -1.9,-10.3 -0.8,-16.2 1.1,-5.9 3.5,-10.7 6.3,-13.8 -1.5,4.6 -1.9,10.3 -0.8,16.2 1.1,5.9 3.5,10.7 6.4,13.8".repeat(17)} c -1.5,-4.6 -1.9,-10.3 -0.8,-16.2 1.1,-5.9 3.5,-10.7 6.3,-13.8 -1.5,4.6 -1.9,10.3 -0.8,16.2 0.6,2.9 1.5,5.6 2.7,8 v 5.7`,
  firTrees: `m 0,115 v -15 l 2,-3.5 -2,0.5 4,-7 ${"l 4,7 -2,-0.5 4,7 -2,-0.5 4,7 4,-7 -2,0.5 4,-7 -2,0.5 4,-7".repeat(12)} 4,7 -2,-0.5 2,3.5 v 15`,
  flechy: "m 0,115 v -15 h 85 l 15,-15 15,15 h 85 v 15",
  barby: "m 0,115 v -15 h 85 l 15,15 15,-15 h 85 v 15",
  enclavy: "m 0,115 v -15 H 85 V 85 h 30 v 15 h 85 v 15",
  escartely: "m 0,115 v -15 h 85 v 15 h 30 v -15 h 85 v 15",
  arched: "m 0,115 c 0,0 60,-19.8 100,-20 c 40,-0.2 100,20 100,20",
  archedReversed: "m 0,115 v -30 c 0,0 60,20.2 100,20 40,-0.2 100,-20 100,-20 v 30"
};

// from: translate(10 50) rotate(90 100 100) scale(1 1)
// to: translate(210 50) rotate(90 -100 100) scale(-1 1)
function transform(obj) {
  let {x = 0, y = 0, angle = 0, orX = 100, orY = 100, scaleX = 1, scaleY = 1} = obj;
  x = x + 100 - scaleX * 100;
  y = y + 100 - scaleY * 100;
  orX = scaleX * 100;
  orY = scaleY * 100;
  return `translate(${x} ${y}) rotate(${angle} ${orX} ${orY}) scale(${scaleX} ${scaleY})`;
}

const templates = {
  // straight divisions
  perFess: `<rect x="0" y="100" width="200" height="100"/>`,
  perPale: `<rect x="100" y="0" width="100" height="200"/>`,
  perBend: `<polygon points="0,0 200,200 0,200"/>`,
  perBendSinister: `<polygon points="200,0 0,200 200,200"/>`,
  perChevron: `<polygon points="0,200 100,100 200,200"/>`,
  perChevronReversed: `<polygon points="0,0 100,100 200,0"/>`,
  perCross: `<rect x="100" y="0" width="100" height="100"/><rect x="0" y="100" width="100" height="100"/>`,
  perPile: `<polygon points="0,0 15,0 100,200 185,0 200,0 200,200 0,200"/>`,
  perSaltire: `<polygon points="0,0 0,200 200,0 200,200"/>`,
  gyronny: `<polygon points="0,0 200,200 200,100 0,100"/><polygon points="200,0 0,200 100,200 100,0"/>`,
  chevronny: `<path d="M0,80 100,-15 200,80 200,120 100,25 0,120z M0,160 100,65 200,160 200,200 100,105 0,200z M0,240 100,145 200,240 0,240z"/>`,
  // lined divisions
  perFessLined: line => `<path d="${line} V200 H0 Z"/>`,
  perPaleLined: line => `<path d="${line} V200 H0 Z" transform="rotate(-90 100 100)"/>`,
  perBendLined: line => `<path d="${line} V200 H0 Z" transform="translate(-10 -10) rotate(45 110 110) scale(1.1)"/>`,
  perBendSinisterLined: line => `<path d="${line} V200 H0 Z" transform="translate(-10 -10) rotate(-45 110 110) scale(1.1)"/>`,
  perChevronLined: line => `<path d="${line} L100,200 Z" transform="translate(129 71) rotate(-45 -100 100) scale(-1 1)"/><path d="${line} L100,200 Z" transform="translate(71 71) rotate(45 100 100)"/>`,
  perChevronReversedLined: line => `<path d="${line} L100,200 Z" transform="translate(-70.7 -70.7) rotate(225 100 100)"/><path d="${line} L100,200 Z" transform="translate(270.7 -70.7) rotate(-225 -100 100) scale(-1 1)"/>`,
  perCrossLined: line => `<path d="${line} V400 H0 Z" transform="translate(0 50) scale(.5)"/><path d="${line} V400 H0 Z" transform="translate(200 150) scale(-.5)"/>`,
  perPileLined: line => `<path d="${line} V200 H0 Z" transform="translate(161.66 10) rotate(66.66 -100 100) scale(-1 1)"/><path d="${line} V200 H0 Z" transform="translate(38.33 10) rotate(-66.66 100 100)"/>`,
  // straight ordinaries
  fess: `<rect x="0" y="75" width="200" height="50"/>`,
  pale: `<rect x="75" y="0" width="50" height="200"/>`,
  bend: `<polygon points="35,0 200,165 200,200 165,200 0,35 0,0"/>`,
  bendSinister: `<polygon points="0,165 165,0 200,0 200,35 35,200 0,200"/>`,
  chief: `<rect width="200" height="75"/>`,
  bar: `<rect x="0" y="87.5" width="200" height="25"/>`,
  gemelle: `<rect x="0" y="76" width="200" height="16"/><rect x="0" y="108" width="200" height="16"/>`,
  fessCotissed: `<rect x="0" y="67" width="200" height="8"/><rect x="0" y="83" width="200" height="34"/><rect x="0" y="125" width="200" height="8"/>`,
  fessDoubleCotissed: `<rect x="0" y="60" width="200" height="7.5"/><rect x="0" y="72.5" width="200" height="7.5"/><rect x="0" y="85" width="200" height="30"/><rect x="0" y="120" width="200" height="7.5"/><rect x="0" y="132.5" width="200" height="7.5"/>`,
  bendlet: `<polygon points="22,0 200,178 200,200 178,200 0,22 0,0"/>`,
  bendletSinister: `<polygon points="0,178 178,0 200,0 200,22 22,200 0,200"/>`,
  terrace: `<rect x="0" y="145" width="200" height="55"/>`,
  cross: `<polygon points="85,0 85,85 0,85 0,115 85,115 85,200 115,200 115,115 200,115 200,85 115,85 115,0"/>`,
  crossParted: `<path d="M 80 0 L 80 80 L 0 80 L 0 95 L 80 95 L 80 105 L 0 105 L 0 120 L 80 120 L 80 200 L 95 200 L 95 120 L 105 120 L 105 200 L 120 200 L 120 120 L 200 120 L 200 105 L 120 105 L 120 95 L 200 95 L 200 80 L 120 80 L 120 0 L 105 0 L 105 80 L 95 80 L 95 0 L 80 0 z M 95 95 L 105 95 L 105 105 L 95 105 L 95 95 z"/>`,
  saltire: `<path d="M 0,21 79,100 0,179 0,200 21,200 100,121 179,200 200,200 200,179 121,100 200,21 200,0 179,0 100,79 21,0 0,0 Z"/>`,
  saltireParted: `<path d="M 7 0 L 89 82 L 82 89 L 0 7 L 0 28 L 72 100 L 0 172 L 0 193 L 82 111 L 89 118 L 7 200 L 28 200 L 100 128 L 172 200 L 193 200 L 111 118 L 118 111 L 200 193 L 200 172 L 128 100 L 200 28 L 200 7 L 118 89 L 111 82 L 193 0 L 172 0 L 100 72 L 28 0 L 7 0 z M 100 93 L 107 100 L 100 107 L 93 100 L 100 93 z"/>`,
  mount: `<path d="m0,250 a100,100,0,0,1,200,0"/>`,
  point: `<path d="M0,200 Q80,180 100,135 Q120,180 200,200"/>`,
  flaunches: `<path d="M0,0 q120,100 0,200 M200,0 q-120,100 0,200"/>`,
  gore: `<path d="M20,0 Q30,75 100,100 Q80,150 100,200 L0,200 L0,0 Z"/>`,
  pall: `<polygon points="0,0 30,0 100,70 170,0 200,0 200,30 122,109 122,200 78,200 78,109 0,30"/>`,
  pallReversed: `<polygon points="0,200 0,170 78,91 78,0 122,0 122,91 200,170 200,200 170,200 100,130 30,200"/>`,
  chevron: `<polygon points="0,125 100,60 200,125 200,165 100,100 0,165"/>`,
  chevronReversed: `<polygon points="0,75 100,140 200,75 200,35 100,100 0,35"/>`,
  gyron: `<polygon points="0,0 100,100 0,100"/>`,
  quarter: `<rect width="100" height="100"/>`,
  canton: `<rect width="75" height="75"/>`,
  pile: `<polygon points="70,0 100,175 130,0"/>`,
  pileInBend: `<polygon points="200,200 200,144 25,25 145,200"/>`,
  pileInBendSinister: `<polygon points="0,200 0,144 175,25 55,200"/>`,
  piles: `<polygon points="46,0 75,175 103,0"/><polygon points="95,0 125,175 154,0"/>`,
  pilesInPoint: `<path d="M15,0 100,200 60,0Z M80,0 100,200 120,0Z M140,0 100,200 185,0Z"/>`,
  label: `<path d="m 46,54.8 6.6,-15.6 95.1,0 5.9,15.5 -16.8,0.1 4.5,-11.8 L 104,43 l 4.3,11.9 -16.8,0 4.3,-11.8 -37.2,0 4.5,11.8 -16.9,0 z"/>`,
  // lined ordinaries
  fessLined: line => `<path d="${line}" transform="translate(0 -25)"/><path d="${line}" transform="translate(0 25) rotate(180 100 100)"/><rect x="0" y="88" width="200" height="24" stroke="none"/>`,
  paleLined: line => `<path d="${line}" transform="rotate(-90 100 100) translate(0 -25)"/><path d="${line}" transform="rotate(90 100 100) translate(0 -25)"/><rect x="88" y="0" width="24" height="200" stroke="none"/>`,
  bendLined: line => `<path d="${line}" transform="translate(8 -18) rotate(45 110 100) scale(1.1 1)"/><path d="${line}" transform="translate(-28 18) rotate(225 110 100) scale(1.1 1)"/><rect x="0" y="88" width="200" height="24" transform="translate(-10 0) rotate(45 110 100) scale(1.1 1)" stroke="none"/>`,
  bendSinisterLined: line => `<path d="${line}" transform="translate(-28 -18) rotate(-45 110 100) scale(1.1 1)"/><path d="${line}" transform="translate(8 18) rotate(-225 110 100) scale(1.1 1)"/><rect x="0" y="88" width="200" height="24" transform="translate(-10 0) rotate(-45 110 100) scale(1.1 1)" stroke="none"/>`,
  chiefLined: line => `<path d="${line}" transform="translate(0,-25) rotate(180.00001 100 100)"/><rect width="200" height="62" stroke="none"/>`,
  barLined: line => `<path d="${line}" transform="translate(0,-12.5)"/><path d="${line}" transform="translate(0,12.5) rotate(180.00001 100 100)"/><rect x="0" y="94" width="200" height="12" stroke="none"/>`,
  gemelleLined: line => `<path d="${line}" transform="translate(0,-22.5)"/><path d="${line}" transform="translate(0,22.5) rotate(180.00001 100 100)"/>`,
  fessCotissedLined: line => `<path d="${line}" transform="translate(0 15) scale(1 .5)"/><path d="${line}" transform="translate(0 85) rotate(180 100 50) scale(1 .5)"/><rect x="0" y="80" width="200" height="40"/>`,
  fessDoubleCotissedLined: line => `<rect x="0" y="85" width="200" height="30"/><rect x="0" y="72.5" width="200" height="7.5"/><rect x="0" y="120" width="200" height="7.5"/><path d="${line}" transform="translate(0 10) scale(1 .5)"/><path d="${line}" transform="translate(0 90) rotate(180 100 50) scale(1 .5)"/>`,
  bendletLined: line => `<path d="${line}" transform="translate(2 -12) rotate(45 110 100) scale(1.1 1)"/><path d="${line}" transform="translate(-22 12) rotate(225 110 100) scale(1.1 1)"/><rect x="0" y="94" width="200" height="12" transform="translate(-10 0) rotate(45 110 100) scale(1.1 1)" stroke="none"/>`,
  bendletSinisterLined: line => `<path d="${line}" transform="translate(-22 -12) rotate(-45 110 100) scale(1.1 1)"/><path d="${line}" transform="translate(2 12) rotate(-225 110 100) scale(1.1 1)"/><rect x="0" y="94" width="200" height="12" transform="translate(-10 0) rotate(-45 110 100) scale(1.1 1)" stroke="none"/>`,
  terraceLined: line => `<path d="${line}" transform="translate(0,50)"/><rect x="0" y="164" width="200" height="36" stroke="none"/>`,
  crossLined: line => `<path d="${line}" transform="translate(0 -14.5)"/><path d="${line}" transform="rotate(180 100 100) translate(0 -14.5)"/><path d="${line}" transform="rotate(-90 100 100) translate(0 -14.5)"/><path d="${line}" transform="rotate(-270 100 100) translate(0 -14.5)"/>`,
  crossPartedLined: line => `<path d="${line}" transform="translate(0 -20)"/><path d="${line}" transform="rotate(180 100 100) translate(0 -20)"/><path d="${line}" transform="rotate(-90 100 100) translate(0 -20)"/><path d="${line}" transform="rotate(-270 100 100) translate(0 -20)"/>`,
  saltireLined: line => `<path d="${line}" transform="translate(0 -10) rotate(45 110 100) scale(1.1 1)"/><path d="${line}" transform="translate(-20 10) rotate(225 110 100) scale(1.1 1)"/><path d="${line}" transform="translate(-20 -10) rotate(-45 110 100) scale(1.1 1)"/><path d="${line}" transform="translate(0 10) rotate(-225 110 100) scale(1.1 1)"/>`,
  saltirePartedLined: line => `<path d="${line}" transform="translate(3 -13) rotate(45 110 100) scale(1.1 1)"/><path d="${line}" transform="translate(-23 13) rotate(225 110 100) scale(1.1 1)"/><path d="${line}" transform="translate(-23 -13) rotate(-45 110 100) scale(1.1 1)"/><path d="${line}" transform="translate(3 13) rotate(-225 110 100) scale(1.1 1)"/>`
};

const patterns = {
  semy: (p, c1, c2, size, chargeId) => `<pattern id="${p}" width="${size * 25}" height="${size * 25}" viewBox="0 0 200 200" patternUnits="userSpaceOnUse" stroke="#000"><rect width="200" height="200" fill="${c1}" stroke="none"/><g fill="${c2}"><use transform="translate(-100 -50)" href="#${chargeId}"/><use transform="translate(100 -50)" href="#${chargeId}"/><use transform="translate(0 50)" href="#${chargeId}"/></g></pattern>`,
  vair: (p, c1, c2, size) => `<pattern id="${p}" width="${size * 25}" height="${size * 50}" viewBox="0 0 25 50" patternUnits="userSpaceOnUse" stroke="#000" stroke-width=".2"><rect width="25" height="25" fill="${c1}" stroke="none"/><path d="m12.5,0 l6.25,6.25 v12.5 l6.25,6.25 h-25 l6.25,-6.25 v-12.5 z" fill="${c2}"/><rect x="0" y="25" width="25" height="25" fill="${c2}" stroke="none"/><path d="m25,25 l-6.25,6.25 v12.5 l-6.25,6.25 l-6.25,-6.25 v-12.5 l-6.25,-6.25 z" fill="${c1}"/><path d="M0 50 h25" fill="none"/></pattern>`,
  counterVair: (p, c1, c2, size) => `<pattern id="${p}" width="${size * 25}" height="${size * 50}" viewBox="0 0 25 50" patternUnits="userSpaceOnUse" stroke="#000" stroke-width=".2"><rect width="25" height="50" fill="${c2}" stroke="none"/><path d="m 12.5,0 6.25,6.25 v 12.5 L 25,25 18.75,31.25 v 12.5 L 12.5,50 6.25,43.75 V 31.25 L 0,25 6.25,18.75 V 6.25 Z" fill="${c1}"/></pattern>`,
  vairInPale: (p, c1, c2, size) => `<pattern id="${p}" width="${size * 25}" height="${size * 25}" viewBox="0 0 25 25" patternUnits="userSpaceOnUse"><rect width="25" height="25" fill="${c1}"/><path d="m12.5,0 l6.25,6.25 v12.5 l6.25,6.25 h-25 l6.25,-6.25 v-12.5 z" fill="${c2}" stroke="#000" stroke-width=".2"/></pattern>`,
  vairEnPointe: (p, c1, c2, size) => `<pattern id="${p}" width="${size * 25}" height="${size * 50}" viewBox="0 0 25 50" patternUnits="userSpaceOnUse"><rect width="25" height="25" fill="${c2}"/><path d="m12.5,0 l6.25,6.25 v12.5 l6.25,6.25 h-25 l6.25,-6.25 v-12.5 z" fill="${c1}"/><rect x="0" y="25" width="25" height="25" fill="${c1}" stroke-width="1" stroke="${c1}"/><path d="m12.5,25 l6.25,6.25 v12.5 l6.25,6.25 h-25 l6.25,-6.25 v-12.5 z" fill="${c2}"/></pattern>`,
  vairAncien: (p, c1, c2, size) => `<pattern id="${p}" width="${size * 25}" height="${size * 25}" viewBox="0 0 100 100" patternUnits="userSpaceOnUse"><rect width="100" height="100" fill="${c1}"/><path fill="${c2}" stroke="none" d="m 0,90 c 10,0 25,-5 25,-40 0,-25 10,-40 25,-40 15,0 25,15 25,40 0,35 15,40 25,40 v 10 H 0 Z"/><path fill="none" stroke="#000" d="M 0,90 c 10,0 25,-5 25,-40 0,-35 15,-40 25,-40 10,0 25,5 25,40 0,35 15,40 25,40 M0,100 h100"/></pattern>`,
  potent: (p, c1, c2, size) => `<pattern id="${p}" width="${size * 25}" height="${size * 25}" viewBox="0 0 200 200" patternUnits="userSpaceOnUse" stroke="#000"><rect width="200" height="100" fill="${c1}" stroke="none"/><rect y="100" width="200" height="100" fill="${c2}" stroke="none"/><path d="m25 50h50v-50h50v50h50v50h-150z" fill="${c2}"/><path d="m25 100v50h50v50h50v-50h50v-50z" fill="${c1}"/><path d="m0 0h200 M0 100h200" fill="none"/></pattern>`,
  counterPotent: (p, c1, c2, size) => `<pattern id="${p}" width="${size * 25}" height="${size * 25}" viewBox="0 0 200 200" patternUnits="userSpaceOnUse" stroke="none"><rect width="200" height="200" fill="${c1}"/><path d="m25 50h50v-50h50v50h50v100h-50v50h-50v-50h-50v-50z" fill="${c2}"/><path d="m0 0h200 M0 100h200 M0 200h200"/></pattern>`,
  potentInPale: (p, c1, c2, size) => `<pattern id="${p}" width="${size * 25}" height="${size * 12.5}" viewBox="0 0 200 100" patternUnits="userSpaceOnUse" stroke-width="1"><rect width="200" height="100" fill="${c1}" stroke="none"/><path d="m25 50h50v-50h50v50h50v50h-150z" fill="${c2}" stroke="#000"/><path d="m0 0h200 M0 100h200" fill="none" stroke="#000"/></pattern>`,
  potentEnPointe: (p, c1, c2, size) => `<pattern id="${p}" width="${size * 25}" height="${size * 25}" viewBox="0 0 200 200" patternUnits="userSpaceOnUse" stroke="none"><rect width="200" height="200" fill="${c1}"/><path d="m0 0h25v50h50v50h50v-50h50v-50h25v100h-25v50h-50v50h-50v-50h-50v-50h-25v-100" fill="${c2}"/></pattern>`,
  ermine: (p, c1, c2, size) => `<pattern id="${p}" width="${size * 25}" height="${size * 25}" viewBox="0 0 200 200" patternUnits="userSpaceOnUse" fill="${c2}"><rect width="200" height="200" fill="${c1}"/><g stroke="none" fill="${c2}"><g transform="translate(-100 -50)"><path d="m100 81.1c-4.25 17.6-12.7 29.8-21.2 38.9 3.65-0.607 7.9-3.04 11.5-5.47-2.42 4.86-4.86 8.51-7.3 12.7 1.82-0.607 6.07-4.86 12.7-10.9 1.21 8.51 2.42 17.6 4.25 23.6 1.82-5.47 3.04-15.2 4.25-23.6 3.65 3.65 7.3 7.9 12.7 10.9l-7.9-13.3c3.65 1.82 7.9 4.86 11.5 6.07-9.11-9.11-17-21.2-20.6-38.9z"/><path d="m82.4 81.7c-0.607-0.607-6.07 2.42-9.72-4.25 7.9 6.68 15.2-7.3 21.8 1.82 1.82 4.25-6.68 10.9-12.1 2.42z"/><path d="m117 81.7c0.607-1.21 6.07 2.42 9.11-4.86-7.3 7.3-15.2-7.3-21.2 2.42-1.82 4.25 6.68 10.9 12.1 2.42z"/><path d="m101 66.5c-1.02-0.607 3.58-4.25-3.07-8.51 5.63 7.9-10.2 10.9-1.54 17.6 3.58 2.42 12.2-2.42 4.6-9.11z"/></g><g transform="translate(100 -50)"><path d="m100 81.1c-4.25 17.6-12.7 29.8-21.2 38.9 3.65-0.607 7.9-3.04 11.5-5.47-2.42 4.86-4.86 8.51-7.3 12.7 1.82-0.607 6.07-4.86 12.7-10.9 1.21 8.51 2.42 17.6 4.25 23.6 1.82-5.47 3.04-15.2 4.25-23.6 3.65 3.65 7.3 7.9 12.7 10.9l-7.9-13.3c3.65 1.82 7.9 4.86 11.5 6.07-9.11-9.11-17-21.2-20.6-38.9z"/><path d="m82.4 81.7c-0.607-0.607-6.07 2.42-9.72-4.25 7.9 6.68 15.2-7.3 21.8 1.82 1.82 4.25-6.68 10.9-12.1 2.42z"/><path d="m117 81.7c0.607-1.21 6.07 2.42 9.11-4.86-7.3 7.3-15.2-7.3-21.2 2.42-1.82 4.25 6.68 10.9 12.1 2.42z"/><path d="m101 66.5c-1.02-0.607 3.58-4.25-3.07-8.51 5.63 7.9-10.2 10.9-1.54 17.6 3.58 2.42 12.2-2.42 4.6-9.11z"/></g><g transform="translate(0 50)"><path d="m100 81.1c-4.25 17.6-12.7 29.8-21.2 38.9 3.65-0.607 7.9-3.04 11.5-5.47-2.42 4.86-4.86 8.51-7.3 12.7 1.82-0.607 6.07-4.86 12.7-10.9 1.21 8.51 2.42 17.6 4.25 23.6 1.82-5.47 3.04-15.2 4.25-23.6 3.65 3.65 7.3 7.9 12.7 10.9l-7.9-13.3c3.65 1.82 7.9 4.86 11.5 6.07-9.11-9.11-17-21.2-20.6-38.9z"/><path d="m82.4 81.7c-0.607-0.607-6.07 2.42-9.72-4.25 7.9 6.68 15.2-7.3 21.8 1.82 1.82 4.25-6.68 10.9-12.1 2.42z"/><path d="m117 81.7c0.607-1.21 6.07 2.42 9.11-4.86-7.3 7.3-15.2-7.3-21.2 2.42-1.82 4.25 6.68 10.9 12.1 2.42z"/><path d="m101 66.5c-1.02-0.607 3.58-4.25-3.07-8.51 5.63 7.9-10.2 10.9-1.54 17.6 3.58 2.42 12.2-2.42 4.6-9.11z"/></g></g></pattern>`,
  chequy: (p, c1, c2, size) => `<pattern id="${p}" width="${size * 50}" height="${size * 50}" viewBox="0 0 50 50" patternUnits="userSpaceOnUse" fill="${c2}"><rect width="50" height="50"/><rect width="25" height="25" fill="${c1}"/><rect x="25" y="25" width="25" height="25" fill="${c1}"/></pattern>`,
  lozengy: (p, c1, c2, size) => `<pattern id="${p}" width="${size * 25}" height="${size * 25}" viewBox="0 0 50 50" patternUnits="userSpaceOnUse"><rect width="50" height="50" fill="${c1}"/><polygon points="25,0 50,25 25,50 0,25" fill="${c2}"/></pattern>`,
  fusily: (p, c1, c2, size) => `<pattern id="${p}" width="${size * 25}" height="${size * 50}" viewBox="0 0 50 100" patternUnits="userSpaceOnUse"><rect width="50" height="100" fill="${c2}"/><polygon points="25,0 50,50 25,100 0,50" fill="${c1}"/></pattern>`,
  pally: (p, c1, c2, size) => `<pattern id="${p}" width="${size * 100}" height="${size * 25}" viewBox="0 0 100 25" patternUnits="userSpaceOnUse"><rect width="100" height="25" fill="${c2}"/><rect x="25" y="0" width="25" height="25" fill="${c1}"/><rect x="75" y="0" width="25" height="25" fill="${c1}"/></pattern>`,
  barry: (p, c1, c2, size) => `<pattern id="${p}" width="${size * 25}" height="${size * 100}" viewBox="0 0 25 100" patternUnits="userSpaceOnUse"><rect width="25" height="100" fill="${c2}"/><rect x="0" y="25" width="25" height="25" fill="${c1}"/><rect x="0" y="75" width="25" height="25" fill="${c1}"/></pattern>`,
  gemelles: (p, c1, c2, size) => `<pattern id="${p}" width="${size * 25}" height="${size * 25}" viewBox="0 0 50 50" patternUnits="userSpaceOnUse"><rect width="50" height="50" fill="${c1}"/><rect y="5" width="50" height="10" fill="${c2}"/><rect y="40" width="50" height="10" fill="${c2}"/></pattern>`,
  bendy: (p, c1, c2, size) => `<pattern id="${p}" width="${size * 100}" height="${size * 100}" viewBox="0 0 100 100" patternUnits="userSpaceOnUse"><rect width="100" height="100" fill="${c1}"/><polygon points="0,25 75,100 25,100 0,75" fill="${c2}"/><polygon points="25,0 75,0 100,25 100,75" fill="${c2}"/></pattern>`,
  bendySinister: (p, c1, c2, size) => `<pattern id="${p}" width="${size * 100}" height="${size * 100}" viewBox="0 0 100 100" patternUnits="userSpaceOnUse"><rect width="100" height="100" fill="${c2}"/><polygon points="0,25 25,0 75,0 0,75" fill="${c1}"/><polygon points="25,100 100,25 100,75 75,100" fill="${c1}"/></pattern>`,
  palyBendy: (p, c1, c2, size) => `<pattern id="${p}" width="${size * 125.16}" height="${size * 71.52}" viewBox="0 0 175 100" patternUnits="userSpaceOnUse"><rect y="0" x="0" width="175" height="100" fill="${c2}"/><g fill="${c1}"><path d="m0 20 35 30v50l-35-30z"/><path d="m35 0 35 30v50l-35-30z"/><path d="m70 0h23l12 10v50l-35-30z"/><path d="m70 80 23 20h-23z"/><path d="m105 60 35 30v10h-35z"/><path d="m105 0h35v40l-35-30z"/><path d="m 140,40 35,30 v 30 h -23 l -12,-10z"/><path d="M 175,0 V 20 L 152,0 Z"/></g></pattern>`,
  barryBendy: (p, c1, c2, size) => `<pattern id="${p}" width="${size * 71.44}" height="${size * 125.02}" viewBox="0 0 100 175" patternUnits="userSpaceOnUse"><rect width="100" height="175" fill="${c2}"/><g fill="${c1}"><path d="m20 0 30 35h50l-30-35z"/><path d="m0 35 30 35h50l-30-35z"/><path d="m0 70v23l10 12h50l-30-35z"/><path d="m80 70 20 23v-23z"/><path d="m60 105 30 35h10v-35z"/><path d="m0 105v35h40l-30-35z"/><path d="m 40,140 30,35 h 30 v -23 l -10,-12 z"/><path d="m0 175h20l-20-23z"/></g></pattern>`,
  pappellony: (p, c1, c2, size) => `<pattern id="${p}" width="${size * 25}" height="${size * 25}" viewBox="0 0 100 100" patternUnits="userSpaceOnUse"><rect width="100" height="100" fill="${c1}"/><circle cx="0" cy="51" r="45" stroke="${c2}" fill="${c1}" stroke-width="10"/><circle cx="100" cy="51" r="45" stroke="${c2}" fill="${c1}" stroke-width="10"/><circle cx="50" cy="1" r="45" stroke="${c2}" fill="${c1}" stroke-width="10"/></pattern>`,
  pappellony2: (p, c1, c2, size) => `<pattern id="${p}" width="${size * 25}" height="${size * 25}" viewBox="0 0 100 100" patternUnits="userSpaceOnUse" stroke="#000" stroke-width="2"><rect width="100" height="100" fill="${c1}" stroke="none"/><circle cy="50" r="49" fill="${c2}"/><circle cx="100" cy="50" r="49" fill="${c2}"/><circle cx="50" cy="0" r="49" fill="${c1}"/></pattern>`,
  scaly: (p, c1, c2, size) => `<pattern id="${p}" width="${size * 25}" height="${size * 25}" viewBox="0 0 100 100" patternUnits="userSpaceOnUse" stroke="#000"><rect width="100" height="100" fill="${c1}" stroke="none"/><path d="M 0,84 C -40,84 -50,49 -50,49 -50,79 -27,99 0,99 27,99 50,79 50,49 50,49 40,84 0,84 Z" fill="${c2}"/><path d="M 100,84 C 60,84 50,49 50,49 c 0,30 23,50 50,50 27,0 50,-20 50,-50 0,0 -10,35 -50,35 z" fill="${c2}"/><path d="M 50,35 C 10,35 0,0 0,0 0,30 23,50 50,50 77,50 100,30 100,0 100,0 90,35 50,35 Z" fill="${c2}"/></pattern>`,
  plumetty: (p, c1, c2, size) => `<pattern id="${p}" width="${size * 25}" height="${size * 50}" viewBox="0 0 50 100" patternUnits="userSpaceOnUse" stroke-width=".8"><rect width="50" height="100" fill="${c2}" stroke="none"/><path fill="${c1}" stroke="none" d="M 25,100 C 44,88 49.5,74 50,50 33.5,40 25,25 25,4e-7 25,25 16.5,40 0,50 0.5,74 6,88 25,100 Z"/><path fill="none" stroke="${c2}" d="m17 40c5.363 2.692 10.7 2.641 16 0m-19 7c7.448 4.105 14.78 3.894 22 0m-27 7c6-2 10.75 3.003 16 3 5.412-0.0031 10-5 16-3m-35 9c4-7 12 3 19 2 7 1 15-9 19-2m-35 6c6-2 11 3 16 3s10-5 16-3m-30 7c8 0 8 3 14 3s7-3 14-3m-25 8c7.385 4.048 14.72 3.951 22 0m-19 8c5.455 2.766 10.78 2.566 16 0m-8 6v-78"/><g fill="none" stroke="${c1}"><path d="m42 90c2.678 1.344 5.337 2.004 8 2m-11 5c3.686 2.032 7.344 3.006 10.97 3m0.0261-1.2e-4v-30"/><path d="m0 92c2.689 0.0045 5.328-0.6687 8-2m-8 10c3.709-0.0033 7.348-1.031 11-3m-11 3v-30"/><path d="m0 7c5.412-0.0031 10-5 16-3m-16 11c7 1 15-9 19-2m-19 9c5 0 10-5 16-3m-16 10c6 0 7-3 14-3m-14.02 11c3.685-0.002185 7.357-1.014 11.02-3m-11 10c2.694-0.01117 5.358-0.7036 7.996-2m-8 6v-48"/><path d="m34 4c6-2 10.75 3.003 16 3m-19 6c4-7 12 3 19 2m-16 4c6-2 11 3 16 3m-14 4c8 0 8 3 14 3m-11 5c3.641 1.996 7.383 2.985 11 3m-8 5c2.762 1.401 5.303 2.154 8.002 2.112m-0.00154 3.888v-48"/></g></pattern>`,
  masoned: (p, c1, c2, size) => `<pattern id="${p}" width="${size * 25}" height="${size * 25}" viewBox="0 0 100 100" patternUnits="userSpaceOnUse" fill="none"><rect width="100" height="100" fill="${c1}"/><rect width="100" height="50" stroke="${c2}" stroke-width="4"/><line x1="50" y1="50" x2="50" y2="100" stroke="${c2}" stroke-width="5"/></pattern>`,
  fretty: (p, c1, c2, size) => `<pattern id="${p}" width="${size * 40}" height="${size * 40}" viewBox="0 0 140 140" patternUnits="userSpaceOnUse" stroke="#000" stroke-width="2"><rect width="140" height="140" fill="${c1}" stroke="none"/><path d="m-15 5 150 150 20-20-150-150z" fill="${c2}"/><path d="m10 150 140-140-20-20-140 140z" fill="${c2}" stroke="none"/><path d="m0 120 20 20 120-120-20-20z" fill="none"/></pattern>`,
  grillage: (p, c1, c2, size) => `<pattern id="${p}" width="${size * 50}" height="${size * 50}" viewBox="0 0 200 200" patternUnits="userSpaceOnUse" stroke="#000" stroke-width="2"><rect width="200" height="200" fill="${c1}" stroke="none"/><path d="m205 65v-30h-210v30z" fill="${c2}"/><path d="m65-5h-30v210h30z" fill="${c2}"/><path d="m205 165v-30h-210v30z" fill="${c2}"/><path d="m165,65h-30v140h30z" fill="${c2}"/><path d="m 165,-5h-30v40h30z" fill="${c2}"/></pattern>`,
  chainy: (p, c1, c2, size) => `<pattern id="${p}" width="${size * 33.4}" height="${size * 33.4}" viewBox="0 0 200 200" patternUnits="userSpaceOnUse" stroke="#000" stroke-width="2"><rect x="-6.691e-6" width="200" height="200" fill="${c1}" stroke="none"/><path d="m155-5-20-20-160 160 20 20z" fill="${c2}"/><path d="m45 205 160-160 20 20-160 160z" fill="${c2}"/><path d="m45-5 20-20 160 160-20 20-160-160" fill="${c2}"/><path d="m-5 45-20 20 160 160 20-20-160-160" fill="${c2}"/></pattern>`,
  maily: (p, c1, c2, size) => `<pattern id="${p}" width="${size * 33.4}" height="${size * 33.4}" viewBox="0 0 200 200" patternUnits="userSpaceOnUse" stroke="#000" stroke-width="1.2"><path fill="${c1}" stroke="none" d="M0 0h200v200H0z"/><g fill="${c2}"><path d="m80-2c-5.27e-4 2.403-0.1094 6.806-0.3262 9.199 5.014-1.109 10.1-1.768 15.19-2.059 0.09325-1.712 0.1401-5.426 0.1406-7.141z"/><path d="m100 5a95 95 0 0 0-95 95 95 95 0 0 0 95 95 95 95 0 0 0 95-95 95 95 0 0 0-95-95zm0 15a80 80 0 0 1 80 80 80 80 0 0 1-80 80 80 80 0 0 1-80-80 80 80 0 0 1 80-80z"/><path d="m92.8 20.33c-5.562 0.4859-11.04 1.603-16.34 3.217-7.793 25.31-27.61 45.12-52.91 52.91-5.321 1.638-10.8 2.716-16.34 3.217-2.394 0.2168-6.796 0.3256-9.199 0.3262v15c1.714-4.79e-4 5.429-0.04737 7.141-0.1406 5.109-0.2761 10.19-0.9646 15.19-2.059 36.24-7.937 64.54-36.24 72.47-72.47z"/><path d="m202 80c-2.403-5.31e-4 -6.806-0.1094-9.199-0.3262 1.109 5.014 1.768 10.1 2.059 15.19 1.712 0.09326 5.426 0.1401 7.141 0.1406z"/><path d="m179.7 92.8c-0.4859-5.562-1.603-11.04-3.217-16.34-25.31-7.793-45.12-27.61-52.91-52.91-1.638-5.321-2.716-10.8-3.217-16.34-0.2168-2.394-0.3256-6.796-0.3262-9.199h-15c4.8e-4 1.714 0.0474 5.429 0.1406 7.141 0.2761 5.109 0.9646 10.19 2.059 15.19 7.937 36.24 36.24 64.54 72.47 72.47z"/><path d="m120 202c5.3e-4 -2.403 0.1094-6.806 0.3262-9.199-5.014 1.109-10.1 1.768-15.19 2.059-0.0933 1.712-0.1402 5.426-0.1406 7.141z"/><path d="m107.2 179.7c5.562-0.4859 11.04-1.603 16.34-3.217 7.793-25.31 27.61-45.12 52.91-52.91 5.321-1.638 10.8-2.716 16.34-3.217 2.394-0.2168 6.796-0.3256 9.199-0.3262v-15c-1.714 4.7e-4 -5.429 0.0474-7.141 0.1406-5.109 0.2761-10.19 0.9646-15.19 2.059-36.24 7.937-64.54 36.24-72.47 72.47z"/><path d="m -2,120 c 2.403,5.4e-4 6.806,0.1094 9.199,0.3262 -1.109,-5.014 -1.768,-10.1 -2.059,-15.19 -1.712,-0.0933 -5.426,-0.1402 -7.141,-0.1406 z"/><path d="m 20.33,107.2 c 0.4859,5.562 1.603,11.04 3.217,16.34 25.31,7.793 45.12,27.61 52.91,52.91 1.638,5.321 2.716,10.8 3.217,16.34 0.2168,2.394 0.3256,6.796 0.3262,9.199 L 95,202 c -4.8e-4,-1.714 -0.0472,-5.44 -0.1404,-7.152 -0.2761,-5.109 -0.9646,-10.19 -2.059,-15.19 -7.937,-36.24 -36.24,-64.54 -72.47,-72.47 z"/></g></pattern>`,
  honeycombed: (p, c1, c2, size) => `<pattern id="${p}" width="${size * 28.6}" height="${size * 49.028}" viewBox="0 0 70 120" patternUnits="userSpaceOnUse"><rect width="70" height="120" fill="${c1}"/><path d="M 70,0 V 20 L 35,40 m 35,80 V 100 L 35,80 M 0,120 V 100 L 35,80 V 40 L 0,20 V 0" stroke="${c2}" fill="none" stroke-width="3"/></pattern>`
};


const blacklight = `<radialGradient id="backlight" cx="100%" cy="100%" r="150%">
  <stop stop-color="#fff" stop-opacity=".3" offset="0"/>
  <stop stop-color="#fff" stop-opacity=".15" offset=".25"/>
  <stop stop-color="#000" stop-opacity="0" offset="1"/>
</radialGradient>`

module.exports = {shieldPaths, lines, templates, patterns, blacklight};
