document.addEventListener("DOMContentLoaded",function(){

    let copertina=document.querySelector("video");

    document.getElementById("volume").onclick=function(){

        if(copertina.muted){
            copertina.muted = false;
            document.getElementById("vol").setAttribute("src", "img/suono.png");
        }
        else{
            copertina.muted = true;
            document.getElementById("vol").setAttribute("src", "img/muto.png");
        }
    };

    
    let clip=document.querySelector(".vid")
  
    clip.addEventListener("mouseover", function(e){
        clip.play();
    });

    
    clip.addEventListener("mouseout", function(e){
        clip.load();
    });

}); //DOMContentLoaded