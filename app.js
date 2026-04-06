const STORAGE = {
  theme: "automoto.theme",
  favorites: "automoto.favorites",
  compare: "automoto.compare",
  userVehicles: "automoto.userVehicles",
  reviews: "automoto.reviews",
  filters: "automoto.filters",
  hotClicks: "automoto.hotClicks",
  offlineToast: "automoto.offlineToastShown"
};

const USD_TO_VND = 26340;
const LBFT_TO_NM = 1.3558179483314;
const MPH_TO_KPH = 1.609344;
const LB_TO_KG = 0.45359237;
const MI_TO_KM = 1.609344;
const PAGE_SIZE = 12;
const DEFAULT_PLACEHOLDER_PRICE_MAX = 100000;

const usdFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

const SEED_VEHICLES = [];

const PHOTO_POOLS = {
  car: [
    "https://loremflickr.com/1200/800/car?lock=11",
    "https://loremflickr.com/1200/800/sports-car?lock=12",
    "https://loremflickr.com/1200/800/supercar?lock=13",
    "https://loremflickr.com/1200/800/electric-car?lock=14",
    "https://loremflickr.com/1200/800/coupe?lock=15",
    "https://loremflickr.com/1200/800/race-car?lock=16"
  ],
  bike: [
    "https://loremflickr.com/1200/800/motorcycle?lock=21",
    "https://loremflickr.com/1200/800/sportbike?lock=22",
    "https://loremflickr.com/1200/800/motorbike?lock=23",
    "https://loremflickr.com/1200/800/bike?lock=24",
    "https://loremflickr.com/1200/800/racing-bike?lock=25",
    "https://loremflickr.com/1200/800/adventure-bike?lock=26"
  ],
  vn: [
    "https://loremflickr.com/1200/800/scooter?lock=31",
    "https://loremflickr.com/1200/800/motorbike?lock=32",
    "https://loremflickr.com/1200/800/commuter-bike?lock=33",
    "https://loremflickr.com/1200/800/street-bike?lock=34",
    "https://loremflickr.com/1200/800/urban-bike?lock=35",
    "https://loremflickr.com/1200/800/scooter?lock=36"
  ]
};

const PROMO_BADGES = {
  8: "Hot",
  16: "Hot",
  20: "New 2025",
  26: "Hot",
  28: "New 2025",
  48: "Hot",
  52: "Hot",
  70: "Hot",
  71: "New 2025",
  78: "Hot"
};

SEED_VEHICLES.push(
  { id: 1, type: "car", brand: "Toyota", name: "GR Supra", year: 2024, price: 43695, priceStr: "$43,695", cat: "Sports", power: 382, torque: 368, topSpeed: 155, zeroSixty: 3.9, weightLb: 3181, specs: { Engine: "3.0L Turbo I6", Power: "382 HP", Torque: "368 lb-ft", Drivetrain: "RWD", Trans: "8-spd Auto", "0-60": "3.9s", "Top Speed": "155 mph", Weight: "3,181 lbs" }, variants: [{ n: "2.0", p: "$43,695" }, { n: "3.0", p: "$54,195" }, { n: "3.0 A91 Edition", p: "$58,945" }], col: "#1a2e3a" },
  { id: 2, type: "car", brand: "Toyota", name: "GR86", year: 2024, price: 29015, priceStr: "$29,015", cat: "Sports", power: 228, torque: 184, topSpeed: 140, zeroSixty: 6.1, weightLb: 2822, specs: { Engine: "2.4L NA H4", Power: "228 HP", Torque: "184 lb-ft", Drivetrain: "RWD", Trans: "6-spd Manual", "0-60": "6.1s", "Top Speed": "140 mph", Weight: "2,822 lbs" }, variants: [{ n: "Base", p: "$29,015" }, { n: "Premium", p: "$32,415" }], col: "#2a1a1a" },
  { id: 3, type: "car", brand: "Honda", name: "Civic Type R", year: 2024, price: 44990, priceStr: "$44,990", cat: "Hot Hatch", power: 315, torque: 310, topSpeed: 169, zeroSixty: 5, weightLb: 3117, specs: { Engine: "2.0L Turbo I4", Power: "315 HP", Torque: "310 lb-ft", Drivetrain: "FWD", Trans: "6-spd Manual", "0-60": "5.0s", "Top Speed": "169 mph", Weight: "3,117 lbs" }, variants: [{ n: "Type R", p: "$44,990" }, { n: "Type R LE", p: "$50,000+" }], col: "#1a2a1a" },
  { id: 4, type: "car", brand: "Honda", name: "NSX Type S", year: 2022, price: 169500, priceStr: "$169,500", cat: "Supercar", power: 600, torque: 492, topSpeed: 191, zeroSixty: 2.9, weightLb: 3878, specs: { Engine: "3.5L TT V6 Hybrid", Power: "600 HP", Torque: "492 lb-ft", Drivetrain: "AWD", Trans: "9-spd DCT", "0-60": "2.9s", "Top Speed": "191 mph", Weight: "3,878 lbs" }, variants: [{ n: "Type S", p: "$169,500" }], col: "#2a1a0a" },
  { id: 5, type: "car", brand: "BMW", name: "M3 Competition", year: 2024, price: 79100, priceStr: "$79,100", cat: "Sedan", power: 503, torque: 479, topSpeed: 180, zeroSixty: 3.3, weightLb: 3830, specs: { Engine: "3.0L TT I6", Power: "503 HP", Torque: "479 lb-ft", Drivetrain: "RWD", Trans: "8-spd DCT", "0-60": "3.3s", "Top Speed": "180 mph", Weight: "3,830 lbs" }, variants: [{ n: "M3", p: "$73,800" }, { n: "Competition", p: "$79,100" }, { n: "xDrive", p: "$81,100" }], col: "#1a1a2a" },
  { id: 6, type: "car", brand: "BMW", name: "M4 CSL", year: 2023, price: 139900, priceStr: "$139,900", cat: "Coupe", power: 543, torque: 479, topSpeed: 191, zeroSixty: 3.5, weightLb: 3551, specs: { Engine: "3.0L TT I6", Power: "543 HP", Torque: "479 lb-ft", Drivetrain: "RWD", Trans: "8-spd DCT", "0-60": "3.5s", "Top Speed": "191 mph", Weight: "3,551 lbs" }, variants: [{ n: "CSL", p: "$139,900" }], col: "#1a1a2a" },
  { id: 7, type: "car", brand: "Porsche", name: "911 GT3", year: 2024, price: 161100, priceStr: "$161,100", cat: "Sports", power: 502, torque: 346, topSpeed: 197, zeroSixty: 3.2, weightLb: 3153, specs: { Engine: "4.0L NA Flat-6", Power: "502 HP", Torque: "346 lb-ft", Drivetrain: "RWD", Trans: "7-spd PDK", "0-60": "3.2s", "Top Speed": "197 mph", Weight: "3,153 lbs" }, variants: [{ n: "GT3", p: "$161,100" }, { n: "GT3 Touring", p: "$163,000" }, { n: "GT3 RS", p: "$225,250" }], col: "#2a1a0a" },
  { id: 8, type: "car", brand: "Porsche", name: "Taycan Turbo S", year: 2024, price: 187400, priceStr: "$187,400", cat: "EV Sedan", power: 750, torque: 774, topSpeed: 162, zeroSixty: 2.6, weightLb: 5060, specs: { Engine: "Electric AWD", Power: "750 HP", Torque: "774 lb-ft", Drivetrain: "AWD", Trans: "2-spd Auto", "0-60": "2.6s", "Top Speed": "162 mph", Weight: "5,060 lbs" }, variants: [{ n: "Taycan", p: "$90,900" }, { n: "GTS", p: "$135,300" }, { n: "Turbo S", p: "$187,400" }], col: "#1a2a2a" },
  { id: 9, type: "car", brand: "Ferrari", name: "296 GTB", year: 2024, price: 320000, priceStr: "$320,000", cat: "Supercar", power: 819, torque: 546, topSpeed: 205, zeroSixty: 2.9, weightLb: 3219, specs: { Engine: "3.0L TT V6 Hybrid", Power: "819 HP", Torque: "546 lb-ft", Drivetrain: "RWD", Trans: "8-spd DCT", "0-60": "2.9s", "Top Speed": "205 mph", Weight: "3,219 lbs" }, variants: [{ n: "296 GTB", p: "$320,000" }, { n: "296 GTS", p: "$337,300" }], col: "#2a0a0a" },
  { id: 10, type: "car", brand: "Ferrari", name: "SF90 Stradale", year: 2024, price: 520000, priceStr: "$520,000", cat: "Hypercar", power: 986, torque: 590, topSpeed: 211, zeroSixty: 2.5, weightLb: 3461, specs: { Engine: "4.0L V8 + 3 E-Motors", Power: "986 HP", Torque: "590 lb-ft", Drivetrain: "AWD", Trans: "8-spd DCT", "0-60": "2.5s", "Top Speed": "211 mph", Weight: "3,461 lbs" }, variants: [{ n: "Stradale", p: "$520,000" }, { n: "Spider", p: "$565,000" }], col: "#2a0a0a" },
  { id: 11, type: "car", brand: "Lamborghini", name: "Huracan EVO", year: 2024, price: 261274, priceStr: "$261,274", cat: "Supercar", power: 630, torque: 443, topSpeed: 202, zeroSixty: 2.9, weightLb: 3135, specs: { Engine: "5.2L NA V10", Power: "630 HP", Torque: "443 lb-ft", Drivetrain: "AWD", Trans: "7-spd DCT", "0-60": "2.9s", "Top Speed": "202 mph", Weight: "3,135 lbs" }, variants: [{ n: "EVO RWD", p: "$212,500" }, { n: "EVO AWD", p: "$261,274" }, { n: "EVO Spyder", p: "$287,400" }], col: "#2a2a0a" },
  { id: 12, type: "car", brand: "Lamborghini", name: "Urus Performante", year: 2024, price: 259975, priceStr: "$259,975", cat: "SUV", power: 666, torque: 627, topSpeed: 189, zeroSixty: 3.3, weightLb: 4741, specs: { Engine: "4.0L TT V8", Power: "666 HP", Torque: "627 lb-ft", Drivetrain: "AWD", Trans: "8-spd Auto", "0-60": "3.3s", "Top Speed": "189 mph", Weight: "4,741 lbs" }, variants: [{ n: "Urus", p: "$231,282" }, { n: "Urus S", p: "$249,595" }, { n: "Performante", p: "$259,975" }], col: "#2a2a0a" },
  { id: 13, type: "car", brand: "Mercedes", name: "AMG GT 63 S", year: 2024, price: 161050, priceStr: "$161,050", cat: "GT Car", power: 630, torque: 664, topSpeed: 196, zeroSixty: 3.1, weightLb: 4112, specs: { Engine: "4.0L Biturbo V8", Power: "630 HP", Torque: "664 lb-ft", Drivetrain: "RWD", Trans: "9-spd MCT", "0-60": "3.1s", "Top Speed": "196 mph", Weight: "4,112 lbs" }, variants: [{ n: "GT 63", p: "$137,500" }, { n: "GT 63 S", p: "$161,050" }, { n: "E Performance", p: "$174,900" }], col: "#1a2a1a" },
  { id: 14, type: "car", brand: "Audi", name: "R8 V10 Performance", year: 2023, price: 198700, priceStr: "$198,700", cat: "Supercar", power: 602, torque: 413, topSpeed: 205, zeroSixty: 3.1, weightLb: 3561, specs: { Engine: "5.2L NA V10", Power: "602 HP", Torque: "413 lb-ft", Drivetrain: "AWD", Trans: "7-spd DCT", "0-60": "3.1s", "Top Speed": "205 mph", Weight: "3,561 lbs" }, variants: [{ n: "V10", p: "$158,600" }, { n: "V10 Performance", p: "$198,700" }, { n: "V10 Spyder", p: "$212,000" }], col: "#1a1a2a" },
  { id: 15, type: "car", brand: "Nissan", name: "GT-R Nismo", year: 2024, price: 212245, priceStr: "$212,245", cat: "Supercar", power: 600, torque: 481, topSpeed: 196, zeroSixty: 2.5, weightLb: 3824, specs: { Engine: "3.8L TT V6", Power: "600 HP", Torque: "481 lb-ft", Drivetrain: "AWD", Trans: "6-spd DCT", "0-60": "2.5s", "Top Speed": "196 mph", Weight: "3,824 lbs" }, variants: [{ n: "Premium", p: "$113,540" }, { n: "T-spec", p: "$149,990" }, { n: "Nismo", p: "$212,245" }], col: "#0f1a2a" },
  { id: 16, type: "car", brand: "Ford", name: "Mustang GT500", year: 2024, price: 80000, priceStr: "$80,000", cat: "Muscle", power: 760, torque: 625, topSpeed: 180, zeroSixty: 3.3, weightLb: 3880, specs: { Engine: "5.2L SC V8", Power: "760 HP", Torque: "625 lb-ft", Drivetrain: "RWD", Trans: "7-spd DCT", "0-60": "3.3s", "Top Speed": "180 mph", Weight: "3,880 lbs" }, variants: [{ n: "GT500", p: "$80,000" }, { n: "Carbon Track Pack", p: "$87,440" }], col: "#2a1a0a" },
  { id: 17, type: "car", brand: "Mazda", name: "MX-5 Miata", year: 2024, price: 30115, priceStr: "$30,115", cat: "Roadster", power: 181, torque: 151, topSpeed: 135, zeroSixty: 5.7, weightLb: 2342, specs: { Engine: "2.0L NA I4", Power: "181 HP", Torque: "151 lb-ft", Drivetrain: "RWD", Trans: "6-spd Manual", "0-60": "5.7s", "Top Speed": "135 mph", Weight: "2,342 lbs" }, variants: [{ n: "Sport", p: "$30,115" }, { n: "Club", p: "$33,430" }, { n: "Grand Touring", p: "$35,270" }, { n: "RF GT", p: "$39,145" }], col: "#2a1a1a" },
  { id: 18, type: "car", brand: "Chevrolet", name: "Corvette Z06", year: 2024, price: 106395, priceStr: "$106,395", cat: "Supercar", power: 670, torque: 460, topSpeed: 195, zeroSixty: 2.6, weightLb: 3366, specs: { Engine: "5.5L NA V8 Flat-plane", Power: "670 HP", Torque: "460 lb-ft", Drivetrain: "RWD", Trans: "8-spd DCT", "0-60": "2.6s", "Top Speed": "195 mph", Weight: "3,366 lbs" }, variants: [{ n: "1LZ", p: "$106,395" }, { n: "2LZ", p: "$115,995" }, { n: "3LZ", p: "$127,995" }], col: "#2a1a0a" },
  { id: 19, type: "car", brand: "Dodge", name: "Challenger SRT Hellcat", year: 2023, price: 72170, priceStr: "$72,170", cat: "Muscle", power: 717, torque: 656, topSpeed: 199, zeroSixty: 3.6, weightLb: 4439, specs: { Engine: "6.2L SC V8", Power: "717 HP", Torque: "656 lb-ft", Drivetrain: "RWD", Trans: "8-spd Auto", "0-60": "3.6s", "Top Speed": "199 mph", Weight: "4,439 lbs" }, variants: [{ n: "Hellcat", p: "$72,170" }, { n: "Hellcat Redeye", p: "$82,490" }, { n: "Super Stock", p: "$85,500" }, { n: "Demon 170", p: "$99,990" }], col: "#2a0a1a" },
  { id: 20, type: "car", brand: "Tesla", name: "Model S Plaid", year: 2024, price: 89990, priceStr: "$89,990", cat: "EV Sedan", power: 1020, torque: 1050, topSpeed: 200, zeroSixty: 1.99, weightLb: 4766, specs: { Engine: "Tri-Motor Electric", Power: "1,020 HP", Torque: "1,050 lb-ft", Drivetrain: "AWD", Trans: "Single-speed", "0-60": "1.99s", "Top Speed": "200 mph", Weight: "4,766 lbs", Range: "396 mi" }, variants: [{ n: "Model S", p: "$74,990" }, { n: "Model S Plaid", p: "$89,990" }], col: "#0a1a2a" },
  { id: 21, type: "car", brand: "Subaru", name: "WRX STI", year: 2021, price: 36590, priceStr: "$36,590", cat: "Rally", power: 310, torque: 290, topSpeed: 159, zeroSixty: 4.7, weightLb: 3373, specs: { Engine: "2.5L Turbo H4", Power: "310 HP", Torque: "290 lb-ft", Drivetrain: "AWD", Trans: "6-spd Manual", "0-60": "4.7s", "Top Speed": "159 mph", Weight: "3,373 lbs" }, variants: [{ n: "STI", p: "$36,590" }, { n: "STI Limited", p: "$39,195" }, { n: "STI S209", p: "$64,880" }], col: "#0a1a2a" },
  { id: 22, type: "car", brand: "Volkswagen", name: "Golf R", year: 2024, price: 47195, priceStr: "$47,195", cat: "Hot Hatch", power: 315, torque: 310, topSpeed: 155, zeroSixty: 4.5, weightLb: 3322, specs: { Engine: "2.0L Turbo I4", Power: "315 HP", Torque: "310 lb-ft", Drivetrain: "AWD", Trans: "7-spd DSG", "0-60": "4.5s", "Top Speed": "155 mph", Weight: "3,322 lbs" }, variants: [{ n: "Golf R", p: "$47,195" }, { n: "Golf R 20th Anniversary", p: "$51,395" }], col: "#0a1a2a" },
  { id: 23, type: "car", brand: "Lexus", name: "LFA", year: 2012, price: 375000, priceStr: "$375,000", cat: "Supercar", power: 553, torque: 354, topSpeed: 202, zeroSixty: 3.7, weightLb: 3263, specs: { Engine: "4.8L NA V10", Power: "553 HP", Torque: "354 lb-ft", Drivetrain: "RWD", Trans: "6-spd ASG", "0-60": "3.7s", "Top Speed": "202 mph", Weight: "3,263 lbs" }, variants: [{ n: "LFA", p: "$375,000" }, { n: "LFA Nurburgring", p: "$445,000" }], col: "#1a0a2a" },
  { id: 24, type: "car", brand: "Alfa Romeo", name: "Giulia QV", year: 2024, price: 83095, priceStr: "$83,095", cat: "Sports Sedan", power: 505, torque: 443, topSpeed: 191, zeroSixty: 3.8, weightLb: 3800, specs: { Engine: "2.9L TT V6", Power: "505 HP", Torque: "443 lb-ft", Drivetrain: "RWD", Trans: "8-spd Auto", "0-60": "3.8s", "Top Speed": "191 mph", Weight: "3,800 lbs" }, variants: [{ n: "Quadrifoglio", p: "$83,095" }], col: "#2a0a0a" },
  { id: 25, type: "car", brand: "McLaren", name: "765LT Spider", year: 2023, price: 382500, priceStr: "$382,500", cat: "Hypercar", power: 755, torque: 590, topSpeed: 205, zeroSixty: 2.8, weightLb: 3219, specs: { Engine: "4.0L TT V8", Power: "755 HP", Torque: "590 lb-ft", Drivetrain: "RWD", Trans: "7-spd DCT", "0-60": "2.8s", "Top Speed": "205 mph", Weight: "3,219 lbs" }, variants: [{ n: "765LT", p: "$358,000" }, { n: "765LT Spider", p: "$382,500" }], col: "#2a1a0a" },
  { id: 26, type: "car", brand: "Bugatti", name: "Chiron", year: 2024, price: 3300000, priceStr: "$3,300,000", cat: "Hypercar", power: 1479, torque: 1180, topSpeed: 261, zeroSixty: 2.5, weightLb: 4398, specs: { Engine: "8.0L Quad-Turbo W16", Power: "1,479 HP", Torque: "1,180 lb-ft", Drivetrain: "AWD", Trans: "7-spd DCT", "0-60": "2.5s", "Top Speed": "261 mph", Weight: "4,398 lbs" }, variants: [{ n: "Chiron", p: "$3,300,000" }, { n: "Super Sport", p: "$3,825,000" }, { n: "Pur Sport", p: "$3,600,000" }], col: "#2a2a0a" },
  { id: 27, type: "car", brand: "Mitsubishi", name: "Lancer Evo X", year: 2015, price: 38395, priceStr: "$38,395", cat: "Rally", power: 291, torque: 300, topSpeed: 150, zeroSixty: 4.2, weightLb: 3241, specs: { Engine: "2.0L Turbo I4", Power: "291 HP", Torque: "300 lb-ft", Drivetrain: "AWD", Trans: "6-spd Manual", "0-60": "4.2s", "Top Speed": "150 mph", Weight: "3,241 lbs" }, variants: [{ n: "GSR", p: "$34,595" }, { n: "MR", p: "$38,395" }, { n: "Final Edition", p: "$38,990" }], col: "#1a2a1a" },
  { id: 28, type: "car", brand: "Hyundai", name: "Ioniq 5 N", year: 2024, price: 66450, priceStr: "$66,450", cat: "EV Hot Hatch", power: 641, torque: 568, topSpeed: 161, zeroSixty: 3.4, weightLb: 4768, specs: { Engine: "Electric AWD", Power: "641 HP", Torque: "568 lb-ft", Drivetrain: "AWD", Trans: "Single-speed", "0-60": "3.4s", "Top Speed": "161 mph", Weight: "4,768 lbs", Range: "221 mi" }, variants: [{ n: "Ioniq 5 N", p: "$66,450" }], col: "#1a2a2a" }
);

