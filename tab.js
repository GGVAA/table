const tableData = [
  {
    logo: "img/1Tab.png",
    id: 1,
    logoName: "Figma",
    link: "https://www.figma.com/",
    cardType: "Visa",
    cardNumber: "*****2468",
    name: "Itai Bracha",
    date1: "Jan 5,2022",
    date1ToCompare: "2022-01-05",
    date2: "Aug 2,2022",
    date2ToCompare: "2022-08-02",
    status: "Done",
    email: "Itai Bracha31@gmail.com",
    transaction: "$783,22",
    dot: "...",
  },
  {
    logo: "img/2Tab.png",
    logoName: "Abode XD",
    id: 2,
    link: "https://www.adobe.com/",
    cardType: "Visa",
    cardNumber: "*****2468",
    name: "Anna",
    date1: "Jan 10,2022",
    date1ToCompare: "2022-01-10",
    date2: "Aug 2,2022",
    date2ToCompare: "2022-08-02",
    status: "Done",
    email: "Itai Bracha31@gmail.com",
    transaction: "$783,22",
    dot: "...",
  },

  {
    logo: "img/3Tab.png",
    logoName: "Mailchimp",
    id: 3,
    link: "https://mailchimp.com/",
    cardType: "Visa",
    cardNumber: "*****2468",
    name: "Kate",
    date1: "Jan 14,2022",
    date1ToCompare: "2022-01-14",
    date2: "Aug 2,2022",
    date2ToCompare: "2022-08-02",
    status: "Done",
    email: "Itai Bracha31@gmail.com",
    transaction: "$783,22",
    dot: "...",
  },

  {
    logo: "img/4Tab.png",
    logoName: "WIX",
    id: 4,
    link: "https://www.wix.com/",
    status: "Pending",
    cardType: "Visa",
    cardNumber: "*****2468",
    name: "Bob",
    date1: "Jan 28,2022",
    date1ToCompare: "2022-01-28",
    date2: "Aug 2,2022",
    date2ToCompare: "2022-08-02",
    email: "Itai Bracha31@gmail.com",
    transaction: "$783,22",
    dot: "...",
  },

  {
    logo: "img/5Tab.png",
    logoName: "Youtube",
    id: 5,
    link: "https://www.youtube.com/",
    cardType: "Visa",
    cardNumber: "*****2468",
    name: "Max",
    date1: "Jan 18,2022",
    date1ToCompare: "2022-01-18",
    date2: "Aug 2,2022",
    date2ToCompare: "2022-08-02",
    status: "Done",
    email: "Itai Bracha31@gmail.com",
    transaction: "$783,22",
    dot: "...",
  },
];
console.log(tableData);

const tbody = document.getElementById("tbody");
// const tr = document.createElement('tr')

tbody.innerHTML =
  tbody.innerHTML +
  tableData.map((row) => {
    return `
        <tr>
      <td><input type="checkbox" name="checkbox-${row.id}"/></td>
      <td>
        <img class="img_ro" src="${row.logo}" alt="figma" />
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
// ==================================================================
let searchInput = document.getElementById("search");

searchInput.addEventListener("keyup", () => {
  console.log(searchInput.value);
  let newMassive = tableData.filter((elementOfMassive) => {
    return (
      elementOfMassive.logoName.toLowerCase() == searchInput.value.toLowerCase()
    );
  });
  if (newMassive.length !== 0) {
    console.log("ми знайшли елемент");
    tbody.innerHTML =
      `<tr>
  <th></th>
  <th colspan="2">Name</th>
  <th colspan="2">User credentials</th>
  <th>Last Transcation</th>
  <th>Status</th>
  <th>End date1</th>
  <th>Total User</th>
  <th></th>
</tr>` +
      newMassive.map((row) => {
        return `
      <tr>
    <td><input type="checkbox" name="checkbox-${row.id}"/></td>
    <td>
      <img class="img_ro" src="${row.logo}" alt="figma" />
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
  } else {
    console.log("ми не знайшли елемент");
    tbody.innerHTML = `<tr>
  <th></th>
  <th colspan="2">Name</th>
  <th colspan="2">User credentials</th>
  <th>Last Transcation</th>
  <th>Status</th>
  <th>End date1</th>
  <th>Total User</th>
  <th></th>
</tr>`;
  }
});
// ==================================================================
let searchInputByName = document.getElementById("searchByName");

