// 1. 移动端汉堡菜单切换
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

document.getElementById('hamburger').addEventListener('click', function() {
    const navLinks = document.getElementById('navLinks');
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !expanded);
    navLinks.classList.toggle('active');
});

// 2. 滚动时导航栏样式变化
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    }
});

// 3. 滚动动画（元素进入视口时淡入上滑）
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .function-item, .scene-card').forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
});

// 4. 表单提交验证（可选，若体验区有表单）
// const experienceForm = document.querySelector('.experience-form');
// experienceForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const email = experienceForm.querySelector('input[type="email"]').value;
//     if (!validateEmail(email)) {
//         alert('请输入有效的邮箱地址！');
//         return;
//     }
//     // 提交逻辑...
// });

// 邮箱验证函数
// function validateEmail(email) {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
// }

