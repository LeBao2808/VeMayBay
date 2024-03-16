<template>
       <!-- <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div> -->
        <!-- Spinner End -->

        <!-- Topbar Start -->
        <!-- <img src="./img/carousel-3.jpg" class="img-fluid" alt="Image"> -->
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

        <!-- Navbar & Hero Start -->
        <div class="container-fluid position-relative p-0" style="background-color: #13357B;">
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

            <!-- Carousel Start -->
            <div class="carousel-header">
                <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-bs-target="#carouselId" data-bs-slide-to="0" class="active"></li>
                        <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                            <img src="./img/carousel-2.jpg" class="img-fluid" alt="Image">
                            <div class="carousel-caption">
                                <div class="p-3" style="max-width: 900px;">
                                    <h4 class="text-white text-uppercase fw-bold mb-4" style="letter-spacing: 3px;">Explore The World</h4>
                                    <h1 class="display-2 text-capitalize text-white mb-4">Let's The World Together!</h1>
                                    <p class="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    </p>
                                    <div class="d-flex align-items-center justify-content-center">
                                        <a class="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5" href="#">Discover Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="./img/carousel-1.jpg" class="img-fluid" alt="Image">
                            <div class="carousel-caption">
                                <div class="p-3" style="max-width: 900px;">
                                    <h4 class="text-white text-uppercase fw-bold mb-4" style="letter-spacing: 3px;">Explore The World</h4>
                                    <h1 class="display-2 text-capitalize text-white mb-4">Find Your Perfect Tour At Travel</h1>
                                    <p class="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    </p>
                                    <div class="d-flex align-items-center justify-content-center">
                                        <a class="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5" href="#">Discover Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="./img/carousel-3.jpg" class="img-fluid" alt="Image">
                            <div class="carousel-caption">
                                <div class="p-3" style="max-width: 900px;">
                                    <h4 class="text-white text-uppercase fw-bold mb-4" style="letter-spacing: 3px;">Explore The World</h4>
                                    <h1 class="display-2 text-capitalize text-white mb-4">You Like To Go?</h1>
                                    <p class="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    </p>
                                    <div class="d-flex align-items-center justify-content-center">
                                        <a class="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5" href="#">Discover Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon btn bg-primary" aria-hidden="false"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                        <span class="carousel-control-next-icon btn bg-primary" aria-hidden="false"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <!-- Carousel End -->
        </div>
        <div class="container-fluid search-bar position-relative" style="top: -50%; transform: translateY(-50%);">
            <div class="container">
                <div class="position-relative rounded-pill w-100 mx-auto p-5" style="background: rgba(19, 53, 123, 0.8);">
                    <!-- <input class="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Eg: Thailand">
                    <button type="button" class="btn btn-primary rounded-pill py-2 px-4 position-absolute me-2" style="top: 50%; right: 46px; transform: translateY(-50%);">Search</button> -->
                    <form class="flight-form">
    <!-- <select v-model="Flightdata.startingPoint" id="flightFrom" class="flight-select" >
        <option value="" disabled selected hidden>Chuyến bay xuất phát</option>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Hồ Chí Minh">Hồ Chí Minh</option>
        <option value="Danang">Đà Nẵng</option> -->
        <select v-model="selectedStartingPoint" id="flightFrom" class="flight-select">
      <option value="" disabled selected hidden>Chuyến bay xuất phát</option>
      <option v-for="point in startingPointsd" :value="point.startingPoint">{{ point.startingPoint }}</option>
    </select>
    <input type="button" @click="swapData" class="btn fa-solid fa-right-left" value="Swap">
    
    <select  v-model="selectedEndingPoint" id="flightTo" class="flight-select">
        <option value="" disabled selected hidden>Chuyến bay đến nơi</option>
        <option v-for="point in startingPointsd" :value="point.endingPoint">{{ point.endingPoint }}</option>
        <!-- Thêm các tùy chọn khác nếu cần -->
    </select>
    <input type="date" id="flightDate" class="flight-select">
    <button type="button" @click="search()" class="btn">Search</button>
