const message = `alyaa,makasi yaa udah jadi part of my life aku jadi belajar banyak hal aku kira kita akan menua bersama dan explore dunia yang luas ini bareng-bareng tapi takdir berkata lain,maybe in another life.

semangat yaaa ngejar impianmu
i wish your dream come true,mungkin ini kali terakhir nyemangatin kamu, ujung-ujungnya seperti kisah dilan & milea yang sering aku sebut:(.

once again thank you for everything & maaf kalo aku punya salah,wish you all the best     
 Goodbye.

-Strangers`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}