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
          'w-full rounded-full border-2 border-white py-3 pl-9 text-xl placeholder:font-semibold',
          props.className,
        )}
      />
    </div>
  );
});

export default Input;
Input.displayName = 'Input';
