//reate a new repository named Unit2.Froyo on GitHub and clone it down.
//Add your cohort team to the repository you just made.
//Open the project with VS Code and create an HTML file and a JavaScript file.
//Figure out a plan for what code you'll need to write based on the user story. Use the rubric to guide you.
//A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors. They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. When they view the browser console, they observe a table listing how many of each flavor they have ordered. In this case, they will be able to observe that they have ordered three vanilla, two coffee, 
//and one strawberry froyo.
function numFlavors( {
    const input = document.getElementById('');
    const flavor = 
    const falvorcounts = {0};

    falvorcounts.forEach (falvor => {
const icecream = falvor.trim();
if (icecream) !== '') {
flavorConts[icecream]=(flavorConts[icecream] || 0)=1;
}
 });

const table = 
    