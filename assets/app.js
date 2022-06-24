changetxt()
function changetxt(){
    setInterval(() => {
        if(document.getElementById("txt").textContent == "Social Media Designer"){ 
        document.getElementById("txt").innerHTML = "Desenvolvedor Web"
        document.body.style.background = ' radial-gradient(circle at 1.8% 4.8%, rgb(17, 23, 58) 0%, rgb(58, 85, 148) 90%)'

        }else{
            document.getElementById("txt").innerHTML = "Social Media Designer"
            document.body.style.background = ' linear-gradient(109.6deg, rgb(43, 1, 91) 13.4%, rgb(122, 2, 54) 100.2%)'
            
        }
    
    }, 2000);

}


function suave(){ 
    window.scroll({       // 1
      top: document
      .querySelector('body' )
        .offsetTop,       // 2
      left: 0,
      behavior: 'smooth'// 3
     });
  }
  suave()
  
  function portfolio(){
    this.scrollIntoView({ behavior: "smooth" });
  }