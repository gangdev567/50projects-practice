let panels = document.querySelectorAll(".panel");
console.log("panels: {}", panels);
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    const currentContainer = panel.parentElement;

    // 먼저, 현재 컨테이너에서 모든 패널의 활성화 상태를 제거합니다.
    removeActiveClasses(currentContainer, "active1", "active2");

    const isActive =
      panel.classList.contains("active1") ||
      panel.classList.contains("active2");

    // 클릭된 패널이 이미 활성화 상태가 아니었다면, 활성화 클래스를 추가합니다.
    if (!isActive) {
      if (currentContainer.classList.contains("container1")) {
        panel.classList.add("active1");
      } else if (currentContainer.classList.contains("container2")) {
        panel.classList.add("active2");
      }
    }
  });
});

function removeActiveClasses(container, ...activeClassesToRemove) {
  activeClassesToRemove.forEach((activeClass) => {
    container.querySelectorAll(`.${activeClass}`).forEach((panel) => {
      panel.classList.remove(activeClass);
    });
  });
}
