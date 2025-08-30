let books = [
    {
        "name": "Blutsbrüder",
        "author": "Jackie Welles",
        "likes": 2800,
        "liked": true,
        "price": 19.20,
        "publishedYear": 2020,
        "genre": "Science-Fiction",
        "cover": "./img/blutsbrüder.png",
        "comments": [
            {
                "name": "ChoomFriend",
                "comment": "Jackies Loyalität und Humor haben mich richtig berührt."
            },
            {
                "name": "HeistLover",
                "comment": "Eine spannende und emotionale Geschichte über Familie und Ehre."
            }
        ]
    },
    {
        "name": "Tales of Night City",
        "author": "V",
        "likes": 2450,
        "liked": true,
        "price": 21.99,
        "publishedYear": 2020,
        "genre": "Science-Fiction",
        "cover": "./img/tales.png",
        "comments": [
            {
                "name": "StreetKid77",
                "comment": "Eine intensive Reise durch die dunklen Ecken von Night City – absolut fesselnd."
            },
            {
                "name": "NetRunner92",
                "comment": "Die Cyberware-Beschreibungen sind unglaublich detailreich und spannend."
            },
            {
                "name": "ChromeHunter",
                "comment": "Harter, brutaler Cyberpunk wie er sein sollte – Liebe es!"
            }
        ]
    },
    {
        "name": "Silverhand: Rebellion in Chrom",
        "author": "Johnny Silverhand",
        "likes": 3100,
        "liked": true,
        "price": 23.50,
        "publishedYear": 2021,
        "genre": "Science-Fiction",
        "cover": "./img/rebellion.png",
        "comments": [
            {
                "name": "RockFan2045",
                "comment": "Ein wilder Mix aus Musik, Anarchie und High-Tech – Johnny pur!"
            },
            {
                "name": "AntiCorpo",
                "comment": "Der Kampf gegen Konzerne hat mich richtig mitgerissen."
            }
        ]
    },
    {
        "name": "Im Netz der Lichter",
        "author": "Judy Alvarez",
        "likes": 1980,
        "liked": false,
        "price": 19.75,
        "publishedYear": 2022,
        "genre": "Science-Fiction",
        "cover": "./img/im-netz.png",
        "comments": [
            {
                "name": "BraindanceLover",
                "comment": "Die BD-Szenen sind so lebendig beschrieben, als wäre man selbst drin."
            },
            {
                "name": "TechnoSoul",
                "comment": "Emotional, tiefgründig und trotzdem typisch Cyberpunk."
            }
        ]
    },
    {
        "name": "Staub und Freiheit",
        "author": "Panam Palmer",
        "likes": 2750,
        "liked": true,
        "price": 20.30,
        "publishedYear": 2020,
        "genre": "Science-Fiction",
        "cover": "./img/staub.png",
        "comments": [
            {
                "name": "NomadLife",
                "comment": "Ein Roadtrip voller Action und Herz – Panam forever!"
            },
            {
                "name": "WastelandDreamer",
                "comment": "Die Nomaden-Atmosphäre im Ödland ist perfekt eingefangen."
            }
        ]
    },
    {
        "name": "Klingen im Neonlicht",
        "author": "Adam Smasher",
        "likes": 1650,
        "liked": false,
        "price": 18.99,
        "publishedYear": 2019,
        "genre": "Science-Fiction",
        "cover": "./img/klingen.png",
        "comments": [
            {
                "name": "MechaFanatic",
                "comment": "Brutal, kaltblütig und kompromisslos – genauso wie Adam Smasher."
            },
            {
                "name": "CyberJunkie",
                "comment": "Die Kämpfe sind brutal und detailliert – nichts für schwache Nerven."
            }
        ]
    },
    {
        "name": "Legenden im Afterlife",
        "author": "Rogue Amendiares",
        "likes": 1900,
        "liked": true,
        "price": 22.00,
        "publishedYear": 2021,
        "genre": "Science-Fiction",
        "cover": "./img/legenden.png",
        "comments": [
            {
                "name": "FixerFan",
                "comment": "Eine Geschichte voller Macht, Deals und Intrigen im Afterlife."
            },
            {
                "name": "NeonQueen",
                "comment": "Rogue beweist, dass man auch im Cyberpunk-Alter noch eine Legende sein kann."
            }
        ]
    },
    {
        "name": "Ehre und Pflicht",
        "author": "Goro Takemura",
        "likes": 1420,
        "liked": false,
        "price": 17.80,
        "publishedYear": 2022,
        "genre": "Science-Fiction",
        "cover": "./img/ehre.png",
        "comments": [
            {
                "name": "SamuraiCode",
                "comment": "Eine tragische, aber inspirierende Geschichte über Loyalität."
            },
            {
                "name": "CorpWatcher",
                "comment": "Die Konzerne wurden hier schonungslos dargestellt – sehr intensiv."
            }
        ]
    },
    {
        "name": "Die Erbin von Arasaka",
        "author": "Hanako Arasaka",
        "likes": 1200,
        "liked": false,
        "price": 21.50,
        "publishedYear": 2023,
        "genre": "Science-Fiction",
        "cover": "./img/erbin.png",
        "comments": [
            {
                "name": "CorporateSlave",
                "comment": "Eine kühle, aber faszinierende Perspektive auf Macht in Night City."
            }
        ]
    },
]


function renderBooks(books) {
    const container = document.getElementById('books-container');
    container.innerHTML = '';

    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        const card = document.createElement('div');
        card.className = 'book-card';

        let commentsHtml = '';
        for (let j = 0; j < book.comments.length; j++) {
            commentsHtml += `<div>[${book.comments[j].name}]: ${book.comments[j].comment}</div>`;
        }

        card.innerHTML = `
      <h2>${book.name}</h2>
      <div class="book-image"><img src="${book.cover}" alt="${book.name} Cover"></div>
      <div class="book-info">
        <span class="price">${book.price.toFixed(2).replace('.', ',')} €</span>
        <span class="likes">${book.likes} <span class="heart" onclick="toggleLike(${i})">${book.liked ? '❤️' : '🤍'}</span></span>
        <div><b>Author</b>: ${book.author}</div>
        <div><b>Erscheinungsjahr</b>: ${book.publishedYear}</div>
        <div><b>Genre</b>: ${book.genre}</div>
      </div>
      <div class="comments">
        <b>Kommentare:</b>
        ${commentsHtml}
      </div>
      <input type="text" placeholder="Kommentar hinzufügen..." class="comment-input">
      <button class="send-btn">➤</button>
    `;

        container.appendChild(card);

        const sendbtn = card.querySelector('.send-btn');
        const input = card.querySelector('.comment-input');

        sendbtn.onclick = function () {
            const newComment = input.value.trim();
            if (newComment !== '') {
                book.comments.push({
                    name: "SandevistanUSER",
                    comment: input.value
                });
                renderBooks(books);
            }
        };
    }
}

function toggleLike(index) {
    let book = books[index];
    if (book.liked) {
        book.liked = false;
        book.likes--;
    } else {
        book.liked = true;
        book.likes++;
    }
    renderBooks(books);
}

document.addEventListener('DOMContentLoaded', () => {
    renderBooks(books);
});