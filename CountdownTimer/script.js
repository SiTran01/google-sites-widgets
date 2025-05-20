const countdown = () => {
  const targetDate = new Date('2025-12-21T23:59:59').getTime();

  const now = new Date().getTime();
  const timeDiff = targetDate - now;

  if (timeDiff <= 0) {
    clearInterval(timer);
    document.querySelectorAll('.block .nb').forEach(el => el.textContent = 0);
    return;
  }

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  document.querySelectorAll('.block')[0].querySelector('.nb').textContent = days;
  document.querySelectorAll('.block')[1].querySelector('.nb').textContent = hours;
  document.querySelectorAll('.block')[2].querySelector('.nb').textContent = minutes;
  document.querySelectorAll('.block')[3].querySelector('.nb').textContent = seconds;
};

countdown();
const timer = setInterval(countdown, 1000);
