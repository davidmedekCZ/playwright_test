const fullName = "David Medek";
const point = 74;
const minPoint = 75;
const redDiplomePoint = 95;

if (point >= redDiplomePoint) {
  console.log(`${fullName} úspěšně složil studium s červeným dimplomem.`);
} else if (point >= 75) {
  console.log(`${fullName} úspěšně složil studium.`);
} else {
  console.log(`${fullName} nesplnil podmínky studia.`);
}
