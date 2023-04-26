import { RefObject, useEffect } from 'react'

export const intersectionObserver = (
    refs: RefObject<HTMLElement>[],
    callback: (entities: IntersectionObserverEntry[]) => void,
    options?: IntersectionObserverInit
): void => {

    // 使い方 => 呼び出し元で↓をやる
    // const showElements = (entries: IntersectionObserverEntry[]) => {
    //     entries.forEach((entry) => {
    //         if (entry.isIntersecting) {
    //             entry.target.classList.add(styles.active)
    //         } else {
    //             entry.target.classList.remove(styles.active)
    //         }
    //     })
    // }
    // const showFromLeftElements = (entries: IntersectionObserverEntry[]) => {
    //     entries.forEach((entry) => {
    //         if (entry.isIntersecting) {
    //             entry.target.classList.add(styles.active_from_left)
    //         } else {
    //             entry.target.classList.remove(styles.active_from_left)
    //         }
    //     })
    // }
    // const ref1 = useRef<HTMLHeadingElement>(null)
    // const ref2 = useRef<HTMLHeadingElement>(null)
    // const ref3 = useRef<HTMLHeadingElement>(null)
    // const options1 = {
    //     rootMargin: '50px',
    //     // threshold: 0.4
    // }
    // intersectionObserver([ref1, ref2, ref3], showElements, options1)

    useEffect(() => {
        const observer = new IntersectionObserver(callback, options)

        refs.forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current)
            }
        })

        return () => {
            refs.forEach((ref) => {
                if (ref.current) {
                    observer.unobserve(ref.current)
                }
            })
        }
    })
}