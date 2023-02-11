            const defaultMode = 'light'
            const localStorage = window.localStorage;
            var icon = document.getElementById("icon");

            icon.onclick = function(){
                document.body.classList.toggle("dark-theme");
                if(!(localStorage.getItem('mode') === 'dark')){
                    localStorage.setItem('mode', 'dark');
                } else {
                    localStorage.setItem('mode', 'light');
                }
            }

            console.log(localStorage.getItem('mode'))
            if(localStorage.getItem('mode') === 'dark'){
                console.log('aici')
                darkMode();
            } else {
                lightMode();
            }
            
            const isDarkMode = () => document.body.classList.contains('dark-theme');
            console.log(themeDiv);
                function darkMode() {
                  //localStorage.setItem("mode","dark");
                  var element = document.body;
                  var icon = document.getElementById("icon");
                  document.body.classList.toggle("dark-theme");
                  //element.className = "darkmode11"
                  icon.innerText = "Dark Mode is ON"
                  icon.style.color = "white"
                }
                function lightMode() {
                  //localStorage.setItem("mode","light");
                  var element = document.body
                  var icon = document.getElementById("icon");
                  document.body.classList.toggle("dark-theme");
                  //element.className = "lightmode11"
                  icon.innerText = "Dark Mode is OFF"
                  icon.style.color = "black"
                }
