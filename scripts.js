// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: "10" },
  { product: 'tea', price: '' },
]

const people = [
  { name: "Ashwin", province: "Western Cape" },
  { name: "Sibongile", province: "Gauteng" },
  { name: "Jan-Hendrik", province: "Northern Cape" },
  { name: "Sifso", province: "Eastern Cape" },
  { name: "Shailen", province: "Kwazulu-Natal" },
  { name: "Frikkie", province: "Free State" },
];

// Log each name with a matching province in the format "Name (Province)"
people.forEach(person => {
  console.log(`${person.name} (${person.province})`);
});

// Uppercase Transformation
const uppercaseProvinces = people.map(name => name.province.toUpperCase());
console.log(uppercaseProvinces);

// Name Lengths
const nameLengths = people.map(name => name.name.length);
console.log(nameLengths);


// Sorting
const sortedProvinces = people.map(name => name.province).sort();
console.log(sortedProvinces);

// Filtering Cape
const filteredProvinces = people.map(person => person.province).filter(province => !province.includes("Cape"));
console.log("Remaining Provinces:", filteredProvinces.length);

// Finding 'S'
const FindS = people.map(person => person.name.includes("S"));
console.log(FindS);

// Creating object Mapping
const nameToProvince = people.reduce((acc, person) => {
  acc[person.name] = person.province;
  return acc;
}, {});
console.log(nameToProvince); 


console.log(
  // log Products
  products.map(product => product.name),

  // Filter by Name length
 products.filter(product => product.name.length <= 5),
  )
