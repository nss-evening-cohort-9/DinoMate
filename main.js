const dinos = [{
  name: "Steve Stegosaurus",
  id: 1,
  dob: "01/02/0000",
  bio: "Steve is super rad and loves long walks on the beach.",
  imageUrl: "https://cdn.shopify.com/s/files/1/2281/5369/products/30002_1_x700.jpg?v=1519820343",
  isAvailable: true,
  isCarnivore: false,
  type: "Stegosaurus"
},
{
  name: "Brian Brachiosaurus",
  id: 2,
  dob: "01/03/0000",
  bio: "I'm super tall (over 9 inches!) and I have a huge brain.",
  imageUrl: "https://i.ebayimg.com/images/g/hWAAAOSwd-panuG0/s-l1600.jpg",
  isAvailable: true,
  isCarnivore: false,
  type: "Brachiosaurus"
},
{
  name: "Ted Triceratops",
  id: 3,
  dob: "01/04/0000",
  bio: "Just looking for love!",
  imageUrl: "https://ssli.ebayimg.com/images/g/0NMAAOSwpcBao7ep/s-l640.jpg",
  isAvailable: false,
  isCarnivore: false,
  type: "Triceratops"
},
{
  name: "Maurice Mammoth",
  id: 4,
  dob: "01/05/0000",
  bio: "Fake Dinosaur",
  imageUrl: "https://i.ebayimg.com/images/g/Up8AAOSwICxaoW-k/s-l1600.jpg",
  isAvailable: true,
  isCarnivore: false,
  type: "Impostor"
},
{
  name: "Richard Rex",
  id: 5,
  dob: "01/06/0000",
  bio: "Richard enjoys long walks in the sun and drinking Pina Coladas.",
  imageUrl: "https://i.ebayimg.com/images/g/RhIAAOSwFb5aG7wo/s-l1600.jpg",
  isAvailable: true,
  isCarnivore: true,
  type: "T-Rex"
},
{
  name: "Sally Spinosaurus",
  id: 6,
  dob: "01/07/0000",
  bio: "Former contestant on the bachlorette.",
  imageUrl: "https://i.ebayimg.com/images/g/pu0AAOSwGjZankAW/s-l1600.jpg",
  isAvailable: false,
  isCarnivore: true,
  type: "Spinosaurus"
},
{
  name: "Danielle Dimetrodon",
  id: 7,
  dob: "01/08/0000",
  bio: "",
  imageUrl: "https://ssli.ebayimg.com/images/g/RGgAAOSwWGxao8Ra/s-l640.jpg",
  isAvailable: false,
  isCarnivore: true,
  type: "Dimetrodon"
},
{
  name: "Viserion",
  id: 8,
  dob: "01/09/0000",
  bio: "Viserion is a dragon that the Night King slayed and reanimated as a wight. He is one of the three dragons born in the Dothraki Sea, along with Drogon and Rhaegal, and is named after Daenerys Targaryen's elder brother, Viserys. Before becoming a wight, he can be distinguished by his cream and gold colored scales, and red-orange wings.",
  imageUrl: "https://i.ebayimg.com/images/g/jlYAAOSwpCxZ5T9b/s-l1600.png",
  isAvailable: true,
  isCarnivore: false,
  type: ""
},
{
  name: "Terry Therizinosaurus",
  id: 9,
  dob: "01/10/0000",
  bio: "I am full of feelz.",
  imageUrl: "https://ssli.ebayimg.com/images/g/mVAAAOSwDdNao7G3/s-l640.jpg",
  isAvailable: true,
  isCarnivore: false,
  type: "Therizinosaurus"
},
{
  name: "Al Acrocanthosaurus",
  id: 10,
  dob: "01/11/0000",
  bio: "NOPE NOPE NOPE",
  imageUrl: "https://i.ebayimg.com/images/g/l3EAAOSwMQhaet~m/s-l1600.jpg",
  isAvailable: false,
  isCarnivore: true,
  type: "Acrocanthosaurus"
}];

const myInfo = {
  id: 2,
  name: "Richard Rex",
  dob: "02/02/2017",
  bio: "BLA BLA BLA",
  imageUrl: "https://cdn.shopify.com/s/files/1/2281/5369/products/30002_1_x700.jpg?v=1519820343",
  isAvailable: true,
  isCarnivore: false,
  type: "T-Rex",
  matches: [1, 4, 6, 7, 8]
};

const employees = [{
  name: "Zoe Ames",
  imageUrl: "https://avatars3.githubusercontent.com/u/8093647?s=460&v=4",
  bio: "Bacon ipsum dolor amet sausage alcatra salami, chuck drumstick ham beef fatback corned beef. Pastrami short ribs tongue, buffalo pork belly porchetta brisket. Leberkas andouille ball tip kielbasa, jowl chicken tenderloin. Doner alcatra leberkas turkey meatball frankfurter rump short ribs brisket pancetta chicken pig cow picanha kielbasa. Drumstick frankfurter bacon, shankle ribeye pork loin cupim flank t-bone kielbasa turkey burgdoggen fatback prosciutto filet mignon.",
  favoriteDinos: [1, 5]
},
{
  name: "Callan Morrison",
  imageUrl: "https://avatars1.githubusercontent.com/u/16550897?s=400&v=4",
  bio: "I need a fake passport, preferably to France… I like the way they think. Say goodbye to THESE! The Army had half a day. That's how Tony Wonder lost a nut. The worst that could happen is that I could spill coffee all over this $3,000 suit. COME ON.",
  favoriteDinos: [2, 3]
},
{
  name: "Lauren Rouse",
  imageUrl: "https://avatars2.githubusercontent.com/u/8356215?s=400&v=4",
  bio: "Maybe there's a happy little bush that lives right there. Automatically, all of these beautiful, beautiful things will happen. Van Dyke Brown is a very nice brown, it's almost like a chocolate brown. All you have to do is let your imagination go wild. You gotta think like a tree. We tell people sometimes: we're like drug dealers, come into town and get everybody absolutely addicted to painting. It doesn't take much to get you addicted.",
  favoriteDinos: [4, 8]
}];