const text = document.querySelector(".sec-txt");
const cursor = document.querySelector(".cursor");
const words = ["Developer", "Full Stack", "Data Analyst", "Cybersecurity Analyst", "Support IT"];
let index = 0;

const typeText = (word, callback) => {
    let i = 0;
    const typing = setInterval(() => {
        text.textContent += word[i];
        i++;
        if (i >= word.length) {
            clearInterval(typing);
            cursor.style.display = "inline-block";
            callback();
        }
    }, 100);
};

const deleteText = (callback) => {
    let word = text.textContent;
    let i = 0;
    const deleting = setInterval(() => {
        text.textContent = word.slice(0, word.length - i);
        i++;
        if (i > word.length) {
            clearInterval(deleting);
            cursor.style.display = "none";
            callback();
        }
    }, 100);
};

const textLoad = () => {
    deleteText(() => {
        let word = words[index];
        typeText(word, () => {
            setTimeout(() => {
                deleteText(() => {
                    index = (index + 1) % words.length;
                    textLoad();
                });
            }, 1000);
        });
    });
};

textLoad();
