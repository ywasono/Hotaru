import { MenuItem, Review } from './types';

export const RESTAURANT_INFO = {
  name: 'Hotaru Japanese Restaurant',
  location: {
    address: '162-164 Gouger St, Adelaide SA 5000, Australia',
    city: 'Adelaide',
    state: 'SA',
    postcode: '5000',
    country: 'Australia',
  },
  phone: {
    display: '+61 8 8410 2838',
    callable: '+61884102838',
  },
  hours: [
    { day: 'Monday', time: 'Closed', closed: true },
    { day: 'Tuesday', time: '11:30 AM – 3:00 PM, 5:30 PM – 10:00 PM', closed: false },
    { day: 'Wednesday', time: '11:30 AM – 3:00 PM, 5:30 PM – 10:00 PM', closed: false },
    { day: 'Thursday', time: '11:30 AM – 3:00 PM, 5:30 PM – 10:00 PM', closed: false },
    { day: 'Friday', time: '11:30 AM – 3:00 PM, 5:30 PM – 10:30 PM', closed: false },
    { day: 'Saturday', time: '11:30 AM – 3:00 PM, 5:30 PM – 10:00 PM', closed: false },
    { day: 'Sunday', time: '5:30 PM – 10:00 PM', closed: false },
  ],
  links: {
    mapEmbed: 'https://maps.google.com/maps?q=Hotaru+Japanese+Restaurant+162-164+Gouger+St+Adelaide+SA+5000+Australia&t=&z=17&ie=UTF8&iwloc=&output=embed',
    googleMapsRedirect: 'https://maps.google.com/?q=Hotaru+Japanese+Restaurant+162-164+Gouger+St+Adelaide+SA+5000+Australia',
  }
};

