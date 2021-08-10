const item = document.querySelector(".item")
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for(placeholder of placeholders){
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop) 
}

function dragstart(event) {
    event.target.classList.add('hold');
    setTimeout(() => event.target.classList.add('hide'), 0);
}

function dragend(event) {
    event.target.className = 'item'
}

function dragover(event){
    event.preventDefault();
}

function dragenter(event){
    console.log('dragenter')
    event.target.classList.add('hovered')
}

function dragleave(event){
    console.log('dragleave')
    event.target.classList.remove('hovered')
}

function dragdrop(event){
    console.log('dragdrop')
    event.target.classList.remove('hovered')
    event.target.append(item)
}