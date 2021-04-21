<footer>    
  <div class="container-fluid p-5"> 
    <div class="row">  
        <div class="col">  

        <form id="registration_form" action="register.php" method="POST" >
        <div class="card w-100   p-3">
            <h4 class="w-100 pb-3">Registration Form</h4>
            <div class="d-flex flex-row"> 
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="user_name">Name*</label>
                  <input type="text" name="user_name" class="form-control" id="user_name" aria-describedby="user_name" required>
                </div>
                <div class="form-group ">
                  <label for="InputEmail1">Email address*</label>
                  <input type="email" class="form-control" id="user_email" name="user_email" aria-describedby="unique-id-here" >
                  <!-- <span class="error" id="unique-id-here">This field is required</span> -->
                  
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="InputPassword1">Password*</label>
                  <input type="password" class="form-control" name="pass1" id="pass1" required>
                </div>
                <div class="form-group ">
                  <label for="InputPassword2">Confirm Password*</label>
                  <input type="password" class="form-control" name="pass2" id="pass2" required>
                </div>
              </div>
             
              </div>

              <div class="col-12 col-md-12">
                <div class="float-right mt-3">
                  <button id="form_submit" type="submit" class="btn btn-primary mt-n2 ml-5 ">Submit</button>
                </div>
             </div>
            </div>
        </form>
        </div> 
    </div>
  </div>
</footer>

<script src="./assets//dist/bundle.js" > </script>
</body>
</html>