$(function(){
$('.hamburger').on('click',function(){
    $('.hamburger').toggleClass("open");
    $('#menu-sp').slideToggle();
    });
});