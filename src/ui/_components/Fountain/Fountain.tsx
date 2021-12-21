import { FOUNTAIN_ANIMATION_ID } from 'configuration/constants/styles.constants';

import { FountainUtils } from './_tools/Utils/FountainUtils';

import type { Particle } from './@types/Fountain.types';

const { validateEventPosition } = FountainUtils;

export class Fountain {
  autoAddParticle: boolean;
  height: number;
  limit: number;
  mouseX: number;
  mouseY: number;
  particles: Particle[];
  rect?: DOMRect;
  sizes: number[];
  variants: string[];

  constructor() {
    this.limit = 7;
    this.particles = [];
    this.autoAddParticle = false;
    this.height = document.documentElement.clientHeight;
    this.sizes = [15, 20, 25, 35, 45];
    this.mouseX = 0;
    this.mouseY = 0;
    this.variants = ['😋', '❤', '😎', '😍', '🙂', '🤣'];
    this.addHandlers();
    this.loop();
    this.rect = document?.getElementById(FOUNTAIN_ANIMATION_ID)?.getBoundingClientRect();
  }

  loop() {
    if (validateEventPosition(this.mouseX, this.mouseY, this.rect) && this.autoAddParticle && this.particles.length < this.limit) {
      this.createParticle();
    }

    this.updateParticles();

    requestAnimationFrame(this.loop.bind(this));
  }

  addHandlers() {
    const isTouchInteraction = 'ontouchstart' in window || navigator.maxTouchPoints;

    const move = isTouchInteraction ? 'touchmove' : 'mousemove';
    const tap = isTouchInteraction ? 'touchstart' : 'mousedown';
    const tapCancel = isTouchInteraction ? 'touchcancel' : 'contextmenu';
    const tapEnd = isTouchInteraction ? 'touchend' : 'mouseup';

    document?.getElementById(FOUNTAIN_ANIMATION_ID)?.addEventListener(
      move,
      event => {
        this.mouseX = event instanceof MouseEvent ? event.pageX : event.touches[0].pageX;
        this.mouseY = event instanceof MouseEvent ? event.pageY : event.touches[0].pageY;
      },
      { passive: false }
    );

    document?.getElementById(FOUNTAIN_ANIMATION_ID)?.addEventListener(tap, (event: MouseEvent | TouchEvent) => {
      this.mouseX = event instanceof MouseEvent ? event.pageX : event.touches[0].pageX;
      this.mouseY = event instanceof MouseEvent ? event.pageY : event.touches[0].pageY;
      this.autoAddParticle = true;
    });

    document.addEventListener(tapCancel, () => {
      this.autoAddParticle = false;
    });

    document.addEventListener(tapEnd, () => {
      this.autoAddParticle = false;
    });

    document.addEventListener('mouseleave', () => {
      this.autoAddParticle = false;
    });
  }

  createParticle() {
    const size = this.sizes[Math.floor(Math.random() * this.sizes.length)];
    const speedHorz = Math.random() * 7;
    const speedUp = Math.random() * 25;
    const spinVal = Math.random() * 360;
    const spinSpeed = Math.random() * 25 * (Math.random() <= 0.5 ? -1 : 1);
    const top = this.mouseY - size;
    const left = this.mouseX - size;
    const direction = Math.random() <= 0.5 ? -1 : 1;

    const particle = document.createElement('span');
    particle.innerHTML = this.variants[Math.floor(Math.random() * this.variants.length)];
    particle.classList.add('particle');

    particle.setAttribute(
      'style',
      `
      -webkit-user-select: none;
      font-size: ${size}px;
      left: ${left}px;
      pointer-events: none;
      position: fixed;
      top: ${top}px;
      overflow: hidden;
      transform: rotate(${spinVal}deg);
    `
    );

    document?.documentElement?.appendChild(particle);

    this.particles.push({ direction, element: particle, left, size, speedHorz, speedUp, spinSpeed, spinVal, top });
  }

  updateParticles() {
    this.particles.forEach(particle => {
      particle.left = particle.left - particle.speedHorz * particle.direction;
      particle.top = particle.top - particle.speedUp;
      particle.speedUp = Math.min(particle.size, particle.speedUp - 1);
      particle.spinVal = particle.spinVal + particle.spinSpeed;

      if (particle.top > this.height - particle.size) {
        this.particles = this.particles.filter(o => o !== particle);
        particle.element.remove();
      }

      particle.element.setAttribute(
        'style',
        `
        -webkit-user-select: none;
        font-size: ${particle.size}px;
        left: ${particle.left}px;
        pointer-events: none;
        position: fixed;
        top: ${particle.top}px;
        transform: rotate(${particle.spinVal}deg);
      `
      );
    });
  }
}
