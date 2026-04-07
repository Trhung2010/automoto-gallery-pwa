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
  20: "Hot",
  26: "Hot",
  28: "New 2025",
  29: "Hot",
  30: "Hot",
  31: "New 2025",
  33: "Hot",
  37: "New 2025",
  48: "Hot",
  52: "Hot",
  64: "New 2025",
  70: "Hot",
  71: "Hot",
  78: "Hot",
  79: "New 2025",
  82: "Hot",
  86: "Hot",
  89: "Hot",
  92: "New 2025",
  94: "Hot",
  97: "New 2025",
  100: "New 2025",
  101: "Hot",
  104: "Hot",
  106: "Hot",
  109: "New 2025"
};

const EXCITER_155_BUILD_CATEGORIES = [
  {
    title: "I. HỆ THỐNG PHANH & KIỂM SOÁT",
    note: "Phanh trước, phanh sau, dây dầu và combo đĩa dành cho Exciter 155.",
    items: [
      { name: "Cùm thắng dầu Brembo Corsacorta RCS 19", brand: "Brembo", sku: "–", desc: "Cùm thắng dầu đúc CNC (front master cylinder).", fitment: "Màu đen, kẹp 17–18mm", price: "7.700.000 VNĐ" },
      { name: "Cùm thắng dầu Brembo Billet 19x18", brand: "Brembo", sku: "–", desc: "Cùm thắng dầu CNC Billet (nhôm nguyên khối).", fitment: "Màu đen, kẹp 17–18mm", price: "Liên hệ" },
      { name: "Cùm thắng dầu Brembo RCS 16", brand: "Brembo", sku: "–", desc: "Cùm thắng dầu Brembo RCS 16 có núm chỉnh.", fitment: "–", price: "6.500.000 VNĐ" },
      { name: "Cùm thắng dầu GALESPEED VRC φ19", brand: "GaleSpeed", sku: "VRC19A-17BT", desc: "Master Cylinder GALESPEED VRC φ19.", fitment: "Kẹp tiêu chuẩn 17x19mm", price: "7.800.000 VNĐ" },
      { name: "Cùm thắng dầu GALESPEED RM φ14", brand: "GaleSpeed", sku: "RM14X-17B", desc: "Master Cylinder GALESPEED RM φ14.", fitment: "Kẹp tiêu chuẩn 17mm", price: "6.700.000 VNĐ" },
      { name: "Cùm thắng dầu GALESPEED Elaborate φ19", brand: "GaleSpeed", sku: "RE19A-17B", desc: "Cùm thắng dầu Elaborate φ19 mẫu mới.", fitment: "Kẹp 17/18mm, bánh răng tích hợp", price: "14.000.000 VNĐ" },
      { name: "Cùm thắng dầu GALESPEED Elaborate φ17.5", brand: "GaleSpeed", sku: "VRE17A-17BT", desc: "Cùm thắng dầu Elaborate φ17.5 có chân bình dầu.", fitment: "Kẹp 17.5mm, có chân bình dầu", price: "15.600.000 VNĐ" },
      { name: "Cần thắng sau GALESPEED (Brake Pedal)", brand: "GaleSpeed", sku: "GSTH12-17B", desc: "Thanh thắng sau nhôm CNC GALESPEED.", fitment: "Màu đen / nhiều màu theo hãng", price: "13.200.000 VNĐ" },
      { name: "Heo dầu Brembo 2 piston đối xứng", brand: "Brembo", sku: "–", desc: "Heo dầu Brembo 2 piston logo lớn.", fitment: "Màu đỏ / đen theo hãng", price: "2.950.000 VNĐ" },
      { name: "Đĩa phanh KingSpeed 245/200mm", brand: "KingSpeed", sku: "–", desc: "Combo đĩa phanh lớn KingSpeed trước 245mm, sau 200mm.", fitment: "Gắn zin Exciter 155", price: "Chưa rõ" },
      { name: "Dây dầu HEL (bấm đầu Earl’s)", brand: "HEL (Earl's)", sku: "–", desc: "Dây dầu phanh HEL bấm đầu Earl’s 90°.", fitment: "Dài khoảng 50cm, màu đỏ / đen", price: "~1.950.000 VNĐ" },
      { name: "Dây dầu Piranha (bấm đầu Earl’s)", brand: "Piranha", sku: "–", desc: "Dây dầu phanh Piranha bấm đầu Earl’s 90°.", fitment: "–", price: "450.000 VNĐ" },
      { name: "Dây dầu Swit (Renna) (bấm Earl’s)", brand: "Swit (Renna)", sku: "–", desc: "Dây dầu phanh Swit bấm đầu Earl’s 90°.", fitment: "–", price: "950.000 VNĐ" }
    ]
  },
  {
    title: "II. DÀN CHÂN & HỆ THỐNG TREO",
    note: "Mâm, lốp và phuộc trước / sau cho bản độ thiên street - track.",
    items: [
      { name: "Mâm Enkei 3 Đao Exciter 150/155", brand: "Enkei", sku: "–", desc: "Mâm xe CNC 3 chấu 17 inch cho Exciter 150/155.", fitment: "Nhiều màu: đen, đỏ, xanh", price: "~9.500.000–10.500.000 VNĐ" },
      { name: "Lốp Pirelli Diablo Rosso II 90/80-17", brand: "Pirelli", sku: "–", desc: "Vỏ thể thao trước, tăng ma sát.", fitment: "90/80-17", price: "~1.500.000 VNĐ" },
      { name: "Lốp Pirelli Diablo Rosso II 120/70-17", brand: "Pirelli", sku: "–", desc: "Vỏ thể thao sau, tăng bám đường.", fitment: "120/70-17", price: "~1.800.000 VNĐ" },
      { name: "Phuộc trước LCM V2 cho Exciter 150/155", brand: "LCM (Ý)", sku: "–", desc: "Phuộc trước truyền thống ty 32mm.", fitment: "VVA, nhiều màu", price: "3.800.000 VNĐ" },
      { name: "Phuộc trước LCM V1 cho Exciter 150/155", brand: "LCM (Ý)", sku: "–", desc: "Phuộc trước truyền thống ty 32mm.", fitment: "VVA, có ty vàng hoặc 7 màu", price: "3.600.000–4.000.000 VNĐ" },
      { name: "Phuộc sau Ohlins YA-769 (208mm)", brand: "Ohlins", sku: "KG071005", desc: "Phuộc sau hơi, bình dầu rời, điều chỉnh full.", fitment: "Đen / Carbon, có bình dầu", price: "15.950.000 VNĐ" },
      { name: "Phuộc sau RCB E2 (bình dầu, ty vàng)", brand: "RCB (Nhật)", sku: "E-280", desc: "Phuộc sau bình dầu DB-2, ty vàng 50mm.", fitment: "Ty trước 50mm", price: "4.500.000 VNĐ" },
      { name: "Phuộc sau RCB E2 (bình dầu)", brand: "RCB (Nhật)", sku: "–", desc: "Phuộc sau bình dầu DB-2.", fitment: "Ty vàng / bạc", price: "1.600.000 VNĐ" },
      { name: "Phuộc sau RCB M2 (bình dầu)", brand: "RCB (Nhật)", sku: "–", desc: "Phuộc sau bình dầu M2.", fitment: "Có nhiều màu: xanh, vàng", price: "1.100.000 VNĐ" }
    ]
  },
  {
    title: "III. THẨM MỸ & VỎ XE",
    note: "Các món dọn ngoài, nhấn mạnh ngoại hình và chi tiết CNC.",
    items: [
      { name: "Ốp mặt nạ vân carbon Candy Red", brand: "Hoàng Trí Racing", sku: "Ex155-037", desc: "Ốp mặt nạ sơn Candy màu đỏ có vân carbon.", fitment: "Exciter 155 Plug & Play", price: "150.000 VNĐ" },
      { name: "Ốp pô vân carbon (chính hãng)", brand: "Yamaha (VN)", sku: "90798VT00500", desc: "Ốp pô nhựa hàng chính hãng vân carbon.", fitment: "Exciter 155 loại zin", price: "279.000 VNĐ" },
      { name: "Ốc đĩa Salaya inox 8ly (bộ 5 con)", brand: "Salaya", sku: "–", desc: "Bộ ốc đĩa CNC 8ly bằng inox.", fitment: "5 con / bộ", price: "155.000 VNĐ" },
      { name: "Kính gù CRG 1.1 (bar-end mirror)", brand: "CRG (Ý)", sku: "Kinh-k", desc: "Gương gù CNC CRG 1.1 chính hãng Taiwan.", fitment: "Màu bạc inox", price: "350.000 VNĐ" }
    ]
  },
  {
    title: "IV. HỆ THỐNG CHIẾU SÁNG",
    note: "Xi-nhan, đèn cos / pha và đèn hậu phong cách MotoGP.",
    items: [
      { name: "Cụm xi-nhan LED Shark Power (bộ 2 cái)", brand: "Shark Power", sku: "–", desc: "Xi-nhan LED đơn lắp trước plug & play.", fitment: "Màu trong, LED trắng", price: "750.000 VNĐ" },
      { name: "Cụm đèn cos Bi-xenon Shark Power (45°)", brand: "Shark Power", sku: "–", desc: "Cụm đèn cos Bi-xenon thay cho cos zin.", fitment: "LED trắng, bóng Bi-xenon", price: "1.800.000 VNĐ" },
      { name: "Cụm đèn pha Bi-xenon Shark Power", brand: "Shark Power", sku: "–", desc: "Cụm đèn pha Bi-xenon thay thế toàn bộ.", fitment: "LED trắng, bóng Bi-xenon", price: "2.500.000 VNĐ" },
      { name: "Đèn hậu LED TST V2.0", brand: "TST Industries", sku: "–", desc: "Đèn hậu LED tích hợp xi-nhan kiểu MotoGP.", fitment: "–", price: "850.000 VNĐ" },
      { name: "Xi-nhan LED Spirit Beast L14 (bộ 4 đèn)", brand: "Spirit Beast", sku: "–", desc: "Xi-nhan LED Spirit Beast L14, 4 bóng LED.", fitment: "4 đèn LED, vỏ nhựa trong", price: "Chưa rõ" }
    ]
  },
  {
    title: "V. PHỤ KIỆN & BẢO VỆ",
    note: "Bảo vệ két nước, lốc máy và các chi tiết chống đổ / tay dắt.",
    items: [
      { name: "Gù chống đổ sau K20 (chắn chân)", brand: "K20", sku: "–", desc: "Gù chống đổ lắp gác chân sau, nhôm CNC.", fitment: "Màu vàng, bạc", price: "Chưa rõ" },
      { name: "Che két nước nhôm CNC Exciter 155", brand: "Hoàng Trí Racing", sku: "–", desc: "Ốp bảo vệ két nước nhôm CNC.", fitment: "Exciter 155", price: "Chưa rõ" },
      { name: "Cảng sau nhôm CNC (tay dắt sau)", brand: "–", sku: "–", desc: "Tay vịn / giữ sau nhôm CNC cho xe.", fitment: "–", price: "Chưa rõ", source: "Không tìm thấy" },
      { name: "Ốp bảo vệ lốc máy (CNC)", brand: "–", sku: "–", desc: "Ốp bảo vệ lốc máy nhôm CNC.", fitment: "–", price: "Chưa rõ", source: "Không tìm thấy" }
    ]
  },
  {
    title: "VI. KHU VỰC GHI ĐÔNG",
    note: "Bao tay, gương gù, trợ lực và đồng hồ điện tử cho cockpit.",
    items: [
      { name: "Bao tay Barracuda (cặp)", brand: "Barracuda", sku: "–", desc: "Bao tay nhôm / cao su Barracuda chính hãng Đài Loan.", fitment: "Nhiều màu: đen, đỏ", price: "Chưa rõ" },
      { name: "Gương gù CRG 1.1 (cặp)", brand: "CRG (Ý)", sku: "Kinh-k", desc: "Gương gù bar-end CRG 1.1, CNC.", fitment: "Màu inox bạc", price: "350.000 VNĐ" },
      { name: "Trợ lực Ohlins SBK (cổ)", brand: "Ohlins", sku: "–", desc: "Trợ lực tay lái Ohlins SBK gắn cổ phuộc.", fitment: "Màu vàng", price: "Chưa rõ", source: "Không tìm thấy" },
      { name: "Trợ lực Matris (cổ)", brand: "Matris", sku: "–", desc: "Trợ lực tay lái Matris Italy.", fitment: "Màu đen, vàng", price: "Chưa rõ", source: "Không tìm thấy" },
      { name: "Đồng hồ LCD màu (đa sắc)", brand: "Koso / Full màu", sku: "–", desc: "Đồng hồ điện tử màu đa sắc plug & play.", fitment: "–", price: "~1.000.000–2.000.000 VNĐ", source: "Không tìm thấy" }
    ]
  },
  {
    title: "VII. TIỆN ÍCH & CÔNG NGHỆ",
    note: "Smartkey, báo động, GPS, sạc nhanh và camera hành trình.",
    items: [
      { name: "Ổ khóa Smartkey Exciter 155 (nâng cấp)", brand: "Yamaha / aftermarket", sku: "–", desc: "Module Smartkey thay thế khóa cơ.", fitment: "Màu vàng / đen", price: "4.500.000 VNĐ" },
      { name: "Thiết bị chống trộm (cảm biến rung)", brand: "–", sku: "–", desc: "Module báo động rung / va chạm không dây.", fitment: "–", price: "Chưa rõ", source: "Không tìm thấy" },
      { name: "Thiết bị định vị GPS (tracker)", brand: "–", sku: "–", desc: "Thiết bị định vị GPS chống trộm cho xe máy.", fitment: "–", price: "500.000–1.200.000 VNĐ", source: "Không tìm thấy" },
      { name: "Cổng sạc USB nhanh (QC3.0)", brand: "–", sku: "–", desc: "Cổng sạc điện thoại USB nhanh 3.0A.", fitment: "1-2 cổng, QC3.0", price: "300.000–500.000 VNĐ", source: "Không tìm thấy" },
      { name: "Camera hành trình (Full HD)", brand: "–", sku: "–", desc: "Camera hành trình gắn đầu xe, quay Full HD.", fitment: "–", price: "1.000.000–2.000.000 VNĐ", source: "Không tìm thấy" }
    ]
  },
  {
    title: "VIII. MÁY MÓC",
    note: "ECU, lọc gió, họng xăng, truyền động và các hạng mục nâng cấp hiệu năng.",
    items: [
      { name: "Bộ PXL Redleo Exciter 150/155 VVA (bản thương mại)", brand: "Redleo", sku: "–", desc: "ECU plug-and-play Redleo bản thương mại.", fitment: "Cho Exciter 155 VVA", price: "5.960.000 VNĐ" },
      { name: "ECU aRacer Super X / Kozi (đang tìm kiếm)", brand: "–", sku: "–", desc: "Đang tìm thêm ECU khác cho Exciter 155.", fitment: "–", price: "Chưa rõ", source: "Không tìm thấy" },
      { name: "Mobin MSD / Uma, bugi Iridium, dây cao áp", brand: "–", sku: "–", desc: "Nhóm sản phẩm đánh lửa đang tìm kiếm.", fitment: "–", price: "Chưa rõ", source: "Không tìm thấy" },
      { name: "Lọc gió K&N YA-1515 cho Exciter 155", brand: "K&N (USA)", sku: "YA-1515", desc: "Lọc gió thể thao thay thế zin.", fitment: "Dùng cho Exciter 155", price: "1.100.000 VNĐ" },
      { name: "Họng xăng BRT CNC (32/34/36mm)", brand: "BRT (VN)", sku: "BRTTB00015", desc: "Họng xăng độ CNC 32 / 34 / 36mm.", fitment: "Cho Exciter 155 VVA", price: "1.500.000 VNĐ" },
      { name: "Các mẫu họng xăng khác (đang tìm kiếm)", brand: "–", sku: "–", desc: "Chưa tìm thấy thêm sản phẩm họng xăng khác.", fitment: "–", price: "Chưa rõ", source: "Không tìm thấy" },
      { name: "Hệ thống xả Uma / STB / LeoVince, cổ pô Titan, tiêu pô", brand: "–", sku: "–", desc: "Danh mục pô và cổ pô đang tìm kiếm.", fitment: "–", price: "Chưa rõ", source: "Không tìm thấy" },
      { name: "Cam độ, xupap, lò xo Titan, chén chặn Titan", brand: "–", sku: "–", desc: "Danh mục độ cam và valvetrain đang tìm kiếm.", fitment: "–", price: "Chưa rõ", source: "Không tìm thấy" },
      { name: "Lá bố Uma / Kozi, lò xo côn, nồi CNC", brand: "–", sku: "–", desc: "Các sản phẩm ly hợp và nồi đang tìm kiếm.", fitment: "–", price: "Chưa rõ", source: "Không tìm thấy" },
      { name: "Bộ kit tăng dung tích (bore-up 200cc)", brand: "Athena / P2R", sku: "–", desc: "Bộ độ xi-lanh / piston 200cc.", fitment: "–", price: "Chưa rõ", source: "Không tìm thấy" },
      { name: "Nhông-sên-dĩa DID 14-46-126L (10ly) bộ full", brand: "DID (Japon)", sku: "428HDS", desc: "Bộ nhông, dĩa, xích DID cho Exciter.", fitment: "Nhông 14T, dĩa 46T, sên 126L", price: "620.000 VNĐ" },
      { name: "Ống nước Samco, két nhớt, bơm nước", brand: "–", sku: "–", desc: "Nhóm nâng cấp làm mát đang tìm kiếm.", fitment: "–", price: "Chưa rõ", source: "Không tìm thấy" },
      { name: "Nhớt hiệu suất cao, lọc nhớt vĩnh cửu", brand: "–", sku: "–", desc: "Danh mục tiêu hao hiệu suất cao đang tìm kiếm.", fitment: "–", price: "Chưa rõ", source: "Không tìm thấy" }
    ]
  }
];

