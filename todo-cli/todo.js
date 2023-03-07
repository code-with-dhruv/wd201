const todoList = () => {
  all = [];
  dd=new Date()
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    return all.filter(
      (items) => items.dueDate.split("-")[2] < dd.getDate()
    );
  };

  const dueToday = () => {
    return all.filter(
      (items) => items.dueDate.split("-")[2] == dd.getDate()
    );
  };
  
  const dueLater = () => {
    return all.filter(
      (items) => items.dueDate.split("-")[2] >dd.getDate()
    );
  };
  const toDisplayableList = (list) => {
    return list
      .map((items) => {
        const work_title = items.title.trim();
        if (items.completed==true){
          tick="[x]";
        }
        else{
          tick="[ ]";
        }
        const tisD =
          items.dueDate.split("-")[2] == dd.getDate()
            ? ""
            : items.dueDate;
        let j = "";
        j = tick + " " + work_title + " " + tisD;
        return j;
      })
      .join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);

todos.add({ title: "Submit assignment", dueDate: yesterday, completed: false });
todos.add({ title: "Pay rent", dueDate: today, completed: true });
todos.add({ title: "Service Vehicle", dueDate: today, completed: false });
todos.add({ title: "File taxes", dueDate: tomorrow, completed: false });
todos.add({ title: "Pay electric bill", dueDate: tomorrow, completed: false });

console.log("My Todo-list\n");

console.log("Overdue");
var overdues = todos.overdue();
var formattedOverdues = todos.toDisplayableList(overdues);
console.log(formattedOverdues);
console.log("\n");

console.log("Due Today");
let itemsDueToday = todos.dueToday();
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday);
console.log(formattedItemsDueToday);
console.log("\n");

console.log("Due Later");
let itemsDueLater = todos.dueLater();
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater);
console.log(formattedItemsDueLater);
console.log("\n\n");
