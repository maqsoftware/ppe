function getBloggerData(blogUrl, successCallBack, completeCallBack) {
    $.ajax({
        url: blogUrl,
        type: 'GET',
        dataType: 'jsonp',
        success: successCallBack,
        complete: completeCallBack
    });
}

function load_unload_modal(){
    //document.getElementById("load-modal-header").show
   // $('#contact-modal-header').toggleClass("hide");
}