SEED_VEHICLES.push(
  { id: 40, type: "bike", brand: "Honda", name: "CBR1000RR-R SP", year: 2024, price: 28500, priceStr: "$28,500", cat: "Superbike", power: 215, torque: 83, topSpeed: 186, zeroSixty: 2.6, weightLb: 443, specs: { Engine: "999cc Inline-4", Power: "215 HP", Torque: "83 lb-ft", Seat: "831 mm", Weight: "201 kg", "0-60": "2.6s", "Top Speed": "186 mph", Electronics: "10-mode TC" }, variants: [{ n: "Fireblade", p: "$22,000" }, { n: "Fireblade SP", p: "$28,500" }], col: "#2a0a0a" },
  { id: 41, type: "bike", brand: "Honda", name: "Africa Twin", year: 2024, price: 15699, priceStr: "$15,699", cat: "Adventure", power: 101, torque: 77, topSpeed: 130, zeroSixty: 5.2, weightLb: 498, specs: { Engine: "1084cc Parallel Twin", Power: "101 HP", Torque: "77 lb-ft", Seat: "850 mm", Weight: "226 kg", "Top Speed": "130 mph", Tank: "24.8L", Electronics: "5-mode TC" }, variants: [{ n: "Standard", p: "$15,699" }, { n: "Adventure Sports", p: "$17,499" }, { n: "DCT", p: "$16,699" }], col: "#2a1a0a" },
  { id: 42, type: "bike", brand: "Honda", name: "CB1000R Black Edition", year: 2024, price: 15199, priceStr: "$15,199", cat: "Naked", power: 143, torque: 75, topSpeed: 155, zeroSixty: 2.9, weightLb: 470, specs: { Engine: "998cc Inline-4", Power: "143 HP", Torque: "75 lb-ft", Seat: "830 mm", Weight: "213 kg", "0-60": "2.9s", "Top Speed": "155 mph", Electronics: "3-mode TC" }, variants: [{ n: "CB1000R", p: "$13,899" }, { n: "Black Edition", p: "$15,199" }], col: "#1a1a1a" },
  { id: 43, type: "bike", brand: "Honda", name: "CB650R", year: 2024, price: 9299, priceStr: "$9,299", cat: "Naked", power: 95, torque: 64, topSpeed: 130, zeroSixty: 4.2, weightLb: 419, specs: { Engine: "649cc Inline-4", Power: "95 HP", Torque: "64 lb-ft", Seat: "810 mm", Weight: "190 kg", "Top Speed": "130 mph", Tank: "15.4L", Electronics: "2-mode ABS" }, variants: [{ n: "CB650R", p: "$9,299" }], col: "#1a1a1a" },
  { id: 44, type: "bike", brand: "Yamaha", name: "YZF-R1M", year: 2024, price: 26999, priceStr: "$26,999", cat: "Superbike", power: 200, torque: 83, topSpeed: 186, zeroSixty: 2.5, weightLb: 443, specs: { Engine: "998cc Crossplane I4", Power: "200 HP", Torque: "83 lb-ft", Seat: "855 mm", Weight: "201 kg", "0-60": "2.5s", "Top Speed": "186 mph", Electronics: "Ohlins ERS" }, variants: [{ n: "R1", p: "$17,999" }, { n: "R1M", p: "$26,999" }], col: "#0f1a2a" },
  { id: 45, type: "bike", brand: "Yamaha", name: "MT-09 SP", year: 2024, price: 11999, priceStr: "$11,999", cat: "Naked", power: 117, torque: 73, topSpeed: 140, zeroSixty: 3.2, weightLb: 425, specs: { Engine: "889cc Inline-3", Power: "117 HP", Torque: "73 lb-ft", Seat: "825 mm", Weight: "193 kg", "0-60": "3.2s", "Top Speed": "140 mph", Electronics: "6-axis IMU" }, variants: [{ n: "MT-09", p: "$9,299" }, { n: "MT-09 SP", p: "$11,999" }], col: "#1a1a0a" },
  { id: 46, type: "bike", brand: "Yamaha", name: "XSR900", year: 2024, price: 10299, priceStr: "$10,299", cat: "Retro Sport", power: 117, torque: 68, topSpeed: 135, zeroSixty: 3.4, weightLb: 413, specs: { Engine: "889cc Inline-3", Power: "117 HP", Torque: "68 lb-ft", Seat: "820 mm", Weight: "193 kg", "Top Speed": "135 mph", Tank: "14L", Electronics: "3-mode TCS" }, variants: [{ n: "XSR900", p: "$10,299" }], col: "#1a1a0a" },
  { id: 47, type: "bike", brand: "Kawasaki", name: "Ninja ZX-10R KRT", year: 2024, price: 18999, priceStr: "$18,999", cat: "Superbike", power: 203, torque: 84, topSpeed: 186, zeroSixty: 2.7, weightLb: 456, specs: { Engine: "998cc Inline-4", Power: "203 HP", Torque: "84 lb-ft", Seat: "835 mm", Weight: "207 kg", "0-60": "2.7s", "Top Speed": "186 mph", Electronics: "KTRC / KLCM" }, variants: [{ n: "ZX-10R", p: "$16,499" }, { n: "ZX-10R KRT", p: "$18,999" }, { n: "ZX-10RR", p: "$24,999" }], col: "#0a1a0a" },
  { id: 48, type: "bike", brand: "Kawasaki", name: "Ninja H2R", year: 2024, price: 55000, priceStr: "$55,000", cat: "Track", power: 310, torque: 121, topSpeed: 249, zeroSixty: 2, weightLb: 525, specs: { Engine: "998cc Supercharged I4", Power: "310 HP", Torque: "121 lb-ft", Seat: "825 mm", Weight: "238 kg", "0-60": "2.0s", "Top Speed": "249 mph+", Electronics: "Ohlins ERS" }, variants: [{ n: "H2 SX SE", p: "$22,199" }, { n: "H2 Carbon", p: "$32,999" }, { n: "H2R", p: "$55,000" }], col: "#0a1a0a" },
  { id: 49, type: "bike", brand: "Kawasaki", name: "Z900 SE", year: 2024, price: 11299, priceStr: "$11,299", cat: "Naked", power: 125, torque: 73, topSpeed: 140, zeroSixty: 3.1, weightLb: 425, specs: { Engine: "948cc Inline-4", Power: "125 HP", Torque: "73 lb-ft", Seat: "795 mm", Weight: "193 kg", "0-60": "3.1s", "Top Speed": "140 mph", Electronics: "3-mode KTRC" }, variants: [{ n: "Z900", p: "$9,799" }, { n: "Z900 SE", p: "$11,299" }], col: "#0a1a0a" },
  { id: 50, type: "bike", brand: "Suzuki", name: "Hayabusa", year: 2024, price: 18599, priceStr: "$18,599", cat: "Sport Tourer", power: 190, torque: 111, topSpeed: 186, zeroSixty: 2.6, weightLb: 582, specs: { Engine: "1340cc Inline-4", Power: "190 HP", Torque: "111 lb-ft", Seat: "800 mm", Weight: "264 kg", "0-60": "2.6s", "Top Speed": "186 mph", Electronics: "10-mode TC" }, variants: [{ n: "Hayabusa", p: "$18,599" }], col: "#2a1a0a" },
  { id: 51, type: "bike", brand: "Suzuki", name: "GSX-R1000R", year: 2024, price: 17999, priceStr: "$17,999", cat: "Superbike", power: 199, torque: 85, topSpeed: 186, zeroSixty: 2.7, weightLb: 448, specs: { Engine: "999cc Inline-4", Power: "199 HP", Torque: "85 lb-ft", Seat: "825 mm", Weight: "203 kg", "0-60": "2.7s", "Top Speed": "186 mph", Electronics: "Showa BFRC" }, variants: [{ n: "GSX-R1000", p: "$14,999" }, { n: "GSX-R1000R", p: "$17,999" }], col: "#0f1a2a" },
  { id: 52, type: "bike", brand: "Ducati", name: "Panigale V4 S", year: 2024, price: 37295, priceStr: "$37,295", cat: "Superbike", power: 215.5, torque: 90.6, topSpeed: 192, zeroSixty: 2.5, weightLb: 436, specs: { Engine: "1103cc V4", Power: "215.5 HP", Torque: "90.6 lb-ft", Seat: "830 mm", Weight: "198 kg", "0-60": "2.5s", "Top Speed": "192 mph", Electronics: "Ohlins NIX30" }, variants: [{ n: "Panigale V4", p: "$23,995" }, { n: "Panigale V4 S", p: "$37,295" }, { n: "Speciale", p: "$64,995" }], col: "#2a0a0a" },
  { id: 53, type: "bike", brand: "Ducati", name: "Streetfighter V4 S", year: 2024, price: 31295, priceStr: "$31,295", cat: "Naked", power: 208, torque: 90.6, topSpeed: 180, zeroSixty: 2.6, weightLb: 439, specs: { Engine: "1103cc V4", Power: "208 HP", Torque: "90.6 lb-ft", Seat: "845 mm", Weight: "199 kg", "0-60": "2.6s", "Top Speed": "180 mph", Electronics: "Ohlins Smart EC" }, variants: [{ n: "Streetfighter V4", p: "$22,295" }, { n: "V4 S", p: "$31,295" }, { n: "V4 SP2", p: "$41,995" }], col: "#2a0a0a" },
  { id: 54, type: "bike", brand: "BMW", name: "S 1000 RR M", year: 2024, price: 31245, priceStr: "$31,245", cat: "Superbike", power: 210, torque: 83, topSpeed: 190, zeroSixty: 2.6, weightLb: 434, specs: { Engine: "999cc ShiftCam I4", Power: "210 HP", Torque: "83 lb-ft", Seat: "824 mm", Weight: "197 kg", "0-60": "2.6s", "Top Speed": "190 mph", Electronics: "DDC + M Chain" }, variants: [{ n: "S 1000 RR", p: "$17,745" }, { n: "S 1000 RR M", p: "$31,245" }], col: "#1a1a2a" },
  { id: 55, type: "bike", brand: "BMW", name: "R 1300 GS Adventure", year: 2024, price: 19145, priceStr: "$19,145", cat: "Adventure", power: 145, torque: 105, topSpeed: 135, zeroSixty: 4.5, weightLb: 591, specs: { Engine: "1300cc Boxer Twin", Power: "145 HP", Torque: "105 lb-ft", Seat: "850 mm", Weight: "268 kg", "Top Speed": "135 mph", Tank: "30L", Electronics: "GS Pro Modes" }, variants: [{ n: "R 1300 GS", p: "$16,645" }, { n: "R 1300 GS Adv.", p: "$19,145" }, { n: "Trophy", p: "$23,995" }], col: "#1a1a2a" },
  { id: 56, type: "bike", brand: "KTM", name: "1290 Super Duke R EVO", year: 2024, price: 19999, priceStr: "$19,999", cat: "Naked", power: 180, torque: 106, topSpeed: 175, zeroSixty: 2.8, weightLb: 417, specs: { Engine: "1301cc V-Twin", Power: "180 HP", Torque: "106 lb-ft", Seat: "834 mm", Weight: "189 kg", "0-60": "2.8s", "Top Speed": "175 mph", Electronics: "Semi-active WP" }, variants: [{ n: "Super Duke R", p: "$17,999" }, { n: "Super Duke R EVO", p: "$19,999" }], col: "#2a1a0a" },
  { id: 57, type: "bike", brand: "KTM", name: "890 Adventure R", year: 2024, price: 13699, priceStr: "$13,699", cat: "Adventure", power: 105, torque: 73, topSpeed: 125, zeroSixty: 5, weightLb: 441, specs: { Engine: "889cc Parallel Twin", Power: "105 HP", Torque: "73 lb-ft", Seat: "880 mm", Weight: "200 kg", "Top Speed": "125 mph", Tank: "20L", Electronics: "Rally Mode" }, variants: [{ n: "890 Adventure", p: "$11,299" }, { n: "890 Adventure R", p: "$13,699" }, { n: "Rally", p: "$15,999" }], col: "#2a1a0a" },
  { id: 58, type: "bike", brand: "Aprilia", name: "RSV4 Factory", year: 2024, price: 26999, priceStr: "$26,999", cat: "Superbike", power: 217, torque: 89, topSpeed: 193, zeroSixty: 2.5, weightLb: 439, specs: { Engine: "1099cc Inline-4", Power: "217 HP", Torque: "89 lb-ft", Seat: "851 mm", Weight: "199 kg", "0-60": "2.5s", "Top Speed": "193 mph", Electronics: "Ohlins Smart EC 2.0" }, variants: [{ n: "RSV4", p: "$19,999" }, { n: "RSV4 Factory", p: "$26,999" }, { n: "RSV4 X", p: "$36,999" }], col: "#1a0a2a" },
  { id: 59, type: "bike", brand: "Triumph", name: "Speed Triple 1200 RS", year: 2024, price: 18900, priceStr: "$18,900", cat: "Naked", power: 180, torque: 100, topSpeed: 165, zeroSixty: 2.9, weightLb: 437, specs: { Engine: "1160cc Inline-3", Power: "180 HP", Torque: "100 lb-ft", Seat: "830 mm", Weight: "198 kg", "0-60": "2.9s", "Top Speed": "165 mph", Electronics: "Ohlins Smart EC" }, variants: [{ n: "Speed Triple 1200 RR", p: "$17,200" }, { n: "Speed Triple 1200 RS", p: "$18,900" }], col: "#0a1a2a" },
  { id: 60, type: "bike", brand: "Triumph", name: "Daytona 660", year: 2024, price: 9595, priceStr: "$9,595", cat: "Sports", power: 95, torque: 52, topSpeed: 135, zeroSixty: 4, weightLb: 397, specs: { Engine: "660cc Inline-3", Power: "95 HP", Torque: "52 lb-ft", Seat: "820 mm", Weight: "180 kg", "Top Speed": "135 mph", Tank: "15L", Electronics: "2-mode TC" }, variants: [{ n: "Daytona 660", p: "$9,595" }], col: "#0a1a2a" },
  { id: 61, type: "bike", brand: "Harley-Davidson", name: "Nightster Special", year: 2024, price: 14299, priceStr: "$14,299", cat: "Cruiser", power: 90, torque: 70, topSpeed: 120, zeroSixty: 5, weightLb: 503, specs: { Engine: "975cc Revolution Max", Power: "90 HP", Torque: "70 lb-ft", Seat: "705 mm", Weight: "228 kg", "Top Speed": "120 mph", Tank: "11.7L", Electronics: "Drag Torque SC" }, variants: [{ n: "Nightster", p: "$12,299" }, { n: "Nightster Special", p: "$14,299" }], col: "#2a1a1a" },
  { id: 70, type: "vn", brand: "Yamaha", name: "Exciter 155 VVA", year: 2024, price: 1150, priceStr: "~47tr VND", cat: "Underbone Sport", power: 19.3, torque: 14.4, topSpeed: 122, zeroSixty: 9.5, weightLb: 268, specs: { Engine: "155cc VVA SOHC", Power: "19.3 HP", Torque: "14.4 Nm", Seat: "795 mm", Weight: "117 kg", "Top Speed": "122 km/h", Tank: "4.2L", Fuel: "~2.5L/100km" }, variants: [{ n: "Exciter 155 Standard", p: "~45.9tr" }, { n: "Exciter 155 Connected", p: "~47.4tr" }, { n: "Exciter 155 RC", p: "~48.9tr" }], col: "#1a1a0a" },
  { id: 71, type: "vn", brand: "Honda", name: "Winner X", year: 2024, price: 1100, priceStr: "~46.5tr VND", cat: "Underbone Sport", power: 14.8, torque: 13.5, topSpeed: 118, zeroSixty: 10.2, weightLb: 253, specs: { Engine: "150cc eSP+ SOHC", Power: "14.8 HP", Torque: "13.5 Nm", Seat: "785 mm", Weight: "115 kg", "Top Speed": "118 km/h", Tank: "4.1L", Fuel: "~2.0L/100km" }, variants: [{ n: "Standard", p: "~45.9tr" }, { n: "Special Edition", p: "~48.9tr" }], col: "#2a1a0a" },
  { id: 72, type: "vn", brand: "Yamaha", name: "NVX 155", year: 2024, price: 1050, priceStr: "~50tr VND", cat: "Maxi Scooter", power: 15.1, torque: 13.8, topSpeed: 115, zeroSixty: 9.8, weightLb: 291, specs: { Engine: "155cc VVA SOHC", Power: "15.1 HP", Torque: "13.8 Nm", Seat: "785 mm", Weight: "132 kg", "Top Speed": "115 km/h", Tank: "5.5L", Fuel: "~2.4L/100km" }, variants: [{ n: "NVX 155", p: "~49.9tr" }, { n: "NVX 155 Premium", p: "~52.9tr" }], col: "#0f1a2a" },
  { id: 73, type: "vn", brand: "Honda", name: "Air Blade 150", year: 2024, price: 980, priceStr: "~43.5tr VND", cat: "Scooter", power: 13.6, torque: 13.1, topSpeed: 110, zeroSixty: 10.5, weightLb: 255, specs: { Engine: "150cc eSP+ SOHC", Power: "13.6 HP", Torque: "13.1 Nm", Seat: "764 mm", Weight: "113 kg", "Top Speed": "110 km/h", Tank: "3.7L", Fuel: "~1.9L/100km" }, variants: [{ n: "Standard", p: "~43.5tr" }, { n: "Special", p: "~44.9tr" }], col: "#1a2a1a" },
  { id: 74, type: "vn", brand: "Yamaha", name: "Grande Hybrid", year: 2024, price: 860, priceStr: "~52tr VND", cat: "Scooter Hybrid", power: 12.6, torque: 13.8, topSpeed: 105, zeroSixty: 11, weightLb: 266, specs: { Engine: "125cc VVA + E-Motor", Power: "12.6 HP", Torque: "13.8 Nm", Seat: "760 mm", Weight: "112 kg", "Top Speed": "105 km/h", Tank: "5.1L", Fuel: "~1.6L/100km" }, variants: [{ n: "Grande Hybrid", p: "~52tr" }, { n: "Grande Hybrid Limited", p: "~56tr" }], col: "#1a1a2a" },
  { id: 75, type: "vn", brand: "Honda", name: "Vision 110", year: 2024, price: 650, priceStr: "~33tr VND", cat: "Scooter", power: 8.1, torque: 9.3, topSpeed: 95, zeroSixty: 13, weightLb: 220, specs: { Engine: "110cc eSP SOHC", Power: "8.1 HP", Torque: "9.3 Nm", Seat: "757 mm", Weight: "98 kg", "Top Speed": "95 km/h", Tank: "3.7L", Fuel: "~1.7L/100km" }, variants: [{ n: "Vision 110", p: "~33.2tr" }, { n: "Vision Special", p: "~35.9tr" }], col: "#1a2a2a" },
  { id: 76, type: "vn", brand: "Honda", name: "Wave Alpha 110", year: 2024, price: 480, priceStr: "~19.9tr VND", cat: "Cub", power: 8.67, torque: 8.83, topSpeed: 90, zeroSixty: 14, weightLb: 220, specs: { Engine: "110cc SOHC", Power: "8.67 HP", Torque: "8.83 Nm", Seat: "765 mm", Weight: "98 kg", "Top Speed": "90 km/h", Tank: "3.5L", Fuel: "~1.6L/100km" }, variants: [{ n: "Wave Alpha", p: "~18.99tr" }, { n: "Wave Alpha Special", p: "~19.99tr" }], col: "#2a1a1a" },
  { id: 77, type: "vn", brand: "Yamaha", name: "Sirius FI", year: 2024, price: 450, priceStr: "~20.9tr VND", cat: "Cub", power: 9, torque: 9.5, topSpeed: 92, zeroSixty: 13.5, weightLb: 224, specs: { Engine: "113cc SOHC FI", Power: "9.0 HP", Torque: "9.5 Nm", Seat: "770 mm", Weight: "100 kg", "Top Speed": "92 km/h", Tank: "4L", Fuel: "~1.8L/100km" }, variants: [{ n: "Sirius FI", p: "~20.9tr" }, { n: "Sirius RC", p: "~21.9tr" }], col: "#1a1a2a" },
  { id: 78, type: "vn", brand: "Honda", name: "SH 150i", year: 2024, price: 1350, priceStr: "~75tr VND", cat: "Premium Scooter", power: 14.6, torque: 13.6, topSpeed: 118, zeroSixty: 8.5, weightLb: 290, specs: { Engine: "149cc eSP+ SOHC", Power: "14.6 HP", Torque: "13.6 Nm", Seat: "796 mm", Weight: "130 kg", "Top Speed": "118 km/h", Tank: "7.7L", Fuel: "~1.9L/100km" }, variants: [{ n: "SH 150i", p: "~71tr" }, { n: "SH 150i Sport", p: "~75.5tr" }, { n: "SH 160i", p: "~83.5tr" }], col: "#1a2a2a" }
);