</form>
                </div>
            </div>
        </div>
        <!-- Navbar & Hero End -->

        <!-- About Start -->
        <div class="container-fluid about py-5">
            <div class="container py-5">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-5">
                        <div class="h-100" style="border: 50px solid; border-color: transparent #13357B transparent #13357B;">
                            <img src="./img/about-img.jpg" class="img-fluid w-100 h-100" alt="">
                        </div>
                    </div>
                    <div class="col-lg-7" style="background: linear-gradient(rgba(255, 255, 255, .8), rgba(255, 255, 255, .8)), url(img/about-img-1.png);">
                        <h5 class="section-about-title pe-3">About Us</h5>
                        <h1 class="mb-4">Welcome to <span class="text-primary">Travela</span></h1>
                        <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, dolorum, doloribus sunt dicta, officia voluptatibus libero necessitatibus natus impedit quam ullam assumenda? Id atque iste consectetur. Commodi odit ab saepe!</p>
                        <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos voluptatem suscipit neque enim, doloribus ipsum rem eos distinctio, dignissimos nisi saepe nulla? Libero numquam perferendis provident placeat molestiae quia?</p>
                        <div class="row gy-2 gx-4 mb-4">
                            <div class="col-sm-6">
                                <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>First Class Flights</p>
                            </div>
                            <div class="col-sm-6">
                                <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Handpicked Hotels</p>
                            </div>
                            <div class="col-sm-6">
                                <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>5 Star Accommodations</p>
                            </div>
                            <div class="col-sm-6">
                                <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Latest Model Vehicles</p>
                            </div>
                            <div class="col-sm-6">
                                <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>150 Premium City Tours</p>
                            </div>
                            <div class="col-sm-6">
                                <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>24/7 Service</p>
                            </div>
                        </div>
                        <a class="btn btn-primary rounded-pill py-3 px-5 mt-2" href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- About End -->

        <!-- Services Start -->
        <div class="container-fluid bg-light service py-5">
            <div class="container py-5">
                <div class="mx-auto text-center mb-5" style="max-width: 900px;">
                    <h5 class="section-title px-3">Searvices</h5>
                    <h1 class="mb-0">Our Services</h1>
                </div>
                <div class="row g-4">
                    <div class="col-lg-6">
                        <div class="row g-4">
                            <div class="col-12">
                                <div class="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                                    <div class="service-content text-end">
                                        <h5 class="mb-4">WorldWide Tours</h5>
                                        <p class="mb-0">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.
                                        </p>
                                    </div>
                                    <div class="service-icon p-4">
                                        <i class="fa fa-globe fa-4x text-primary"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="service-content-inner d-flex align-items-center  bg-white border border-primary rounded p-4 pe-0">
                                    <div class="service-content text-end">
                                        <h5 class="mb-4">Hotel Reservation</h5>
                                        <p class="mb-0">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.
                                        </p>
                                    </div>
                                    <div class="service-icon p-4">
                                        <i class="fa fa-hotel fa-4x text-primary"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                                    <div class="service-content text-end">
                                        <h5 class="mb-4">Travel Guides</h5>
                                        <p class="mb-0">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.
                                        </p>
                                    </div>
                                    <div class="service-icon p-4">
                                        <i class="fa fa-user fa-4x text-primary"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                                    <div class="service-content text-end">
                                        <h5 class="mb-4">Event Management</h5>
                                        <p class="mb-0">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.
                                        </p>
                                    </div>
                                    <div class="service-icon p-4">
                                        <i class="fa fa-cog fa-4x text-primary"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="row g-4">
                            <div class="col-12">
                                <div class="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                                    <div class="service-icon p-4">
                                        <i class="fa fa-globe fa-4x text-primary"></i>
                                    </div>
                                    <div class="service-content">
                                        <h5 class="mb-4">WorldWide Tours</h5>
                                        <p class="mb-0">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                                    <div class="service-icon p-4">
                                        <i class="fa fa-hotel fa-4x text-primary"></i>
                                    </div>
                                    <div class="service-content">
                                        <h5 class="mb-4">Hotel Reservation</h5>
                                        <p class="mb-0">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                                    <div class="service-icon p-4">
                                        <i class="fa fa-user fa-4x text-primary"></i>
                                    </div>
                                    <div class="service-content">
                                        <h5 class="mb-4">Travel Guides</h5>
                                        <p class="mb-0">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                                    <div class="service-icon p-4">
                                        <i class="fa fa-cog fa-4x text-primary"></i>
                                    </div>
                                    <div class="service-content">
                                        <h5 class="mb-4">Event Management</h5>
                                        <p class="mb-0">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="text-center">
                            <a class="btn btn-primary rounded-pill py-3 px-5 mt-2" href="">Service More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Services End -->

        <!-- Destination Start -->
        <div class="container-fluid destination py-5">
            <div class="container py-5">
                <div class="mx-auto text-center mb-5" style="max-width: 900px;">
                    <h5 class="section-title px-3">Destination</h5>
                    <h1 class="mb-0">Popular Destination</h1>
                </div>
                <div class="tab-class text-center">
                    <ul class="nav nav-pills d-inline-flex justify-content-center mb-5">
                        <li class="nav-item">
                            <a class="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" href="#tab-1">
                                <span class="text-dark" style="width: 150px;">All</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="d-flex py-2 mx-3 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-2">
                                <span class="text-dark" style="width: 150px;">USA</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-3">
                                <span class="text-dark" style="width: 150px;">Canada</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-4">
                                <span class="text-dark" style="width: 150px;">Europe</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-5">
                                <span class="text-dark" style="width: 150px;">China</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-6">
                                <span class="text-dark" style="width: 150px;">Singapore</span>
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div id="tab-1" class="tab-pane fade show p-0 active">
                            <div class="row g-4">
                                <div class="col-xl-8">
                                    <div class="row g-4">
                                        <div class="col-lg-6">
                                            <div class="destination-img">
                                                <img class="img-fluid rounded w-100" src="./img/destination-1.jpg" alt="">
                                                <div class="destination-overlay p-4">
                                                    <a href="#" class="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                    <h4 class="text-white mb-2 mt-3">New York City</h4>
                                                    <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                                </div>
                                                <div class="search-icon">
                                                    <a href="./img/destination-1.jpg" data-lightbox="destination-1"><i class="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="destination-img">
                                                <img class="img-fluid rounded w-100" src="./img/destination-2.jpg" alt="">
                                                <div class="destination-overlay p-4">
                                                    <a href="#" class="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                    <h4 class="text-white mb-2 mt-3">Las vegas</h4>
                                                    <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                                </div>
                                                <div class="search-icon">
                                                    <a href="./img/destination-2.jpg" data-lightbox="destination-2"><i class="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="destination-img">
                                                <img class="img-fluid rounded w-100" src="./img/destination-7.jpg" alt="">
                                                <div class="destination-overlay p-4">
                                                    <a href="#" class="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                    <h4 class="text-white mb-2 mt-3">Los angelas</h4>
                                                    <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                                </div>
                                                <div class="search-icon">
                                                    <a href="./img/destination-7.jpg" data-lightbox="destination-7"><i class="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="destination-img">
                                                <img class="img-fluid rounded w-100" src="./img/destination-8.jpg" alt="">
                                                <div class="destination-overlay p-4">
                                                    <a href="#" class="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                    <h4 class="text-white mb-2 mt-3">Los angelas</h4>
                                                    <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                                </div>
                                                <div class="search-icon">
                                                    <a href="./img/destination-8.jpg" data-lightbox="destination-8"><i class="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4">
                                    <div class="destination-img h-100">
                                        <img class="img-fluid rounded w-100 h-100" src="./img/destination-9.jpg" style="object-fit: cover; min-height: 300px;" alt="">
                                        <div class="destination-overlay p-4">
                                            <a href="#" class="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                            <h4 class="text-white mb-2 mt-3">San francisco</h4>
                                            <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                        <div class="search-icon">
                                            <a href="./img/destination-9.jpg" data-lightbox="destination-4"><i class="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="destination-img">
                                        <img class="img-fluid rounded w-100" src="./img/destination-4.jpg" alt="">
                                        <div class="destination-overlay p-4">
                                            <a href="#" class="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                            <h4 class="text-white mb-2 mt-3">Los angelas</h4>
                                            <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                        <div class="search-icon">
                                            <a href="./img/destination-4.jpg" data-lightbox="destination-4"><i class="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="destination-img">
                                        <img class="img-fluid rounded w-100" src="./img/destination-5.jpg" alt="">
                                        <div class="destination-overlay p-4">
                                            <a href="#" class="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                            <h4 class="text-white mb-2 mt-3">Los angelas</h4>
                                            <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                        <div class="search-icon">
                                            <a href="./img/destination-5.jpg" data-lightbox="destination-5"><i class="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="destination-img">
                                        <img class="img-fluid rounded w-100" src="./img/destination-6.jpg" alt="">
                                        <div class="destination-overlay p-4">
                                            <a href="#" class="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                            <h4 class="text-white mb-2 mt-3">Los angelas</h4>
                                            <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                        <div class="search-icon">
                                            <a href="./img/destination-6.jpg" data-lightbox="destination-6"><i class="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-2" class="tab-pane fade show p-0">
                            <div class="row g-4">
                                <div class="col-lg-6">
                                    <div class="destination-img">
                                        <img class="img-fluid rounded w-100" src="./img/destination-5.jpg" alt="">
                                        <div class="destination-overlay p-4">
                                            <a href="#" class="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                            <h4 class="text-white mb-2 mt-3">San francisco</h4>
                                            <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                        <div class="search-icon">
                                            <a href="./img/destination-5.jpg" data-lightbox="destination-5"><i class="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="destination-img">
                                        <img class="img-fluid rounded w-100" src="./img/destination-6.jpg" alt="">
                                        <div class="destination-overlay p-4">
                                            <a href="#" class="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                            <h4 class="text-white mb-2 mt-3">San francisco</h4>
                                            <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                        <div class="search-icon">
                                            <a href="./img/destination-6.jpg" data-lightbox="destination-6"><i class="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-3" class="tab-pane fade show p-0">
                            <div class="row g-4">
                                <div class="col-lg-6">
                                    <div class="destination-img">
                                        <img class="img-fluid rounded w-100" src="./img/destination-5.jpg" alt="">
                                        <div class="destination-overlay p-4">
                                            <a href="#" class="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                            <h4 class="text-white mb-2 mt-3">San francisco</h4>
                                            <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                        <div class="search-icon">
                                            <a href="./img/destination-5.jpg" data-lightbox="destination-5"><i class="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="destination-img">
                                        <img class="img-fluid rounded w-100" src="./img/destination-6.jpg" alt="">
                                        <div class="destination-overlay p-4">
                                            <a href="#" class="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                            <h4 class="text-white mb-2 mt-3">San francisco</h4>
                                            <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                        <div class="search-icon">
                                            <a href="./img/destination-6.jpg" data-lightbox="destination-6"><i class="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-4" class="tab-pane fade show p-0">
                            <div class="row g-4">
                                <div class="col-lg-6">
                                    <div class="destination-img">
                                        <img class="img-fluid rounded w-100" src="./img/destination-5.jpg" alt="">
                                        <div class="destination-overlay p-4">
                                            <a href="#" class="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                            <h4 class="text-white mb-2 mt-3">San francisco</h4>
                                            <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                        <div class="search-icon">
                                            <a href="./img/destination-5.jpg" data-lightbox="destination-5"><i class="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="destination-img">
                                        <img class="img-fluid rounded w-100" src="./img/destination-6.jpg" alt="">
                                        <div class="destination-overlay p-4">
                                            <a href="#" class="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                            <h4 class="text-white mb-2 mt-3">San francisco</h4>
                                            <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                        <div class="search-icon">
                                            <a href="./img/destination-6.jpg" data-lightbox="destination-6"><i class="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-5" class="tab-pane fade show p-0">
                            <div class="row g-4">
                                <div class="col-lg-6">
                                    <div class="destination-img">
                                        <img class="img-fluid rounded w-100" src="./img/destination-5.jpg" alt="">
                                        <div class="destination-overlay p-4">
                                            <a href="#" class="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                            <h4 class="text-white mb-2 mt-3">San francisco</h4>
                                            <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                        <div class="search-icon">
                                            <a href="./img/destination-5.jpg" data-lightbox="destination-5"><i class="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="destination-img">
                                        <img class="img-fluid rounded w-100" src="./img/destination-6.jpg" alt="">
                                        <div class="destination-overlay p-4">
                                            <a href="#" class="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                            <h4 class="text-white mb-2 mt-3">San francisco</h4>
                                            <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                        <div class="search-icon">
                                            <a href="./img/destination-6.jpg" data-lightbox="destination-6"><i class="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-6" class="tab-pane fade show p-0">
                            <div class="row g-4">
                                <div class="col-lg-6">
                                    <div class="destination-img">
                                        <img class="img-fluid rounded w-100" src="./img/destination-5.jpg" alt="">
                                        <div class="destination-overlay p-4">
                                            <a href="#" class="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                            <h4 class="text-white mb-2 mt-3">San francisco</h4>
                                            <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                        <div class="search-icon">
                                            <a href="./img/destination-5.jpg" data-lightbox="destination-5"><i class="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="destination-img">
                                        <img class="img-fluid rounded w-100" src="./img/destination-6.jpg" alt="">
                                        <div class="destination-overlay p-4">
                                            <a href="#" class="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                            <h4 class="text-white mb-2 mt-3">San francisco</h4>
                                            <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                        <div class="search-icon">
                                            <a href="./img/destination-6.jpg" data-lightbox="destination-6"><i class="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Destination End -->

        <!-- Explore Tour Start -->
        <div class="container-fluid ExploreTour py-5">
            <div class="container py-5">
                <div class="mx-auto text-center mb-5" style="max-width: 900px;">
                    <h5 class="section-title px-3">Explore Tour</h5>
                    <h1 class="mb-4">The World</h1>
                    <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi.
                    </p>
                </div>
                <div class="tab-class text-center">
                    <ul class="nav nav-pills d-inline-flex justify-content-center mb-5">
                        <li class="nav-item">
                            <a class="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" href="#NationalTab-1">
                                <span class="text-dark" style="width: 250px;">National Tour Category</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="d-flex py-2 mx-3 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#InternationalTab-2">
                                <span class="text-dark" style="width: 250px;">International tour Category</span>
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div id="NationalTab-1" class="tab-pane fade show p-0 active">
                            <div class="row g-4">
                                <div class="col-md-6 col-lg-4">
                                    <div class="national-item">
                                        <img src="./img/explore-tour-1.jpg" class="img-fluid w-100 rounded" alt="Image">
                                        <div class="national-content">
                                            <div class="national-info">
                                                <h5 class="text-white text-uppercase mb-2">Weekend Tour</h5>
                                                <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                            </div>
                                        </div>
                                        <div class="national-plus-icon">
                                            <a href="#" class="my-auto"><i class="fas fa-link fa-2x text-white"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="national-item">
                                        <img src="./img/explore-tour-2.jpg" class="img-fluid w-100 rounded" alt="Image">
                                        <div class="national-content">
                                            <div class="national-info">
                                                <h5 class="text-white text-uppercase mb-2">Holiday Tour</h5>
                                                <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                            </div>
                                        </div>
                                        <div class="national-plus-icon">
                                            <a href="#" class="my-auto"><i class="fas fa-link fa-2x text-white"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="national-item">
                                        <img src="./img/explore-tour-3.jpg" class="img-fluid w-100 rounded" alt="Image">
                                        <div class="national-content">
                                            <div class="national-info">
                                                <h5 class="text-white text-uppercase mb-2">Road Trip</h5>
                                                <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                            </div>
                                        </div>
                                        <div class="tour-offer bg-info">15% Off</div>
                                        <div class="national-plus-icon">
                                            <a href="#" class="my-auto"><i class="fas fa-link fa-2x text-white"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="national-item">
                                        <img src="./img/explore-tour-4.jpg" class="img-fluid w-100 rounded" alt="Image">
                                        <div class="national-content">
                                            <div class="national-info">
                                                <h5 class="text-white text-uppercase mb-2">Historical Trip</h5>
                                                <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                            </div>
                                        </div>
                                        <div class="national-plus-icon">
                                            <a href="#" class="my-auto"><i class="fas fa-link fa-2x text-white"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="national-item">
                                        <img src="./img/explore-tour-5.jpg" class="img-fluid w-100 rounded" alt="Image">
                                        <div class="national-content">
                                            <div class="national-info">
                                                <h5 class="text-white text-uppercase mb-2">Family Tour</h5>
                                                <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                            </div>
                                        </div>
                                        <div class="tour-offer bg-warning">50% Off</div>
                                        <div class="national-plus-icon">
                                            <a href="#" class="my-auto"><i class="fas fa-link fa-2x text-white"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="national-item">
                                        <img src="./img/explore-tour-6.jpg" class="img-fluid w-100 rounded" alt="Image">
                                        <div class="national-content">
                                            <div class="national-info">
                                                <h5 class="text-white text-uppercase mb-2">Beach Tour</h5>
                                                <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                            </div>
                                        </div>
                                        <div class="national-plus-icon">
                                            <a href="#" class="my-auto"><i class="fas fa-link fa-2x text-white"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="InternationalTab-2" class="tab-pane fade show p-0">
                            <div class="InternationalTour-carousel owl-carousel">
                                <div class="international-item">
                                    <img src="./img/explore-tour-1.jpg" class="img-fluid w-100 rounded" alt="Image">
                                    <div class="international-content">
                                        <div class="international-info">
                                            <h5 class="text-white text-uppercase mb-2">Australia</h5>
                                            <a href="#" class="btn-hover text-white me-4"><i class="fas fa-map-marker-alt me-1"></i> 8 Cities</a>
                                            <a href="#" class="btn-hover text-white"><i class="fa fa-eye ms-2"></i> <span>143+ Tour Places</span></a>
                                        </div>
                                    </div>
                                    <div class="tour-offer bg-success">30% Off</div>
                                    <div class="international-plus-icon">
                                        <a href="#" class="my-auto"><i class="fas fa-link fa-2x text-white"></i></a>
                                    </div>
                                </div>
                                <div class="international-item">
                                    <img src="./img/explore-tour-2.jpg" class="img-fluid w-100 rounded" alt="Image">
                                    <div class="international-content">
                                        <div class="international-info">
                                            <h5 class="text-white text-uppercase mb-2">Germany</h5>
                                            <a href="#" class="btn-hover text-white me-4"><i class="fas fa-map-marker-alt me-1"></i> 12 Cities</a>
                                            <a href="#" class="btn-hover text-white"><i class="fa fa-eye ms-2"></i> <span>21+ Tour Places</span></a>
                                        </div>
                                    </div>
                                    <div class="international-plus-icon">
                                        <a href="#" class="my-auto"><i class="fas fa-link fa-2x text-white"></i></a>
                                    </div>
                                </div>
                                <div class="international-item">
                                    <img src="./img/explore-tour-3.jpg" class="img-fluid w-100 rounded" alt="Image">
                                    <div class="international-content">
                                        <div class="tour-offer bg-warning">45% Off</div>
                                        <div class="international-info">
                                            <h5 class="text-white text-uppercase mb-2">Spain</h5>
                                            <a href="#" class="btn-hover text-white me-4"><i class="fas fa-map-marker-alt me-1"></i> 9 Cities</a>
                                            <a href="#" class="btn-hover text-white"><i class="fa fa-eye ms-2"></i> <span>133+ Tour Places</span></a>
                                        </div>
                                    </div>
                                    <div class="international-plus-icon">
                                        <a href="#" class="my-auto"><i class="fas fa-link fa-2x text-white"></i></a>
                                    </div>
                                </div>
                                <div class="international-item">
                                    <img src="./img/explore-tour-4.jpg" class="img-fluid w-100 rounded" alt="Image">
                                    <div class="international-content">
                                        <div class="international-info">
                                            <h5 class="text-white text-uppercase mb-2">Japan</h5>
                                            <a href="#" class="btn-hover text-white me-4"><i class="fas fa-map-marker-alt me-1"></i> 8 Cities</a>
                                            <a href="#" class="btn-hover text-white"><i class="fa fa-eye ms-2"></i> <span>137+ Tour Places</span></a>
                                        </div>
                                    </div>
                                    <div class="international-plus-icon">
                                        <a href="#" class="my-auto"><i class="fas fa-link fa-2x text-white"></i></a>
                                    </div>
                                </div>
                                <div class="international-item">
                                    <img src="./img/explore-tour-5.jpg" class="img-fluid w-100 rounded" alt="Image">
                                    <div class="international-content">
                                        <div class="tour-offer bg-info">70% Off</div>
                                        <div class="international-info">
                                            <h5 class="text-white text-uppercase mb-2">London</h5>
                                            <a href="#" class="btn-hover text-white me-4"><i class="fas fa-map-marker-alt me-1"></i> 17 Cities</a>
                                            <a href="#" class="btn-hover text-white"><i class="fa fa-eye ms-2"></i> <span>26+ Tour Places</span></a>
                                        </div>
                                    </div>
                                    <div class="international-plus-icon">
                                        <a href="#" class="my-auto"><i class="fas fa-link fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Explore Tour Start -->

        <!-- Packages Start -->
        <div class="container-fluid packages py-5">
            <div class="container py-5">
                <div class="mx-auto text-center mb-5" style="max-width: 900px;">
                    <h5 class="section-title px-3">Packages</h5>
                    <h1 class="mb-0">Awesome Packages</h1>
                </div>
                <div class="packages-carousel owl-carousel">
                    <div class="packages-item">
                        <div class="packages-img">
                            <img src="./img/packages-4.jpg" class="img-fluid w-100 rounded-top" alt="Image">
                            <div class="packages-info d-flex border border-start-0 border-end-0 position-absolute" style="width: 100%; bottom: 0; left: 0; z-index: 5;">
                                <small class="flex-fill text-center border-end py-2"><i class="fa fa-map-marker-alt me-2"></i>Venice - Italy</small>
                                <small class="flex-fill text-center border-end py-2"><i class="fa fa-calendar-alt me-2"></i>3 days</small>
                                <small class="flex-fill text-center py-2"><i class="fa fa-user me-2"></i>2 Person</small>
                            </div>
                            <div class="packages-price py-2 px-4">$349.00</div>
                        </div>
                        <div class="packages-content bg-light">
                            <div class="p-4 pb-0">
                                <h5 class="mb-0">Venice - Italy</h5>
                                <small class="text-uppercase">Hotel Deals</small>
                                <div class="mb-3">
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                </div>
                                <p class="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nemo quia quae illum aperiam fugiat voluptatem repellat</p>
                            </div>
                            <div class="row bg-primary rounded-bottom mx-0">
                                <div class="col-6 text-start px-0">
                                    <a href="#" class="btn-hover btn text-white py-2 px-4">Read More</a>
                                </div>
                                <div class="col-6 text-end px-0">
                                    <a href="#" class="btn-hover btn text-white py-2 px-4">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="packages-item">
                        <div class="packages-img">
                            <img src="./img/packages-2.jpg" class="img-fluid w-100 rounded-top" alt="Image">
                            <div class="packages-info d-flex border border-start-0 border-end-0 position-absolute" style="width: 100%; bottom: 0; left: 0; z-index: 5;">
                                <small class="flex-fill text-center border-end py-2"><i class="fa fa-map-marker-alt me-2"></i>Venice - Italy</small>
                                <small class="flex-fill text-center border-end py-2"><i class="fa fa-calendar-alt me-2"></i>3 days</small>
                                <small class="flex-fill text-center py-2"><i class="fa fa-user me-2"></i>2 Person</small>
                            </div>
                            <div class="packages-price py-2 px-4">$449.00</div>
                        </div>
                        <div class="packages-content bg-light">
                            <div class="p-4 pb-0">
                                <h5 class="mb-0">The New California</h5>
                                <small class="text-uppercase">Hotel Deals</small>
                                <div class="mb-3">
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                </div>
                                <p class="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nemo quia quae illum aperiam fugiat voluptatem repellat</p>
                            </div>
                            <div class="row bg-primary rounded-bottom mx-0">
                                <div class="col-6 text-start px-0">
                                    <a href="#" class="btn-hover btn text-white py-2 px-4">Read More</a>
                                </div>
                                <div class="col-6 text-end px-0">
                                    <a href="#" class="btn-hover btn text-white py-2 px-4">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="packages-item">
                        <div class="packages-img">
                            <img src="./img/packages-3.jpg" class="img-fluid w-100 rounded-top" alt="Image">
                            <div class="packages-info d-flex border border-start-0 border-end-0 position-absolute" style="width: 100%; bottom: 0; left: 0; z-index: 5;">
                                <small class="flex-fill text-center border-end py-2"><i class="fa fa-map-marker-alt me-2"></i>Venice - Italy</small>
                                <small class="flex-fill text-center border-end py-2"><i class="fa fa-calendar-alt me-2"></i>3 days</small>
                                <small class="flex-fill text-center py-2"><i class="fa fa-user me-2"></i>2 Person</small>
                            </div>
                            <div class="packages-price py-2 px-4">$549.00</div>
                        </div>
                        <div class="packages-content bg-light">
                            <div class="p-4 pb-0">
                                <h5 class="mb-0">Discover Japan</h5>
                                <small class="text-uppercase">Hotel Deals</small>
                                <div class="mb-3">
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                </div>
                                <p class="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nemo quia quae illum aperiam fugiat voluptatem repellat</p>
                            </div>
                            <div class="row bg-primary rounded-bottom mx-0">
                                <div class="col-6 text-start px-0">
                                    <a href="#" class="btn-hover btn text-white py-2 px-4">Read More</a>
                                </div>
                                <div class="col-6 text-end px-0">
                                    <a href="#" class="btn-hover btn text-white py-2 px-4">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="packages-item">
                        <div class="packages-img">
                            <img src="./img/packages-1.jpg" class="img-fluid w-100 rounded-top" alt="Image">
                            <div class="packages-info d-flex border border-start-0 border-end-0 position-absolute" style="width: 100%; bottom: 0; left: 0; z-index: 5;">
                                <small class="flex-fill text-center border-end py-2"><i class="fa fa-map-marker-alt me-2"></i>Thayland</small>
                                <small class="flex-fill text-center border-end py-2"><i class="fa fa-calendar-alt me-2"></i>3 days</small>
                                <small class="flex-fill text-center py-2"><i class="fa fa-user me-2"></i>2 Person</small>
                            </div>
                            <div class="packages-price py-2 px-4">$649.00</div>
                        </div>
                        <div class="packages-content bg-light">
                            <div class="p-4 pb-0">
                                <h5 class="mb-0">Thayland Trip</h5>
                                <small class="text-uppercase">Hotel Deals</small>
                                <div class="mb-3">
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                </div>
                                <p class="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nemo quia quae illum aperiam fugiat voluptatem repellat</p>
                            </div>
                            <div class="row bg-primary rounded-bottom mx-0">
                                <div class="col-6 text-start px-0">
                                    <a href="#" class="btn-hover btn text-white py-2 px-4">Read More</a>
                                </div>
                                <div class="col-6 text-end px-0">
                                    <a href="#" class="btn-hover btn text-white py-2 px-4">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Packages End -->

        <!-- Gallery Start -->
        <div class="container-fluid gallery py-5 my-5">
            <div class="mx-auto text-center mb-5" style="max-width: 900px;">
                <h5 class="section-title px-3">Our Gallery</h5>
                <h1 class="mb-4">Tourism & Traveling Gallery.</h1>
                <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi.
                </p>
            </div>
            <div class="tab-class text-center">
                <ul class="nav nav-pills d-inline-flex justify-content-center mb-5">
                    <li class="nav-item">
                        <a class="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" href="#GalleryTab-1">
                            <span class="text-dark" style="width: 150px;">All</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="d-flex py-2 mx-3 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#GalleryTab-2">
                            <span class="text-dark" style="width: 150px;">World tour</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#GalleryTab-3">
                            <span class="text-dark" style="width: 150px;">Ocean Tour</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#GalleryTab-4">
                            <span class="text-dark" style="width: 150px;">Summer Tour</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#GalleryTab-5">
                            <span class="text-dark" style="width: 150px;">Sport Tour</span>
                        </a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div id="GalleryTab-1" class="tab-pane fade show p-0 active">
                        <div class="row g-2">
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                <div class="gallery-item h-100">
                                    <img src="./img/gallery-1.jpg" class="img-fluid w-100 h-100 rounded" alt="Image">
                                    <div class="gallery-content">
                                        <div class="gallery-info">
                                            <h5 class="text-white text-uppercase mb-2">World Tour</h5>
                                            <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div class="gallery-plus-icon">
                                        <a href="./img/gallery-1.jpg" data-lightbox="gallery-1" class="my-auto"><i class="fas fa-plus fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                <div class="gallery-item h-100">
                                    <img src="./img/gallery-2.jpg" class="img-fluid w-100 h-100 rounded" alt="Image">
                                    <div class="gallery-content">
                                        <div class="gallery-info">
                                            <h5 class="text-white text-uppercase mb-2">World Tour</h5>
                                            <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div class="gallery-plus-icon">
                                        <a href="./img/gallery-2.jpg" data-lightbox="gallery-2" class="my-auto"><i class="fas fa-plus fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                <div class="gallery-item h-100">
                                    <img src="./img/gallery-3.jpg" class="img-fluid w-100 h-100 rounded" alt="Image">
                                    <div class="gallery-content">
                                        <div class="gallery-info">
                                            <h5 class="text-white text-uppercase mb-2">World Tour</h5>
                                            <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div class="gallery-plus-icon">
                                        <a href="./img/gallery-3.jpg" data-lightbox="gallery-3" class="my-auto"><i class="fas fa-plus fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                <div class="gallery-item h-100">
                                    <img src="./img/gallery-4.jpg" class="img-fluid w-100 h-100 rounded" alt="Image">
                                    <div class="gallery-content">
                                        <div class="gallery-info">
                                            <h5 class="text-white text-uppercase mb-2">World Tour</h5>
                                            <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div class="gallery-plus-icon">
                                        <a href="./img/gallery-4.jpg" data-lightbox="gallery-4" class="my-auto"><i class="fas fa-plus fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                <div class="gallery-item h-100">
                                    <img src="./img/gallery-5.jpg" class="img-fluid w-100 h-100 rounded" alt="Image">
                                    <div class="gallery-content">
                                        <div class="gallery-info">
                                            <h5 class="text-white text-uppercase mb-2">World Tour</h5>
                                            <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div class="gallery-plus-icon">
                                        <a href="./img/gallery-5.jpg" data-lightbox="gallery-5" class="my-auto"><i class="fas fa-plus fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                <div class="gallery-item h-100">
                                    <img src="./img/gallery-6.jpg" class="img-fluid w-100 h-100 rounded" alt="Image">
                                    <div class="gallery-content">
                                        <div class="gallery-info">
                                            <h5 class="text-white text-uppercase mb-2">World Tour</h5>
                                            <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div class="gallery-plus-icon">
                                        <a href="./img/gallery-6.jpg" data-lightbox="gallery-6" class="my-auto"><i class="fas fa-plus fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                <div class="gallery-item h-100">
                                    <img src="./img/gallery-7.jpg" class="img-fluid w-100 h-100 rounded" alt="Image">
                                    <div class="gallery-content">
                                        <div class="gallery-info">
                                            <h5 class="text-white text-uppercase mb-2">World Tour</h5>
                                            <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div class="gallery-plus-icon">
                                        <a href="./img/gallery-7.jpg" data-lightbox="gallery-7" class="my-auto"><i class="fas fa-plus fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                                <div class="gallery-item h-100">
                                    <img src="./img/gallery-8.jpg" class="img-fluid w-100 h-100 rounded" alt="Image">
                                    <div class="gallery-content">
                                        <div class="gallery-info">
                                            <h5 class="text-white text-uppercase mb-2">World Tour</h5>
                                            <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div class="gallery-plus-icon">
                                        <a href="./img/gallery-8.jpg" data-lightbox="gallery-8" class="my-auto"><i class="fas fa-plus fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                <div class="gallery-item h-100">
                                    <img src="./img/gallery-9.jpg" class="img-fluid w-100 h-100 rounded" alt="Image">
                                    <div class="gallery-content">
                                        <div class="gallery-info">
                                            <h5 class="text-white text-uppercase mb-2">World Tour</h5>
                                            <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div class="gallery-plus-icon">
                                        <a href="./img/gallery-9.jpg" data-lightbox="gallery-9" class="my-auto"><i class="fas fa-plus fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                                <div class="gallery-item h-100">
                                    <img src="./img/gallery-10.jpg" class="img-fluid w-100 h-100 rounded" alt="Image">
                                    <div class="gallery-content">
                                        <div class="gallery-info">
                                            <h5 class="text-white text-uppercase mb-2">World Tour</h5>
                                            <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div class="gallery-plus-icon">
                                        <a href="./img/gallery-10.jpg" data-lightbox="gallery-10" class="my-auto"><i class="fas fa-plus fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="GalleryTab-2" class="tab-pane fade show p-0">
                        <div class="row g-2">
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                <div class="gallery-item h-100">
                                    <img src="./img/gallery-2.jpg" class="img-fluid w-100 h-100 rounded" alt="Image">
                                    <div class="gallery-content">
                                        <div class="gallery-info">
                                            <h5 class="text-white text-uppercase mb-2">World Tour</h5>
                                            <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div class="gallery-plus-icon">
                                        <a href="./img/gallery-2.jpg" data-lightbox="gallery-2" class="my-auto"><i class="fas fa-plus fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                <div class="gallery-item h-100">
                                    <img src="./img/gallery-3.jpg" class="img-fluid w-100 h-100 rounded" alt="Image">
                                    <div class="gallery-content">
                                        <div class="gallery-info">
                                            <h5 class="text-white text-uppercase mb-2">World Tour</h5>
                                            <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div class="gallery-plus-icon">
                                        <a href="./img/gallery-3.jpg" data-lightbox="gallery-3" class="my-auto"><i class="fas fa-plus fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="GalleryTab-3" class="tab-pane fade show p-0">
                        <div class="row g-2">
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                <div class="gallery-item h-100">
                                    <img src="./img/gallery-2.jpg" class="img-fluid w-100 h-100 rounded" alt="Image">
                                    <div class="gallery-content">
                                        <div class="gallery-info">
                                            <h5 class="text-white text-uppercase mb-2">World Tour</h5>
                                            <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div class="gallery-plus-icon">
                                        <a href="./img/gallery-2.jpg" data-lightbox="gallery-2" class="my-auto"><i class="fas fa-plus fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                <div class="gallery-item h-100">
                                    <img src="./img/gallery-3.jpg" class="img-fluid w-100 h-100 rounded" alt="Image">
                                    <div class="gallery-content">
                                        <div class="gallery-info">
                                            <h5 class="text-white text-uppercase mb-2">World Tour</h5>
                                            <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div class="gallery-plus-icon">
                                        <a href="./img/gallery-3.jpg" data-lightbox="gallery-3" class="my-auto"><i class="fas fa-plus fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="GalleryTab-4" class="tab-pane fade show p-0">
                        <div class="row g-2">
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                <div class="gallery-item h-100">
                                    <img src="./img/gallery-2.jpg" class="img-fluid w-100 h-100 rounded" alt="Image">
                                    <div class="gallery-content">
                                        <div class="gallery-info">
                                            <h5 class="text-white text-uppercase mb-2">World Tour</h5>
                                            <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div class="gallery-plus-icon">
                                        <a href="./img/gallery-2.jpg" data-lightbox="gallery-2" class="my-auto"><i class="fas fa-plus fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                <div class="gallery-item h-100">
                                    <img src="./img/gallery-3.jpg" class="img-fluid w-100 h-100 rounded" alt="Image">
                                    <div class="gallery-content">
                                        <div class="gallery-info">
                                            <h5 class="text-white text-uppercase mb-2">World Tour</h5>
                                            <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div class="gallery-plus-icon">
                                        <a href="./img/gallery-3.jpg" data-lightbox="gallery-3" class="my-auto"><i class="fas fa-plus fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="GalleryTab-5" class="tab-pane fade show p-0">
                        <div class="row g-2">
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                <div class="gallery-item h-100">
                                    <img src="./img/gallery-2.jpg" class="img-fluid w-100 h-100 rounded" alt="Image">
                                    <div class="gallery-content">
                                        <div class="gallery-info">
                                            <h5 class="text-white text-uppercase mb-2">World Tour</h5>
                                            <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div class="gallery-plus-icon">
                                        <a href="./img/gallery-2.jpg" data-lightbox="gallery-2" class="my-auto"><i class="fas fa-plus fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                <div class="gallery-item h-100">
                                    <img src="./img/gallery-3.jpg" class="img-fluid w-100 h-100 rounded" alt="Image">
                                    <div class="gallery-content">
                                        <div class="gallery-info">
                                            <h5 class="text-white text-uppercase mb-2">World Tour</h5>
                                            <a href="#" class="btn-hover text-white">View All Place <i class="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div class="gallery-plus-icon">
                                        <a href="./img/gallery-3.jpg" data-lightbox="gallery-3" class="my-auto"><i class="fas fa-plus fa-2x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Gallery End -->

        <!-- Tour Booking Start -->
        <div class="container-fluid booking py-5">
            <div class="container py-5">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6">
                        <h5 class="section-booking-title pe-3">Booking</h5>
                        <h1 class="text-white mb-4">Online Booking</h1>
                        <p class="text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maxime ullam esse fuga blanditiis accusantium pariatur quis sapiente, veniam doloribus praesentium? Repudiandae iste voluptatem fugiat doloribus quasi quo iure officia.
                        </p>
                        <p class="text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maxime ullam esse fuga blanditiis accusantium pariatur quis sapiente, veniam doloribus praesentium? Repudiandae iste voluptatem fugiat doloribus quasi quo iure officia.
                        </p>
                        <a href="#" class="btn btn-light text-primary rounded-pill py-3 px-5 mt-2">Read More</a>
                    </div>
                    <div class="col-lg-6">
                        <h1 class="text-white mb-3">Book A Tour Deals</h1>
                        <p class="text-white mb-4">Get <span class="text-warning">50% Off</span> On Your First Adventure Trip With Travela. Get More Deal Offers Here.</p>
                        <form>
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control bg-white border-0" id="name" placeholder="Your Name">
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="email" class="form-control bg-white border-0" id="email" placeholder="Your Email">
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating date" id="date3" data-target-input="nearest">
                                        <input type="text" class="form-control bg-white border-0" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                                        <label for="datetime">Date & Time</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <select class="form-select bg-white border-0" id="select1">
                                            <option value="1">Destination 1</option>
                                            <option value="2">Destination 2</option>
                                            <option value="3">Destination 3</option>
                                        </select>
                                        <label for="select1">Destination</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <select class="form-select bg-white border-0" id="SelectPerson">
                                            <option value="1">Persons 1</option>
                                            <option value="2">Persons 2</option>
                                            <option value="3">Persons 3</option>
                                        </select>
                                        <label for="SelectPerson">Persons</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <select class="form-select bg-white border-0" id="CategoriesSelect">
                                            <option value="1">Kids</option>
                                            <option value="2">1</option>
                                            <option value="3">2</option>
                                            <option value="3">3</option>
                                        </select>
                                        <label for="CategoriesSelect">Categories</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <textarea class="form-control bg-white border-0" placeholder="Special Request" id="message" style="height: 100px"></textarea>
                                        <label for="message">Special Request</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary text-white w-100 py-3" type="submit">Book Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Tour Booking End -->

        <!-- Travel Guide Start -->
        <div class="container-fluid guide py-5">
            <div class="container py-5">
                <div class="mx-auto text-center mb-5" style="max-width: 900px;">
                    <h5 class="section-title px-3">Travel Guide</h5>
                    <h1 class="mb-0">Meet Our Guide</h1>
                </div>
                <div class="row g-4">
                    <div class="col-md-6 col-lg-3">
                        <div class="guide-item">
                            <div class="guide-img">
                                <div class="guide-img-efects">
                                    <img src="./img/guide-1.jpg" class="img-fluid w-100 rounded-top" alt="Image">
                                </div>
                                <div class="guide-icon rounded-pill p-2">
                                    <a class="btn btn-square btn-primary rounded-circle mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-square btn-primary rounded-circle mx-1" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-square btn-primary rounded-circle mx-1" href=""><i class="fab fa-instagram"></i></a>
                                    <a class="btn btn-square btn-primary rounded-circle mx-1" href=""><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div class="guide-title text-center rounded-bottom p-4">
                                <div class="guide-title-inner">
                                    <h4 class="mt-3">Full Name</h4>
                                    <p class="mb-0">Designation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="guide-item">
                            <div class="guide-img">
                                <div class="guide-img-efects">
                                    <img src="./img/guide-2.jpg" class="img-fluid w-100 rounded-top" alt="Image">
                                </div>
                                <div class="guide-icon rounded-pill p-2">
                                    <a class="btn btn-square btn-primary rounded-circle mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-square btn-primary rounded-circle mx-1" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-square btn-primary rounded-circle mx-1" href=""><i class="fab fa-instagram"></i></a>
                                    <a class="btn btn-square btn-primary rounded-circle mx-1" href=""><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div class="guide-title text-center rounded-bottom p-4">
                                <div class="guide-title-inner">
                                    <h4 class="mt-3">Full Name</h4>
                                    <p class="mb-0">Designation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="guide-item">
                            <div class="guide-img">
                                <div class="guide-img-efects">
                                    <img src="./img/guide-3.jpg" class="img-fluid w-100 rounded-top" alt="Image">
                                </div>
                                <div class="guide-icon rounded-pill p-2">
                                    <a class="btn btn-square btn-primary rounded-circle mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-square btn-primary rounded-circle mx-1" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-square btn-primary rounded-circle mx-1" href=""><i class="fab fa-instagram"></i></a>
                                    <a class="btn btn-square btn-primary rounded-circle mx-1" href=""><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div class="guide-title text-center rounded-bottom p-4">
                                <div class="guide-title-inner">
                                    <h4 class="mt-3">Full Name</h4>
                                    <p class="mb-0">Designation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="guide-item">
                            <div class="guide-img">
                                <div class="guide-img-efects">
                                    <img src="./img/guide-4.jpg" class="img-fluid w-100 rounded-top" alt="Image">
                                </div>
                                <div class="guide-icon rounded-pill p-2">
                                    <a class="btn btn-square btn-primary rounded-circle mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-square btn-primary rounded-circle mx-1" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-square btn-primary rounded-circle mx-1" href=""><i class="fab fa-instagram"></i></a>
                                    <a class="btn btn-square btn-primary rounded-circle mx-1" href=""><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div class="guide-title text-center rounded-bottom p-4">
                                <div class="guide-title-inner">
                                    <h4 class="mt-3">Full Name</h4>
                                    <p class="mb-0">Designation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Travel Guide End -->

        <!-- Blog Start -->
        <div class="container-fluid blog py-5">
            <div class="container py-5">
                <div class="mx-auto text-center mb-5" style="max-width: 900px;">
                    <h5 class="section-title px-3">Our Blog</h5>
                    <h1 class="mb-4">Popular Travel Blogs</h1>
                    <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti deserunt tenetur sapiente atque. Magni non explicabo beatae sit, vel reiciendis consectetur numquam id similique sunt error obcaecati ducimus officia maiores.
                    </p>
                </div>
                <div class="row g-4 justify-content-center">
                    <div class="col-lg-4 col-md-6">
                        <div class="blog-item">
                            <div class="blog-img">
                                <div class="blog-img-inner">
                                    <img class="img-fluid w-100 rounded-top" src="./img/blog-1.jpg" alt="Image">
                                    <div class="blog-icon">
                                        <a href="#" class="my-auto"><i class="fas fa-link fa-2x text-white"></i></a>
                                    </div>
                                </div>
                                <div class="blog-info d-flex align-items-center border border-start-0 border-end-0">
                                    <small class="flex-fill text-center border-end py-2"><i class="fa fa-calendar-alt text-primary me-2"></i>28 Jan 2050</small>
                                    <a href="#" class="btn-hover flex-fill text-center text-white border-end py-2"><i class="fa fa-thumbs-up text-primary me-2"></i>1.7K</a>
                                    <a href="#" class="btn-hover flex-fill text-center text-white py-2"><i class="fa fa-comments text-primary me-2"></i>1K</a>
                                </div>
                            </div>
                            <div class="blog-content border border-top-0 rounded-bottom p-4">
                                <p class="mb-3">Posted By: Royal Hamblin </p>
                                <a href="#" class="h4">Adventures Trip</a>
                                <p class="my-3">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                                <a href="#" class="btn btn-primary rounded-pill py-2 px-4">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="blog-item">
                            <div class="blog-img">
                                <div class="blog-img-inner">
                                    <img class="img-fluid w-100 rounded-top" src="./img/blog-2.jpg" alt="Image">
                                    <div class="blog-icon">
                                        <a href="#" class="my-auto"><i class="fas fa-link fa-2x text-white"></i></a>
                                    </div>
                                </div>
                                <div class="blog-info d-flex align-items-center border border-start-0 border-end-0">
                                    <small class="flex-fill text-center border-end py-2"><i class="fa fa-calendar-alt text-primary me-2"></i>28 Jan 2050</small>
                                    <a href="#" class="btn-hover flex-fill text-center text-white border-end py-2"><i class="fa fa-thumbs-up text-primary me-2"></i>1.7K</a>
                                    <a href="#" class="btn-hover flex-fill text-center text-white py-2"><i class="fa fa-comments text-primary me-2"></i>1K</a>
                                </div>
                            </div>
                            <div class="blog-content border border-top-0 rounded-bottom p-4">
                                <p class="mb-3">Posted By: Royal Hamblin </p>
                                <a href="#" class="h4">Adventures Trip</a>
                                <p class="my-3">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                                <a href="#" class="btn btn-primary rounded-pill py-2 px-4">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="blog-item">
                            <div class="blog-img">
                                <div class="blog-img-inner">
                                    <img class="img-fluid w-100 rounded-top" src="./img/blog-3.jpg" alt="Image">
                                    <div class="blog-icon">
                                        <a href="#" class="my-auto"><i class="fas fa-link fa-2x text-white"></i></a>
                                    </div>
                                </div>
                                <div class="blog-info d-flex align-items-center border border-start-0 border-end-0">
                                    <small class="flex-fill text-center border-end py-2"><i class="fa fa-calendar-alt text-primary me-2"></i>28 Jan 2050</small>
                                    <a href="#" class="btn-hover flex-fill text-center text-white border-end py-2"><i class="fa fa-thumbs-up text-primary me-2"></i>1.7K</a>
                                    <a href="#" class="btn-hover flex-fill text-center text-white py-2"><i class="fa fa-comments text-primary me-2"></i>1K</a>
                                </div>
                            </div>
                            <div class="blog-content border border-top-0 rounded-bottom p-4">
                                <p class="mb-3">Posted By: Royal Hamblin </p>
                                <a href="#" class="h4">Adventures Trip</a>
                                <p class="my-3">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                                <a href="#" class="btn btn-primary rounded-pill py-2 px-4">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Blog End -->

        <!-- Testimonial Start -->
        <div class="container-fluid testimonial py-5">
            <div class="container py-5">
                <div class="mx-auto text-center mb-5" style="max-width: 900px;">
                    <h5 class="section-title px-3">Testimonial</h5>
                    <h1 class="mb-0">Our Clients Say!!!</h1>
                </div>
                <div class="testimonial-carousel owl-carousel">
                    <div class="testimonial-item text-center rounded pb-4">
                        <div class="testimonial-comment bg-light rounded p-4">
                            <p class="text-center mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis,
                            </p>
                        </div>
                        <div class="testimonial-img p-1">
                            <img src="./img/testimonial-1.jpg" class="img-fluid rounded-circle" alt="Image">
                        </div>
                        <div style="margin-top: -35px;">
                            <h5 class="mb-0">John Abraham</h5>
                            <p class="mb-0">New York, USA</p>
                            <div class="d-flex justify-content-center">
                                <i class="fas fa-star text-primary"></i>
                                <i class="fas fa-star text-primary"></i>
                                <i class="fas fa-star text-primary"></i>
                                <i class="fas fa-star text-primary"></i>
                                <i class="fas fa-star text-primary"></i>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-item text-center rounded pb-4">
                        <div class="testimonial-comment bg-light rounded p-4">
                            <p class="text-center mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis,
                            </p>
                        </div>
                        <div class="testimonial-img p-1">
                            <img src="./img/testimonial-2.jpg" class="img-fluid rounded-circle" alt="Image">
                        </div>
                        <div style="margin-top: -35px;">
                            <h5 class="mb-0">John Abraham</h5>
                            <p class="mb-0">New York, USA</p>
                            <div class="d-flex justify-content-center">
                                <i class="fas fa-star text-primary"></i>
                                <i class="fas fa-star text-primary"></i>
                                <i class="fas fa-star text-primary"></i>
                                <i class="fas fa-star text-primary"></i>
                                <i class="fas fa-star text-primary"></i>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-item text-center rounded pb-4">
                        <div class="testimonial-comment bg-light rounded p-4">
                            <p class="text-center mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis,
                            </p>
                        </div>
                        <div class="testimonial-img p-1">
                            <img src="./img/testimonial-3.jpg" class="img-fluid rounded-circle" alt="Image">
                        </div>
                        <div style="margin-top: -35px;">
                            <h5 class="mb-0">John Abraham</h5>
                            <p class="mb-0">New York, USA</p>
                            <div class="d-flex justify-content-center">
                                <i class="fas fa-star text-primary"></i>
                                <i class="fas fa-star text-primary"></i>
                                <i class="fas fa-star text-primary"></i>
                                <i class="fas fa-star text-primary"></i>
                                <i class="fas fa-star text-primary"></i>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-item text-center rounded pb-4">
                        <div class="testimonial-comment bg-light rounded p-4">
                            <p class="text-center mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis,
                            </p>
                        </div>
                        <div class="testimonial-img p-1">
                            <img src="./img/testimonial-4.jpg" class="img-fluid rounded-circle" alt="Image">
                        </div>
                        <div style="margin-top: -35px;">
                            <h5 class="mb-0">John Abraham</h5>
                            <p class="mb-0">New York, USA</p>
                            <div class="d-flex justify-content-center">
                                <i class="fas fa-star text-primary"></i>
                                <i class="fas fa-star text-primary"></i>
                                <i class="fas fa-star text-primary"></i>
                                <i class="fas fa-star text-primary"></i>
                                <i class="fas fa-star text-primary"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Testimonial End -->

        <!-- Subscribe Start -->
        <div class="container-fluid subscribe py-5">
            <div class="container text-center py-5">
                <div class="mx-auto text-center" style="max-width: 900px;">
                    <h5 class="subscribe-title px-3">Subscribe</h5>
                    <h1 class="text-white mb-4">Our Newsletter</h1>
                    <p class="text-white mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi.
                    </p>
                    <div class="position-relative mx-auto">
                        <input class="form-control border-primary rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email">
                        <button type="button" class="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 px-4 mt-2 me-2">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Subscribe End -->

        <!-- Footer Start -->
        <div class="container-fluid footer py-5">
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-md-6 col-lg-6 col-xl-3">
                        <div class="footer-item d-flex flex-column">
                            <h4 class="mb-4 text-white">Get In Touch</h4>
                            <a href=""><i class="fas fa-home me-2"></i> 123 Street, New York, USA</a>
                            <a href=""><i class="fas fa-envelope me-2"></i> info@example.com</a>
                            <a href=""><i class="fas fa-phone me-2"></i> +012 345 67890</a>
                            <a href="" class="mb-3"><i class="fas fa-print me-2"></i> +012 345 67890</a>
                            <div class="d-flex align-items-center">
                                <i class="fas fa-share fa-2x text-white me-2"></i>
                                <a class="btn-square btn btn-primary rounded-circle mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn-square btn btn-primary rounded-circle mx-1" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn-square btn btn-primary rounded-circle mx-1" href=""><i class="fab fa-instagram"></i></a>
                                <a class="btn-square btn btn-primary rounded-circle mx-1" href=""><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-3">
                        <div class="footer-item d-flex flex-column">
                            <h4 class="mb-4 text-white">Company</h4>
                            <a href=""><i class="fas fa-angle-right me-2"></i> About</a>
                            <a href=""><i class="fas fa-angle-right me-2"></i> Careers</a>
                            <a href=""><i class="fas fa-angle-right me-2"></i> Blog</a>
                            <a href=""><i class="fas fa-angle-right me-2"></i> Press</a>
                            <a href=""><i class="fas fa-angle-right me-2"></i> Gift Cards</a>
                            <a href=""><i class="fas fa-angle-right me-2"></i> Magazine</a>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-3">
                        <div class="footer-item d-flex flex-column">
                            <h4 class="mb-4 text-white">Support</h4>
                            <a href=""><i class="fas fa-angle-right me-2"></i> Contact</a>
                            <a href=""><i class="fas fa-angle-right me-2"></i> Legal Notice</a>
                            <a href=""><i class="fas fa-angle-right me-2"></i> Privacy Policy</a>
                            <a href=""><i class="fas fa-angle-right me-2"></i> Terms and Conditions</a>
                            <a href=""><i class="fas fa-angle-right me-2"></i> Sitemap</a>
                            <a href=""><i class="fas fa-angle-right me-2"></i> Cookie policy</a>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-3">
                        <div class="footer-item">
                            <div class="row gy-3 gx-2 mb-4">
                                <div class="col-xl-6">
                                    <form>
                                        <div class="form-floating">
                                            <select class="form-select bg-dark border" id="select1">
                                                <option value="1">Arabic</option>
                                                <option value="2">German</option>
                                                <option value="3">Greek</option>
                                                <option value="3">New York</option>
                                            </select>
                                            <label for="select1">English</label>
                                        </div>
                                    </form>
                                </div>
                                <div class="col-xl-6">
                                    <form>
                                        <div class="form-floating">
                                            <select class="form-select bg-dark border" id="select1">
                                                <option value="1">USD</option>
                                                <option value="2">EUR</option>
                                                <option value="3">INR</option>
                                                <option value="3">GBP</option>
                                            </select>
                                            <label for="select1">$</label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <h4 class="text-white mb-3">Payments</h4>
                            <div class="footer-bank-card">
                                <a href="#" class="text-white me-2"><i class="fab fa-cc-amex fa-2x"></i></a>
                                <a href="#" class="text-white me-2"><i class="fab fa-cc-visa fa-2x"></i></a>
                                <a href="#" class="text-white me-2"><i class="fas fa-credit-card fa-2x"></i></a>
                                <a href="#" class="text-white me-2"><i class="fab fa-cc-mastercard fa-2x"></i></a>
                                <a href="#" class="text-white me-2"><i class="fab fa-cc-paypal fa-2x"></i></a>
                                <a href="#" class="text-white"><i class="fab fa-cc-discover fa-2x"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer End -->
        
        <!-- Copyright Start -->
        <div class="container-fluid copyright text-body py-4">
            <div class="container">
                <div class="row g-4 align-items-center">
                    <div class="col-md-6 text-center text-md-end mb-md-0">
                        <i class="fas fa-copyright me-2"></i><a class="text-white" href="#">Your Site Name</a>, All right reserved.
                    </div>
                    <div class="col-md-6 text-center text-md-start">
                        <!--/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. ***/-->
                        <!--/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, ***/-->
                        <!--/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". ***/-->
                        Designed By <a class="text-white" href="https://htmlcodex.com">HTML Codex</a> Distributed By <a href="https://themewagon.com">ThemeWagon</a>
                    </div>
                    </div>
                </div>
            </div>
        <!-- </div> -->
        <!-- Copyright End -->

        <!-- Back to Top -->
        <a href="#" class="btn btn-primary btn-primary-outline-0 btn-md-square back-to-top"><i class="fa fa-arrow-up"></i></a>   

