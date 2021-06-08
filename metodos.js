console.log('-------------- Cálculo Númerico ---------------');


Euler();
RungeKutta();
trapezio();

function Euler() {
    console.log('<< Euler >>');
    x0 = 2;
    y0 = 2;
    n = 10;
    I = [0, 1];
    h = (I[1] - I[0]) / n;
    

    for (var i = 0; i < n; i++) {
        var yk = y0 + h*f(x0, y0);
        console.log("y" + (i+1) + " = " + yk );
        y0 = yk;
        x0 = x0 + h;
    }
}

/** Define a EDO*/
function f(x, y) {
    w = x - y / x;
    return w;
}

function RungeKutta() {
    console.log("");
    console.log('<< RungeKutta >>');
    x0 = 2;
    y0 = 2;
    a = 0;
    b = 1;
    n = 10;
    h = (b-a) / n;
    xi = [x0];
    yi = [y0];

    for (var i = 0; i < n; i++) {
        k1 = f(x0, y0);
        k2 = f(x0 + h, y0 + h*k1);
        yk = y0 + 0.5*(k1 + k2)*h;
        x0 = x0 + h;
        y0 = yk;
        console.log("(" + x0.toFixed(1) + " , " + y0.toFixed(2) + ")");
        xi.push(x0.toFixed(1));
        yi.push(y0.toFixed(2));
    }
}

/** Define a EDO Runge-Kutta*/
function fRungeKutta(x, y) {
    return y*Math.cos(x);
}

function trapezio() {
    console.log('');
    console.log('<< Regra dos Trapezios >>');
    console.log('>> 2*x - Math.exp(x) <<');
    x0 = 0;
    xM = 2;
    h = 0.01;
    integral = 0;
    x = x0;
    integral += fTrapezio(x);
    x += h;
    while (x < xM) {
        integral += 2* fTrapezio(x);
        x += h;
    }
    x = xM;
    integral += fTrapezio(x);
    integral *= (h / 2);
    console.log('Integral: ', integral);
} 

function fTrapezio(x) {
    return 2*x - Math.exp(x);
}