const state = {
  baseVehicles: [],
  userVehicles: [],
  allVehicles: [],
  favorites: new Set(loadJson(STORAGE.favorites, [])),
  compareIds: loadJson(STORAGE.compare, []),
  compareMode: false,
  reviews: loadJson(STORAGE.reviews, {}),
  hotClicks: loadJson(STORAGE.hotClicks, {}),
  filters: loadJson(STORAGE.filters, null),
  activeType: "all",
  activeTab: "gallery",
  lbMode: "power",
  visibleCount: PAGE_SIZE,
  detailTab: "specs",
  currentVehicleId: null,
  installPrompt: null,
  observer: null,
  priceBounds: { min: 0, max: DEFAULT_PLACEHOLDER_PRICE_MAX },
  aiMessages: []
};

const refs = {
  body: document.body,
  themeToggle: document.getElementById("themeToggle"),
  addVehicleBtn: document.getElementById("addVehicleBtn"),
  openGarageBtn: document.getElementById("openGarageBtn"),
  installBtn: document.getElementById("installBtn"),
  mainTabs: [...document.querySelectorAll(".main-tab")],
  tabGallery: document.getElementById("tab-gallery"),
  tabLeaderboard: document.getElementById("tab-leaderboard"),
  typeFilters: document.getElementById("typeFilters"),
  searchInput: document.getElementById("searchInput"),
  brandSel: document.getElementById("brandSel"),
  engineSel: document.getElementById("engineSel"),
  yearFromSel: document.getElementById("yearFromSel"),
  yearToSel: document.getElementById("yearToSel"),
  sortSel: document.getElementById("sortSel"),
  priceMin: document.getElementById("priceMin"),
  priceMax: document.getElementById("priceMax"),
  priceRangeLabel: document.getElementById("priceRangeLabel"),
  compareToggle: document.getElementById("compareToggle"),
  clearFiltersBtn: document.getElementById("clearFiltersBtn"),
  countD: document.getElementById("countD"),
  carD: document.getElementById("carD"),
  bikeD: document.getElementById("bikeD"),
  vnD: document.getElementById("vnD"),
  mineD: document.getElementById("mineD"),
  favD: document.getElementById("favD"),
  heroCount: document.getElementById("heroCount"),
  heroFavCount: document.getElementById("heroFavCount"),
  heroGarageCount: document.getElementById("heroGarageCount"),
  grid: document.getElementById("vGrid"),
  sentinel: document.getElementById("gallerySentinel"),
  lbList: document.getElementById("lbList"),
  lbControls: [...document.querySelectorAll("[data-lb-mode]")],
  aiFab: document.getElementById("aiFab"),
  aiOverlay: document.getElementById("aiModalOverlay"),
  aiChat: document.getElementById("aiChat"),
  aiForm: document.getElementById("aiForm"),
  aiInput: document.getElementById("aiInput"),
  toastStack: document.getElementById("toastStack"),
  compareDock: document.getElementById("compareDock"),
  compareSlots: document.getElementById("compareSlots"),
  compareNowBtn: document.getElementById("compareNowBtn"),
  clearCompareBtn: document.getElementById("clearCompareBtn"),
  vehicleOverlay: document.getElementById("vehicleModalOverlay"),
  vehicleContent: document.getElementById("vehicleModalContent"),
  compareOverlay: document.getElementById("compareModalOverlay"),
  compareContent: document.getElementById("compareModalContent"),
  garageOverlay: document.getElementById("garageModalOverlay"),
  garageForm: document.getElementById("garageForm"),
  overlays: [...document.querySelectorAll(".overlay")],
  closeButtons: [...document.querySelectorAll("[data-close]")]
};

