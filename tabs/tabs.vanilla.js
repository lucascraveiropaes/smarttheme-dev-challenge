(function() {
    const buttons = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");
    const [defaulClass] = buttons.item(0).className.split(" | ");
    const ACTIVE = defaulClass + " text-white bg-teal-300 border-teal-300 hover:bg-teal-400 hover:border-teal-400";

    buttons.item(0).className = ACTIVE;
    contents.item(0).classList.remove("hidden");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const tabId = this.dataset.tab;

            contents.forEach(content => {
            if (content.id === tabId)
                return content.classList.remove("hidden");

            return content.classList.add("hidden");
            });

            buttons.forEach(item => {
            item.className = defaulClass;
            });

            this.className = ACTIVE;
        });
    });
})();