// Final Project

function set()
{
    let elements = document.getElementsByName('cssProperty');

    for (index = 0; index < elements.length; index++)
    {
        let cssProperty = elements[index].getAttribute('id');
        let cssValue = elements[index].value;

        let div = document.getElementById('modify');

        div.style[cssProperty] = cssValue;
        console.log(cssProperty);
        console.log(cssValue);
    }
}

document.getElementById('set').addEventListener('click', set);