init();

function init() {
  state.baseVehicles = SEED_VEHICLES.map((vehicle) => normalizeVehicle(vehicle));
  state.userVehicles = loadJson(STORAGE.userVehicles, []).map((vehicle) => normalizeVehicle(vehicle, true));
  rebuildVehicleState();
  applySavedTheme();
  hydrateFilters();
  populateFilterOptions();
  syncFilterControls();
  syncTypeButtons();
  bindEvents();
  setupInfiniteScroll();
  syncInstallButton();
  seedAiMessages();
  renderAll();
  registerServiceWorker();
  handleHashState();
}

function bindEvents() {
  refs.themeToggle.addEventListener("click", toggleTheme);
  refs.addVehicleBtn.addEventListener("click", () => openOverlay("garage"));
  refs.openGarageBtn.addEventListener("click", () => openOverlay("garage"));
  refs.installBtn.addEventListener("click", handleInstallClick);
  refs.searchInput.addEventListener("input", () => {
    state.filters.search = refs.searchInput.value.trim();
    resetGalleryWindow();
  });
  refs.brandSel.addEventListener("change", () => {
    state.filters.brand = refs.brandSel.value;
    resetGalleryWindow();
  });
  refs.engineSel.addEventListener("change", () => {
    state.filters.engine = refs.engineSel.value;
    resetGalleryWindow();
  });
  refs.yearFromSel.addEventListener("change", () => {
    state.filters.yearFrom = refs.yearFromSel.value;
    if (state.filters.yearTo && Number(state.filters.yearFrom) > Number(state.filters.yearTo)) {
      state.filters.yearTo = state.filters.yearFrom;
      refs.yearToSel.value = state.filters.yearTo;
    }
    resetGalleryWindow();
  });
  refs.yearToSel.addEventListener("change", () => {
    state.filters.yearTo = refs.yearToSel.value;
    if (state.filters.yearFrom && Number(state.filters.yearTo) < Number(state.filters.yearFrom)) {
      state.filters.yearFrom = state.filters.yearTo;
      refs.yearFromSel.value = state.filters.yearFrom;
    }
    resetGalleryWindow();
  });
  refs.sortSel.addEventListener("change", () => {
    state.filters.sort = refs.sortSel.value;
    resetGalleryWindow();
  });
  refs.priceMin.addEventListener("input", handlePriceInput);
  refs.priceMax.addEventListener("input", handlePriceInput);
  refs.typeFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    state.activeType = button.dataset.filter;
    syncTypeButtons();
    resetGalleryWindow();
  });
  refs.mainTabs.forEach((button) => {
    button.addEventListener("click", () => {
      state.activeTab = button.dataset.tab;
      syncMainTabs();
      renderAll();
    });
  });
  refs.lbControls.forEach((button) => {
    button.addEventListener("click", () => {
      state.lbMode = button.dataset.lbMode;
      syncLbButtons();
      renderLeaderboard();
    });
  });
  refs.clearFiltersBtn.addEventListener("click", resetFilters);
  refs.compareToggle.addEventListener("click", toggleCompareMode);
  refs.compareNowBtn.addEventListener("click", openCompareModal);
  refs.clearCompareBtn.addEventListener("click", clearCompare);
  refs.grid.addEventListener("click", handleGridClick);
  refs.compareSlots.addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-compare-remove]");
    if (!removeButton) return;
    toggleCompare(removeButton.dataset.compareRemove);
  });
  refs.lbList.addEventListener("click", (event) => {
    const openButton = event.target.closest("[data-open]");
    if (openButton) openVehicleModal(openButton.dataset.open);
  });
  refs.vehicleContent.addEventListener("click", handleVehicleModalClick);
  refs.vehicleContent.addEventListener("submit", handleVehicleModalSubmit);
  refs.compareContent.addEventListener("click", handleCompareModalClick);
  refs.garageForm.addEventListener("submit", handleGarageSubmit);
  refs.aiFab.addEventListener("click", () => openOverlay("ai"));
  refs.aiForm.addEventListener("submit", handleAiSubmit);
  refs.aiChat.addEventListener("click", handleAiChatClick);
  refs.closeButtons.forEach((button) => {
    button.addEventListener("click", () => closeOverlay(button.dataset.close));
  });
  refs.overlays.forEach((overlay) => {
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) closeOverlay(overlay.id);
    });
  });
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    state.installPrompt = event;
    syncInstallButton();
    showToast("Co the cai dat", "Dung nut Cai dat app de them app ra man hinh chinh.");
  });
  window.addEventListener("appinstalled", () => {
    state.installPrompt = null;
    syncInstallButton();
    showToast("Da cai dat", "AutoMoto da duoc them vao man hinh chinh.");
  });
  window.addEventListener("hashchange", handleHashState);
}

function rebuildVehicleState() {
  state.allVehicles = [...state.baseVehicles, ...state.userVehicles]
    .sort((a, b) => sortNumbers(b.year, a.year) || sortStrings(a.brand, b.brand) || sortStrings(a.name, b.name));
  const maxPrice = Math.max(...state.allVehicles.map((vehicle) => vehicle.priceUsd || 0), DEFAULT_PLACEHOLDER_PRICE_MAX);
  state.priceBounds = { min: 0, max: roundUpPrice(maxPrice) };
}

function hydrateFilters() {
  const saved = state.filters || {};
  state.filters = {
    search: saved.search || "",
    brand: saved.brand || "",
    engine: saved.engine || "",
    yearFrom: saved.yearFrom || "",
    yearTo: saved.yearTo || "",
    sort: saved.sort || "hot",
    priceMin: Number.isFinite(Number(saved.priceMin)) ? Number(saved.priceMin) : state.priceBounds.min,
    priceMax: Number.isFinite(Number(saved.priceMax)) ? Number(saved.priceMax) : state.priceBounds.max
  };
  state.filters.priceMin = clamp(state.filters.priceMin, state.priceBounds.min, state.priceBounds.max);
  state.filters.priceMax = clamp(state.filters.priceMax, state.priceBounds.min, state.priceBounds.max);
  if (state.filters.priceMin > state.filters.priceMax) {
    state.filters.priceMin = state.priceBounds.min;
    state.filters.priceMax = state.priceBounds.max;
  }
}

function populateFilterOptions() {
  const currentBrand = state.filters.brand;
  const currentYearFrom = state.filters.yearFrom;
  const currentYearTo = state.filters.yearTo;
  const relevantVehicles = state.allVehicles.filter((vehicle) => state.activeType === "all" || (state.activeType === "mine" ? vehicle.isMine : vehicle.type === state.activeType));
  const brands = [...new Set(relevantVehicles.map((vehicle) => vehicle.brand))].sort(sortStrings);
  refs.brandSel.innerHTML = ['<option value="">Tat ca</option>']
    .concat(brands.map((brand) => `<option value="${escapeAttr(brand)}">${escapeHtml(brand)}</option>`))
    .join("");
  refs.brandSel.value = brands.includes(currentBrand) ? currentBrand : "";
  state.filters.brand = refs.brandSel.value;

  const years = [...new Set(state.allVehicles.map((vehicle) => vehicle.year))].sort((a, b) => b - a);
  const yearOptions = ['<option value="">Tat ca</option>']
    .concat(years.map((year) => `<option value="${year}">${year}</option>`))
    .join("");
  refs.yearFromSel.innerHTML = yearOptions;
  refs.yearToSel.innerHTML = yearOptions;
  refs.yearFromSel.value = years.includes(Number(currentYearFrom)) ? currentYearFrom : "";
  refs.yearToSel.value = years.includes(Number(currentYearTo)) ? currentYearTo : "";
  state.filters.yearFrom = refs.yearFromSel.value;
  state.filters.yearTo = refs.yearToSel.value;
}

function syncFilterControls() {
  refs.searchInput.value = state.filters.search;
  refs.brandSel.value = state.filters.brand;
  refs.engineSel.value = state.filters.engine;
  refs.yearFromSel.value = state.filters.yearFrom;
  refs.yearToSel.value = state.filters.yearTo;
  refs.sortSel.value = state.filters.sort;
  refs.priceMin.min = String(state.priceBounds.min);
  refs.priceMin.max = String(state.priceBounds.max);
  refs.priceMax.min = String(state.priceBounds.min);
  refs.priceMax.max = String(state.priceBounds.max);
  refs.priceMin.step = String(computeSliderStep(state.priceBounds.max));
  refs.priceMax.step = String(computeSliderStep(state.priceBounds.max));
  refs.priceMin.value = String(state.filters.priceMin);
  refs.priceMax.value = String(state.filters.priceMax);
  updatePriceRangeLabel();
}

function resetGalleryWindow() {
  saveJson(STORAGE.filters, state.filters);
  populateFilterOptions();
  syncFilterControls();
  state.visibleCount = PAGE_SIZE;
  renderAll();
}

function updatePriceRangeLabel() {
  refs.priceRangeLabel.textContent = `${formatUsd(state.filters.priceMin)} - ${formatUsd(state.filters.priceMax)}`;
}

function handlePriceInput(event) {
  const isMin = event.target.id === "priceMin";
  const minValue = Number(refs.priceMin.value);
  const maxValue = Number(refs.priceMax.value);
  if (isMin && minValue > maxValue) refs.priceMin.value = String(maxValue);
  if (!isMin && maxValue < minValue) refs.priceMax.value = String(minValue);
  state.filters.priceMin = Number(refs.priceMin.value);
  state.filters.priceMax = Number(refs.priceMax.value);
  updatePriceRangeLabel();
  saveJson(STORAGE.filters, state.filters);
  state.visibleCount = PAGE_SIZE;
  renderAll();
}

function resetFilters() {
  state.activeType = "all";
  syncTypeButtons();
  state.filters = {
    search: "",
    brand: "",
    engine: "",
    yearFrom: "",
    yearTo: "",
    sort: "hot",
    priceMin: state.priceBounds.min,
    priceMax: state.priceBounds.max
  };
  saveJson(STORAGE.filters, state.filters);
  populateFilterOptions();
  syncFilterControls();
  state.visibleCount = PAGE_SIZE;
  renderAll();
}

function syncTypeButtons() {
  [...refs.typeFilters.querySelectorAll("[data-filter]")].forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === state.activeType);
  });
}

function syncMainTabs() {
  refs.mainTabs.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === state.activeTab);
  });
  refs.tabGallery.classList.toggle("hidden", state.activeTab !== "gallery");
  refs.tabLeaderboard.classList.toggle("hidden", state.activeTab !== "leaderboard");
}

function syncLbButtons() {
  refs.lbControls.forEach((button) => {
    button.classList.toggle("active", button.dataset.lbMode === state.lbMode);
  });
}

function renderAll() {
  syncMainTabs();
  syncLbButtons();
  renderHero();
  renderGallery();
  renderLeaderboard();
  renderCompareDock();
  renderAiChat();
}

function renderHero() {
  refs.heroCount.textContent = state.allVehicles.length.toLocaleString("en-US");
  refs.heroFavCount.textContent = state.favorites.size.toLocaleString("en-US");
  refs.heroGarageCount.textContent = state.userVehicles.length.toLocaleString("en-US");
  refs.compareToggle.textContent = state.compareMode ? "Dang chon compare" : "Chon de compare";
  refs.compareToggle.classList.toggle("active", state.compareMode);
}

