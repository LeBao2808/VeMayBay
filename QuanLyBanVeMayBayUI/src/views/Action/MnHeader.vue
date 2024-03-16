<template>
<el-header style="padding: 0;margin-bottom: -15px;">

    <div class="container-fluid bg-primary px-5 d-none d-lg-block">
        <div class="row gx-0">
            <div class="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                <div class="d-inline-flex align-items-center" style="height: 45px;">
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-twitter fw-normal"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-facebook-f fw-normal"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-linkedin-in fw-normal"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-instagram fw-normal"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href=""><i class="fab fa-youtube fw-normal"></i></a>
                </div>
            </div>
            <div class="col-lg-4 text-center text-lg-end">
                <div class="d-inline-flex align-items-center" style="height: 45px;">
                    <a href="#"><small class="me-3 text-light"><i class="fa fa-user me-2"></i>Register</small></a>
                    <a href="#"><small class="me-3 text-light"><i class="fa fa-sign-in-alt me-2"></i>Login</small></a>
                    <div class="dropdown">
                        <a href="#" class="dropdown-toggle text-light" data-bs-toggle="dropdown"><small><i class="fa fa-home me-2"></i> My Dashboard</small></a>
                        <div class="dropdown-menu rounded">
                            <a href="#" class="dropdown-item"><i class="fas fa-user-alt me-2"></i> My Profile</a>
                            <a href="#" class="dropdown-item"><i class="fas fa-comment-alt me-2"></i> Inbox</a>
                            <a href="#" class="dropdown-item"><i class="fas fa-bell me-2"></i> Notifications</a>
                            <a href="#" class="dropdown-item"><i class="fas fa-cog me-2"></i> Account Settings</a>
                            <a href="#" class="dropdown-item"><i class="fas fa-power-off me-2"></i> Log Out</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Topbar End -->
 

  </el-header>

          <!-- Navbar & Hero Start -->
    <div class="container-fluid position-relative p-0">
        <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <a href="" class="navbar-brand p-0">
                <h1 class="m-0"><i class="fa fa-map-marker-alt me-3"></i>Travela</h1>
                <!-- <img src="img/logo.png" alt="Logo"> -->
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0">
                    <a href="index.html" class="nav-item nav-link active">Home</a>
                    <a href="about.html" class="nav-item nav-link">About</a>
                    <a href="services.html" class="nav-item nav-link">Services</a>
                    <a href="packages.html" class="nav-item nav-link">Packages</a>
                    <a href="blog.html" class="nav-item nav-link">Blog</a>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div class="dropdown-menu m-0">
                            <a href="destination.html" class="dropdown-item">Destination</a>
                            <a href="tour.html" class="dropdown-item">Explore Tour</a>
                            <a href="booking.html" class="dropdown-item">Travel Booking</a>
                            <a href="gallery.html" class="dropdown-item">Our Gallery</a>
                            <a href="guides.html" class="dropdown-item">Travel Guides</a>
                            <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                            <a href="404.html" class="dropdown-item">404 Page</a>
                        </div>
                    </div>
                    <a href="contact.html" class="nav-item nav-link">Contact</a>
                </div>
                <a href="" class="btn btn-primary rounded-pill py-2 px-4 ms-lg-4">Book Now</a>
            </div>
        </nav>
    </div>

     <!-- Header Start -->
     <div class="container-fluid bg-breadcrumb">
        <div class="container text-center py-5" style="max-width: 900px;">
            <h3 class="text-white display-3 mb-4">Our Services</h3>
            <ol class="breadcrumb justify-content-center mb-0">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Pages</a></li>
                <li class="breadcrumb-item active text-white">Services</li>
            </ol>    
        </div>
    </div>
</template>

<style scoped>
/*** Button Start ***/
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css');
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@500;600&family=Roboto&display=swap');
@import url('https://use.fontawesome.com/releases/v5.15.4/css/all.css');
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css');
.btn {
    font-weight: 600;
    transition: .5s;
}

.btn-square {
    width: 32px;
    height: 32px;
}

.btn-sm-square {
    width: 34px;
    height: 34px;
}

.btn-md-square {
    width: 44px;
    height: 44px;
}

.btn-lg-square {
    width: 56px;
    height: 56px;
}

.btn-square,
.btn-sm-square,
.btn-md-square,
.btn-lg-square {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: normal;
    border-radius: 50%;
}

.btn.btn-primary {
    box-shadow: inset 0 0 0 0 var(--bs-primary);
}

.btn.btn-primary:hover {
    box-shadow: inset 300px 0 0 0 var(--bs-light) !important;
    color: var(--bs-primary) !important;
}

.btn.btn-light {
    box-shadow: inset 0 0 0 0 var(--bs-primary);
}

.btn.btn-light:hover {
    box-shadow: inset 300px 0 0 0 var(--bs-primary);
    color: var(--bs-light) !important;
}

.btn-hover {
    transition: 0.5s;
}

.btn-hover:hover {
    color: var(--bs-secondary) !important;
}

/*** Section Title Start ***/
.section-title {
    position: relative;
    display: inline-block;
    text-transform: uppercase;
    color: var(--bs-primary);
}

.section-title::before {
    content: "";
    width: 50px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    margin-right: -50px;
    border: 1px solid var(--bs-primary) !important;
}

.section-title::after {
    content: "";
    width: 50px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    margin-left: -50px;
    border: 1px solid var(--bs-primary) !important;
}


/*** Topbar Start ***/
.fixed-top .container {
    transition: 0.5s;
}

.topbar {
    padding: 2px 10px 2px 20px;
    background: var(--bs-primary) !important;
}

