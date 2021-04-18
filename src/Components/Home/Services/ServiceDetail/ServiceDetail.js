import React from 'react';
import '../Service.css';
import { useSpring, animated } from 'react-spring';
import ServiceLink from '../ServiceLink/ServiceLink';


const calc = (x, y) => [-(y - window.innerHeight / 2) / 25, (x - window.innerWidth / 2) / 25, 1.03];
const trans = (x, y, s) => `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ServiceDetail = ({service}) => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 200, friction: 20 } }));

    return (
        <animated.div
            className="animation-card bg-light col-md-3 card mx-3 my-3"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.to(trans) }}
            
        >
            <ServiceLink service={service}></ServiceLink>
        </animated.div>
    );
};

export default ServiceDetail;