const counterspeed =document.querySelectorAll('.counters');
const speed=200;

counterspeed.forEach (counters =>{
    const updateCount =()=>{
        const target=counters.getAttribute('data-target');

        console.log(target);
    }

    updateCount();
})