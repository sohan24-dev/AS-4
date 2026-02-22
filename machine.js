// const deletparmanet = document.getElementById('delete')
// // console.log(object);

// deletparmanet.addEventListener('click', function(){
//     this.parentElement.remove()
//     console.log('sohan');
// })
const allcvs = document.getElementById('all-cv');
// let currentlist = 'all'


// function deletes(id){
//     const deletparmanet = document.getElementById('btn8')
//     const deletparmanets = document.getElementById('btn9')
//     deletparmanet.parentElement.remove(id)
//     // deletparmanets.parentElement.remove(id)
// }







function toggle(id){
    currentlist = id
    const all = document.getElementById('all-jobs-btn')
    const interview = document.getElementById('all-interview-btn')
    const rejected = document.getElementById('all-reject-btn')

    all.classList.add('bg-[#94B4C1]')
    interview.classList.add('bg-[#94B4C1]')
    rejected.classList.add('bg-[#94B4C1]')


    const selected = document.getElementById(id)
    selected.classList.remove('bg-[#94B4C1]')
    // currentlist = id

    if(id == 'all-interview-btn'){
        allcvs.classList.add('hidden')
        interviewSection.classList.remove('hidden')
        rejectedsection.classList.add("hidden");
        interviewfun()
    }
    else if (id == 'all-jobs-btn'){
        allcvs.classList.remove('hidden')
        interviewSection.classList.add('hidden')
        rejectedsection.classList.add('hidden')
    }
    else if(id == 'all-reject-btn'){
        allcvs.classList.add('hidden')
        interviewSection.classList.add('hidden')
        rejectedsection.classList.remove('hidden')
        rejectfun()

    }
}