</template>
<script  lang="ts" setup>
import { onMounted } from 'vue';
import { reactive, ref } from 'vue';
import { watch } from 'vue';
import { defineComponent } from 'vue';
import {Flights} from '@/Models/Dtos/FlightsDto';
 import router from '@/router';
import { GetallTrip } from '@/Services/FlightService/FlightService';
import $ from "jquery"; 
const loadScripts = () => {
  const scriptUrls: string[] = [
    "https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js",
    // "lib/easing/easing.min.js",
    // "lib/waypoints/waypoints.min.js",
    // "lib/owlcarousel/owl.carousel.min.js",
    // "lib/lightbox/js/lightbox.min.js",
    // "https://kit.fontawesome.com/a076d05399.js"
  ];

  scriptUrls.forEach(url => {
    const script = document.createElement("script");
    script.src = url;
    script.async = false;
    document.body.appendChild(script);
  });
};
loadScripts();
 const selectedStartingPoint = ref('');
 const selectedEndingPoint = ref('');
const startingPointsd = ref<Flights[]>([]);

async function GetAllTrips() {
  try {
    const tripsData = await GetallTrip();
    startingPointsd.value = tripsData; 
    console.log(startingPointsd.value); 
  } catch (error) {
    console.error("Error:", error);
   
    throw error; 
  }
}

