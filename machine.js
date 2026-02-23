// function re(){
//      const contai = document.querySelector('#filter-interview-section')
//     contai.addEventListener('click', function (event){
//      if (event.target.classList.contains('deletss')){
//             const parentdelets = event.target.parentNode.parentNode.parentNode
//             const indel = document.getElementById('all-interview-count')
//             indel.innerText = Number(indel.innerText) - 1
//             const interviews = document.getElementById('interview');
//             interviews.innerText = indel.innerText

//             const del = document.getElementById('all-job-count')
//             // const interviwss= document.getElementById('all-interview-count')
//             del.innerText = Number(del.innerText) - 1
//             let totals = document.getElementById('total');
//             totals.innerText = del.innerText
//             // parentdelet.remove()

//             parentdelets.remove()
//         }
// })}
// re()


function deletsss() {

    const container = document.querySelector('main')
    container.addEventListener('click', function (event) {
        // console.log(event.target.classList.contains('delets'));
        if (event.target.classList.contains('delets')) {
            const parentdelet = event.target.parentNode.parentNode.parentNode
            // console.log(parentdelet);
            const del = document.getElementById('all-job-count')
            // const interviwss= document.getElementById('all-interview-count')
            del.innerText = Number(del.innerText) - 1
            let totals = document.getElementById('total');
            totals.innerText = del.innerText
            parentdelet.remove()
            calculaCount()
        }
        else if (event.target.classList.contains('deletss')){
            const parentdelets = event.target.parentNode.parentNode.parentNode
            const indel = document.getElementById('all-interview-count')
            indel.innerText = Number(indel.innerText) - 1
            const interviews = document.getElementById('interview');
            interviews.innerText = indel.innerText
            const soh = document.getElementById('sohan1')
            // console.log(soh.innerText);
            const remenmingdata = interviewlist.filter(interview => interview.mobile !==soh.innerText)
            // console.log(remenmingdata);
            interviewlist = remenmingdata

            parentdelets.remove()
            calculaCount()
            interviewfun()
        }
        else if (event.target.classList.contains('rejectdel')){
            const rejectdelets = event.target.parentNode.parentNode.parentNode
            const reject = document.getElementById('all-reject-count')
            reject.innerText = Number(reject.innerText) - 1
            const rejectss = document.getElementById('rejected');
            rejectss.innerText = reject.innerText
            const sohs = document.getElementById('sohan')
            const remenming = rejectedlist.filter(reject => reject.mobile !==sohs.innerText)
            // console.log(sohs.innerText);
            rejectedlist = remenming

            rejectdelets.remove()
            calculaCount()
            rejectfun()
        }

    })
}
deletsss()




const allcvs = document.getElementById('all-cv');
function toggle(id) {
    currentlist = id
    const all = document.getElementById('all-jobs-btn')
    const interview = document.getElementById('all-interview-btn')
    const rejected = document.getElementById('all-reject-btn')
    const alljobcount = document.getElementById('all-job-counts')
    const allinterviewcount = document.getElementById('all-interview-counts')
    const allrejectcount = document.getElementById('all-reject-counts')
    // const alljobcounts = document.getElementById('all-count')

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
        // alljobcounts.classList.remove('hidden')

        interviewfun()

    }
    else if (id == 'all-jobs-btn') {
        allcvs.classList.remove('hidden')
        interviewSection.classList.add('hidden')
        rejectedsection.classList.add('hidden')
        alljobcount.classList.remove('hidden')
        allinterviewcount.classList.add('hidden')
        allrejectcount.classList.add('hidden')
        // alljobcount.classList.remove('hidden')        
    }
    else if (id == 'all-reject-btn') {
        allcvs.classList.add('hidden')
        interviewSection.classList.add('hidden')
        rejectedsection.classList.remove('hidden')
        alljobcount.classList.add('hidden')
        allinterviewcount.classList.add('hidden')
        allrejectcount.classList.remove('hidden')
        // alljobcounts.classList.remove('hidden')
        rejectfun()

    }
}