.topbar a,
.topbar a i {
    transition: 0.5s;
}

.topbar a:hover,
.topbar a i:hover {
    color: var(--bs-secondary) !important;
}


@media (max-width: 768px) {
    .topbar {
        display: none;    
    }
}
/*** Topbar End ***/


/*** Navbar ***/
.navbar-light .navbar-nav .nav-link {
    font-family: 'Roboto', sans-serif;
    position: relative;
    padding: 35px 15px;
    color: var(--bs-white) !important;
    font-size: 17px;
    font-weight: 400;
    outline: none;
    transition: .5s;
}

.sticky-top.navbar-light .navbar-nav .nav-link {
    padding: 20px 15px;
    color: var(--bs-dark) !important;
}

.navbar-light .navbar-nav .nav-link:hover,
.navbar-light .navbar-nav .nav-link.active {
    color: var(--bs-white) !important;
}

.navbar-light .navbar-brand h1 {
    color: var(--bs-white);
}

.sticky-top.navbar-light .navbar-brand h1 {
    color: var(--bs-primary);
}

.navbar-light .navbar-brand img {
    max-height: 60px;
    transition: .5s;
}

.sticky-top.navbar-light .navbar-brand img {
    max-height: 45px;
}

.navbar .dropdown-toggle::after {
    border: none;
    content: "\f107";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    vertical-align: middle;
    margin-left: 8px;
}

@media (min-width: 1200px) {
    .navbar .nav-item .dropdown-menu {
        display: block;
        visibility: hidden;
        top: 100%;
        transform: rotateX(-75deg);
        transform-origin: 0% 0%;
        border: 0;
        border-radius: 10px;
        transition: .5s;
        opacity: 0;
    }
}

.dropdown .dropdown-menu a:hover {
    background: var(--bs-primary);
    color: var(--bs-white);
}

.navbar .nav-item:hover .dropdown-menu {
    transform: rotateX(0deg);
    visibility: visible;
    background: var(--bs-light);
    transition: .5s;
    opacity: 1;
}

@media (max-width: 991.98px) {
    .sticky-top.navbar-light {
        position: relative;
        background: var(--bs-white);
    }

    .navbar-light .navbar-brand h1 {
        color: var(--bs-primary);
    }

    .navbar.navbar-expand-lg .navbar-toggler {
        padding: 10px 20px;
        border: 1px solid var(--bs-primary);
        color: var(--bs-primary);
    }

    .navbar-light .navbar-collapse {
        margin-top: 15px;
        border-top: 1px solid #DDDDDD;
    }

    .navbar-light .navbar-nav .nav-link,
    .sticky-top.navbar-light .navbar-nav .nav-link {
        padding: 10px 0;
        color: var(--bs-dark) !important;
    }

    .navbar-light .navbar-nav .nav-link:hover,
    .navbar-light .navbar-nav .nav-link.active  {
        color: var(--bs-primary) !important;
    }

    .navbar-light .navbar-brand img {
        max-height: 45px;
    }
}

@media (min-width: 992px) {
    .navbar-light {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
        z-index: 999;
    }
    
    .sticky-top.navbar-light {
        position: fixed;
        background: var(--bs-light);
    }

    .navbar-light .navbar-nav .nav-link::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 0;
        bottom: -1px;
        left: 0;
        background: var(--bs-primary);
        transition: .5s;
        z-index: -1;
    }

    .navbar-light .navbar-nav .nav-link:hover::before,
    .navbar-light .navbar-nav .nav-link.active::before {
        height: calc(100% + 1px);
        left: 1px;
    }

    .navbar-light .navbar-nav .nav-link.nav-contact::before {
        display: none;
    }
}

/*** Carousel Hero Header Start ***/
.carousel-header .carousel-control-prev,
.carousel-header .carousel-control-next {
    background: transparent;
}

.carousel-header .carousel-control-prev .carousel-control-prev-icon {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    padding: 25px 30px;
    border-top-left-radius: 0;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 50px;
    background-size: 60% 60%;
}

.carousel-header .carousel-control-next .carousel-control-next-icon {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    padding: 25px 30px;
    border-top-left-radius: 50px;
    border-top-right-radius: 0;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 0;
    background-size: 60% 60%;

}

.carousel-header .carousel .carousel-indicators li,
.carousel-header .carousel .carousel-indicators li,
.carousel-header .carousel .carousel-indicators li {
    opacity: 0;
}

.carousel-header .carousel-inner .carousel-item {
    position: relative;
    min-height: 100vh 
}

.carousel-header .carousel-inner .carousel-item img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.carousel-header .carousel-inner .carousel-item .carousel-caption  {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding-top: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, 0.5));
    background-size: cover;
}

@media (max-width: 768px) {
    .carousel-header .carousel-inner .carousel-item img,
    .carousel-header .carousel-inner .carousel-item .carousel-caption {
        height: 700px;
        margin-top: -100px;
    }

    .carousel-header {
        height: 700px !important;
    }

    .carousel-header .carousel-control-prev .carousel-control-prev-icon,
    .carousel-header .carousel-control-next .carousel-control-next-icon {
        opacity: 0;
    }
    
    .search-bar {
        margin-top: -100px;
        transition: 0.5s;
    }
}
.bg-breadcrumb {
    background: linear-gradient(rgba(19, 53, 123, 0.5), rgba(19, 53, 123, 0.5)), url(../Home/img/breadcrumb-bg.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    padding: 150px 0 50px 0;
}

.bg-breadcrumb .breadcrumb-item a {
    color: var(--bs-secondary) !important;
}
/*** Carousel Hero Header End ***/
</style>