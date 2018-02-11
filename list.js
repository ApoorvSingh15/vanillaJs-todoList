var todos = [];

const listTodos = () => {
  todos.forEach(function(task, i){
    console.log("**********");
    console.log(i + " : " +task);
    console.log("**********");
    return 0;
  });
}
const newTask = () => {
  var task = prompt ('Enter a new task');
  todos.push(task);
  console.log(task + ' added to the list');
  return 0;
}

const deleteTask = () => {
  var del = prompt("Which index would you like to delete??");
    todos.splice(del, 1);
    console.log("item deleted at index" + del);
    return 0;
}


var input = prompt("Enter an option from the list");
while(input !== 'quit'){
  if(input === 'list') {
    listTodos();
  } else if (input === 'new'){
    newTask();
  } else if( input === 'delete'){
    deleteTask();
  }
  input = prompt("Enter an option from the list");
}
console.log('ok ! the app has been closed');


// var colors = ['yellow', 'green', 'red', 'orange'];
//
// colors.forEach(function(color){
//   console.log(color);
// });

// arr.forEach(function(name){        syntax of forEach
//  some function
// });

// var arr = [1,2,3,4,5,6,7,8,9,10];
// for (i = 0 ; i< arr.length ; i++){
//   if( arr[i] % 3 === 0){
//     console.log(arr[i]);
//   }
// }
