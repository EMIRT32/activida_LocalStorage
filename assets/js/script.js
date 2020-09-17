const dark = document.getElementById('dark');
const light = document.getElementById('light');
const pink = document.getElementById('pink');
const ciand = document.getElementById('cian');

dark.addEventListener('click', tema=>{
    container.className = "conatiner dark"
   // document.getElementById('container').classList.add('dark');
    localStorage.setItem('tema', 'dark');
});
light.addEventListener('click', tema=>{
    container.className = "conatiner light"
   // document.getElementById('container').classList.remove('dark');
    localStorage.setItem('tema', 'light');
});
pink.addEventListener('click', ()=>{
    container.className = "container pink"
    localStorage.setItem('tema', 'pink')
})


const temaEnStorage = ()=>{
    const temaGuardado = localStorage.getItem('tema') ;
    if (temaGuardado == 'dark'){
        
        container.classList.add('dark');
    } else if (temaGuardado == 'light'){
        container.className = 'container';
        //container.classList.remove('dark');
    } else if (temaGuardado == 'pink'){
        container.classList.add('pink');
    }
    console.log(temaGuardado);
}
temaEnStorage();



/*
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
*/