// pricing section

(function(){
    
    $(function(){
        $('.pricing_box').on('tap', activePricingBox);  
    });
    
    var pricingBox = document.querySelectorAll('.pricing_box');
    var priceNormal = document.querySelector('.price_amount');
    var priceStudent = document.querySelector('.price_amount_2');
    var priceDescription = document.querySelector('.price_description');

    function activePricingBox() {
         
        var id = this.dataset.id;
        var activeDataItem = getDataById(id);
        
        if (window.innerWidth <= 767 || window.isTabletOrMobile()) {
                        
            if (activeDataItem.isOpen) {
                this.nextElementSibling.remove();
                activeDataItem.isOpen = false;
            } else {
                
                var li = document.createElement('li');
                li.classList.add('row', 'mobile-pricing-details');
               li.innerHTML = 'hahaha'; 
                   //`
//                    <div class="row">
//                        <span class="price"><span class="price_amount">vvv</span>zl <span class="price_option">  /normal</span></span>
//                        <span class="price"><span class="price_amount_2">ccc</span>zl <span class="price_option">  /student</span></span>
//                    </div>
//                            
//                    <div class="row">
//                        <p class="price_description">
//                            xxx
//                        </p>
//                    </div>
//                `  
                this.after(li);
                activeDataItem.isOpen = true;
            }
                                
        } else {
            
            priceNormal.textContent = activeDataItem.price;
            priceStudent.textContent = activeDataItem.price2;
            priceDescription.textContent = activeDataItem.description;
        }
            pricingBox.forEach(function(box) {
                box.classList.remove('active')    
            });
            pricingBox.forEach(function(box) {
                box.classList.add('no-active')    
            });
            this.classList.add('active');
            
    }
    
    
    
    
    function getDataById(id){ 
		for(var i=0; i < data.length; i++) { 
            if (data[i].id === id) {
                return data[i];
            }
        }
	}

    var data = [
		{
            isOpen: false,
			id: 'open_12',
			price: '700 ',
			price2: '550 ',
			description: 'Karnet wazny 12 tygodni od zakupu. Upowaznia do udzialu we wszytskih zajeciach dosteppnych w grafiku z wylaczeniem grupy On Ramp.'
		},
		{
            isOpen: false,
			id: 'open_24',
			price: '2500 ',
			price2: '2000 ',
			description: 'Karnet wazny rok od zakupu. Upowaznia do udzialu we wszytskih zajeciach dosteppnych w grafiku z wylaczeniem grupy On Ramp.'
		},
		{
            isOpen: false,
			id: '10_wejsc',
			price: '300 ',
			price2: '250 ',
			description: 'Karnet ważny 12 tygodni. Upowaznia do udzialu we wszytskih zajeciach dosteppnych w grafiku z wylaczeniem grupy On Ramp.'
		},
		{
            isOpen: false,
			id: '1_wejscie',
			price: '40',
			price2: '40 ',
			description: 'Wejście jednorazowe upoważnia do udziały we wszystkich zajęciach dostępnych w grafiku z wyłaczeniem grupy On Ramp'
		},
		{
            isOpen: false,
			id: 'on_ramp',
			price: ' 50 ',
			price2: ' 50 ',
			description: 'Wejscie On Ramp to 120 min szkolenie wprowadzające w swiat Crossfitu. Idealne dla osób poczatkujacych. '
		},
		{
            isOpen: true,
			id: 'open',
			price: '250 ',
			price2: '200 ',
			description: 'Karnet wazny 28 dni od zakupu. Upowaznia do udzialu we wszytskih zajeciach dosteppnych w grafiku z wylaczeniem grupy On Ramp.'
		}		
	];
    
//    pricingBox.forEach(function(b) {
//        b.addEventListener('touchstart', activePricingBox)    
//    });
       
})();

