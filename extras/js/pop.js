$(document).ready(function() {

    $('#lightboxModal').on('show.bs.modal', function (event) {
        var photo = $(event.relatedTarget) // Button that triggered the modal
        var paths = photo.data('photopath');

        // Clear Carousel - both indicators and inner
        var carouselIndicators = document.getElementById("carousel-indicators");
        while (carouselIndicators.hasChildNodes()) {  
            carouselIndicators.removeChild(carouselIndicators.firstChild);
        }

        var carouselInner = document.getElementById("carousel-inner");
        while (carouselInner.hasChildNodes()) {  
            carouselInner.removeChild(carouselInner.firstChild);
        }

        var counter = 0;
        if(paths){
            paths.split(',').forEach(function(pathForPhoto) {

                // CREATE THE CAROUSEL INDICATORS
                // <li data-target="#modal-carousel" data-slide-to="0" class="active"></li>
                var newCaroIndi = document.createElement('li');
                newCaroIndi.setAttribute("data-target", "#modal-carousel");
                newCaroIndi.setAttribute("data-slide-to", counter.toString());
                counter = counter + 1;

                carouselIndicators.appendChild(newCaroIndi);


                // CREATE THE CAROUSEL ITEM
                var newCaroItem = document.createElement('div');
                newCaroItem.className = 'carousel-item';
                
                var newImg = document.createElement('img');
                newImg.src = pathForPhoto;
                newImg.className = 'd-block w-100';

                newCaroItem.appendChild(newImg);

                document.getElementById('carousel-inner').appendChild(newCaroItem);
            });

            // First child get additional "active" class
            carouselIndicators.firstChild.className = carouselIndicators.firstChild.className + " active";
            carouselInner.firstChild.className = carouselInner.firstChild.className + " active";

            // If it is a single photo instead of a collage
            if(counter == "1") {
                carouselIndicators.style.display = "none";
                document.getElementsByClassName('carousel-control-prev')[0].style.display = "none";
                document.getElementsByClassName('carousel-control-next')[0].style.display = "none";
            }
            else{
                carouselIndicators.style.display = "flex";
                document.getElementsByClassName('carousel-control-prev')[0].style.display = "flex";
                document.getElementsByClassName('carousel-control-next')[0].style.display = "flex";
            }

        }
    })
});