const shieldPaths = {
  heater: "m25,25 h150 v50 a150,150,0,0,1,-75,125 a150,150,0,0,1,-75,-125 z",
  spanish: "m25,25 h150 v100 a75,75,0,0,1,-150,0 z",
  french: "m 25,25 h 150 v 139.15 c 0,41.745 -66,18.15 -75,36.3 -9,-18.15 -75,5.445 -75,-36.3 v 0 z",
  horsehead: "m 20,40 c 0,60 40,80 40,100 0,10 -4,15 -0.35,30 C 65,185.7 81,200 100,200 c 19.1,0 35.3,-14.6 40.5,-30.4 C 144.2,155 140,150 140,140 140,120 180,100 180,40 142.72,40 150,15 100,15 55,15 55,40 20,40 Z",
  horsehead2: "M60 20c-5 20-10 35-35 55 25 35 35 65 30 100 20 0 35 10 45 26 10-16 30-26 45-26-5-35 5-65 30-100a87 87 0 01-35-55c-25 3-55 3-80 0z",
  polish: "m 90.3,6.3 c -12.7,0 -20.7,10.9 -40.5,14 0,11.8 -4.9,23.5 -11.4,31.1 0,0 12.7,6 12.7,19.3 C 51.1,90.8 30,90.8 30,90.8 c 0,0 -3.6,7.4 -3.6,22.4 0,34.3 23.1,60.2 40.7,68.2 17.6,8 27.7,11.4 32.9,18.6 5.2,-7.3 15.3,-10.7 32.8,-18.6 17.6,-8 40.7,-33.9 40.7,-68.2 0,-15 -3.6,-22.4 -3.6,-22.4 0,0 -21.1,0 -21.1,-20.1 0,-13.3 12.7,-19.3 12.7,-19.3 C 155.1,43.7 150.2,32.1 150.2,20.3 130.4,17.2 122.5,6.3 109.7,6.3 102.5,6.3 100,10 100,10 c 0,0 -2.5,-3.7 -9.7,-3.7 z",
  hessen: "M170 20c4 5 8 13 15 20 0 0-10 0-10 15 0 100-15 140-75 145-65-5-75-45-75-145 0-15-10-15-10-15l15-20c0 15 10-5 70-5s70 20 70 5z",
  swiss: "m 25,20 c -0.1,0 25.2,8.5 37.6,8.5 C 75.1,28.5 99.1,20 100,20 c 0.6,0 24.9,8.5 37.3,8.5 C 149.8,28.5 174.4,20 175,20 l -0.3,22.6 C 173.2,160.3 100,200 100,200 100,200 26.5,160.9 25.2,42.6 Z",
  boeotian: "M150 115c-5 0-10-5-10-15s5-15 10-15c10 0 7 10 15 10 10 0 0-30 0-30-10-25-30-55-65-55S45 40 35 65c0 0-10 30 0 30 8 0 5-10 15-10 5 0 10 5 10 15s-5 15-10 15c-10 0-7-10-15-10-10 0 0 30 0 30 10 25 30 55 65 55s55-30 65-55c0 0 10-30 0-30-8 0-5 10-15 10z",
  roman: "m 160,170 c -40,20 -80,20 -120,0 V 30 C 80,10 120,10 160,30 Z",
  kite: "m 53.3,46.4 c 0,4.1 1,12.3 1,12.3 7.1,55.7 45.7,141.3 45.7,141.3 0,0 38.6,-85.6 45.7,-141.2 0,0 1,-8.1 1,-12.3 C 146.7,20.9 125.8,0.1 100,0.1 74.2,0.1 53.3,20.9 53.3,46.4 Z",
  oldFrench: "m25,25 h150 v75 a100,100,0,0,1,-75,100 a100,100,0,0,1,-75,-100 z",
  renaissance: "M 25,33.9 C 33.4,50.3 36.2,72.9 36.2,81.7 36.2,109.9 25,122.6 25,141 c 0,29.4 24.9,44.1 40.2,47.7 15.3,3.7 29.3,0 34.8,11.3 5.5,-11.3 19.6,-7.6 34.8,-11.3 C 150.1,185 175,170.3 175,141 c 0,-18.4 -11.2,-31.1 -11.2,-59.3 0,-8.8 2.8,-31.3 11.2,-47.7 L 155.7,14.4 C 138.2,21.8 119.3,25.7 100,25.7 c -19.3,0 -38.2,-3.9 -55.7,-11.3 z",
  baroque: "m 100,25 c 18,0 50,2 75,14 v 37 l -2.7,3.2 c -4.9,5.4 -6.6,9.6 -6.7,16.2 0,6.5 2,11.6 6.9,17.2 l 2.8,3.1 v 10.2 c 0,17.7 -2.2,27.7 -7.8,35.9 -5,7.3 -11.7,11.3 -32.3,19.4 -12.6,5 -20.2,8.8 -28.6,14.5 C 103.3,198 100,200 100,200 c 0,0 -2.8,-2.3 -6.4,-4.7 C 85.6,189.8 78,186 65,180.9 32.4,168.1 26.9,160.9 25.8,129.3 L 25,116 l 3.3,-3.3 c 4.8,-5.2 7,-10.7 7,-17.3 0,-6.8 -1.8,-11.1 -6.5,-16.1 L 25,76 V 39 C 50,27 82,25 100,25 Z",
  targe: "m 20,35 c 15,0 115,-60 155,-10 -5,10 -15,15 -10,50 5,45 10,70 -10,90 C 125,195 75,195 50,175 25,150 30,130 35,85 50,95 65,85 65,70 65,50 50,45 40,50 30,55 27,65 30,70 23,73 20,70 14,70 11,60 20,45 20,35 Z",
  targe2: "m 84,32.2 c 6.2,-1 19.5,-31.4 94.1,-20.2 -30.57,33.64 -21.66,67.37 -11.2,95 20.2,69.5 -41.17549,84.7 -66.88,84.7 C 74.32,191.7071 8.38,168.95 32,105.9 36.88,92.88 31,89 31,82.6 35.15,82.262199 56.79,86.17 56.5,69.8 56.20,52.74 42.2,47.9 25.9,55.2 25.9,51.4 39.8,6.7 84,32.2 Z",
  pavise: "M95 7L39.9 37.3a10 10 0 00-5.1 9.5L46 180c.4 5.2 3.7 10 9 10h90c5.3 0 9.6-4.8 10-10l10.6-133.2a10 10 0 00-5-9.5L105 7c-4.2-2.3-6.2-2.3-10 0z",
  wedged: "m 51.2,19 h 96.4 c 3.1,12.7 10.7,20.9 26.5,20.8 C 175.7,94.5 165.3,144.3 100,200 43.5,154.2 22.8,102.8 25.1,39.7 37,38.9 47.1,34.7 51.2,19 Z",
  round: "m 185,100 a 85,85 0 0 1 -85,85 85,85 0 0 1 -85,-85 85,85 0 0 1 85,-85 85,85 0 0 1 85,85",
  oval: "m 32.3,99.5 a 67.7,93.7 0 1 1 0,1.3 z",
  vesicaPiscis: "M 100,0 C 63.9,20.4 41,58.5 41,100 c 0,41.5 22.9,79.6 59,100 36.1,-20.4 59,-58.5 59,-100 C 159,58.5 136.1,20.4 100,0 Z",
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
  fantasy1: "M 100,5 C 85,30 40,35 15,40 c 40,35 20,90 40,115 15,25 40,30 45,45 5,-15 30,-20 45,-45 20,-25 0,-80 40,-115 C 160,35 115,30 100,5 Z",
  fantasy2: "m 152,21 c 0,0 -27,14 -52,-4 C 75,35 48,21 48,21 50,45 30,55 30,75 60,75 60,115 32,120 c 3,40 53,50 68,80 15,-30 65,-40 68,-80 -28,-5 -28,-45 2,-45 C 170,55 150,45 152,21 Z",
  fantasy3: "M 167,67 C 165,0 35,0 33,67 c 32,-7 27,53 -3,43 -5,45 60,65 70,90 10,-25 75,-47.51058 70,-90 -30,10 -35,-50 -3,-43 z",
  fantasy4: "M100 9C55 48 27 27 13 39c23 50 3 119 49 150 14 9 28 11 38 11s27-4 38-11c55-39 24-108 49-150-14-12-45 7-87-30z",
  fantasy5: "M 100,0 C 75,25 30,25 30,25 c 0,69 20,145 70,175 50,-30 71,-106 70,-175 0,0 -45,0 -70,-25 z",
  noldor: "m 55,75 h 2 c 3,-25 38,-10 3,20 15,50 30,75 40,105 10,-30 25,-55 40,-105 -35,-30 0,-45 3,-20 h 2 C 150,30 110,20 100,0 90,20 50,30 55,75 Z",
  gondor: "m 100,200 c 15,-15 38,-35 45,-60 h 5 V 30 h -5 C 133,10 67,10 55,30 h -5 v 110 h 5 c 7,25 30,45 45,60 z",
  easterling: "M 160,185 C 120,170 80,170 40,185 V 15 c 40,15 80,15 120,0 z",
  erebor: "M25 135 V60 l22-13 16-37 h75 l15 37 22 13 v75l-22 18-16 37 H63l-16-37z",
  ironHills: "m 30,25 60,-10 10,10 10,-10 60,10 -5,125 -65,50 -65,-50 z",
  urukHai: "M 30,60 C 40,60 60,50 60,20 l -5,-3 45,-17 75,40 -5,5 -35,155 -5,-35 H 70 v 35 z",
  moriaOrc: "M45 35c5 3 7 10 13 9h19c4-2 7-4 9-9 6 1 9 9 16 11 7-2 14 0 21 0 6-3 6-10 10-15 2-5 1-10-2-15-2-4-5-14-4-16 3 6 7 11 12 14 7 3 3 12 7 16 3 6 4 12 9 18 2 4 6 8 5 14 0 6-1 12 3 18-3 6-2 13-1 20 1 6-2 12-1 18 0 6-3 13 0 18 8 4 0 8-5 7-4 3-9 3-13 9-5 5-5 13-8 19 0 6 0 15-7 16-1 6-7 6-10 12-1-6 0-6-2-9l2-19c2-4 5-12-3-12-4-5-11-5-15 1l-13-18c-3-4-2 9-3 12 2 2-4-6-7-5-8-2-8 7-11 11-2 4-5 10-8 9 3-10 3-16 1-23-1-4 2-9-4-11 0-6 1-13-2-19-4-2-9-6-13-7V91c4-7-5-13 0-19-3-7 2-11 2-18-1-6 1-12 3-17v-1z"
}

