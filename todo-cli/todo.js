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
module.exports = todoList;