function renderGallery() {
  const allMatches = getFilteredVehicles();
  const visibleItems = allMatches.slice(0, state.visibleCount);
  refs.countD.textContent = allMatches.length.toLocaleString("en-US");
  refs.carD.textContent = allMatches.filter((vehicle) => vehicle.type === "car").length.toLocaleString("en-US");
  refs.bikeD.textContent = allMatches.filter((vehicle) => vehicle.type === "bike").length.toLocaleString("en-US");
  refs.vnD.textContent = allMatches.filter((vehicle) => vehicle.type === "vn").length.toLocaleString("en-US");
  refs.mineD.textContent = allMatches.filter((vehicle) => vehicle.isMine).length.toLocaleString("en-US");
  refs.favD.textContent = allMatches.filter((vehicle) => state.favorites.has(String(vehicle.id))).length.toLocaleString("en-US");
  if (!allMatches.length) {
    refs.grid.innerHTML = '<div class="empty-state"><strong>Khong tim thay xe phu hop.</strong><div>Thu doi tu khoa, bo bot filter hoac them xe cua ban vao Garage.</div></div>';
    refs.sentinel.classList.add("hidden");
    return;
  }
  refs.grid.innerHTML = visibleItems.map(renderVehicleCard).join("");
  refs.sentinel.classList.toggle("hidden", visibleItems.length >= allMatches.length);
}

function renderVehicleCard(vehicle) {
  const isFav = state.favorites.has(String(vehicle.id));
  const inCompare = state.compareIds.includes(String(vehicle.id));
  const promo = getPromoBadge(vehicle);
  const hotValue = Math.min(100, Math.round(normalizeHotScore(vehicle) * 100));
  return `
    <article class="vehicle-card" data-id="${escapeAttr(vehicle.id)}" data-type="${escapeAttr(vehicle.type)}">
      <div class="card-media">
        <div class="card-topline">
          <div class="badge-row">
            <span class="type-pill">${escapeHtml(typeLabel(vehicle))}</span>
            ${promo ? `<span class="${promo.className}">${escapeHtml(promo.label)}</span>` : ""}
          </div>
          <button class="mini-icon-btn ${isFav ? "active" : ""}" type="button" data-fav="${escapeAttr(vehicle.id)}" aria-label="Favorite">${isFav ? "❤" : "♡"}</button>
        </div>
        ${renderMedia(vehicle)}
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span>${escapeHtml(vehicle.brand)} / ${vehicle.year}</span>
          <span>${escapeHtml(vehicle.cat)}</span>
        </div>
        <div>
          <div class="card-title">${escapeHtml(vehicle.name)}</div>
          <div class="card-subtitle">${escapeHtml(vehicle.engineType)} / ${escapeHtml(vehicle.engineLabel)}</div>
        </div>
        <div class="metric-grid">
          ${metricChip("Gia", formatUsd(vehicle.priceUsd))}
          ${metricChip("Cong suat", formatPower(vehicle))}
          ${metricChip("Toc do", formatTopSpeed(vehicle))}
        </div>
        <div class="hot-strip">
          <div class="hot-head">
            <span>Do hot</span>
            <strong>${hotValue}%</strong>
          </div>
          <div class="bar"><span style="width:${hotValue}%"></span></div>
        </div>
        <div class="card-actions">
          <button class="chip-btn" type="button" data-open="${escapeAttr(vehicle.id)}">Xem chi tiet</button>
          <button class="ghost-btn" type="button" data-compare="${escapeAttr(vehicle.id)}">${inCompare ? "Da chon" : "Compare"}</button>
        </div>
      </div>
    </article>
  `;
}

function renderLeaderboard() {
  if (state.activeTab !== "leaderboard") return;
  let list = [...state.allVehicles];
  let scoreFn = (vehicle) => vehicle.powerHp;
  let formatFn = (vehicle) => formatPower(vehicle);
  if (state.lbMode === "speed") {
    scoreFn = (vehicle) => vehicle.topSpeedKph;
    formatFn = (vehicle) => formatTopSpeed(vehicle);
    list.sort((a, b) => sortNumbers(b.topSpeedKph, a.topSpeedKph));
  } else if (state.lbMode === "accel") {
    scoreFn = (vehicle) => vehicle.zeroSixty;
    formatFn = (vehicle) => formatAccel(vehicle.zeroSixty);
    list.sort((a, b) => sortNumbers(a.zeroSixty, b.zeroSixty));
  } else if (state.lbMode === "light") {
    scoreFn = (vehicle) => vehicle.weightKg;
    formatFn = (vehicle) => formatWeight(vehicle);
    list.sort((a, b) => sortNumbers(a.weightKg, b.weightKg));
  } else if (state.lbMode === "hot") {
    scoreFn = (vehicle) => hotScore(vehicle);
    formatFn = (vehicle) => `${Math.round(normalizeHotScore(vehicle) * 100)}%`;
    list.sort((a, b) => sortNumbers(hotScore(b), hotScore(a)));
  } else {
    list.sort((a, b) => sortNumbers(b.powerHp, a.powerHp));
  }
  const sliced = list.slice(0, 15);
  const values = sliced.map(scoreFn);
  const max = Math.max(...values, 1);
  const min = Math.min(...values, 0);
  refs.lbList.innerHTML = sliced.map((vehicle, index) => {
    const score = scoreFn(vehicle);
    const ratio = state.lbMode === "accel" || state.lbMode === "light" ? 1 - (score - min) / Math.max(max - min, 1) : score / max;
    const rankClass = index === 0 ? "gold" : index === 1 ? "silver" : index === 2 ? "bronze" : "";
    return `
      <button class="lb-row" type="button" data-open="${escapeAttr(vehicle.id)}">
        <div class="lb-rank ${rankClass}">${index + 1}</div>
        <div>
          <div class="lb-name">${escapeHtml(vehicle.brand)} ${escapeHtml(vehicle.name)}</div>
          <div class="lb-sub">${escapeHtml(vehicle.cat)} / ${vehicle.year}</div>
        </div>
        <div class="lb-bar-wrap"><div class="lb-bar" style="width:${Math.round(clamp(ratio, 0, 1) * 100)}%"></div></div>
        <div class="lb-val">${escapeHtml(formatFn(vehicle))}</div>
      </button>
    `;
  }).join("");
}

function renderCompareDock() {
  const vehicles = state.compareIds.map(findVehicleById).filter(Boolean);
  const shouldShow = state.compareMode || vehicles.length > 0;
  refs.compareDock.classList.toggle("show", shouldShow);
  refs.compareSlots.innerHTML = Array.from({ length: 3 }, (_, index) => {
    const vehicle = vehicles[index];
    if (!vehicle) return '<div class="compare-slot">+ Them xe vao compare</div>';
    return `
      <div class="compare-slot filled">
        <strong>${escapeHtml(vehicle.brand)} ${escapeHtml(vehicle.name)}</strong>
        <span>${formatPower(vehicle)} / ${formatUsd(vehicle.priceUsd)}</span>
        <button class="ghost-btn" type="button" data-compare-remove="${escapeAttr(vehicle.id)}">Bo xe nay</button>
      </div>
    `;
  }).join("");
  refs.compareNowBtn.disabled = vehicles.length < 2;
}

function setupInfiniteScroll() {
  if (!("IntersectionObserver" in window)) return;
  state.observer = new IntersectionObserver((entries) => {
    if (!entries.some((entry) => entry.isIntersecting)) return;
    const list = getFilteredVehicles();
    if (state.visibleCount >= list.length) return;
    state.visibleCount += PAGE_SIZE;
    renderGallery();
  }, { rootMargin: "240px 0px" });
  state.observer.observe(refs.sentinel);
}

function getFilteredVehicles() {
  const query = normalizeText(state.filters.search);
  let list = state.allVehicles.filter((vehicle) => {
    if (state.activeType === "mine" && !vehicle.isMine) return false;
    if (state.activeType !== "all" && state.activeType !== "mine" && vehicle.type !== state.activeType) return false;
    if (state.filters.brand && vehicle.brand !== state.filters.brand) return false;
    if (state.filters.engine && vehicle.engineType !== state.filters.engine) return false;
    if (state.filters.yearFrom && vehicle.year < Number(state.filters.yearFrom)) return false;
    if (state.filters.yearTo && vehicle.year > Number(state.filters.yearTo)) return false;
    if (vehicle.priceUsd < state.filters.priceMin || vehicle.priceUsd > state.filters.priceMax) return false;
    if (query) {
      const haystack = normalizeText(`${vehicle.name} ${vehicle.brand} ${vehicle.cat} ${typeLabel(vehicle)} ${vehicle.engineType}`);
      if (!haystack.includes(query)) return false;
    }
    return true;
  });
  if (state.filters.sort === "power") list.sort((a, b) => sortNumbers(b.powerHp, a.powerHp));
  else if (state.filters.sort === "speed") list.sort((a, b) => sortNumbers(b.topSpeedKph, a.topSpeedKph));
  else if (state.filters.sort === "price_asc") list.sort((a, b) => sortNumbers(a.priceUsd, b.priceUsd));
  else if (state.filters.sort === "price_desc") list.sort((a, b) => sortNumbers(b.priceUsd, a.priceUsd));
  else if (state.filters.sort === "hot") list.sort((a, b) => sortNumbers(hotScore(b), hotScore(a)) || sortNumbers(b.year, a.year));
  else list.sort((a, b) => sortNumbers(b.year, a.year));
  return list;
}

function openVehicleModal(vehicleId, preferredTab = "specs") {
  const vehicle = findVehicleById(vehicleId);
  if (!vehicle) return;
  state.currentVehicleId = String(vehicle.id);
  state.detailTab = preferredTab;
  incrementHot(vehicle);
  refs.vehicleContent.innerHTML = renderVehicleModal(vehicle);
  openOverlay("vehicle");
  drawVehicleChartIfNeeded(vehicle);
  syncHashForVehicle(vehicle.id);
}

function renderVehicleModal(vehicle) {
  const promo = getPromoBadge(vehicle);
  const isFav = state.favorites.has(String(vehicle.id));
  return `
    <div class="detail-wrap">
      <div class="detail-head">
        <div class="modal-visual">
          <div class="modal-topline">
            <div class="badge-row">
              <span class="type-pill">${escapeHtml(typeLabel(vehicle))}</span>
              ${promo ? `<span class="${promo.className}">${escapeHtml(promo.label)}</span>` : ""}
            </div>
          </div>
          ${renderMedia(vehicle)}
        </div>
        <div class="detail-info">
          <div>
            <p class="eyebrow">${escapeHtml(vehicle.brand)} / ${vehicle.year} / ${escapeHtml(vehicle.cat)}</p>
            <h2 class="detail-title">${escapeHtml(vehicle.name)}</h2>
            <div class="detail-subline">${escapeHtml(vehicle.engineType)} / ${escapeHtml(vehicle.engineLabel)}</div>
            <div class="detail-price">${formatUsd(vehicle.priceUsd)}</div>
          </div>
          <div class="quick-metrics">
            ${metricChip("Cong suat", formatPower(vehicle))}
            ${metricChip("Top speed", formatTopSpeed(vehicle))}
            ${metricChip("Trong luong", formatWeight(vehicle))}
          </div>
          <div class="detail-actions">
            <button class="primary-btn" type="button" data-share-copy="${escapeAttr(vehicle.id)}">Copy link</button>
            <button class="chip-btn" type="button" data-compare="${escapeAttr(vehicle.id)}">${state.compareIds.includes(String(vehicle.id)) ? "Da chon compare" : "Them vao compare"}</button>
            <button class="ghost-btn" type="button" data-fav="${escapeAttr(vehicle.id)}">${isFav ? "Bo favorite" : "Favorite"}</button>
          </div>
        </div>
      </div>
      <div class="detail-tabs">
        ${detailTabButton("specs", "Specs")}
        ${detailTabButton("performance", "Performance")}
        ${detailTabButton("photos", "Real Photos")}
        ${detailTabButton("reviews", "Review")}
        ${detailTabButton("share", "Share")}
        ${detailTabButton("variants", "Variants")}
      </div>
      <div class="detail-content">${renderVehicleTab(vehicle)}</div>
    </div>
  `;
}

function renderVehicleTab(vehicle) {
  if (state.detailTab === "performance") return renderPerformanceTab(vehicle);
  if (state.detailTab === "photos") return renderPhotosTab(vehicle);
  if (state.detailTab === "reviews") return renderReviewsTab(vehicle);
  if (state.detailTab === "share") return renderShareTab(vehicle);
  if (state.detailTab === "variants") return renderVariantsTab(vehicle);
  return renderSpecsTab(vehicle);
}

function renderSpecsTab(vehicle) {
  const rows = [
    ["Gia", formatUsd(vehicle.priceUsd)],
    ["Cong suat", formatPower(vehicle)],
    ["Torque", formatTorque(vehicle)],
    ["Top speed", formatTopSpeed(vehicle)],
    ["0-60", formatAccel(vehicle.zeroSixty)],
    ["Trong luong", formatWeight(vehicle)],
    ["Dong co", vehicle.engineLabel],
    ["Loai dong co", vehicle.engineType]
  ];
  if (vehicle.specs.Drivetrain) rows.push(["Dan dong", vehicle.specs.Drivetrain]);
  if (vehicle.specs.Trans) rows.push(["Hop so", vehicle.specs.Trans]);
  if (vehicle.seatM != null) rows.push(["Chieu cao yen", formatMeters(vehicle.seatM)]);
  if (vehicle.tankL != null) rows.push(["Binh xang", formatLiters(vehicle.tankL)]);
  if (vehicle.rangeKm != null) rows.push(["Tam hoat dong", formatRange(vehicle.rangeKm)]);
  if (vehicle.fuelUseL != null) rows.push(["Tieu hao", formatFuelUse(vehicle.fuelUseL)]);
  if (vehicle.specs.Electronics) rows.push(["Dien tu", vehicle.specs.Electronics]);
  return `<div class="spec-grid">${rows.map(([label, value]) => `<div class="spec-row"><span class="spec-key">${escapeHtml(label)}</span><span class="spec-val">${escapeHtml(value)}</span></div>`).join("")}</div>`;
}

function renderPerformanceTab(vehicle) {
  const metrics = performanceMetrics(vehicle);
  return `
    <div class="performance-grid">
      <div class="chart-wrap"><canvas id="performanceChart" width="360" height="360"></canvas></div>
      <div class="perf-list">
        ${metrics.map((metric) => `<div class="perf-item"><div class="hot-head"><span>${escapeHtml(metric.label)}</span><strong>${escapeHtml(metric.value)}</strong></div><div class="bar"><span style="width:${Math.round(metric.score * 100)}%"></span></div></div>`).join("")}
      </div>
    </div>
  `;
}

