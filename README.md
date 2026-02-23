


## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

1 .Answer => We use this if we want to select an element by  ID after we use its getElementsId. One the other hand if We use this if we want to select an or many element by  className after we use getElementsByClassName . If we want to select a specific element,  in our code we do use quesrySelector If we don't specify the element and there are multiple names, the first one is selected. one the other hand If we select an elements or many elements there are as many names all element selete by querySelectorAll and queryseletor return Elements and quesryseletorall return nodelist

### 2. How do you create and insert a new element into the DOM?
2. Answer => 1 . let div = document.createElement('div')
			2 . div.innerText = "sohan is a good boy you know that"
			3 . after we select a element with a id or class after we appendchild or parentchild, (like you see under)
			4 .  const selet = document.getElementById('id')
			5 .selet.appendchild.div
### 3. What is Event Bubbling? And how does it work?
3. Answer => 1.Event Bubling from bottom to top 
			2 . like we have a div in this div we have button if we click in this button show all html path it is event Bubbling if we want to see a parent of the button we use parentNobe its called event Bubbling 
			3 .it work like  button -> div -> body -> html ->document
### 4. What is Event Delegation in JavaScript? Why is it useful?
4. Answer => 1.Event Delegation like a methord . In this methord we can't use 
             many event listerner in child elements we use event listerner only parent
			element.
			it is helpfull cause we neesd little event listerner , good performance , 
			Takes very little memory. code cleane etc


### 5. What is the difference between preventDefault() and stopPropagation() methods?
5. Answer => Their difference is preventDefault() close brower default behavior 
			and stopPropagation() stop event bubbling 
---




1. GitHub Repository Link: 
2. Live Site Link: 
