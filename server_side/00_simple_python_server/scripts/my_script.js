
function my_fun(num_1, num_2) {
    var local = num_1 + num_2;
    console.log("num_1: " + num_1 + "\nnum_2: " + num_2);
    let obj = {n1:num_1*10, n2:num_2*3, total:num_1 * num_2 * num_1};
    console.log("obj.n1: " + obj.n1 + "\nobj.n2: " + obj.n2 + "\n\tobj.total: " + obj.total);
    return local;
}

function log_vals() {
    let x = 2.01;
    let y = "2.0";
    let my_bool = true;
    let arr = ["hello", 12, x + y];
    let z = {letters:["abc", "", "def"]};
    let null_val = null;

    result = my_fun(1.1, 2);

    console.log("x: " + x);
    console.log("y: " + y);
    console.log("result: " + result);
    console.log("my_bool: " + my_bool);
    console.log("typeof z.letters[0]: " + typeof z.letters[0]);
    console.log("z.letters[0]: " + z.letters[0]);
    console.log("z.letters[1]: \"" + z.letters[1] + "\"");
    console.log("typeof z.letters[1]: "+ typeof z.letters[1]);
    
    console.log("\n\n");
    console.log("null_val: " + null_val);
    console.log("typeof null_val: " + typeof null_val);
}

function log_green_bordered_elements() {
    let green_bordered_elements = document.getElementsByClassName("green-bordered");
    console.log("Contents of green-bordered HTML elements (by class): " + green_bordered_elements);
}

function log_main_element() {
    let main_content_element = document.getElementById("main");
    console.log("Contents of main HTML element (by id), has an innerHTML of: " + main_content_element.innerHTML);
}

function log_logic(x, y) {
    if(x === y) {
        console.log("x === y");
        console.log(x === y);
    }
    //sad math!
    else if(x === y + 1) {
        console.log("x === y + 1");
        console.log(x === y + 1);
    }
    else {
        console.log("x !== y");
        console.log(x !== y);
        console.log("See, it works!");
    }
}

function log_loop() {
    //i++ ~= i = i + 1 ~= i += 1
    for(let i = 0; i < 10; i++) {
        console.log("i: " + i);
    }
    //console.log("i: " + i); //i not defined outside of loop

    while(x == 2.01) {
        console.log("x: " + x);
        break;
    }
}

function log_string_fun() {
    let string_var = "a hello";
    console.log("string_var.length: " + string_var.length);
    console.log("string_var.charAt(6): " + string_var.charAt(6));
    //negative index does not work properly in JS!
    console.log("string_var.charAt(-1): \"" + string_var.charAt(-1) + "\"");
    console.log("string_var.charCodeAt(0): " + string_var.charCodeAt(0));
    
    console.log("string_var.split(): " + string_var.split(" "));
    
}
