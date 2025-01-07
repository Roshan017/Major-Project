const Images = [
  {
    rice: {
      label: "Rice",
      imageUrl:
        "https://media.istockphoto.com/id/622925154/photo/ripe-rice-in-the-field-of-farmland.jpg?s=612x612&w=0&k=20&c=grtA7L3dm_SP80Fdt-PpIwu5GYacZygErTDUDNIKHwY=",
      fertilizer: [
        "Compost",
        "Bone Meal",
        "Fish Emulsion",
        "Seaweed/Kelp Meal",
      ],
      bestTimeToCultivate: "May to August (Monsoon season)",
      irrigation: "Flood irrigation or controlled irrigation system",
    },
  },
  {
    maize: {
      label: "Maize",
      imageUrl:
        "https://www.peptechbio.com/wp-content/uploads/2023/09/wouter-supardi-salari-HE_MjmWh9eQ-unsplash-scaled.jpg",
      fertilizer: [
        "Blood Meal",
        "Bone Meal",
        "Zinc Sulfate",
        "Ammonium Nitrate",
      ],
      bestTimeToCultivate: "Spring to early summer (March to June)",
      irrigation: "Drip or furrow irrigation systems",
    },
  },
  {
    chickpea: {
      label: "Chickpea",
      imageUrl:
        "https://media.istockphoto.com/id/1156555095/photo/uncooked-dried-chickpeas-in-wooden-spoon-with-raw-green-chickpea-pod-plant-on-wooden-table.jpg?s=612x612&w=0&k=20&c=wHzIwhqSJ7N-5UusF0n_TIKuyowLRX4zTZosz-UHuiU=",
      fertilizer: ["Compost", "Blood Meal", "Fish Emulsion", "Superphosphate"],
      bestTimeToCultivate: "Fall to early winter (October to December)",
      irrigation: "Drip irrigation or rainfall-dependent",
    },
  },
  {
    kidney_beans: {
      label: "Kidney Beans",
      imageUrl:
        "https://www.healthifyme.com/blog/wp-content/uploads/2022/01/807716893sst1641271427-scaled.jpg",
      fertilizer: ["Compost", "Fish Emulsion", "Bone Meal"],
      bestTimeToCultivate: "Spring to summer (March to May)",
      irrigation: "Drip irrigation or rainfall-based irrigation",
    },
  },
  {
    pigeon_peas: {
      label: "Pigeon Peas",
      imageUrl:
        "https://5.imimg.com/data5/SELLER/Default/2023/10/351917222/BG/VF/FL/5933357/pigeon-pea-seeds.jpg",
      fertilizer: ["Compost", "Blood Meal", "Seaweed/Kelp Meal"],
      bestTimeToCultivate: "Summer to fall (May to October)",
      irrigation: "Drip or furrow irrigation systems",
    },
  },
  {
    moth_beans: {
      label: "Moth Beans",
      imageUrl:
        "https://www.greendna.in/cdn/shop/products/moth2_594x.jpg?v=1591178564",
      fertilizer: ["Compost", "Blood Meal", "Bone Meal"],
      bestTimeToCultivate: "Summer (April to June)",
      irrigation: "Low water requirements, rainfall-based irrigation",
    },
  },
  {
    mung_bean: {
      label: "Mung Bean",
      imageUrl:
        "https://cdn-prod.medicalnewstoday.com/content/images/articles/324/324156/mung-beans.jpg",
      fertilizer: [
        "Compost",
        "Fish Emulsion",
        "Superphosphate",
        "Potassium Sulfate",
      ],
      bestTimeToCultivate: "Spring to early summer (March to June)",
      irrigation: "Drip irrigation or rainfall-dependent",
    },
  },
  {
    black_gram: {
      label: "Black Gram",
      imageUrl:
        "https://www.shutterstock.com/image-photo/black-gram-vigna-mungo-wooden-600nw-1558857680.jpg",
      fertilizer: ["Blood Meal", "Compost", "Fish Emulsion"],
      bestTimeToCultivate: "Summer to fall (April to September)",
      irrigation: "Drip irrigation or shallow flooding",
    },
  },
  {
    lentil: {
      label: "Lentil",
      imageUrl:
        "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2019/11/lentils-in-a-jug-and-on-a-spoon.jpg?w=1155&h=1734",
      fertilizer: ["Compost", "Bone Meal", "Seaweed/Kelp Meal"],
      bestTimeToCultivate: "Early spring to summer (February to May)",
      irrigation: "Rainfed or drip irrigation system",
    },
  },
  {
    pomegranate: {
      label: "Pomegranate",
      imageUrl:
        "https://healthyfamilyproject.com/wp-content/uploads/2020/05/Pomegranate-background.jpg",
      fertilizer: ["Compost", "Bone Meal", "Fish Emulsion"],
      bestTimeToCultivate: "Spring to early summer (March to June)",
      irrigation: "Drip or sprinkler irrigation systems",
    },
  },
  {
    banana: {
      label: "Banana",
      imageUrl: "https://thumbs.dreamstime.com/b/bunch-bananas-6175887.jpg",
      fertilizer: ["Fish Emulsion", "Compost", "Seaweed/Kelp Meal"],
      bestTimeToCultivate: "Year-round, best during warm months",
      irrigation: "Drip or sprinkler irrigation systems",
    },
  },
  {
    mango: {
      label: "Mango",
      imageUrl:
        "https://5.imimg.com/data5/SELLER/Default/2023/9/344928632/OW/RQ/XC/25352890/yellow-mango.jpeg",
      fertilizer: ["Compost", "Blood Meal", "Seaweed/Kelp Meal"],
      bestTimeToCultivate: "Spring to summer (March to May)",
      irrigation: "Drip irrigation or seasonal rainfall",
    },
  },
  {
    grapes: {
      label: "Grapes",
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod/images/766/grapes-main-1506688521.jpg?crop=0.848xw:1xh;center,top&resize=1200:*",
      fertilizer: ["Compost", "Fish Emulsion", "Potassium Sulfate"],
      bestTimeToCultivate: "Spring to early summer (April to June)",
      irrigation: "Drip or furrow irrigation systems",
    },
  },
  {
    watermelon: {
      label: "Watermelon",
      imageUrl:
        "https://5.imimg.com/data5/SELLER/Default/2022/12/DM/EC/KE/49293026/fresh-watermelon-fruit.webp",
      fertilizer: ["Compost", "Blood Meal", "Fish Emulsion"],
      bestTimeToCultivate: "Spring to early summer (March to May)",
      irrigation: "Drip or furrow irrigation systems",
    },
  },
  {
    muskmelon: {
      label: "Muskmelon",
      imageUrl:
        "https://4.imimg.com/data4/WM/QT/MY-24421102/fresh-musk-melon.jpg",
      fertilizer: ["Compost", "Bone Meal", "Fish Emulsion"],
      bestTimeToCultivate: "Spring to early summer (March to June)",
      irrigation: "Drip or furrow irrigation systems",
    },
  },
  {
    apple: {
      label: "Apple",
      imageUrl:
        "https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=",
      fertilizer: ["Compost", "Bone Meal", "Fish Emulsion"],
      bestTimeToCultivate: "Late winter to early spring (January to March)",
      irrigation: "Drip or sprinkler irrigation systems",
    },
  },
  {
    orange: {
      label: "Orange",
      imageUrl: "https://cdn.britannica.com/24/174524-050-A851D3F2/Oranges.jpg",
      fertilizer: ["Compost", "Fish Emulsion", "Superphosphate"],
      bestTimeToCultivate: "Spring to early summer (March to June)",
      irrigation: "Drip irrigation or flood irrigation systems",
    },
  },
  {
    papaya: {
      label: "Papaya",
      imageUrl:
        "https://media.istockphoto.com/id/864053288/photo/whole-and-half-of-ripe-papaya-fruit-with-seeds-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=hJ5DpNTt0oKjZMIHYV6gUHTntB2zIs_78dPKiuDUXgE=",
      fertilizer: ["Compost", "Fish Emulsion", "Bone Meal"],
      bestTimeToCultivate: "Spring to early summer (March to May)",
      irrigation: "Drip irrigation or seasonal rainfall",
    },
  },
  {
    coconut: {
      label: "Coconut",
      imageUrl:
        "https://www.jiomart.com/images/product/original/590000086/big-coconut-1-pc-approx-350-g-600-g-product-images-o590000086-p590000086-0-202408070949.jpg?im=Resize=(420,420)",
      fertilizer: ["Fish Emulsion", "Compost", "Seaweed/Kelp Meal"],
      bestTimeToCultivate: "Year-round, but best during dry season",
      irrigation: "Drip irrigation or rainfall-dependent",
    },
  },
  {
    cotton: {
      label: "Cotton",
      imageUrl:
        "https://media.istockphoto.com/id/1452266868/photo/cotton-plant.jpg?s=612x612&w=0&k=20&c=mtNsON32zUjlYDFN2P-cqu8B5p8I2n2OFR-a1HWdpJQ=",
      fertilizer: ["Compost", "Bone Meal", "Fish Emulsion"],
      bestTimeToCultivate: "Spring to summer (April to June)",
      irrigation: "Drip irrigation or flood irrigation systems",
    },
  },
  {
    jute: {
      label: "Jute",
      imageUrl: "https://5.imimg.com/data5/RT/SO/MY-25065022/jute-fiber.jpg",
      fertilizer: ["Compost", "Blood Meal", "Fish Emulsion"],
      bestTimeToCultivate: "Summer (May to July)",
      irrigation: "Flood irrigation or rainfall-dependent",
    },
  },
  {
    coffee: {
      label: "Coffee",
      imageUrl:
        "https://images.pexels.com/photos/1322561/pexels-photo-1322561.jpeg",
      fertilizer: ["Compost", "Bone Meal", "Blood Meal"],
      bestTimeToCultivate: "Year-round, best in warm months",
      irrigation: "Drip irrigation or rainfall-dependent",
    },
  },
  {
    tea: {
      label: "Tea",
      imageUrl:
        "https://media.istockphoto.com/id/173956286/photo/tea-plant.jpg?s=612x612&w=0&k=20&c=wUKU0vb56Jx_H7lE7fa9l5APgxRx9QZhgYN7lOdCj80=",
      fertilizer: ["Compost", "Bone Meal", "Fish Emulsion"],
      bestTimeToCultivate: "Spring to early summer (March to June)",
      irrigation: "Drip irrigation or rainfall-dependent",
    },
  },
  {
    tobacco: {
      label: "Tobacco",
      imageUrl:
        "https://media.istockphoto.com/id/505223268/photo/tobacco-plant.jpg?s=612x612&w=0&k=20&c=0ttI_jxiQIVg16Aw86fCrI98FMjWji0nTl5wm7ruFow=",
      fertilizer: ["Blood Meal", "Compost", "Fish Emulsion"],
      bestTimeToCultivate: "Spring to summer (April to June)",
      irrigation: "Flood or furrow irrigation",
    },
  },
];

export default Images;
