const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const searchResults = document.querySelector(".search-results"); // 검색어 리스트 요소 선택
const searchContainer = document.querySelector(".search-container"); // search-container 요소 선택

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
  // 검색창이 활성화될 때와 비활성화될 때 search-container의 너비를 조정
  if (search.classList.contains("active")) {
    // 검색창이 활성화될 때, 너비를 늘려줍니다.
    // 여기서는 예시로 90%로 설정했습니다. 실제 사용 시 필요에 맞게 조정하세요.
    searchContainer.style.width = "40%";
    searchContainer.addEventListener(
      "transitionend",
      () => {
        searchResults.style.display = "block";
      },
      { once: true }
    ); // once: true는 이벤트 리스너가 한 번만 실행되도록 합니다.
  } else {
    // 검색창이 비활성화될 때, 너비를 원래 너비로 돌려줍니다.
    // 여기서는 예시로 100%로 설정했습니다. 실제 사용 시 필요에 맞게 조정하세요.
    searchContainer.style.width = "6%";
    searchResults.style.display = "none"; // 검색어 리스트를 숨깁니다.
  }
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    // 엔터 키가 눌렸을 때
    const searchTerm = input.value.trim(); // 검색어 가져오기
    if (searchTerm) {
      // 검색어가 있을 때만 리스트에 추가
      const li = document.createElement("li"); // 새로운 리스트 아이템 요소 생성
      li.textContent = searchTerm; // 검색어 설정
      searchResults.appendChild(li); // 리스트에 추가
      input.value = ""; // 검색창 비우기
    }
  }
});
