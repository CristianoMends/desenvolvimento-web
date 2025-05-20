var isDark = true;
function theme(){
    isDark = !isDark;

    if(isDark){
        document.documentElement.style.setProperty('--primary-color', '#333');
        document.documentElement.style.setProperty('--secondary-color', '#fff');

    }else{
        document.documentElement.style.setProperty('--primary-color', '#fff');
            document.documentElement.style.setProperty('--secondary-color', '#333');
    }
}