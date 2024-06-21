import { invoke } from "@tauri-apps/api/tauri";

window.addEventListener("DOMContentLoaded", () => {
	document.getElementById("solo_frame")!.onclick = () => {
		let body = document.querySelector('body')!;
		body.className += " fade"
		
		setTimeout(() => {
			window.location.href = "./src/html/solo.html";
			body.className.replace(" fade", "");
		}, 2000)
	}
});
