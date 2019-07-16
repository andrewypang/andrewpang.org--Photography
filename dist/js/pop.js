$(document).ready(function() {

    $('#lightboxModal').on('show.bs.modal', function (event) {
        var photo = $(event.relatedTarget) // Button that triggered the modal
        console.log(photo);

        var paths = photo.data('photopath');
        console.log(paths);

        if(paths){
            paths.split(',').forEach(function(pathForPhoto) {

                var newCaroItem = document.createElement('div');
                newCaroItem.className = 'carousel-item active';
                
                var newImg = document.createElement('img');
                newImg.src = pathForPhoto;
                newImg.className = 'd-block w-100';

                newCaroItem.appendChild(newImg);

                document.getElementById('carousel-inner').appendChild(newCaroItem);
                // $('carousel-inner').appendChild(newCaroItem);

            });

            // $(modal-carousel > carousel-inner):first-child.addClass('active');

        }
        //var path = photo.attr('data-photoPath') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        // var modal = $(this);
        // modal.find('.modal-body img').attr('src', path);
    })
});

