// Mengambil elemen form dengan ID "task-form"
const taskForm = document.getElementById("task-form");
// Mengambil elemen dialog konfirmasi penutupan dengan ID "confirm-close-dialog"
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
// Mengambil tombol untuk membuka form dengan ID "open-task-form-btn"
const openTaskFormBtn = document.getElementById("open-task-form-btn");
// Mengambil tombol untuk menutup form dengan ID "close-task-form-btn"
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
// Mengambil tombol untuk menambah atau memperbarui task dengan ID "add-or-update-task-btn"
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
// Mengambil tombol untuk membatalkan penutupan form dalam dialog konfirmasi dengan ID "cancel-btn"
const cancelBtn = document.getElementById("cancel-btn");
// Mengambil tombol untuk membuang perubahan dan menutup form dalam dialog konfirmasi dengan ID "discard-btn"
const discardBtn = document.getElementById("discard-btn");
// Mengambil elemen container yang akan menampung daftar tugas dengan ID "tasks-container"
const tasksContainer = document.getElementById("tasks-container");
// Mengambil input title dari form dengan ID "title-input"
const titleInput = document.getElementById("title-input");
// Mengambil input date dari form dengan ID "date-input"
const dateInput = document.getElementById("date-input");
// Mengambil input description dari form dengan ID "description-input"
const descriptionInput = document.getElementById("description-input");

// Mengambil data dari localStorage, jika ada, dan mengonversinya dari string JSON ke array objek; jika tidak ada, menggunakan array kosong
const taskData = JSON.parse(localStorage.getItem("data")) || [];
// Variabel ini akan menyimpan task yang sedang di-edit atau task baru yang sedang ditambahkan
let currentTask = {};

