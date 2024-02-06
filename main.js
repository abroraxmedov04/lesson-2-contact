document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  const elForm = document.querySelector(".form-contact");
  const elTemplateFragment = document.querySelector(
    ".js-contact-template"
  ).content;
  const elWrapperUlList = document.querySelector(".list");
  const elInputName = document.querySelector(".input-form-name");
  const elSelect = document.querySelector(".contact-person");
  const elInputNumber = document.querySelector(".contact-number");
  let contacts = [];

  elForm.addEventListener("submit", (evt) => {
    console.log("Form submitted");
    evt.preventDefault();
    addTask();
  });

  function addTask() {
    const name = elInputName.value.trim();
    const person = elSelect.value.trim();
    const number = elInputNumber.value.trim();

    if (name === "" || person === "" || number === "") {
      alert("Please fill in all the fields");
      return;
      s;
    }

    const contact = {
      name: name,
      person: person,
      number: number,
    };

    if (contacts.some((item) => item.number === number)) {
      alert("change your number");
      return;
    }

    contacts.push(contact);

    elInputName.value = "";
    elSelect.value = "";
    elInputNumber.value = "";

    renderList(contacts);
  }

  function renderList(list) {
    if (list.length == "" || 0) {
      alert("fill out hte form again");
    }
    const tempclone = elTemplateFragment.cloneNode(true);
    for (const contact of list) {
      tempclone.querySelector(".contact-name").textContent = contact.name;
      tempclone.querySelector(".contact-type-for").textContent = contact.person;
      tempclone.querySelector(".contact-number").textContent = contact.number;
      tempclone.querySelector(".delete-list-btn").textContent = "delete";
    }
    elWrapperUlList.appendChild(tempclone);
  }

  elWrapperUlList.addEventListener("click", (evt) => {
    const target = evt.target;
    if (target.matches(".delete-list-btn")) {
      target.parentNode.remove();
    }
  });
});
