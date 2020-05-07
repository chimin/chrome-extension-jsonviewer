function formatJson() {
    let body = document.body;
    if (body.childNodes.length != 1)
        return undefined;

    let content = body.firstChild as HTMLElement;
    if (content.tagName != 'PRE' || content.childNodes.length != 1)
        return undefined;

    let child = content.firstChild;
    if (child.nodeType != Node.TEXT_NODE)
        return undefined;

    let json = child.nodeValue.trim();
    if (!(json.charAt(0) == '{' && json.charAt(json.length - 1) == '}') &&
        !(json.charAt(0) == '[' && json.charAt(json.length - 1) == ']'))
        return undefined;

    let parsed = JSON.parse(child.nodeValue);
    let formatted = JSON.stringify(parsed, undefined, 2);

    let output = document.createElement('pre');
    output.innerText = formatted;
    content.style.display = 'none';
    body.appendChild(output);
}

try {
    formatJson();
} catch (err) {
    // ignore error
}
