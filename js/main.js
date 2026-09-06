/* =========================================================
   【机器人科创实验室】展示网站 - 交互脚本
   ========================================================= */

// ---------- 手机端汉堡菜单 ----------
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

// ---------- 页脚年份自动更新 ----------
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ---------- 回到顶部按钮 ----------
const backToTop = document.getElementById('backToTop');

if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ---------- 图片灯箱（点击放大预览） ----------
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');

if (lightbox) {
  // 瀑布流风采照片点击放大
  document.querySelectorAll('.gallery-item img').forEach((img) => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxCaption.textContent = img.alt || '';
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

// ---------- 首页轮播图 ----------
(function initCarousel() {
  const track = document.getElementById('carouselTrack');
  const carousel = document.getElementById('carousel');
  if (!track || !carousel) return;

  const slides = track.children.length;
  if (slides < 2) return;

  const dotsWrap = document.getElementById('carouselDots');
  let index = 0;
  let timer = null;

  // 生成圆点
  for (let i = 0; i < slides; i++) {
    const dot = document.createElement('button');
    dot.setAttribute('aria-label', '切换到第 ' + (i + 1) + ' 张');
    dot.addEventListener('click', () => { go(i); restart(); });
    dotsWrap.appendChild(dot);
  }
  const dots = dotsWrap.children;

  // 一步 = 单张幻灯片的实际像素宽度（getBoundingClientRect 最可靠）
  function stepWidth() {
    return track.children[0].getBoundingClientRect().width;
  }

  function go(i) {
    index = (i + slides) % slides;
    track.style.transform = 'translateX(' + (-index * stepWidth()) + 'px)';
    for (let j = 0; j < dots.length; j++) {
      dots[j].classList.toggle('active', j === index);
    }
  }

  function restart() {
    if (timer) clearInterval(timer);
    timer = setInterval(() => go(index + 1), 3000);
  }

  // 左右按钮
  const prevBtn = carousel.querySelector('.carousel-btn.prev');
  const nextBtn = carousel.querySelector('.carousel-btn.next');
  if (prevBtn) prevBtn.addEventListener('click', () => { go(index - 1); restart(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { go(index + 1); restart(); });

  // 悬停暂停
  carousel.addEventListener('mouseenter', () => { if (timer) clearInterval(timer); });
  carousel.addEventListener('mouseleave', restart);

  // 键盘左右键切换
  carousel.setAttribute('tabindex', '0');
  carousel.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { go(index - 1); restart(); }
    if (e.key === 'ArrowRight') { go(index + 1); restart(); }
  });

  go(0);
  restart();

  // 窗口尺寸变化时保持当前张对齐
  window.addEventListener('resize', () => go(index));
})();

// ---------- 招新咨询表单（调用邮箱客户端发送） ----------
function composeMail(event) {
  const nameInput = document.getElementById('rf-name');
  const msgInput = document.getElementById('rf-msg');
  if (!nameInput || !msgInput) return true;

  const name = nameInput.value.trim();
  const msg = msgInput.value.trim();
  if (!name || !msg) return false;

  const subject = encodeURIComponent('机器人科创实验室招新咨询 - ' + name);
  const body = encodeURIComponent('姓名：' + name + '\n\n咨询内容：\n' + msg + '\n\n（由实验室网站招新表单发送）');
  window.location.href = 'mailto:1537940649@qq.com?subject=' + subject + '&body=' + body;
  return false;
}
