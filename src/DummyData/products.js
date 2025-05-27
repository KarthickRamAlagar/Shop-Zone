const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    description:
      "Premium noise-cancelling wireless headphones with 30-hour battery life.",
    price: 199.99,
    category: "Electronics",
    stock: 15,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb",
    ],
  },
  {
    id: 2,
    name: "Smart Watch",
    description:
      "Fitness tracker with heart rate monitor and waterproof design.",
    price: 149.99,
    category: "Electronics",
    stock: 8,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      "https://images.unsplash.com/photo-1558126319-c9feecbf57ee",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
    ],
  },
  {
    id: 3,
    name: "Leather Wallet",
    description:
      "Genuine leather wallet with multiple card slots and RFID protection.",
    price: 49.99,
    category: "Accessories",
    stock: 22,
    images: [
      "https://media.istockphoto.com/id/2202205911/photo/an-open-leather-wallet-on-a-dark-background.webp?a=1&s=612x612&w=0&k=20&c=pBWS2m3t5vnqmSCEoFV85TBOIzqEUaZdcJlzRSriJF4=",
      "https://plus.unsplash.com/premium_photo-1681589452811-513d1952077c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlciUyMHdhbGxldHxlbnwwfHwwfHx8MA%3D%3D",
    ],
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    description:
      "Portable waterproof speaker with 20W output and 12-hour playback.",
    price: 89.99,
    category: "Electronics",
    stock: 0,
    images: [
      "https://images.unsplash.com/photo-1511300961358-669ca3ad05af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWFycG9kc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1615281612781-4b972bd4e3fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1668073343170-64522929a3bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
    ],
  },
  {
    id: 5,
    name: "Cotton T-Shirt",
    description: "100% cotton t-shirt available in multiple colors and sizes.",
    price: 24.99,
    category: "Clothing",
    stock: 35,
    images: [
      "https://images.unsplash.com/photo-1746899603348-ab9afd71e16d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGphdmFzY3JpcHQlMjAlMjB0JTIwc2hpcnR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjB0JTIwc2hpcnR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1674969840285-3f38ce9864a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGphdmFzY3JpcHQlMjAlMjB0JTIwc2hpcnR8ZW58MHx8MHx8fDA%3D",
    ],
  },
  {
    id: 6,
    name: "Running Shoes",
    description:
      "Lightweight running shoes with cushioned soles for maximum comfort.",
    price: 79.99,
    category: "Footwear",
    stock: 12,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://media.istockphoto.com/id/1391533360/photo/red-sneakers-shoes.webp?a=1&s=612x612&w=0&k=20&c=oAgnHdjTkZpIiZ8AC5AkY17RgPbh8hNb9SiHTxrtVmI=",
      "https://media.istockphoto.com/id/1208683466/photo/colorful-sport-shoes-on-mustard-color-backround.jpg?s=612x612&w=0&k=20&c=i4qjpMawsnjPME39tAusZQjAr-X9tIRxndO8GH6dyhU=",
    ],
  },
  {
    id: 7,
    name: "Stainless Steel Water Bottle",
    description:
      "Insulated stainless steel bottle that keeps drinks cold for 24 hours.",
    price: 29.99,
    category: "Accessories",
    stock: 18,
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
      "https://media.istockphoto.com/id/1280873811/photo/a-metal-canister-on-the-green-background-monochrome-single-flat-colors-3d-rendering-camping.jpg?s=612x612&w=0&k=20&c=itBi4Hu8A8F-NoPfC3rPUR8IgVcn0lIPRRAoqU9oZX0=",
      "https://media.istockphoto.com/id/1487228107/vector/3d-vector-shaker-water-bottle-drink-for-fitness-sport-equipment-gym-time-concept.jpg?s=612x612&w=0&k=20&c=ntWFYhFAkVeWnVPmz_klfJubxM9iNfcXAw4IMbOqisY=",
    ],
  },
  {
    id: 8,
    name: "Wireless Charger",
    description:
      "10W fast wireless charging pad compatible with all Qi-enabled devices.",
    price: 34.99,
    category: "Electronics",
    stock: 7,
    images: [
      "https://media.istockphoto.com/id/1212476407/photo/woman-putting-her-smartphone-on-wireless-charger.jpg?s=612x612&w=0&k=20&c=xrlO4f1FuCvDOlzp-obHNqYHffYxsME9zyNbIH1s5WQ=",
      "https://media.istockphoto.com/id/1884686572/photo/wireless-car-charger-and-smart-phone.jpg?s=612x612&w=0&k=20&c=Np_v0kaLIHx3yCs_2x7Y3YUbTUJ3-y4pTEzfGwu7GKI=",
      "https://media.istockphoto.com/id/1167411700/photo/man-charging-smartphone-using-wireless-charging-pad.jpg?s=612x612&w=0&k=20&c=y9k1a47wPCzM9kDD-cKzv3GLz2Lpm9xknrXPQSDggvA=",
    ],
  },
  {
    id: 9,
    name: "Yoga Mat",
    description:
      "Eco-friendly non-slip yoga mat for all types of yoga and exercise.",
    price: 39.99,
    category: "Fitness",
    stock: 20,
    images: [
      "https://plus.unsplash.com/premium_photo-1664536968460-738ba488545e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHlvZ2ElMjBtYXR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1718862403436-616232ec6005?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHlvZ2ElMjBtYXR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1599447333424-272c8fa5466f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
    ],
  },
  {
    id: 10,
    name: "Desk Lamp",
    description:
      "LED desk lamp with adjustable brightness and color temperature.",
    price: 59.99,
    category: "Home & Living",
    stock: 10,
    images: [
      "https://images.unsplash.com/photo-1621447980929-6638614633c8?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://media.istockphoto.com/id/1070735594/photo/pink-table-lamp-on-an-isolated-background.webp?a=1&s=612x612&w=0&k=20&c=doU2opHrCa7rdaEHSmseoiugy_ip84HIlduMGkmOhhs=",
      "https://media.istockphoto.com/id/1070735740/photo/pink-table-lamp-on-an-isolated-background.jpg?s=612x612&w=0&k=20&c=TV2ko6EZfwJTIenKgh6fkIjSdQHycaBKoFJlGgYaNMQ=",
    ],
  },
  {
    id: 11,
    name: "Backpack",
    description: "Durable backpack suitable for travel and daily use.",
    price: 89.99,
    category: "Accessories",
    stock: 5,
    images: [
      "https://images.unsplash.com/photo-1577733966973-d680bffd2e80?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://media.istockphoto.com/id/1437870531/photo/closeup-of-a-green-leather-bag-with-pockets-and-belts.webp?a=1&s=612x612&w=0&k=20&c=p4kCICxMGGi8e1GT4PtZlbL3AzEG5LsYbvmax5FmyLE=",
      "https://media.istockphoto.com/id/1296761521/photo/stylish-backpack-and-sunglasses-on-green-grass.webp?a=1&s=612x612&w=0&k=20&c=G2IU_oySLabSr-SKQ5ua6Z0GFbwzxOsO1PV1IW0G-wU=",
    ],
  },
  {
    id: 12,
    name: "Sunglasses",
    description: "Stylish UV-protected sunglasses for all seasons.",
    price: 49.99,
    category: "Accessories",
    stock: 0,
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VuZ2xhc3N8ZW58MHx8MHx8fDA%3D",
      "https://media.istockphoto.com/id/475988072/photo/sunglasses.jpg?s=612x612&w=0&k=20&c=_ODnlVONqk21Wgh5JnKFucEVStdbK2AhADncz2_ty7s=",
      "https://images.unsplash.com/photo-1556306535-38febf6782e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    ],
  },
  {
    id: 13,
    name: "Gaming Mouse",
    description: "High-precision gaming mouse with customizable buttons.",
    price: 59.99,
    category: "Electronics",
    stock: 25,
    images: [
      "https://images.unsplash.com/photo-1616296425622-4560a2ad83de?q=80&w=1613&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://media.istockphoto.com/id/641184716/photo/high-technology-computer-gaming-mouse.webp?a=1&s=612x612&w=0&k=20&c=0wmpAzOw5ETcFEIXSFtpMw83hKnOA13F_1axmPlkHvk=",
      "https://media.istockphoto.com/id/657280282/photo/high-technology-computer-gaming-mouse.jpg?s=612x612&w=0&k=20&c=qoNCbfjeSyWx0f2ZDESYCZIdxisWtE54CaUZqj8fuYQ=",
    ],
  },
  {
    id: 14,
    name: "Coffee Maker",
    description: "Automatic coffee maker with programmable settings.",
    price: 129.99,
    category: "Home Appliances",
    stock: 8,
    images: [
      "https://images.unsplash.com/photo-1608354580875-30bd4168b351?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://media.istockphoto.com/id/1427570130/photo/modern-espresso-machine-pouring-coffee-into-glass-cup-with-milk-on-white-countertop-in-kitchen.webp?a=1&s=612x612&w=0&k=20&c=581Hc2Sfh3twvnCSCH-EmGVOxpuwPoyC-MJbMc5RSGM=",
      "https://media.istockphoto.com/id/1427570071/photo/modern-electric-espresso-machine-making-coffee-with-milk-on-white-marble-countertop-in-kitchen.jpg?s=612x612&w=0&k=20&c=37f7QAilU4v9AJzUc5xGdFmkFVVIv5NRSN-j_1jMvYs=",
    ],
  },
  {
    id: 15,
    name: "Electric Kettle",
    description: "Fast-boiling electric kettle with auto shut-off feature.",
    price: 49.99,
    category: "Home Appliances",
    stock: 0,
    images: [
      "https://media.istockphoto.com/id/2209639476/photo/modern-electric-kettle-and-cup-on-table-in-kitchen-space-for-text.jpg?s=612x612&w=0&k=20&c=GKTChktWWilTz6_Hd-yVZpZiQgrhm5pGlco6haJmDCI=",
      "https://media.istockphoto.com/id/2209639470/photo/modern-electric-kettle-on-table-in-kitchen-space-for-text.jpg?s=612x612&w=0&k=20&c=EFf-tEaFPn0f0XI1nsRIudQnGsRY8Kqh1CrUy1rcntk=",
      "https://media.istockphoto.com/id/2164232600/photo/close-up-of-kettle-on-kitchen-counter.jpg?s=612x612&w=0&k=20&c=tojTB-SMlJehFlXxR7JE3JKFxomCch2zp5cqsLTwWlM=",
    ],
  },
];

export { products };
