document.addEventListener('DOMContentLoaded', function () {
    let input = document.getElementById("inputBox");
    let buttons = document.querySelectorAll("button");
    let string = "";

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            handleButtonClick(e.target.innerHTML);
        });
    });

    document.addEventListener('keydown', (e) => {
        handleKeyPress(e.key);
    });

    function handleButtonClick(value) {
        switch (value) {
            case '=':
                string = eval(string);
                input.value = string;
                break;
            case 'AC':
                string = '';
                input.value = string;
                break;
            case 'DEL':
                string = string.substring(0, string.length-1);
                input.value = string;
                break;
            default:
                string += value;
                input.value = string;
        }
    }

    function handleKeyPress(key) {
        if ((key >= '0' && key <= '9') || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
            handleButtonClick(key);
        } else if (key === 'Enter') {
            handleButtonClick('=');
        } else if (key === 'Backspace'  || key === 'Delete') {
            handleButtonClick('DEL');
        }
        else if(key === 'Escape') {
            handleButtonClick('AC');
        }
    }
});
