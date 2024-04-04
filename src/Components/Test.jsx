import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import the ScrollTrigger plugin

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Test = () => {
    const nickRef = useRef(null);

    useEffect(() => {
        // Scroll horizontally
        const container = nickRef.current;
        const elements = container.querySelectorAll('.nick > div');

        gsap.to(elements, {
            x: () => -(container.scrollWidth - window.innerWidth),
            ease: 'none',
            scrollTrigger: {
                trigger: container,
                start: 'top top',
                end: () => `+=${container.scrollWidth + window.innerWidth}`,
                scrub: true,
                pin: true, // Pin the nick section when it reaches the top
                pinSpacing: false, // Don't reserve space for pinned element
                onUpdate: (self) => {
                    // Check if the fourth div of nick class is at the left edge
                    const fourthDiv = elements[3];
                    if (fourthDiv.getBoundingClientRect().left <= 0) {
                        self.disable(); // Remove sticky behavior
                    }
                },
            },
        });
    }, []);

    return (
        <>
            <div className="w-screen h-screen bg-teal-600"></div>
            <div className='nick overflow-x-auto whitespace-no-wrap' ref={nickRef} style={{ whiteSpace: 'nowrap' }}>
                <div className="w-screen h-screen bg-red-500 inline-block"></div>
                <div className="w-screen h-screen bg-blue-500 inline-block"></div>
                <div className="w-screen h-screen bg-green-500 inline-block"></div>
                <div className="w-screen h-screen bg-orange-500 inline-block"></div>
            </div>
            <div className="w-screen h-screen bg-pink-600"></div>
        </>
    );
};

export default Test;
