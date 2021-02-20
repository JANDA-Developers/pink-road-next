
function setCookie(name, value, expiredays) {
    var date = new Date();
    date.setDate(date.getDate() + expiredays);
    document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString();
}

function closePopup(setCookie) {
    if (document.getElementById("check").value) {
        if(setCookie) setCookie("popupYN", "N", 1);
        self.close();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    alert("documnet load triggered");
    const checkbox = document.getElementById("DaycheckBox")
    const isChecked = checkbox.value === true;
    const target = document.getElementById("Closer");
    target.onclick = closePopup

    if(isChecked) {
        closePopup(isChecked)
    }
  });
