// https://supabase.com/docs/reference/javascript/installing

const emailInput = document.querySelector("#email-ka-input");
const passwordInput = document.querySelector("#password-ka-input");

const supabaseClient = supabase.createClient(
  "https://chyqrsvwiqzqveiljmcz.supabase.co",
  "sb_publishable_4h_kj-vxFPHiQbFrHzJ0aw_JNtsQFC6",
);

const login = async (event) => {
  event.preventDefault();

  const response = await supabaseClient.auth.signInWithPassword({
    email: emailInput.value,
    password: passwordInput.value,
  });
  console.log("Response: ", response);

  if (!response.error) {
    // account login hogya

    console.log("Login hogya hy");

    window.location.href = "./profile.html";
  }

  console.log("response: ", response);
  //   console.log("error response: ", response.error.message);
};
