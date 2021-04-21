<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $form_errors = array();
    $form_errors['user_name'] = 0;
    $form_errors['user_email'] = 0;
    $form_errors['pass1'] = 0;
    $form_errors['pass2'] = 0;
    $thank_you;

    // name validation - emptines

    if (isset($_POST['user_name'])) {
        if ($_POST['user_name'] =='') {
            $form_errors['user_name'] = 1;
        }
    }
// email validation - emptines 

    if (isset($_POST['user_email'])) {
        if ($_POST['user_email'] =='') {
            $form_errors['user_email'] = 1;
        }
    }

// pasword validation emptines and matching

    if (isset($_POST['pass1'])) {
        if ($_POST['pass1'] =='') {
            $form_errors['pass1'] = 1;
        }else{ 
            if ($_POST['pass1'] !== $_POST['pass2']) {
                $form_errors['pass1'] = 2;
            }
        }
    }
// pasword validation emptines and matching
    if (isset($_POST['pass2'])) {
        if ($_POST['pass2'] =='') {
            $form_errors['pass2'] = 1;
        }else{ 
            if ($_POST['pass1'] !== $_POST['pass2']) {
                $form_errors['pass2'] = 2;
            }
        }
    }

    // email validation - email structure
$valid = false; 
    if (array_sum($form_errors) == 0) {
        $valid = 'info'; 

        $thank_you =  "<p>Thank You. Message Sent, we will get in touch witch you soon on your email: ".$_POST['user_email']." </p>";
    }else{
        $valid = 'danger'; 

        $thank_you =  "<p>Something went wrong, please check the form fields. </p>";
    }
    
}



 include 'header.php';

echo  '<div class="container mt-3"> <div class="row"><div class=" alert alert-'.$valid.'" role="alert"> '. $thank_you .'</div></div> </div>  ';

 include 'footer.php';

?>