function renderPhotosTab(vehicle) {
  const photos = vehicle.photoUrls.length ? vehicle.photoUrls : [vehicle.imageUrl].filter(Boolean);
  if (!photos.length) return '<div class="empty-state"><strong>Chua co anh that.</strong><div>Ban co the them xe cua minh voi nhieu URL anh trong Garage.</div></div>';
  return `<div class="photo-grid">${photos.map((url, index) => `<figure><img src="${escapeAttr(url)}" alt="${escapeAttr(`${vehicle.name} ${index + 1}`)}" loading="lazy" referrerpolicy="no-referrer"><figcaption>${index === 0 ? "Anh chinh" : `Real photo ${index + 1}`}</figcaption></figure>`).join("")}</div>`;
}

function renderReviewsTab(vehicle) {
  const reviews = getReviews(vehicle.id);
  return `
    <div class="review-list">
      ${reviews.length ? reviews.map((review) => `<div class="review-item"><strong>${escapeHtml(review.author || "Ban")}</strong><div>${escapeHtml(review.text)}</div><div class="review-meta">${escapeHtml(formatDateTime(review.ts))}</div></div>`).join("") : '<div class="review-empty">Chua co review local nao. Viet review ngan de luu ngay tren may nay.</div>'}
    </div>
    <form class="review-form" data-review-form="${escapeAttr(vehicle.id)}">
      <textarea name="reviewText" rows="4" maxlength="280" placeholder="Nhan xet ngan ve xe nay..."></textarea>
      <button class="primary-btn" type="submit">Luu review</button>
    </form>
  `;
}

function renderShareTab(vehicle) {
  const link = buildVehicleShareUrl(vehicle.id);
  const qrSrc = `https://quickchart.io/qr?size=260&text=${encodeURIComponent(link)}`;
  return `
    <div class="share-grid">
      <div class="share-card">
        <div class="share-link">
          <label class="field">
            <span>Link chia se</span>
            <input type="text" readonly value="${escapeAttr(link)}">
          </label>
          <div class="share-actions">
            <button class="primary-btn" type="button" data-share-copy="${escapeAttr(vehicle.id)}">Copy link</button>
            <button class="chip-btn" type="button" data-native-share="${escapeAttr(vehicle.id)}">Share</button>
          </div>
          <div class="review-meta">Nguoi nhan mo link nay se nhay vao modal xe neu cung URL app.</div>
        </div>
      </div>
      <div class="share-qr">
        <div class="qr-frame">${navigator.onLine ? `<img src="${escapeAttr(qrSrc)}" alt="QR ${escapeAttr(vehicle.name)}" loading="lazy">` : '<div class="review-empty">Dang offline nen khong tai QR online duoc. Ban van copy link binh thuong.</div>'}</div>
      </div>
    </div>
  `;
}

function renderVariantsTab(vehicle) {
  if (!vehicle.variants.length) return '<div class="empty-state"><strong>Khong co variants.</strong><div>Xe nay hien dang dung 1 cau hinh co ban.</div></div>';
  return `<div class="variant-list">${vehicle.variants.map((variant) => `<div class="variant-item"><div><strong>${escapeHtml(variant.n)}</strong><div>${escapeHtml(vehicle.brand)} ${escapeHtml(vehicle.name)}</div></div><div>${variant.priceUsd != null ? formatUsd(variant.priceUsd) : escapeHtml(variant.p)}</div></div>`).join("")}</div>`;
}

function openCompareModal() {
  const vehicles = state.compareIds.map(findVehicleById).filter(Boolean);
  if (vehicles.length < 2) {
    showToast("Can them xe", "Hay chon it nhat 2 xe de compare.");
    return;
  }
  refs.compareContent.innerHTML = renderCompareModal(vehicles);
  openOverlay("compare");
}

