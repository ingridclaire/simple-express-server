document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.querySelector('.username').value
  const password = document.querySelector('.password').value

  const response = await fetch('/login', {
    method: "POST",
    body: JSON.stringify({username, password}),
    headers: {
      "Content-Type": "application/json"
    }
  })
  const data = await response.json();
  appendContent(data);
})

function appendContent(data) {
  const ptag = document.createElement('p');
  ptag.textContent = data.message;
  document.body.append(ptag)
}