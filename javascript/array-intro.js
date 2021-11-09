let numbers = [
  1,
  "two",
  { name: "codekul", tech: "MERN" },
  4,
  5,
  ["a", "b", "c"],
];

let content = [
  "codekul",
  10,
  20,
  ["one", "two", "three"],
  { name: "xyz", city: "pune" },
];

console.log(numbers);

console.log(content);

let blocks = new Array(100);
console.log(blocks);

let nums = [10, 20, 25, 42];

console.log(nums);

nums.map((i) => {
  i *= 2;

  console.log(i);
});

let newArray = numbers.concat(content);

console.log(newArray);

console.log(newArray.find((element) => element < 20));

console.log(newArray.indexOf(20));

console.log(newArray.length);

let box = new Array(500);

console.log(box);
var x = 0;
for (i = 0; i < 20; i++) {
  x += i;

  console.log(x);
}

let numarray = [10, 20, 30, 40, 60];
console.log(numarray);
numarray.splice(2, 2, "sanket", "Codekul");
console.log(numarray);

let state = (previous, current) => {
  console.log("State Value", previous * current);
  return previous + current;
};

console.log(numarray.toString());
console.log(numarray.reduce(state));

fetch("https://jsonplaceholder.typicode.com/post")
  .then((response) => {
    //console.log(response.json())
    let data = response.json();

    console.log(data);

    return data;
  })

  .then((result) => {
    console.log(result);

    //     result.map((post) => {
    //       var output = `
    // <div class="card">
    // <div class="card-body">
    // <p>${post.id}</p>
    // <p>${post.body}</p>

    // </div>

    // </div>
    // `;
    //       document.write(output);
    //     });

    result.forEach((item) => {
      var output = `
  <div class="card">
  <div class="card-body">
  <p>${item.id}</p>
  <p>${item.body}</p>
  
  </div>
  
  </div>
  `;
      document.write(output);
    });
  });

//   axios.get("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     console.log(response);

//     data.map((item) => {

//       `<tr>
//                 <td></td>
//                 <td></td>
//                 <td></td>

//                 </tr>`;
//     });
//   });
