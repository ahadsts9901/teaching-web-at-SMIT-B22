// 1vgXJCqwdCRSsbi1
const ul = document.querySelector("#todos-output");
const input = document.querySelector("#todo-input");

const supabaseClient = supabase.createClient(
  "https://chyqrsvwiqzqveiljmcz.supabase.co",
  "sb_publishable_4h_kj-vxFPHiQbFrHzJ0aw_JNtsQFC6",
);

const getData = async () => {
  ul.innerHTML = "";

  const response = await supabaseClient.from("todos").select("*");
  const todos = response.data;

  for (let i = 0; i < todos.length; i++) {
    ul.innerHTML += `<li>${todos[i].todo} <button onclick="deleteTodo(${todos[i].id})">delete</button> </li>`;
  }
};
getData();

const addTodo = async (event) => {
  event.preventDefault();

  const todo = input.value;

  await supabaseClient.from("todos").insert({ todo });

  getData();
};

const deleteTodo = async (id) => {
  const response = await supabaseClient.from("todos").delete().eq("id", id);

  if (!response.error) {
    getData();
  }
};
