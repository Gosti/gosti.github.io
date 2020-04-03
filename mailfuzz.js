document.addEventListener("DOMContentLoaded", () => {
  setTimeout(
    () =>
      (document.querySelector("#nope").innerHTML = decodeURIComponent(
        escape(
          window.atob(
            "PHNwYW4+cGllPC9zcGFuPnJyZS48c3Bhbj5hdmlzc2U8L3NwYW4+PHNwYW4+LmltcG9ydGFudDwvc3Bhbj5APHNwYW4+Z21haTwvc3Bhbj5sLmNvbQo="
          )
        )
      )),
    100
  );
});
