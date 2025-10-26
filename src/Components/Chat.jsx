import React from 'react'
import { Link } from 'react-router-dom'
import Clothes from './Clothes'
import { useState, useRef, useEffect} from 'react'
import { Send, ImageIcon, Loader2 } from 'lucide-react';

const Chat = () => {
    const containerRef = useRef(null);
    var count = 0;

    async function sendMessage() {
    var conId = "load"+count; 
    const input = document.getElementById("message");
    const msg = input.value;
    if (!msg) return;
    
    // console.log("submitted a message, " + msg);
    
    const chatDiv = document.getElementById("chat");
    const respDiv = document.getElementById("resp");
    const combImg = document.getElementById("result");

    chatDiv.innerHTML += `<div class="user">${msg}</div>`;

    input.value = "";
    chatDiv.innerHTML += `<div class="bot" id=${conId}>
        <img id="loading" class="chat-image" src="loading.gif">
    </div>`;

    const botBox = document.getElementById(conId);
    const loader = document.getElementById("loading");
    console.log(botBox, loader); // should NOT be null

    
    const response1 = await fetch("http://localhost:8000/api/chat", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg })
    });

    // const response2 = await fetch('http://localhost:8000/api/avatar', {
    //     method: "PUT",
    //     headers: {
    //         "Content-Type" : "application/json"
    //     }
    // });

    const data1 = await response1.json();

    // const data2 = await response2.json();
    // console.log(data2);
    loader.remove();
    botBox.innerHTML = data1.reply
    count += 1;
    // chatDiv.innerHTML += `<div class="bot">${data1.reply} </div>`;

    // combImg.src = data2.output;
    // chatDiv.scrollTop = chatDiv.scrollHeight;

    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
}

  return (<>
    <div class='container' ref={containerRef}>
        <div id = "chat" class='chat'>
          <div class='chat-header'>
            Unchopify AI Advisor
          </div>
          
          {/* <img id = "pin1" src = "coat.png"></img>
          <img id = "pin2" src = "coat.png"></img>
          <img id = "pin3" src = "coat.png"></img>

          <img id = "result" src = "woman_standing.png"></img> */}
        </div>
        <div class='chatInput'>

            <input type="text" class = 'text-box' id="message" placeholder="Type a message..." />
            

          <button class='prompter' onClick= { sendMessage }> Send </button>
      </div>
    </div>
  </>)
}

export default Chat