// // // 테스트 시작 누르면 얼굴 인식 페이지로 이동
// // let contMain = document.querySelector(".cont-main");
// // // let StartBtn = document.querySelector(".btn-start");
// // let fileuploadimage = document.querySelector(".file-upload");
// // let cont = document.querySelector(".cont");
// // let cover = document.querySelector(".cover");
// // let imgslide = document.querySelector(".img-slide");

// // testStartBtn.addEventListener("click", function(){
// //     contMain.style.display = "none";
// //     cover.style.display = "block";
// //     cont.style.display = "inline-block";
// // });
// fileuploadimage.addEventListener("change", function () {
//   // contMain.style.display = "none";
//   // cover.style.display = "block";
//   imgslide.style.display = "none";
//   // StartBtn.style.display = "inline-block";
//   cont.style.display = "inline-block";
// });
// // 메인화면 - 이미지 슬라이드
// const imgSlideItems = document.querySelectorAll(".img-slide-item");
// let firstItem = imgSlideItems[0];

// function imageSlide() {
//   let currentItem;
//   for (let i = 0; i < imgSlideItems.length; i++) {
//     if (imgSlideItems[i].classList.contains("active")) {
//       currentItem = imgSlideItems[i];
//       break;
//     }
//   }
//   //const currentItem = document.querySelector(".img-slide-item.active");
//   if (currentItem) {
//     currentItem.classList.remove("active");
//     let next = currentItem.nextElementSibling;
//     if (next) {
//       next.classList.add("active");
//     } else {
//       firstItem.classList.add("active");
//     }
//   } else {
//     firstItem.classList.add("active");
//   }
// }

// setInterval(imageSlide, 200);

// const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
// const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl))

// 카카오 공유

function shareMessage() {
  Kakao.Share.sendCustom({
    templateId: 95830,
    templateArgs: {
    title : $('meta[property="og:title"]').attr('content'),
     // title: 'ABCD',
     // description: '1234.',
    description: $('meta[property="og:description"]').attr('content'),
    image: $('meta[property="og:image"]').attr('content'),
    },
  });
}

//업로드 이미지 가져오기
// var faceImage = document.getElementById('face-image'); // 이미지 요소 선택
// var faceImageSrc = faceImage.getAttribute('src'); // 이미지 요소의 src 속성 값을 가져옴
// var imageElement = document.getElementById('face-image-ch');
//     imageElement.src = faceImageSrc;

