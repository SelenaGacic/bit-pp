/*Write a function to hide email addresses to protect them from unauthorized users.

	"somerandomaddress@example.com" -> "somerand...@example.com"

*/


function toHide(str, hiddenEl) {
    return str = str.replace(hiddenEl, "...");
}

console.log(toHide("somerandomaddress@example.com", "address"));