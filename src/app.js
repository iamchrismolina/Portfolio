const copyrightsElem = document.getElementById("copyrights");

const getCopyrights = () => {
  const currentYear = new Date();
  return `© Chris Molina ${currentYear.getFullYear()}`;
};

copyrightsElem.textContent = getCopyrights();
