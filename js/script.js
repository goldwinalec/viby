$('.opportunities__items').slick(
    {
        dots: true,
        infinite: false,
        prevArrow: `          <button type="button" class="slick-prev">
            <svg
              width="16"
              height="26"
              viewBox="0 0 16 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.7344 0.51706L0.560296 11.7517C-0.186766 12.4411 -0.186766 13.5589 0.560296 14.2483L12.7344 25.4829C13.4814 26.1724 14.6926 26.1724 15.4397 25.4829C16.1868 24.7935 16.1868 23.6758 15.4397 22.9864L4.61832 13L15.4397 3.01365C16.1868 2.32423 16.1868 1.20647 15.4397 0.51706C14.6926 -0.172353 13.4814 -0.172353 12.7344 0.51706Z"
                fill="white"
              />
            </svg>
          </button>`,
          nextArrow: `          <button type="button" class="slick-next">
            <svg
              width="16"
              height="26"
              viewBox="0 0 16 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.26564 0.51706L15.4397 11.7517C16.1868 12.4411 16.1868 13.5589 15.4397 14.2483L3.26564 25.4829C2.51858 26.1724 1.30736 26.1724 0.560296 25.4829C-0.186765 24.7935 -0.186765 23.6758 0.560296 22.9864L11.3817 13L0.560296 3.01365C-0.186765 2.32423 -0.186765 1.20647 0.560296 0.51706C1.30736 -0.172353 2.51858 -0.172353 3.26564 0.51706Z"
                fill="white"
              />
            </svg>
          </button>`
    }
);

$('.opportunities__item-text').shorten({
	moreText: 'Читать далее',
    lessText:'',
    showChars: 350
});
