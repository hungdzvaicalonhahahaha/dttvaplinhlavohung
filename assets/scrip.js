function tellFortune() {
  const name1 = document.getElementById("name1").value.trim();
  const name2 = document.getElementById("name2").value.trim();
  const result = document.getElementById("result");

  if (!name1 && !name2) {
    result.textContent = "Hãy nhập ít nhất một cái tên nhé 💞";
    return;
  }

  // Nếu nhập 2 tên -> bói theo "độ hợp"
  if (name1 && name2) {
    const total = (name1 + name2)
      .split("")
      .reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
    const percent = (total % 51) + 50; // từ 50–100%
    const msgList = [
      "Định mệnh thật sự! Hai bạn sinh ra là để gặp nhau 💖",
      "Tình cảm khá hòa hợp, hãy trân trọng nhau nhé 🌸",
      "Có chút khác biệt, nhưng nếu thấu hiểu thì rất bền 💫",
      "Cần thêm chút quan tâm để gắn kết hơn 💌",
      "Có duyên gặp gỡ, còn giữ được lâu dài hay không là ở hai bạn 💞",
    ];
    const msg = msgList[total % msgList.length];
    result.innerHTML = `
      💕 Độ hợp nhau: <b>${percent}%</b><br>${msg}
    `;
    return;
  }

  // Nếu chỉ nhập 1 tên -> bói vui ngẫu nhiên
  const singleMsg = [
    "Bạn là người có duyên ngầm, nhiều người để ý mà chưa nhận ra 💘",
    "Một mối tình mới sắp đến, hãy mở lòng nhé 🌷",
    "Tình yêu đôi khi đến từ người bạn không ngờ 💫",
    "Cứ sống thật với cảm xúc, người ấy sẽ đến 🕊️",
    "Hôm nay là ngày tốt để nhắn tin cho crush đó 😉",
  ];
  const rand = Math.floor(Math.random() * singleMsg.length);
  result.textContent = singleMsg[rand];
}
