import './style.css'

const headerController = (() => {
  const header = document.createElement('header')

  const homeDiv = document.createElement('div')
  const home = document.createTextNode('HOME')
  homeDiv.appendChild(home)
  header.appendChild(homeDiv)

  const menuDiv = document.createElement('div')
  const menu = document.createTextNode('MENU')
  menuDiv.appendChild(menu)
  header.appendChild(menuDiv)

  const contactDiv = document.createElement('div')
  const contact = document.createTextNode('CONTACT')
  contactDiv.appendChild(contact)
  header.appendChild(contactDiv)

  const render = (content) => {
    content.appendChild(header)
  }

  const getHomeDiv = () => homeDiv
  const getMenuDiv = () => menuDiv
  const getContactDiv = () => contactDiv

  return {
    render,
    getHomeDiv,
    getMenuDiv,
    getContactDiv,
  }
})()

const homepageController = (() => {
  const wrapper = document.createElement('div')
  wrapper.classList.add('wrapper')

  const titleDiv = document.createElement('div')
  titleDiv.classList.add('title')
  wrapper.appendChild(titleDiv)

  const nameDiv = document.createElement('div')
  const name = document.createTextNode('WHITE PLATE')
  nameDiv.classList.add('name')
  nameDiv.appendChild(name)
  titleDiv.appendChild(nameDiv)

  const reviewDiv = document.createElement('div')
  const review = document.createTextNode('"The best" ~ Food Reviewer')
  reviewDiv.classList.add('review')
  reviewDiv.appendChild(review)
  titleDiv.appendChild(reviewDiv)

  const render = (main) => {
    main.appendChild(wrapper)
  }

  return {
    render
  }
})()

const menuController = (() => {
  const wrapper = document.createElement('div')
  wrapper.classList.add('wrapper')

  const title = document.createElement('div')
  title.classList.add('title')
  wrapper.appendChild(title)

  let sections = ['Starters', 'Mains', 'Dessert', 'Drinks']
  let food = [
    [
      ['Medley of Mushroom', 'Blended mushrooms in creamy soup with aromatic herbs'],
      ['Prawn Bisque', 'Flavourful prawn bisque with crispy prawn croquette']
    ],
    [
      ['Aglio Olio', 'Al dente spaghetti with abundant garlic with fresh prawns'],
      ['Fish & Fries', 'Beer battered fish with orange mayonnaise on the side'],
      ['Chicken Confit', 'Lightly salted chicken leg pan fried to a golden crisp']
    ],
    [
      ['Dark Chocolate Tart', 'Sable crust, topped with fresh whip cream'],
      ['Double Sided Cheesecake', 'Graham crust with warm apple slaw']
    ],
    [
      ['Domestic Bottled Beer', 'Budweiser, Coors Light, Miller Lite, Mich Ultra'],
      ['Wine', 'House Chardonnay, House Cabernet'],
      ['Martini', 'Turi vodka shaken with olive juice, served with olives']
    ]
  ]

  food.forEach((v, i) => {
    const section = document.createElement('div')
    section.classList.add('menu-section')
    const sectionText = document.createTextNode(sections[i])
    section.appendChild(sectionText)
    title.appendChild(section)

    v.forEach((food) => {
      const foodName = document.createElement('div')
      foodName.classList.add('food-name')
      const foodNameText = document.createTextNode(food[0])
      foodName.appendChild(foodNameText)
      title.appendChild(foodName)

      const foodDesc = document.createElement('div')
      foodDesc.classList.add('food-desc')
      const foodDescText = document.createTextNode(food[1])
      foodDesc.appendChild(foodDescText)
      title.appendChild(foodDesc)
    })
  })

  const firstHeader = title.firstChild
  firstHeader.classList.add('first-header')

  const render = (main) => {
    main.appendChild(wrapper)
  }

  return {
    render
  }
})()

const contactController = (() => {
  const wrapper = document.createElement('div')
  wrapper.classList.add('wrapper')

  const title = document.createElement('div')
  title.classList.add('title')
  wrapper.appendChild(title)

  const reserve = document.createElement('div')
  reserve.classList.add('reserve')
  const reserveText = document.createTextNode('Make a Reservation')
  reserve.appendChild(reserveText)
  title.appendChild(reserve)

  const contact = document.createElement('div')
  contact.classList.add('contact-header')
  const contactText = document.createTextNode('Contact')
  contact.appendChild(contactText)
  title.appendChild(contact)

  const number = document.createElement('div')
  const numberText = document.createTextNode('1234 5678')
  number.appendChild(numberText)
  title.appendChild(number)

  const mail = document.createElement('div')
  const mailto = document.createElement('a')
  mailto.href = "mailto: example@example.com"
  mailto.classList.add('mailto')
  const mailText = document.createTextNode('example@example.com')
  mailto.appendChild(mailText)
  mail.appendChild(mailto)
  title.appendChild(mail)

  const location = document.createElement('div')
  location.classList.add('contact-header')
  const locationText = document.createTextNode('Location')
  location.appendChild(locationText)
  title.appendChild(location)

  const street = document.createElement('div')
  const streetText = document.createTextNode('123 Street')
  street.appendChild(streetText)
  title.appendChild(street)

  const code = document.createElement('div')
  const codeText = document.createTextNode('City, State 123456')
  code.appendChild(codeText)
  title.appendChild(code)

  const render = (main) => {
    main.appendChild(wrapper)
  }

  return {
    render
  }
})()

const pageController = (() => {
  const content = document.getElementById('content')

  headerController.render(content)

  const main = document.createElement('main')
  content.appendChild(main)
  homepageController.render(main)

  const renderHome = () => {
    main.removeChild(main.firstChild)
    homepageController.render(main)
  }

  const renderMenu = () => {
    main.removeChild(main.firstChild)
    menuController.render(main)
  }

  const renderContact = () => {
    main.removeChild(main.firstChild)
    contactController.render(main)
  }

  headerController.getHomeDiv().addEventListener('click', renderHome)
  headerController.getMenuDiv().addEventListener('click', renderMenu)
  headerController.getContactDiv().addEventListener('click', renderContact)
})()
