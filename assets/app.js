
function changetxt(){
    setInterval(() => {
        if(document.getElementById("txt").textContent == "Social Media Designer"){ 
        document.getElementById("txt").innerHTML = "Desenvolvedor Web Front-End" + '<span class="inter">!</span>'
       
        }else{
            document.getElementById("txt").innerHTML = "Social Media Designer" + '<span class="inter">!</span>'
            
        }
    
    }, 2000);

}


changetxt()

