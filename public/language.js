(() => {
  const key = 'secondorder-site-language';
  const buttons = [...document.querySelectorAll('[data-language]')];
  function apply(language, persist = false) {
    const lang = language === 'zh' ? 'zh' : 'en';
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-en][data-zh]').forEach(element => {
      element.textContent = element.dataset[lang];
    });
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === lang)));
    document.querySelector('meta[name="description"]').content = lang === 'zh'
      ? 'SecondOrder 汇集情景推演、行情解读和诉讼程序比较工具，探索一次变化如何引出更多变化。'
      : 'SecondOrder brings together tools for exploring scenarios, reading markets, and comparing legal procedures.';
    if (persist) { try { localStorage.setItem(key, lang); } catch {} }
  }
  let saved;
  try { saved = localStorage.getItem(key); } catch {}
  const requested = new URLSearchParams(location.search).get('lang');
  const preferred = requested === 'zh' || requested === 'en' ? requested : saved;
  apply(preferred === 'zh' || preferred === 'en' ? preferred : (navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en'));
  buttons.forEach(button => button.addEventListener('click', () => {
    const lang = button.dataset.language;
    apply(lang, true);
    const url = new URL(location.href);
    url.searchParams.set('lang', lang);
    try { history.replaceState(null, '', url); } catch {}
  }));
})();

(() => {
  const formalSite = location.hostname === 'secondorder.tools' || location.hostname === 'www.secondorder.tools';
  document.querySelectorAll('iframe[data-tool]').forEach(frame => {
    const url = formalSite
      ? 'https://' + frame.dataset.tool + '.secondorder.tools'
      : frame.dataset.previewSrc;
    frame.src = url;
    const standalone = document.querySelector('a.standalone');
    if (standalone) standalone.href = url;
  });
})();
