const jsonData = {
    "asianDishes": [
        {
            "id": 1,
            "title": "פאד תאי",
            "content": "המנה המוכרת והמזוהה ביותר בקרב המטיילים והתרמילאים בתאילנד. אטריות מטוגנות עם ירקות, פירות ים/ עוף/ טופו (נתון לבחירתכם), רטבים, בוטנים קלויים ועשבי תיבול מוקפצים על ווק לוהטת.",
            "country": "תאילנד",
            "picture": "images/Pad Thai.jpg",
            "Ingredients": "מצרכים - אטריות אורז רחבות, גזר, כרוב, בצל ירוק, חזה עוף, ביצה, שיני שום, סויה, רוטב מירין, רוטב דגים, ממרח תמרינדי",
            "link": " https://www.thekitchencoach.co.il/%D7%A4%D7%90%D7%93-%D7%AA%D7%90%D7%99/"
        },
        {
            "id": 2,
            "title": "סום טאם",
            "content": "רצועות מגוררות של פפאיה ירוקה בתוספת ליים, תמרהינדי, צ'ילי, רוטב דגים, ירקות ובוטנים קלויים, מייצרים שילוב עדין של חריפות ומתיקות בפה.",
            "country": "תאילנד",
            "picture": "images/somtam.jpg",
            "Ingredients": "מצרכים - פפאיה, לוביה, עגבניות שרי, שום, בוטנים קלויים, רוטב דגים, לימון, סוכר, צ׳ילי חריף",
            "link": "https://www.thai-house.co.il/recipes/%D7%A1%D7%95%D7%9D-%D7%98%D7%90%D7%9D/"

        },
        {
            "id": 3,
            "title": "בננה רוטי",
            "content": "קינוח תאילנדי, המבוסס על הלחם ההודי רוטי ונפוץ במדינות אסיה.",
            "country": "תאילנד",
            "picture": "images/bananarotti.jpg",
            "Ingredients": "מצרכים -קמח , מים, ביצה, סוכר, מלח, חמאה, בננה,נוטלה",
            "link": " https://www.mako.co.il/food-recipes/recipes_column-desserts/Recipe-b4f643dff67d831006.htm"

        },
        {
            "id": 4,
            "title": "ראמֶן ",
            "content": " מנת מרק אטריות יפנית. ישנן מספר גרסאות למאכל, אך משותף בכולן הן איטריות חיטה דקות, לרוב בציר עוף או חזיר, אם כי ישנן גרסאות עם ציר מרוכז דמוי רוטב וגרסאות בציר טבעוני.",
            "country": "יפן",
            "picture": "images/ramen.jpg",
            "Ingredients": "מצרכים - חבילות אטריות מהירות להכנה על בסיס חיטה, מים חמים, אבקת מרק עוף, שורש ג’ינג’ר, שום, מיסו בהיר, רוטב סויה יאמאסה, שמן שומשום, חומץ אורז, ביצים, בצל ירוק, שומשום שחור",
            "link": "https://foody.co.il/foody_recipe/%D7%A8%D7%90%D7%9E%D7%9F-%D7%98%D7%A2%D7%99%D7%9D-%D7%91-10-%D7%93%D7%A7%D7%95%D7%AA-%D7%94%D7%9B%D7%A0%D7%94/"


        },
        {
            "id": 5,
            "title": "מוֹצִ׳י ",
            "content": " ממתק יפני מסורתי חשוב עשוי מזן אורז עמילני בשם מוצ׳יגומה.",
            "country": "יפן",
            "picture": "images/Mochi.jpg",
            "Ingredients": "מצרכים -קמח אורז, מים, קונפלור, סוכר, גלידה לבחירה",
            "link": "https://www.thecookingfoodie.co.il/recipe/%D7%92%D7%9C%D7%99%D7%93%D7%AA-%D7%9E%D7%95%D7%A6%D7%99-%E2%80%93-%D7%9E%D7%AA%D7%9B%D7%95%D7%9F"


        },
        {
            "id": 6,
            "title": "אגרול ",
            "content": "מתאבן מהמטבח הסיני אמריקאי העשוי מבצק ממולא בירקות או בבשר ומטוגן בשמן עמוק, לצידו מוגש לרוב רוטב חמוץ-מתוק כמטבל. ",
            "country": "סין",
            "picture": "images/egg roll.jpg",
            "Ingredients": "מצרכים - קמח, מים, ביצה, שיני שום, כף ג'ינג'ר טרי, כוסות נבטים גדולים, כוס פטריות שמפיניון או שיטאקה, 2 גבעולי בצל ירוק, גזר, כרוב, סויה, פלפל חריף סצ'ואני, סוכר, מיץ לימון, 10 עלי פילו או עלי אגרול",
            "link": "https://www.mako.co.il/food-cooking_magazine/flavors-moms-recipes/Article-acfb023580b2a31006.htm"


        },
        {
            "id": 7,
            "title": "עוף בלימון ",
            "content": "רצועות חזה עוף המושרות ברוטב לימון מתקתק מוקפץ על מחבת ווק עד הזהבה.",
            "country": "סין",
            "picture": "images/chicken.jpg",
            "Ingredients": "מצרכים -חזה עוף, קונפלור, סויה, שמן, ביצה, מים, סוכר, לימון, צ׳ילי יבש, ג׳ינג׳ר",
            "link": "https://www.mako.co.il/food-cooking_magazine/blogs-best-recipe/Recipe-26344545d560441006.htm"


        },
        {
            "id": 8,
            "title": "לחמניית באן",
            "content": "מדובר בסוג של לחמנייה קטנה ועגולה שמוקפת קרום דק. הלחמנייה עצמה מוכנה מבצק כרוך ונעשית על ידי ציפוי הבצק בשמן ואפיה באמצעות אידוי. לעיתים יש אורז חריף או מילוי נוסף בתוך הלחמנייה, אך גרסאות רבות כוללות רק את הבצק עצמו.",
            "country": "ויאטנם",
            "picture": "images/bhan.jpg",
            "Ingredients": "מצרכים -קמח, מים, סודה,סוכר, שמרים,שמן, חומץ",
            "link": "https://krutit.co.il/%D7%9C%D7%97%D7%9E%D7%A0%D7%99%D7%95%D7%AA-%D7%91%D7%90%D7%9F-%D7%91%D7%99%D7%AA%D7%99%D7%95%D7%AA-%D7%91%D7%9E%D7%A8%D7%A7%D7%9D-%D7%A9%D7%9C-%D7%A2%D7%A0%D7%9F/ "


        },
        {
            "id": 9,
            "title": "מרק פו",
            "content": "פו (בוייטנאמית: Phở) הוא שמם של מספר סוגי מרק וייטנאמים המוגשים עם אטריות אורז. הפו נחשב המאכל הלאומי של וייטנאם. אטריות האורז המשמשות לפו נקראות באן פו (וייטנאמית: bánh phở), מלבד להם המרק מכיל ציר עוף או בקר המבושל עם תבלינים האופייניים למטבח הווייטנאמי",
            "country": "ויאטנם",
            "picture": "images/Pho soup.jpg",
            "Ingredients": "מצרכים - בצל, שום, ג׳ינג׳ר, סוכר, חזה עוף, כנפיים, כוכב אניס, קינמון, מלח, פלפל, שמן, מים",
            "link": "https://www.hashulchan.co.il/%D7%9E%D7%AA%D7%9B%D7%95%D7%A0%D7%99%D7%9D/%D7%9E%D7%A8%D7%A7-%D7%A4%D7%95-%D7%95%D7%99%D7%99%D7%98%D7%A0%D7%90%D7%9E%D7%99/"


        },
        {
            "id": 10,
            "title": "דים סאם",
            "content": "דים סאם הוא שמם הקנטונזי של מגוון רחב של מאכלים סיניים המאופיינים בכך שהם מוגשים במנות קטנות לצד תה, חלקן מאודות בכלי ייעודי וחלקן מטוגנות או מוקפצות",
            "country": "סין",
            "picture": "images/DS.jpg",
            "Ingredients": " מצרכים - קמח, מים, בצל ירוק,  שום, ג׳ינג׳ר, עוף, קונפלור, סויה",
            "link": "https://batchen.cooking/recipe/%D7%93%D7%99%D7%9D-%D7%A1%D7%90%D7%9D-%D7%91%D7%9E%D7%99%D7%9C%D7%95%D7%99-%D7%A2%D7%95%D7%A3-%D7%9C%D7%9E%D7%95%D7%9F-%D7%92%D7%A8%D7%90%D7%A1-%D7%92%D7%99%D7%A0%D7%92%D7%A8-%D7%95%D7%91%D7%A6/"

        }

    ]
}

