function $(el) {
	return el.charAt(0) === "#"
		? document.querySelector(el)
		: document.querySelectorAll(el);
}

// mengambil input dari user
const inputUser = $("#input-todo");
const btnSubmit = $("#btn-input");

btnSubmit.addEventListener("click", (e) => {
	e.preventDefault();
	addList();
	inputUser.value = "";
});

// menambahkan list baru
const addList = () => {
	const valueInput = inputUser.value;
	const newList = `<li class="list">
        <span>${valueInput}</span>
        <div id="button">
            <button class = "btn btn-success">Selesai</button>
            <button class = "btn btn-delete">Hapus</button>
        </div>
    </li>`;
	const ul = $("#list-todo");
	ul.insertAdjacentHTML("afterbegin", newList);

	correctList();
	removeList();
};

// menghapus list
const removeList = () => {
	const button = $("#button");
	const btnDelete = button.querySelector(".btn-delete");

	btnDelete.addEventListener("click", () => {
		button.parentElement.remove();
	});
};

// menyelesaikan list
const correctList = () => {
	const button = $("#button");
	const btnSuccess = button.querySelector(".btn-success");
	const text = $("span")[0];

	btnSuccess.addEventListener("click", () => {
		text.classList.toggle("success");
		text.classList.contains("success")
			? (btnSuccess.innerHTML = "Belum Selesai")
			: (btnSuccess.innerHTML = "Selesai");
	});
};
