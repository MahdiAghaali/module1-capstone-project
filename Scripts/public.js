const hambergerBtn = document.getElementById('hambergerBtn');
const menuContainer = document.getElementById('menuContainer');
const menu = document.getElementById('menu');
const btnCloseMenu = document.getElementById('closeMobileMenu');
const html = document.getElementsByTagName('html')[0];

function openMobileMenu() {
  menuContainer.classList.add('open');
  menu.classList.add('open');
  hambergerBtn.classList.add('hidden');
  html.classList.add('open');
}

function closeMobileMenu() {
  menuContainer.classList.remove('open');
  menu.classList.remove('open');
  hambergerBtn.classList.remove('hidden');
  html.classList.remove('open');
}

hambergerBtn.addEventListener('click', openMobileMenu);
btnCloseMenu.addEventListener('click', closeMobileMenu);

const speakerData = [
  {
    image: './Resources/Images/Picture-002.jpg',
    name: 'ALESSIA D\'ADDABBO',
    job: 'Senior Analyst at Equinor',
    description: 'Ms. Alessia D\'Addabbo has several years of experience in the energy industry, working in both private sector and within European associations. Currently working in Equinor as Senior Analyst with focus on Policy and Regulation for low carbon solutions and gas markets.',
  },
  {
    image: './Resources/Images/Schoenfeldt_Alexander_17807-576x576.jpg',
    name: 'ALEXANDER SCHÖNFELDT',
    job: 'CEO of Enerox',
    description: 'Alexander Schönfeldt is CEO of Enerox which – under its brand CellCube – is one of the market leading long-duration-energy storage companies in the microgrid space using vanadium redox-flow technology.',
  },
  {
    image: './Resources/Images/Ewa-L.-Carlson-576x384.jpg',
    name: 'ASSOC. PROF. DR. EWA LAZARCZYK CARLSON',
    job: 'Reykjavik University',
    description: 'Ewa Lazarczyk Carlson is an  Associate Professor at the Department of Business Administration at Reykjavik University. She is affiliated with the SIF – Sustainability Institute and Forum at Reykjavik. Her main research interests are industrial organization, energy economics, environmental economics.',
  },
  {
    image: './Resources/Images/rsz_1rsz_1rsz_220220130_142945-576x447.jpg',
    name: 'LAURENT SCHMITT',
    job: 'CEO Dcbel Europe',
    description: 'Laurent Schmitt has joined dcbel early January 2022 as CEO of Dcbel Europe as well as head of Utility vertical. He has been working for the last 25 years through the Automation, IT and Digitisation of the Power Industry. ',
  },

];

const speakerContainer = document.getElementById('speakerContainer');
for (let i = 0; i < speakerData.length; i += 1) {
  const {
    image, name, job, description,
  } = speakerData[i];
  const htmlString = `<div class="sectionItem">
                <div class="img-container">
                    <img src="${image}">
                </div>
                <div class="speaker">
                    <h3>${name}</h3>
                    <h4>${job}</h4>
                    <span class="devider"></span>
                    <p>${description}</p>
                </div>
            </div>`;
  speakerContainer.insertAdjacentHTML('beforeend', htmlString);
}