//בעליית העמוד
document.addEventListener("DOMContentLoaded", function (event) {
    createCards(); //קריאה לפונקציה ליצירת הכרטיסיות 

    //מעבר על כל הפריטים במחלקה
    document.querySelectorAll('.dropdown-item').forEach(item => {
        //מאזין ללחיצה
        item.addEventListener('click', event => {
            //שמירת המדינה כמשתנה
            const country = event.target.dataset.country;
            // עדכון התוכן  
            document.getElementById('dropdownMenuButton').textContent = event.target.textContent;
            //קריאה לפונקציה והעברת המדינה כפרמטר
            filterByCountry(country);
        });
    });
});

// //סינון כרטיסיות לפי מדינה
function filterByCountry(country) {
    //שמירת האלמנטים לפי id
    const cardsContainer = document.getElementById('cardsContainer');
    // שמירת כל האלמנטים עם המחלקה .card
    const cards = cardsContainer.querySelectorAll('.card');
    // משתנה שסופר את מספר הכרטיסיות הנראות
    let visibleCardsCount = 0;
    //מעבר על כל הכרטיסיות

    cards.forEach(card => {
        // שמירת התוכן
        const cardCountry = card.querySelector('.DishCountry').textContent.trim();
        // בדיקה האם הכרטיסייה תואמת למדינה שנבחרה בסינון או האם בחרו הצגת הכל
        if (country === "all" || cardCountry === country) {
            card.style.display = "block"; // הצגת הכרטיסייה
            visibleCardsCount++; // להעלות את מספר הכרטיסיות
        } else {
            card.style.display = "none"; // הסתרת הכרטיסייה
        }
    });

    // אם יש פחות מ5 כרטיסיות - מה שהגדרנו בגודל של מסך שלם
    if (visibleCardsCount < 5) {
        // תצמיד את הכרטיסיות לצד ימין
        cardsContainer.style.justifyContent = "flex-start"; // Align cards to the right
    } else {
        // אחרת - תרווח בינהם כמו שאמור 
        cardsContainer.style.justifyContent = "space-between"; // Default layout
    }
}

