const pic = {
    display: document.getElementById('profile-pic'),
    bg: document.getElementById('profile-pic-fixed'),
    img: document.querySelector('#profile-pic-fixed img'),
};
pic.display.addEventListener('click', () => {
    pic.bg.classList.add('show');
});
pic.bg.addEventListener('click', () => {
    pic.bg.classList.remove('show');
});
pic.img.addEventListener('click', (e) => {
    e.stopPropagation();
});
const technologies = [
    'AnimeJS',
    'Firebase',
    'Git',
    'Github',
    'JQuery',
    'MongoDB',
    'NextJS',
    'NodeJS',
    'React Native',
    'ReactJS',
    'Sass',
];
for (let i = 0; i < technologies.length; i++) {
    document.querySelector('#technologies section div').innerHTML += `<p>${technologies[i]}</p>`
};
const completedProjects = [
    {
        href: 'https://joao2109.github.io/projeto-one-piece-dev-em-dobro/',
        img: 'src/img/Projeto-One-Piece.png',
        name: 'Projeto One Piece - Dev em Dobro',
        technologies: [
            technologies[2],
        ],
    },
    {
        href: 'https://stf-team.web.app/',
        img: 'src/img/STF-Team.png',
        name: 'STF Team',
        technologies: [
            technologies[1],
            technologies[7],
        ],
    },
]
for (let i = 0; i < completedProjects.length; i++) {
    document.querySelector('#completed div').innerHTML += `
        <a class="completed" href="${completedProjects[i].href}" target="_blank">
            <img src="${completedProjects[i].img}" alt="" />
            <div class="content">
                <h3>${completedProjects[i].name}</h3>
                <p>Tecnologias utilizadas:</p>
                <div>${completedProjects[i].technologies.map((val, i) => { return `<span>${val}</span>` }).toString().replace(',', '')}</div>
            </div>
        </a>
    `
}
const projectsInProgress = [
    {
        href: 'https://joao2109.github.io/Frontend-Mentor-profile-card-component/',
        name: 'Frontend Mentor profile card component',
    },
    {
        href: 'https://joao2109.github.io/Frontend-Mentor-3-column-preview-card-component/',
        name: 'Frontend Mentor 3 column preview card component',
    },
    {
        href: 'https://joao2109.github.io/Frontend-Mentor-stats-preview-card-component/',
        name: 'Frontend Mentor stats preview card component',
    },
    {
        href: 'https://joao2109.github.io/Frontend-Mentor-product-preview-card-component/',
        name: 'Frontend Mentor product preview card component',
    },
    {
        href: 'https://joao2109.github.io/Frontend-Monitor-interactive-rating-component/',
        name: 'Frontend Monitor interactive rating component',
    },
    {
        href: 'https://joao2109.github.io/Frontend-Mentor-order-summary-component/',
        name: 'Frontend Mentor order summary component',
    },
    {
        href: 'https://joao2109.github.io/Frontend-Mentor-nft-preview-card-component/',
        name: 'Frontend Mentor nft preview card component',
    },
    {
        href: 'https://joao2109.github.io/Frontend-Mentor-results-summary-component/',
        name: 'Frontend Mentor results summary component',
    },
    {
        href: 'https://joao2109.github.io/Frontend-Mentor-QR-code-component/',
        name: 'Frontend Mentor QR code component',
    },
]
for (let i = 0; i < projectsInProgress.length; i++) {
    document.querySelector('#in-progress ul').innerHTML += `
        <li class="project-in-progress">
            <a href="${projectsInProgress[i].href}" target="_blank">${projectsInProgress[i].name}</a>
        </li>
    `;
}