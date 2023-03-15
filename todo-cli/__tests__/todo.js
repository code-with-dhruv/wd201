const todoList = require("../todo");
const { all, add, markAsComplete, overdue, dueToday, dueLater } = todoList();

describe("Todo Test Suite", () => {
  const formattedDate = (datee) => {
    return datee.toISOString().split("T")[0];
  };
  let date_of_today = new Date();
  let x = new Date();
  const yesterday = formattedDate(
    new Date(date_of_today.setDate(date_of_today.getDate() - 1))
  );
  const today = formattedDate(date_of_today);
  
  const tomorrow = formattedDate(
    new Date(date_of_today.setDate(date_of_today.getDate() + 1))
  );
  beforeAll(() => {
    add({ title: "go to eat", dueDate: today, completed: true });
    add({ title: "climb hill", dueDate: yesterday, completed: false });
    add({ title: "drive car", dueDate: tomorrow, completed: false });
    add({ title: "water bill", dueDate: today, completed: true });
    add({ title: "phone pay", dueDate: today, completed: false });
    
  });
  test("Add new todo", () => {
    const len_p = all.length;
    add({ 
        title: "get wd201", 
    dueDate: tomorrow,
     completed: false 
    });
    expect(all.length).toBe( all.length + 1);
  });
  test("should mark complete", () => {
    expect(all[2]["completed"]).toBe(false);
    markAsComplete(2);
    expect(all[2]["completed"]).toBe(true);
  });
  test("retrivel overdue items", () => {
    expect(overdue().length).toBe(1);
  });
  test("retrivel items todays", () => {
    expect(dueToday().length).toBe(2);
  });
  test("retrivel of dueLater items", () => {
    expect(dueLater().length).toBe(3);
  });
});
