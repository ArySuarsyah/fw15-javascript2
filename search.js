function searchName(input, number, call) {
    const name = [ "Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia","Penelope",];

    data = name.map((el) => el).filter((el) => el.includes(input));
    let newArr = [];
    if (number) {
        for (let i = 0; i < number; i++) {
            if (data[i] !== undefined) {
                newArr.push(data[i]);
            }
        }
        call(newArr);
    } else {
        call(data);
    }
}

function search(result) {
    console.log(result.join(', '));
}

searchName("an", 3, search); // angela, bella, elizabeth
searchName("an", "", search); // angela, bella, elizabeth, ella, penelope
