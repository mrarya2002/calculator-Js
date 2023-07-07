const screen = document.querySelector(".screen")  
const buttons = document.querySelectorAll(".btn")

const themes = document.querySelectorAll(".theme")

themes.forEach(ele =>{
  ele.addEventListener("click",(e)=>{
    document.querySelector(".active").classList.remove("active")
    e.target.classList.add("active")
    theme = e.target;
    if(theme.classList.contains("theme2")){
      document.body.classList.remove("theme3")
      document.body.classList.add("theme2")
    }else if(theme.classList.contains("theme3")){
      document.body.classList.remove("theme2")
      document.body.classList.add("theme3")
    }else{
      document.body.classList.remove("theme2")
      document.body.classList.remove("theme3")
    }
  })
})



buttons.forEach(input=>{
  input.addEventListener("click",()=>{
    
    cmd = input.innerHTML;

    if(cmd === "="){
      out = eval(screen.value)
      screen.value = out
    }else if(cmd=== "DEL"){
      screen.value = screen.value.slice(0,screen.value.length-1)
    }
    else if(cmd=== "RESET"){
      screen.value = ""
    }
    else if(cmd === "x"){
      screen.value+="*"
    }
    else{
      console.log(input.innerHTML)
      screen.value+=input.innerHTML
    }
  })
})