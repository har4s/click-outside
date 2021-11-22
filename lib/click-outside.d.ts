import React, { MouseEvent } from 'react';
interface ClickOutsideProps {
    active?: boolean;
    onClick: (e?: MouseEvent) => void;
    children: any;
}
declare const ClickOutside: ({ active, onClick, children, }: ClickOutsideProps) => React.FunctionComponentElement<{
    ref: React.MutableRefObject<undefined>;
}>;
export default ClickOutside;
