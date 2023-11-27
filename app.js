
// Your javascript goes here
function app() {

    const HIDDEN_CLASS = "hidden";
    const MARKED_AS_DONE_CLASS = "checkbox-done";
    const MARKED_AS_NOT_DONE_CLASS = "hidden";

    // get the button
    const checkboxButton = document.querySelector("#setup-step-button");

    // get all the icons
    const notCompleted = document.querySelector("#nc");
    const completed = document.querySelector("#c");
    const spinner = document.querySelector("#s");
    console.log({ checkboxButton, notCompleted, completed, spinner });
    // on click, hide the empty checkbox
    
    function handleMarkAsDone() {
        notCompleted.classList.add(HIDDEN_CLASS);

        spinner.classList.remove(HIDDEN_CLASS);

        setTimeout(()=>{
            spinner.classList.add(HIDDEN_CLASS);
            completed.classList.remove(HIDDEN_CLASS)

            checkboxButton.ariaLabel = checkboxButton.ariaLabel.replace('as done', 'as not done');
            checkboxButton.classList.add(MARKED_AS_DONE_CLASS);
        }, 3000);
    }

    function handleMarkAsNotDone() {
        completed.classList.add(HIDDEN_CLASS);

        spinner.classList.remove(HIDDEN_CLASS);

        setTimeout(()=>{
            spinner.classList.add(HIDDEN_CLASS);
            notCompleted.classList.remove(HIDDEN_CLASS)
            checkboxButton.classList.remove(MARKED_AS_DONE_CLASS);

            checkboxButton.ariaLabel = checkboxButton.ariaLabel.replace('as not done', 'as done');
        }, 3000);
    }
    
    function handleMarkDoneOrNotDone() {
        const markedAsDone = checkboxButton.classList.contains(MARKED_AS_DONE_CLASS);

        if (markedAsDone){
            handleMarkAsNotDone();
        } else {
            handleMarkAsDone();
        }
    }

    checkboxButton.addEventListener('click',
        handleMarkDoneOrNotDone)
    // show the spinner

    // 3 seconds later, show the check icon
}


app()