const lines = {
  straight: "m 0,100 v15 h 200 v -15 z",
  engrailed: "m 0,95 a 6.25,6.25 0 0 0 12.5,0 6.25,6.25 0 0 0 12.5,0 6.25,6.25 0 0 0 12.5,0 6.25,6.25 0 0 0 12.5,0 6.25,6.25 0 0 0 12.5,0 6.25,6.25 0 0 0 12.5,0 6.25,6.25 0 0 0 12.5,0 6.25,6.25 0 0 0 12.5,0 6.25,6.25 0 0 0 12.5,0 6.25,6.25 0 0 0 12.5,0 6.25,6.25 0 0 0 12.5,0 6.25,6.25 0 0 0 12.5,0 6.25,6.25 0 0 0 12.5,0 6.25,6.25 0 0 0 12.5,0 6.25,6.25 0 0 0 12.5,0 6.25,6.25 0 0 0 12.5,0 v 20 H 0 Z",
  invecked: "M0,102.5 a6.25,6.25,0,0,1,12.5,0 a6.25,6.25,0,0,1,12.5,0 a6.25,6.25,0,0,1,12.5,0 a6.25,6.25,0,0,1,12.5,0 a6.25,6.25,0,0,1,12.5,0 a6.25,6.25,0,0,1,12.5,0 a6.25,6.25,0,0,1,12.5,0 a6.25,6.25,0,0,1,12.5,0 a6.25,6.25,0,0,1,12.5,0 a6.25,6.25,0,0,1,12.5,0 a6.25,6.25,0,0,1,12.5,0 a6.25,6.25,0,0,1,12.5,0 a6.25,6.25,0,0,1,12.5,0 a6.25,6.25,0,0,1,12.5,0 a6.25,6.25,0,0,1,12.5,0 a6.25,6.25,0,0,1,12.5,0 v12.5 H0 z",
  embattled: "M 0,105 H 2.5 V 95 h 15 v 10 h 15 V 95 h 15 v 10 h 15 V 95 h 15 v 10 h 15 V 95 h 15 v 10 h 15 V 95 h 15 v 10 h 15 V 95 h 15 v 10 h 15 V 95 h 15 v 10 h 2.5 v 10 H 0 Z",
  wavy: "m 200,115 v -15 c -8.9,3.5 -16,3.1 -25,0 -8.9,-3.5 -16,-3.1 -25,0 -8.9,3.5 -16,3.2 -25,0 -8.9,-3.5 -16,-3.2 -25,0 -8.9,3.5 -16,3.1 -25,0 -8.9,-3.5 -16,-3.1 -25,0 -8.9,3.5 -16,3.2 -25,0 -8.9,-3.5 -16,-3.2 -25,0 v 15 z",
  raguly: "m 200,95 h -3 l -5,10 h -10 l 5,-10 h -10 l -5,10 h -10 l 5,-10 h -10 l -5,10 h -10 l 5,-10 h -10 l -5,10 h -10 l 5,-10 h -10 l -5,10 h -10 l 5,-10 H 97 l -5,10 H 82 L 87,95 H 77 l -5,10 H 62 L 67,95 H 57 l -5,10 H 42 L 47,95 H 37 l -5,10 H 22 L 27,95 H 17 l -5,10 H 2 L 7,95 H 0 v 20 h 200 z",
  dancetty: "m 0,105 10,-15 15,20 15,-20 15,20 15,-20 15,20 15,-20 15,20 15,-20 15,20 15,-20 15,20 15,-20 10,15 v 10 H 0 Z",
  dentilly: "M 180,105 170,95 v 10 L 160,95 v 10 L 150,95 v 10 L 140,95 v 10 L 130,95 v 10 L 120,95 v 10 L 110,95 v 10 L 100,95 v 10 L 90,95 v 10 L 80,95 v 10 L 70,95 v 10 L 60,95 v 10 L 50,95 v 10 L 40,95 v 10 L 30,95 v 10 L 20,95 v 10 L 10,95 v 10 L 0,95 v 20 H 200 V 105 L 190,95 v 10 L 180,95 Z",
  angled: "m 0,95 h 100 v 10 h 100 v 10 H 0 Z",
  urdy: "m 200,90 -5,5 v 10 l -5,5 -5,-5 V 95 l -5,-5 -5,5 v 10 l -5,5 -5,-5 V 95 l -5,-5 -5,5 v 10 l -5,5 -5,-5 V 95 l -5,-5 -5,5 v 10 l -5,6 -5,-6 V 95 l -5,-5 -5,5 v 10 l -5,5 -5,-5 V 95 l -5,-5 -5,5 v 10 l -5,5 -5,-5 V 95 l -5,-5 -5,5 v 10 l -5,6 -5,-6 V 95 l -5,-5 -5,5 v 10 l -5,5 -5,-5 V 95 l -5,-5 -5,5 v 10 l -5,5 -5,-5 V 95 l -5,-5 -5,5 v 10 l -5,5 -5,-5 V 95 L 0,90 v 25 h 200",
  indented: "m 100,95 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 v 20 H 0 V 95 l 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 z",
  bevilled: "m 0,92.5 h 110 l -20,15 H 200 V 115 H 0 Z",
  nowy: "m 0,95 h 80 c 0,0 0.1,20.1 20,20 19.9,-0.1 20,-20 20,-20 h 80 v 20 H 0 Z",
  nowyReversed: "m 200,105 h -80 c 0,0 -0.1,-20.1 -20,-20 -19.9,0.1 -20,20 -20,20 H 0 v 10 h 200 z",
  potenty: "m 3,95 v 5 h 5 v 5 H 0 v 10 h 200 l 0.5,-10 H 193 v -5 h 5 v -5 h -15 v 5 h 5 v 5 h -15 v -5 h 5 v -5 h -15 v 5 h 5 v 5 h -15 v -5 h 5 v -5 h -15 v 5 h 5 v 5 h -15 v -5 h 5 v -5 h -15 v 5 h 5 v 5 h -15 v -5 h 5 v -5 h -15 v 5 h 5 v 5 H 100.5 93 v -5 h 5 V 95 H 83 v 5 h 5 v 5 H 73 v -5 h 5 V 95 H 63 v 5 h 5 v 5 H 53 v -5 h 5 V 95 H 43 v 5 h 5 v 5 H 33 v -5 h 5 V 95 H 23 v 5 h 5 v 5 H 13 v -5 h 5 v -5 z",
  potentyDexter: "m 200,105 h -2 v -10 0 0 h -10 v 5 h 5 v 5 H 183 V 95 h -10 v 5 h 5 v 5 H 168 V 95 h -10 v 5 h 5 v 5 H 153 V 95 h -10 v 5 h 5 v 5 H 138 V 95 h -10 v 5 h 5 v 5 H 123 V 95 h -10 v 5 h 5 v 5 h -10 v 0 0 -10 H 98 v 5 h 5 v 5 H 93 V 95 H 83 v 5 h 5 v 5 H 78 V 95 H 68 v 5 h 5 v 5 H 63 V 95 H 53 v 5 h 5 v 5 H 48 V 95 H 38 v 5 h 5 v 5 H 33 V 95 H 23 v 5 h 5 v 5 H 18 V 95 H 8 v 5 h 5 v 5 H 3 V 95 H 0 v 20 h 200 z",
  potentySinister: "m 2.5,95 v 10 H 0 v 10 h 202.5 v -15 h 5 v -5 h -10 v 10 h -10 v -5 h 5 v -5 h -10 v 10 h -10 v -5 h 5 v -5 h -10 v 10 h -10 v -5 h 5 v -5 h -10 v 10 h -10 v -5 h 5 v -5 h -10 v 10 h -10 v -5 h 5 v -5 h -10 v 10 h -10 v -5 h 5 v -5 h -10 v 10 h -10 v -5 h 5 v -5 h -10 v 10 h -10 v -5 h 5 v -5 h -10 v 10 h -10 v -5 h 5 v -5 h -10 v 10 h -10 v -5 h 5 v -5 h -10 v 10 h -10 v -5 h 5 v -5 h -10 v 10 h -10 v -5 h 5 v -5 h -10 v 10 h -10 v -5 h 5 v -5 z",
  embattledGhibellin: "M 200,200 V 100 l -5,-5 v 10 l -5,-5 -5,5 V 95 l -5,5 -5,-5 v 10 l -5,-5 -5,5 V 95 l -5,5 -5,-5 v 10 l -5,-5 -5,5 V 95 l -5,5 -5,-5 v 10 l -5,-5 -5,5 V 95 l -5,5 -5,-5 v 10 l -5,-5 -5,5 V 95 l -5,5 -5,-5 v 10 l -5,-5 -5,5 V 95 l -5,5 -5,-5 v 10 l -5,-5 -5,5 V 95 l -5,5 -5,-5 v 10 l -5,-5 -5,5 V 95 l -5,5 -5,-5 v 10 l -5,-5 -5,5 V 95 l -5,5 -5,-5 v 10 l -5,-5 -5,5 V 95 l -5,5 v 15 h 200",
  embattledNotched: "m 200,105 h -5 V 95 l -5,5 -5,-5 v 10 h -5 V 95 l -5,5 -5,-5 v 10 h -5 V 95 l -5,5 -5,-5 v 10 h -5 V 95 l -5,5 -5,-5 v 10 h -5 V 95 l -5,5 -5,-5 v 10 h -5 V 95 l -5,5 -5,-5 v 10 h -5 V 95 l -5,5 -5,-5 v 10 H 90 V 95 l -5,5 -5,-5 v 10 H 75 V 95 l -5,5 -5,-5 v 10 H 60 V 95 l -5,5 -5,-5 v 10 H 45 V 95 l -5,5 -5,-5 v 10 H 30 V 95 l -5,5 -5,-5 v 10 H 15 V 95 l -5,5 -5,-5 v 10 H 0 v 10 h 200",
  embattledGrady: "m 0,95 v 20 H 200 V 95 h -2.5 v 5 h -5 v 5 h -5 v -5 h -5 v -5 h -5 v 5 h -5 v 5 h -5 v -5 h -5 v -5 h -5 v 5 h -5 v 5 h -5 v -5 h -5 v -5 h -5 v 5 h -5 v 5 h -5 v -5 h -5 v -5 h -5 v 5 h -5 v 5 h -5 v -5 h -5 v -5 h -5 v 5 h -5 v 5 h -5 v -5 h -5 v -5 h -5 v 5 h -5 v 5 h -5 v -5 h -5 v -5 h -5 v 5 h -5 v 5 h -5 v -5 h -5 v -5 h -5 v 5 h -5 v 5 h -5 v -5 h -5 v -5 h -5 v 5 h -5 v 5 h -5 v -5 h -5 v -5 z",
  dovetailed: "m 200,95 h -7 l 4,10 h -14 l 4,-10 h -14 l 4,10 h -14 l 4,-10 h -14 l 4,10 h -14 l 4,-10 h -14 l 4,10 h -14 l 4,-10 h -14 l 4,10 h -14 l 4,-10 H 93 l 4,10 H 83 L 87,95 H 73 l 4,10 H 63 L 67,95 H 53 l 4,10 H 43 L 47,95 H 33 l 4,10 H 23 L 27,95 H 13 l 4,10 H 3 L 7,95 H 0 v 20 h 200",
  dovetailedIndented: "m 200,100 -7,-5 4,10 -7,-5 -7,5 4,-10 -7,5 -7,-5 4,10 -7,-5 -7,5 4,-10 -7,5 -7,-5 4,10 -7,-5 -7,5 4,-10 -7,5 -7,-5 4,10 -7,-5 -7,5 4,-10 -7,5 -7,-5 4,10 -7,-5 -7,5 4,-10 -7,5 -7,-5 4,10 -7,-5 -7,5 4,-10 -7,5 -7,-5 4,10 -7,-5 -7,5 4,-10 -7,5 -7,-5 4,10 -7,-5 -7,5 4,-10 -7,5 -7,-5 4,10 -7,-5 -7,5 4,-10 -7,5 -7,-5 4,10 -7,-5 -7,5 4,-10 -7,5 v 15 h 200",
  nebuly: "m 13.1,89.8 c -4.1,0 -7.3,2 -7.3,4.5 0,1.2 0.7,2.3 1.8,3.1 1.2,0.7 1.9,1.8 1.9,3 0,2.5 -3.2,4.5 -7.3,4.5 -0.5,0 -2.2,-0.2 -2.2,-0.2 V 115 h 200 v -10.1 c -3.7,-0.2 -6.7,-2.2 -6.7,-4.5 0,-1.2 0.7,-2.3 1.9,-3 1.2,-0.8 1.8,-1.9 1.8,-3.1 0,-2.5 -3.2,-4.5 -7.2,-4.5 -4.1,0 -7.3,2 -7.3,4.5 0,1.2 0.7,2.3 1.8,3.1 1.2,0.7 1.9,1.8 1.9,3 0,2.5 -3.3,4.5 -7.3,4.5 -4,0 -7.3,-2 -7.3,-4.5 0,-1.2 0.7,-2.3 1.9,-3 1.2,-0.8 1.8,-1.9 1.8,-3.1 0,-2.5 -3.2,-4.5 -7.2,-4.5 -4.1,0 -7.3,2 -7.3,4.5 0,1.2 0.7,2.3 1.8,3.1 1.2,0.7 1.9,1.8 1.9,3 -1.5,4.1 -4.2,4.4 -8.8,4.5 -4.7,-0.1 -8.7,-1.5 -8.9,-4.5 0,-1.2 0.7,-2.3 1.9,-3 1.2,-0.8 1.9,-1.9 1.9,-3.1 0,-2.5 -3.3,-4.5 -7.3,-4.5 -4.1,0 -7.3,2 -7.3,4.5 0,1.2 0.7,2.3 1.8,3.1 1.2,0.7 1.9,1.8 1.9,3 0,2.5 -3.3,4.5 -7.3,4.5 -4,0 -7.3,-2 -7.3,-4.5 0,-1.2 0.7,-2.3 1.9,-3 1.2,-0.8 1.9,-1.9 1.9,-3.1 0,-2.5 -3.3,-4.5 -7.3,-4.5 -4.1,0 -7.3,2 -7.3,4.5 0,1.2 0.7,2.3 1.8,3.1 1.2,0.7 1.9,1.8 1.9,3 0,2.5 -3.3,4.5 -7.3,4.5 -4,0 -7.3,-2 -7.3,-4.5 0,-1.2 0.7,-2.3 1.9,-3 1.2,-0.8 1.9,-1.9 1.9,-3.1 0,-2.5 -3.3,-4.5 -7.3,-4.5 -4.1,0 -7.3,2 -7.3,4.5 0,1.2 0.7,2.3 1.8,3.1 1.2,0.7 1.9,1.8 1.9,3 0,2.5 -3.3,4.5 -7.3,4.5 -4,0 -7.3,-2 -7.3,-4.5 0,-1.2 0.7,-2.3 1.9,-3 1.2,-0.8 1.9,-1.9 1.9,-3.1 0,-2.5 -3.3,-4.5 -7.3,-4.5 -4.1,0 -7.3,2 -7.3,4.5 0,1.2 0.7,2.3 1.8,3.1 1.2,0.7 1.9,1.8 1.9,3 0,2.5 -3.3,4.5 -7.3,4.5 -4,0 -7.3,-2 -7.3,-4.5 0,-1.2 0.7,-2.3 1.9,-3 1.2,-0.8 1.9,-1.9 1.9,-3.1 0,-2.5 -3.3,-4.5 -7.3,-4.5 -4.1,0 -7.3,2 -7.3,4.5 0,1.2 0.7,2.3 1.8,3.1 1.2,0.7 1.9,1.8 1.9,3 0,2.5 -3.3,4.5 -7.3,4.5 -4,0 -7.3,-2 -7.3,-4.5 0,-1.2 0.7,-2.3 1.9,-3 1.2,-0.8 1.9,-1.9 1.9,-3.1 0,-2.5 -3.3,-4.5 -7.3,-4.5 -4.1,0 -7.3,2 -7.3,4.5 0,1.2 0.7,2.3 1.8,3.1 1.2,0.7 1.9,1.8 1.9,3 0,2.5 -3.3,4.5 -7.3,4.5 -4,0 -7.3,-2 -7.3,-4.5 0,-1.2 0.7,-2.3 1.9,-3 1.2,-0.8 1.9,-1.9 1.9,-3.1 0,-2.5 -3.3,-4.5 -7.3,-4.5 z",
  rayonne: "M0 115l-.1-6 .2.8c1.3-1 2.3-2.5 2.9-4.4.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4A9 9 0 015.5 90c-.7 1.5-.8 3.4-.3 5.4.5 2 1.7 3.6 3.1 4.6a9 9 0 013.1 4.6c.5 2 .4 3.9-.3 5.4a9 9 0 003.1-4.6c.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4.5-2 1.7-3.6 3.1-4.6-.7 1.5-.8 3.4-.3 5.4.5 2 1.7 3.6 3.1 4.6a9 9 0 013.1 4.6c.5 2 .4 3.9-.3 5.4a9 9 0 003.1-4.6c.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4.5-2 1.7-3.6 3.1-4.6-.7 1.5-.8 3.4-.3 5.4.5 2 1.7 3.6 3.1 4.6a9 9 0 013.1 4.6c.5 2 .4 3.9-.3 5.4a9 9 0 003.1-4.6c.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4.5-2 1.7-3.6 3.1-4.6-.7 1.5-.8 3.4-.3 5.4.5 2 1.7 3.6 3.1 4.6a9 9 0 013.1 4.6c.5 2 .4 3.9-.3 5.4a9 9 0 003.1-4.6c.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4.5-2 1.7-3.6 3.1-4.6-.7 1.5-.8 3.4-.3 5.4.5 2 1.7 3.6 3.1 4.6a9 9 0 013.1 4.6c.5 2 .4 3.9-.3 5.4a9 9 0 003.1-4.6c.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4.5-2 1.7-3.6 3.1-4.6-.7 1.5-.8 3.4-.3 5.4.5 2 1.7 3.6 3.1 4.6a9 9 0 013.1 4.6c.5 2 .4 3.9-.3 5.4a9 9 0 003.1-4.6c.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4.5-2 1.7-3.6 3.1-4.6-.7 1.5-.8 3.4-.3 5.4.5 2 1.7 3.6 3.1 4.6a9 9 0 013.1 4.6c.5 2 .4 3.9-.3 5.4a9 9 0 003.1-4.6c.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4.5-2 1.7-3.6 3.1-4.6-.7 1.5-.8 3.4-.3 5.4.5 2 1.7 3.6 3.1 4.6a9 9 0 013.1 4.6c.5 2 .4 3.9-.3 5.4a9 9 0 003.1-4.6c.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4.5-2 1.7-3.6 3.1-4.6-.7 1.5-.8 3.4-.3 5.4.5 2 2.1 3.1 3.1 4.6 1 1.6 2.4 3.1 2.7 4.8.3 1.7.3 3.3 0 5.2 1.3-1 2.6-2.7 3.2-4.6.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4.5-2 1.7-3.6 3.1-4.6-.7 1.5-.8 3.4-.3 5.4.5 2 1.7 3.6 3.1 4.6a9 9 0 013.1 4.6c.5 2 .4 3.9-.3 5.4a9 9 0 003.1-4.6c.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4.5-2 1.7-3.6 3.1-4.6-.7 1.5-.8 3.4-.3 5.4.5 2 1.7 3.6 3.1 4.6a9 9 0 013.1 4.6c.5 2 .4 3.9-.3 5.4a9 9 0 003.1-4.6c.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4.5-2 1.7-3.6 3.1-4.6-.7 1.5-.8 3.4-.3 5.4.5 2 1.7 3.6 3.1 4.6a9 9 0 013.1 4.6c.5 2 .4 3.9-.3 5.4a9 9 0 003.1-4.6c.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4.5-2 1.7-3.6 3.1-4.6-.7 1.5-.8 3.4-.3 5.4.5 2 1.7 3.6 3.1 4.6a9 9 0 013.1 4.6c.5 2 .4 3.9-.3 5.4a9 9 0 003.1-4.6c.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4.5-2 1.7-3.6 3.1-4.6-.7 1.5-.8 3.4-.3 5.4.5 2 1.7 3.6 3.1 4.6a9 9 0 013.1 4.6c.5 2 .4 3.9-.3 5.4a9 9 0 003.1-4.6c.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4.5-2 1.7-3.6 3.1-4.6-.7 1.5-.8 3.4-.3 5.4.5 2 1.7 3.6 3.1 4.6a9 9 0 013.1 4.6c.5 2 .4 3.9-.3 5.4a9 9 0 003.1-4.6c.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4.5-2 1.7-3.6 3.1-4.6-.7 1.5-.8 3.4-.3 5.4.5 2 1.7 3.6 3.1 4.6a9 9 0 013.1 4.6c.5 2 .4 3.9-.3 5.4a9 9 0 003.1-4.6c.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4.5-2 1.7-3.6 3.1-4.6-.7 1.5-.8 3.4-.3 5.4.5 2 1.7 3.6 3.1 4.6a9 9 0 013.1 4.6c.5 2 .4 3.9-.3 5.4a9 9 0 003.1-4.6c.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4.5-2 1.7-3.6 3.1-4.6-.7 1.5-.8 3.4-.3 5.4.75 2.79 2.72 4.08 4.45 5.82L200 115z",
  seaWaves: "m 28.83,94.9 c -4.25,0 -7.16,3.17 -8.75,5.18 -1.59,2.01 -4.5,5.18 -8.75,5.18 -2.16,0 -3.91,-1.63 -3.91,-3.64 0,-2.01 1.44,-3.6 3.6,-3.6 0.7,0 1.36,0.17 1.93,0.48 -0.33,-2.03 -2.19,-3.56 -4.45,-3.56 -4.24,0 -6.91,3.13 -8.5,5.13 V 115 h 200 v -14.89 c -1.59,2.01 -4.5,5.18 -8.75,5.18 -2.16,0 -3.91,-1.63 -3.91,-3.64 0,-2.01 1.75,-3.64 3.91,-3.64 0.7,0 1.36,0.17 1.93,0.48 -0.34,-2.01 -2.2,-3.55 -4.46,-3.55 -4.25,0 -7.16,3.17 -8.75,5.18 -1.59,2.01 -4.5,5.18 -8.75,5.18 -2.16,0 -3.91,-1.63 -3.91,-3.64 0,-2.01 1.75,-3.64 3.91,-3.64 0.7,0 1.36,0.17 1.93,0.48 -0.34,-2.01 -2.21,-3.55 -4.46,-3.55 -4.25,0 -7.16,3.17 -8.75,5.18 -1.59,2.01 -4.5,5.18 -8.75,5.18 -2.16,0 -3.91,-1.63 -3.91,-3.64 0,-2.01 1.75,-3.64 3.91,-3.64 0.7,0 1.36,0.17 1.93,0.48 -0.34,-2.01 -2.21,-3.55 -4.46,-3.55 -4.25,0 -7.16,3.17 -8.75,5.18 -1.59,2.01 -4.5,5.18 -8.75,5.18 -2.16,0 -3.91,-1.63 -3.91,-3.64 0,-2.01 1.75,-3.64 3.91,-3.64 0.7,0 1.36,0.17 1.93,0.48 -0.34,-2.01 -2.2,-3.55 -4.46,-3.55 -4.25,0 -7.16,3.17 -8.75,5.18 -1.59,2.01 -4.5,5.18 -8.75,5.18 -2.16,0 -3.91,-1.63 -3.91,-3.64 0,-2.01 1.44,-3.6 3.6,-3.6 0.7,0 1.36,0.17 1.93,0.48 -0.34,-2.01 -2.21,-3.55 -4.46,-3.55 -4.25,0 -6.6,3.09 -8.19,5.09 -1.59,2.01 -4.5,5.18 -8.75,5.18 -2.16,0 -3.91,-1.63 -3.91,-3.64 0,-2.01 1.75,-3.64 3.91,-3.64 0.7,0 1.36,0.17 1.93,0.48 -0.34,-2.01 -2.21,-3.55 -4.46,-3.55 -4.25,0 -7.16,3.17 -8.75,5.18 -1.59,2.01 -4.5,5.18 -8.75,5.18 -2.16,0 -3.91,-1.63 -3.91,-3.64 0,-2.01 1.75,-3.64 3.91,-3.64 0.7,0 1.36,0.17 1.93,0.48 -0.34,-2.01 -2.2,-3.55 -4.46,-3.55 -4.25,0 -7.16,3.17 -8.75,5.18 -1.59,2.01 -4.5,5.18 -8.75,5.18 -2.16,0 -3.91,-1.63 -3.91,-3.64 0,-2.01 1.75,-3.64 3.91,-3.64 0.7,0 1.36,0.17 1.93,0.48 -0.34,-2.01 -2.2,-3.55 -4.46,-3.55 -4.25,0 -7.16,3.17 -8.75,5.18 -1.59,2.01 -4.5,5.18 -8.75,5.18 -2.16,0 -3.91,-1.63 -3.91,-3.64 0,-2.01 1.75,-3.64 3.91,-3.64 0.7,0 1.36,0.17 1.93,0.48 -0.34,-2.01 -2.21,-3.55 -4.46,-3.55 z",
  dragonTeeth: "M 9.4,85 C 6.5,88.1 4.1,92.9 3,98.8 1.9,104.6 2.3,110.4 3.8,115 2.4,113.5 0,106.6 0,109.3 v 5.7 h 200 v -5.7 c -1.1,-2.4 -2,-5.1 -2.6,-8 -1.1,-5.9 -0.7,-11.6 0.8,-16.2 -2.9,3.1 -5.3,7.9 -6.4,13.8 -1.1,5.9 -0.7,11.6 0.8,16.2 -2.9,-3.1 -5.3,-7.9 -6.4,-13.8 -1.1,-5.9 -0.7,-11.6 0.8,-16.2 -2.9,3.1 -5.3,7.9 -6.4,13.8 -1.1,5.9 -0.7,11.6 0.8,16.2 -2.9,-3.1 -5.3,-7.9 -6.4,-13.8 -1.1,-5.9 -0.7,-11.6 0.8,-16.2 -2.9,3.1 -5.3,7.9 -6.4,13.8 -1.1,5.9 -0.7,11.6 0.8,16.2 -2.9,-3.1 -5.3,-7.9 -6.4,-13.8 -1.1,-5.9 -0.7,-11.6 0.8,-16.2 -2.9,3.1 -5.3,7.9 -6.4,13.8 -1.1,5.9 -0.7,11.6 0.8,16.2 -2.9,-3.1 -5.3,-7.9 -6.4,-13.8 -1.1,-5.9 -0.7,-11.6 0.8,-16.2 -2.9,3.1 -5.3,7.9 -6.4,13.8 -1.1,5.9 -0.7,11.6 0.8,16.2 -2.9,-3.1 -5.3,-7.9 -6.4,-13.8 -1.1,-5.9 -0.7,-11.6 0.8,-16.2 -2.9,3.1 -5.3,7.9 -6.4,13.8 -1.1,5.9 -0.7,11.6 0.8,16.2 -2.9,-3.1 -5.3,-7.9 -6.4,-13.8 -1.1,-5.9 -0.7,-11.6 0.8,-16.2 -2.9,3.1 -5.3,7.9 -6.4,13.8 -1.1,5.9 -0.7,11.6 0.8,16.2 -2.9,-3.1 -5.3,-7.9 -6.4,-13.8 -1.1,-5.9 -0.7,-11.6 0.8,-16.2 -2.9,3.1 -5.3,7.9 -6.4,13.8 -1.1,5.9 -0.7,11.6 0.8,16.2 -2.9,-3.1 -5.3,-7.9 -6.4,-13.8 -1.1,-5.9 -0.7,-11.6 0.8,-16.2 -2.9,3.1 -5.3,7.9 -6.4,13.8 -1.1,5.9 -0.7,11.6 0.8,16.2 -1.4,-1.5 -2.8,-3.9 -3.8,-6.1 -1.1,-2.4 -2.3,-6.1 -2.6,-7.7 -0.2,-5.9 0.2,-11.7 1.7,-16.3 -3,3.1 -5.3,7.9 -6.4,13.8 -1.1,5.8 -0.7,11.6 0.8,16.2 -2.9,-3.1 -5.3,-7.9 -6.4,-13.8 -1,-5.8 -0.7,-11.6 0.9,-16.2 -3,3.1 -5.3,7.9 -6.4,13.8 -1.1,5.8 -0.7,11.6 0.8,16.2 -2.9,-3.1 -5.3,-7.9 -6.4,-13.8 -1.1,-5.8 -0.7,-11.6 0.9,-16.2 -3,3.1 -5.3,7.9 -6.4,13.8 -1.1,5.8 -0.7,11.6 0.8,16.2 -2.9,-3.1 -5.3,-7.9 -6.4,-13.8 C 63,95.4 63.4,89.6 64.9,85 c -2.9,3.1 -5.3,7.9 -6.3,13.8 -1.1,5.8 -0.7,11.6 0.8,16.2 -3,-3.1 -5.3,-7.9 -6.4,-13.8 -1.1,-5.8 -0.7,-11.6 0.8,-16.2 -2.9,3.1 -5.3,7.9 -6.4,13.8 -1,5.8 -0.6,11.6 0.9,16.2 -3,-3.1 -5.3,-7.9 -6.4,-13.8 -1.1,-5.8 -0.7,-11.6 0.8,-16.2 -2.9,3.1 -5.3,7.9 -6.4,13.8 -1,5.8 -0.7,11.6 0.9,16.2 -3,-3.1 -5.3,-7.9 -6.4,-13.8 -1.1,-5.8 -0.7,-11.6 0.8,-16.2 -2.9,3.1 -5.3,7.9 -6.4,13.8 -1.1,5.8 -0.7,11.6 0.9,16.2 -3,-3.1 -5.3,-7.9 -6.4,-13.8 C 18.6,95.4 19,89.6 20.5,85 17.6,88.1 15.2,92.9 14.1,98.8 13,104.6 13.4,110.4 14.9,115 12,111.9 9.6,107.1 8.6,101.2 7.5,95.4 7.9,89.6 9.4,85 Z",
  firTrees: "m 3.9,90 -4,7 2,-0.5 L 0,100 v 15 h 200 v -15 l -1.9,-3.5 2,0.5 -4,-7 -4,7 2,-0.5 -4,7 2,-0.5 -4,7 -4,-7 2,0.5 -4,-7 2,0.5 -4,-7 -4,7 2,-0.5 -4,7 2,-0.5 -4,7 -4,-7 2,0.5 -4,-7 2,0.5 -4,-7 -4,7 2,-0.5 -4,7 2,-0.5 -4,7 -4,-7 2,0.5 -4,-7 2,0.5 -4.1,-7 -4,7 2,-0.5 -4,7 2,-0.5 -4,7 -4,-7 2,0.5 -4,-7 2,0.5 -4,-7 -4,7 2,-0.5 -4,7 2,-0.5 -4,7 -4,-7 2,0.5 -4,-7 2,0.5 -4,-7 -4,7 2,-0.5 -4,7 2,-0.5 -4,7 -4,-7 2,0.5 -4,-7 2,0.5 -4,-7 -4,7 2,-0.5 -4,7 2,-0.5 -4,7 -4,-7 2,0.5 -4,-7 2,0.5 -4,-7 -4,7 2,-0.5 -4,7 2,-0.5 -4,7 -4,-7 2,0.5 -4,-7 2,0.5 -4,-7 -4,7 2,-0.5 -4,7 2,-0.5 -4,7 -4,-7 2,0.5 -4,-7 2,0.5 -4.1,-7 -4,7 2,-0.5 -4,7 2,-0.5 -4,7 -4,-7 2,0.5 -4,-7 2,0.5 -4,-7 -4,7 2,-0.5 -4,7 2,-0.5 -4,7 -4,-7 2,0.5 -4,-7 2,0.5 -4,-7 -4,7 2,-0.5 -4,7 2,-0.5 -4,7 -4,-7 2,0.5 -4,-7 2,0.5 z",
  flechy: "m 0,100 h 85 l 15,-15 15,15 h 85 v 15 H 0 Z",
  barby: "m 0,100 h 85 l 15,15 15,-15 h 85 v 15 H 0 Z",
  enclavy: "M 0,100 H 85 V 85 h 30 v 15 h 85 v 15 H 0 Z",
  escartely: "m 0,100 h 85 v 15 h 30 v -15 h 85 v 15 H 0 Z",
  arched: "m 100,95 c 40,-0.2 100,20 100,20 H 0 c 0,0 60,-19.8 100,-20 z",
  archedReversed: "m 0,85 c 0,0 60,20.2 100,20 40,-0.2 100,-20 100,-20 v 30 H 0 Z"
}