function renderCompareModal(vehicles) {
  const rows = getComparisonRows(vehicles);
  return `
    <div class="compare-head">
      <div><p class="eyebrow">Compare</p><h2>${escapeHtml(vehicles.map((vehicle) => vehicle.name).join(" vs "))}</h2></div>
      <div class="compare-tools">
        <button class="primary-btn" type="button" data-export-json="1">Xuat JSON</button>
        <button class="chip-btn" type="button" data-print-compare="1">In / PDF</button>
      </div>
    </div>
    <div class="compare-table-wrap">
      <table class="compare-table">
        <thead><tr><th>Thong so</th>${vehicles.map((vehicle) => `<th>${escapeHtml(vehicle.brand)}<br><strong>${escapeHtml(vehicle.name)}</strong></th>`).join("")}</tr></thead>
        <tbody>${rows.map(([label, getter]) => `<tr><td>${escapeHtml(label)}</td>${vehicles.map((vehicle) => `<td>${escapeHtml(getter(vehicle))}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    </div>
  `;
}

function renderAiChat() {
  refs.aiChat.innerHTML = state.aiMessages.map((message) => `<div class="ai-bubble ${message.role}"><span class="ai-role">${message.role === "user" ? "Ban" : "AI mini"}</span><div>${message.html}</div></div>`).join("");
  refs.aiChat.scrollTop = refs.aiChat.scrollHeight;
}

function seedAiMessages() {
  state.aiMessages = [{
    role: "assistant",
    html: '<div class="ai-help">Thu hoi AI mini du lieu local, khong goi API.</div><div class="ai-suggestion"><div class="ai-result"><strong>Thu cau nay</strong><div>Xe nao manh nhat duoi 50 trieu?</div></div><div class="ai-result"><strong>Hoac</strong><div>So sanh Exciter vs Winner X</div></div></div>'
  }];
}

function handleAiSubmit(event) {
  event.preventDefault();
  const text = refs.aiInput.value.trim();
  if (!text) return;
  state.aiMessages.push({ role: "user", html: escapeHtml(text) });
  state.aiMessages.push({ role: "assistant", html: answerAi(text) });
  refs.aiInput.value = "";
  renderAiChat();
}

function handleAiChatClick(event) {
  const openButton = event.target.closest("[data-ai-open]");
  if (openButton) {
    openVehicleModal(openButton.dataset.aiOpen);
    return;
  }
  const compareButton = event.target.closest("[data-ai-compare]");
  if (compareButton) {
    const ids = compareButton.dataset.aiCompare.split(",");
    state.compareIds = ids.filter(Boolean).slice(0, 3);
    saveJson(STORAGE.compare, state.compareIds);
    state.compareMode = true;
    renderCompareDock();
    openCompareModal();
  }
}

function answerAi(rawQuery) {
  const query = normalizeText(rawQuery);
  const allVehicles = [...state.allVehicles];
  if (/so sanh|compare|vs/.test(query)) {
    const matches = allVehicles.filter((vehicle) => query.includes(normalizeText(vehicle.name)) || query.includes(normalizeText(`${vehicle.brand} ${vehicle.name}`)));
    if (matches.length >= 2) return buildCompareAnswer(matches[0], matches[1]);
  }
  if ((/manh nhat|cong suat cao nhat/.test(query)) && /(duoi|under|nho hon)/.test(query)) {
    const budget = parseBudgetFromQuery(query);
    if (budget != null) {
      const result = allVehicles.filter((vehicle) => vehicle.priceUsd <= budget).sort((a, b) => sortNumbers(b.powerHp, a.powerHp))[0];
      if (result) return buildSingleVehicleAnswer(`Mạnh nhất dưới ${formatUsd(budget)}`, result, `Cong suat ${formatPower(result)}, gia ${formatUsd(result.priceUsd)}.`);
      return `<div>Khong co xe nao duoi ${formatUsd(budget)} trong du lieu hien tai.</div>`;
    }
  }
  if (/nhanh nhat/.test(query)) {
    const result = [...allVehicles].sort((a, b) => sortNumbers(b.topSpeedKph, a.topSpeedKph))[0];
    return buildSingleVehicleAnswer("Xe nhanh nhat", result, `Top speed ${formatTopSpeed(result)} va cong suat ${formatPower(result)}.`);
  }
  if (/re nhat|gia thap nhat/.test(query)) {
    const result = [...allVehicles].sort((a, b) => sortNumbers(a.priceUsd, b.priceUsd))[0];
    return buildSingleVehicleAnswer("Xe re nhat", result, `Gia ${formatUsd(result.priceUsd)} va phu hop de tham khao nhom gia re.`);
  }
  if (/hot nhat|noi bat nhat/.test(query)) {
    const result = [...allVehicles].sort((a, b) => sortNumbers(hotScore(b), hotScore(a)))[0];
    return buildSingleVehicleAnswer("Xe dang hot", result, `Do hot ${Math.round(normalizeHotScore(result) * 100)}% dua tren favorite va luot mo chi tiet.`);
  }
  const matches = allVehicles.filter((vehicle) => normalizeText(`${vehicle.brand} ${vehicle.name} ${vehicle.cat}`).includes(query)).slice(0, 3);
  if (matches.length) return `<div>Minh tim thay ${matches.length} xe lien quan:</div><div class="ai-suggestion">${matches.map((vehicle) => aiResultCard(vehicle)).join("")}</div>`;
  return '<div>AI mini hien tra loi tot nhat voi cau hoi theo mau:</div><div class="ai-suggestion"><div class="ai-result"><strong>Tim theo gia</strong><div>Xe nao manh nhat duoi 50 trieu?</div></div><div class="ai-result"><strong>So sanh 2 xe</strong><div>So sanh Exciter vs Winner X</div></div><div class="ai-result"><strong>Tim nhanh</strong><div>Xe nhanh nhat / Xe re nhat / Xe hot nhat</div></div></div>';
}

function buildSingleVehicleAnswer(title, vehicle, note) {
  return `<div>${escapeHtml(title)}:</div>${aiResultCard(vehicle, note)}`;
}

function buildCompareAnswer(first, second) {
  const faster = first.topSpeedKph > second.topSpeedKph ? first : second;
  const stronger = first.powerHp > second.powerHp ? first : second;
  const cheaper = first.priceUsd < second.priceUsd ? first : second;
  return `
    <div class="ai-suggestion">
      <div class="ai-result">
        <strong>${escapeHtml(first.name)} vs ${escapeHtml(second.name)}</strong>
        <div>Mạnh hơn: ${escapeHtml(stronger.name)} (${formatPower(stronger)})</div>
        <div>Nhanh hơn: ${escapeHtml(faster.name)} (${formatTopSpeed(faster)})</div>
        <div>Rẻ hơn: ${escapeHtml(cheaper.name)} (${formatUsd(cheaper.priceUsd)})</div>
        <div class="ai-inline-actions">
          <button class="chip-btn" type="button" data-ai-open="${escapeAttr(first.id)}">Xem ${escapeHtml(first.name)}</button>
          <button class="chip-btn" type="button" data-ai-open="${escapeAttr(second.id)}">Xem ${escapeHtml(second.name)}</button>
          <button class="primary-btn" type="button" data-ai-compare="${escapeAttr(first.id)},${escapeAttr(second.id)}">Mo compare</button>
        </div>
      </div>
    </div>
  `;
}

function aiResultCard(vehicle, note = "") {
  return `<div class="ai-result"><strong>${escapeHtml(vehicle.brand)} ${escapeHtml(vehicle.name)}</strong><div>${formatUsd(vehicle.priceUsd)} / ${formatPower(vehicle)} / ${formatTopSpeed(vehicle)}</div>${note ? `<div>${escapeHtml(note)}</div>` : ""}<div class="ai-inline-actions"><button class="chip-btn" type="button" data-ai-open="${escapeAttr(vehicle.id)}">Xem chi tiet</button></div></div>`;
}

function handleGridClick(event) {
  const favButton = event.target.closest("[data-fav]");
  if (favButton) return void toggleFavorite(favButton.dataset.fav);
  const compareButton = event.target.closest("[data-compare]");
  if (compareButton) return void toggleCompare(compareButton.dataset.compare);
  const openButton = event.target.closest("[data-open]");
  if (openButton) openVehicleModal(openButton.dataset.open);
}

function handleVehicleModalClick(event) {
  const tabButton = event.target.closest("[data-detail-tab]");
  if (tabButton && state.currentVehicleId) {
    state.detailTab = tabButton.dataset.detailTab;
    const vehicle = findVehicleById(state.currentVehicleId);
    refs.vehicleContent.innerHTML = renderVehicleModal(vehicle);
    drawVehicleChartIfNeeded(vehicle);
    return;
  }
  const favButton = event.target.closest("[data-fav]");
  if (favButton) return void toggleFavorite(favButton.dataset.fav, true);
  const compareButton = event.target.closest("[data-compare]");
  if (compareButton) return void toggleCompare(compareButton.dataset.compare, true);
  const shareCopy = event.target.closest("[data-share-copy]");
  if (shareCopy) return void copyVehicleLink(shareCopy.dataset.shareCopy);
  const nativeShare = event.target.closest("[data-native-share]");
  if (nativeShare) nativeShareVehicle(nativeShare.dataset.nativeShare);
}

function handleVehicleModalSubmit(event) {
  const form = event.target.closest("[data-review-form]");
  if (!form) return;
  event.preventDefault();
  const vehicleId = form.dataset.reviewForm;
  const textarea = form.querySelector("textarea[name='reviewText']");
  const text = textarea.value.trim();
  if (!text) return;
  saveReview(vehicleId, text);
  const vehicle = findVehicleById(vehicleId);
  refs.vehicleContent.innerHTML = renderVehicleModal(vehicle);
  showToast("Da luu review", "Review duoc luu local tren trinh duyet nay.");
}

function handleCompareModalClick(event) {
  if (event.target.closest("[data-export-json]")) return void exportCompareJson();
  if (event.target.closest("[data-print-compare]")) window.print();
}

function handleGarageSubmit(event) {
  event.preventDefault();
  const formData = new FormData(refs.garageForm);
  const imageUrl = String(formData.get("imageUrl") || "").trim();
  const photoUrls = String(formData.get("photoUrls") || "").split(",").map((item) => item.trim()).filter(Boolean);
  const type = String(formData.get("type") || "car");
  const powerHp = Number(formData.get("powerHp") || 0);
  const topSpeedKph = Number(formData.get("topSpeedKph") || defaultTopSpeed(powerHp, type));
  const priceUsd = Number(formData.get("priceUsd") || 0);
  const year = Number(formData.get("year") || new Date().getFullYear());
  const engineType = String(formData.get("engineType") || "NA");
  const torqueNm = Math.max(10, Number((powerHp * (type === "car" ? 1.12 : 0.92)).toFixed(1)));
  const newVehicle = normalizeVehicle({
    id: `mine-${Date.now()}`,
    type,
    brand: String(formData.get("brand") || "My Brand").trim(),
    name: String(formData.get("name") || "My Vehicle").trim(),
    year,
    price: priceUsd,
    priceUsd,
    priceStr: formatUsd(priceUsd),
    cat: type === "car" ? "My Garage Car" : type === "bike" ? "My Garage Bike" : "My Garage VN",
    power: powerHp,
    powerHp,
    torque: torqueNm,
    torqueNm,
    topSpeed: topSpeedKph,
    topSpeedKph,
    zeroSixty: estimateAcceleration(powerHp, type),
    weightKg: defaultWeight(type),
    weightLb: defaultWeight(type) / LB_TO_KG,
    engineType,
    imageUrl,
    photoUrls,
    badgeLabel: "New 2025",
    isMine: true,
    specs: {
      Engine: `${type === "car" ? "Owner build" : "Owner bike"} ${engineType}`,
      Power: `${powerHp} HP`,
      Torque: `${torqueNm} Nm`,
      "Top Speed": `${topSpeedKph} km/h`,
      Weight: `${defaultWeight(type)} kg`
    },
    variants: [{ n: "Owner spec", p: formatUsd(priceUsd) }],
    col: typeColor(type)
  }, true);
  state.userVehicles.unshift(newVehicle);
  saveJson(STORAGE.userVehicles, state.userVehicles);
  rebuildVehicleState();
  populateFilterOptions();
  syncFilterControls();
  refs.garageForm.reset();
  closeOverlay("garageModalOverlay");
  state.activeType = "mine";
  syncTypeButtons();
  state.visibleCount = PAGE_SIZE;
  renderAll();
  showToast("Da them xe", `${newVehicle.name} da vao Gallery va compare ngay duoc.`);
}

function getComparisonRows(list) {
  const rows = [
    ["Gia", (vehicle) => formatUsd(vehicle.priceUsd)],
    ["Loai", (vehicle) => vehicle.cat],
    ["Cong suat", (vehicle) => formatPower(vehicle)],
    ["Torque", (vehicle) => formatTorque(vehicle)],
    ["Top speed", (vehicle) => formatTopSpeed(vehicle)],
    ["0-60", (vehicle) => formatAccel(vehicle.zeroSixty)],
    ["Trong luong", (vehicle) => formatWeight(vehicle)],
    ["Dong co", (vehicle) => vehicle.engineLabel],
    ["Loai dong co", (vehicle) => vehicle.engineType]
  ];
  if (list.some((vehicle) => vehicle.seatM != null)) rows.push(["Chieu cao yen", (vehicle) => vehicle.seatM != null ? formatMeters(vehicle.seatM) : "-"]);
  if (list.some((vehicle) => vehicle.tankL != null)) rows.push(["Binh xang", (vehicle) => vehicle.tankL != null ? formatLiters(vehicle.tankL) : "-"]);
  if (list.some((vehicle) => vehicle.rangeKm != null)) rows.push(["Tam hoat dong", (vehicle) => vehicle.rangeKm != null ? formatRange(vehicle.rangeKm) : "-"]);
  if (list.some((vehicle) => vehicle.fuelUseL != null)) rows.push(["Tieu hao", (vehicle) => vehicle.fuelUseL != null ? formatFuelUse(vehicle.fuelUseL) : "-"]);
  if (list.some((vehicle) => vehicle.specs.Drivetrain)) rows.push(["Dan dong", (vehicle) => vehicle.specs.Drivetrain || "-"]);
  if (list.some((vehicle) => vehicle.specs.Trans)) rows.push(["Hop so", (vehicle) => vehicle.specs.Trans || "-"]);
  return rows;
}

function exportCompareJson() {
  const vehicles = state.compareIds.map(findVehicleById).filter(Boolean);
  const payload = vehicles.map((vehicle) => ({
    id: vehicle.id,
    name: vehicle.name,
    brand: vehicle.brand,
    year: vehicle.year,
    type: vehicle.type,
    category: vehicle.cat,
    priceUsd: vehicle.priceUsd,
    powerHp: vehicle.powerHp,
    torqueNm: vehicle.torqueNm,
    topSpeedKph: vehicle.topSpeedKph,
    zeroSixty: vehicle.zeroSixty,
    weightKg: vehicle.weightKg,
    engineType: vehicle.engineType
  }));
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "automoto-compare.json";
  link.click();
  URL.revokeObjectURL(url);
}

function drawVehicleChartIfNeeded(vehicle) {
  if (state.detailTab !== "performance") return;
  requestAnimationFrame(() => drawRadar(document.getElementById("performanceChart"), vehicle));
}

function drawRadar(canvas, vehicle) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width, height) / 2 - 34;
  const accent = vehicle.type === "car" ? "#3ba7ff" : vehicle.type === "bike" ? "#ff9b3d" : "#29d37b";
  const metrics = performanceMetrics(vehicle);
  const count = metrics.length;
  ctx.clearRect(0, 0, width, height);
  for (let ring = 1; ring <= 4; ring += 1) {
    ctx.beginPath();
    for (let index = 0; index < count; index += 1) {
      const angle = (-Math.PI / 2) + ((Math.PI * 2) / count) * index;
      const ringRadius = (radius / 4) * ring;
      const x = centerX + Math.cos(angle) * ringRadius;
      const y = centerY + Math.sin(angle) * ringRadius;
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = "rgba(255,255,255,0.12)";
    ctx.lineWidth = 1;
    ctx.stroke();
  }
  metrics.forEach((metric, index) => {
    const angle = (-Math.PI / 2) + ((Math.PI * 2) / count) * index;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + Math.cos(angle) * radius, centerY + Math.sin(angle) * radius);
    ctx.strokeStyle = "rgba(255,255,255,0.12)";
    ctx.stroke();
  });
  ctx.beginPath();
  metrics.forEach((metric, index) => {
    const angle = (-Math.PI / 2) + ((Math.PI * 2) / count) * index;
    const scoreRadius = radius * metric.score;
    const x = centerX + Math.cos(angle) * scoreRadius;
    const y = centerY + Math.sin(angle) * scoreRadius;
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fillStyle = `${accent}33`;
  ctx.fill();
  ctx.strokeStyle = accent;
  ctx.lineWidth = 2;
  ctx.stroke();
  metrics.forEach((metric, index) => {
    const angle = (-Math.PI / 2) + ((Math.PI * 2) / count) * index;
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;
    ctx.fillStyle = "rgba(255,255,255,0.78)";
    ctx.font = "12px Segoe UI";
    ctx.textAlign = "center";
    ctx.fillText(metric.label, x, y + 18);
  });
}

function performanceMetrics(vehicle) {
  const speedMax = vehicle.type === "car" ? 430 : vehicle.type === "bike" ? 410 : 150;
  const powerMax = vehicle.type === "car" ? 1500 : vehicle.type === "bike" ? 320 : 25;
  const torqueMax = vehicle.type === "car" ? 1600 : vehicle.type === "bike" ? 180 : 25;
  const accelMax = vehicle.type === "car" ? 8 : vehicle.type === "bike" ? 6 : 15;
  const weightMax = vehicle.type === "car" ? 2600 : vehicle.type === "bike" ? 320 : 180;
  return [
    { label: "Power", value: formatPower(vehicle), score: clamp(vehicle.powerHp / powerMax, 0.08, 1) },
    { label: "Torque", value: formatTorque(vehicle), score: clamp(vehicle.torqueNm / torqueMax, 0.08, 1) },
    { label: "Top Speed", value: formatTopSpeed(vehicle), score: clamp(vehicle.topSpeedKph / speedMax, 0.08, 1) },
    { label: "0-60", value: formatAccel(vehicle.zeroSixty), score: clamp(1 - (vehicle.zeroSixty / accelMax), 0.08, 1) },
    { label: "Lightweight", value: formatWeight(vehicle), score: clamp(1 - (vehicle.weightKg / weightMax), 0.08, 1) }
  ];
}

function toggleTheme() {
  const nextTheme = refs.body.classList.contains("theme-dark") ? "light" : "dark";
  setTheme(nextTheme);
  saveJson(STORAGE.theme, nextTheme);
}

function applySavedTheme() {
  setTheme(loadJson(STORAGE.theme, "dark"));
}

function setTheme(theme) {
  refs.body.classList.toggle("theme-dark", theme !== "light");
  refs.body.classList.toggle("theme-light", theme === "light");
  refs.themeToggle.textContent = theme === "light" ? "☾" : "☼";
}

function toggleFavorite(vehicleId, rerenderModal = false) {
  const key = String(vehicleId);
  if (state.favorites.has(key)) state.favorites.delete(key);
  else state.favorites.add(key);
  saveJson(STORAGE.favorites, [...state.favorites]);
  renderAll();
  if (rerenderModal && state.currentVehicleId === key) openVehicleModal(key, state.detailTab);
}

function toggleCompareMode() {
  state.compareMode = !state.compareMode;
  renderCompareDock();
  renderHero();
}

function toggleCompare(vehicleId, rerenderModal = false) {
  const key = String(vehicleId);
  if (state.compareIds.includes(key)) state.compareIds = state.compareIds.filter((item) => item !== key);
  else {
    if (state.compareIds.length >= 3) return void showToast("Gioi han compare", "Chi compare toi da 3 xe mot lan.");
    state.compareIds = [...state.compareIds, key];
  }
  saveJson(STORAGE.compare, state.compareIds);
  state.compareMode = true;
  renderCompareDock();
  renderGallery();
  if (rerenderModal && state.currentVehicleId === key) openVehicleModal(key, state.detailTab);
}

function clearCompare() {
  state.compareIds = [];
  state.compareMode = false;
  saveJson(STORAGE.compare, state.compareIds);
  renderCompareDock();
  renderHero();
  renderGallery();
}

function handleInstallClick() {
  if (isStandalone()) return void showToast("Da cai dat", "App nay dang chay o che do da cai dat.");
  if (state.installPrompt) {
    state.installPrompt.prompt();
    state.installPrompt.userChoice.finally(() => {
      state.installPrompt = null;
      syncInstallButton();
    });
    return;
  }
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  showToast(isIOS ? "Cach cai tren iPhone" : "Cach cai dat", isIOS ? "Mo Share > Add to Home Screen trong Safari." : "Neu browser chua hien prompt, mo menu va chon Install App / Add to Home screen.");
}

function syncInstallButton() {
  if (isStandalone()) {
    refs.installBtn.textContent = "Da cai dat";
    refs.installBtn.disabled = true;
    return;
  }
  refs.installBtn.disabled = false;
  refs.installBtn.textContent = "Cai dat app";
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator) || window.location.protocol === "file:") return;
  window.addEventListener("load", async () => {
    try {
      await navigator.serviceWorker.register("./sw.js");
      await navigator.serviceWorker.ready;
      if (!loadJson(STORAGE.offlineToast, false)) {
        showToast("Offline ready", "App san sang dung offline sau khi mo lai tu icon tren dien thoai.");
        saveJson(STORAGE.offlineToast, true);
      }
    } catch (error) {
      console.error("Service worker registration failed", error);
    }
  });
}

function openOverlay(kind) {
  const overlay = getOverlayElement(kind);
  if (!overlay) return;
  overlay.classList.add("show");
  refs.body.classList.add("modal-open");
}

function closeOverlay(idOrKind) {
  const overlay = getOverlayElement(idOrKind);
  if (!overlay) return;
  overlay.classList.remove("show");
  if (![...document.querySelectorAll(".overlay.show")].length) refs.body.classList.remove("modal-open");
  if (overlay === refs.vehicleOverlay) {
    state.currentVehicleId = null;
    if (window.location.hash.startsWith("#vehicle=")) history.replaceState(null, "", window.location.pathname + window.location.search);
  }
}

function getOverlayElement(kind) {
  if (kind === "vehicle" || kind === "vehicleModalOverlay") return refs.vehicleOverlay;
  if (kind === "compare" || kind === "compareModalOverlay") return refs.compareOverlay;
  if (kind === "garage" || kind === "garageModalOverlay") return refs.garageOverlay;
  if (kind === "ai" || kind === "aiModalOverlay") return refs.aiOverlay;
  return document.getElementById(kind);
}

function handleHashState() {
  const hash = window.location.hash || "";
  if (!hash.startsWith("#vehicle=")) return;
  const vehicleId = decodeURIComponent(hash.slice("#vehicle=".length));
  if (findVehicleById(vehicleId)) openVehicleModal(vehicleId, state.detailTab);
}

function syncHashForVehicle(vehicleId) {
  const nextHash = `#vehicle=${encodeURIComponent(vehicleId)}`;
  if (window.location.hash !== nextHash) history.replaceState(null, "", `${window.location.pathname}${window.location.search}${nextHash}`);
}

function copyVehicleLink(vehicleId) {
  const link = buildVehicleShareUrl(vehicleId);
  navigator.clipboard.writeText(link).then(() => showToast("Da copy", "Link xe da duoc copy vao clipboard.")).catch(() => showToast("Khong copy duoc", "Browser dang chan clipboard, ban co the copy thu cong."));
}

function nativeShareVehicle(vehicleId) {
  const vehicle = findVehicleById(vehicleId);
  if (!vehicle) return;
  const payload = { title: `${vehicle.brand} ${vehicle.name}`, text: `${vehicle.brand} ${vehicle.name} - ${formatPower(vehicle)} - ${formatUsd(vehicle.priceUsd)}`, url: buildVehicleShareUrl(vehicle.id) };
  if (navigator.share) navigator.share(payload).catch(() => null);
  else copyVehicleLink(vehicle.id);
}

function buildVehicleShareUrl(vehicleId) {
  const url = new URL(window.location.href);
  url.hash = `vehicle=${encodeURIComponent(vehicleId)}`;
  return url.toString();
}

function saveReview(vehicleId, text) {
  const key = String(vehicleId);
  const list = getReviews(key);
  list.unshift({ author: "Ban", text, ts: Date.now() });
  state.reviews[key] = list.slice(0, 20);
  saveJson(STORAGE.reviews, state.reviews);
}

function getReviews(vehicleId) {
  return [...(state.reviews[String(vehicleId)] || [])];
}

function incrementHot(vehicle) {
  const key = String(vehicle.id);
  state.hotClicks[key] = (state.hotClicks[key] || 0) + 1;
  saveJson(STORAGE.hotClicks, state.hotClicks);
  renderHero();
}

function hotScore(vehicle) {
  const raw = rawHotScore(vehicle);
  const assignedHot = (vehicle.badgeLabel || PROMO_BADGES[vehicle.id]) === "Hot" ? 10 : 0;
  return raw + assignedHot;
}

