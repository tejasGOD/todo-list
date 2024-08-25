const ulOfList = document.querySelector("ul");
const input = document.querySelector("input");

function addEvent() {
  const li = document.createElement("li");
  li.textContent = input.value;
  ulOfList.appendChild(li);
  input.value = "";
}
function saveToLocalStorage() {
  try {
    localStorage.setItem("listItems", ulOfList.innerHTML);
  } catch (e) {
    console.error("Could not save to local storage", e);
  }
}
function loadFromLocalStorage() {
  try {
    const savedItems = localStorage.getItem("listItems");
    if (savedItems) {
      ulOfList.innerHTML = savedItems;
    }
  } catch (e) {
    console.error("Could not load from local storage", e);
  }
}
function showNotification() {
    const notification = document.createElement("div");
    notification.textContent = "Task added!";
    notification.classList.add("notification");
    document.body.appendChild(notification);
    setTimeout(() => {
        document.body.removeChild(notification);
    }, 2000);
}

ulOfList.addEventListener("DOMNodeInserted", () => {
    showNotification();
});


if (Notification.permission !== "granted") {
    Notification.requestPermission();
}

function showDesktopNotification() {
    if (Notification.permission === "granted") {
        const notification = new Notification("Task added my nigga!", {
            body: "A new task my nigga.",
        });
        setTimeout(() => {
            notification.close();
        }, 2000);
    }
}

ulOfList.addEventListener("DOMNodeInserted", () => {
    showNotification();
    showDesktopNotification();
});


loadFromLocalStorage();
input.addEventListener("keyup", (event) => {
  if (event.key === "Enter" && input.value.trim() !== "") {
    addEvent();
    saveToLocalStorage();
  }
});
