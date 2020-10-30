document.addEventListener('DOMContentLoaded', function(){
	// khai báo một số đối tượng cần sử dụng
	var nut = document.querySelectorAll('.chuyenslide ul li');
	var slides = document.querySelectorAll(".cacslide ul li");	
	var thoigian = setInterval(function(){AutoSlide();},4000);
	for (var i = 0; i < nut.length; i++) {
		// bắt sự kiện click cho từng nút
		nut[i].addEventListener('click', function(){
			// hủy tự động chuyển
			clearInterval(thoigian);
			// bỏ tất cả các màu đen
			for (var i = 0; i < nut.length; i++) {
				nut[i].classList.remove('kichhoat');
			}
			this.classList.add('kichhoat');
			// hết phần xử lý chuyển màu cho nút

			// xu ly phan tính vị trí

			// lay ra nut dang click
			var nutkichhoat = this;	
			var vitrinut = 0 ;
			// ham previousElementSibling trả về phần tử đứng trước nó
			// gán nutkichhoat bằng vị trí trước nó 
			// khi nào null -> thoát vòng lặp được số vị trí đang đứng
			for ( vitrinut = 0; nutkichhoat = nutkichhoat.previousElementSibling; vitrinut++) {}
			// het vong lap vitrinut = nut dang click
			//console.log(vitrinut);

			//b1 : cho tat ca cac slide an di -> remove class active
			for (var i = 0; i < slides.length; i++) {
				slides[i].classList.remove("active");
			}
			slides[vitrinut].classList.add("active");
		})
	} // hết xử lý sự kiện cho nút	
	// xử lý tự động chuyển slide
	function AutoSlide(){		
		// b1: xem slide nào đang hiển thị
		var vitrislide = 0;
		var slideHienTai = document.querySelector('.cacslide ul li.active');
		// lấy ra vị trí slide đang đứng
		for (vitrislide = 0; slideHienTai = slideHienTai.previousElementSibling ; vitrislide++) {}	
		if(vitrislide < (slides.length - 1)) { // nếu chưa đến slide cuối thì vẫn chạy bt
			// ẩn hết các slide
			for (var i = 0; i < slides.length; i++) {
				slides[i].classList.remove('active');
				nut[i].classList.remove('kichhoat');
			}
			// cho hiển thị slide đang chọn
			slides[vitrislide].nextElementSibling.classList.add('active');
			nut[vitrislide].nextElementSibling.classList.add('kichhoat');
		}else{ // slide đến cuối thì cho quay lại hiển thị slide đầu tiền
			for (var i = 0; i < slides.length; i++) {
			slides[i].classList.remove('active');
			nut[i].classList.remove('kichhoat');
			}
			// cho hiển thị slide đang chọn
			slides[0].classList.add('active');
			nut[0].classList.add('kichhoat');	
		}		
		console.log("slide dang o vi tri " + vitrislide);
	};
})