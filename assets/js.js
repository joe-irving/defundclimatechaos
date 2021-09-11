---
---
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;

var header = document.querySelector('.Chaos-Header');
var main = document.querySelector('main');
var navbarHeight = header.offsetHeight;

window.onscroll = function(event){
    didScroll = true;
};

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled()
{
    var scrollPos = -main.getBoundingClientRect().top;

    if (Math.abs(lastScrollTop - scrollPos) <= delta)
        return;

    if (scrollPos > lastScrollTop)
    {
        if (scrollPos > navbarHeight)
        {
            header.classList.add("nav-hide");
            header.classList.remove("nav-visible");
        }
    } else
    {
        header.classList.remove("nav-hide");
        header.classList.add("nav-visible");
    }

    lastScrollTop = scrollPos;
}


{% if site.counter %}
// Counter

// Set the date we're counting down to
var countDownDate = new Date({{ site.counter | date: '%s' }}000).getTime();

function updateTime(countDownDate,counterClass){
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  $(`.${counterClass}`).html(`${days}d ${hours}h ${minutes}m ${seconds}s`);
}
// Update counter on page load
$( document ).ready(function(){
  updateTime(countDownDate,"Chaos-Counter");
});
// Update the count down every 1 second
var x = setInterval(function(){
  updateTime(countDownDate,"Chaos-Counter");
}, 1000);

{% endif %}
