const WORDS = ['Dominate Market', 'Capture Attention',  'Drive Revenue ', 'Go Viral'];

export function initTypewriter() {
  const rword = document.getElementById("rword");
  let wi = 0, ci = 0, del = false;

  (function tick() {
    const w = WORDS[wi];
    rword.textContent = del ? w.slice(0, --ci) : w.slice(0, ++ci);

    if (!del && ci === w.length) {
      del = true;
      return setTimeout(tick, 1600);
    }
    if (del && ci === 0) {
      del = false;
      wi = (wi + 1) % WORDS.length;
    }

    setTimeout(tick, del ? 60 : 90);
  })();
}