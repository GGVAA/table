const tableData = [
  {
    logo: "../img/1Tab.png",
    id: 1,
    logoName: "Figma",
    link: "https://www.figma.com/",
    cardType: "Visa",
    cardNumber: "*****2458",
    name: "Itai Bracha",
    date1: "Jan 5,2022",
    dateCompare: "2022/01/05-2022/08/02",
    date2: "Aug 2,2022",
    status: "Pending",
    email: "Itai Bracha31@gmail.com",
    transaction: 83.22,
    dot: "...",
  },
  {
    logo: "../img/2Tab.png",
    logoName: "Abode XD",
    id: 2,
    link: "https://www.adobe.com/",
    cardType: "Visa",
    cardNumber: "*****4268",
    name: "Anna",
    date1: "Jan 10,2022",
    date2: "Jan 12,2022",
    dateToCompare: "2022/01/10-2022/01/12",
    status: "Done",
    email: "Itai Bracha31@gmail.com",
    transaction: 78.99,
    dot: "...",
  },

  {
    logo: "../img/3Tab.png",
    logoName: "Mailchimp",
    id: 3,
    link: "https://mailchimp.com/",
    cardType: "Visa",
    cardNumber: "*****9456",
    name: "Kate",
    date1: "Jan 14,2022",
    date2: "Sept 2,2022",
    dateToCompare: "2022/01/14-2022/09/02",
    status: "Done",
    email: "Itai Bracha31@gmail.com",
    transaction: 123.82,
    dot: "...",
  },

  {
    logo: "../img/4Tab.png",
    logoName: "WIX",
    id: 4,
    link: "https://www.wix.com/",
    status: "Pending",
    cardType: "Visa",
    cardNumber: "*****1025",
    name: "Bob",
    date1: "Jan 28,2022",
    date2: "May 5,2022",
    dateToCompare: "2022/01/28-2022/05/05",
    email: "Itai Bracha31@gmail.com",
    transaction: 1783.22,
    dot: "...",
  },

  {
    logo: "../img/5Tab.png",
    logoName: "Youtube",
    id: 5,
    link: "https://www.youtube.com/",
    cardType: "Visa",
    cardNumber: "*****8965",
    name: "Max",
    date1: "Jan 18,2022",
    date2: "Dec 2,2022",
    dateToCompare:"2022/01/18-2022/12/02",
    status: "Done",
    email: "Itai Bracha31@gmail.com",
    transaction: 13.02,
    dot: "...",
  },

  {
    logo: "../img/5Tab.png",
    logoName: "Youtube",
    id: 6,
    link: "https://www.youtube.com/",
    cardType: "Visa",
    cardNumber: "*****6892",
    name: "Pavlo",
    date1: "Jan 18,2022",
    date2: "Aug 2,2022",
    dateToCompare: "2022/01/18-2022/08/02",
    status: "Done",
    email: "Itai Bracha31@gmail.com",
    transaction: 93.22,
    dot: "...",
  },

  {
    logo: "../img/5Tab.png",
    logoName: "Youtube",
    id: 7,
    link: "https://www.youtube.com/",
    cardType: "Visa",
    cardNumber: "*****8963",
    name: "Sofi",
    date1: "Jan 1,2022",
    date2: "Aug 12,2022",
    dateToCompare: "2022/01/01-2022/08/12",
    status: "Done",
    email: "Itai Bracha31@gmail.com",
    transaction: 783.50,
    dot: "...",
  },
  {
    logo: "../img/1Tab.png",
    id: 8,
    logoName: "Figma",
    link: "https://www.figma.com/",
    cardType: "Visa",
    cardNumber: "*****1468",
    name: "Bob",
    date1: "Jan 15,2022",
    date2: "Aug 22,2022",
    dateToCompare: "2022/01/01-2022/08/12",
    status: "Done",
    email: "Itai Bracha31@gmail.com",
    transaction: 53.22,
    dot: "...",
  },
  {
    logo: "../img/2Tab.png",
    logoName: "Abode XD",
    id: 9,
    link: "https://www.adobe.com/",
    cardType: "Visa",
    cardNumber: "*****2122",
    name: "Bob",
    date1: "July 10,2022",
    date2: "Aug 12,2022",
    dateToCompare: "2022/07/10-2022/08/12",
    status: "Done",
    email: "Itai Bracha31@gmail.com",
    transaction: 589.22,
    dot: "...",
  },
  {
    logo: "../img/3Tab.png",
    logoName: "Mailchimp",
    id: 10,
    link: "https://mailchimp.com/",
    cardType: "Visa",
    cardNumber: "*****9632",
    name: "Kate",
    date1: "Jan 14,2022",
    date2: "Aug 12,2022",
    dateToCompare: "2022/01/14-2022/08/12",
    status: "Done",
    email: "Itai Bracha31@gmail.com",
    transaction: 103.22,
    dot: "...",
  },

  {
    logo: "../img/4Tab.png",
    logoName: "WIX",
    id: 11,
    link: "https://www.wix.com/",
    status: "Pending",
    cardType: "Visa",
    cardNumber: "*****9876",
    name: "Bob",
    date1: "Jan 18,2022",
    date2: "Sept 2,2022",
    dateToCompare: "2022/01/18-2022/09/02",
    email: "Itai Bracha31@gmail.com",
    transaction: 573.22,
    dot: "...",
  },
  {
    logo: "../img/1Tab.png",
    id: 12,
    logoName: "Figma",
    link: "https://www.figma.com/",
    cardType: "Visa",
    cardNumber: "*****2458",
    name: "Itai Bracha",
    date1: "Jan 5,2022",
    date2: "Jan 8,2022",
    dateToCompare: "2022/01/05-2022/01/08",
    status: "Pending",
    email: "Itai Bracha31@gmail.com",
    transaction: 193.22,
    dot: "...",
  },
  {
    logo: "../img/2Tab.png",
    logoName: "Abode XD",
    id: 13,
    link: "https://www.adobe.com/",
    cardType: "Visa",
    cardNumber: "*****4268",
    name: "Anna",
    date1: "Jan 10,2022",
    date2: "Feb 2,2022",
    dateToCompare: "2022/01/05-2022/02/02",
    status: "Done",
    email: "Itai Bracha31@gmail.com",
    transaction: 883.22,
    dot: "...",
  },

  {
    logo: "../img/3Tab.png",
    logoName: "Mailchimp",
    id: 14,
    link: "https://mailchimp.com/",
    cardType: "Visa",
    cardNumber: "*****9456",
    name: "Kate",
    date1: "Jan 14,2022",
    date2: "Sept 2,2022",
    dateToCompare: "2022/01/14-2022/09/02",
    status: "Done",
    email: "Itai Bracha31@gmail.com",
    transaction: 783.22,
    dot: "...",
  },

  {
    logo: "../img/4Tab.png",
    logoName: "WIX",
    id: 15,
    link: "https://www.wix.com/",
    status: "Pending",
    cardType: "Visa",
    cardNumber: "*****1025",
    name: "Bob",
    date1: "Nov 28,2022",
    date2: "Nov 3,2022",
    dateToCompare: "2022/11/28-2022/11/03",
    email: "Itai Bracha31@gmail.com",
    transaction: 783.22,
    dot: "...",
  },

  {
    logo: "../img/5Tab.png",
    logoName: "Youtube",
    id: 16,
    link: "https://www.youtube.com/",
    cardType: "Visa",
    cardNumber: "*****8965",
    name: "Max",
    date1: "Nov 28,2022",
    date2: "Nov 3,2022",
    dateToCompare: "2022/11/28-2022/11/03",
    status: "Done",
    email: "Itai Bracha31@gmail.com",
    transaction: 783.22,
    dot: "...",
  },

  {
    logo: "../img/5Tab.png",
    logoName: "Youtube",
    id: 17,
    link: "https://www.youtube.com/",
    cardType: "Visa",
    cardNumber: "*****6892",
    name: "Pavlo",
    date1: "Jan 5,2022",
    date2: "Jan 8,2022",
    dateToCompare: "2022/01/05-2022/01/08",
    status: "Done",
    email: "Itai Bracha31@gmail.com",
    transaction: 783.22,
    dot: "...",
  },

  {
    logo: "../img/5Tab.png",
    logoName: "Youtube",
    id: 18,
    link: "https://www.youtube.com/",
    cardType: "Visa",
    cardNumber: "*****8963",
    name: "Sofi",
    date1: "Jan 10,2022",
    date2: "Feb 2,2022",
    dateToCompare: "2022/01/05-2022/02/02",
    status: "Done",
    email: "Itai Bracha31@gmail.com",
    transaction: 83.22,
    dot: "...",
  },
  {
    logo: "../img/1Tab.png",
    id: 19,
    logoName: "Figma",
    link: "https://www.figma.com/",
    cardType: "Visa",
    cardNumber: "*****1468",
    name: "Itai Bracha",
    date1: "Jan 10,2022",
    date2: "Jan 12,2022",
    dateToCompare: "2022/01/10-2022/01/12",
    status: "Done",
    email: "Itai Bracha31@gmail.com",
    transaction: 73.8,
    dot: "...",
  },
  {
    logo: "../img/2Tab.png",
    logoName: "Abode XD",
    id: 20,
    link: "https://www.adobe.com/",
    cardType: "Visa",
    cardNumber: "*****2122",
    name: "Anna",
    date1: "Jan 10,2022",
    date2: "Feb 2,2022",
    dateToCompare: "2022/01/05-2022/02/02",
    status: "Done",
    email: "Itai Bracha31@gmail.com",
    transaction: 883.9,
    dot: "...",
  },
  {
    logo: "../img/3Tab.png",
    logoName: "Mailchimp",
    id: 21,
    link: "https://mailchimp.com/",
    cardType: "Visa",
    cardNumber: "*****9632",
    name: "Kate",
    date1: "Jan 10,2022",
    date2: "Jan 12,2022",
    dateToCompare: "2022/01/10-2022/01/12",
    status: "Pending",
    email: "Itai Bracha31@gmail.com",
    transaction: 783.22,
    dot: "...",
  },

  {
    logo: "../img/4Tab.png",
    logoName: "WIX",
    id: 22,
    link: "https://www.wix.com/",
    status: "Pending",
    cardType: "Visa",
    cardNumber: "*****9876",
    name: "Bob",
    date1: "Jan 10,2022",
    date2: "Feb 2,2022",
    dateToCompare: "2022/01/05-2022/02/02",
    email: "Itai Bracha31@gmail.com",
    transaction: 77.22,
    dot: "...",
  },
];

