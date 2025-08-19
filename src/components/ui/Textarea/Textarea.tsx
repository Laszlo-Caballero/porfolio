import { cx } from 'class-variance-authority';
import React, { forwardRef } from 'react';

const Textarea = forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  (props, ref) => {
    return (
      <textarea
        ref={ref}
        {...props}
        className={cx(
          'w-full resize-none rounded-lg border-2 border-white py-3 pl-9 text-xl placeholder:font-semibold',
          props.className,
        )}
      />
    );
  },
);

export default Textarea;
