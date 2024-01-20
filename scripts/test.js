window.onload = () => {

    

    function notifyMe() {

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

    
    async function showNotification() {

            let riderName = 'rid1';
            
            let endPoint= "request.php?rider="+riderName;

            dataFromDB= await fetch(endPoint, {
                method: 'get'
            });
        
            let response = await dataFromDB.json();

            if(response){
                let mensaje = response.mensaje;
          
                navigator.serviceWorker.register('sw.js');
                Notification.requestPermission(function(result) {
                    if (result === 'granted') {
                        navigator.serviceWorker.ready.then(function(registration) {
                        registration.showNotification(mensaje);
                        });
                    }
                });
            }

            navigator.serviceWorker.register('sw.js');
                Notification.requestPermission(function(result) {
                    if (result === 'granted') {
                        navigator.serviceWorker.ready.then(function(registration) {
                        registration.showNotification("prueba");
                        });
                    }
                });
        }
    
    
    //setInterval(showNotification,5000);

    let btn = document.getElementById('prueba');
      
    btn.addEventListener('click',showNotification);
}