searchInputByName.addEventListener("keyup", () => {
  console.log(searchInputByName.value);
  let newMassive = tableData.filter((elementOfMassive) => {
    return (
      elementOfMassive.name.toLowerCase() ==
      searchInputByName.value.toLowerCase()
    );
  });
  if (newMassive.length !== 0) {
    console.log("ми знайшли елемент");
    tbody.innerHTML =
      `<tr>
  <th></th>
  <th colspan="2">Name</th>
  <th colspan="2">User credentials</th>
  <th>Last Transcation</th>
  <th>Status</th>
  <th>End date1</th>
  <th>Total User</th>
  <th></th>
</tr>` +
      newMassive.map((row) => {
        return `
      <tr>
    <td><input type="checkbox" name="checkbox-${row.id}"/></td>
    <td>
      <img class="img_ro" src="${row.logo}" alt="figma" />
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
  } else {
    console.log("ми не знайшли елемент");
    tbody.innerHTML = `<tr>
  <th></th>
  <th colspan="2">Name</th>
  <th colspan="2">User credentials</th>
  <th>Last Transcation</th>
  <th>Status</th>
  <th>End date1</th>
  <th>Total User</th>
  <th></th>
</tr>`;
  }
});
// ==================================================================

let radiobuttonDone = document.getElementById("radioDone");

radiobuttonDone.addEventListener("click", () => {
  console.log("you clicked me ");
  let newMassive = tableData.filter((elementOfMassive) => {
    return (
      elementOfMassive.status.toLowerCase() ==
      radiobuttonDone.value.toLowerCase()
    );
  });
  if (newMassive.length !== 0) {
    console.log("ми знайшли елемент");
    tbody.innerHTML =
      `<tr>
  <th></th>
  <th colspan="2">Name</th>
  <th colspan="2">User credentials</th>
  <th>Last Transcation</th>
  <th>Status</th>
  <th>End date1</th>
  <th>Total User</th>
  <th></th>
</tr>` +
      newMassive.map((row) => {
        return `
      <tr>
    <td><input type="checkbox" name="checkbox-${row.id}"/></td>
    <td>
      <img class="img_ro" src="${row.logo}" alt="figma" />
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
  } else {
    console.log("ми не знайшли елемент");
    tbody.innerHTML = `<tr>
  <th></th>
  <th colspan="2">Name</th>
  <th colspan="2">User credentials</th>
  <th>Last Transcation</th>
  <th>Status</th>
  <th>End date1</th>
  <th>Total User</th>
  <th></th>
</tr>`;
  }
});
let radiobuttonPending = document.getElementById("radioPending");
radiobuttonPending.addEventListener("click", () => {
  console.log("you clicked me ");
  let newMassive = tableData.filter((elementOfMassive) => {
    return (
      elementOfMassive.status.toLowerCase() ==
      radiobuttonPending.value.toLowerCase()
    );
  });
  if (newMassive.length !== 0) {
    console.log("ми знайшли елемент");
    tbody.innerHTML =
      `<tr>
  <th></th>
  <th colspan="2">Name</th>
  <th colspan="2">User credentials</th>
  <th>Last Transcation</th>
  <th>Status</th>
  <th>End date1</th>
  <th>Total User</th>
  <th></th>
</tr>` +
      newMassive.map((row) => {
        return `
      <tr>
    <td><input type="checkbox" name="checkbox-${row.id}"/></td>
    <td>
      <img class="img_ro" src="${row.logo}" alt="figma" />
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
  } else {
    console.log("ми не знайшли елемент");
    tbody.innerHTML = `<tr>
  <th></th>
  <th colspan="2">Name</th>
  <th colspan="2">User credentials</th>
  <th>Last Transcation</th>
  <th>Status</th>
  <th>End date1</th>
  <th>Total User</th>
  <th></th>
</tr>`;
  }
});

let list = document.getElementById("listContainer");
let firstListElement = document.getElementById("firstListElement");
firstListElement.addEventListener("click", () => {
  console.log("2");
  list.classList.toggle("listContainerChanged");
  firstListElement.classList.toggle("firstListElementChanged");
});

document.getElementById("clickElement1").addEventListener("click", () => {
  list.style.width = "600px";
  document
    .getElementById("companyNameItem")
    .classList.add("companyNameItemChanged");
});
document.getElementById("closeElement1").addEventListener("click", () => {
  list.style.width = "300px";
  document
    .getElementById("companyNameItem")
    .classList.remove("companyNameItemChanged");
});

document.getElementById("clickElement2").addEventListener("click", () => {
  list.style.width = "600px";
  document
    .getElementById("userNameItem")
    .classList.add("companyNameItemChanged");
});
document.getElementById("closeElement2").addEventListener("click", () => {
  list.style.width = "300px";
  document
    .getElementById("userNameItem")
    .classList.remove("companyNameItemChanged");
});

document.getElementById("clickElement3").addEventListener("click", () => {
  list.style.width = "600px";
  document
    .getElementById("userStatusItem")
    .classList.add("companyNameItemChanged");
});
document.getElementById("closeElement3").addEventListener("click", () => {
  list.style.width = "300px";
  document
    .getElementById("userStatusItem")
    .classList.remove("companyNameItemChanged");
});
document.getElementById("clickElement4").addEventListener("click", () => {
  list.style.width = "600px";
  document
    .getElementById("userDateItem")
    .classList.add("companyNameItemChanged");
});
document.getElementById("closeElement4").addEventListener("click", () => {
  list.style.width = "300px";
  document
    .getElementById("userDateItem")
    .classList.remove("companyNameItemChanged");
});

let dateOne = document.getElementById("firstDate1");
let dateTwo = document.getElementById("lastDate2");

document.getElementById("closeElement4").addEventListener("click", () => {
  console.log(typeof dateOne.value);
});

let searchByDate = document
  .getElementById("searchByDate")
  .addEventListener("click", () => {
    let newMassive = tableData.filter((elementOfMassive) => {
      return (
        elementOfMassive.date1ToCompare === dateOne.value &&
        elementOfMassive.date2ToCompare === dateTwo.value
      );
    });
    if (newMassive.length !== 0) {
      console.log("ми знайшли елемент");
      tbody.innerHTML =
        `<tr>
  <th></th>
  <th colspan="2">Name</th>
  <th colspan="2">User credentials</th>
  <th>Last Transcation</th>
  <th>Status</th>
  <th>End date1</th>
  <th>Total User</th>
  <th></th>
</tr>` +
        newMassive.map((row) => {
          return `
      <tr>
    <td><input type="checkbox" name="checkbox-${row.id}"/></td>
    <td>
      <img class="img_ro" src="${row.logo}" alt="figma" />
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
    } else {
      console.log("ми не знайшли елемент");
      tbody.innerHTML = `<tr>
  <th></th>
  <th colspan="2">Name</th>
  <th colspan="2">User credentials</th>
  <th>Last Transcation</th>
  <th>Status</th>
  <th>End date1</th>
  <th>Total User</th>
  <th></th>
</tr>`;
    }
  });
