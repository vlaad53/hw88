let arr = [1, 2, 3];
arr[1] = 10;
console.log(arr);




arr = ["Привіт", "Світ", "Код"];
arr.push("Новий рядок");
console.log(arr);



arr = [5, 10, 15];
let sum = arr.reduce((a, b) => a + b, 0);
console.log(sum);




arr = [2, 4, 6, 8, 10];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}




arr = ["сонце", "місяць", "телескоп", "галактика", "зоря"];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > 5) {
    console.log(arr[i]);
  }
}



arr = [3, 11, 7, 22, 1, 9, 15, 30, 18, 5];
let max = Math.max(...arr);
console.log(max);



arr = [1, 4, 7, 8, 12, 3, 10, 5, 6, 14];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}