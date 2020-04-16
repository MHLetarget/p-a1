document.addEventListener('DOMContentLoaded', () => {

	const { clientWidth } = document.body;

	// Mobile menu
	const mobileMenu = document.querySelector('.mobile-menu')
	const mobileMenuBtn = document.querySelector('.mobile-menu__btn')
	let menuOpen = false;
	mobileMenuBtn.addEventListener('click', () => {
		if(!menuOpen){
			mobileMenuBtn.classList.add('mobile-menu__btn--open')
			mobileMenu.classList.add('mobile-menu--open')
			mobileMenuBtn.innerText = 'Close'
			document.body.style='overflow-y: hidden'
			menuOpen = true
		} else {
			mobileMenuBtn.classList.remove('mobile-menu__btn--open')
			mobileMenu.classList.remove('mobile-menu--open')
			mobileMenuBtn.innerText = 'Menu'
			document.body.style='overflow-y: auto'
			menuOpen = false
		}
	})


	// Mobile buttons
	if (clientWidth < 768){
		const circleTTFPulse = document.querySelectorAll('.circle-btn__ttf-pulse')
		circleTTFPulse.forEach(circleTTFPulse => {
			circleTTFPulse.r.baseVal.valueAsString = 28
			circleTTFPulse.cy.baseVal.valueAsString = 30
			circleTTFPulse.cx.baseVal.valueAsString = 30
		})
		const circleLogin = document.querySelectorAll('.circle__btn-login')
		circleLogin.forEach(circleLogin => {
			circleLogin.r.baseVal.valueAsString = 9
			circleLogin.cy.baseVal.valueAsString = 10
			circleLogin.cx.baseVal.valueAsString = 10
		})
		const circleTTF = document.querySelectorAll('.circle__btn-ttf')
		circleTTF.forEach(circleTTF => {
			circleTTF.r.baseVal.valueAsString = 9
			circleTTF.cy.baseVal.valueAsString = 10
			circleTTF.cx.baseVal.valueAsString = 10
		})
		
	}
	
	

  // Container Width
  const container = document.querySelectorAll('.container');
  container.forEach((container) => {
    if (clientWidth >= 768) {
      container.style.maxWidth = `${clientWidth - 30}px`;
    }	else {
      container.style.maxWidth = `${clientWidth}px`;
    }
  });

  // Width columns
  const adapt = document.querySelector('.adapt');
	if(adapt){
		const adaptRow = adapt.lastElementChild.lastElementChild;
		if (clientWidth >= 1366) {
			adaptRow.firstElementChild.classList.add('col-md-4');
			adaptRow.firstElementChild.classList.remove('col-md-5');
			adaptRow.firstElementChild.classList.remove('col-12');
		} else if (clientWidth < 768) {
			adaptRow.firstElementChild.classList.add('col-12');
			adaptRow.firstElementChild.classList.remove('col-md-4');
			adaptRow.firstElementChild.classList.remove('col-md-5');
		}	else {
			adaptRow.firstElementChild.classList.add('col-md-5');
			adaptRow.firstElementChild.classList.remove('col-md-4');
			adaptRow.firstElementChild.classList.remove('col-12');
		}
	}
  

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

  // Home Slider
  const homeSlider = document.querySelector('.partners__slider');
  if (homeSlider) {

      const homeSlider = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 65,
        thumbs: {
          swiper: addHomeSlider,
				},
				breakpoints: {
					768: {
							slidesPerView: 6,
					}
				}
			});
			
			var addHomeSlider = new Swiper('.partners__slider-arrows', {
				loop: true,
				slidesPerView: 2,
				spaceBetween: 65,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				thumbs: {
					swiper: homeSlider,
				},
				breakpoints: {
					768: {
							slidesPerView: 6,
					}
				}
			});
    }

  // Advantages Block
	const advantagesRow = document.querySelector('.advantages__row');
	if (advantagesRow) {
		if (clientWidth >= 768) {
			advantagesRow.lastElementChild.firstElementChild.firstElementChild.style = `
			border-right: none; border-bottom: none`;
			advantagesRow.lastElementChild.firstElementChild.firstElementChild.nextElementSibling.style = `
			border-right: none; border-bottom: none`;
			advantagesRow.lastElementChild.firstElementChild.lastElementChild.style = `
			border-bottom: none`;
			const advantagesRowSecond = advantagesRow.nextElementSibling;
			advantagesRowSecond.firstElementChild.firstElementChild.firstElementChild.style = `
			border-right: none`;
			advantagesRowSecond.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.style = `
			border-right: none`;
		}
	}



  // Freight Block
	const freightRow = document.querySelector('.freight__row');
	if (freightRow) {
		if (clientWidth >= 768) {
			freightRow.firstElementChild.firstElementChild.style = `
			border-right: none; border-bottom: none`;
			freightRow.firstElementChild.firstElementChild.nextElementSibling.style = `
			border-right: none; border-bottom: none`;
			freightRow.firstElementChild.lastElementChild.style = `
			border-bottom: none`;
			const freightRowSecond = freightRow.nextElementSibling;
			freightRowSecond.firstElementChild.firstElementChild.style = `
			border-right: none`;
			freightRowSecond.firstElementChild.firstElementChild.nextElementSibling.style = `
			border-right: none`;
		}
	}

});
