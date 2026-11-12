const weddingDate = new Date("2026-12-28T19:35:00+05:30").getTime();

function updateCountdown() {
  const countdown = document.getElementById("countdown");

  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  if (!countdown || !daysElement || !hoursElement ||
      !minutesElement || !secondsElement) {
    console.error("Countdown elements not found.");
    return;
  }

  const now = Date.now();
  const difference = weddingDate - now;

  if (difference <= 0) {
    countdown.innerHTML =
      "<p>Today is the beginning of your forever! ♥</p>";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (difference % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor(
    (difference % (1000 * 60)) / 1000
  );

  daysElement.textContent = days;
  hoursElement.textContent = String(hours).padStart(2, "0");
  minutesElement.textContent = String(minutes).padStart(2, "0");
  secondsElement.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);
const weddingMusic = document.getElementById("weddingMusic");
const musicToggle = document.getElementById("musicToggle");

if (weddingMusic && musicToggle) {

  let userPausedMusic = false;

  function updateMusicButton() {
    if (weddingMusic.paused) {
      musicToggle.textContent = "▶";
      musicToggle.setAttribute("aria-label", "Play music");
      musicToggle.setAttribute("title", "Play music");
    } else {
      musicToggle.textContent = "Ⅱ";
      musicToggle.setAttribute("aria-label", "Pause music");
      musicToggle.setAttribute("title", "Pause music");
    }
  }

  function startMusic() {
    weddingMusic.play()
      .then(updateMusicButton)
      .catch(updateMusicButton);
  }

  // Attempt autoplay when the website opens
  startMusic();

  // Start music on the first interaction if autoplay was blocked
  document.addEventListener("click", function (event) {
    if (
      !userPausedMusic &&
      weddingMusic.paused &&
      !event.target.closest("#musicToggle")
    ) {
      startMusic();
    }
  }, { once: true });

  // Music button
  musicToggle.addEventListener("click", function () {
    if (weddingMusic.paused) {
      userPausedMusic = false;
      startMusic();
    } else {
      userPausedMusic = true;
      weddingMusic.pause();
      updateMusicButton();
    }
  });

}

// Opening Invitation Button

const openInvitationButton = document.getElementById("openInvitation");
const invitationCover = document.getElementById("invitationCover");

if (openInvitationButton && invitationCover) {
  document.body.style.overflow = "hidden";

  openInvitationButton.addEventListener("click", function () {
    invitationCover.classList.add("cover-hidden");
    document.body.style.overflow = "";
  });
}
