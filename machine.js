
// const delet = document.querySelector()

// let currentlist = 'all'


// function deletes(id){
//     const deletparmanet = document.getElementById('btn8')
//     const deletparmanets = document.getElementById('btn9')
//     deletparmanet.parentElement.remove(id)
//     // deletparmanets.parentElement.remove(id)
// }

const container = document.querySelector('main')
container.addEventListener('click', function (event){
    console.log(event.target.classList.contains('delets'));
    if(event.target.classList.contains('delets')){
        const parentdelet = event.target.parentNode.parentNode.parentNode
        console.log(parentdelet);
        parentdelet.remove()
    }
})


const allcvs = document.getElementById('all-cv');
function toggle(id) {
    currentlist = id
    const all = document.getElementById('all-jobs-btn')
    const interview = document.getElementById('all-interview-btn')
    const rejected = document.getElementById('all-reject-btn')
    const alljobcount = document.getElementById('all-job-count')
    const allinterviewcount = document.getElementById('all-interview-count')
    const allrejectcount = document.getElementById('all-reject-count')

    all.classList.add('bg-[#94B4C1]')
    interview.classList.add('bg-[#94B4C1]')
    rejected.classList.add('bg-[#94B4C1]')


    const selected = document.getElementById(id)
    selected.classList.remove('bg-[#94B4C1]')
    // currentlist = id

    if (id == 'all-interview-btn') {
        allcvs.classList.add('hidden')
        interviewSection.classList.remove('hidden')
        rejectedsection.classList.add("hidden");
        alljobcount.classList.add('hidden')
        allrejectcount.classList.add('hidden')
        allinterviewcount.classList.remove('hidden')        
        interviewfun()

    }
    else if (id == 'all-jobs-btn') {
        allcvs.classList.remove('hidden')
        interviewSection.classList.add('hidden')
        rejectedsection.classList.add('hidden')        
    }
    else if (id == 'all-reject-btn') {
        allcvs.classList.add('hidden')
        interviewSection.classList.add('hidden')
        rejectedsection.classList.remove('hidden')
        alljobcount.classList.add('hidden')
        allinterviewcount.classList.add('hidden')
        allrejectcount.classList.remove('hidden')  
        rejectfun()

    }
}