var code = document.getElementById("code"),
    res = document.getElementById("result"),
    showRes = document.getElementById("show");


showRes.onclick = () => {
    res.innerHTML = code.value;
}