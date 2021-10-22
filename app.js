// Init vue
let vue = new Vue({
    el: "#app",
    vuetify: new Vuetify({
        theme: {
            themes: {
                light: {
                    primary: "#000080",
                    secondary: "#d1b83d",
                    tertiary: "#c9720e",
                    grey: "#faf7f7",
                    accent: "#3557bd",
                },
                dark: {
                    primary: "#000080",
                    grey: "#292828",
                },
            },
        },
    }),
    data: () => ({
        angle: 0.04,
        Yoffset: 200,
        Xoffset: 0,
        stepSize: 10,
    }),
    watch: {
        angle() {
            background(0);
        },
        Yoffset() {
            background(0);
        },
        Xoffset() {
            background(0);
        },
        stepSize() {
            background(0);
        },
    },

    methods: {
        maxHeight() {
            return document.getElementById("container").offsetHeight * 0.9;
        },
        maxWidth() {
            return document.getElementById("col").offsetWidth;
        },
        center() {
            this.Yoffset = this.maxHeight() / 2;
            this.Xoffset = this.maxWidth() / 2;
            this.angle = 0.5;
            this.stepSize = 10;
        },
        reset() {
            this.Yoffset = this.maxHeight() * 0.8;
            this.Xoffset = 0;
            this.angle = 0.04;
            this.stepSize = 10;
        },
    },
    mounted: function () {
        this.$nextTick(function () {
            this.Yoffset = this.maxHeight() * 0.8;
        });
    },
});

let w = vue.maxWidth();
let h = vue.maxHeight();

let start = 1;
let end = 50000;
let step = Math.floor(Math.random() * 500);

function setup() {
    cnv = createCanvas(w, h);
    cnv.parent("sketch-holder");
    // angleMode(DEGREES);
    background(0);
    colorMode(HSB, 100);

    strokeWeight(2);

    // for (let i = 1; i < 50000; i += 300) {
    //     drawCollatz(i);
    // }

    // drawCollatz(871)
}

function draw() {
    drawCollatz(start);
    start += step;
    if (start > end) {
        start = 1;
        step = Math.floor(Math.random() * 500);
    }
}

function drawCollatz(n) {
    resetMatrix();
    translate(vue.Xoffset, vue.Yoffset);
    let data = calcCollatz(n);
    let c = 1;

    for (const d of data) {
        let p = (c / data.length) * 100;
        stroke(p, 100, 100, 100 - p);
        c++;
        if (d % 2 == 0) {
            rotate(vue.angle);
        } else {
            rotate(-vue.angle);
        }
        line(0, 0, vue.stepSize, 0);
        translate(vue.stepSize, 0);
    }
}

function collatz(n) {
    if (n % 2 == 0) {
        return n / 2;
    } else {
        return (3 * n + 1) / 2;
    }
}

function calcCollatz(n) {
    let seq = [];
    do {
        seq.push(n);
        n = collatz(n);
    } while (n != 1);
    seq.push(1);
    return seq;
}
