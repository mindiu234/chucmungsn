
// Tính số ngày yêu
function calculateDays() {
    const startDate = new Date("2022-04-30");
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById("days-count").innerText = `${diffDays} ngày`;
}

// Tạo bong bóng bay
function createBubbles() {
    const bubblesContainer = document.querySelector('.bubbles');
    for (let i = 0; i < 20; i++) {
        const bubble = document.createElement('span');
        const size = Math.random() * 40 + 10; // Kích thước ngẫu nhiên
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.animationDuration = `${Math.random() * 10 + 10}s`;
        bubblesContainer.appendChild(bubble);
    }
}

calculateDays();
createBubbles();
