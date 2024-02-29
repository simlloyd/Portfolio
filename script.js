const primaryHeader = document.querySelector(".nav-container");
const scrollWatcher = document.createElement("div");

scrollWatcher.setAttribute("data-scroll-watcher", "");
primaryHeader.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
    primaryHeader.classList.toggle("sticking", !entries[0].isIntersecting)
});

navObserver.observe(scrollWatcher);

// webdev text effect
const timeline = gsap.timeline({ repeat: -1 });
const chars = document.querySelectorAll(".text");

gsap.set(".text-one", { color: "#ffe4c4" });
gsap.set(".text-two", { color: "#ffe4c4" });
gsap.set(".text-three", { color: "#ffe4c4" });
gsap.set(".text-four", { color: "#000000" });
gsap.set(".text-five", { color: "#000000" });
gsap.set(".text-six", { color: "#000000" });
gsap.set(".text-seven", { color: "#000000" });
gsap.set(".text-eight", { color: "#000000" });
gsap.set(".text-nine", { color: "#000000" });
gsap.set(".text-ten", { color: "#000000" });
gsap.set(".text-eleven", { color: "#000000" });
gsap.set(".text-twelve", { color: "#000000" });

timeline.from(chars, { opacity: 0, scale: 0, ease: "sine", stagger: 0.25 }).to(".text", {
  duration: 0.9,
  ease: "sine.inOut",
  stagger: {
    each: 0.1,
    repeat: 1
  }
}, 1);

// skills animation
async function init () {
    const node = document.querySelector("#type-text")

    await sleep(1000)
    node.innertext = ""
    await node.type("")

    while (true) {
        await node.type('HTML')
        await sleep(3000)
        await node.delete('HTML')

        await node.type('CSS')
        await sleep(3000)
        await node.delete('CSS')

        await node.type('JAVASCRIPT')
        await sleep(3000)
        await node.delete('JAVASCRIPT')

        await node.type('NODE.JS')
        await sleep(3000)
        await node.delete('NODE.JS')

        await node.type('PHP')
        await sleep(3000)
        await node.delete('PHP')

        await node.type('REACT')
        await sleep(3000)
        await node.delete('REACT')

        await node.type('LARAVEL')
        await sleep(3000)
        await node.delete('LARAVEL')

    }
}

const sleep = time => new Promise(resolve => 
    setTimeout(resolve, time))

class TypeAsync extends HTMLSpanElement {
    get typeInterval () {
        const randomMs = 100 * Math.random()
        return randomMs < 50 ? 10 : randomMs
    }
    async type (text) {
        for (let character of text) {
            this.innerText += character
            await sleep(this.typeInterval)
        }
    }

    async delete (text) {
        for (let character of text) {
            this.innerText = this.innerText.slice(0, 
                this.innerText.length -1)
                await sleep(this.typeInterval)
        }
    }
}

customElements.define('type-async', TypeAsync, {
    extends: 'span'})

    init()


// Resume text effect

var myText = document.getElementById("bounceText").innerHTML, wrapText = "";

for (var i = 0; i < myText.length; i++) {
    wrapText += "<em>" + myText.charAt(i) + "</em>";
}

document.getElementById("bounceText").innerHTML = wrapText;

var myLetters = document.getElementsByTagName("em"),
    j = 0;

    function applyBounce() {
        setTimeout(function()  {
            myLetters[j].className = "bounce-me";
            j++;

            if (j < myLetters.length) {
                applyBounce();
            }
        }, 500);
    }

    applyBounce();