let newMassive = [
  {
    logo: "../img/1Tab.png",
    id: 1,
    logoName: "Figma",
    link: "https://www.figma.com/",
    cardType: "Visa",
    cardNumber: "*****2458",
    name: "Itai Bracha",
    date1: "Jan 5,2022",
    dateCompare: "2022/01/05-2022/08/02",
    date2: "Aug 2,2022",
    status: "Pending",
    email: "Itai Bracha31@gmail.com",
    transaction: 83.22,
    dot: "...",
  },
  {
    logo: "../img/2Tab.png",
    logoName: "Abode XD",
    id: 2,
    link: "https://www.adobe.com/",
    cardType: "Visa",
    cardNumber: "*****4268",
    name: "Anna",
    date1: "Jan 10,2022",
    date2: "Jan 12,2022",
    dateToCompare: "2022/01/10-2022/01/12",
    status: "Done",
    email: "Itai Bracha31@gmail.com",
    transaction: 78.99,
    dot: "...",
  },

  {
    logo: "../img/3Tab.png",
    logoName: "Mailchimp",
    id: 3,
    link: "https://mailchimp.com/",
    cardType: "Visa",
    cardNumber: "*****9456",
    name: "Kate",
    date1: "Jan 14,2022",
    date2: "Sept 2,2022",
    dateToCompare: "2022/01/14-2022/09/02",
    status: "Done",
    email: "Itai Bracha31@gmail.com",
    transaction: 123.82,
    dot: "...",
  },

  {
    logo: "../img/4Tab.png",
    logoName: "WIX",
    id: 4,
    link: "https://www.wix.com/",
    status: "Pending",
    cardType: "Visa",
    cardNumber: "*****1025",
    name: "Bob",
    date1: "Jan 28,2022",
    date2: "May 5,2022",
    dateToCompare: "2022/01/28-2022/05/05",
    email: "Itai Bracha31@gmail.com",
    transaction: 1783.22,
    dot: "...",
  },

  {
    logo: "../img/5Tab.png",
    logoName: "Youtube",
    id: 5,
    link: "https://www.youtube.com/",
    cardType: "Visa",
    cardNumber: "*****8965",
    name: "Max",
    date1: "Jan 18,2022",
    date2: "Dec 2,2022",
    dateToCompare:"2022/01/18-2022/12/02",
    status: "Done",
    email: "Itai Bracha31@gmail.com",
    transaction: 13.02,
    dot: "...",
  },

  {
    logo: "../img/5Tab.png",
    logoName: "Youtube",
    id: 6,
    link: "https://www.youtube.com/",
    cardType: "Visa",
    cardNumber: "*****6892",
    name: "Pavlo",
    date1: "Jan 18,2022",
    date2: "Aug 2,2022",
    dateToCompare: "2022/01/18-2022/08/02",
    status: "Done",
    email: "Itai Bracha31@gmail.com",
    transaction: 93.22,
    dot: "...",
  },

  {
    logo: "../img/5Tab.png",
    logoName: "Youtube",
    id: 7,
    link: "https://www.youtube.com/",
    cardType: "Visa",
    cardNumber: "*****8963",
    name: "Sofi",
    date1: "Jan 1,2022",
    date2: "Aug 12,2022",
    dateToCompare: "2022/01/01-2022/08/12",
    status: "Done",
    email: "Itai Bracha31@gmail.com",
    transaction: 783.50,
    dot: "...",
  },
  {
    logo: "../img/1Tab.png",
    id: 8,
    logoName: "Figma",
    link: "https://www.figma.com/",
    cardType: "Visa",
    cardNumber: "*****1468",
    name: "Bob",
    date1: "Jan 15,2022",
    date2: "Aug 22,2022",
    dateToCompare: "2022/01/01-2022/08/12",
    status: "Done",
    email: "Itai Bracha31@gmail.com",
    transaction: 53.22,
    dot: "...",
  },
  {
    logo: "../img/2Tab.png",
    logoName: "Abode XD",
    id: 9,
    link: "https://www.adobe.com/",
    cardType: "Visa",
    cardNumber: "*****2122",
    name: "Bob",
    date1: "July 10,2022",
    date2: "Aug 12,2022",
    dateToCompare: "2022/07/10-2022/08/12",
    status: "Done",
    email: "Itai Bracha31@gmail.com",
    transaction: 589.22,
    dot: "...",
  },
  {
    logo: "../img/3Tab.png",
    logoName: "Mailchimp",
    id: 10,
    link: "https://mailchimp.com/",
    cardType: "Visa",
    cardNumber: "*****9632",
    name: "Kate",
    date1: "Jan 14,2022",
    date2: "Aug 12,2022",
    dateToCompare: "2022/01/14-2022/08/12",
    status: "Done",
    email: "Itai Bracha31@gmail.com",
    transaction: 103.22,
    dot: "...",
  },

  {
    logo: "../img/4Tab.png",
    logoName: "WIX",
    id: 11,
    link: "https://www.wix.com/",
    status: "Pending",
    cardType: "Visa",
    cardNumber: "*****9876",
    name: "Bob",
    date1: "Jan 18,2022",
    date2: "Sept 2,2022",
    dateToCompare: "2022/01/18-2022/09/02",
    email: "Itai Bracha31@gmail.com",
    transaction: 573.22,
    dot: "...",
  },
  {
    logo: "../img/1Tab.png",
    id: 12,
    logoName: "Figma",
    link: "https://www.figma.com/",
    cardType: "Visa",
    cardNumber: "*****2458",
    name: "Itai Bracha",
    date1: "Jan 5,2022",
    date2: "Jan 8,2022",
    dateToCompare: "2022/01/05-2022/01/08",
    status: "Pending",
    email: "Itai Bracha31@gmail.com",
    transaction: 193.22,
    dot: "...",
  },
  {
    logo: "../img/2Tab.png",
    logoName: "Abode XD",
    id: 13,
    link: "https://www.adobe.com/",
    cardType: "Visa",
    cardNumber: "*****4268",
    name: "Anna",
    date1: "Jan 10,2022",
    date2: "Feb 2,2022",
    dateToCompare: "2022/01/05-2022/02/02",
    status: "Done",
    email: "Itai Bracha31@gmail.com",
    transaction: 883.22,
    dot: "...",
  },

  {
    logo: "../img/3Tab.png",
    logoName: "Mailchimp",
    id: 14,
    link: "https://mailchimp.com/",
    cardType: "Visa",
    cardNumber: "*****9456",
    name: "Kate",
    date1: "Jan 14,2022",
    date2: "Sept 2,2022",
    dateToCompare: "2022/01/14-2022/09/02",
    status: "Done",
    email: "Itai Bracha31@gmail.com",
    transaction: 783.22,
    dot: "...",
  },

  {
    logo: "../img/4Tab.png",
    logoName: "WIX",
    id: 15,
    link: "https://www.wix.com/",
    status: "Pending",
    cardType: "Visa",
    cardNumber: "*****1025",
    name: "Bob",
    date1: "Nov 28,2022",
    date2: "Nov 3,2022",
    dateToCompare: "2022/11/28-2022/11/03",
    email: "Itai Bracha31@gmail.com",
    transaction: 783.22,
    dot: "...",
  },

  {
    logo: "../img/5Tab.png",
    logoName: "Youtube",
    id: 16,
    link: "https://www.youtube.com/",
    cardType: "Visa",
    cardNumber: "*****8965",
    name: "Max",
    date1: "Nov 28,2022",
    date2: "Nov 3,2022",
    dateToCompare: "2022/11/28-2022/11/03",
    status: "Done",
    email: "Itai Bracha31@gmail.com",
    transaction: 783.22,
    dot: "...",
  },

  {
    logo: "../img/5Tab.png",
    logoName: "Youtube",
    id: 17,
    link: "https://www.youtube.com/",
    cardType: "Visa",
    cardNumber: "*****6892",
    name: "Pavlo",
    date1: "Jan 5,2022",
    date2: "Jan 8,2022",
    dateToCompare: "2022/01/05-2022/01/08",
    status: "Done",
    email: "Itai Bracha31@gmail.com",
    transaction: 783.22,
    dot: "...",
  },

  {
    logo: "../img/5Tab.png",
    logoName: "Youtube",
    id: 18,
    link: "https://www.youtube.com/",
    cardType: "Visa",
    cardNumber: "*****8963",
    name: "Sofi",
    date1: "Jan 10,2022",
    date2: "Feb 2,2022",
    dateToCompare: "2022/01/05-2022/02/02",
    status: "Done",
    email: "Itai Bracha31@gmail.com",
    transaction: 83.22,
    dot: "...",
  },
  {
    logo: "../img/1Tab.png",
    id: 19,
    logoName: "Figma",
    link: "https://www.figma.com/",
    cardType: "Visa",
    cardNumber: "*****1468",
    name: "Itai Bracha",
    date1: "Jan 10,2022",
    date2: "Jan 12,2022",
    dateToCompare: "2022/01/10-2022/01/12",
    status: "Done",
    email: "Itai Bracha31@gmail.com",
    transaction: 73.8,
    dot: "...",
  },
  {
    logo: "../img/2Tab.png",
    logoName: "Abode XD",
    id: 20,
    link: "https://www.adobe.com/",
    cardType: "Visa",
    cardNumber: "*****2122",
    name: "Anna",
    date1: "Jan 10,2022",
    date2: "Feb 2,2022",
    dateToCompare: "2022/01/05-2022/02/02",
    status: "Done",
    email: "Itai Bracha31@gmail.com",
    transaction: 883.9,
    dot: "...",
  },
  {
    logo: "../img/3Tab.png",
    logoName: "Mailchimp",
    id: 21,
    link: "https://mailchimp.com/",
    cardType: "Visa",
    cardNumber: "*****9632",
    name: "Kate",
    date1: "Jan 10,2022",
    date2: "Jan 12,2022",
    dateToCompare: "2022/01/10-2022/01/12",
    status: "Pending",
    email: "Itai Bracha31@gmail.com",
    transaction: 783.22,
    dot: "...",
  },

  {
    logo: "../img/4Tab.png",
    logoName: "WIX",
    id: 22,
    link: "https://www.wix.com/",
    status: "Pending",
    cardType: "Visa",
    cardNumber: "*****9876",
    name: "Bob",
    date1: "Jan 10,2022",
    date2: "Feb 2,2022",
    dateToCompare: "2022/01/05-2022/02/02",
    email: "Itai Bracha31@gmail.com",
    transaction: 77.22,
    dot: "...",
  },
];

