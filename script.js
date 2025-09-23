document.addEventListener('DOMContentLoaded', () => {
    // 獲取所有 section 元素
    const sections = document.querySelectorAll('section');

    // 檢查元素是否進入視窗，並添加 'visible' 類別
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // 停止觀察已顯示的元素
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2 // 當元素 20% 出現在視窗時觸發
    });

    sections.forEach(section => {
        section.classList.add('fade-in-section'); // 添加淡入效果類別
        observer.observe(section);
    });
});