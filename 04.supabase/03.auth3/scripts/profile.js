const supabaseClient = supabase.createClient(
  "https://chyqrsvwiqzqveiljmcz.supabase.co",
  "sb_publishable_4h_kj-vxFPHiQbFrHzJ0aw_JNtsQFC6",
);

async function checkUser() {
  const response = await supabaseClient.auth.getUser();

  if (!response.data.user) {
    window.location.href = "./login.html";
  }
}
checkUser();
