convert = () => {
    let temp = Number(document.getElementById("temp").value);
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let output = document.getElementById("output");
    let result = temp;
    if (from == "Celsius") {
        if (to == "Fahrenheit") {
            result = temp * 1.8 + 32;
        } else if (to == "kelvin") {
            result += 273.15;
        }
    } else if (from == "Fahrenheit") {
        if (to == "Celsius") {
            result = (temp - 32) / 1.8;
        } else if (to == "kelvin") {
            result = ((temp - 32) / 1.8 + 273.15);
        }
    } else {
        if (to == "Celsius") {
            result -= 273.15;
        } else if (to == "Fahrenheit") {
            result -= 273.15
            result = result * 1.8 + 32;
        }
    }
    output.innerHTML = result;

}