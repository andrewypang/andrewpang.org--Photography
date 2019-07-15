$(document).ready(function() {

    $('#lightboxModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        console.log(button);

        var path = button.attr('data-photoPath') // Extract info from data-* attributes
        console.log(path);
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this);
        // modal.find('.modal-body img').val(recipient)
        modal.find('.modal-body img').attr('src', path);
    })

});

