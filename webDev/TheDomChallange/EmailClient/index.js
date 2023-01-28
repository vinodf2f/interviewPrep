const emailsUrl = "https://flipkart-email-mock.now.sh/ ";

const emailBodyUrl = "https://flipkart-email-mock.now.sh/?id=";

const filters = {
  read: "read",
  favorite: "favorite",
  unread: "unread",
};

let allEmails = [];
let selectedEmail = null;
let selectedEmailBody = null;
let selectedFilter = filters.unread;

const fetchEmails = async () => {
  const response = await fetch(emailsUrl);
  const responseJson = await response.json();
  allEmails = responseJson.list.map((item) => ({
    ...item,
    isFavorite: false,
    isRead: false,
  }));
  renderEmails();
};

const handleFilterChange = (e) => {
  selectedFilter = e.target.id;
  const filtersNodes = document.querySelectorAll(".filter__chip");

  filtersNodes.forEach((item) =>
    item.id === selectedFilter
      ? item.classList.add("filter__chip__selected")
      : item.classList.remove("filter__chip__selected")
  );

  renderEmails();
};
const filterListener = () => {
  const filters = document.querySelectorAll(".filter__chip");
  filters.forEach((item) => item.addEventListener("click", handleFilterChange));
};
const addListeners = () => {
  filterListener();
};

window.onload = () => {
  fetchEmails();

  addListeners();
};

const getFilteredEmails = () => {
  return allEmails.filter((email) => {
    if (selectedFilter === filters.favorite) {
      return email.isFavorite;
    } else if (selectedFilter === filters.read) {
      return email.isRead;
    } else {
      return true;
    }
  });
};

const renderEmails = () => {
  const emailSection = document.getElementsByClassName("left__section");
  emailSection[0].innerHTML = "";

  const emailDocFragment = document.createDocumentFragment();
  const filteredEmail = getFilteredEmails();
  console.log({ selectedFilter, filteredEmail: filteredEmail.length });

  for (let index = 0; index < filteredEmail.length; index++) {
    const emailCard = createEmailCard(filteredEmail[index]);
    emailCard.addEventListener("click", () =>
      handleEmailClick(filteredEmail[index])
    );

    emailDocFragment.appendChild(emailCard);
  }
  emailSection[0].appendChild(emailDocFragment);
};

const createEmailCard = ({
  id,
  email,
  subject,
  short_description,
  isFavorite,
}) => {
  const emailCard = document.createElement("div");
  const avatar = document.createElement("div");
  const content = document.createElement("div");
  const favTag = document.createElement("div");
  favTag.classList.add("fav__tag");

  emailCard.setAttribute("id", id);

  content.innerHTML = short_description;

  avatar.classList.add("avatar");

  avatar.innerHTML = "F";

  emailCard.classList.add("email__card");

  emailCard.appendChild(avatar);
  emailCard.appendChild(content);
  if (isFavorite) {
    emailCard.appendChild(favTag);
  }

  return emailCard;
};

const fetchAndRnderEmailBody = async () => {
  const emailBody = document.getElementsByClassName("right__section");
  const infoSection = document.createElement("div");
  const header = document.createElement("p");
  header.classList.add("content__header");

  header.textContent = `header ${selectedEmail.short_description}`;

  const addToFav = document.createElement("div");
  addToFav.classList.add("add__to__fav");
  addToFav.innerHTML = "<p>Add to Fav</p>";
  addToFav.addEventListener("click", () => handleAddToFav(selectedEmail.id));

  const response = await fetch(`${emailBodyUrl}${selectedEmail.id}`);
  const responseJson = await response.json();
  emailBody[0].appendChild(header);
  emailBody[0].appendChild(addToFav);
  infoSection.innerHTML = responseJson.body;
  emailBody[0].appendChild(infoSection);
};

const handleEmailClick = (data) => {
  selectedEmail = data;
  const emailBody = document.getElementsByClassName("right__section");
  emailBody[0].classList.add("right__section__display");
  fetchAndRnderEmailBody();
};

const handleAddToFav = (selectedId) => {
  const index = allEmails.findIndex((email) => email.id === selectedId);
  console.log({ index });
  if (index !== -1) {
    allEmails[index].isFavorite = true;
  }
  console.log(allEmails[index]);
};
