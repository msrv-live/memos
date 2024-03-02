
let app = document.querySelector(".app");

function getFormattedDateTime() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getDay()];
    const month = months[now.getMonth()];
    const date = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
  
    const paddedMinutes = minutes < 10 ? '0' + minutes : minutes;
  
    const formattedDateTime = `${dayOfWeek}, ${month} ${date}, ${hours}:${paddedMinutes}`;
  
    return formattedDateTime;
}

function createContent(content, container) {
    let template = document.createElement('template');
    template.innerHTML = content.trim();

    if (container === 'html') {
        return template.content.firstElementChild;
    } else if (container === 'script') {
        const scriptElement = document.createElement('script');
        scriptElement.textContent = template.content.querySelector('script').textContent;
        return scriptElement;
    }
    return null;
}
function elementInnerTextLength(element) {
    let text = element.innerText ;
    let length = text.length;
    return `${length} characters`
}

function moveCaretToEnd(el) {
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(el);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
    el.focus();
}










console.log("running...");