import "./styles.css";

// 対象の要素のliタグを返す
function getIncompleteli(childElement) {
  return childElement.parentNode.parentNode.parentNode;
}

function getTodoName(targetLi) {
  // 対象のTODOｎ名称を取得する
  const incompleteDivListRow = targetLi.getElementsByClassName("list-row")[0];
  return incompleteDivListRow.getElementsByClassName("todo-name")[0].innerText;
}

// <div class="list-row"> を生成する
function createDivListRow(innerText) {
  const divListRow = document.createElement("div");
  divListRow.className = "list-row";
  const todoName = document.createElement("div");
  todoName.className = "todo-name";
  todoName.innerText = innerText;
  divListRow.appendChild(todoName);
  return divListRow;
}

const onClickAdd = (todoName = "") => {
  let inputText = todoName;
  if (inputText.length <= 0) {
    // テキストボックスの値を取得し初期化する
    const addText = document.getElementById("add-text");
    inputText = addText.value;
    addText.value = "";
  }

  // li要素を生成する
  const incompliteLi = document.createElement("li");

  // div class="list-row"を生成
  const divListRow = createDivListRow(inputText);

  //<div class="action-buttons">
  const divActionButtons = document.createElement("div");
  divActionButtons.className = "action-buttons";

  //<button>完了</button>
  const buttonComplete = document.createElement("button");
  buttonComplete.innerText = "完了";
  divActionButtons.appendChild(buttonComplete);
  buttonComplete.addEventListener("click", () =>
    onClickComplete(buttonComplete)
  );

  //<button>削除</button>
  const buttonDelete = document.createElement("button");
  buttonDelete.innerText = "削除";
  buttonDelete.addEventListener("click", () => {
    // #outer要素の親要素を取得
    const parentLi = getIncompleteli(buttonDelete);
    // Ui要素を取得し、該当のli要素を削除
    const incompleteList = document.getElementById("incomplete-list");
    incompleteList.removeChild(parentLi);
  });
  divActionButtons.appendChild(buttonDelete);

  // 生成したdiv要素を、親に追加する
  divListRow.appendChild(divActionButtons);
  incompliteLi.appendChild(divListRow);

  // Ui要素に再生したli要素を追加する
  const incompleteList = document.getElementById("incomplete-list");
  incompleteList.appendChild(incompliteLi);
};

const onClickComplete = (tagetButton) => {
  // 対象のTODOｎ名称を取得する
  const targetIncompleteLi = getIncompleteli(tagetButton);
  const todoName = getTodoName(targetIncompleteLi);
  console.log(todoName);

  // 追加用のli要素を生成する
  const compliteLi = document.createElement("li");

  // div class="list-row"を生成
  const divListRow = createDivListRow(todoName);

  //<div class="action-buttons">
  const divActionButtons = document.createElement("div");
  divActionButtons.className = "action-buttons";

  //<button>完了</button>
  const buttonReset = document.createElement("button");
  buttonReset.innerText = "戻す";
  divActionButtons.appendChild(buttonReset);
  buttonReset.addEventListener("click", () => {
    // #outer要素の親要素を取得
    const parentLi = getIncompleteli(buttonReset);

    const todoName = getTodoName(parentLi);
    console.log(todoName);

    onClickAdd(todoName);

    // Ui要素を取得し、該当のli要素を削除
    const incompleteList = document.getElementById("complete-list");
    incompleteList.removeChild(parentLi);
  });

  // 生成したdiv要素を、親に追加する
  divListRow.appendChild(divActionButtons);
  compliteLi.appendChild(divListRow);

  // Ui要素に再生したli要素を追加する
  const completeList = document.getElementById("complete-list");
  completeList.appendChild(compliteLi);

  // 対象のTODOを未完了から削除する
  const incompleteList = document.getElementById("incomplete-list");
  incompleteList.removeChild(targetIncompleteLi);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