GetAllTrips(); 

// Sử dụng watcher để theo dõi sự thay đổi của tripsData và cập nhật startingPoints
// watch(tripsData, (newValue) => {
//   // Map dữ liệu từ tripsData sang một mảng chỉ chứa các giá trị startingPoint
//   startingPoints.value = newValue.map(trip => trip.startingPoint);
// });
 function search() {
// router.push('home/'+ Flightdata.startingPoint);
router.push({ name: 'FlightSchedule', params: { startingPoint: selectedStartingPoint.value , endingPoint: selectedEndingPoint.value } });
}

    const swapData = () => {

        const temp = selectedStartingPoint.value;
  selectedStartingPoint.value = selectedEndingPoint.value;
  selectedEndingPoint.value = temp;
     
    };
    swapData();
// Hàm tìm kiếm chuyến bay


</script>
<style scoped> 
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css');
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@500;600&family=Roboto&display=swap');
@import url('https://use.fontawesome.com/releases/v5.15.4/css/all.css');
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css');

/*** Spinner Start ***/
/*** Spinner ***/
#spinner {
    opacity: 0;
    visibility: hidden;
    transition: opacity .5s ease-out, visibility 0s linear .5s;
    z-index: 99999;
}

#spinner.show {
    transition: opacity .5s ease-out, visibility 0s linear 0s;
    visibility: visible;
    opacity: 1;
}
/*** Spinner End ***/