// פונקציה ליצירת כרטיסיות
function createCards() {
    //שמירת הכרטיסיות לפי id 
    const cardsContainer = document.getElementById('cardsContainer');
    cardsContainer.innerHTML = "";

    //מעבר על כל רכיב בג׳ייסון
    jsonData.asianDishes.forEach(dish => {
        //יצירת div לכל כרטיסייה
        const card = document.createElement('div');
        //הוספת מחלקות לכל כרטיסייה
        card.classList.add('card', 'mb-3');
        //הגדרת HTML
        // לכל כרטיסייה יש תמונה, כותרת, מדינה, כפתור קרא עוד והוספת אקורדיון שבלחיצה עליו ייפתח מידע נוסף
        card.innerHTML = `
        <div class="card-body">
            <div class="imageDiv">
                <img src="${dish.picture}" class="card-img-top" alt="${dish.title}">
            </div>
            <div class="DishCountry">
                <p class="card-text">${dish.country}</p>
            </div>
            <div class="DishNameDiv">
                <h5 class="card-title">${dish.title}</h5>
            </div>
            <div class="read-more-btn">
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${dish.id}" aria-expanded="false" aria-controls="collapse${dish.id}">
                    קרא עוד
                </button>
            </div>
            <div id="collapse${dish.id}" class="collapse" aria-labelledby="heading${dish.id}" data-bs-parent="#cardsContainer">
                <div class="accordion-body">
                    <p class="card-text">${dish.content}</p>
                    <button class="btn btn-primary" onclick="openModal('${dish.title}', '${dish.Ingredients}', '${dish.link}')">למתכון</button>
                </div>
            </div>
        </div>
        `;

        //הוספת הכרטיסיה החדשה שנוצרה לקונטיינר
        cardsContainer.appendChild(card);
    });
}


// פונקציה לפתיחת הפופ אפ בלחיצה על ״למתכון״
function openModal(title, ingredients, link) {

    const modal = document.querySelector('.modal');
    const modalTitle = modal.querySelector('.modal-title');
    const modalBody = modal.querySelector('.modal-body');

    //הגדרת הכותרת 
    modalTitle.textContent = title;
    //הגדרת המצרכים של המנה
    modalBody.innerHTML = `
        <p>${ingredients}</p>
    `;

    //יצירת כפתור למתכון המלא
    const linkButton = document.createElement('button');
    //הוספת מחלקות לעיצוב הכפתור
    linkButton.classList.add('btn', 'btn-primary');
    //טקסט הכפתור
    linkButton.textContent = ' למתכון המלא  ';
    //הגדרת הלינק שנפתח
    linkButton.addEventListener('click', function () {
        window.open(link, '_blank');
    });
    modalBody.appendChild(linkButton);
    //יצירת מופע חדש של הפופ אפ  והצגתו
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
}


//פונקציה לכפתור של התפריט במובייל 
function toggleNav() {
    var nav = document.getElementById('main-nav');
    if (nav.classList.contains('hide-mobile')) {
        nav.classList.remove('hide-mobile');
    } else {
        nav.classList.add('hide-mobile');
    }
}