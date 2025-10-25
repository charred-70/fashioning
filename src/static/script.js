export async function sendMessage() {
    const input = document.getElementById("message");
    const msg = input.value;
    if (!msg) return;
    // console.log("submitted a message, " + msg);
    
    const chatDiv = document.getElementById("chat");
    const respDiv = document.getElementById("resp");
    const combImg = document.getElementById("result");

    chatDiv.innerHTML += `<div class="user">You: ${msg}</div>`;
    input.value = "";
    
    const response1 = await fetch("http://127.0.0.1:8000/api/chat", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg })
    });

    const response2 = await fetch('http://127.0.0.1:8000/api/avatar', {
        method: "PUT",
        headers: {
            "Content-Type" : "application/json"
        }
    });

    const data1 = await response1.json();
    console.log(data1);

    const data2 = await response2.json();
    console.log(data2);
    chatDiv.innerHTML += `<div class="bot">Bot: ${data1.reply} </div>`;

    combImg.src = data2.output;
    chatDiv.scrollTop = chatDiv.scrollHeight;
}
