const fillable = document.querySelectorAll('.fill')
const empties = document.querySelectorAll('.empty')
let selected = null

for(const fill of fillable) {
    fill.addEventListener('dragstart', dragStart)
    fill.addEventListener('dragend', dragEnd)
}

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

function dragStart () {
    this.className += ' hold'
    selected = this
    setTimeout(() => this.className = 'invisble')
    console.log('start')
}

function dragEnd () {
    this.className = 'fill'
    selected = null
    console.log('end')
}

function dragOver(e) {
    e.preventDefault()
    console.log('over')
}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
    console.log('enter')
}

function dragLeave() {
    this.className = 'empty'
    console.log('leave')
}

function dragDrop() {
    this.className = 'empty'
    this.append(selected)
    console.log('drop')
}