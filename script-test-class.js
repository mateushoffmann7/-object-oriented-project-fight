class User {
  constructor(user, password) {
    this.user = user;
    this.password = password;
  }
  validateUser = () => {
    if (this.user === "Mateus" && this.password === 72371) {
      console.log(`O usuário ${this.user} está validado!`);
    } else {
      console.log(`O usuário ${this.user} foi negado!!`);
    }
  };
}

const user1 = new User("Mateus", 72371);

user1.validateUser();

//função construtura - nao pode ser com arrow
function Task(title) {
  this.title = title;
  this.completed = false;

  //aqui pode ser arrow
  this.markCompleted = () => {
    this.completed = true;
    console.log(`A tarefa ${this.title} foi concluída.`);
  };

  this.viewStatus = () => {
    const status = this.completed ? "concluída" : "pendente";
    console.log(`A tarefa ${this.title} esta ${status}`);
  };
}

const task1 = new Task("Aprender funções como classes");
const task2 = new Task("Aprender JavaScript");

console.log(task1.title);
console.log(task2.title);

console.log(task1.completed);

task1.markCompleted();
task1.viewStatus();

task2.viewStatus();

const user = (user, password) => {
  return {
    user,
    password,
  };
};

let p1 = user("Mateus", 72371);

console.log(p1.password);
