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
        wings: false,
        windmill: false,
        trees: [
            {
                rotation: 0,
                modif: 1,
            },
        ],
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
            this.trees = [
                {
                    rotation: 0,
                    modif: 1,
                },
            ];
        },
        reset() {
            this.Yoffset = this.maxHeight() * 0.8;
            this.Xoffset = 0;
            this.angle = 0.04;
            this.stepSize = 10;
            this.trees = [
                {
                    rotation: 0,
                    modif: 1,
                },
            ];
        },
        applyWings() {
            this.Yoffset = this.maxHeight() * 0.7;
            this.Xoffset = this.maxWidth() / 2;
            this.angle = 0.06;
            this.stepSize = 5;
            this.trees = [
                {
                    rotation: 0,
                    modif: 1,
                },
                {
                    rotation: PI,
                    modif: -1,
                },
            ];
        },
        applyBrain() {
            this.Yoffset = this.maxHeight() / 2;
            this.Xoffset = this.maxWidth() / 2;
            this.angle = 0.3;
            this.stepSize = 3;
            this.trees = [
                {
                    rotation: 0,
                    modif: 1,
                },
                {
                    rotation: PI,
                    modif: -1,
                },
            ];
        },
        applyWindmill() {
            this.Yoffset = this.maxHeight() / 2;
            this.Xoffset = this.maxWidth() / 2;
            this.angle = 0.07;
            this.stepSize = 3;
            this.trees = [
                {
                    rotation: 0,
                    modif: 1,
                },
                {
                    rotation: PI / 2,
                    modif: 1,
                },
                {
                    rotation: PI,
                    modif: 1,
                },
                {
                    rotation: (3 * PI) / 2,
                    modif: 1,
                },
            ];
        },
        applyButterfly() {
            this.Yoffset = this.maxHeight() / 2;
            this.Xoffset = this.maxWidth() / 2;
            this.angle = 0.07;
            this.stepSize = 3;
            this.trees = [
                {
                    rotation: -(1 * PI) / 4 + PI / 4,
                    modif: -1,
                },
                {
                    rotation: (1 * PI) / 4 + PI / 4,
                    modif: 1,
                },
                {
                    rotation: (1 * PI) / 4 + PI / 4,
                    modif: -1,
                },
                {
                    rotation: (3 * PI) / 4 + PI / 4,
                    modif: 1,
                },
                {
                    rotation: (3 * PI) / 4 + PI / 4,
                    modif: -1,
                },
                {
                    rotation: (5 * PI) / 4 + PI / 4,
                    modif: 1,
                },
                {
                    rotation: (5 * PI) / 4 + PI / 4,
                    modif: -1,
                },
                {
                    rotation: (7 * PI) / 4 + PI / 4,
                    modif: 1,
                },
            ];
        },
        applyFlower() {
            this.Yoffset = this.maxHeight() / 2;
            this.Xoffset = this.maxWidth() / 2;
            this.angle = 0.08;
            this.stepSize = 3;
            this.trees = [
                {
                    rotation: -(1 * PI) / 4,
                    modif: -1,
                },
                {
                    rotation: (1 * PI) / 4,
                    modif: 1,
                },
                {
                    rotation: (1 * PI) / 4,
                    modif: -1,
                },
                {
                    rotation: (3 * PI) / 4,
                    modif: 1,
                },
                {
                    rotation: (3 * PI) / 4,
                    modif: -1,
                },
                {
                    rotation: (5 * PI) / 4,
                    modif: 1,
                },
                {
                    rotation: (5 * PI) / 4,
                    modif: -1,
                },
                {
                    rotation: (7 * PI) / 4,
                    modif: 1,
                },
                {
                    rotation: -(1 * PI) / 4 + PI / 4,
                    modif: -1,
                },
                {
                    rotation: (1 * PI) / 4 + PI / 4,
                    modif: 1,
                },
                {
                    rotation: (1 * PI) / 4 + PI / 4,
                    modif: -1,
                },
                {
                    rotation: (3 * PI) / 4 + PI / 4,
                    modif: 1,
                },
                {
                    rotation: (3 * PI) / 4 + PI / 4,
                    modif: -1,
                },
                {
                    rotation: (5 * PI) / 4 + PI / 4,
                    modif: 1,
                },
                {
                    rotation: (5 * PI) / 4 + PI / 4,
                    modif: -1,
                },
                {
                    rotation: (7 * PI) / 4 + PI / 4,
                    modif: 1,
                },
            ];
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
    background(0);
    colorMode(HSB, 100);
    strokeWeight(2);
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
    let data = calcCollatz(n);

    for (const tree of vue.trees) {
        let c = 1;
        resetMatrix();
        translate(vue.Xoffset, vue.Yoffset);
        rotate(tree.rotation);
        for (const d of data) {
            let p = (c / data.length) * 100;
            stroke(p, 100, 100, 100 - p);
            c++;
            if (d % 2 == 0) {
                rotate(tree.modif * vue.angle);
            } else {
                rotate(-tree.modif * vue.angle);
            }
            line(0, 0, vue.stepSize, 0);
            translate(vue.stepSize, 0);
        }
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
