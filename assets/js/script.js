const dark = document.getElementById('dark')
const light = document.getElementById('light')
dark.addEventListener('click', tema=>{
    document.getElementById('container').classList.add('dark')
    localStorage.removeItem('ligth');
    //localStorage.setItem('dark', 'dark');
    
   
    
})
light.addEventListener('click', tema=>{
    document.getElementById('container').classList.add('light')
    localStorage.removeItem('dark');
    //localStorage.setItem('light', 'ligth');
    
})

const temas = localStorage.getItem('dark');
const temaL = localStorage.getItem('light');
document.ready(tema());
function tema(){
   
    if (localStorage.getItem('dark') == 'dark') {
        document.getElementById('container').classList.add('dark');
    } else if (localStorage.getItem('light') == 'light'){
        document.getElementById('container').classList.add('light');
    } 
}
