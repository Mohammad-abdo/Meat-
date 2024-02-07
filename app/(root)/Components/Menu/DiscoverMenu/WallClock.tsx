
import React, { useEffect } from 'react';
import './cloock.css';

const CustomClock = () => {
    useEffect(() => {
        const requestAnimationFrame = window.requestAnimationFrame || 
                                      window.requestAnimationFrame || 
                                      window.requestAnimationFrame || 
                                      function(callback) {
                                          window.setTimeout(callback, 1000 / 60);
                                      };

        //initialize the clock
        (function clock() { 
            const hour = document.getElementById("hour")!;
            const min = document.getElementById("min")!;
            const sec = document.getElementById("sec")!;

            //set up a loop
            (function loop(){
                requestAnimationFrame(loop);
                draw();
            })();

            //position the hands
            function draw() {
                const now = new Date(); //current time
                const then = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0); //midnight
                const diffInMil = now.getTime() - then.getTime(); // difference in milliseconds
                const h = diffInMil / (1000 * 60 * 60); //hours
                const m = h * 60; //minutes
                const s = m * 60; //seconds

                //rotate the hands accordingly
                sec.style.transform = "rotate(" + (s * 6) + "deg)";
                hour.style.transform = "rotate(" + (h * 30 + (h / 2)) + "deg)";
                min.style.transform = "rotate(" + (m * 6) + "deg)";
            } 
        })();
    }, []);

    return (
        <div className="icon-large icon-clock">
            <div className="clock">
                <ol>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ol>
                <div id="hour"></div>
                <div id="min"></div>
                <div id="sec"></div>
            </div>
        </div>
    );
};

export default CustomClock;

