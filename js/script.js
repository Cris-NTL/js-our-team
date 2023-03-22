// dom element
const row = document.querySelector('.row');

// array of objects (our team members)
const membersTeam = [
    {
        name: 'Wayne',
        surname: 'Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela',
        surname: 'Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter',
        surname: 'Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela',
        surname: 'Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott',
        surname: 'Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara',
        surname: 'Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    },
    
];

// variable col
let col = '';

// loop "for" create dom elements
for (let i = 0; i < membersTeam.length; i++) {
    const member = membersTeam[i];
    col += `
    <div class="col-3" style="border-radius: 0px 25px; background-color: var(--secondary-color);">
    <img src="img/${member.image}" class="mt-4" style="border-radius: 0px 25px;" alt="image">
    <div class="text-center my-4" style="font-weight: bold; background-color: var(--primary-color); border-radius: 25px 25px;">
        <h6>${member.name} ${member.surname}</h6>
        <span>${member.role}</span>
    </div>
    </div>`;
}

// print
row.innerHTML = col;
