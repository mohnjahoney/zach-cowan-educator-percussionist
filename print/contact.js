// Update contact details here; both print pieces use these values.
const contact = {
  name: "Zach Cowan",
  location: "Chico + online",
  phone: "(530) 591-9641",
  email: "zachcowanlearning@gmail.com",
  website: "zach-cowan-learning.com",
};

document.addEventListener("DOMContentLoaded", () => {
  let html = document.body.innerHTML;
  for (const [key, value] of Object.entries(contact)) {
    html = html.replaceAll(`{{${key}}}`, value);
  }
  document.body.innerHTML = html;
});
