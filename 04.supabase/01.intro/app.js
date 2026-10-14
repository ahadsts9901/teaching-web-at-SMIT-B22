// 1vgXJCqwdCRSsbi1

// https://chyqrsvwiqzqveiljmcz.supabase.co
// sb_publishable_4h_kj-vxFPHiQbFrHzJ0aw_JNtsQFC6

const supabaseClient = supabase.createClient(
  "https://chyqrsvwiqzqveiljmcz.supabase.co",
  "sb_publishable_4h_kj-vxFPHiQbFrHzJ0aw_JNtsQFC6",
);

(async ()=>{
  const response = await supabaseClient.from("todos").select("*");

  console.log(response);

})();
