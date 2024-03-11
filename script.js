const typeSpeed = 38;
const dotSpeedRel = 26;
const dotSpeed = typeSpeed * dotSpeedRel;

const commands = ["Initializing hacking", "Reading your files", "Password files detected", "Sending all passwords and personal files to server", "Cleaning up"];

const terminal = document.getElementById("terminal-content");

const getRandom127 = () => Math.ceil(Math.random() * 4) + 2;

const createCommand = () => {
    let div = document.createElement("div");
    div.classList.add("command");
    div.classList.add("unchecked");
    let divText = document.createElement("span");
    div.append(divText);
    let cursor = document.createElement("span");
    cursor.id = "cursor";
    div.append(cursor)
    terminal.append(div);
    return [div, divText, cursor];
}
const writeCommand = (command, divText, totalTime, wordTime) => {
    let curr = 0;
    Array.from(command).forEach(word => {
        setTimeout(() => {
            divText.textContent = divText.textContent + word;
        }, curr);
        curr += typeSpeed;
    })

    let remSecs = (totalTime * 1000) - wordTime;
    let remSteps = Math.floor(remSecs / dotSpeed) - 1;
    curr += dotSpeed;
    for (let steps = 0; steps < remSteps; steps++) {
        setTimeout(() => {
            divText.textContent = divText.textContent + ".";
        }, curr);
        curr += dotSpeed;
    }

    return curr;
}

const writeCommands = (commands) => {
    let interval = 0;
    let wordTime;
    commands.forEach(command => {
        let temp = getRandom127();
        wordTime = command.length * typeSpeed;
        setTimeout((t = temp, w = wordTime) => {
            let [div, divText, cursor] = createCommand(); writeCommand(command, divText, t, w);
            setTimeout(() => {
                div.removeChild(cursor)
                div.classList.add("checked");
                div.classList.remove("unchecked")
            }, (t * 1000));
        }, (interval * 1000));
        interval += temp;
    });
}

writeCommands(commands)