// Fungsi untuk menambahkan task baru atau memperbarui task yang sudah ada
const addOrUpdateTask = () => {
  // Mencari index dari task yang sedang di-edit di dalam array taskData berdasarkan ID task
  const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);

  // Membuat objek task baru dengan ID yang unik (berdasarkan title dan timestamp), title, date, dan description dari input form
  const taskObj = {
    id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`, // Membuat ID unik dari title dan timestamp
    title: titleInput.value, // Mengambil nilai title dari input form
    date: dateInput.value, // Mengambil nilai date dari input form
    description: descriptionInput.value, // Mengambil nilai description dari input form
  };

  // Jika task baru (belum ada di array taskData)
  if (dataArrIndex === -1) {
    taskData.unshift(taskObj); // Tambahkan task baru di awal array taskData
  } else {
    // Jika task sedang diperbarui (sudah ada di array taskData)
    taskData[dataArrIndex] = taskObj; // Ganti task yang ada dengan task baru
  }

  // Menyimpan taskData ke localStorage setelah task baru ditambahkan atau task lama diperbarui
  localStorage.setItem("data", JSON.stringify(taskData));
  // Memperbarui tampilan daftar task di dalam tasksContainer
  updateTaskContainer();
  // Mereset form dan mengembalikan state ke kondisi awal setelah operasi selesai
  reset();
};

// Fungsi untuk memperbarui tampilan daftar task di dalam tasksContainer
const updateTaskContainer = () => {
  // Mengosongkan isi tasksContainer untuk menampilkan daftar task terbaru
  tasksContainer.innerHTML = "";

  // Looping melalui array taskData dan menambahkan setiap task ke tasksContainer
  taskData.forEach(
    ({ id, title, date, description }) => {
      // Menambahkan elemen HTML untuk setiap task dengan ID, title, date, dan description yang sesuai
      tasksContainer.innerHTML += `
        <div class="task" id="${id}">
          <p><strong>Title:</strong> ${title}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Description:</strong> ${description}</p>
          <button onclick="editTask(this)" type="button" class="btn">Edit</button>
          <button onclick="deleteTask(this)" type="button" class="btn">Delete</button> 
        </div>
      `;
    }
  );
};

// Fungsi untuk menghapus task dari tasksContainer dan taskData
const deleteTask = (buttonEl) => {
  // Mencari index dari task yang akan dihapus di dalam array taskData berdasarkan ID task
  const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id
  );

  // Menghapus elemen HTML task dari tasksContainer
  buttonEl.parentElement.remove();
  // Menghapus task dari array taskData
  taskData.splice(dataArrIndex, 1);
  // Menyimpan kembali taskData ke localStorage setelah task dihapus
  localStorage.setItem("data", JSON.stringify(taskData));
};

// Fungsi untuk mengedit task yang ada di dalam tasksContainer dan taskData
const editTask = (buttonEl) => {
  // Mencari index dari task yang akan diedit di dalam array taskData berdasarkan ID task
  const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id
  );

  // Menyimpan task yang sedang diedit ke dalam currentTask
  currentTask = taskData[dataArrIndex];

  // Mengisi input form dengan data task yang sedang diedit
  titleInput.value = currentTask.title; // Mengisi input title dengan title dari task yang sedang diedit
  dateInput.value = currentTask.date; // Mengisi input date dengan date dari task yang sedang diedit
  descriptionInput.value = currentTask.description; // Mengisi input description dengan description dari task yang sedang diedit

  // Mengubah teks tombol menjadi "Update Task" karena kita sedang dalam mode edit
  addOrUpdateTaskBtn.innerText = "Update Task";

  // Menampilkan form task dengan menghapus atau menambahkan class "hidden"
  taskForm.classList.toggle("hidden");
};

// Fungsi untuk mereset form dan mengembalikan state ke kondisi awal
const reset = () => {
  // Mengubah teks tombol kembali menjadi "Add Task"
  addOrUpdateTaskBtn.innerText = "Add Task";
  // Mengosongkan semua input form
  titleInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
  // Menyembunyikan form task dengan menambahkan class "hidden"
  taskForm.classList.toggle("hidden");
  // Mengosongkan currentTask untuk mempersiapkan input task baru
  currentTask = {};
};

// Memeriksa apakah ada data task di localStorage; jika ada, memperbarui tampilan tasksContainer
if (taskData.length) {
  updateTaskContainer(); // Memperbarui tampilan daftar task
}

// Menambahkan event listener untuk tombol "Open Task Form"
// Saat tombol diklik, form task akan ditampilkan atau disembunyikan
openTaskFormBtn.addEventListener("click", () =>
  taskForm.classList.toggle("hidden")
);

// Menambahkan event listener untuk tombol "Close Task Form"
// Saat tombol diklik, periksa apakah ada perubahan di form, dan tampilkan dialog konfirmasi jika ada
closeTaskFormBtn.addEventListener("click", () => {
  // Memeriksa apakah ada input yang telah diisi di form
  const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value;
  // Memeriksa apakah input yang diisi berbeda dengan data task yang sedang diedit (jika ada)
  const formInputValuesUpdated = titleInput.value !== currentTask.title || dateInput.value !== currentTask.date || descriptionInput.value !== currentTask.description;

  // Jika ada input yang diisi dan berbeda dari task yang sedang diedit, tampilkan dialog konfirmasi
  if (formInputsContainValues && formInputValuesUpdated) {
    confirmCloseDialog.showModal(); // Menampilkan dialog konfirmasi
  } else {
    // Jika tidak ada perubahan atau input yang diisi, reset form
    reset();
  }
});

// Menambahkan event listener untuk tombol "Cancel" di dialog konfirmasi
// Saat tombol "Cancel" diklik, dialog konfirmasi akan ditutup
cancelBtn.addEventListener("click", () => confirmCloseDialog.close());

// Menambahkan event listener untuk tombol "Discard" di dialog konfirmasi
// Saat tombol "Discard" diklik, dialog konfirmasi akan ditutup dan form akan di-reset
discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close(); // Menutup dialog konfirmasi
  reset(); // Mereset form ke kondisi awal
});

// Menambahkan event listener untuk submit form
// Saat form disubmit, fungsi addOrUpdateTask akan dipanggil
taskForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Mencegah form untuk me-reload halaman
  addOrUpdateTask(); // Menambahkan atau memperbarui task
});
