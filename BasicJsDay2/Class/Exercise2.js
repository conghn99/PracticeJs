function compareAge(name1, name2, age1, age2) {
    let person = age1 > age2 ? `${name1} lớn hơn ${name2} ${age1 - age2} tuổi` : `${name1} nhỏ hơn ${name2} ${age2 - age1} tuổi`;
    console.log(person);
}

compareAge("Đạt", "Hiếu", 4, 5);