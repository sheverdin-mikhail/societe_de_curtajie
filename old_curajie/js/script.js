//  document.addEventListener("DOMContentLoaded", function() { });
$(document).ready(function(event) {
//    console.log( "r e a d y" );
//    $('.go-top').click(function(event){window.scrollTo({top:0,behavior:'smooth'})});
    var banner = $('.body-banner'),
        header = $('.banner-header'),
        map = $('.bottom-map iframe')
        offices = document.querySelectorAll('.office'),
        buttons = document.querySelectorAll('.btn-red');
    function changeInfo(k){
        banner.removeClass("zheneva moscow baku almaty kishinev dubai");
        offices.forEach((item) => item.classList.remove('selected-office'));
        let m=String(k);
        switch(m){
            case '1': banner.addClass("zheneva"); header.text('Швейцария'); $('.office.zheneva').addClass("selected-office"); map.attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.366528829824!2d6.144293015785194!3d46.203163191850905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c652eb354401d%3A0x6ccdb0d02e420505!2zUnVlIGR1IE1hcmNow6kgMTgsIDEyMDQgR2Vuw6h2ZSwg0KjQstC10LnRhtCw0YDQuNGP!5e0!3m2!1sru!2sru!4v1640264254786!5m2!1sru!2sru"); break;
            case '2': banner.addClass("moscow"); header.text('Россия'); $('.office.moscow').addClass("selected-office"); map.attr("src", "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8980.827410848478!2d37.5550318!3d55.7549088!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54bd1ba2714cd%3A0x13359c92ea15adc3!2z0JrRgNCw0YHQvdC-0L_RgNC10YHQvdC10L3RgdC60LDRjyDQvdCw0LEuLCAxMiwg0JzQvtGB0LrQstCwLCAxMjM2MTA!5e0!3m2!1sru!2sru!4v1639870749641!5m2!1sru!2sru"); break;
            case '3': banner.addClass("baku"); header.text('Азербайджан'); $('.office.baku').addClass("selected-office"); map.attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d759.9614989078108!2d49.83505582924869!3d40.36793902049959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeeb72129dedbce27!2zNDDCsDIyJzA0LjYiTiA0OcKwNTAnMDguMiJF!5e0!3m2!1sru!2sru!4v1640264934243!5m2!1sru!2sru"); break;
            case '4': banner.addClass("almaty"); header.text('Казахстан'); $('.office.almaty').addClass("selected-office"); map.attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.309466826843!2d76.95547251571325!3d43.24493558675169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836ef0c685bacb%3A0x1e018f051366d273!2z0JPQvtGB0YLQuNC90LjRhtCwINCa0LDQt9Cw0YXRgdGC0LDQvQ!5e0!3m2!1sru!2sru!4v1640265085994!5m2!1sru!2sru"); break;
            case '5': banner.addClass("kishinev"); header.text('Молдова'); $('.office.kishinev').addClass("selected-office"); map.attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2720.294015569914!2d28.835827415805717!3d47.01483353666103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c24554b6911%3A0x25534f22baf3e7f!2zU3RyYWRhIEJ1Y3VyZciZdGkgMTcsIENoaciZaW7Eg3UgMjAwMCwg0JzQvtC70LTQsNCy0LjRjw!5e0!3m2!1sru!2sru!4v1640265165369!5m2!1sru!2sru"); break;
            case '6': banner.addClass("dubai"); header.text('ОАЭ'); $('.office.dubai').addClass("selected-office"); map.attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.282011950193!2d55.1342464666448!3d25.058429028167772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f134ae10f0c45%3A0x5a311cb63c3abf1e!2sJewellery%20%26%20Gemplex%20Building!5e0!3m2!1sru!2sru!4v1640265334876!5m2!1sru!2sru"); break;
        }
    }
    function activeBatton(){
        buttons.forEach((item) => {
        item.classList.remove('selected-btn');
        item.removeAttribute('disabled');
        });
        changeInfo($(this).attr("data-office-info"));
        this.classList.add('selected-btn');
        this.setAttribute('disabled', 'disabled');
//        console.log($(this).attr("data-office-info"));
        }
        buttons.forEach((item) =>
        item.addEventListener('click',activeBatton));



});