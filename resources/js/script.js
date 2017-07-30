//
// Loading page
//

    var pageLoading = document.querySelector('.pageLoading');
    
    var loadPage = function() {
        pageLoading.style.opacity = 0;
        setTimeout(function() {
           pageLoading.style.display = 'none';
        },1000);
    }
    
    window.addEventListener('load', loadPage);

//var geniusScript = geniusScript || {};

(function() {
    
// check if user use mobile or tablet

  window.isTabletOrMobile = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}
  
  
// turning of bg scroll in mobile iOS
  
    function stopScrolling(bool) {
        if (bool === true) {
            document.body.addEventListener('touchmove', freezeScroll, false);
        } else {
            document.body.removeEventListener('touchmove', freezeScroll, false);
        }
    };

    var freezeScroll = function(e) {
        e.preventDefault();
    }

//adding jQuery IIFE

    $(function(){
    
// disable tab button

    document.addEventListener('keydown', function(e) {
       if (e.keyCode === 9) {
           e.stopPropagation();
           e.preventDefault();
       }
    });
    
// video player- bg
    
    var playPause = document.querySelector('.p-p-icon');
    var videoBg = document.querySelector('video');
    
    var isVideo = true;
    
    function playStopVideo() {
        if(isVideo) {
            videoBg.pause();
            isVideo = false;
            this.classList.remove('ion-pause');
            this.classList.add('ion-play');
        } else {
            videoBg.play();
            isVideo = true;
            this.classList.remove('ion-play');
            this.classList.add('ion-pause');
        }
    }
    
    $('.p-p-icon').click(playStopVideo);
    //playPause.addEventListener('click', playStopVideo);

//
// hamburger
//
    
        var hamBackground = document.querySelector('.bg-hamburger');
        var hamMenu = document.getElementById('ham-menu');
        var socialIcon = document.querySelector('.social-icon');
        var hamburger = document.querySelector('.hamburger');
        var hamNavAnchors = hamMenu.querySelectorAll('li');
        
        var isHamburgerOpen = false;
        var openHamburger = function() {
            if (!isHamburgerOpen) {
                this.classList.add('open');
                hamBackground.classList.add('reveal');
                document.body.classList.add('hamOpen');
                document.body.style.overflowY = 'hidden';
                hamMenu.style.display = 'block';
                socialIcon.style.display = 'block';
                isHamburgerOpen = true;
                stopScrolling(true);
            } else {
                hamburger.classList.remove('open');
                hamBackground.classList.remove('reveal');
                document.body.classList.remove('hamOpen');
                document.body.style.overflowY = 'auto';
                hamMenu.style.display = 'none';
                socialIcon.style.display = 'none';
                navHighlight.style.display = 'none';
                isHamburgerOpen = false;
                stopScrolling(false);
            }
        }
        
        //hamburger.addEventListener('click', openHamburger);
        $('.hamburger').click(openHamburger);
        //hamBackground.addEventListener('click', openHamburger);
        $('.bg-hamburger').click(openHamburger);
//        hamNavAnchors.forEach(function(a) {
//           a.addEventListener('click', openHamburger) 
//        });
        $('#ham-menu li').click(openHamburger);
                                 
    // hover main nav effect
    
        var navLinks = hamMenu.querySelectorAll('li');
        var navHighlight = document.createElement('span');
        navHighlight.classList.add('highlighted');
        document.body.appendChild(navHighlight);

        function highlightElementOn() {

            var link = this.getBoundingClientRect();
            var span = { 
                width: link.width,
                height: link.height,
                top: link.top + scrollY,
                left: link.left + scrollX
            }

            navHighlight.style.width = `15px`;
            navHighlight.style.height = `${span.height}px`;
            navHighlight.style.transform = `translate(${span.left - 20}px, ${span.top}px)`;
            navHighlight.style.display = 'block';
        }
    
        function highlightElementOff() {
            navHighlight.style.display = 'none';
        }
        
//        navLinks.forEach(function(a) {
//            a.addEventListener('mouseenter', highlightElementOn); 
//        });
        $('#ham-menu li').mouseenter(highlightElementOn);     
        //hamMenu.addEventListener('mouseleave', highlightElementOff);
        $('#ham-menu').mouseleave(highlightElementOff);

//
// mail
//

    var inputMail = document.querySelector('input[type=email]');
    var inputText = document.querySelector('textarea[name=mail]');
    var sendButton = document.querySelector('button[name=sendMail]');
    
    var isMail = false;
    var isText = false;

    var validInputMail = function() {
        isMail = true;
        sendButtonOn();
    }

    var validInputText = function() {
        isText = true;
        sendButtonOn();
    }

    var sendButtonOn = function() {
        var t = inputText.value.length;
        var m = inputMail.value.length;
        if (isMail && isText && t>0 && m>0) {
            sendButton.classList.add('active-send');
            sendButton.disabled = false;
        } else {
            sendButton.classList.remove('active-send');
            sendButton.disabled = true;
        }
    }

    //inputMail.addEventListener('input', validInputMail);
       $('input[type=email]').change(validInputMail); 
    //inputText.addEventListener('input', validInputText);
       $('textarea[name=mail]').change(validInputText);     
        
//
// fadeIn effect
//
    
    function fadeInEffect() {
        $('.fade-in').each(function() {
            var self = this;
            fadeInOn = (window.scrollY+window.innerHeight) - self.clientHeight/2;
            var isScroll = fadeInOn > self.offsetTop;
            if(isScroll) {
                self.classList.add('fade-in-active');
            } else {
                self.classList.remove('fade-in-active');
            }
        });
    };

    
    var fadeIn = document.querySelectorAll('.fade-in');
    //window.addEventListener('scroll', fadeInEffect);
    $(window).scroll(fadeInEffect);
    

//      
// STAFF - DETAILS
//

    var btnStaff = document.querySelectorAll('.button-staff');
    var members = document.querySelectorAll('.staff-member');
    var body = document.querySelector('body');
    var sectionStaff = document.querySelector('.section-staff');
    var quit = document.querySelector('.quit');
    var sara = document.querySelector('.sara');
    var rx = document.querySelector('.rx');
    var mails = document.querySelectorAll('.mail');
   
    function openAthleteDetails() {
        hamburger.style.display = 'none';
        quit.style.display = 'block';
        body.style.overflowY = 'hidden';
        this.style.display = 'none';
        parent = this.parentNode;
        
        if (window.innerWidth <= 767 || window.isTabletOrMobile()) { 
           parent.classList.add('staff-member-huge');   
        } else {
            if(parent.dataset.name === 'rx' || parent.dataset.name === 'sara'){
                sara.classList.add('staff-member-huge2');
                rx.classList.add('staff-member-huge2');
            } else {
                parent.classList.add('staff-member-huge');
            }  
        }
        
        var y = (parent.offsetTop - parent.scrollTop + parent.clientTop);
        var ySection = sectionStaff.offsetTop;
        window.scrollTo(0,ySection + y);
        
        athlete = athleteData.find(function(e) {
            return e.name == parent.dataset.name;
        });
        athleteName = parent.children[0].children[0];
        feature = parent.children[0];
        athleteName.innerHTML = `
                        <a href="${athlete.instagramLink}" target="_blank">${athlete.instaName}</a>
                        `;
        var athleteDescription = parent.children[2].children[0];
        athleteDescription.textContent = athlete.about;
        
        var athleteSocial = parent.children[2].children[1];
        
        var athleteFacebook = athleteSocial.children[0];
        athleteFacebook.href = athlete.facebookLink;
        
        var athleteInstagram = athleteSocial.children[1];
        athleteInstagram.href = athlete.instagramLink;
        
        setTimeout(athleteInfoTransform,1000);
        stopScrolling(true);
        } 
        
        //|| window.isTabletOrMobile()
    
    function athleteInfoTransform() {
        if (window.innerWidth <= 767 ) {
            if (parent.dataset.name === 'sara') {
                sara.style.transform = 'translate(100%)';
            }else if (parent.dataset.name === 'rx') {
                rx.style.transform = 'translate(-100%)';
            }else {
                parent.style.transform = 'translateX(-100%)';
            }     
        } else {
            if (parent.dataset.name === 'sara') {
                sara.style.transform = 'translate(100%)';
                rx.style.transform = 'translate(100%)';
            }else if (parent.dataset.name === 'rx') {
                rx.style.transform = 'translate(-100%)';
                sara.style.transform = 'translate(-100%)';
            }else {
                parent.style.transform = 'translateX(-50%)';
                feature.style.left = '51%'; 
            }     
        }   
    }
    
    function closeAthleteDetails() {
        
                
        body.style.overflowY = 'scroll';
        hamburger.style.display = 'block';
        quit.style.display = 'none';
        $('.button-staff').each(function() {
            this.style.display = 'block';
        });
        athleteName.innerHTML = athlete.fullName; 
        parent.style.transform = 'translateX(0)';
        feature.style.left = '20px';
        rx.style.transform = 'translateX(0)';
        sara.style.transform = 'translateX(0)';
//        mail.innerHTML = `<i class="ion-android-mail"></i>`;
        
        setTimeout(function(){
            $('.staff-member').each(function() {
                this.classList.remove('staff-member-huge');
                this.classList.remove('staff-member-huge2');
            });
        }, 1000);
        
        stopScrolling(false);
    }
    
   
    function toggleMail() { 
        mail = this;
        mail.style.fontSize = '100%';
        mail.textContent = athlete.mail;
        
    }
 
    var athleteData = [
        {
            name: 'rich',
            fullName: 'Rich Fronning',
            instaName: '@richfroning',
            instagramLink: 'https://www.instagram.com/richfroning/',
            facebookLink: 'https://www.facebook.com/RichFroning/',
            mail: 'richfronning@genius.pl',
            about: 'Recognizable by the tattoo of Galatians 6:14 scrawled from his left armpit to his hip, Rich Froning Jr. was dubbed the Fittest Man in History after winning four back-to-back individual CrossFit Games championships (2011-2014). Seemingly unbeatable, he also won the worldwide Open for three consecutive years (2012-2014), and when he retired from individual competition after the 2014 season, he captained his affiliate’s team, CrossFit Mayhem Freedom, to two back-to-back Affiliate Cup championships in 2015 and 2016.'
        },
        {
            name: 'dan',
            fullName: 'Dan Bailey',
            instaName: '@dan_bailey9',
            instagramLink: 'https://www.instagram.com/dan_bailey9/',
            facebookLink: 'https://www.facebook.com/OriginalDanBailey/',
            mail: 'danbailey@genius.pl',
            about: 'A former Division-I sprinter at Ohio University, Dan Bailey is a five-year individual CrossFit Games veteran, finishing within striking distance of the podium in each of his Games appearances (his best finish was fourth in 2015). Winner of the 2011 Reebok CrossFit Games worldwide Open and perennial fan favorite, Bailey earned the distinguished Spirit of the Games Award in 2015.'
        },
        {
            name: 'josh',
            fullName: 'Josh Bridges',
            instaName: '@bridgesj3',
            instagramLink: 'https://www.instagram.com/bridgesj3/',
            facebookLink: 'https://www.facebook.com/JoshBridgesCF/',
            mail: 'joshbridges@genius.pl',
            about: 'Known for his Hulk-like victory scream, Josh Bridges is a four-time CrossFit Games veteran and a CrossFit athlete since 2005. A former collegiate wrestler and U.S. Navy Seal, Bridges has won three of the five regional competitions he’s competed in and finished on or near the podium in three out of his four Games appearances, with a career best finish of second in 2011. Though Bridges devastated fans when he failed to qualify for the 2015 Reebok CrossFit Games, he made his comeback in 2016 after retiring from the military, taking a 13th-place finish as the oldest—and at five-foot-five, shortest—individual male at the Games that year. He was 33.'
        },
        {
            name: 'sara',
            fullName: 'sara sigmundsdóttir',
            instaName: '@sarasigmunds',
            instagramLink: 'https://www.instagram.com/sarasigmunds/',
            facebookLink: 'https://www.facebook.com/ragnheidursarasigm/',
            mail: 'sarasigmund@genius.pl',
            about: 'Ragnheiður Sara Sigmundsdottir has competed at the CrossFit Games twice and finished on the podium both times. The Icelandic native first made a name for herself when, after taking third worldwide in the 2015 Open, she won the 2015 Meridian Regional, outperforming several former Games athletes including two-time champion Annie Thorisdottir. Though fans may have wondered if the lead was a fluke, she proved otherwise with a nearly identical performance in 2016, taking fourth in the Open and once again winning the Meridian Regional and finishing third at the Games, taking seven top-five finishes. Known for her buoyant personality and love for pizza, Sigmundsdottir is a trainer at CrossFit Sudurnes in Reykjanesbaer, Iceland.'
        },
        {
            name: 'rx',
            fullName: 'Rx',
            instaName: '@rx_cfgenius',
            instagramLink: 'https://www.instagram.com/rx_cfgenius/',
            facebookLink: 'https://www.instagram.com/rx_cfgenius/',
            mail: 'rxthecfdog@genius.pl',
            about: 'I am RX, known well as Wujaszek or Erynio. I live in crossfit box in Warsaw. I\'m huge fan of whole #teamgenius athletes. I also do some crossfit - love to lick kettebells. My name makes me don\'t scale never! If you wanna shake my hand or just talk come to visit me at Crossfit Genius. You propablly heard that I behave like a human, you know, parties, gossiping, chilling, but would be nice if you bring me some snacks (keep it between us, ok?). See u at my place!' 
        }
    ];
    
//    btnStaff.forEach(function(btn) {
//        btn.addEventListener('click', openAthleteDetails)    
//    });
        $('.button-staff').click(openAthleteDetails);
    //quit.addEventListener('click', closeAthleteDetails);
        $('.quit').on('click', '.quit-name', closeAthleteDetails);
//    mails.forEach(function(m) {
//        m.addEventListener('click', toggleMail)    
//    });
        $('.mail').click(toggleMail);

//
// SCHEDULE HOVER - COACHES  
//
    
    var schedule = document.querySelector('#schedule');
    var colSchedule = schedule.querySelectorAll('.col');

    function daysHoverOn() {
        var self = this;
        contentDay = self.innerHTML;
        elementHeight = self.offsetHeight;
        var coachName = self.dataset.coach;
        self.style.paddingTop = '17px';
        
        if(coachName === 'RX') {
           self.innerHTML = `${coachName}&nbsp<i class="ion-ios-paw"></i>`;
        } else {
           self.innerHTML = coachName;    
        }  
    }
    
     function daysHoverOff() {
        this.style.padding = '5px';
        this.innerHTML = contentDay;
        this.style.height = elementHeight + 'px';
    }
    
    colSchedule.forEach(function(e) {
        var box = e.children[0];
        if (box.className === 'day-schedule' || box.className === 'rest-day') {
           return;
        } else {
            box.addEventListener('mouseenter', daysHoverOn);
            box.addEventListener('mouseleave', daysHoverOff);
        }
    }); 
    
        });

    
    })();



