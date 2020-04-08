document.addEventListener('DOMContentLoaded', () => {
  // Container Width

  const container = document.querySelectorAll('.container');
  container.forEach((container) => {
    container.style.maxWidth = `${document.body.clientWidth - 30}px`;
  });

  // Forms

  const forms = function () {
    const { form } = document.forms;
    const inputName = form.username;
    const inputEmail = form.email;
    const inputUserPhone = form.userphone;
    const inputCompanyName = form.companyname;
    const formError = document.querySelectorAll('.form-error');

    form.addEventListener('submit', (form) => {
      if (inputName.value === '' || inputName.value == null) {
        inputName.nextElementSibling.innerHTML = 'This field is required';
        inputName.style = `
				border-color: #EA2F2F;
				background: #FCD8D8
				`;
      } else if (inputName.value.length > 0) {
        inputName.nextElementSibling.innerHTML = '';
        inputName.style = `
				border-color: #1968B3;
				background: #E7EEFF
				`;
      }
      if (inputEmail.value === '' || inputEmail.value == null) {
        inputEmail.nextElementSibling.innerHTML = 'This field is required';
        inputEmail.style = `
				border-color: #EA2F2F;
				background: #FCD8D8
				`;
      } else if (inputEmail.value.length > 0) {
        inputEmail.nextElementSibling.innerHTML = '';
        inputEmail.style = `
				border-color: #1968B3;
				background: #E7EEFF
				`;
      }
      if (inputUserPhone.value === '' || inputUserPhone.value == null) {
        inputUserPhone.nextElementSibling.innerHTML = 'This field is required';
        inputUserPhone.style = `
				border-color: #EA2F2F;
				background: #FCD8D8
				`;
      } else if (inputUserPhone.value.length > 0) {
        inputUserPhone.nextElementSibling.innerHTML = '';
        inputUserPhone.style = `
				border-color: #1968B3;
				background: #E7EEFF
				`;
      }
      if (inputCompanyName.value === '' || inputCompanyName.value == null) {
        inputCompanyName.nextElementSibling.innerHTML = 'This field is required';
        inputCompanyName.style = `
				border-color: #EA2F2F;
				background: #FCD8D8
				`;
      } else if (inputCompanyName.value.length > 0) {
        inputCompanyName.nextElementSibling.innerHTML = '';
        inputCompanyName.style = `
				border-color: #1968B3;
				background: #E7EEFF
				`;
      }

      formError.forEach((formError) => {
        if (formError.innerHTML.length > 0) {
          form.preventDefault();
        }
      });
    });
  };
  if (document.forms.form) {
    forms();
  }
  // Select Languages

  const select = function () {
    const selectHeader = document.querySelectorAll('.select__header');
    const selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach((item) => {
      item.addEventListener('click', selectToggle);
    });

    selectItem.forEach((item) => {
      item.addEventListener('click', selectChoose);
    });

    function selectToggle() {
      this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
      const text = this.innerText;
      const select = this.closest('.select');
      const currentText = select.querySelector('.select__current');

      const selectBody = this.closest('.select__body');
      div = document.createElement('div'),
      selectBody.append(div);
      selectBody.lastElementChild.classList.add('select__item');
      selectBody.lastElementChild.innerHTML = currentText.innerText;

      currentText.innerText = text;
      this.remove();
      select.classList.remove('is-active');
    }
  };

	select();
	
	// Slider

  const mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,
    spaceBetween: 65,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: newSwiper,
    },
  });

  var newSwiper = new Swiper('.partners__slider-arrows', {
    loop: true,
    slidesPerView: 6,
    spaceBetween: 65,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: mySwiper,
    },
	});
	
	// Advantages Block

	const advantagesRow = document.querySelector('.advantages__row')
	advantagesRow.lastElementChild.firstElementChild.firstElementChild.style=`
	border-right: none; border-bottom: none`
	advantagesRow.lastElementChild.firstElementChild.firstElementChild.nextElementSibling.style=`
	border-right: none; border-bottom: none`
	advantagesRow.lastElementChild.firstElementChild.lastElementChild.style=`
	border-bottom: none`
	const advantagesRowSecond = advantagesRow.nextElementSibling
	advantagesRowSecond.firstElementChild.firstElementChild.firstElementChild.style=`
	border-right: none`
	advantagesRowSecond.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.style=`
	border-right: none`

	// Freight Block

	const freightRow = document.querySelector('.freight__row')
	freightRow.firstElementChild.firstElementChild.style=`
	border-right: none; border-bottom: none`
	freightRow.firstElementChild.firstElementChild.nextElementSibling.style=`
	border-right: none; border-bottom: none`
	freightRow.firstElementChild.lastElementChild.style=`
	border-bottom: none`
	const freightRowSecond = freightRow.nextElementSibling
	freightRowSecond.firstElementChild.firstElementChild.style=`
	border-right: none`
	freightRowSecond.firstElementChild.firstElementChild.nextElementSibling.style=`
	border-right: none`



});
