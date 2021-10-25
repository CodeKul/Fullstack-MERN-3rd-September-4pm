
        
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


      let newArray = numbers.concat(content)

      console.log(newArray)

      console.log(newArray.find(element => element < 20))


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