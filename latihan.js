//soal 1
const SetTimeout = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Halo, saya dari Productzilla");
    }, 3000);
  });
};
SetTimeout()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//Soal 2
const GetData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ nama: "Budi", usia: 25 });
    }, 2000);
  });
};

GetData().then((data) => console.log(data));

//Soal 3
const tunggu = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const ambilData = async () => {
  await tunggu(Math.random() * 2000 + 1000);
  console.log("Data berhasil diambil");
  return (data = "data mentah");
};

const prosesData = async () => {
  await tunggu(Math.random() * 2000 + 1000);
  console.log("Data berhasil diproses");
  return data + "yang telah diproses";
};

const simpanData = async () => {
  await tunggu(Math.random() * 2000 + 1000);
  console.log("Data berhasil disimpan");
  return { sukses: true, pesan: "Data " + data + " telah disimpan" };
};

const jalankanOperasi = async () => {
  try {
    const data = await ambilData();
    const result = await prosesData(data);
    const save = await simpanData(result);
    console.log(save);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
};

jalankanOperasi();
