import React, { Component } from 'react';
import { PerspectiveCamera, SpriteMaterial, Scene, Sprite, Stats, CanvasRendere, WebGLRenderer } from 'three';

export default class WavesAnimation extends Component {
    SEPARATION = 120;
    AMOUNTX = 300;
    AMOUNTY = 70;

    container;
    stats;
    camera;
    scene;
    renderer;
    particles;
    particle;
    count = 0;

    mouseX = 0
    mouseY = 0;

    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;


    componentDidMount() {
        let animate = () => {

            console.log('this is')
            let x = this;

            requestAnimationFrame(animate);

            this.render();

        }
        this.init();
        animate();
        console.log(Sprite);
        requestAnimationFrame.bind(this)
    }

    init() {

        this.container = document.getElementById('waves');
        console.log(this.container)

        this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.z = 10000;

        this.scene = new Scene();

        this.particles = new Array();

        var PI2 = Math.PI * 2;
        var material = new SpriteMaterial({

            color: 0xffffff,
            program: function (context) {

                context.beginPath();
                context.arc(0.9, 0, 0.5, 0, PI2, true);
                context.fill();

            }

        });

        var i = 0;

        for (var ix = 0; ix < this.AMOUNTX; ix++) {

            for (var iy = 0; iy < this.AMOUNTY; iy++) {

                this.particle = this.particles[i++] = new Sprite(material);
                this.particle.position.x = ix * this.SEPARATION - ((this.AMOUNTX * this.SEPARATION) / 2);
                this.particle.position.z = iy * this.SEPARATION - ((this.AMOUNTY * this.SEPARATION) / 2);
                this.scene.add(this.particle);

            }

        }

        this.renderer = new WebGLRenderer();
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.container.appendChild(this.renderer.domElement);





        //

        window.addEventListener('resize', this.onWindowResize, false);

    }

    onWindowResize() {

        this.windowHalfX = window.innerWidth / 2;
        this.windowHalfY = window.innerHeight / 2;

        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(window.innerWidth, window.innerHeight);

    }

    //

    //

    animate() {
        console.log('this is')
        let x = this;

        requestAnimationFrame(this.animate);

        this.render();
        ;

    }

    render() {


        this.camera.position.set(0, 355, 122);

        var i = 0;

        for (var ix = 0; ix < this.AMOUNTX; ix++) {

            for (var iy = 0; iy < this.AMOUNTY; iy++) {

                this.particle = this.particles[i++];
                this.particle.position.y = (Math.sin((ix + this.count) * 0.3) * 50) +
                    (Math.sin((iy + this.count) * 0.5) * 50);
                this.particle.scale.x = this.particle.scale.y = (Math.sin((ix + this.count) * 0.3) + 1) * 4 +
                    (Math.sin((iy + this.count) * 0.5) + 1) * 4;

            }

        }

        this.renderer.render(this.scene, this.camera);

        this.count += 0.1;

    }


    render() {
        return (
            <div id='waves'>

            </div>
        )
    }
}
