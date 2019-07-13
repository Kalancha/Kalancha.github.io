(function () {

var rotateY = 0,
		  rotateX = 0;
		  rotateZ = 0;
		  MrotateY = 0;
		  MrotateZ = 0;
		  MrotateX = 0;
		  BlChasrotateZ = 0;
		  SRChasrotateZ = 0;
		  DlChasrotateZ = 0;
		  p = 0;
		  o=0;
		  a=0;
		   j = 0;
		  k=0;
		  l=0;

	document.onkeydown = function (e) {
			   
	if (e.keyCode === 81) BlChasrotateZ +=10
	else if (e.keyCode === 87)  rotateX += 10
	else if (e.keyCode === 69)  rotateZ += 10
	 else if (e.keyCode === 80)  p += 90
	 else if (e.keyCode === 79)  o += 90
	 else if (e.keyCode === 73)  a += 90
	 else if (e.keyCode === 75)  k += 6
	 else if (e.keyCode === 76)  l += 6

	 else if (e.keyCode === 74)  j += 6




 document.querySelector('.ultracube').style.transform =
      'rotateY(' +  BlChasrotateZ + 'deg)'+
      'rotateX(' + rotateX + 'deg)'+
      'rotateZ(' + rotateZ + 'deg)';
    


for (var i = 0; i <3; i++) {
	  document.querySelectorAll('.Mrightup')[i].style.transform =
      'rotateX(' +  p + 'deg)';

       document.querySelectorAll('.centup')[i].style.transform =
       'rotateX(' +  p + 'deg)';
       document.querySelectorAll('.Mleftup')[i].style.transform =
       'rotateX(' +  p + 'deg)';

   }

   for (var i = 0; i <3; i++) {
	  document.querySelectorAll('.Mrightcent')[i].style.transform =
      'rotateX(' +  o + 'deg)';

       document.querySelectorAll('.centcent')[i].style.transform =
       'rotateX(' +  o + 'deg)';
       document.querySelectorAll('.Mleftcent')[i].style.transform =
       'rotateX(' +  o + 'deg)';

   }
   for (var i = 0; i <3; i++) {
	  document.querySelectorAll('.Mrightbot')[i].style.transform =
      'rotateX(' +  a + 'deg)';

       document.querySelectorAll('.centbot')[i].style.transform =
       'rotateX(' +  a + 'deg)';
       document.querySelectorAll('.Mleftbot')[i].style.transform =
       'rotateX(' + a  + 'deg)';

   }


       for (var i = 0; i <3; i++) {
	  document.querySelectorAll('.Mrightup')[i].style.transform =
      'rotateY(' +  j + 'deg)';
  

       document.querySelectorAll('.Mrightcent')[i].style.transform =
       'rotateY(' +  j + 'deg)';
       document.querySelectorAll('.Mrightbot')[i].style.transform =
       'rotateY(' +  j + 'deg)';
     

   }
   

   
   for (var i = 0; i <3; i++) {
	  document.querySelectorAll('.centup')[i].style.transform =
      'rotateY(' +  k + 'deg)';

       document.querySelectorAll('.centcent')[i].style.transform =
       'rotateY(' +  k+'deg)';
       document.querySelectorAll('.centbot')[i].style.transform =
       'rotateY(' +  k + 'deg)';

   }
   for (var i = 0; i <3; i++) {
	  document.querySelectorAll('.Mleftbot')[i].style.transform =
      'rotateY(' +  l + 'deg)';

       document.querySelectorAll('.Mleftup')[i].style.transform =
       'rotateY(' +  l + 'deg)';
       document.querySelectorAll('.Mleftcent')[i].style.transform =
       'rotateY(' + l  + 'deg)';

   } 
   



   










        



     

     
     
    
    }


    
   
			  
		


})();