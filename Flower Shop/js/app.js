particlesJS('particles-js',
  
  {
  "particles": {
    "number": {
      "value": 150,
      "density": {
        "enable": true,
        "value_area": 500
      }
    },
    "color": {
      "value": "#fff"
    },
    "shape": {
      "type": "image",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },

// update here your png image relative path  Simple way to do that is open image in browser and then copy link here..

      "image": {
        "src": "file:///home/manan/fun/Flower%20Shop/drive-download-20181030T095555Z-001-20190109T044020Z-001/drive-download-20181030T095555Z-001/demo/images/download.png",
        "width": 100,
        "height": 100
      }
  //https://cdn.pixabay.com/photo/2018/03/02/09/04/lotus-3192656__340.png
    },
    "opacity": {
      "value": 0.3,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 3,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 20 ,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 500,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 2.5,
      "direction": "bottom",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "modes"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 3
        }
      },
      "bubble": {
        "distance": 400,
        "size": 4,
        "duration": 0.3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 100,
        "duration": 0.2
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

);

