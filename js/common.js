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

function Sendmail() {
    var str = $('#tml-content form').serialize().replace(/&/g, '%0D%0A').replace(/=/g, ': ');
    var url = 'mailto:Sales@MAQSoftware.com?subject= Inquiry&body=' + str
    document.location.href = url
}

function SendmailContact() {
    var str = $('#contact-form').serialize().replace(/&/g, '%0D%0A').replace(/=/g, ': ');
    var url = 'mailto:Sales@MAQSoftware.com?subject= Inquiry&body=' + str
    document.location.href = url
}