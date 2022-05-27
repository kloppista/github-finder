async function fetchData() {
  const inputValue = document.getElementById("user").value;
  const data = await fetch(`https://api.github.com/users/${inputValue}`);
  const json = await data.json();
  document.getElementById("name").innerText = json.name;
  document.getElementById("company").innerText = json.company;
  document.getElementById("bio").innerText = json.bio;
  document.getElementById("github_link").innerText = json.html_url;
}
