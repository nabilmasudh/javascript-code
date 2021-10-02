// let arrays1 = [6, 7, 8, 9, 3, 7, 8];
// let arrays2 = [6, 7, [800, 900, 300], 7, 8];

// // let [a, b, c] = arrays1;

// let [, , [a, b, c]] = arrays2;

// console.log(a, b, c);

const user1 = {
    id: 111,
    name: "Nabil",
    email: "nabilmasudh@gmail.com",
};

const { email } = user1;

console.log(email);

const user2 = {
    id: 111,
    name: "Nabil",
    email: "nabilmasudh@gmail.com",
    education: {
    degree: "bachelor of science in education",
    },
};

const { education: { degree } = {} } = user2;

console.log(degree);

// let a = 5
// let b = 9

//the old way

// let temp = a
// a = b
// b = temp

// console.log(a, b)

//the new way

// var n = 1
// var m = 2

// [m, n] = [n, m];

// console.log(n, m)
