import { ReactNode } from 'react'
import { useInView } from 'react-intersection-observer';

interface Props {
    children: ReactNode;
}

export default function FadeIn({ children, ...props }: Props) {
    const { ref, inView } = useInView({
        // initialInView: true,
        triggerOnce: true,
        rootMargin: '600px 0px',
        // threshold: 0.3
    })

    return (
        <div
            ref={ref}
            className={`${inView ? "opacity-100" : "opacity-0 translate-y-[50%]"} duration-[1s]`}
        >
            {children}
        </div>
    )
}
