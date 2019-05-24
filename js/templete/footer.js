function footer() {
  var html = "";
    html += '<footer class="bg-light py-5">';
    html += '<div class="container">';
    html += '<div class="small text-center text-muted">〒338-8570 埼玉県さいたま市桜区下大久保225 埼玉大学 理学部 物理学科 佐藤・谷口研究室</div>';
    html += '<div class="small text-center text-muted">(C)Copylight Satoh-Taniguchi Lab. 2019 All Rights Reserved..</div>';
    html += '</div>';
    html += '</footer>';

    // <!-- Bootstrap core JavaScript -->
    html += '<script src="vendor/jquery/jquery.min.js"></script>';
    html += '<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>';

    // <!-- Plugin JavaScript -->
    html += '<script src="vendor/jquery-easing/jquery.easing.min.js"></script>';
    html += '<script src="vendor/magnific-popup/jquery.magnific-popup.min.js"></script>';

    // <!-- Custom scripts for this template -->
    // html += '<script src="js/creative.min.js"></script>';
    html += '<script src="js/creative.js"></script>';


    // <!-- lightgallery plugins -->
    html += '<script src="js/lightgallery.min.js"></script>';
    html += '<script src="js/lg-thumbnail.min.js"></script>';
    html += '<script src="js/lg-fullscreen.min.js"></script>';

    html += '</body>';
    html += '</html>';
  document.write(html);
}