function searchName(input, number, call) {
    const name = [
        "Abigail",
        "Alexandra",
        "Alison",
        "Amanda",
        "Angela",
        "Bella",
        "Carol",
        "Caroline",
        "Carolyn",
        "Deirdre",
        "Diana",
        "Elizabeth",
        "Ella",
        "Faith",
        "Olivia",
        "Penelope",
    ];

    input = name.map((el) => el.toLowerCase()).filter((el) => el.includes(input));
    let newArr = [];
    if (number || typeof number == number) {
        for (let i = 0; i < number; i++) {
            if (input[i] !== undefined) {
                newArr.push(input[i]);
            }
        }
        call(newArr);
    } else {
        call(input);
    }
}

function search(result) {
    console.log(result);
}

searchName("el", 3, search);
searchName("el", "", search);