// ========================pagination==========================================
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b-a});
console.log(points)

const tbodyDiv = document.getElementById("tbody");
const paginationElement = document.getElementById("pagination");

let currentPage = 1;

let rows = 5;

function DisplayList(items, wrapper, rowsPerPage, page) {
  wrapper.innerHTML = "";
  page--;
  items = items.sort( (a,b)=>{
    return a.transaction - b.transaction
})
  let start = rowsPerPage * page;
  let end = start + rowsPerPage;
  let paginatedItems = items.slice(start, end);

  // ========== table==============

  for (let i = 0; i < paginatedItems.length;i++) {
    let item = paginatedItems[i];
    let itemElement = document.createElement("tr");
    itemElement.classList.add("item");
  
    itemElement.innerHTML = `
    <td><input type="checkbox" name="checkbox-${item.id}"/></td>
    <td>
      <img class="img_ro" src="${item.logo}" alt=${item.logoName} />
    </td>
    <td class="data">
      <div>${item.logoName}</div>
      <div><a href="${item.link}">${item.logoName}</a></div>
    </td>
    <td class="data">
      <div>${item.cardType}</div>
      <div>${item.cardNumber}</div>
    </td>
    <td class="data">
      <div>${item.name}</div>
      <div>${item.email}</div>
    </td>
    <td class="data">
      <div>${item.date1}</div>
      <div>$${item.transaction}</div>
    </td>
    <td class="status"><div class="${item.status.toLowerCase()}">${
      item.status
    }</div></td>
    <td class="date1">${item.date2}</td>
    <td id="totalMoney1" class="total">$ ${item.transaction}</td>
    <td class="menu"><div>${item.dot}</div></td>


`;
    wrapper.appendChild(itemElement);
  }
}

