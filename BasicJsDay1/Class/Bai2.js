function compareAge(name1, name2, age1, age2) {
    if(age1 > age2) {
        console.log(name1 + " lớn hơn " + name2 + " " + (age1 - age2) + " tuổi")
    } else if(age1 < age2) {
        console.log(name1 + " nhỏ hơn " + name2 + " " + (age2 - age1) + " tuổi")
    } else {
        console.log(name1 + " bằng tuổi " + name2)
    }
}

compareAge("Đạt", "Hiếu", 5, 5)