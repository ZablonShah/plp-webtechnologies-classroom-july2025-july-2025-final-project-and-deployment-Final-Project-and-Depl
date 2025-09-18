document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll("ul li");
  items.forEach(item => {
    item.addEventListener("click", () => {
      alert(`You selected: ${item.textContent}`);
    });
  });
});
