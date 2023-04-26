import { useCallback, RefObject } from 'react'

type DOMRectProperty = keyof Omit<DOMRect, 'toJSON'>;

export const useGetElementProps = <T extends HTMLElement> (
    elementRef: RefObject<T>
) => {
    const getElementProps = useCallback(
        (targetProperty: DOMRectProperty): number => {
            const clientRect = elementRef.current?.getBoundingClientRect();
            if (clientRect) {
                return clientRect[targetProperty];
            }

            return 0;
        },
        [elementRef]
    );

    return {
        getElementProps,
    };
}