var config = {
    "particles": {
        "number": {
            "value": 30,
            "density": {
                "enable": true,
                "value_area": 600
            }
        },
        "color": {
            "value": ["#FFA88A", "#ACDACE", "#FFCBB8"]
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#111820"
            }
        },
        "opacity": {
            "value": .5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": .1,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": {
            "value": 6,
            "random": true
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "enable": true,
            "speed": .5,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "in",
            "attract": {
                "enable": true,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "push": {
                "particles_nb": 3
            }
        }
    },
    "retina_detect": false
};

particlesJS('space_bg', config);