const EXCITER_155_MEDIA = {
  imageUrl: "./media/exciter-155/exciter-155-front-three-quarter-right.webp",
  photoUrls: [
    "./media/exciter-155/exciter-155-front-three-quarter-right.webp",
    "./media/exciter-155/exciter-155-front-three-quarter-left.webp",
    "./media/exciter-155/exciter-155-front.webp",
    "./media/exciter-155/exciter-155-side-right.webp",
    "./media/exciter-155/exciter-155-side-left.webp",
    "./media/exciter-155/exciter-155-rear-three-quarter-right.webp",
    "./media/exciter-155/exciter-155-rear-three-quarter-left.webp",
    "./media/exciter-155/exciter-155-rear.webp"
  ],
  videoUrls: [
    "./media/exciter-155/exciter-155-walkaround.mp4"
  ]
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
  { id: 70, type: "vn", brand: "Yamaha", name: "Exciter 155 VVA", year: 2024, price: 1150, priceStr: "~47tr VND", cat: "Underbone Sport", power: 19.3, torque: 14.4, topSpeed: 122, zeroSixty: 9.5, weightLb: 268, specs: { Engine: "155cc VVA SOHC", Power: "19.3 HP", Torque: "14.4 Nm", Seat: "795 mm", Weight: "117 kg", "Top Speed": "122 km/h", Tank: "4.2L", Fuel: "~2.5L/100km" }, variants: [{ n: "Exciter 155 Standard", p: "~45.9tr" }, { n: "Exciter 155 Connected", p: "~47.4tr" }, { n: "Exciter 155 RC", p: "~48.9tr" }], ...EXCITER_155_MEDIA, buildCategories: EXCITER_155_BUILD_CATEGORIES, col: "#1a1a0a" },
  { id: 71, type: "vn", brand: "Honda", name: "Winner X", year: 2024, price: 1100, priceStr: "~46.5tr VND", cat: "Underbone Sport", power: 14.8, torque: 13.5, topSpeed: 118, zeroSixty: 10.2, weightLb: 253, specs: { Engine: "150cc eSP+ SOHC", Power: "14.8 HP", Torque: "13.5 Nm", Seat: "785 mm", Weight: "115 kg", "Top Speed": "118 km/h", Tank: "4.1L", Fuel: "~2.0L/100km" }, variants: [{ n: "Standard", p: "~45.9tr" }, { n: "Special Edition", p: "~48.9tr" }], col: "#2a1a0a" },
  { id: 72, type: "vn", brand: "Yamaha", name: "NVX 155", year: 2024, price: 1050, priceStr: "~50tr VND", cat: "Maxi Scooter", power: 15.1, torque: 13.8, topSpeed: 115, zeroSixty: 9.8, weightLb: 291, specs: { Engine: "155cc VVA SOHC", Power: "15.1 HP", Torque: "13.8 Nm", Seat: "785 mm", Weight: "132 kg", "Top Speed": "115 km/h", Tank: "5.5L", Fuel: "~2.4L/100km" }, variants: [{ n: "NVX 155", p: "~49.9tr" }, { n: "NVX 155 Premium", p: "~52.9tr" }], col: "#0f1a2a" },
  { id: 73, type: "vn", brand: "Honda", name: "Air Blade 150", year: 2024, price: 980, priceStr: "~43.5tr VND", cat: "Scooter", power: 13.6, torque: 13.1, topSpeed: 110, zeroSixty: 10.5, weightLb: 255, specs: { Engine: "150cc eSP+ SOHC", Power: "13.6 HP", Torque: "13.1 Nm", Seat: "764 mm", Weight: "113 kg", "Top Speed": "110 km/h", Tank: "3.7L", Fuel: "~1.9L/100km" }, variants: [{ n: "Standard", p: "~43.5tr" }, { n: "Special", p: "~44.9tr" }], col: "#1a2a1a" },
  { id: 74, type: "vn", brand: "Yamaha", name: "Grande Hybrid", year: 2024, price: 860, priceStr: "~52tr VND", cat: "Scooter Hybrid", power: 12.6, torque: 13.8, topSpeed: 105, zeroSixty: 11, weightLb: 266, specs: { Engine: "125cc VVA + E-Motor", Power: "12.6 HP", Torque: "13.8 Nm", Seat: "760 mm", Weight: "112 kg", "Top Speed": "105 km/h", Tank: "5.1L", Fuel: "~1.6L/100km" }, variants: [{ n: "Grande Hybrid", p: "~52tr" }, { n: "Grande Hybrid Limited", p: "~56tr" }], col: "#1a1a2a" },
  { id: 75, type: "vn", brand: "Honda", name: "Vision 110", year: 2024, price: 650, priceStr: "~33tr VND", cat: "Scooter", power: 8.1, torque: 9.3, topSpeed: 95, zeroSixty: 13, weightLb: 220, specs: { Engine: "110cc eSP SOHC", Power: "8.1 HP", Torque: "9.3 Nm", Seat: "757 mm", Weight: "98 kg", "Top Speed": "95 km/h", Tank: "3.7L", Fuel: "~1.7L/100km" }, variants: [{ n: "Vision 110", p: "~33.2tr" }, { n: "Vision Special", p: "~35.9tr" }], col: "#1a2a2a" },
  { id: 76, type: "vn", brand: "Honda", name: "Wave Alpha 110", year: 2024, price: 480, priceStr: "~19.9tr VND", cat: "Cub", power: 8.67, torque: 8.83, topSpeed: 90, zeroSixty: 14, weightLb: 220, specs: { Engine: "110cc SOHC", Power: "8.67 HP", Torque: "8.83 Nm", Seat: "765 mm", Weight: "98 kg", "Top Speed": "90 km/h", Tank: "3.5L", Fuel: "~1.6L/100km" }, variants: [{ n: "Wave Alpha", p: "~18.99tr" }, { n: "Wave Alpha Special", p: "~19.99tr" }], col: "#2a1a1a" },
  { id: 77, type: "vn", brand: "Yamaha", name: "Sirius FI", year: 2024, price: 450, priceStr: "~20.9tr VND", cat: "Cub", power: 9, torque: 9.5, topSpeed: 92, zeroSixty: 13.5, weightLb: 224, specs: { Engine: "113cc SOHC FI", Power: "9.0 HP", Torque: "9.5 Nm", Seat: "770 mm", Weight: "100 kg", "Top Speed": "92 km/h", Tank: "4L", Fuel: "~1.8L/100km" }, variants: [{ n: "Sirius FI", p: "~20.9tr" }, { n: "Sirius RC", p: "~21.9tr" }], col: "#1a1a2a" },
  { id: 78, type: "vn", brand: "Honda", name: "SH 150i", year: 2024, price: 1350, priceStr: "~75tr VND", cat: "Premium Scooter", power: 14.6, torque: 13.6, topSpeed: 118, zeroSixty: 8.5, weightLb: 290, specs: { Engine: "149cc eSP+ SOHC", Power: "14.6 HP", Torque: "13.6 Nm", Seat: "796 mm", Weight: "130 kg", "Top Speed": "118 km/h", Tank: "7.7L", Fuel: "~1.9L/100km" }, variants: [{ n: "SH 150i", p: "~71tr" }, { n: "SH 150i Sport", p: "~75.5tr" }, { n: "SH 160i", p: "~83.5tr" }], col: "#1a2a2a" }
);

