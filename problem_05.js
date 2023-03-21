window.addEventListener('load', function() {
    let elements = document.querySelector('#element');
    let textNode = elements.childNodes[0]
    let text = textNode.data;

    // console.log(text.length)
    // console.log("last" + text[text.length - 1])
    // console.log(text.substring(0, text.length -1))
    // text = text[text.length - 1] + text.substring(0, text.length - 1);
    // console.log(text)

    setInterval(() => {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 1000);
})
 