.back-to-top {
    position: fixed;
    right: 30px;
    bottom: 30px;
    display: flex;
    width: 45px;
    height: 45px;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    z-index: 99;
}

/*** Button Start ***/
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
/*** Carousel Hero Header End ***/


/*** Single Page Hero Header Start ***/
.bg-breadcrumb {
    background: linear-gradient(rgba(19, 53, 123, 0.5), rgba(19, 53, 123, 0.5)), url(../img/breadcrumb-bg.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    padding: 150px 0 50px 0;
}

.bg-breadcrumb .breadcrumb-item a {
    color: var(--bs-secondary) !important;
}
/*** Single Page Hero Header End ***/


/*** About Start ***/
.about .container .section-about-title {
    position: relative;
    display: inline-block;
    text-transform: uppercase;
    color: var(--bs-primary);
}

.about .container .section-about-title::before {
    content: "";
    width: 50px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    margin-right: -50px;
    border: 1px solid var(--bs-primary) !important;
}
/*** About End ***/


/*** Services Start ***/
.service .service-content-inner {
    transition: 0.5s;
}
.service .service-content-inner:hover {
    position: relative;
    background: var(--bs-primary) !important;
}

.service .service-content-inner .service-content h5,
.service .service-content-inner .service-content p,
.service .service-content-inner .service-icon i {
    transition: 0.5s;
}

.service .service-content-inner:hover .service-content h5,
.service .service-content-inner:hover .service-content p,
.service .service-content-inner:hover .service-icon i {
    color: var(--bs-white) !important;
}
/*** Service End ***/


/*** Destination Start ***/
.destination .tab-class .tab-content .tab-pane .destination-img {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    z-index: 1;
}

.destination .tab-class .tab-content .tab-pane .destination-img .destination-overlay {
    position: absolute;
    bottom: -100%;
    left: 0;
    z-index: 3;
    transition: 0.5s;
}
/* .tab-content{
    display: flex;
} */
.destination .tab-class .tab-content .tab-pane .destination-img .search-icon {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    display: flex;
    justify-content: end;
    padding: 20px 20px 0 0;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    transition: 0.5s;

}

.destination .tab-class .tab-content .tab-pane .destination-img .search-icon a i {
    opacity: 0;
    transition: 0.5s;
}

.destination .tab-class .nav-item {
    padding: 0 0 20px 0;
}
.destination .tab-class .nav-item a.active {
    background: var(--bs-primary) !important;
}

.destination .tab-class .nav-item a.active span {
    color: var(--bs-white) !important;
}

.destination .tab-class .tab-content .destination-img:hover .search-icon {
    background: rgba(19, 53, 123, 0.4);
}

.destination .tab-class .tab-content .destination-img:hover .destination-overlay {
    bottom: 0;
}

.destination .tab-class .tab-content .destination-img:hover .search-icon a i {
    opacity: 1;
}

.destination .tab-class .tab-content .destination-img img {
    transition: 0.5s;
}

.destination .tab-class .tab-content .destination-img:hover img {
    transform: scale(1.2);
}
/*** Destination End ***/


/*** Packages Start ***/
.packages .packages-item .packages-img {
    position: relative;
    overflow: hidden;
    transition: 0.5s;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    z-index: 1;
}

.packages .packages-item .packages-img .packages-info {
    background: rgba(0, 0, 0, .3);
}

.packages .packages-item .packages-img .packages-info small,
.packages .packages-item .packages-img .packages-info small i {
    color: var(--bs-white);
    transition: 0.5s;
}

.packages .packages-item .packages-img::after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 0px solid;
    border-radius: 10px !important;
    visibility: hidden;
    transition: 0.7s;
    z-index: 3;
}

