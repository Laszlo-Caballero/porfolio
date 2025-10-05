'use client';
import { cx } from 'class-variance-authority';
import React, { forwardRef, useId } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ containerClassName, ...props }, ref) => {
  const id = useId();

  return (
    <div className={cx('relative', containerClassName)}>
      <input
        ref={ref}
        id={id}
        {...props}
        className={cx(
          'border-primary-gray-2 p-xl:py-3 w-full rounded-full border-2 px-[15px] py-1.5 text-sm placeholder:font-semibold placeholder:text-white',
          props.className,
        )}
      />
    </div>
  );
});

export default Input;
Input.displayName = 'Input';
