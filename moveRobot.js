         	//globle variables 
            var imgObj = null;//the object of the image
            var animate ;// animation factor
            var is_start = true;//flag for the status of the image
            var bodyRect;//the body rect
            var elemRect;//element rect - image rect
            
            //initialization function for the window to start with
            function init(){
               //get image object and set it up
               imgObj = document.getElementById('myImage');
               imgObj.style.position= 'relative'; 
               imgObj.style.left = '0px'; 
               //get the rect of boby
               bodyRect = document.body.getBoundingClientRect();
            }
            
            //main function for onclick listening
            function clickEvent(){
				//check status and decide on what to do
            	if(is_start){
                	//if it is on start trigger
                    //change the value of the input as Stop and moveRight
                    document.getElementById("button").value = "Stop";
                	moveRight();
                    is_start = false;//after the moveRight is stopped, is_start is set false
                }else{
                	//if it is on stop trigger
                    //change the value of the input as Start and stop the movement
                    document.getElementById("button").value = "Start";
                	stop();
                    is_start = true;
                }
            }
            
            /**keep moving right and checking the distance of the current image location and the rightmost baby position
            **/
            function moveRight(){
            	//get the current image Rect
            	elemRect = imgObj.getBoundingClientRect();
    			var offset = elemRect.right - bodyRect.right;// check how far the image to the rightmost of boby in pixel
				if(offset >= 0){
                // if the right side of image is located above the body
                	//set the image to leftmost
                	imgObj.style.left = '0px'; 
                }
               	imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
                //add iteration: keep moveRight operating every 20 msecs
               	animate = setTimeout(moveRight,20); // call moveRight in 20msec  
            }
            
            function stop(){
            	// stop the Timeout
               clearTimeout(animate);
            }
            
            window.onload =init;
         