SEED_VEHICLES.push(
  { id: 29, type: "car", brand: "Koenigsegg", name: "Jesko Attack", year: 2024, price: 3000000, priceStr: "$3,000,000", cat: "Mega Hypercar", power: 1600, torque: 1106, topSpeed: 278, zeroSixty: 2.5, weightLb: 3131, specs: { Engine: "5.0L TT V8", Power: "1,600 HP", Torque: "1,106 lb-ft", Drivetrain: "RWD", Trans: "9-spd LST", "0-60": "2.5s", "Top Speed": "278 mph", Weight: "3,131 lbs" }, variants: [{ n: "Attack", p: "$3,000,000" }, { n: "Absolut", p: "$3,400,000" }], col: "#12243f" },
  { id: 30, type: "car", brand: "Rimac", name: "Nevera", year: 2024, price: 2200000, priceStr: "$2,200,000", cat: "Electric Hypercar", power: 1914, torque: 1741, topSpeed: 258, zeroSixty: 1.85, weightLb: 5071, specs: { Engine: "Quad-Motor EV", Power: "1,914 HP", Torque: "1,741 lb-ft", Drivetrain: "AWD", Trans: "Single-speed", "0-60": "1.85s", "Top Speed": "258 mph", Weight: "5,071 lbs", Range: "304 mi" }, variants: [{ n: "Nevera", p: "$2,200,000" }], col: "#12324a" },
  { id: 31, type: "car", brand: "Aston Martin", name: "Valhalla", year: 2025, price: 850000, priceStr: "$850,000", cat: "Hybrid Supercar", power: 1064, torque: 811, topSpeed: 217, zeroSixty: 2.5, weightLb: 3638, specs: { Engine: "4.0L TT V8 Hybrid", Power: "1,064 HP", Torque: "811 lb-ft", Drivetrain: "AWD", Trans: "8-spd DCT", "0-60": "2.5s", "Top Speed": "217 mph", Weight: "3,638 lbs" }, variants: [{ n: "Valhalla", p: "$850,000" }], col: "#182638" },
  { id: 32, type: "car", brand: "Porsche", name: "718 Cayman GT4 RS", year: 2024, price: 164200, priceStr: "$164,200", cat: "Track Coupe", power: 493, torque: 331, topSpeed: 196, zeroSixty: 3.2, weightLb: 3227, specs: { Engine: "4.0L NA Flat-6", Power: "493 HP", Torque: "331 lb-ft", Drivetrain: "RWD", Trans: "7-spd PDK", "0-60": "3.2s", "Top Speed": "196 mph", Weight: "3,227 lbs" }, variants: [{ n: "GT4 RS", p: "$164,200" }, { n: "Weissach Pack", p: "$182,000+" }], col: "#28334a" },
  { id: 33, type: "car", brand: "Mercedes-AMG", name: "One", year: 2024, price: 2720000, priceStr: "$2,720,000", cat: "F1 Hypercar", power: 1063, torque: 738, topSpeed: 219, zeroSixty: 2.9, weightLb: 3737, specs: { Engine: "1.6L Turbo V6 Hybrid", Power: "1,063 HP", Torque: "738 lb-ft", Drivetrain: "AWD", Trans: "7-spd AMT", "0-60": "2.9s", "Top Speed": "219 mph", Weight: "3,737 lbs" }, variants: [{ n: "AMG One", p: "$2,720,000" }], col: "#232935" },
  { id: 34, type: "car", brand: "Cadillac", name: "CT5-V Blackwing", year: 2024, price: 94995, priceStr: "$94,995", cat: "Super Sedan", power: 668, torque: 659, topSpeed: 200, zeroSixty: 3.4, weightLb: 4123, specs: { Engine: "6.2L SC V8", Power: "668 HP", Torque: "659 lb-ft", Drivetrain: "RWD", Trans: "10-spd Auto", "0-60": "3.4s", "Top Speed": "200 mph", Weight: "4,123 lbs" }, variants: [{ n: "Manual", p: "$94,995" }, { n: "Automatic", p: "$98,995" }], col: "#2d1b23" },
  { id: 35, type: "car", brand: "Lotus", name: "Emira V6", year: 2024, price: 102250, priceStr: "$102,250", cat: "Driver's Coupe", power: 400, torque: 310, topSpeed: 180, zeroSixty: 4.1, weightLb: 3142, specs: { Engine: "3.5L SC V6", Power: "400 HP", Torque: "310 lb-ft", Drivetrain: "RWD", Trans: "6-spd Manual", "0-60": "4.1s", "Top Speed": "180 mph", Weight: "3,142 lbs" }, variants: [{ n: "V6 First Edition", p: "$102,250" }, { n: "Turbo SE", p: "$109,000+" }], col: "#1b3140" },
  { id: 36, type: "car", brand: "Nissan", name: "Z Nismo", year: 2024, price: 66995, priceStr: "$66,995", cat: "Sport Coupe", power: 420, torque: 384, topSpeed: 155, zeroSixty: 4.1, weightLb: 3704, specs: { Engine: "3.0L TT V6", Power: "420 HP", Torque: "384 lb-ft", Drivetrain: "RWD", Trans: "9-spd Auto", "0-60": "4.1s", "Top Speed": "155 mph", Weight: "3,704 lbs" }, variants: [{ n: "Performance", p: "$52,110" }, { n: "Nismo", p: "$66,995" }], col: "#2e1d1e" },
  { id: 37, type: "car", brand: "Lucid", name: "Air Sapphire", year: 2025, price: 249000, priceStr: "$249,000", cat: "Luxury EV Super Sedan", power: 1234, torque: 1430, topSpeed: 205, zeroSixty: 1.89, weightLb: 5298, specs: { Engine: "Tri-Motor EV", Power: "1,234 HP", Torque: "1,430 lb-ft", Drivetrain: "AWD", Trans: "Single-speed", "0-60": "1.89s", "Top Speed": "205 mph", Weight: "5,298 lbs", Range: "427 mi" }, variants: [{ n: "Sapphire", p: "$249,000" }], col: "#1b2944" },
  { id: 38, type: "car", brand: "Audi", name: "RS e-tron GT Performance", year: 2025, price: 167000, priceStr: "$167,000", cat: "Electric GT", power: 912, torque: 758, topSpeed: 155, zeroSixty: 2.4, weightLb: 5181, specs: { Engine: "Dual-Motor EV", Power: "912 HP", Torque: "758 lb-ft", Drivetrain: "AWD", Trans: "2-spd Auto", "0-60": "2.4s", "Top Speed": "155 mph", Weight: "5,181 lbs", Range: "278 mi" }, variants: [{ n: "RS e-tron GT", p: "$147,000" }, { n: "Performance", p: "$167,000" }], col: "#20283f" },
  { id: 62, type: "bike", brand: "Ducati", name: "DesertX Rally", year: 2024, price: 22995, priceStr: "$22,995", cat: "Rally Adventure", power: 110, torque: 68, topSpeed: 131, zeroSixty: 4.2, weightLb: 463, specs: { Engine: "937cc Testastretta V2", Power: "110 HP", Torque: "68 lb-ft", Seat: "910 mm", Weight: "210 kg", "Top Speed": "131 mph", Tank: "21L", Electronics: "Rally ABS + Traction" }, variants: [{ n: "DesertX", p: "$17,995" }, { n: "DesertX Rally", p: "$22,995" }], col: "#3b2415" },
  { id: 63, type: "bike", brand: "Yamaha", name: "Tenere 700 Extreme", year: 2024, price: 12499, priceStr: "$12,499", cat: "Adventure", power: 72, torque: 50, topSpeed: 118, zeroSixty: 4.9, weightLb: 452, specs: { Engine: "689cc Parallel Twin", Power: "72 HP", Torque: "50 lb-ft", Seat: "910 mm", Weight: "205 kg", "Top Speed": "118 mph", Tank: "16L", Electronics: "Off-road ABS" }, variants: [{ n: "Tenere 700", p: "$10,799" }, { n: "Extreme", p: "$12,499" }], col: "#24314d" },
  { id: 64, type: "bike", brand: "BMW", name: "M 1000 RR", year: 2025, price: 37995, priceStr: "$37,995", cat: "Homologation Superbike", power: 212, torque: 83, topSpeed: 195, zeroSixty: 2.5, weightLb: 423, specs: { Engine: "999cc ShiftCam I4", Power: "212 HP", Torque: "83 lb-ft", Seat: "832 mm", Weight: "192 kg", "0-60": "2.5s", "Top Speed": "195 mph", Electronics: "Race ABS Pro" }, variants: [{ n: "M 1000 RR", p: "$37,995" }], col: "#1c2740" },
  { id: 65, type: "bike", brand: "Aprilia", name: "Tuono V4 Factory", year: 2024, price: 19999, priceStr: "$19,999", cat: "Hyper Naked", power: 175, torque: 89, topSpeed: 167, zeroSixty: 2.8, weightLb: 463, specs: { Engine: "1099cc V4", Power: "175 HP", Torque: "89 lb-ft", Seat: "825 mm", Weight: "210 kg", "0-60": "2.8s", "Top Speed": "167 mph", Electronics: "APRC + Semi-active Ohlins" }, variants: [{ n: "Tuono V4", p: "$16,999" }, { n: "Factory", p: "$19,999" }], col: "#31213a" },
  { id: 66, type: "bike", brand: "Suzuki", name: "GSX-8R", year: 2024, price: 9439, priceStr: "$9,439", cat: "Middleweight Sport", power: 82, torque: 58, topSpeed: 137, zeroSixty: 4.1, weightLb: 452, specs: { Engine: "776cc Parallel Twin", Power: "82 HP", Torque: "58 lb-ft", Seat: "810 mm", Weight: "205 kg", "Top Speed": "137 mph", Tank: "14L", Electronics: "Ride-by-wire + Quickshifter" }, variants: [{ n: "GSX-8R", p: "$9,439" }], col: "#203245" },
  { id: 67, type: "bike", brand: "LiveWire", name: "S2 Del Mar", year: 2024, price: 15999, priceStr: "$15,999", cat: "Electric Street Tracker", power: 84, torque: 194, topSpeed: 103, zeroSixty: 3.1, weightLb: 431, specs: { Engine: "Electric Drive Unit", Power: "84 HP", Torque: "194 lb-ft", Seat: "768 mm", Weight: "196 kg", "0-60": "3.1s", "Top Speed": "103 mph", Range: "113 mi" }, variants: [{ n: "S2 Del Mar", p: "$15,999" }], col: "#263042" },
  { id: 79, type: "vn", brand: "Honda", name: "ADV 160", year: 2024, price: 2200, priceStr: "~56tr VND", cat: "Adventure Scooter", power: 15.8, torque: 14.7, topSpeed: 118, zeroSixty: 10.8, weightLb: 294, specs: { Engine: "157cc eSP+ SOHC", Power: "15.8 HP", Torque: "14.7 Nm", Seat: "780 mm", Weight: "133 kg", "Top Speed": "118 km/h", Tank: "8.1L", Fuel: "~2.1L/100km" }, variants: [{ n: "ADV 160 ABS", p: "~56tr" }], col: "#223145" },
  { id: 80, type: "vn", brand: "Suzuki", name: "Raider R150", year: 2024, price: 2050, priceStr: "~51tr VND", cat: "Underbone Sport", power: 18.2, torque: 13.8, topSpeed: 135, zeroSixty: 9.2, weightLb: 254, specs: { Engine: "147cc DOHC", Power: "18.2 HP", Torque: "13.8 Nm", Seat: "765 mm", Weight: "115 kg", "Top Speed": "135 km/h", Tank: "4L", Fuel: "~2.3L/100km" }, variants: [{ n: "Raider R150", p: "~51tr" }], col: "#2e1d1c" },
  { id: 81, type: "vn", brand: "VinFast", name: "Feliz S", year: 2024, price: 1550, priceStr: "~39tr VND", cat: "Electric Scooter", power: 8.5, torque: 30, topSpeed: 78, zeroSixty: 15, weightLb: 265, specs: { Engine: "Electric Hub Motor", Power: "8.5 HP", Torque: "30 Nm", Seat: "770 mm", Weight: "120 kg", "Top Speed": "78 km/h", Range: "198 km" }, variants: [{ n: "Feliz S", p: "~39tr" }], col: "#1b2d41" },
  { id: 82, type: "vn", brand: "Honda", name: "SH 350i", year: 2024, price: 5900, priceStr: "~151tr VND", cat: "Premium Maxi Scooter", power: 28.8, torque: 31.5, topSpeed: 145, zeroSixty: 7.2, weightLb: 381, specs: { Engine: "330cc eSP+ SOHC", Power: "28.8 HP", Torque: "31.5 Nm", Seat: "805 mm", Weight: "173 kg", "Top Speed": "145 km/h", Tank: "9.1L", Fuel: "~3.0L/100km" }, variants: [{ n: "SH 350i ABS", p: "~151tr" }], col: "#243447" },
  { id: 83, type: "vn", brand: "Yamaha", name: "PG-1", year: 2024, price: 1200, priceStr: "~31tr VND", cat: "Urban Scrambler", power: 8.8, torque: 9.5, topSpeed: 95, zeroSixty: 13.8, weightLb: 238, specs: { Engine: "113cc SOHC", Power: "8.8 HP", Torque: "9.5 Nm", Seat: "795 mm", Weight: "108 kg", "Top Speed": "95 km/h", Tank: "5.1L", Fuel: "~1.7L/100km" }, variants: [{ n: "PG-1", p: "~31tr" }], col: "#3a2a17" },
  { id: 84, type: "vn", brand: "VinFast", name: "Klara S2", year: 2024, price: 1450, priceStr: "~37tr VND", cat: "Electric Scooter", power: 8, torque: 28, topSpeed: 78, zeroSixty: 15.4, weightLb: 262, specs: { Engine: "Electric Hub Motor", Power: "8.0 HP", Torque: "28 Nm", Seat: "760 mm", Weight: "119 kg", "Top Speed": "78 km/h", Range: "194 km" }, variants: [{ n: "Klara S2", p: "~37tr" }], col: "#202e3e" }
);

