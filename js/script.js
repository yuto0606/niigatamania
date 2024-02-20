
// スライダーの設定
var slider = new Swiper("#slider", {
  slidesPerView: 1, // 1つのスライドを表示
  autoplay: 1000, // 自動再生（5秒ごと）
  loop: true, // ループ再生
  loopedSlides: 6, // ループするスライド数
  centeredSlides: true, // スライドを中央に配置

  nextButton: ".swiper-button-next", // 次へボタンのクラス
  prevButton: ".swiper-button-prev", // 前へボタンのクラス
  slidesPerView: "1.3", // 1.3個のスライドを表示（この設定は意図されているか確認してください）
  breakpoints: {
    500: {
      slidesPerView: 1, // 画面幅が600px未満の場合、1つのスライドを表示
    },
  },
});

// サムネイルの設定
var thumbs = new Swiper("#thumbs", {
  centeredSlides: true, // スライドを中央に配置
  spaceBetween: 10, // スライド間のスペース
  loop: true, // ループ再生
  slidesPerView: "auto", // 自動でスライド数を調整
});

// スライダーとサムネイルの連携
slider.params.control = thumbs; // スライダーがサムネイルを制御する
thumbs.params.control = slider; // サムネイルがスライダーを制御する

// ハンバーガーメニュー
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");


hamburger.addEventListener("click", () => {
  toggleClasses();
});

function toggleClasses() {
  hamburger.classList.toggle("open");
  menu.classList.toggle("open");
}

// setTimeout(toggleClasses, 500);
// setTimeout(toggleClasses, 3000);