export const IMAGES = {
  hero: '/src/assets/images/hotaru_hero_interior_1779779318779.png',
  sushiPlatter: '/src/assets/images/hotaru_sushi_platter_1779779337460.png',
  katsuCurry: '/src/assets/images/hotaru_katsu_curry_1779779359562.png',
  aburiSalmon: '/src/assets/images/aburi_salmon_nigiri_1779780235935.png',
  deluxeBento: '/src/assets/images/deluxe_bento_box_1779780260136.png',
  premiumSashimi: '/src/assets/images/premium_sashimi_1779780656536.png',
  rainbowRoll: '/src/assets/images/rainbow_roll_1779780675601.png',
  gyuDon: '/src/assets/images/gyu_don_1779780692614.png',
  porkGyoza: '/src/assets/images/pork_gyoza_1779780709579.png',
  tempuraPlatter: '/src/assets/images/tempura_platter_1779780725437.png',
  agedashiTofu: '/src/assets/images/agedashi_tofu_1779780745952.png',
  garlicEdamame: '/src/assets/images/garlic_edamame_1779780771001.png',
  katsuDonburi: '/src/assets/images/katsu_donburi_bowl_1779780989705.png',
};

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Sarah Jenkins',
    rating: 5,
    date: 'April 2026',
    text: 'A hidden gem on Gouger street! The sushi platters here are exceptionally fresh and the servings are incredibly ample. My partner and I always share the Deluxe Mixed Sashimi Platter and it never fails to satisfy. The dining room has a wonderful cozy, warm vibe that makes you feel instantly at ease. Highly recommend!',
    source: 'Google Review',
  },
  {
    id: 'rev-2',
    author: 'Daniel Chen',
    date: 'May 2026',
    rating: 5,
    text: 'Hotaru is my go-to spots for authentic Japanese comfort food. Unpretentious space with absolute elite foodquality and honest hospitality. Their Chicken Katsu Curry serves represent double the portion of anywhere else and is pure comfort in a bowl. Will keep coming back!',
    source: 'Local Guide',
  },
  {
    id: 'rev-3',
    author: 'Emma Watson',
    date: 'May 2026',
    rating: 5,
    text: 'Loved the cozy table setup and the prompt, friendly service. We had several donburi rice bowls and a bento box, and every dish came out perfectly hot, well-presented and absolutely loaded with toppings. An Adelaide classic that deserves all the praise.',
    source: 'TripAdvisor',
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // --- Sushi & Sashimi ---
  {
    id: 'sushi-1',
    name: 'Hotaru Deluxe Sushi & Sashimi Platter',
    jpName: '蛍デラックス寿司刺身盛り合わせ',
    description: 'Our ultimate showcase platter featuring a generous assortment of 12 sliced fresh seasonal premium sashimi (salmon, tuna, kingfish) alongside 8 beautifully hand-formed premium nigiri and 8 signature maki rolls. Perfect for sharing with friends and family.',
    price: '$45.00',
    category: 'sushi-sashimi',
    tags: ['Fresh Daily', 'Great for Sharing', 'Chef Recommendation'],
    isPopular: true,
    image: IMAGES.sushiPlatter,
  },
  {
    id: 'sushi-2',
    name: 'Aburi Salmon Nigiri Set',
    jpName: '炙りサーモン握りセット',
    description: 'Eight generous pieces of premium Tasmanian salmon nigiri, lightly seared with a blowtorch to release the rich oils, topped with our secret house sweet soy glaze, Japanese mayonnaise, and delicate spring onions.',
    price: '$24.50',
    category: 'sushi-sashimi',
    tags: ['Customer Favorite', 'Signature'],
    isPopular: true,
    image: IMAGES.aburiSalmon,
  },
  {
    id: 'sushi-3',
    name: 'Premium Sashimi Selection (Ample Serving)',
    jpName: '特選刺身盛り合わせ',
    description: 'A traditional, beautifully arranged platter of freshly sliced premium raw fish. Includes 15 thick, satisfying cuts of rich Atlantic Salmon, buttery Yellowtail Kingfish, and ocean-fresh Bluefin Tuna, nested on shiso leaves and fine-shredded daikon.',
    price: '$32.00',
    category: 'sushi-sashimi',
    tags: ['Gluten-Free Option', 'Fresh Daily'],
    image: IMAGES.premiumSashimi,
  },
  {
    id: 'sushi-4',
    name: 'Rainbow Roll Platter',
    jpName: 'レインボーロール',
    description: 'Eight oversized futomaki rolls stuffed with fresh cucumber, crab stick, and avocado, draped with a colorful array of freshly sliced salmon, tuna, prawn and avocado. A visual and culinary masterpiece designed with generous portions.',
    price: '$21.00',
    category: 'sushi-sashimi',
    tags: ['Colorful', 'Ample Portion'],
    image: IMAGES.rainbowRoll,
  },

  // --- Hearty Rice Meals ---
  {
    id: 'rice-1',
    name: 'Classic Chicken Katsu Curry',
    jpName: 'チキンカツカレー',
    description: 'Comfort food at its finest. A generous serving of crispy golden-brown fried panko crumbed chicken cutlets sliced over a mountain of fluffy hot Japanese short-grain rice, smothered in our slow-simmered rich, aromatic sweet savory curry sauce with potatoes and carrots.',
    price: '$22.00',
    category: 'rice-meals',
    tags: ['Hearty', 'Comfort Food', 'Top Seller'],
    isPopular: true,
    image: IMAGES.katsuCurry,
  },
  {
    id: 'rice-2',
    name: 'Hotaru Deluxe Bento Box',
    jpName: '蛍デラックス弁当',
    description: 'A spectacularly partitioned traditional lacquer box offering an ideal, satisfyingly balanced meal. Includes generous portions of Chicken Teriyaki, 4 pieces of fresh Sashimi, crispy vegetable Tempura, steamed rice, gyoza, sweet tamagoyaki, and our refreshing house salad.',
    price: '$28.50',
    category: 'rice-meals',
    tags: ['Complete Meal', 'Best Value'],
    isPopular: true,
    image: IMAGES.deluxeBento,
  },
  {
    id: 'rice-3',
    name: 'Katsu Donburi Bowl',
    jpName: 'かつ丼',
    description: 'A highly satisfying comfort meal centering a large crispy pork cutlet (or chicken) simmered in a savory dashi, soy, and mirin broth with sweet yellow onions, bound together with a semi-scrambled soft egg, served over a big bowl of warm white rice.',
    price: '$19.50',
    category: 'rice-meals',
    tags: ['Traditional', 'Savory'],
    image: IMAGES.katsuDonburi,
  },
  {
    id: 'rice-4',
    name: 'Gyu Don (Large Beef Bowl)',
    jpName: '牛丼',
    description: 'A hearty and traditional favorite. Thinly sliced premium beef and sweet yellow onions simmered gently in a sweet dashi seasoned with soy sauce and mirin (sweet sake), served over hot steamed rice. Fully loaded and topped with red pickled ginger.',
    price: '$20.00',
    category: 'rice-meals',
    tags: ['Ample Serving', 'Quick & Satisfying'],
    image: IMAGES.gyuDon,
  },

  // --- Appetizers & Sides ---
  {
    id: 'side-1',
    name: 'Pork Gyoza (6 Pieces)',
    jpName: '豚餃子',
    description: 'House-made pork dumplings, pan-fried to a perfect crispy bottom while retaining a juicy tender interior meat filling. Served piping hot with our tangy sesame soy dipping sauce.',
    price: '$11.50',
    category: 'appetizers-sides',
    tags: ['Handmade', 'Great Starter'],
    image: IMAGES.porkGyoza,
  },
  {
    id: 'side-2',
    name: 'Assorted Tempura Platter',
    jpName: '天ぷら盛り合わせ',
    description: 'Light, crunchy, and golden. Includes three large black tiger prawns and five seasonal fresh vegetables (sweet potato, eggplant, pumpkin, and zucchini) deep-fried in delicate traditional beer-batter. Served with a warm tetsuyu dipping sauce.',
    price: '$16.50',
    category: 'appetizers-sides',
    tags: ['Crispy', 'Shareable'],
    image: IMAGES.tempuraPlatter,
  },
  {
    id: 'side-3',
    name: 'Agedashi Tofu',
    jpName: '揚げ出し豆腐',
    description: 'Crispy deep-fried cubes of silken organic tofu, submerged in a pool of hot savory dashi soy broth, garnished with fine bonito flakes, freshly grated daikon radish, ginger, and sliced green onions.',
    price: '$10.00',
    category: 'appetizers-sides',
    tags: ['Vegetarian Option', 'Warm Starter'],
    image: IMAGES.agedashiTofu,
  },
  {
    id: 'side-4',
    name: 'Garlic Butter Edamame',
    jpName: 'ガーリックバター枝豆',
    description: 'Plump green soybeans in the pod, tossed enthusiastically in wok-melted salted butter, minced aromatic garlic, and coarse sea salt. An addictive twist on the traditional pub classic.',
    price: '$8.50',
    category: 'appetizers-sides',
    tags: ['Gluten-Free', 'Addictive'],
    image: IMAGES.garlicEdamame,
  }
];
