const hackSentences = [
    "Welcome to the hacking realm, initiated by Anish.",
    "Accessing the mainframe...",
    "Bypassing security protocols...",
    "Compromising social media accounts...",
    "Hacked successfully: Data extracted.",
    "Establishing a secure connection...",
    "Mission accomplished: System breached."
  ];
  async function showingSentences(){
      let nameGiven= document.getElementById("nameGiven");
      let output =document.getElementById("output");
      let name=nameGiven.value || "You";

      output.innerHTML=" ";
      nameGiven.disabled=true;
      document.querySelector("button").disabled=true;
      for (let i=0;i<hackSentences.length;i++){
          const delay=new Promise((resolve)=>{
             setTimeout(()=>{
                 resolve();
             },1500); 
          });
          await delay;
          const p= document.createElement("p");
          p.textContent=hackSentences[i];
          output.appendChild(p);
          
      }
      const finalMessage = document.createElement("p");
      finalMessage.textContent = `Hacked ${name}!`;
      finalMessage.style.color = "red";
      output.appendChild(finalMessage);

      nameGiven.disabled = false;
      document.querySelector("button").disabled = false;
  }