function normalizeHotScore(vehicle) {
  const scores = state.allVehicles.map(hotScore);
  const max = Math.max(...scores, 1);
  return clamp(hotScore(vehicle) / max, 0, 1);
}

function rawHotScore(vehicle) {
  const clickWeight = state.hotClicks[String(vehicle.id)] || 0;
  const favoriteWeight = state.favorites.has(String(vehicle.id)) ? 14 : 0;
  const mineWeight = vehicle.isMine ? 8 : 0;
  return clickWeight * 4 + favoriteWeight + mineWeight + vehicle.powerHp / 60;
}

function findVehicleById(vehicleId) {
  const key = String(vehicleId);
  return state.allVehicles.find((vehicle) => String(vehicle.id) === key) || null;
}

function getPromoBadge(vehicle) {
  const assigned = vehicle.badgeLabel || PROMO_BADGES[vehicle.id];
  if (!assigned) return rawHotScore(vehicle) >= 22 ? { label: "Hot", className: "promo-pill" } : null;
  return { label: assigned, className: assigned.includes("2025") ? "promo-pill new" : "promo-pill" };
}

function normalizeVehicle(vehicle, isUser = false) {
  const specs = { ...(vehicle.specs || {}) };
  const priceUsd = Number.isFinite(Number(vehicle.priceUsd)) ? Number(vehicle.priceUsd) : vehicle.type === "vn" ? parsePriceUsd(vehicle.priceStr) ?? Number(vehicle.price || 0) : Number(vehicle.price || 0);
  const torqueNm = Number.isFinite(Number(vehicle.torqueNm)) ? Number(vehicle.torqueNm) : vehicle.type === "vn" || isUser ? Number(vehicle.torque || 0) : Number(vehicle.torque || 0) * LBFT_TO_NM;
  const topSpeedKph = Number.isFinite(Number(vehicle.topSpeedKph)) ? Number(vehicle.topSpeedKph) : vehicle.type === "vn" || isUser ? Number(vehicle.topSpeed || 0) : Number(vehicle.topSpeed || 0) * MPH_TO_KPH;
  const weightKg = Number.isFinite(Number(vehicle.weightKg)) ? Number(vehicle.weightKg) : Number(vehicle.weightLb || 0) * LB_TO_KG;
  const variants = (vehicle.variants || []).map((variant) => ({ ...variant, priceUsd: parsePriceUsd(variant.p) }));
  return {
    ...vehicle,
    isMine: Boolean(vehicle.isMine || isUser),
    priceUsd,
    powerHp: Number(vehicle.powerHp || vehicle.power || 0),
    torqueNm,
    topSpeedKph,
    weightKg,
    seatM: parseMillimetersToMeters(specs.Seat),
    tankL: parseLitersValue(specs.Tank),
    rangeKm: parseRangeKm(specs.Range),
    fuelUseL: parseFuelUse(specs.Fuel),
    engineLabel: normalizeEngineLabel(specs.Engine || vehicle.engineLabel || vehicle.engineType || ""),
    engineType: inferEngineType(specs.Engine || vehicle.engineType || ""),
    imageUrl: vehicle.imageUrl || "",
    photoUrls: buildPhotoUrls(vehicle),
    variants,
    specs,
    badgeLabel: vehicle.badgeLabel || PROMO_BADGES[vehicle.id] || (vehicle.year >= 2025 ? "New 2025" : ""),
    col: vehicle.col || typeColor(vehicle.type)
  };
}

function buildPhotoUrls(vehicle) {
  const given = [];
  if (vehicle.imageUrl) given.push(vehicle.imageUrl);
  if (Array.isArray(vehicle.photoUrls)) given.push(...vehicle.photoUrls);
  const pool = PHOTO_POOLS[vehicle.type] || PHOTO_POOLS.car;
  const seedIndex = Math.abs(hashCode(String(vehicle.id))) % pool.length;
  const fallback = [pool[seedIndex], pool[(seedIndex + 1) % pool.length], pool[(seedIndex + 2) % pool.length]];
  return [...new Set([...given.filter(Boolean), ...fallback])];
}

function metricChip(label, value) {
  return `<div class="metric-chip"><span class="metric-label">${escapeHtml(label)}</span><span class="metric-value">${escapeHtml(value)}</span></div>`;
}

function detailTabButton(key, label) {
  return `<button class="detail-tab ${state.detailTab === key ? "active" : ""}" type="button" data-detail-tab="${escapeAttr(key)}">${escapeHtml(label)}</button>`;
}

function renderMedia(vehicle) {
  const hasImage = Boolean(vehicle.imageUrl);
  const fallbackVisible = hasImage ? " hidden" : "";
  return `${hasImage ? `<img src="${escapeAttr(vehicle.imageUrl)}" alt="${escapeAttr(vehicle.name)}" loading="lazy" referrerpolicy="no-referrer" onerror="this.hidden=true;this.nextElementSibling.hidden=false;">` : ""}<div class="visual-fallback"${fallbackVisible}>${getVisual(vehicle)}</div>`;
}

function getVisual(vehicle) {
  if (vehicle.type === "vn") return scooterSvg(vehicle.col);
  if (vehicle.type === "bike") return bikeSvg(vehicle.col);
  return carSvg(vehicle.col);
}

function carSvg(color) {
  return `<svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="55" width="180" height="28" rx="6" fill="${color}" opacity=".7"/><path d="M35 55L55 30L155 30L175 55Z" fill="${color}" opacity=".92"/><rect x="58" y="34" width="42" height="18" rx="2" fill="#7ad0ff22"/><rect x="106" y="34" width="42" height="18" rx="2" fill="#7ad0ff22"/><circle cx="55" cy="83" r="13" fill="#08111f" stroke="#41adff" stroke-width="2"/><circle cx="55" cy="83" r="6" fill="#3ba7ff33"/><circle cx="165" cy="83" r="13" fill="#08111f" stroke="#ff9b3d" stroke-width="2"/><circle cx="165" cy="83" r="6" fill="#ff9b3d33"/></svg>`;
}

function bikeSvg(color) {
  return `<svg viewBox="0 0 220 110" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="78" r="24" fill="none" stroke="#ff9b3d" stroke-width="3"/><circle cx="60" cy="78" r="10" fill="${color}" opacity=".8"/><circle cx="160" cy="78" r="24" fill="none" stroke="#3ba7ff" stroke-width="3"/><circle cx="160" cy="78" r="10" fill="${color}" opacity=".8"/><path d="M84 78L100 45L140 45L160 78Z" fill="${color}" opacity=".88"/><path d="M100 45L110 30L145 30L140 45Z" fill="${color}" opacity=".96"/><rect x="108" y="30" width="36" height="14" rx="3" fill="#ff9b3d22"/><path d="M58 78L75 55L90 55" stroke="#ff9b3d" stroke-width="2.5" fill="none"/></svg>`;
}

function scooterSvg(color) {
  return `<svg viewBox="0 0 220 110" xmlns="http://www.w3.org/2000/svg"><circle cx="55" cy="80" r="22" fill="none" stroke="#3ba7ff" stroke-width="2.5"/><circle cx="55" cy="80" r="9" fill="${color}" opacity=".84"/><circle cx="155" cy="80" r="18" fill="none" stroke="#ff9b3d" stroke-width="2.5"/><circle cx="155" cy="80" r="7" fill="${color}" opacity=".84"/><path d="M75 80Q92 49 130 48L155 80Z" fill="${color}" opacity=".84"/><path d="M105 48L110 30L145 30L140 48Z" fill="${color}" opacity=".94"/><rect x="112" y="32" width="28" height="12" rx="2" fill="#3ba7ff20"/><ellipse cx="90" cy="68" rx="20" ry="12" fill="${color}" opacity=".66"/></svg>`;
}

function formatUsd(value) {
  return usdFormatter.format(Math.round(Number(value || 0)));
}

function formatPower(vehicle) {
  return `${formatNumber(vehicle.powerHp, vehicle.powerHp < 100 ? 1 : 0)} HP`;
}

function formatTorque(vehicle) {
  return `${formatNumber(vehicle.torqueNm, vehicle.torqueNm < 50 ? 1 : 0)} Nm`;
}

function formatTopSpeed(vehicle) {
  return `${formatNumber(vehicle.topSpeedKph, 0)} km/h`;
}

function formatWeight(vehicle) {
  return `${formatNumber(vehicle.weightKg, 0)} kg`;
}

function formatAccel(value) {
  return `${formatNumber(value, value < 3 ? 2 : 1)} s`;
}

function formatMeters(value) {
  return `${formatNumber(value, 2)} m`;
}

function formatLiters(value) {
  return `${formatNumber(value, 1)} L`;
}

function formatRange(value) {
  return `${formatNumber(value, 0)} km`;
}

function formatFuelUse(value) {
  return `${formatNumber(value, 1)} L/100 km`;
}

function formatNumber(value, digits = 0) {
  return Number(value || 0).toLocaleString("en-US", { minimumFractionDigits: digits, maximumFractionDigits: digits });
}

function typeLabel(vehicle) {
  if (vehicle.isMine) return "Xe cua toi";
  if (vehicle.type === "car") return "O to";
  if (vehicle.type === "bike") return "Moto";
  return "VN Market";
}

function inferEngineType(engineText) {
  const source = normalizeText(engineText);
  if (!source) return "NA";
  if (source.includes("electric") || source.includes("motor") || source.includes("ev")) return "EV";
  if (source.includes("hybrid")) return "Hybrid";
  if (source.includes("turbo") || source.includes("biturbo") || source.includes("tt") || source.includes("supercharged") || source.includes("sc")) return "Turbo";
  return "NA";
}

function parsePriceUsd(text) {
  if (!text) return null;
  const source = String(text);
  if (/vnd|tr/i.test(source)) {
    const match = source.match(/([\d.]+)\s*tr/i);
    return match ? (parseFloat(match[1]) * 1000000) / USD_TO_VND : null;
  }
  const match = source.replace(/,/g, "").match(/(\d+(?:\.\d+)?)/);
  return match ? parseFloat(match[1]) : null;
}

function parseEngineLiters(text) {
  const source = String(text || "");
  let match = source.match(/(\d+(?:\.\d+)?)\s*L/i);
  if (match) return parseFloat(match[1]);
  match = source.match(/(\d+(?:\.\d+)?)\s*cc/i);
  return match ? parseFloat(match[1]) / 1000 : null;
}

function parseMillimetersToMeters(text) {
  const match = String(text || "").match(/(\d+(?:\.\d+)?)\s*mm/i);
  return match ? parseFloat(match[1]) / 1000 : null;
}

function parseLitersValue(text) {
  const match = String(text || "").match(/(\d+(?:\.\d+)?)\s*L/i);
  return match ? parseFloat(match[1]) : null;
}

function parseRangeKm(text) {
  const source = String(text || "");
  let match = source.match(/(\d+(?:\.\d+)?)\s*km/i);
  if (match) return parseFloat(match[1]);
  match = source.match(/(\d+(?:\.\d+)?)\s*mi/i);
  return match ? parseFloat(match[1]) * MI_TO_KM : null;
}

function parseFuelUse(text) {
  const match = String(text || "").match(/(\d+(?:\.\d+)?)\s*L\/100\s*km/i);
  return match ? parseFloat(match[1]) : null;
}

function normalizeEngineLabel(text) {
  const source = String(text || "");
  const liters = parseEngineLiters(source);
  if (liters == null) return source || "-";
  const amount = liters >= 1 ? liters.toFixed(1) : liters.toFixed(2);
  const rest = source.replace(/(\d+(?:\.\d+)?)\s*(L|cc)/i, "").replace(/\s+/g, " ").trim();
  return `${amount} L${rest ? ` ${rest}` : ""}`;
}

function parseBudgetFromQuery(query) {
  const match = query.match(/(\d+(?:[.,]\d+)?)/);
  if (!match) return null;
  const value = Number(match[1].replace(",", "."));
  if (/trieu| tr\b/.test(query)) return (value * 1000000) / USD_TO_VND;
  if (/usd|\$/.test(query)) return value;
  if (value > 1000) return value;
  return value;
}

function roundUpPrice(value) {
  if (value <= 5000) return 5000;
  if (value <= 50000) return Math.ceil(value / 1000) * 1000;
  if (value <= 500000) return Math.ceil(value / 5000) * 5000;
  return Math.ceil(value / 50000) * 50000;
}

function computeSliderStep(maxValue) {
  if (maxValue <= 10000) return 100;
  if (maxValue <= 100000) return 500;
  if (maxValue <= 500000) return 2500;
  return 10000;
}

function defaultTopSpeed(powerHp, type) {
  if (type === "car") return Math.max(140, Math.round(powerHp * 0.68));
  if (type === "bike") return Math.max(120, Math.round(powerHp * 1.18));
  return Math.max(90, Math.round(powerHp * 6));
}

function estimateAcceleration(powerHp, type) {
  if (type === "car") return clamp(Number((8.8 - powerHp / 110).toFixed(1)), 2.6, 9.8);
  if (type === "bike") return clamp(Number((5.3 - powerHp / 150).toFixed(1)), 2.2, 6.5);
  return clamp(Number((12.5 - powerHp / 5).toFixed(1)), 6.5, 14.5);
}

function defaultWeight(type) {
  if (type === "car") return 1480;
  if (type === "bike") return 198;
  return 122;
}

function typeColor(type) {
  if (type === "car") return "#1a2f4a";
  if (type === "bike") return "#3f2414";
  return "#163041";
}

function saveJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw == null ? fallback : JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function normalizeText(value) {
  return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function escapeHtml(value) {
  return String(value ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/"/g, "&quot;");
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function sortNumbers(a, b) {
  return Number(a) - Number(b);
}

function sortStrings(a, b) {
  return String(a).localeCompare(String(b), "en");
}

function hashCode(value) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = ((hash << 5) - hash) + value.charCodeAt(index);
    hash |= 0;
  }
  return hash;
}

function formatDateTime(timestamp) {
  return new Intl.DateTimeFormat("vi-VN", { dateStyle: "medium", timeStyle: "short" }).format(new Date(timestamp));
}

function showToast(title, body) {
  const node = document.createElement("div");
  node.className = "toast";
  node.innerHTML = `<strong>${escapeHtml(title)}</strong><div>${escapeHtml(body)}</div>`;
  refs.toastStack.appendChild(node);
  window.setTimeout(() => node.remove(), 4200);
}

function isStandalone() {
  return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
}