.packages .packages-item .packages-img:hover.packages-img::after {
    width: 100%;
    height: 100%;
    border: 300px solid;
    border-color: rgba(19, 53, 123, 0.6) rgba(19, 53, 123, 0.6) rgba(19, 53, 123, 0.6) rgba(19, 53, 123, 0.6);
    visibility: visible;
}

.packages .packages-item .packages-img small,
.packages .packages-item .packages-img small i {
    transition: 0.5s;
}

.packages .packages-item .packages-img:hover small,
.packages .packages-item .packages-img:hover small i {
    color: var(--bs-white) !important;

}

.packages .packages-item .packages-img img {
    transition: 0.5s;
}

.packages .packages-item .packages-img:hover img {
    transform: scale(1.3);
}

.packages .packages-item .packages-img .packages-price {
    position: absolute;
    width: 100px; 
    top: 0; 
    left: 50%; 
    transform: translateX(-50%);
    display: inline-block;
    background: var(--bs-primary);
    color: var(--bs-white);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px; 
    z-index: 5;
}

.packages .packages-carousel {
    position: relative;
}

.packages .packages-carousel .owl-nav .owl-prev {
    position: absolute;
    top: -50px;
    left: 0;
    padding: 5px 30px;
    border: 1px solid var(--bs-primary);
    border-radius: 30px;
    transition: 0.5s;
}

