function changeText() {
    const title = document.getElementById("title");
    title.innerHTML = "JavaScript is Cool!";
    alert("hi there!")
    console.log("Click on button object has occurred.");

    let str = "hello";
    let num = 42;
    let num2 = 3.14;
    let truthy = true;
    let falsey = false;
    let obj = {
      nigel:"wellington",
      cats:3,
      str_to_console: function() {
        console.log(`My contents are: this.nigel: ${this.nigel}, 
        this.cats: ${this.cats}, 
        this.str_to_console: ${this.str_to_console}
        `);
      }
    };
    let dogs;
    let nullness = null;

    console.log(`str: ${str}`);
    console.log(`num: ${num}`);
    console.log(`num2: ${num2}`);
    console.log(`truthy: ${truthy}`);
    console.log(`falsey: ${falsey}`);
    console.log(`obj: ${obj}`);
    console.log(`dogs: ${dogs}`);
    // console.log(`dogs_undeclared: ${dogs_undeclared}`);
    console.log(`nullness: ${nullness}`);

    if(num == 42) {
      console.log("num must be 42!");
    }

    if(num == "42") {
      console.log("num must be \"42\"!");
      console.log(`num is of type ${typeof(num)}...`);
      console.log(`"42" is of type ${typeof("42")}...`);
    }

    if(num === "42") {
      console.log("num must be \"42\"!");
      console.log(`num is of type ${typeof(num)}...`);
      console.log(`"42" is of type ${typeof("42")}...`);
    } else {
      console.log("num does not === \"42\"");
    }

    obj.str_to_console();
  }