function PaginationButton(page) {
  let button = document.createElement("tr");
  button.innerText = page;
  if (currentPage == page){
    button.classList.add("active")
  };
 
  button.addEventListener("click", function () {
    currentPage = page;
    DisplayList(tableData, tbodyDiv, rows, currentPage);
    let currentBtn = document.querySelector(".pagenumbers tr.active");
    currentBtn.classList.remove("active");
    button.classList.add("active");
  });


  return button;
}
//створюємо навігацію по кнопках
function SetupPagination(items, wrapper, rowsPerPage) {
  wrapper.innerHtml = ""; //обнюляємо контейнер
let buttonBack = document.createElement('tr') //створюємо кнопку
buttonBack.innerText = '<<';  // додаємо внутрішній текст
buttonBack.addEventListener('click',()=>{ //додаємо прослуховувач подій
  console.log('back');
  if(currentPage !== 1){ //перевіряємо чи currentPage  не дорівнює 1
    currentPage--; //зменшуємо 
    DisplayList(tableData, tbodyDiv, rows, currentPage);
    document.getElementById('pagination').innerHTML = '';
    SetupPagination(tableData, paginationElement, rows);
  }

})
wrapper.appendChild(buttonBack)

  let pageCount = Math.ceil(items.length / rowsPerPage);
  for (let i = 1; i < pageCount + 1; i++) {
    let btn = PaginationButton(i);
    wrapper.appendChild(btn);
  }

let buttonGo = document.createElement('tr');
buttonGo.innerText = '>>';
buttonGo.addEventListener('click', ()=>{
  if(currentPage !== pageCount ){
    currentPage++;
    DisplayList(tableData, tbodyDiv, rows, currentPage);
    document.getElementById('pagination').innerHTML = '';
    SetupPagination(tableData, paginationElement, rows);


  }

})
wrapper.appendChild(buttonGo)

}



