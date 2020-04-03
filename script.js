window.onload = function() {
    // get the canvas context
    var canvas = document.getElementById("sky");
    var ctx = canvas.getContext("2d");

    // set canvas dimentions to window height and width
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    // generate the snowflakes and applay attributes

    let maximumFlakes = 100;
    let flakes = [];

    // loop throgh the empty flakes array and applay attributes
    for (let index = 0; index < maximumFlakes; index++) {
        const flake = flakes[index];
        flakes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            r: Math.random() * 5 + 2, //between 2px and 7px
            d: Math.random() * 1, //density of the flake
        });
    }

    // draw flakes onto canvas
    function drawFlakes(){
        //clear the rectangle
        ctx.clearRect(0,0,width,height);
        ctx.fillStyle = "white";
        ctx.beginPath();

        for (let index = 0; index < maximumFlakes; index++) {
            const flake = flakes[index];
            
            ctx.moveTo(flake.x, flake.y);
            ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI*2, true);
        }

        ctx.fill();
        moveFlakes();
    }

    // animate the flakes
    let angle = 0;

    function moveFlakes() {

        angle += 0.01;
        for (let index = 0; index < maximumFlakes; index++) {
            // store current flakes
            const flake = flakes[index];

            // update X and Y coordinates of each snowflake
            flake.y += Math.pow(flake.d, 2) * 1;
            flake.x += Math.sin(angle) * 2;

            // if the snowflake reaches the bottom, send a new 
            // one to the top
            if (flake.y > height) {
                flakes[index] = { 
                    x: Math.random() * width,
                    y: 0, r: flake.r, d: flake.d 
                };
            }
        }
    }

    setInterval(drawFlakes, 25);
}   