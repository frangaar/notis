window.onload = () => {

    

    function notifyMe() {

        var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
        if (mobile) {
            alert("Visit this on a Computer for Better View");              
        } else {
            alert("Visit this on a Computer");   
        }

        Notification.requestPermission();

        
        
        // Let's check if the browser supports notifications
        if (!("Notification" in window)) {
          console.log("This browser does not support desktop notification");
        } 
        // Let's check whether notification permissions have alredy been granted
        else if (Notification.permission === "granted") {
          // If it's okay let's create a notification

          var notification = new Notification("Alerta!",{
            icon:"https://i.pinimg.com/originals/ae/e2/3f/aee23f579754fe36ea8cc2643597ca5a.jpg",
            body:"Movimiento en la ENTRADA",
            timeout: 15000
          });
          notification.onclick = function(){
            window.open("https://www.google.com");
            this.close();
          }
        }
    };
    
    
    let btn = document.getElementById('prueba');
      
    btn.addEventListener('click',notifyMe);
}