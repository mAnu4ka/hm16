axios.get('https://jsonplaceholder.typicode.com/comments?ID=12345')
    .then(function (response) {
        CreateComent(response)
    })
    .catch(function (error) {
        console.log(error);
    })

let futer = document.querySelector('footer')
let pshow = document.querySelector('.showcoments')
let show = document.querySelector('.show')
let showbuton = document.querySelector('.showbuton')
let showcoments
let course_modal = document.querySelector('.course-modal')
let bg_modal = document.querySelector('.bg-modal')
let body = document.querySelector('body')
let form = document.querySelector('form')
let shows = document.querySelectorAll('.shows')
let emails = document.querySelector('.emails')
const getRandomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let arr
let concorn = 0
let mass2
const CreateComent = (mass) => {
    arr = mass.data
    mass2 = mass.data.slice(getRandomInRange(1, 10), getRandomInRange(10, 20))
    pshow.innerText = `(${mass2.length})`
    show.onclick = () => {
        createtwop(show)
        if (concorn == 0) {
            creat()
            for (const item of mass2) {
                CreateItem(item)
            }
        } else if (concorn == 1) {
            let showcomentsss = document.querySelector('.showcoments')
            showcomentsss.remove()
            concorn--
            concorn--
            clear(show)
        }
        concorn++
    }
}
const CreateItem = (comentobj) => {
    console.log(comentobj);
    futer.innerHTML += `<div class="item">
            <div class="text" id='${comentobj.id}'>
                <p class="shows">${comentobj.name}</p>
                <span>${comentobj.body}</span>
            </div>
            <button class="likecom">
                <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.9976 1.97248C12.6799 1.66418 12.3028 1.41961 11.8877 1.25275C11.4726 1.08588 11.0276 1 10.5783 1C10.129 1 9.68407 1.08588 9.26897 1.25275C8.85386 1.41961 8.47671 1.66418 8.15907 1.97248L7.49983 2.61202L6.8406 1.97248C6.19898 1.35002 5.32874 1.00032 4.42135 1.00032C3.51395 1.00032 2.64372 1.35002 2.00209 1.97248C1.36046 2.59494 1 3.43918 1 4.31947C1 5.19977 1.36046 6.04401 2.00209 6.66647L2.66132 7.30601L7.49983 12L12.3383 7.30601L12.9976 6.66647C13.3154 6.35831 13.5675 5.99243 13.7395 5.58972C13.9115 5.18702 14 4.75538 14 4.31947C14 3.88357 13.9115 3.45193 13.7395 3.04923C13.5675 2.64652 13.3154 2.28064 12.9976 1.97248V1.97248Z"
                        stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span>${getRandomInRange(1,20)}</span>
            </button>
        </div>`
    shows = document.querySelectorAll('.shows')
    for (const item of shows) {
        let text = item.innerText
        item.onclick = () => {
            emails = document.querySelector('.emails')
            emails.innerText = comentobj.email
            showModal2(text)
        }
    }
}

const clear = (element) => {
    futer.innerHTML = ' '
    element.innerHTML = `Просмотреть все коментарии <span class="showcoments">(${mass2.length})</span>`
}

const clear2 = (element) => {
    element.innerHTML = ' '
}

const createtwop = (element) => {
    element.innerHTML = `<p class="show">Скрыть все коментарии</p><div class='line'></div>`
}

const creat = () => {

    let span = document.createElement('span')
    span.innerText = 'Написать коментарий'
    span.classList.add('showcoments')
    span.setAttribute('data-with', '646px')
    span.setAttribute('data-haight', '646px')
    span.setAttribute('data-input', '2')
    showbuton.append(span)
    showcoments = document.querySelectorAll('.showcoments')
    console.log(showcoments.length);
    anim(showcoments)
}

let arr_plesholder_for_inp = ['your user Name', 'coment']
let arr_name_for_inp = ['name', 'body', ]

const createmobile = (input, text) => {
    form.innerHTML = ' '
    let inputmobail
    let h1mobil = document.createElement('h3')
    let buton = document.createElement('button')
    h1mobil.innerText = text
    buton.classList.add('create')
    buton.innerText = text
    form.append(h1mobil)
    for (let i = 0; i < input; i++) {
        inputmobail = document.createElement('input')
        inputmobail.setAttribute('type', 'text')
        inputmobail.setAttribute('placeholder', arr_plesholder_for_inp[i])
        inputmobail.setAttribute('name', arr_name_for_inp[i])
        form.append(inputmobail)
    }
    form.append(buton)
    REGEX()
}

const closeModal = () => {
    bg_modal.style.opacity = "0"
    course_modal.style.opacity = "0"
    course_modal.style.width = "0px"
    course_modal.style.height = '0px'
    body.style.overflow = 'scroll'

    setTimeout(() => {
        bg_modal.style.display = "none"
        course_modal.style.display = "none"
    }, 100);
}

const showModal = (width, haight, input, text) => {
    bg_modal.style.display = "block"
    course_modal.style.display = "flex"
    body.style.overflow = 'hidden'
    course_modal.style.width = width
    course_modal.style.height = haight
    setTimeout(() => {
        bg_modal.style.opacity = "1"
        course_modal.style.opacity = "1"
    }, 100);

    createmobile(input, text)
}

const anim = (butns) => {
    console.log(butns);
    for (const but of butns) {
        but.onclick = () => {
            let valueinnrTEXT = but.innerText
            let width = but.getAttribute('data-with')
            let haight = but.getAttribute('data-haight')
            let input = but.getAttribute('data-input')
            showModal(width, haight, input, valueinnrTEXT)
        }
    }
}

const REGEX = () => {
    form.onsubmit = () => {
        event.preventDefault()
        let fm = new FormData(form)
        let Create_New_Task = {
            id: getRandomInRange(1, 10000000),
        }
        fm.forEach((a, b) => {
            Create_New_Task[b] = a
        })
        let butensclose = document.querySelectorAll('.create')
        for (const but of butensclose) {
            but.onclick = () => {
                closeModal()
                mass2.push(Create_New_Task);
                clear2(futer)
                for (const item of mass2) {
                    CreateItem(item)
                }
            }
        }
    }
}
let course_modal2 = document.querySelector('.course-modal2')
let bg_modal2 = document.querySelector('.bg-modal2')

const closeModal2 = () => {

    bg_modal2.style.opacity = "0"
    course_modal2.style.opacity = "0"
    course_modal2.style.width = "0px"
    course_modal2.style.height = '0px'
    body.style.overflow = 'scroll'

    setTimeout(() => {
        bg_modal2.style.display = "none"
        course_modal2.style.display = "none"
    }, 100);
}

const showModal2 = (text) => {
    bg_modal2.style.display = "block"
    course_modal2.style.display = "flex"
    body.style.overflow = 'hidden'
    course_modal2.style.width = '646px'
    course_modal2.style.height = '646px'
    setTimeout(() => {
        bg_modal2.style.opacity = "1"
        course_modal2.style.opacity = "1"
    }, 100);
    let name__modail = document.querySelector('.names')
    name__modail.innerText = text
    let close = document.querySelector('.closes')
    close.onclick = () => {
        closeModal2()
    }
}

for (const item of shows) {
    let text = item.innerText
    item.onclick = () => {
        showModal2(text, 'dler@gardner.biz')
    }
}