const templates = {
  // divisions
  perFess: line => `<path d="${line}"/><rect x="0" y="115" width="200" height="85"/>`,
  perPale: line => `<path d="${line}" transform="rotate(-90)" transform-origin="center"/><rect x="115" y="0" width="85" height="200"/>`,
  perBend: line => `<path d="${line}" transform="rotate(45) scale(1.1)" transform-origin="center"/><rect x="0" y="115" width="200" height="85" transform="rotate(45) scale(1.1)" transform-origin="center"/>`,
  perBendSinister: line => `<path d="${line}" transform="rotate(-45) scale(1.1)" transform-origin="center"/><rect x="0" y="115" width="200" height="85" transform="rotate(-45) scale(1.1)" transform-origin="center"/>`,
  perChevron: line => `<path d="${line}" transform="translate(-70.7,70.7) rotate(-45) scale(-1,1)" transform-origin="center"/><polygon points="20,200 100,120 180,200"/><path d="${line}" transform="translate(70.7,70.7) rotate(45)" transform-origin="center"/>`,
  perChevronReversed: line => `<path d="${line}" transform="translate(-70.7,-70.7) rotate(225) scale(1,1)" transform-origin="center"/><polygon points="21,0 100,79 179,0"/><path d="${line}" transform="translate(70.7,-70.7) rotate(-225) scale(-1,1)" transform-origin="center"/>`,
  perCross: line => `<rect x="100" y="0" width="100" height="92.5"/><rect x="0" y="107.5" width="100" height="92.5"/><path d="${line}" transform="translate(0,50) scale(.5001,.5001)"/><path d="${line}" transform="translate(50,0) scale(-.5001,-.5001)" transform-origin="center"/>`,
  perPile: line => `<path d="${line}" transform="translate(-35,15) rotate(66.8) scale(-1,1)" transform-origin="center"/><path d="${line}" transform="translate(35,15) rotate(-66.8)" transform-origin="center"/><polygon points="0,0 86,200 114,200 200,0 200,200 0,200"/>`,
  perSaltire: () => `<polygon points="0,0 0,200 200,0 200,200"/>`,
  gyronny: () => `<polygon points="0,0 200,200 200,100 0,100"/><polygon points="200,0 0,200 100,200 100,0"/>`,
  chevronny: () => `<path d="M0,80 100,-15 200,80 200,120 100,25 0,120z M0,160 100,65 200,160 200,200 100,105 0,200z M0,240 100,145 200,240 0,240z"/>`,
  // oprinaries
  fess: line => `<path d="${line}" transform="translate(0,-25)"/><path d="${line}" transform="translate(0,25) rotate(180.00001)" transform-origin="center"/><rect x="0" y="88" width="200" height="24" stroke="none"/>`,
  pale: line => `<path d="${line}" transform="rotate(-90) translate(0,-25)" transform-origin="center"/><path d="${line}" transform="rotate(90) translate(0,-25)" transform-origin="center"/><rect x="88" y="0" width="24" height="200" stroke="none"/>`,
  bend: line => `<path d="${line}" transform="rotate(45) translate(0,-25) scale(1.1,1)" transform-origin="center"/><path d="${line}" transform="rotate(225) translate(0,-25) scale(1.1,1)" transform-origin="center"/><rect x="0" y="88" width="200" height="24" transform="rotate(45) scale(1.1,1)" transform-origin="center" stroke="none"/>`,
  bendSinister: line => `<path d="${line}" transform="rotate(-45) translate(0,-25) scale(1.1,1)" transform-origin="center"/><path d="${line}" transform="rotate(-225) translate(0,-25) scale(1.1,1)" transform-origin="center"/><rect x="0" y="88" width="200" height="24" transform="rotate(-45) scale(1.1,1)" transform-origin="center" stroke="none"/>`,
  chief: line => `<path d="${line}" transform="translate(0,-25) rotate(180.00001)" transform-origin="center"/><rect x="0" y="0" width="200" height="62" stroke="none"/>`,
  bar: line => `<path d="${line}" transform="translate(0,-12.5)" transform-origin="center"/><path d="${line}" transform="translate(0,12.5) rotate(180.00001)" transform-origin="center"/><rect x="0" y="94" width="200" height="12" stroke="none"/>`,
  gemelle: line => `<path d="${line}" transform="translate(0,-22.5)"/><path d="${line}" transform="translate(0,22.5) rotate(180.00001)" transform-origin="center"/>`,
  fessCotissed: line => `<path d="${line}" transform="translate(0,-35) scale(1,.5)" transform-origin="center"/><path d="${line}" transform="translate(0,35) rotate(180.0001) scale(1,.5)" transform-origin="center"/><rect x="0" y="80" width="200" height="40"/>`,
  fessDoubleCotissed: line => `<rect x="0" y="85" width="200" height="30"/><rect x="0" y="72.5" width="200" height="7.5"/><rect x="0" y="120" width="200" height="7.5"/><path d="${line}" transform="translate(0,-40) scale(1,.5)" transform-origin="center"/><path d="${line}" transform="translate(0,40) rotate(180.0001) scale(1,.5)" transform-origin="center"/>`,
  bendlet: line => `<path d="${line}" transform="rotate(45) translate(0,-16) scale(1.1,1)" transform-origin="center"/><path d="${line}" transform="rotate(225) translate(0,-16) scale(1.1,1)" transform-origin="center"/><rect x="0" y="94" width="200" height="12" transform="rotate(45) scale(1.1,1)" transform-origin="center" stroke="none"/>`,
  bendletSinister: line => `<path d="${line}" transform="rotate(-45) translate(0,-16) scale(1.1,1)" transform-origin="center"/><path d="${line}" transform="rotate(-225) translate(0,-16) scale(1.1,1)" transform-origin="center"/><rect x="0" y="94" width="200" height="12" transform="rotate(-45) scale(1.1,1)" transform-origin="center" stroke="none"/>`,
  terrace: line => `<path d="${line}" transform="translate(0,50)"/><rect x="0" y="164" width="200" height="36" stroke="none"/>`,
  cross: line => `<path d="${line}" transform="translate(0,-14.5)" transform-origin="center"/><path d="${line}" transform="rotate(180) translate(0,-14.5)" transform-origin="center"/><path d="${line}" transform="rotate(-90) translate(0,-14.5)" transform-origin="center"/><path d="${line}" transform="rotate(-270) translate(0,-14.5)" transform-origin="center"/>`,
  crossParted: line => `<path d="${line}" transform="translate(0,-20)" transform-origin="center"/><path d="${line}" transform="rotate(180) translate(0,-20)" transform-origin="center"/><path d="${line}" transform="rotate(-90) translate(0,-20)" transform-origin="center"/><path d="${line}" transform="rotate(-270) translate(0,-20)" transform-origin="center"/>`,
  saltire: line => `<path d="${line}" transform="rotate(45) translate(0,-14.5) scale(1.1,1)" transform-origin="center"/><path d="${line}" transform="rotate(225) translate(0,-14.5) scale(1.1,1)" transform-origin="center"/><path d="${line}" transform="rotate(-45) translate(0,-14.5) scale(1.1,1)" transform-origin="center"/><path d="${line}" transform="rotate(-225) translate(0,-14.5) scale(1.1,1)" transform-origin="center"/>`,
  saltireParted: line => `<path d="${line}" transform="rotate(45) translate(0,-20) scale(1.1,1)" transform-origin="center"/><path d="${line}" transform="rotate(225) translate(0,-20) scale(1.1,1)" transform-origin="center"/><path d="${line}" transform="rotate(-45) translate(0,-20) scale(1.1,1)" transform-origin="center"/><path d="${line}" transform="rotate(-225) translate(0,-20) scale(1.1,1)" transform-origin="center"/>`,
  mount: () => `<path d="m0,250 a100,100,0,0,1,200,0"/>`,
  point: () => `<path d="M0,200 Q80,180 100,135 Q120,180 200,200"/>`,
  flaunches: () => `<path d="M0,0 q120,100 0,200 M200,0 q-120,100 0,200"/>`,
  gore: () => `<path d="M20,0 Q30,75 100,100 Q80,150 100,200 L0,200 L0,0 Z"/>`,
  pall: () => `<polygon points="0,0 30,0 100,70 170,0 200,0 200,30 122,109 122,200 78,200 78,109 0,30"/>`,
  pallReversed: () => `<polygon points="0,200 0,170 78,91 78,0 122,0 122,91 200,170 200,200 170,200 100,130 30,200"/>`,
  chevron: () => `<polygon points="0,125 100,60 200,125 200,165 100,100 0,165"/>`,
  chevronReversed: () => `<polygon points="0,75 100,140 200,75 200,35 100,100 0,35"/>`,
  gyron: () => `<polygon points="0,0 100,100 0,100"/>`,
  quarter: () => `<rect x="0" y="0" width="50%" height="50%"/>`,
  canton: () => `<rect x="0" y="0" width="37.5%" height="37.5%"/>`,
  pile: () => `<polygon points="70,0 100,175 130,0"/>`,
  pileInBend: () => `<polygon points="200,200 200,144 25,25 145,200"/>`,
  pileInBendSinister: () => `<polygon points="0,200 0,144 175,25 55,200"/>`,
  piles: () => `<polygon points="46,0 75,175 103,0"/><polygon points="95,0 125,175 154,0"/>`,
  pilesInPoint: () => `<path d="M15,0 100,200 60,0Z M80,0 100,200 120,0Z M140,0 100,200 185,0Z"/>`,
  label: () => `<path d="m 46,54.8 6.6,-15.6 95.1,0 5.9,15.5 -16.8,0.1 4.5,-11.8 L 104,43 l 4.3,11.9 -16.8,0 4.3,-11.8 -37.2,0 4.5,11.8 -16.9,0 z"/>`
}

