const envelope = document.getElementById("envelope")
envelope.addEventListener("click", () => {

  envelope.classList.add("open")

  setTimeout(()=>{
    envelope.style.display="none"
    card.classList.remove("hidden")
    music.play()
  },600)

})

// Page flip

card.addEventListener("click", ()=>{

  if(pageIndex < pages.length-1){

    pages[pageIndex].classList.remove("active")

    pageIndex++

    pages[pageIndex].classList.add("active")

  }

})

// Load gallery images automatically

for(let i=1;i<=20;i++){

  const img=document.createElement("img")

  img.src=`gallery/${i}.png`

  gallery.appendChild(img)

}

// Floating hearts

const heartsContainer = document.getElementById("hearts")

setInterval(()=>{

  const heart=document.createElement("div")

  heart.className="heart"

  heart.innerHTML="❤️"

  heart.style.left=Math.random()*100+"vw"

  heartsContainer.appendChild(heart)

  setTimeout(()=>heart.remove(),6000)

},500)

// Surprise

const surprise=document.getElementById("surprise")

if(surprise){

surprise.addEventListener("click",()=>{

  alert("I love you more than words can say ❤️")

})

}