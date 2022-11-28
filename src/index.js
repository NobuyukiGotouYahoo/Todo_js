import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し初期化する
  alert("go");
  const addText = document.getElementById("add-text");
  const inputText = addText.value;
  addText.value = "";

  // li要素を生成する
  const incompliteLi = document.createElement("li");

  // div class="list-row"を生成
  const divListRow = document.createElement("div");
  divListRow.className = "list-row";

  //<p class="title">TEXTの入力内容</p>
  const pInputText = document.createElement("p");
  pInputText.innerText = inputText;
  divListRow.appendChild(pInputText);

  //<div class="action-buttons">
  const divActionButtons = document.createElement("div");
  divActionButtons.className = "action-buttons";

  //<button>完了</button><button>削除</button>
  const buttunComplete = document.createElement("button");
  buttunComplete.innerText = "完了";
  divActionButtons.appendChild(buttunComplete);
  const buttunDelete = document.createElement("button");
  buttunDelete.innerText = "削除";
  divActionButtons.appendChild(buttunDelete);

  // 生成したdiv要素を、親に追加する
  divListRow.appendChild(divActionButtons);
  incompliteLi.appendChild(divListRow);
  console.log(incompliteLi);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
