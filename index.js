const addImage = (keyword, index) => {
  const imgEle = document.createElement('img');
  imgEle.src = `https://source.unsplach.com/400x225/?${keyword}&sig=${index}`; //กำหมดเวลาดึงให้้เอาแต่ละ index จะได้รูปไม่ซ้ำกัน

  const galleryEle = document.querySelector(".gallery");
  galleryEle.appendChild(imgEle); //กำหนดว้่าให้เป็นลูกของ imgEle
};

const deleteImg = () => {
    const galleryEle = document.querySelector('.gallery')
    galleryEle.innerHTML = '';
}

const searchPhotos = (e) => {
    const keyword = e.target.value;
    if (e.key === 'Enter' && keyword) {
        deleteImg(); //กำหนดให้ delete photo เมื่้่อกด Enter ก่อนที่จะแสดงผลลัพธ์ชุดใหม่

        for (let i = 1; i <= 12; i++) {
            addImage(keyword, i);
          }}
    }

const run = () => {
  const inputEle = document.querySelector('input');
  inputEle.addEventListener('keydown', searchPhotos)
};

run();
