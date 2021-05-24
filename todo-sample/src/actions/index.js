export const ADDTASK = "addTask";
export const REMOVETASK = "removeTask";
export const ROUTEADDTASK = "routeaddTask";
export const ROUTEREMOVETASK = "routeremoveTask";

export const addTask = (task) => {
  return {
    type: ADDTASK,
    task: task,
  };
};

export const removeTask = (index) => {
  return {
    type: REMOVETASK,
    index: index,
  };
};
export const routeaddTask = (all) => {
  return {
    type: ROUTEADDTASK,
    todo: {
      ticket:all.ticket,
      comment:all.comment,
      member:all.member,
      finish:all.finish,
      start:all.start,
    },
  };
};

export const routeremoveTask = (index) => {
  return {
    type: ROUTEREMOVETASK,
    index: index,
  };
};
