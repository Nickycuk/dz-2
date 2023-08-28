document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".button");
    
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            changeColor(button);
        });
    });
    
    function changeColor(button) {
        const colors = ["red", "yellow", "green"];
        const currentColor = button.classList[1];
        const currentIndex = colors.indexOf(currentColor);
        const nextIndex = (currentIndex + 1) % colors.length;
        const nextColor = colors[nextIndex];
        
        button.classList.remove(currentColor);
        button.classList.add(nextColor);
        
        setTimeout(() => {
            changeColor(button);
        }, 1000);
    }
});
