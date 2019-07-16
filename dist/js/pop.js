$(document).ready(function() {

    $('#lightboxModal').on('show.bs.modal', function (event) {
        var photo = $(event.relatedTarget) // Button that triggered the modal
        console.log(photo);

        var paths = photo.data('photopath');
        console.log(paths);

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

                carouselIndicators.appendChild(newCaroIndi);


                // CREATE THE CAROUSEL ITEM
                // First child get additional "active" class

                var newCaroItem = document.createElement('div');
                newCaroItem.className = 'carousel-item active';
                
                var newImg = document.createElement('img');
                newImg.src = pathForPhoto;
                newImg.className = 'd-block w-100';

                newCaroItem.appendChild(newImg);



                document.getElementById('carousel-inner').appendChild(newCaroItem);
                // $('carousel-inner').appendChild(newCaroItem);

            });

            // First child get additional "active" class
            carouselIndicators.firstChild.className = carouselIndicators.firstChild.className + " active";
            carouselInner.firstChild.className = carouselInner.firstChild.className + " active";

            // $(modal-carousel > carousel-inner):first-child.addClass('active');

        }
        //var path = photo.attr('data-photoPath') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        // var modal = $(this);
        // modal.find('.modal-body img').attr('src', path);
    })
});