.packages .packages-carousel .owl-nav .owl-next {
    position: absolute;
    top: -50px;
    right: 0;
    padding: 5px 30px;
    border: 1px solid var(--bs-primary);
    border-radius: 30px;
    transition: 0.5s;
}

.packages .packages-carousel .owl-nav .owl-prev i,
.packages .packages-carousel .owl-nav .owl-next i {
    color: var(--bs-primary);
    font-size: 17px;
    transition: 0.5s;
}

.packages .packages-carousel .owl-nav .owl-prev:hover,
.packages .packages-carousel .owl-nav .owl-next:hover {
    background: var(--bs-primary);
}

.packages .packages-carousel .owl-nav .owl-prev:hover i,
.packages .packages-carousel .owl-nav .owl-next:hover i {
    color: var(--bs-white);
}
/*** Packages End ***/


/*** Explore Tour Start ***/
.ExploreTour .tab-class .nav-item {
    padding: 0 0 20px 0;
}
.ExploreTour .tab-class .nav-item a.active {
    background: var(--bs-primary) !important;
}

.ExploreTour .tab-class .nav-item a.active span {
    color: var(--bs-white) !important;
}


/* National Tour Start */
.ExploreTour #NationalTab-1 .national-item {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
}

.ExploreTour #NationalTab-1 .national-item img {
    transition: 0.5s;
}

.ExploreTour #NationalTab-1 .national-item:hover img {
    transform: scale(1.2);
}

.ExploreTour #NationalTab-1 .national-item .national-content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 10px;
    padding: 20px;
    background: rgba(0, 0, 0, .2);
    display: flex;
    align-items: end;
    justify-content: center;
    transition: 0.5s;
}

.ExploreTour #NationalTab-1 .national-item:hover .national-content {
    background: rgba(19, 53, 123, .6);
}

.ExploreTour #NationalTab-1 .national-item .national-plus-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.5s;
    opacity: 0;
}

.ExploreTour #NationalTab-1 .national-item:hover .national-plus-icon {
    opacity: 1;
}

.ExploreTour #NationalTab-1 .national-item .tour-offer {
    position: absolute;
    top: -1px;
    left: -1px;
    padding: 20px;
    border-top-right-radius: 40px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 80px;
    background: var(--bs-primary);
    color: var(--bs-white);
}

/* International Tour Start */
.ExploreTour #InternationalTab-2 .international-item {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
}

.ExploreTour #InternationalTab-2 .international-item img {
    transition: 0.5s;
}

.ExploreTour #InternationalTab-2 .international-item:hover img {
    transform: scale(1.2);
}

.ExploreTour #InternationalTab-2 .international-item .tour-offer {
    position: absolute;
    top: -1px;
    left: -1px;
    padding: 20px;
    border-top-right-radius: 30px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 80px;
    background: var(--bs-primary);
    color: var(--bs-white);
}

.ExploreTour #InternationalTab-2 .international-item .international-content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 10px;
    padding: 20px;
    background: rgba(0, 0, 0, .3);
    display: flex;
    align-items: end;
    justify-content: center;
    transition: 0.5s;
}

.ExploreTour #InternationalTab-2 .international-item:hover .international-content {
    background: rgba(19, 53, 123, .6);
}

.ExploreTour #InternationalTab-2 .international-item .international-content .international-info a {
    font-size: 14px;
}

.ExploreTour #InternationalTab-2 .international-item .international-plus-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.5s;
    opacity: 0;
}

.ExploreTour #InternationalTab-2 .international-item:hover .international-plus-icon {
    opacity: 1;
}

