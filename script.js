let interviewlist = [];
let rejectedlist = [];
let currentlist = 'all'

let interview = document.getElementById('interview');
let rejected = document.getElementById('rejected');
let total = document.getElementById('total');


const interviewSection = document.querySelector('.filter-interview-section')
const rejectedsection = document.querySelector('.filter-reject-section')
// console.log(interviewSection);


// console.log(interview.innerText);



function calculaCount(){
// console.log(allcvs.children.length);
    total.innerText=allcvs.children.length
    interview.innerText = interviewlist.length
    rejected.innerText = rejectedlist.length
}
calculaCount()

const mainContainer = document.querySelector('main')
mainContainer.addEventListener('click', function(event){
    // console.log(event.target.parentNode.parentNode);
    //  console.log(event.target.classList.contains('interview-btn')); 
     if(event.target.classList.contains('interview-btn')){

     
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
        appliedCv:'Interview',
        description
    }
    parentNode.querySelector('#not-applied').innerText ='Interview'
    // console.log(cardInfo);
    const mobileadd =  interviewlist.find(item => item.mobile == cardInfo.mobile)
    if(!mobileadd){
        interviewlist.push(cardInfo)
        // return interviewlist
    }
    // rejectedlist = rejectedlist.filter(item => item.mobile != cardInfo.mobile)
    interviewfun()
    calculaCount()
    // rejectfun()
    }  
    else if(event.target.classList.contains('rejected-btn')){     
    const parentNode = event.target.parentNode.parentNode;
    const mobile = parentNode.querySelector('.mobile').innerText
    const devolaper = parentNode.querySelector('.devolaper').innerText
    const jobTimeSalary = parentNode.querySelector('.job-time-salary').innerText
    // const appliedCv = parentNode.querySelector('.not-applied').innerText
    const description = parentNode.querySelector('.description').innerText
    

    const cardInfo = {
        mobile,
        devolaper,
        jobTimeSalary,
        appliedCv:'Rejected',
        description
    }
    parentNode.querySelector('#not-applied').innerText ='Rejected'
    // console.log(cardInfo);
    const mobileadd =  rejectedlist.find(item => item.mobile == cardInfo.mobile)
    if(!mobileadd){
        rejectedlist.push(cardInfo)
        // return interviewlist
    }
    rejectfun()
    calculaCount()
    }  
   
})

function interviewfun(){
    interviewSection.innerHTML = ''

    for( let interviewcard of interviewlist){
        // console.log(interviewcard);
        let div = document.createElement('div')
        div.className = 'space-y-7'
        div.innerHTML = ` <div id="card3" class="my-6 bg-[#F5F5F5] p-2 flex justify-between rounded-sm sm:p-5 shadow-xl">
                <div class="letf-card space-y-2">
                    <h2 class="text-2xl">${interviewcard.mobile}</h2>
                    <p>${interviewcard.devolaper}</p>
                    <p>${interviewcard.jobTimeSalary}</p>
                    <p id="not-applied" class="bg-[#A7E6FF] inline-block p-2">${interviewcard.appliedCv}</p>
                    <p>${interviewcard.appliedCv}</p>
                    <div class="gap-5">
                        <button class="bg-[#6295A2] p-2 rounded-md cursor-pointer "
                            id="interview-btn">interview</button>
                        <button class="bg-[#3ABEF9] p-2 rounded-md cursor-pointer mx-3"
                            id="rejected-btn">Rejected</button>
                    </div>
                </div>
                <div id="btn9" onclick="deletes('btn9')"
                    class="right-card bg-[#F1FCFC] rounded-full h-[35px] w-[35px] flex items-center justify-center ">
                    <button class="cursor-pointer fa-lg " id="delet"><i class="fa-solid fa-trash-can "></i></button>
                </div>
            </div>`

         interviewSection.appendChild(div)  
    }

}
function rejectfun(){
    rejectedsection.innerHTML = ''

    for( let reject of rejectedlist){
        // console.log(reject);
        let div = document.createElement('div')
        div.className = 'space-y-7'
        div.innerHTML = ` <div id="card3" class="my-6 bg-[#F5F5F5] p-2 flex justify-between rounded-sm sm:p-5 shadow-xl">
                <div class="letf-card space-y-2">
                    <h2 class="text-2xl">Mobile First Corp</h2>
                    <p>React Native Developer</p>
                    <p>Remote • Full-time • $130,000 - $175,000</p>
                    <p id="not-applied" class="bg-[#A7E6FF] inline-block p-2">${reject.appliedCv}</p>
                    <p>Build cross-platform mobile applications using React Native. Work on products used by millions of
                        users worldwide.</p>
                    <div class="gap-5">
                        <button class="bg-[#6295A2] p-2 rounded-md cursor-pointer "
                            id="interview-btn">interview</button>
                        <button class="bg-[#3ABEF9] p-2 rounded-md cursor-pointer mx-3"
                            id="rejected-btn">Rejected</button>
                    </div>
                </div>
                <div id="btn9" onclick="deletes('btn9')"
                    class="right-card bg-[#F1FCFC] rounded-full h-[35px] w-[35px] flex items-center justify-center ">
                    <button class="cursor-pointer fa-lg " id="delet"><i class="fa-solid fa-trash-can "></i></button>
                </div>
            </div>`

         rejectedsection.appendChild(div)  
    }

}
