// https://supabase.com/docs/reference/javascript/installing

const emailInput = document.querySelector("#email-ka-input");
const passwordInput = document.querySelector("#password-ka-input");

const supabaseClient = supabase.createClient(
  "https://chyqrsvwiqzqveiljmcz.supabase.co",
  "sb_publishable_4h_kj-vxFPHiQbFrHzJ0aw_JNtsQFC6",
);

const createNewUser = async (event) => {
  event.preventDefault();

  const response = await supabaseClient.auth.signUp({
    email: emailInput.value,
    password: passwordInput.value,
  });

  if(response.error) {
    // handle error
  } else {
    // account ban gya sahi se
    // window.location.href = "./folder/login.html"
  }

  console.log("response: ", response);
//   console.log("error response: ", response.error.message);
};
