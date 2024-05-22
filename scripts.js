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
  { product: 'coffee', price: 10 },
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
const uppercaseProvinces = people.map(person => person.province.toUpperCase());
console.log(uppercaseProvinces);