DisplayList(tableData, tbodyDiv, rows, currentPage);
SetupPagination(tableData, paginationElement, rows);

let buttonSorting = document.getElementById('buttonSorting');
buttonSorting.innerText = 'Sorting of Total Transcation';
buttonSorting.addEventListener('click',  ()=>

wrapper.innerHTML = "";

items = items.sort( (a,b)=>{
  return a.transaction - b.transaction

)

// ===============Filter=====

let searchInput = document.getElementById("search"); 
let searchInputByName = document.getElementById("searchByName");
let statusInput = document.getElementById("statusInput");
let date1 = document.getElementById("firstDate1");
let date2 = document.getElementById("lastDate2");

console.log(document)
function checkLogo(element) {
  if (searchInput.value.trim() !== "") {
    return element === searchInput.value.toLowerCase();
  } else {
    return true;
  }
}

function checkEmployee(element) {
  if (searchInputByName.value.trim() !== "") {
    return element === searchInputByName.value.toLowerCase();
  } else {
    return true;
  }
}

function checkStatusInput(element) {
  if (statusInput.value.trim() !== "") {
    return element === statusInput.value.toLowerCase();
  } else {
    return true;
  }
}

function checkDate1(element) {
  if (date1.value.trim() !== "") {
    return element === date1.value; //true якщо не дорівнює тожі буде false
  } else {
    return true;
  }
}

function checkDate2(element) {
  if (date2.value.trim() !== "") {
    return element === date2.value;
  } else {
    return true;
  }
}

let elements = [];
console.log(searchInput.value)
searchInput.addEventListener("keyup", () => {
  if (
    searchInput.value.trim() === "" &&
    searchInputByName.value.trim() === "" &&
    statusInput.value.trim() === "" &&
    date1.value.trim() === "" &&
    date2.value.trim() === ""
  ) {
    console.log("empty");
    DisplayList(tableData, tbodyDiv, rows, currentPage);
    SetupPagination(tableData, paginationElement, rows);
  }

  newMassive = tableData.filter((elementOfMassive) => {
    return (
      checkLogo(elementOfMassive.logoName.toLowerCase()) && //true
      checkEmployee(elementOfMassive.name.toLowerCase()) && //false
      checkStatusInput(elementOfMassive.status.toLowerCase()) &&//flase       true
      checkDate1(elementOfMassive.date1ToCompare) && //false
      checkDate2(elementOfMassive.date2ToCompare) //false
    );
  });

  console.log(newMassive);
  if (newMassive.length !== 0) {
    elements = newMassive.map((row) => {
      return `
          <tr>
              <td><input type="checkbox" name="checkbox-${row.id}"/></td>
              <td>
                <img class="img_ro" src="${row.logo}" alt=${row.logoName} />
              </td>
              <td class="data">
                <div>${row.logoName}</div>
                <div><a href="${row.link}">${row.logoName}</a></div>
              </td>
              <td class="data">
                <div>${row.cardType}</div>
                <div>${row.cardNumber}</div>
              </td>
              <td class="data">
                <div>${row.name}</div>
                <div>${row.email}</div>
              </td>
              <td class="data">
                <div>${row.date1}</div>
                <div>${row.transaction}</div>
              </td>
              <td class="status"><div class="${row.status.toLowerCase()}">${
        row.status
      }</div></td>
              <td class="date1">${row.date2}</td>
              <td id="totalMoney1" class="total">${row.transaction}</td>
              <td class="menu"><div>${row.dot}</div></td>
        </tr>
                  `;
    });
    paginationElement.innerHTML = "";
    DisplayList(newMassive, tbodyDiv, rows, currentPage);
    SetupPagination(newMassive, paginationElement, rows);
  }
});

searchInputByName.addEventListener("keyup", () => {
  if (
    searchInput.value.trim() === "" &&
    searchInputByName.value.trim() === "" &&
    statusInput.value.trim() === "" &&
    date1.value.trim() === "" &&
    date2.value.trim() === ""
  ) {
    console.log("empty");
    DisplayList(tableData, tbodyDiv, rows, currentPage);
    SetupPagination(tableData, paginationElement, rows);
  }
  newMassive = tableData.filter((elementOfMassive) => {
    console.log(
      elementOfMassive.logoName,
      "-",
      searchInput.value.toLowerCase()
    );
    return (
      checkLogo(elementOfMassive.logoName.toLowerCase()) &&
      checkEmployee(elementOfMassive.name.toLowerCase()) &&
      checkStatusInput(elementOfMassive.status.toLowerCase()) &&
      checkDate1(elementOfMassive.date1ToCompare) &&
      checkDate2(elementOfMassive.date2ToCompare)
    );
  });
  console.log(newMassive);
  if (newMassive.length !== 0) {
    elements = newMassive.map((row) => {
      return `
          <tr>
              <td><input type="checkbox" name="checkbox-${row.id}"/></td>
              <td>
                <img class="img_ro" src="${row.logo}" alt=${row.logoName} />
              </td>
              <td class="data">
                <div>${row.logoName}</div>
                <div><a href="${row.link}">${row.logoName}</a></div>
              </td>
              <td class="data">
                <div>${row.cardType}</div>
                <div>${row.cardNumber}</div>
              </td>
              <td class="data">
                <div>${row.name}</div>
                <div>${row.email}</div>
              </td>
              <td class="data">
                <div>${row.date1}</div>
                <div>${row.transaction}</div>
              </td>
              <td class="status"><div class="${row.status.toLowerCase()}">${
        row.status
      }</div></td>
              <td class="date1">${row.date2}</td>
              <td id="totalMoney1" class="total">${row.transaction}</td>
              <td class="menu"><div>${row.dot}</div></td>
        </tr>
                  `;
    });
    paginationElement.innerHTML = "";
    DisplayList(newMassive, tbodyDiv, rows, currentPage);
    SetupPagination(newMassive, paginationElement, rows);
  }
});

statusInput.addEventListener("keyup", () => { 
  if (
    searchInput.value.trim() === "" &&
    searchInputByName.value.trim() === "" &&
    statusInput.value.trim() === "" &&
    date1.value.trim() === "" &&
    date2.value.trim() === ""
  ) {
    console.log("empty");
    DisplayList(tableData, tbodyDiv, rows, currentPage);
    SetupPagination(tableData, paginationElement, rows);
  }
  newMassive = tableData.filter((elementOfMassive) => {
    return (
      checkLogo(elementOfMassive.logoName.toLowerCase()) &&
      checkEmployee(elementOfMassive.name.toLowerCase()) &&
      checkStatusInput(elementOfMassive.status.toLowerCase()) &&
      checkDate1(elementOfMassive.date1ToCompare) &&
      checkDate2(elementOfMassive.date2ToCompare)
    );
  });
  console.log(newMassive);
  if (newMassive.length !== 0) {
    elements = newMassive.map((row) => {
      return `
          <tr>
              <td><input type="checkbox" name="checkbox-${row.id}"/></td>
              <td>
                <img class="img_ro" src="${row.logo}" alt=${row.logoName} />
              </td>
              <td class="data">
                <div>${row.logoName}</div>
                <div><a href="${row.link}">${row.logoName}</a></div>
              </td>
              <td class="data">
                <div>${row.cardType}</div>
                <div>${row.cardNumber}</div>
              </td>
              <td class="data">
                <div>${row.name}</div>
                <div>${row.email}</div>
              </td>
              <td class="data">
                <div>${row.date1}</div>
                <div>${row.transaction}</div>
              </td>
              <td class="status"><div class="${row.status.toLowerCase()}">${
        row.status
      }</div></td>
              <td class="date1">${row.date2}</td>
              <td id="totalMoney1" class="total">${row.transaction}</td>
              <td class="menu"><div>${row.dot}</div></td>
        </tr>
                  `;
    });
    paginationElement.innerHTML = "";
    DisplayList(newMassive, tbodyDiv, rows, currentPage);
    SetupPagination(newMassive, paginationElement, rows);
  }
});

date1.addEventListener("change", () => {
  newMassive = tableData.filter((elementOfMassive) => {
    console.log(
      elementOfMassive.logoName,
      "-",
      searchInput.value.toLowerCase()
    );
    return (
      checkLogo(elementOfMassive.logoName.toLowerCase()) &&
      checkEmployee(elementOfMassive.name.toLowerCase()) &&
      checkStatusInput(elementOfMassive.status.toLowerCase()) &&
      checkDate1(elementOfMassive.date1ToCompare) &&
      checkDate2(elementOfMassive.date2ToCompare)
    );
  });
  console.log(newMassive);
  if (newMassive.length !== 0) {
    elements = newMassive.map((row) => {
      return `
          <tr>
              <td><input type="checkbox" name="checkbox-${row.id}"/></td>
              <td>
                <img class="img_ro" src="${row.logo}" alt=${row.logoName} />
              </td>
              <td class="data">
                <div>${row.logoName}</div>
                <div><a href="${row.link}">${row.logoName}</a></div>
              </td>
              <td class="data">
                <div>${row.cardType}</div>
                <div>${row.cardNumber}</div>
              </td>
              <td class="data">
                <div>${row.name}</div>
                <div>${row.email}</div>
              </td>
              <td class="data">
                <div>${row.date1}</div>
                <div>${row.transaction}</div>
              </td>
              <td class="status"><div class="${row.status.toLowerCase()}">${
        row.status
      }</div></td>
              <td class="date1">${row.date2}</td>
              <td id="totalMoney1" class="total">${row.transaction}</td>
              <td class="menu"><div>${row.dot}</div></td>
        </tr>
                  `;
    });
    paginationElement.innerHTML = "";
    DisplayList(newMassive, tbodyDiv, rows, currentPage);
    SetupPagination(newMassive, paginationElement, rows);
  }
});

date2.addEventListener("change", () => {
  newMassive = tableData.filter((elementOfMassive) => {
    console.log(
      elementOfMassive.logoName,
      "-",
      searchInput.value.toLowerCase()
    );
    return (
      checkLogo(elementOfMassive.logoName.toLowerCase()) &&
      checkEmployee(elementOfMassive.name.toLowerCase()) &&
      checkStatusInput(elementOfMassive.status.toLowerCase()) &&
      checkDate1(elementOfMassive.date1ToCompare) &&
      checkDate2(elementOfMassive.date2ToCompare)
    );
  });
  console.log(newMassive);
  if (newMassive.length !== 0) {
    elements = newMassive.map((row) => {
      return `
          <tr>
              <td><input type="checkbox" name="checkbox-${row.id}"/></td>
              <td>
                <img class="img_ro" src="${row.logo}" alt=${row.logoName} />
              </td>
              <td class="data">
                <div>${row.logoName}</div>
                <div><a href="${row.link}">${row.logoName}</a></div>
              </td>
              <td class="data">
                <div>${row.cardType}</div>
                <div>${row.cardNumber}</div>
              </td>
              <td class="data">
                <div>${row.name}</div>
                <div>${row.email}</div>
              </td>
              <td class="data">
                <div>${row.date1}</div>
                <div>${row.transaction}</div>
              </td>
              <td class="status"><div class="${row.status.toLowerCase()}">${
        row.status
      }</div></td>
              <td class="date1">${row.date2}</td>
              <td id="totalMoney1" class="total">${row.transaction}</td>
              <td class="menu"><div>${row.dot}</div></td>
        </tr>
                  `;
    });
    paginationElement.innerHTML = "";
    DisplayList(newMassive, tbodyDiv, rows, currentPage);
    SetupPagination(newMassive, paginationElement, rows);
  }
});
$(function() {
  $('input[name="daterange"]').daterangepicker({
    
     opens: 'left'
  }, function(start, end) {
    console.log("перша дата : " + start.format('YYYY-MM-DD') + 'друга дата : ' + end.format('YYYY-MM-DD'));
  });
});

