import { cx } from 'class-variance-authority';
import React, { forwardRef } from 'react';

const Textarea = forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  (props, ref) => {
    return (
      <textarea
        ref={ref}
        {...props}
        className={cx(
          'border-primary-gray-2 w-full resize-none rounded-lg border-2 px-[15px] py-3 text-sm placeholder:font-semibold placeholder:text-white',
          props.className,
        )}
      />
    );
  },
);

export default Textarea;
Textarea.displayName = 'Textarea';
