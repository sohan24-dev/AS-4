let interviewlist = [];
let rejectedlist = [];
let currentlist = 'all'


let interview = document.getElementById('interview');
let rejected = document.getElementById('rejected');
let total = document.getElementById('total');
let alljobcount = document.getElementById('all-job-count')
let allinterviewcount = document.getElementById('all-interview-count')
let allrejectcount = document.getElementById('all-reject-count')


const interviewSection = document.querySelector('.filter-interview-section')
const rejectedsection = document.querySelector('.filter-reject-section')
// console.log(interviewSection);


// console.log(interview.innerText);

function calculaCount() {
    // console.log(allcvs.children.length);
    total.innerText = allcvs.children.length
    interview.innerText = interviewlist.length
    rejected.innerText = rejectedlist.length
    alljobcount.innerText = allcvs.children.length
    allinterviewcount.innerText = interviewlist.length
    allrejectcount.innerText = rejectedlist.length
}
calculaCount()
// console.log(calculaCount());

const mainContainer = document.querySelector('main')
mainContainer.addEventListener('click', function (event) {
    // console.log("click");
    //  console.log(event.target.classList.contains('interview-btn')); 
    if (event.target.classList.contains('interview-btn')) {
        const parentNode = event.target.parentNode.parentNode;
        const mobile = parentNode.querySelector('.mobile').innerText
        const devolaper = parentNode.querySelector('.devolaper').innerText
        const jobTimeSalary = parentNode.querySelector('.job-time-salary').innerText
        const appliedCv = parentNode.querySelector('#not-applied').innerText
        const description = parentNode.querySelector('.description').innerText


        const cardInfo = {
            mobile,
            devolaper,
            jobTimeSalary,
            appliedCv: 'Interview',
            description
        }
        parentNode.querySelector('#not-applied').innerText = 'Interview'
        // console.log(cardInfo);
        const mobileadd = interviewlist.find(item => item.mobile == cardInfo.mobile)
        if (!mobileadd) {
            interviewlist.push(cardInfo)
            // return interviewlist
        }
        rejectedlist = rejectedlist.filter(item => item.mobile != cardInfo.mobile)
        if (currentlist == "all-reject-btn") {
            rejectfun();
        }
        // interviewfun()
        calculaCount()

    }
    else if (event.target.classList.contains('rejected-btn')) {

        const parentNode = event.target.parentNode.parentNode;
        // console.log("rejected btn click");
        console.log(parentNode);
        const mobile = parentNode.querySelector('.mobile').innerText
        const devolaper = parentNode.querySelector('.devolaper').innerText
        const jobTimeSalary = parentNode.querySelector('.job-time-salary').innerText
        const description = parentNode.querySelector('.description').innerText

        const cardInfo = {
            mobile,
            devolaper,
            jobTimeSalary,
            appliedCv: 'Rejected',
            description
        }

        parentNode.querySelector('#not-applied').innerText = 'Rejected'


        const exists = rejectedlist.find(item => item.mobile == mobile)
        if (!exists) {
            rejectedlist.push(cardInfo)
        }


        interviewlist = interviewlist.filter(item => item.mobile != mobile)
        if (currentlist == "all-interview-btn") {
            interviewfun()
        }
        calculaCount()
    }

})

function interviewfun() {
    interviewSection.innerHTML = ''
    if (interviewlist.length === 0) {
        interviewSection.innerHTML = `
         <div class="card bg-[#F5F5F5] rounded-sm sm:p-5 shadow-xl my-5">
                <div class="p-8">
                    <img class="mx-auto" src="jobs.png" alt="">
                    <h2 class="text-center text-2xl font-bold text-[#134E8E]">No jobs available</h2>
                    <p class="text-center text-[#BFC6C4]">Cheack back for new job opportuntes</p>
                </div>
            </div>`

    }

    for (let interviewcard of interviewlist) {
        // console.log(interviewcard);
        let div = document.createElement('div')
        div.className = 'space-y-7'
        div.innerHTML = ` <div id="card3" class="my-6 bg-[#F5F5F5] p-2 flex justify-between rounded-sm sm:p-5 shadow-xl">
                <div class="letf-card space-y-2">
                    <h2 class="text-2xl mobile">${interviewcard.mobile}</h2>
                    <p class="devolaper">${interviewcard.devolaper}</p>
                    <p class="job-time-salary" >${interviewcard.jobTimeSalary}</p>
                    <p id="not-applied" class="bg-[#A7E6FF] inline-block p-2 description">${interviewcard.appliedCv}</p>
                    <div class="gap-5">
                        <button class="interview-btn bg-[#6295A2] p-2 rounded-md cursor-pointer "
                            id="interview-btn">interview</button>
                        <button class="rejected-btn bg-[#3ABEF9] p-2 rounded-md cursor-pointer mx-3"
                            id="rejected-btn">Rejected</button>
                    </div>
                </div>
                <div  class="right-card bg-[#F1FCFC] rounded-full h-[35px] w-[35px] flex items-center justify-center ">
                    <button class="cursor-pointer fa-lg " id="delet"><i class="fa-solid fa-trash-can deletss"></i></button>
                </div>
            </div>`

        interviewSection.appendChild(div)
    }

}
function rejectfun() {
    rejectedsection.innerHTML = ''
    if (rejectedlist.length === 0 ) {
        rejectedsection.innerHTML = `
         <div class="card bg-[#F5F5F5] rounded-sm sm:p-5 shadow-xl my-5">
                <div class="p-8">
                    <img class="mx-auto" src="jobs.png" alt="">
                    <h2 class="text-center text-2xl font-bold text-[#134E8E]">No jobs available</h2>
                    <p class="text-center text-[#BFC6C4]">Cheack back for new job opportuntes</p>
                </div>
            </div>`

    }

    for (let reject of rejectedlist) {
        // console.log(interviewcard);
        let div = document.createElement('div')
        div.className = 'space-y-7'
        div.innerHTML = ` <div id="card3" class="my-6 bg-[#F5F5F5] p-2 flex justify-between rounded-sm sm:p-5 shadow-xl">
                <div class="letf-card space-y-2">
                    <h2 class="text-2xl mobile">${reject.mobile}</h2>
                    <p class="devolaper">${reject.devolaper}</p>
                    <p class="job-time-salary" >${reject.jobTimeSalary}</p>
                    <p id="not-applied" class="bg-[#A7E6FF] inline-block p-2 description">${reject.appliedCv}</p>
                    <div class="gap-5">
                        <button class="interview-btn bg-[#6295A2] p-2 rounded-md cursor-pointer "
                            id="interview-btn">interview</button>
                        <button class="rejected-btn bg-[#3ABEF9] p-2 rounded-md cursor-pointer mx-3"
                            id="rejected-btn">Rejected</button>
                    </div>
                </div>
                <div  class="right-card bg-[#F1FCFC] rounded-full h-[35px] w-[35px] flex items-center justify-center ">
                    <button class="cursor-pointer fa-lg " id="delet"><i class="fa-solid fa-trash-can rejectdel"></i></button>
                </div>
            </div>`

        rejectedsection.appendChild(div)
    }

}




