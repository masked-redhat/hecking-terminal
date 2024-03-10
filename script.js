const typeSpeed = 38;

const commands = ["Initializing hacking", "Reading your files", "Password files detected", "Sending all passwords and personal files to server", "Cleaning up"];

const terminal = document.getElementById("terminal-content");

const getRandom127 = () => Math.ceil(Math.random() * 4) + 2;

const createCommand = () => {
    let div = document.createElement("div");
    div.classList.add("command");
    let divText = document.createElement("span");
    div.append(divText);
    let cursor = document.createElement("span");
    cursor.id = "cursor";
    div.append(cursor)
    terminal.append(div);
    return [div, divText, cursor];
}
const writeCommand = (command, divText) => {
    let curr = 0;
    Array.from(command + "...").forEach(word => {
        setTimeout(() => {
            divText.textContent = divText.textContent + word;
        }, curr);
        curr += typeSpeed;
    })
    return curr;
}

const writeCommands = (commands) => {
    let interval = 0;
    commands.forEach(command => {
        let temp = getRandom127();
        setTimeout((t = temp) => {
            let [div, divText, cursor] = createCommand();
            let totalTime = writeCommand(command, divText)
            setTimeout(() => {
                div.removeChild(cursor)
            }, (t * 1000));
        }, interval * 1000);
        interval += temp;
    });
}

writeCommands(commands)