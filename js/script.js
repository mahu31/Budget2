/*const popupLinks = document.querySelectorAll('.cards__link');

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener('click', function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			console.log(popupName);
			const curentPopup = document.querySelector(`div.${popupName}`);
			console.log(curentPopup);
			//popupOpen(curentPopup)

			e.preventDefault();
		})
	}
}
*/
/*
const popupLinks = document.querySelectorAll(".cards__link"),
	body = document.querySelector("body"),
	lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

if (popupLinks.length > 0) {
	for (var i = 0; i < popupLinks.length; i++) {
		const popupLink = popupLinks[i];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute("href").replace("#", "");
			const curentPopup = document.getElementById(popupName);
			console.log(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		})
	}
}

const popupCloseIcon = document.querySelectorAll(".close-popup");
if (popupCloseIcon.length > 0) {
	for (let i = 0; i < popupCloseIcon.length; i++) {
		const el = popupCloseIcon[i];
		el.addEventListener("click", function (e) {
			//
			e.preventDefault();
		})
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector(".popup.open");
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			//bodyLock();
		}
		curentPopup.classList.add("open");
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest(".popup__content")) {
				popupClose(e.target.closest(".popup"));
			}
		});
	}
}

function popupClose(popupActive) {
	popupActive.classList.remove("open")
}*/