SEED_VEHICLES.push(
  { id: 85, type: "car", brand: "Audi", name: "S3 Sedan", year: 2025, price: 49995, priceStr: "$49,995", cat: "Sport Sedan", power: 328, torque: 295, topSpeed: 155, zeroSixty: 4.4, weightLb: 3494, specs: { Engine: "2.0L Turbo I4", Power: "328 HP", Torque: "295 lb-ft", Drivetrain: "AWD", Trans: "7-spd S tronic", "0-60": "4.4s", "Top Speed": "155 mph", Weight: "3,494 lbs" }, variants: [{ n: "Premium", p: "$49,995" }, { n: "Premium Plus", p: "$53,495" }, { n: "Prestige", p: "$57,995" }], col: "#203047" },
  { id: 86, type: "car", brand: "Audi", name: "RS 3 Sedan", year: 2025, price: 63395, priceStr: "$63,395", cat: "Compact Super Sedan", power: 401, torque: 369, topSpeed: 180, zeroSixty: 3.6, weightLb: 3649, specs: { Engine: "2.5L Turbo I5", Power: "401 HP", Torque: "369 lb-ft", Drivetrain: "AWD", Trans: "7-spd S tronic", "0-60": "3.6s", "Top Speed": "180 mph", Weight: "3,649 lbs" }, variants: [{ n: "RS 3", p: "$63,395" }, { n: "Carbon Package", p: "$68,000+" }, { n: "Dynamic Plus", p: "$70,000+" }], col: "#1d263e" },
  { id: 87, type: "car", brand: "Audi", name: "S5 Sportback", year: 2025, price: 63400, priceStr: "$63,400", cat: "Sportback", power: 362, torque: 406, topSpeed: 155, zeroSixty: 4.3, weightLb: 4178, specs: { Engine: "3.0L Turbo V6 Mild Hybrid", Power: "362 HP", Torque: "406 lb-ft", Drivetrain: "AWD", Trans: "8-spd Tiptronic", "0-60": "4.3s", "Top Speed": "155 mph", Weight: "4,178 lbs" }, variants: [{ n: "Premium Plus", p: "$63,400" }, { n: "Prestige", p: "$69,900" }, { n: "Black Optic", p: "$72,000+" }], col: "#243a4d" },
  { id: 88, type: "car", brand: "Audi", name: "RS 5 Competition", year: 2024, price: 94500, priceStr: "$94,500", cat: "Grand Coupe", power: 444, torque: 442, topSpeed: 180, zeroSixty: 3.7, weightLb: 4035, specs: { Engine: "2.9L TT V6", Power: "444 HP", Torque: "442 lb-ft", Drivetrain: "AWD", Trans: "8-spd Tiptronic", "0-60": "3.7s", "Top Speed": "180 mph", Weight: "4,035 lbs" }, variants: [{ n: "Coupe", p: "$79,900" }, { n: "Sportback", p: "$81,400" }, { n: "Competition", p: "$94,500" }], col: "#202b40" },
  { id: 89, type: "car", brand: "Audi", name: "RS 6 Avant Performance", year: 2025, price: 126600, priceStr: "$126,600", cat: "Performance Wagon", power: 621, torque: 627, topSpeed: 174, zeroSixty: 3.3, weightLb: 4938, specs: { Engine: "4.0L TT V8 Mild Hybrid", Power: "621 HP", Torque: "627 lb-ft", Drivetrain: "AWD", Trans: "8-spd Tiptronic", "0-60": "3.3s", "Top Speed": "174 mph", Weight: "4,938 lbs" }, variants: [{ n: "RS 6 Avant", p: "$125,800" }, { n: "Performance", p: "$126,600" }, { n: "GT", p: "$194,000+" }], col: "#25354a" },
  { id: 90, type: "car", brand: "Audi", name: "RS 7 Performance", year: 2025, price: 130000, priceStr: "$130,000", cat: "Super Sedan", power: 621, torque: 627, topSpeed: 190, zeroSixty: 3.3, weightLb: 4949, specs: { Engine: "4.0L TT V8 Mild Hybrid", Power: "621 HP", Torque: "627 lb-ft", Drivetrain: "AWD", Trans: "8-spd Tiptronic", "0-60": "3.3s", "Top Speed": "190 mph", Weight: "4,949 lbs" }, variants: [{ n: "RS 7", p: "$126,900" }, { n: "Performance", p: "$130,000" }, { n: "Carbon Vorsprung", p: "$137,000+" }], col: "#223047" },
  { id: 91, type: "car", brand: "Audi", name: "S8", year: 2025, price: 124500, priceStr: "$124,500", cat: "Luxury Super Sedan", power: 563, torque: 590, topSpeed: 155, zeroSixty: 3.8, weightLb: 5104, specs: { Engine: "4.0L TT V8 Mild Hybrid", Power: "563 HP", Torque: "590 lb-ft", Drivetrain: "AWD", Trans: "8-spd Tiptronic", "0-60": "3.8s", "Top Speed": "155 mph", Weight: "5,104 lbs" }, variants: [{ n: "S8", p: "$124,500" }, { n: "Executive", p: "$129,000+" }, { n: "Black Optic", p: "$131,000+" }], col: "#273650" },
  { id: 92, type: "car", brand: "Audi", name: "Q6 e-tron Quattro", year: 2025, price: 65700, priceStr: "$65,700", cat: "Electric SUV", power: 456, torque: 630, topSpeed: 130, zeroSixty: 4.9, weightLb: 5236, specs: { Engine: "Dual-Motor EV", Power: "456 HP", Torque: "630 lb-ft", Drivetrain: "AWD", Trans: "Single-speed", "0-60": "4.9s", "Top Speed": "130 mph", Weight: "5,236 lbs", Range: "307 mi" }, variants: [{ n: "Premium", p: "$65,700" }, { n: "Premium Plus", p: "$71,200" }, { n: "Prestige", p: "$76,900" }], col: "#28405b" },
  { id: 93, type: "car", brand: "Audi", name: "SQ8 e-tron", year: 2024, price: 89995, priceStr: "$89,995", cat: "Electric Performance SUV", power: 496, torque: 718, topSpeed: 130, zeroSixty: 4.3, weightLb: 5988, specs: { Engine: "Tri-Motor EV", Power: "496 HP", Torque: "718 lb-ft", Drivetrain: "AWD", Trans: "Single-speed", "0-60": "4.3s", "Top Speed": "130 mph", Weight: "5,988 lbs", Range: "253 mi" }, variants: [{ n: "Premium Plus", p: "$89,995" }, { n: "Prestige", p: "$95,500" }, { n: "Sportback", p: "$97,000+" }], col: "#283c54" },
  { id: 94, type: "car", brand: "Audi", name: "RS Q8 Performance", year: 2025, price: 136200, priceStr: "$136,200", cat: "Hyper SUV", power: 631, torque: 627, topSpeed: 190, zeroSixty: 3.4, weightLb: 5380, specs: { Engine: "4.0L TT V8 Mild Hybrid", Power: "631 HP", Torque: "627 lb-ft", Drivetrain: "AWD", Trans: "8-spd Tiptronic", "0-60": "3.4s", "Top Speed": "190 mph", Weight: "5,380 lbs" }, variants: [{ n: "RS Q8", p: "$126,600" }, { n: "Performance", p: "$136,200" }, { n: "Carbon Package", p: "$142,000+" }], col: "#2a3548" },
  { id: 95, type: "car", brand: "Audi", name: "RS 4 Avant Competition", year: 2024, price: 93500, priceStr: "$93,500", cat: "Super Wagon", power: 444, torque: 442, topSpeed: 180, zeroSixty: 3.8, weightLb: 3990, specs: { Engine: "2.9L TT V6", Power: "444 HP", Torque: "442 lb-ft", Drivetrain: "AWD", Trans: "8-spd Tiptronic", "0-60": "3.8s", "Top Speed": "180 mph", Weight: "3,990 lbs" }, variants: [{ n: "RS 4 Avant", p: "$86,000+" }, { n: "Competition", p: "$93,500" }, { n: "Carbon Black", p: "$96,000+" }], col: "#1f2a3d" },
  { id: 96, type: "car", brand: "Audi", name: "TT RS Heritage Edition", year: 2022, price: 81600, priceStr: "$81,600", cat: "Compact Coupe", power: 394, torque: 354, topSpeed: 174, zeroSixty: 3.6, weightLb: 3248, specs: { Engine: "2.5L Turbo I5", Power: "394 HP", Torque: "354 lb-ft", Drivetrain: "AWD", Trans: "7-spd S tronic", "0-60": "3.6s", "Top Speed": "174 mph", Weight: "3,248 lbs" }, variants: [{ n: "TT RS", p: "$73,200" }, { n: "Heritage Edition", p: "$81,600" }], col: "#1b2537" },
  { id: 97, type: "car", brand: "Audi", name: "A6 e-tron Performance", year: 2025, price: 75900, priceStr: "$75,900", cat: "Electric Sportback", power: 456, torque: 630, topSpeed: 130, zeroSixty: 4.5, weightLb: 5070, specs: { Engine: "Dual-Motor EV", Power: "456 HP", Torque: "630 lb-ft", Drivetrain: "AWD", Trans: "Single-speed", "0-60": "4.5s", "Top Speed": "130 mph", Weight: "5,070 lbs", Range: "392 mi" }, variants: [{ n: "Performance", p: "$75,900" }, { n: "quattro", p: "$79,900" }, { n: "Prestige", p: "$84,500+" }], col: "#2a4156" },
  { id: 98, type: "car", brand: "Mercedes", name: "A 45 S 4MATIC+", year: 2024, price: 61000, priceStr: "$61,000", cat: "Hyper Hatch", power: 416, torque: 369, topSpeed: 168, zeroSixty: 3.9, weightLb: 3439, specs: { Engine: "2.0L Turbo I4", Power: "416 HP", Torque: "369 lb-ft", Drivetrain: "AWD", Trans: "8-spd DCT", "0-60": "3.9s", "Top Speed": "168 mph", Weight: "3,439 lbs" }, variants: [{ n: "A 35", p: "$49,000+" }, { n: "A 45 S", p: "$61,000" }, { n: "Edition 1", p: "$66,000+" }], col: "#262833" },
  { id: 99, type: "car", brand: "Mercedes", name: "CLA 45 S 4MATIC+", year: 2024, price: 68400, priceStr: "$68,400", cat: "Compact AMG Coupe", power: 416, torque: 369, topSpeed: 168, zeroSixty: 4.0, weightLb: 3650, specs: { Engine: "2.0L Turbo I4", Power: "416 HP", Torque: "369 lb-ft", Drivetrain: "AWD", Trans: "8-spd DCT", "0-60": "4.0s", "Top Speed": "168 mph", Weight: "3,650 lbs" }, variants: [{ n: "CLA 35", p: "$57,000+" }, { n: "CLA 45 S", p: "$68,400" }, { n: "Night Package", p: "$71,000+" }], col: "#2a2b37" },
  { id: 100, type: "car", brand: "Mercedes", name: "CLE 53 Coupe", year: 2025, price: 74400, priceStr: "$74,400", cat: "Luxury Performance Coupe", power: 443, torque: 413, topSpeed: 155, zeroSixty: 4.0, weightLb: 4233, specs: { Engine: "3.0L Turbo I6 Mild Hybrid", Power: "443 HP", Torque: "413 lb-ft", Drivetrain: "AWD", Trans: "9-spd AMG Speedshift", "0-60": "4.0s", "Top Speed": "155 mph", Weight: "4,233 lbs" }, variants: [{ n: "Coupe", p: "$74,400" }, { n: "Cabriolet", p: "$82,000+" }, { n: "Pinnacle", p: "$86,000+" }], col: "#34333f" },
  { id: 101, type: "car", brand: "Mercedes", name: "C 63 S E Performance", year: 2025, price: 87050, priceStr: "$87,050", cat: "Hybrid Super Sedan", power: 671, torque: 752, topSpeed: 174, zeroSixty: 3.3, weightLb: 4650, specs: { Engine: "2.0L Turbo I4 Hybrid", Power: "671 HP", Torque: "752 lb-ft", Drivetrain: "AWD", Trans: "9-spd AMG Speedshift", "0-60": "3.3s", "Top Speed": "174 mph", Weight: "4,650 lbs" }, variants: [{ n: "C 43", p: "$61,250" }, { n: "C 63 S E Performance", p: "$87,050" }, { n: "Edition 1", p: "$94,000+" }], col: "#323542" },
  { id: 102, type: "car", brand: "Mercedes", name: "E 53 Hybrid 4MATIC+", year: 2025, price: 88950, priceStr: "$88,950", cat: "Executive Hybrid Sedan", power: 577, torque: 553, topSpeed: 155, zeroSixty: 3.7, weightLb: 4850, specs: { Engine: "3.0L Turbo I6 Hybrid", Power: "577 HP", Torque: "553 lb-ft", Drivetrain: "AWD", Trans: "9-spd AMG Speedshift", "0-60": "3.7s", "Top Speed": "155 mph", Weight: "4,850 lbs" }, variants: [{ n: "Premium", p: "$88,950" }, { n: "Exclusive", p: "$93,000+" }, { n: "Pinnacle", p: "$97,000+" }], col: "#373847" },
  { id: 103, type: "car", brand: "Mercedes", name: "AMG GT 55 Coupe", year: 2025, price: 136050, priceStr: "$136,050", cat: "Grand Tourer", power: 469, torque: 516, topSpeed: 183, zeroSixty: 3.8, weightLb: 4343, specs: { Engine: "4.0L Biturbo V8", Power: "469 HP", Torque: "516 lb-ft", Drivetrain: "AWD", Trans: "9-spd AMG Speedshift", "0-60": "3.8s", "Top Speed": "183 mph", Weight: "4,343 lbs" }, variants: [{ n: "GT 43", p: "$99,950" }, { n: "GT 55", p: "$136,050" }, { n: "GT 63 Pro", p: "$190,000+" }], col: "#2c2c36" },
  { id: 104, type: "car", brand: "Mercedes", name: "S 63 E Performance", year: 2025, price: 186200, priceStr: "$186,200", cat: "Ultra Luxury Hyper Sedan", power: 791, torque: 1055, topSpeed: 180, zeroSixty: 3.2, weightLb: 5644, specs: { Engine: "4.0L Biturbo V8 Hybrid", Power: "791 HP", Torque: "1,055 lb-ft", Drivetrain: "AWD", Trans: "9-spd AMG Speedshift", "0-60": "3.2s", "Top Speed": "180 mph", Weight: "5,644 lbs" }, variants: [{ n: "S 580", p: "$128,600" }, { n: "S 63 E Performance", p: "$186,200" }, { n: "Manufaktur", p: "$195,000+" }], col: "#383845" },
  { id: 105, type: "car", brand: "Mercedes", name: "SL 63 Roadster", year: 2025, price: 188050, priceStr: "$188,050", cat: "Luxury Roadster", power: 577, torque: 590, topSpeed: 196, zeroSixty: 3.5, weightLb: 4300, specs: { Engine: "4.0L Biturbo V8", Power: "577 HP", Torque: "590 lb-ft", Drivetrain: "AWD", Trans: "9-spd AMG Speedshift", "0-60": "3.5s", "Top Speed": "196 mph", Weight: "4,300 lbs" }, variants: [{ n: "SL 43", p: "$111,100" }, { n: "SL 55", p: "$145,000+" }, { n: "SL 63", p: "$188,050" }], col: "#3b3944" },
  { id: 106, type: "car", brand: "Mercedes", name: "G 63", year: 2025, price: 186100, priceStr: "$186,100", cat: "Luxury Performance SUV", power: 577, torque: 627, topSpeed: 149, zeroSixty: 4.2, weightLb: 5642, specs: { Engine: "4.0L Biturbo V8 Mild Hybrid", Power: "577 HP", Torque: "627 lb-ft", Drivetrain: "AWD", Trans: "9-spd Auto", "0-60": "4.2s", "Top Speed": "149 mph", Weight: "5,642 lbs" }, variants: [{ n: "G 550", p: "$148,250" }, { n: "G 63", p: "$186,100" }, { n: "Manufaktur", p: "$205,000+" }], col: "#35333d" },
  { id: 107, type: "car", brand: "Mercedes", name: "GLC 63 S E Performance", year: 2025, price: 86800, priceStr: "$86,800", cat: "Hybrid Performance SUV", power: 671, torque: 752, topSpeed: 171, zeroSixty: 3.4, weightLb: 5115, specs: { Engine: "2.0L Turbo I4 Hybrid", Power: "671 HP", Torque: "752 lb-ft", Drivetrain: "AWD", Trans: "9-spd AMG Speedshift", "0-60": "3.4s", "Top Speed": "171 mph", Weight: "5,115 lbs" }, variants: [{ n: "GLC 43", p: "$61,050" }, { n: "GLC 63 S E Performance", p: "$86,800" }, { n: "Coupe", p: "$89,900+" }], col: "#32333f" },
  { id: 108, type: "car", brand: "Mercedes", name: "GLE 63 S 4MATIC+", year: 2025, price: 130800, priceStr: "$130,800", cat: "Super SUV", power: 603, torque: 627, topSpeed: 174, zeroSixty: 3.7, weightLb: 5456, specs: { Engine: "4.0L Biturbo V8 Mild Hybrid", Power: "603 HP", Torque: "627 lb-ft", Drivetrain: "AWD", Trans: "9-spd AMG Speedshift", "0-60": "3.7s", "Top Speed": "174 mph", Weight: "5,456 lbs" }, variants: [{ n: "GLE 53", p: "$89,200" }, { n: "GLE 63 S", p: "$130,800" }, { n: "Coupe", p: "$135,000+" }], col: "#31333d" },
  { id: 109, type: "car", brand: "Mercedes", name: "EQS SUV 580 4MATIC", year: 2025, price: 105250, priceStr: "$105,250", cat: "Luxury Electric SUV", power: 536, torque: 633, topSpeed: 130, zeroSixty: 4.5, weightLb: 6173, specs: { Engine: "Dual-Motor EV", Power: "536 HP", Torque: "633 lb-ft", Drivetrain: "AWD", Trans: "Single-speed", "0-60": "4.5s", "Top Speed": "130 mph", Weight: "6,173 lbs", Range: "339 mi" }, variants: [{ n: "450+", p: "$105,250" }, { n: "580 4MATIC", p: "$125,100" }, { n: "Maybach EQS SUV", p: "$179,900+" }], col: "#314556" }
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
  buildCategoryIndex: 0,
  buildItemIndex: 0,
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
    showToast("Ready to install", "Use the Install app button to pin AutoMoto to your home screen.");
  });
  window.addEventListener("appinstalled", () => {
    state.installPrompt = null;
    syncInstallButton();
    showToast("App installed", "AutoMoto was added to your home screen.");
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
  refs.brandSel.innerHTML = ['<option value="">All brands</option>']
    .concat(brands.map((brand) => `<option value="${escapeAttr(brand)}">${escapeHtml(brand)}</option>`))
    .join("");
  refs.brandSel.value = brands.includes(currentBrand) ? currentBrand : "";
  state.filters.brand = refs.brandSel.value;

  const years = [...new Set(state.allVehicles.map((vehicle) => vehicle.year))].sort((a, b) => b - a);
  const yearOptions = ['<option value="">All years</option>']
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
  refs.compareToggle.textContent = state.compareMode ? "Compare mode on" : "Select for compare";
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
    refs.grid.innerHTML = '<div class="empty-state"><strong>No matching vehicles found.</strong><div>Try another keyword, loosen the filters, or add your own machine to My Garage.</div></div>';
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
          ${metricChip("Price", formatUsd(vehicle.priceUsd))}
          ${metricChip("Power", formatPower(vehicle))}
          ${metricChip("Top speed", formatTopSpeed(vehicle))}
        </div>
        <div class="hot-strip">
          <div class="hot-head">
            <span>Heat</span>
            <strong>${hotValue}%</strong>
          </div>
          <div class="bar"><span style="width:${hotValue}%"></span></div>
        </div>
        <div class="card-actions">
          <button class="chip-btn" type="button" data-open="${escapeAttr(vehicle.id)}">View details</button>
          <button class="ghost-btn" type="button" data-compare="${escapeAttr(vehicle.id)}">${inCompare ? "Selected" : "Compare"}</button>
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
    if (!vehicle) return '<div class="compare-slot">+ Add a vehicle to compare</div>';
    return `
      <div class="compare-slot filled">
        <strong>${escapeHtml(vehicle.brand)} ${escapeHtml(vehicle.name)}</strong>
        <span>${formatPower(vehicle)} / ${formatUsd(vehicle.priceUsd)}</span>
        <button class="ghost-btn" type="button" data-compare-remove="${escapeAttr(vehicle.id)}">Remove</button>
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

function openVehicleModal(vehicleId, preferredTab = "specs", options = {}) {
  const vehicle = findVehicleById(vehicleId);
  if (!vehicle) return;
  const { incrementView = true } = options;
  const previousVehicleId = state.currentVehicleId;
  state.currentVehicleId = String(vehicle.id);
  state.detailTab = preferredTab;
  if (hasBuildSheet(vehicle)) {
    if (previousVehicleId !== state.currentVehicleId) {
      state.buildCategoryIndex = 0;
      state.buildItemIndex = 0;
    }
    syncBuildSelection(vehicle);
  } else {
    state.buildCategoryIndex = 0;
    state.buildItemIndex = 0;
  }
  if (incrementView) incrementHot(vehicle);
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
            ${metricChip("Power", formatPower(vehicle))}
            ${metricChip("Top speed", formatTopSpeed(vehicle))}
            ${metricChip("Weight", formatWeight(vehicle))}
          </div>
          <div class="detail-actions">
            <button class="primary-btn" type="button" data-share-copy="${escapeAttr(vehicle.id)}">Copy link</button>
            <button class="chip-btn" type="button" data-compare="${escapeAttr(vehicle.id)}">${state.compareIds.includes(String(vehicle.id)) ? "Already selected" : "Add to compare"}</button>
            <button class="ghost-btn" type="button" data-fav="${escapeAttr(vehicle.id)}">${isFav ? "Remove favorite" : "Favorite"}</button>
          </div>
        </div>
      </div>
      <div class="detail-tabs">
        ${detailTabButton("specs", "Specs")}
        ${detailTabButton("performance", "Performance")}
        ${detailTabButton("photos", "Ảnh & video")}
        ${detailTabButton("reviews", "Review")}
        ${detailTabButton("share", "Share")}
        ${hasBuildSheet(vehicle) ? detailTabButton("build", "Độ xe") : ""}
        ${detailTabButton("variants", "Variants")}
      </div>
      <div class="detail-content">${renderVehicleTab(vehicle)}</div>
    </div>
  `;
}

function renderVehicleTab(vehicle) {
  if (state.detailTab === "build" && hasBuildSheet(vehicle)) return renderBuildTab(vehicle);
  if (state.detailTab === "performance") return renderPerformanceTab(vehicle);
  if (state.detailTab === "photos") return renderPhotosTab(vehicle);
  if (state.detailTab === "reviews") return renderReviewsTab(vehicle);
  if (state.detailTab === "share") return renderShareTab(vehicle);
  if (state.detailTab === "variants") return renderVariantsTab(vehicle);
  return renderSpecsTab(vehicle);
}

function renderSpecsTab(vehicle) {
  const rows = [
    ["Price", formatUsd(vehicle.priceUsd)],
    ["Power", formatPower(vehicle)],
    ["Torque", formatTorque(vehicle)],
    ["Top speed", formatTopSpeed(vehicle)],
    ["0-60", formatAccel(vehicle.zeroSixty)],
    ["Weight", formatWeight(vehicle)],
    ["Engine", vehicle.engineLabel],
    ["Engine type", vehicle.engineType]
  ];
  if (vehicle.specs.Drivetrain) rows.push(["Drivetrain", vehicle.specs.Drivetrain]);
  if (vehicle.specs.Trans) rows.push(["Transmission", vehicle.specs.Trans]);
  if (vehicle.seatM != null) rows.push(["Seat height", formatMeters(vehicle.seatM)]);
  if (vehicle.tankL != null) rows.push(["Fuel tank", formatLiters(vehicle.tankL)]);
  if (vehicle.rangeKm != null) rows.push(["Range", formatRange(vehicle.rangeKm)]);
  if (vehicle.fuelUseL != null) rows.push(["Consumption", formatFuelUse(vehicle.fuelUseL)]);
  if (vehicle.specs.Electronics) rows.push(["Electronics", vehicle.specs.Electronics]);
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
  const photos = Array.isArray(vehicle.photoUrls) ? vehicle.photoUrls.filter(Boolean) : [vehicle.imageUrl].filter(Boolean);
  const videos = Array.isArray(vehicle.videoUrls) ? vehicle.videoUrls.filter(Boolean) : [];
  if (!photos.length && !videos.length) return '<div class="empty-state"><strong>No images or videos yet.</strong><div>Add your own machine with photo URLs or local media to populate this gallery.</div></div>';
  return `
    <div class="media-gallery">
      <div class="media-gallery-head">
        <div>
          <strong>${escapeHtml(vehicle.name)} media</strong>
          <div>${videos.length ? "Bộ ảnh chi tiết và video walkaround cho xe này." : "Bộ ảnh chi tiết cho xe này."}</div>
        </div>
        <div class="media-gallery-stats">
          ${videos.length ? `<span class="media-count">${videos.length} video</span>` : ""}
          ${photos.length ? `<span class="media-count">${photos.length} ảnh</span>` : ""}
        </div>
      </div>
      ${videos.length ? `<div class="media-video-grid">${videos.map((url, index) => `
        <figure class="media-video-card">
          <video controls preload="metadata" playsinline poster="${escapeAttr(photos[0] || "")}">
            <source src="${escapeAttr(url)}" type="video/mp4">
          </video>
          <figcaption>
            <strong>${index === 0 ? "Video chính" : `Video ${index + 1}`}</strong>
            <span>MP4 local clip</span>
          </figcaption>
        </figure>
      `).join("")}</div>` : ""}
      ${photos.length ? `<div class="photo-grid">${photos.map((url, index) => `
        <figure>
          <img src="${escapeAttr(url)}" alt="${escapeAttr(`${vehicle.name} ${index + 1}`)}" loading="lazy">
          <figcaption>${index === 0 ? "Ảnh chính" : `Góc chụp ${index + 1}`}</figcaption>
        </figure>
      `).join("")}</div>` : ""}
    </div>
  `;
}

function renderReviewsTab(vehicle) {
  const reviews = getReviews(vehicle.id);
  return `
    <div class="review-list">
      ${reviews.length ? reviews.map((review) => `<div class="review-item"><strong>${escapeHtml(review.author || "You")}</strong><div>${escapeHtml(review.text)}</div><div class="review-meta">${escapeHtml(formatDateTime(review.ts))}</div></div>`).join("") : '<div class="review-empty">No local reviews yet. Write a short take and it will stay on this device.</div>'}
    </div>
    <form class="review-form" data-review-form="${escapeAttr(vehicle.id)}">
      <textarea name="reviewText" rows="4" maxlength="280" placeholder="Write a short impression of this vehicle..."></textarea>
      <button class="primary-btn" type="submit">Save review</button>
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
            <span>Shareable link</span>
            <input type="text" readonly value="${escapeAttr(link)}">
          </label>
          <div class="share-actions">
            <button class="primary-btn" type="button" data-share-copy="${escapeAttr(vehicle.id)}">Copy link</button>
            <button class="chip-btn" type="button" data-native-share="${escapeAttr(vehicle.id)}">Share</button>
          </div>
          <div class="review-meta">Anyone opening this URL inside the app will jump straight into this vehicle modal.</div>
        </div>
      </div>
      <div class="share-qr">
        <div class="qr-frame">${navigator.onLine ? `<img src="${escapeAttr(qrSrc)}" alt="QR ${escapeAttr(vehicle.name)}" loading="lazy">` : '<div class="review-empty">You are offline, so the live QR image is unavailable. The share link still works.</div>'}</div>
      </div>
    </div>
  `;
}

function renderVariantsTab(vehicle) {
  if (!vehicle.variants.length) return '<div class="empty-state"><strong>No variants available.</strong><div>This entry currently uses a single default configuration.</div></div>';
  return `<div class="variant-list">${vehicle.variants.map((variant) => `<div class="variant-item"><div><strong>${escapeHtml(variant.n)}</strong><div>${escapeHtml(vehicle.brand)} ${escapeHtml(vehicle.name)}</div></div><div>${variant.priceUsd != null ? formatUsd(variant.priceUsd) : escapeHtml(variant.p)}</div></div>`).join("")}</div>`;
}

function hasBuildSheet(vehicle) {
  return Array.isArray(vehicle.buildCategories) && vehicle.buildCategories.length > 0;
}

function syncBuildSelection(vehicle) {
  const categories = vehicle.buildCategories || [];
  if (!categories.length) {
    state.buildCategoryIndex = 0;
    state.buildItemIndex = 0;
    return;
  }
  state.buildCategoryIndex = clamp(Number(state.buildCategoryIndex) || 0, 0, categories.length - 1);
  const items = categories[state.buildCategoryIndex]?.items || [];
  state.buildItemIndex = clamp(Number(state.buildItemIndex) || 0, 0, Math.max(items.length - 1, 0));
}

function activeBuildSelection(vehicle) {
  syncBuildSelection(vehicle);
  const categories = vehicle.buildCategories || [];
  const category = categories[state.buildCategoryIndex] || { title: "", items: [] };
  const item = category.items[state.buildItemIndex] || null;
  return { categories, category, item };
}

function buildCategoryLabel(title) {
  return String(title || "").replace(/^[IVXLCDM]+\.\s*/i, "").trim();
}

function buildItemStatus(item) {
  const source = normalizeText(item.source || "");
  const price = normalizeText(item.price || "");
  if (source.includes("khong tim thay")) return "Research";
  if (price.includes("chua ro") || price.includes("lien he")) return "Lookup";
  return "Ready";
}

function renderBuildTab(vehicle) {
  const { categories, category, item } = activeBuildSelection(vehicle);
  if (!categories.length || !item) {
    return '<div class="empty-state"><strong>Chưa có danh sách độ xe.</strong><div>Entry này hiện chưa có build sheet riêng.</div></div>';
  }
  const totalItems = categories.reduce((sum, category) => sum + category.items.length, 0);
  const selectedStatus = buildItemStatus(item);
  const categoryTitle = buildCategoryLabel(category.title);
  return `
    <div class="build-shop">
      <div class="build-shop-header">
        <div class="build-shop-badge">Upgrade Shop</div>
        <div class="build-shop-vehicle">
          <span class="build-shop-brand">${escapeHtml(vehicle.brand)}</span>
          <strong>${escapeHtml(vehicle.name)}</strong>
          <span>${vehicle.year} / ${escapeHtml(vehicle.cat)}</span>
        </div>
        <div class="build-shop-stats">
          <div class="build-shop-stat">
            <span>Stock</span>
            <strong>${escapeHtml(vehicle.priceStr || formatUsd(vehicle.priceUsd))}</strong>
          </div>
          <div class="build-shop-stat">
            <span>Power</span>
            <strong>${escapeHtml(formatPower(vehicle))}</strong>
          </div>
          <div class="build-shop-stat">
            <span>Groups</span>
            <strong>${categories.length}</strong>
          </div>
          <div class="build-shop-stat">
            <span>Parts</span>
            <strong>${totalItems}</strong>
          </div>
        </div>
      </div>
      <div class="build-shop-nav">${categories.map((entry, index) => `
        <button class="build-nav-tab ${index === state.buildCategoryIndex ? "active" : ""}" type="button" data-build-category="${index}">
          ${escapeHtml(buildCategoryLabel(entry.title))}
        </button>
      `).join("")}</div>
      <div class="build-workbench">
        <aside class="build-panel build-part-list">
          <div class="build-panel-head">
            <span class="build-panel-kicker">Category</span>
            <strong>${escapeHtml(categoryTitle)}</strong>
            ${category.note ? `<div class="build-panel-note">${escapeHtml(category.note)}</div>` : ""}
          </div>
          <div class="build-part-rows">${category.items.map((entry, index) => `
            <button class="build-part-row ${index === state.buildItemIndex ? "active" : ""}" type="button" data-build-item="${index}">
              <div>
                <strong>${escapeHtml(entry.name)}</strong>
                <div class="build-part-sub">${escapeHtml(entry.brand || "Aftermarket")} ${entry.sku && entry.sku !== "–" ? `• ${escapeHtml(entry.sku)}` : ""}</div>
              </div>
              <div class="build-part-meta">
                <span class="build-part-status">${escapeHtml(buildItemStatus(entry))}</span>
                <span class="build-part-price">${escapeHtml(entry.price || "Chưa rõ")}</span>
              </div>
            </button>
          `).join("")}</div>
        </aside>
        <section class="build-stage-panel">
          <div class="build-stage">
            <div class="build-stage-copy">
              <span class="build-panel-kicker">Selected Upgrade</span>
              <h3>${escapeHtml(item.name)}</h3>
              <div class="build-stage-note">${escapeHtml(item.fitment || item.desc || category.note || "Exciter 155 performance and styling upgrade.")}</div>
            </div>
            <div class="build-stage-visual">
              ${renderMedia(vehicle)}
            </div>
          </div>
          <div class="build-stage-strip">${category.items.map((entry, index) => `
            <button class="build-stage-chip ${index === state.buildItemIndex ? "active" : ""}" type="button" data-build-item="${index}">
              <span>${String(index + 1).padStart(2, "0")}</span>
              <strong>${escapeHtml((entry.brand || "Part").split(" ")[0])}</strong>
            </button>
          `).join("")}</div>
        </section>
        <aside class="build-panel build-detail-panel">
          <div class="build-panel-head">
            <span class="build-panel-kicker">Detail</span>
            <strong>${escapeHtml(item.name)}</strong>
          </div>
          <div class="build-detail-price">${escapeHtml(item.price || "Chưa rõ")}</div>
          <div class="build-detail-status">${escapeHtml(selectedStatus)}</div>
          <p class="build-detail-desc">${escapeHtml(item.desc || "Chưa có mô tả chi tiết.")}</p>
          <div class="build-detail-grid">
            <div class="build-detail-row">
              <span>Brand</span>
              <strong>${escapeHtml(item.brand || "–")}</strong>
            </div>
            <div class="build-detail-row">
              <span>SKU</span>
              <strong>${escapeHtml(item.sku || "–")}</strong>
            </div>
            <div class="build-detail-row">
              <span>Lắp cho</span>
              <strong>${escapeHtml(item.fitment || "–")}</strong>
            </div>
            <div class="build-detail-row">
              <span>Nguồn</span>
              <strong>${escapeHtml(item.source || "Đã nhập tay")}</strong>
            </div>
          </div>
        </aside>
      </div>
      <div class="build-shop-footer">
        <span>${escapeHtml(vehicle.brand)} ${escapeHtml(vehicle.name)} / ${escapeHtml(categoryTitle)}</span>
        <span>${state.buildItemIndex + 1} / ${category.items.length}</span>
      </div>
    </div>
  `;
}

function openCompareModal() {
  const vehicles = state.compareIds.map(findVehicleById).filter(Boolean);
  if (vehicles.length < 2) {
    showToast("Need more vehicles", "Pick at least two vehicles before opening compare.");
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
        <button class="primary-btn" type="button" data-export-json="1">Export JSON</button>
        <button class="chip-btn" type="button" data-print-compare="1">Print / PDF</button>
      </div>
    </div>
    <div class="compare-table-wrap">
      <table class="compare-table">
        <thead><tr><th>Spec</th>${vehicles.map((vehicle) => `<th>${escapeHtml(vehicle.brand)}<br><strong>${escapeHtml(vehicle.name)}</strong></th>`).join("")}</tr></thead>
        <tbody>${rows.map(([label, getter]) => `<tr><td>${escapeHtml(label)}</td>${vehicles.map((vehicle) => `<td>${escapeHtml(getter(vehicle))}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    </div>
  `;
}

function renderAiChat() {
  refs.aiChat.innerHTML = state.aiMessages.map((message) => `<div class="ai-bubble ${message.role}"><span class="ai-role">${message.role === "user" ? "You" : "Mini AI"}</span><div>${message.html}</div></div>`).join("");
  refs.aiChat.scrollTop = refs.aiChat.scrollHeight;
}

function seedAiMessages() {
  state.aiMessages = [{
    role: "assistant",
    html: '<div class="ai-help">Mini AI answers from the local garage data only, with no external API.</div><div class="ai-suggestion"><div class="ai-result"><strong>Try this</strong><div>What is the most powerful vehicle under $50,000?</div></div><div class="ai-result"><strong>Or this</strong><div>Compare Exciter vs Winner X</div></div></div>'
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
  if ((/most powerful|highest power|strongest|manh nhat|cong suat cao nhat/.test(query)) && /(under|below|less than|duoi|nho hon)/.test(query)) {
    const budget = parseBudgetFromQuery(query);
    if (budget != null) {
      const result = allVehicles.filter((vehicle) => vehicle.priceUsd <= budget).sort((a, b) => sortNumbers(b.powerHp, a.powerHp))[0];
      if (result) return buildSingleVehicleAnswer(`Most powerful under ${formatUsd(budget)}`, result, `It makes ${formatPower(result)} and is listed at ${formatUsd(result.priceUsd)}.`);
      return `<div>No vehicle is currently listed below ${formatUsd(budget)} in this dataset.</div>`;
    }
  }
  if (/fastest|highest top speed|nhanh nhat/.test(query)) {
    const result = [...allVehicles].sort((a, b) => sortNumbers(b.topSpeedKph, a.topSpeedKph))[0];
    return buildSingleVehicleAnswer("Fastest vehicle", result, `${result.name} tops out at ${formatTopSpeed(result)} with ${formatPower(result)} on tap.`);
  }
  if (/cheapest|lowest price|re nhat|gia thap nhat/.test(query)) {
    const result = [...allVehicles].sort((a, b) => sortNumbers(a.priceUsd, b.priceUsd))[0];
    return buildSingleVehicleAnswer("Cheapest vehicle", result, `It starts at ${formatUsd(result.priceUsd)} and currently sets the floor for the catalog.`);
  }
  if (/hottest|most popular|hot nhat|noi bat nhat/.test(query)) {
    const result = [...allVehicles].sort((a, b) => sortNumbers(hotScore(b), hotScore(a)))[0];
    return buildSingleVehicleAnswer("Hottest vehicle", result, `Its heat score is ${Math.round(normalizeHotScore(result) * 100)}%, based on favorites and detail views.`);
  }
  const matches = allVehicles.filter((vehicle) => normalizeText(`${vehicle.brand} ${vehicle.name} ${vehicle.cat}`).includes(query)).slice(0, 3);
  if (matches.length) return `<div>I found ${matches.length} related vehicles:</div><div class="ai-suggestion">${matches.map((vehicle) => aiResultCard(vehicle)).join("")}</div>`;
  return '<div>Mini AI works best with prompts like these:</div><div class="ai-suggestion"><div class="ai-result"><strong>Find by budget</strong><div>What is the most powerful vehicle under $50,000?</div></div><div class="ai-result"><strong>Compare two entries</strong><div>Compare Exciter vs Winner X</div></div><div class="ai-result"><strong>Quick discovery</strong><div>Fastest vehicle / Cheapest vehicle / Hottest vehicle</div></div></div>';
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
        <div>More power: ${escapeHtml(stronger.name)} (${formatPower(stronger)})</div>
        <div>Faster: ${escapeHtml(faster.name)} (${formatTopSpeed(faster)})</div>
        <div>Cheaper: ${escapeHtml(cheaper.name)} (${formatUsd(cheaper.priceUsd)})</div>
        <div class="ai-inline-actions">
          <button class="chip-btn" type="button" data-ai-open="${escapeAttr(first.id)}">View ${escapeHtml(first.name)}</button>
          <button class="chip-btn" type="button" data-ai-open="${escapeAttr(second.id)}">View ${escapeHtml(second.name)}</button>
          <button class="primary-btn" type="button" data-ai-compare="${escapeAttr(first.id)},${escapeAttr(second.id)}">Open compare</button>
        </div>
      </div>
    </div>
  `;
}

function aiResultCard(vehicle, note = "") {
  return `<div class="ai-result"><strong>${escapeHtml(vehicle.brand)} ${escapeHtml(vehicle.name)}</strong><div>${formatUsd(vehicle.priceUsd)} / ${formatPower(vehicle)} / ${formatTopSpeed(vehicle)}</div>${note ? `<div>${escapeHtml(note)}</div>` : ""}<div class="ai-inline-actions"><button class="chip-btn" type="button" data-ai-open="${escapeAttr(vehicle.id)}">View details</button></div></div>`;
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
  const buildCategoryButton = event.target.closest("[data-build-category]");
  if (buildCategoryButton && state.currentVehicleId) {
    state.buildCategoryIndex = Number(buildCategoryButton.dataset.buildCategory || 0);
    state.buildItemIndex = 0;
    const vehicle = findVehicleById(state.currentVehicleId);
    refs.vehicleContent.innerHTML = renderVehicleModal(vehicle);
    drawVehicleChartIfNeeded(vehicle);
    return;
  }
  const buildItemButton = event.target.closest("[data-build-item]");
  if (buildItemButton && state.currentVehicleId) {
    state.buildItemIndex = Number(buildItemButton.dataset.buildItem || 0);
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
  showToast("Review saved", "This review is now stored locally in your browser.");
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
    cat: type === "car" ? "My Garage Car" : type === "bike" ? "My Garage Bike" : "My Garage SEA",
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
  showToast("Vehicle added", `${newVehicle.name} is now live in the gallery and ready for compare.`);
}

function getComparisonRows(list) {
  const rows = [
    ["Price", (vehicle) => formatUsd(vehicle.priceUsd)],
    ["Category", (vehicle) => vehicle.cat],
    ["Power", (vehicle) => formatPower(vehicle)],
    ["Torque", (vehicle) => formatTorque(vehicle)],
    ["Top speed", (vehicle) => formatTopSpeed(vehicle)],
    ["0-60", (vehicle) => formatAccel(vehicle.zeroSixty)],
    ["Weight", (vehicle) => formatWeight(vehicle)],
    ["Engine", (vehicle) => vehicle.engineLabel],
    ["Engine type", (vehicle) => vehicle.engineType]
  ];
  if (list.some((vehicle) => vehicle.seatM != null)) rows.push(["Seat height", (vehicle) => vehicle.seatM != null ? formatMeters(vehicle.seatM) : "-"]);
  if (list.some((vehicle) => vehicle.tankL != null)) rows.push(["Fuel tank", (vehicle) => vehicle.tankL != null ? formatLiters(vehicle.tankL) : "-"]);
  if (list.some((vehicle) => vehicle.rangeKm != null)) rows.push(["Range", (vehicle) => vehicle.rangeKm != null ? formatRange(vehicle.rangeKm) : "-"]);
  if (list.some((vehicle) => vehicle.fuelUseL != null)) rows.push(["Consumption", (vehicle) => vehicle.fuelUseL != null ? formatFuelUse(vehicle.fuelUseL) : "-"]);
  if (list.some((vehicle) => vehicle.specs.Drivetrain)) rows.push(["Drivetrain", (vehicle) => vehicle.specs.Drivetrain || "-"]);
  if (list.some((vehicle) => vehicle.specs.Trans)) rows.push(["Transmission", (vehicle) => vehicle.specs.Trans || "-"]);
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
  if (rerenderModal && state.currentVehicleId === key) openVehicleModal(key, state.detailTab, { incrementView: false });
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
    if (state.compareIds.length >= 3) return void showToast("Compare limit", "You can compare up to three vehicles at once.");
    state.compareIds = [...state.compareIds, key];
  }
  saveJson(STORAGE.compare, state.compareIds);
  state.compareMode = true;
  renderCompareDock();
  renderGallery();
  if (rerenderModal && state.currentVehicleId === key) openVehicleModal(key, state.detailTab, { incrementView: false });
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
  if (isStandalone()) return void showToast("Already installed", "This app is already running in installed mode.");
  if (state.installPrompt) {
    state.installPrompt.prompt();
    state.installPrompt.userChoice.finally(() => {
      state.installPrompt = null;
      syncInstallButton();
    });
    return;
  }
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  showToast(isIOS ? "Install on iPhone" : "How to install", isIOS ? "Open Share > Add to Home Screen in Safari." : "If your browser does not show a prompt, open the menu and choose Install App / Add to Home Screen.");
}

function syncInstallButton() {
  if (isStandalone()) {
    refs.installBtn.textContent = "Installed";
    refs.installBtn.disabled = true;
    return;
  }
  refs.installBtn.disabled = false;
  refs.installBtn.textContent = "Install app";
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator) || window.location.protocol === "file:") return;
  window.addEventListener("load", async () => {
    try {
      await navigator.serviceWorker.register("./sw.js");
      await navigator.serviceWorker.ready;
      if (!loadJson(STORAGE.offlineToast, false)) {
        showToast("Offline ready", "The app is cached and ready to reopen from your home screen without a connection.");
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
  navigator.clipboard.writeText(link).then(() => showToast("Copied", "The vehicle link was copied to your clipboard.")).catch(() => showToast("Copy unavailable", "Your browser blocked clipboard access, so copy the link manually."));
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
  list.unshift({ author: "You", text, ts: Date.now() });
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
    videoUrls: Array.isArray(vehicle.videoUrls) ? [...new Set(vehicle.videoUrls.filter(Boolean))] : [],
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
  const curated = [...new Set(given.filter(Boolean))];
  if (curated.length) return curated;
  const pool = PHOTO_POOLS[vehicle.type] || PHOTO_POOLS.car;
  const seedIndex = Math.abs(hashCode(String(vehicle.id))) % pool.length;
  const fallback = [pool[seedIndex], pool[(seedIndex + 1) % pool.length], pool[(seedIndex + 2) % pool.length]];
  return [...new Set(fallback)];
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
  if (vehicle.isMine) return "My Garage";
  if (vehicle.type === "car") return "Car";
  if (vehicle.type === "bike") return "Motorcycle";
  return "SEA Market";
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
  const value = Number(match[1].replace(/,/g, ""));
  if (/million/.test(query)) return value * 1000000;
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
  return new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeStyle: "short" }).format(new Date(timestamp));
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
