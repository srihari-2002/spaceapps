var toggle = document.querySelector(".navbar")
        var x = document.querySelector(".toggle")
        var line_1 = document.querySelector(".line-1"),line_2 = document.querySelector(".line-2"),line_3 = document.querySelector(".line-3")
        var sign_in = document.querySelector(".sign-up")
        var close = document.querySelector("#close")
        var sign_in_form = document.querySelector(".sign-up-form")
        function drop(){
            if(toggle.style.display=="none" || toggle.style.display==""){
                toggle.style.display="block"
                line_1.style.cssText = "transform:rotate(45deg);margin:0px;"
                line_2.style.cssText = "display:none"
                line_3.style.cssText = "transform:rotate(-45deg);margin:0px;" 
            }else{
                toggle.style.display="none"
                line_1.style.cssText = "transform:rotate(0deg);margin-top:2px;margin-bottom:2px;"
                line_2.style.cssText ="display:block;margin-top:2px;margin-bottom:2px;"
                line_3.style.cssText = "transform:rotate(0deg);margin-top:2px;margin-bottom:2px;"
            }
        }
        setInterval(function(){
            x.addEventListener("click",drop)
        },100)
        
        function show(){
            sign_in_form.style.cssText="visibility : visible;"
            close.addEventListener("click",function(){
                sign_in_form.style.cssText="visibility : hidden;"
            })
        }