/* carousel Start */
.ExploreTour #InternationalTab-2 .InternationalTour-carousel .international-item {
    position: relative;
    overflow: hidden;
}

.ExploreTour #InternationalTab-2 .InternationalTour-carousel .owl-dots {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.ExploreTour #InternationalTab-2 .InternationalTour-carousel .owl-dot {
    position: relative;
    display: inline-block;
    margin: 0 5px;
    width: 15px;
    height: 15px;
    background: var(--bs-light);
    border: 1px solid var(--bs-primary);
    border-radius: 10px;
    transition: 0.5s;
}

.ExploreTour #InternationalTab-2 .InternationalTour-carousel .owl-dot.active {
    width: 40px;
    background: var(--bs-primary);
}
/*** Explore Tour End ***/


/*** Gallery Start ***/
.gallery .gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
}

.gallery .gallery-item img {
    min-height: 300px;
    object-fit: cover;
}

.gallery .gallery-item .gallery-content {
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    padding: 15px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    transition: 0.5s;
}

.gallery .gallery-item .gallery-content .gallery-info {
    position: relative;
    margin-bottom: -100%;
    opacity: 0;
    transition: 0.5s;
}

.gallery .gallery-item .gallery-plus-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.5s;
    opacity: 0;
}

.gallery .gallery-item:hover .gallery-content .gallery-info,
.gallery .gallery-item:hover .gallery-plus-icon {
   opacity: 1;
   margin: 0;
}

.gallery .gallery-item img {
    transition: 0.5s;
}

.gallery .gallery-item:hover img {
    transform: scale(1.2);
}

.gallery .gallery-item:hover .gallery-content {
    background: rgba(19, 53, 123, 0.8);
}

.gallery .tab-class .nav-item {
    padding: 0 0 20px 0;
}
.gallery .tab-class .nav-item a.active {
    background: var(--bs-primary) !important;
}

.gallery .tab-class .nav-item a.active span {
    color: var(--bs-white) !important;
}

/*** Gallery End ***/

/*** Tour Booking Start ***/
.booking {
    background: linear-gradient(rgba(19, 53, 123, .8), rgba(19, 53, 123, .8)), url(../img/tour-booking-bg.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    
}


.booking .container .section-booking-title {
    position: relative;
    display: inline-block;
    text-transform: uppercase;
    color: var(--bs-white);
}

.booking .container .section-booking-title::before {
    content: "";
    width: 50px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    margin-right: -50px;
    border: 1px solid var(--bs-white) !important;
}

.booking .container form .btn.btn-primary {
    box-shadow: inset 0 0 0 0 var(--bs-primary);
}

.booking .container form .btn.btn-primary:hover {
    box-shadow: inset 800px 0 0 0 var(--bs-light) !important;
    color: var(--bs-primary) !important;
}



/*** Tour Booking end ***/

/*** Travel Guide Start ***/
.guide .guide-item .guide-img {
    position: relative;
}

.guide .guide-item .guide-img .guide-icon {
    position: absolute;
    bottom: 0; 
    left: 50%; 
    transform: translate(-50%, -50%);
    margin-bottom: -50px;
    display: flex;
    justify-content: center;
    border: 1px solid var(--bs-primary);
    background: var(--bs-light);
    z-index: 9;
}

.guide .guide-item .guide-img .guide-img-efects {
    position: relative;
    overflow: hidden;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
}

.guide .guide-item .guide-img .guide-img-efects::after {
    content: "";
    width: 100%;
    height: 0;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.5s;
}

.guide .guide-item:hover .guide-img-efects::after {
    height: 100%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    background: rgba(19, 53, 123, .5);
}

.guide .guide-item .guide-img-efects img {
    transition: 0.5s;
}
.guide .guide-item:hover .guide-img-efects img {
    transform: scale(1.1);
}

.guide .guide-item .guide-title {
    position: relative;
    background: var(--bs-light);
    transition: 0.5s;
}

.guide .guide-item .guide-title::after {
    content: "";
    width: 100%;
    height: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    transition: 0.5s;
}

.guide .guide-item:hover .guide-title::after {
    height: 100%;
    background: var(--bs-primary) !important;
    color: var(--bs-white);
}

.guide .guide-item .guide-title .guide-title-inner,
.guide .guide-item:hover .guide-title .guide-title-inner h4 {
    transition: 0.5s;
}

.guide .guide-item:hover .guide-title .guide-title-inner {
    position: relative;
    color: var(--bs-white) !important;
    z-index: 2;
}

.guide .guide-item:hover .guide-title .guide-title-inner h4 {
    color: var(--bs-white);
}
/*** Travel Guide End ***/


/*** Blog Start ***/
.blog .blog-item .blog-img {
    position: relative;
}

.blog .blog-item .blog-img .blog-info {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    display: flex;
    background: rgba(255, 255, 255, .2);
    color: var(--bs-white);
}

.blog .blog-item .blog-img .blog-img-inner {
    position: relative;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
}

.blog .blog-item .blog-img .blog-img-inner .blog-icon {
    position: absolute;
    width: 100%;
    height: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
}

.blog .blog-item .blog-img .blog-img-inner .blog-icon a {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: 0.5s;
}

.blog .blog-item .blog-img:hover .blog-img-inner .blog-icon a {
    opacity: 1;
}

.blog .blog-item .blog-img:hover .blog-img-inner .blog-icon {
    height: 100%;
    background: rgba(19, 53, 123, .6);
    opacity: 1;
}

.blog .blog-item .blog-img .blog-img-inner {
    overflow: hidden;
}

.blog .blog-item .blog-img .blog-img-inner img {
    transition: 0.5s;
}

.blog .blog-item .blog-img:hover .blog-img-inner img {
    transform: scale(1.2);
}
/*** Blog End ***/

/*** Testimonial Start ***/
.testimonial .testimonial-carousel {
    position: relative;
}

.testimonial .testimonial-carousel .testimonial-item .testimonial-img {
    position: relative;
    width: 100px; 
    height: 100px; 
    top: 0; left: 50%; 
    transform: translate(-50%, -50%);
    border: 3px solid var(--bs-primary); 
    border-style: dotted;
    border-radius: 50%;
}

.testimonial .testimonial-carousel .owl-dots {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.testimonial .testimonial-carousel .owl-dot {
    position: relative;
    display: inline-block;
    margin: 0 5px;
    width: 15px;
    height: 15px;
    background: var(--bs-light);
    border: 1px solid var(--bs-primary);
    border-radius: 10px;
    transition: 0.5s;
}

.testimonial .testimonial-carousel .owl-dot.active {
    width: 40px;
    background: var(--bs-primary);
}

.testimonial .testimonial-carousel .owl-nav .owl-prev {
    position: absolute;
    top: -55px;
    left: 0;
    padding: 5px 30px;
    border: 1px solid var(--bs-primary);
    border-radius: 30px;
    transition: 0.5s;
}

.testimonial .testimonial-carousel .owl-nav .owl-next {
    position: absolute;
    top: -55px;
    right: 0;
    padding: 5px 30px;
    border: 1px solid var(--bs-primary);
    border-radius: 30px;
    transition: 0.5s;
}

.testimonial .testimonial-carousel .owl-nav .owl-prev i,
.testimonial .testimonial-carousel .owl-nav .owl-next i {
    color: var(--bs-primary);
    font-size: 17px;
    transition: 0.5s;
}

.testimonial .testimonial-carousel .owl-nav .owl-prev:hover,
.testimonial .testimonial-carousel .owl-nav .owl-next:hover {
    background: var(--bs-primary);
}

.testimonial .testimonial-carousel .owl-nav .owl-prev:hover i,
.testimonial .testimonial-carousel .owl-nav .owl-next:hover i {
    color: var(--bs-white);
}

.testimonial .testimonial-carousel .owl-item.center .testimonial-item .testimonial-comment {
    background: var(--bs-primary) !important;
    color: var(--bs-white);
    transition: 0.5s;
}

.testimonial .testimonial-carousel .owl-item.center .testimonial-item .testimonial-img {
    border: 3px solid var(--bs-white); 
    border-style: dotted;
    transition: 0.5s;
}
/*** Testimonial End ***/

/*** Contact Start ***/
.contact .container form .btn.btn-primary {
    box-shadow: inset 0 0 0 0 var(--bs-primary);
}

.contact .container form .btn.btn-primary:hover {
    box-shadow: inset 1000px 0 0 0 var(--bs-light) !important;
    color: var(--bs-primary) !important;
}
/*** Contact End ***/

/*** Subscribe Start ***/
.subscribe {
    background: linear-gradient(rgba(19, 53, 123, .6), rgba(19, 53, 123, .6)), url(../img/subscribe-img.jpg);
    background-attachment: fixed;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}

.subscribe .subscribe-title {
    position: relative;
    display: inline-block;
    text-transform: uppercase;
    color: var(--bs-white);
}

.subscribe .subscribe-title::before {
    content: "";
    width: 50px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    margin-right: -50px;
    border: 1px solid var(--bs-white) !important;
}

.subscribe .subscribe-title::after {
    content: "";
    width: 50px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    margin-left: -50px;
    border: 1px solid var(--bs-white) !important;
}
/*** Subscribe End ***/

/*** Footer Start ***/
.footer {
    background: var(--bs-dark);
}
.footer .footer-item a {
    line-height: 30px;
    color: var(--bs-white);
    transition: 0.5s;
}

.footer .footer-item a:hover {
    letter-spacing: 2px;
    color: var(--bs-primary);
}

/*** Footer End ***/

/*** copyright Start ***/
.copyright {
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    background: var(--bs-dark) !important;
}
/*** copyright end ***/

/* css cua bao */
.flight-form {
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
}

.flight-select {
    padding: 10px;
    border: 5px solid #f3d250;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
}

.btn {
    padding: 10px 20px;
    background-color: #007bff;
    border: none;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;
}

.btn:hover {
    background-color: #0056b3;
}

/* Icon mũi tên */
.arrow-icon {
    width: 20px;
    height: 20px;
    fill: #fff;
    margin-left: 5px;
    transition: transform 0.3s ease;
}

/* Hiệu ứng mũi tên khi hover */
.btn:hover .arrow-icon {
    transform: rotate(180deg);
}
.packages-carousel  {
    display: flex;  
}
</style>
