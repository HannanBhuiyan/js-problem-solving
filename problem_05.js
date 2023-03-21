window.addEventListener('load', function() {
    let elements = document.querySelector('#element');
    let textNode = elements.childNodes[0]
    let text = textNode.data;

    setInterval(() => {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 1000);
})
 
