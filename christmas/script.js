var dest = new Date("dec 25, 2023 12:00:00").getTime();
		var x = setInterval(function(){
			var now = new Date().getTime();
			var diff = dest - now;
			var days = Math.floor(diff / (1000 * 60*60*24));
			var hours = Math.floor((diff % ( 1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((diff % ( 1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((diff % ( 1000 * 60)) / 1000);
			document.getElementById('chrs-days').innerHTML = days+"<span>Days</span>";
			document.getElementById('chrs-hrs').innerHTML = hours+"<span>hrs</span>";
			document.getElementById('chrs-min').innerHTML = minutes+"<span>min</span>";
			document.getElementById('chrs-sec').innerHTML = seconds+"<span>sec</span>";
		},1000);
		var modal = document.querySelector(".modal");
		var trigger = document.querySelector(".trigger");
		var closeButton = document.querySelector(".close-button");
		
		function toggleModal() {
			modal.classList.toggle("show-modal");
		}
		
		function windowOnClick(event) {
			if (event.target === modal) {
				toggleModal();
			}
		}
		
		trigger.addEventListener("click", toggleModal);
		closeButton.addEventListener("click", toggleModal);
		window.addEventListener("click", windowOnClick);
		