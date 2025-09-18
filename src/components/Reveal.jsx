import React, { useEffect, useRef, useState } from "react";


const Reveal = ({ children, direction = "left", delay = 0, className = "", baseDelay = 1000 }) => {
   const ref = useRef(null);
   const [visible, setVisible] = useState(false);

   useEffect(() => {
     const el = ref.current;
     if (!el) return;
     const observer = new IntersectionObserver(
       (entries) => {
         entries.forEach((entry) => {
           if (entry.isIntersecting) {
             setVisible(true);
             observer.unobserve(entry.target);
           }
         });
       },
       { threshold: 0.15 }
     );
     observer.observe(el);
     return () => observer.disconnect();
   }, []);

   const initial = direction === "right" ? "translate-x-12" : direction === "up" ? "translate-y-8" : "-translate-x-12";
+  const finalDelay = (baseDelay || 0) + (delay || 0);
 
   return (
     <div
       ref={ref}
       className={`transition-all duration-700 ease-out will-change-transform ${
         visible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${initial}`
       } ${className}`}
-      style={{ transitionDelay: `${delay}ms` }}
+      style={{ transitionDelay: `${finalDelay}ms` }}
     >
       {children}
     </div>
   );
 };

 export default Reveal;