const patterns = {
  semy: (p, c1, c2, size, chargeId) => `<pattern id="${p}" width="${size * .134}" height="${size * .1787}" viewBox="0 0 150 200" stroke="#000"><rect x="0" y="0" width="150" height="200" fill="${c1}" stroke="none"/><g fill="${c2}"><g transform="translate(-60,-50)"><use href="#${chargeId}"/></g><g transform="translate(10,50)"><use href="#${chargeId}"/></g></g></pattern>`,
  vair: (p, c1, c2, size) => `<pattern id="${p}" width="${size * .125}" height="${size * .25}" viewBox="0 0 25 50" stroke="#000" stroke-width=".2"><rect x="0" y="0" width="25" height="25" fill="${c2}" stroke="none"/><path d="m12.5,0 l6.25,6.25 v12.5 l6.25,6.25 h-25 l6.25,-6.25 v-12.5 z" fill="${c1}"/><rect x="0" y="25" width="25" height="25" fill="${c1}" stroke-width="1" stroke="none"/><path d="m25,25 l-6.25,6.25 v12.5 l-6.25,6.25 l-6.25,-6.25 v-12.5 l-6.25,-6.25 z" fill="${c2}"/></pattern>`,
  vairInPale: (p, c1, c2, size) => `<pattern id="${p}" width="${size * .125}" height="${size * .125}" viewBox="0 0 25 25"><rect x="0" y="0" width="25" height="25" fill="${c2}"/><path d="m12.5,0 l6.25,6.25 v12.5 l6.25,6.25 h-25 l6.25,-6.25 v-12.5 z" fill="${c1}" stroke="#000" stroke-width=".2"/></pattern>`,
  vairEnPointe: (p, c1, c2, size) => `<pattern id="${p}" width="${size * .125}" height="${size * .25}" viewBox="0 0 25 50"><rect x="0" y="0" width="25" height="25" fill="${c2}"/><path d="m12.5,0 l6.25,6.25 v12.5 l6.25,6.25 h-25 l6.25,-6.25 v-12.5 z" fill="${c1}"/><rect x="0" y="25" width="25" height="25" fill="${c1}" stroke-width="1" stroke="${c1}"/><path d="m12.5,25 l6.25,6.25 v12.5 l6.25,6.25 h-25 l6.25,-6.25 v-12.5 z" fill="${c2}"/></pattern>`,
  ermine: (p, c1, c2, size) => `<pattern id="${p}" width="${size * .125}" height="${size * .125}" viewBox="0 0 25 25" fill="${c2}"><rect x="0" y="0" width="25" height="25" fill="${c1}"/><path d="m19.1,14.8 c-0.7,2.9 -2.1,5 -3.5,6.5 0.6,-0.1 1.3,-0.6 2,-0.9 -0.4,0.8 -0.8,1.4 -1.2,2.1 0.2,-0.1 1,-0.8 2,-1.8 0.2,1.4 0.4,2.9 0.7,3.9 0.3,-0.9 0.5,-2.5 0.7,-3.9 0.6,0.6 1.2,1.3 2.1,1.8 l -1.2,-2.2 c 0.6,0.3 1.3,0.8 1.9,1 -1.5,-1.6 -2.8,-3.6 -3.5,-6.5z"/><path d="m16.1,14.9 c-0.1,-0.2 -1,0.4 -1.5,-0.8 1.2,1.1 2.5,-1.2 3.5,0.4 0.3,0.7 -1.1,1.8 -2,0.4z"/><path d="m21.9,14.9 c.1,-.2 1,0.4 1.5,-0.8 -1.2,1.1 -2.5,-1.2 -3.5,0.4 -0.3,0.7 1.1,1.8 2,0.4z"/><path d="m19.4,12.4 c-0.2,-0.1 0.7,-0.7 -0.6,-1.4 1.1,1.2 -2,1.7 -0.3,2.9 0.7,0.4 2.4,-0.5 0.9,-1.5z"/><path d="M5.8,4.6 C5.1,7.5 3.7,9.5 2.3,11 2.9,10.9 3.6,10.5 4.2,10.1 3.8,10.9 3.4,11.5 3,12.2 3.3,12.1 4,11.4 5.1,10.4 c 0.2,1.4 0.4,2.9 0.7,3.9 0.3,-0.9 0.5,-2.5 0.7,-3.9 0.6,0.6 1.2,1.3 2.1,1.8 L 7.3,10 c 0.6,0.3 1.3,0.8 1.9,1 C7.7,9.5 6.4,7.5 5.8,4.6Z"/><path d="M2.9,4.7 C2.8,4.6 1.9,5.1 1.3,4 2.6,5.1 3.8,2.8 4.9,4.3 5.2,5 3.8,6.1 2.9,4.7Z"/><path d="M8.6,4.7 C8.7,4.5 9.6,5.1 10.1,3.9 8.9,5.1 7.6,2.7 6.6,4.3 6.3,5 7.7,6.1 8.6,4.7Z"/><path d="M6.1,2.2 C 5.9,2.1 6.8,1.5 5.5,0.8 6.6,2.1 3.5,2.6 5.2,3.7 5.9,4.1 7.6,3.3 6.1,2.2Z"/></pattern>`,
  chequy: (p, c1, c2, size) => `<pattern id="${p}" width="${size * .25}" height="${size * .25}" viewBox="0 0 50 50" fill="${c2}"><rect x="0" y="0" width="50" height="50"/><rect x="0" y="0" width="25" height="25" fill="${c1}"/><rect x="25" y="25" width="25" height="25" fill="${c1}"/></pattern>`,
  lozengy: (p, c1, c2, size) => `<pattern id="${p}" width="${size * .125}" height="${size * .125}" viewBox="0 0 50 50"><rect x="0" y="0" width="50" height="50" fill="${c1}"/><polygon points="25,0 50,25 25,50 0,25" fill="${c2}"/></pattern>`,
  fusily: (p, c1, c2, size) => `<pattern id="${p}" width="${size * .125}" height="${size * .25}" viewBox="0 0 50 100"><rect x="0" y="0" width="50" height="100" fill="${c1}"/><polygon points="25,0 50,50 25,100 0,50" fill="${c2}"/></pattern>`,
  pally: (p, c1, c2, size) => `<pattern id="${p}" width="${size * .5}" height="${size * .125}" viewBox="0 0 100 25"><rect x="0" y="0" width="100" height="25" fill="${c1}"/><rect x="25" y="0" width="25" height="25" fill="${c2}"/><rect x="75" y="0" width="25" height="25" fill="${c2}"/></pattern>`,
  barry: (p, c1, c2, size) => `<pattern id="${p}" width="${size * .125}" height="${size * .5}" viewBox="0 0 25 100"><rect x="0" y="0" width="25" height="100" fill="${c2}"/><rect x="0" y="25" width="25" height="25" fill="${c1}"/><rect x="0" y="75" width="25" height="25" fill="${c1}"/></pattern>`,
  gemelles: (p, c1, c2, size) => `<pattern id="${p}" width="${size * .125}" height="${size * .5}" viewBox="0 0 25 100"><rect x="0" y="0" width="25" height="100" fill="${c2}"/><rect x="0" y="35" width="25" height="10" fill="${c1}"/><rect x="0" y="55" width="25" height="10" fill="${c1}"/></pattern>`,
  bendy: (p, c1, c2, size) => `<pattern id="${p}" width="${size * .36}" height="${size * .36}" viewBox="0 0 50 50" patternTransform="rotate(45)"><rect x="0" y="0" width="50" height="50" fill="${c2}"/><line x1="0" y1="37.5" x2="50" y2="37.5" stroke="${c1}" stroke-width="25"/></pattern>`,
  bendySinister: (p, c1, c2, size) => `<pattern id="${p}" width="${size * .36}" height="${size * .36}" viewBox="0 0 50 50" patternTransform="rotate(-45)"><rect x="0" y="0" width="50" height="50" fill="${c2}"/><line x1="0" y1="37.5" x2="50" y2="37.5" stroke="${c1}" stroke-width="25"/></pattern>`,
  palyBendy: (p, c1, c2, size) => `<pattern id="${p}" width="${size * .125}" height="${size * .25}" viewBox="0 0 50 100" patternTransform="translate(22,44) rotate(-26.5)"><rect x="0" y="0" width="50" height="100" fill="${c1}"/><polygon points="25,0 50,50 25,100 0,50" fill="${c2}"/></pattern>`,
  pappellony: (p, c1, c2, size) => `<pattern id="${p}" width="${size * .125}" height="${size * .125}" viewBox="0 0 100 100"><rect x="0" y="0" width="100" height="100" fill="${c1}"/><circle cx="0" cy="51" r="45" stroke="${c2}" fill="${c1}" stroke-width="10"/><circle cx="100" cy="51" r="45" stroke="${c2}" fill="${c1}" stroke-width="10"/><circle cx="50" cy="1" r="45" stroke="${c2}" fill="${c1}" stroke-width="10"/></pattern>`,
  masoned: (p, c1, c2, size) => `<pattern id="${p}" width="${size * .125}" height="${size * .125}" viewBox="0 0 100 100" fill="none"><rect x="0" y="0" width="100" height="100" fill="${c1}"/><rect x="0" y="0" width="100" height="50" stroke="${c2}" stroke-width="4"/><line x1="50" y1="50" x2="50" y2="100" stroke="${c2}" stroke-width="5"/></pattern>`,
  fretty: (p, c1, c2, size) => `<pattern id="${p}" width="${size * .28}" height="${size * .28}" viewBox="0 0 200 200" patternTransform="translate(-19,21) rotate(45)" stroke="#000" stroke-width="2"><rect x="0" y="0" width="200" height="200" stroke="none" fill="${c1}"/><rect x="0" y="35" width="200" height="30" stroke="none" fill="${c2}"/><rect x="0" y="135" width="200" height="30" stroke="none" fill="${c2}"/><rect x="35" y="0" width="30" height="200" stroke="none" fill="${c2}"/><rect x="135" y="0" width="30" height="200" stroke="none" fill="${c2}"/><line x1="0" y1="35" x2="35" y2="35"/><line x1="0" y1="65" x2="35" y2="65"/><line x1="35" y1="165" x2="35" y2="200"/><line x1="65" y1="165" x2="65" y2="200"/><line x1="135" y1="0" x2="135" y2="35"/><line x1="165" y1="0" x2="165" y2="35"/><line x1="135" y1="65" x2="135" y2="200"/><line x1="165" y1="65" x2="165" y2="200"/><line x1="35" y1="0" x2="35" y2="135"/><line x1="65" y1="0" x2="65" y2="135"/><line x1="65" y1="35" x2="200" y2="35"/><line x1="65" y1="65" x2="200" y2="65"/><line x1="0" y1="135" x2="135" y2="135"/><line x1="0" y1="165" x2="135" y2="165"/><line x1="165" y1="135" x2="200" y2="135"/><line x1="165" y1="165" x2="200" y2="165"/></pattern>`
}

const blacklight = `<radialGradient id="backlight" cx="100%" cy="100%" r="150%">
  <stop stop-color="#fff" stop-opacity=".3" offset="0"/>
  <stop stop-color="#fff" stop-opacity=".15" offset=".25"/>
  <stop stop-color="#000" stop-opacity="0" offset="1"/>
  </radialGradient>`

module.exports = {shieldPaths, lines, templates, patterns, blacklight}







